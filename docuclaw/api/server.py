"""FastAPI Server for DocuClaw API and Webhooks."""

from __future__ import annotations

import logging
import os
import shutil
from pathlib import Path
from typing import Any

from fastapi import FastAPI, File, Form, HTTPException, UploadFile
from pydantic import BaseModel

from docuclaw.core.storage import MarkdownStorageEngine
from docuclaw.parsers.de_invoice_parser import DEInvoiceParser
from docuclaw.schema import EntityType

logger = logging.getLogger(__name__)

app = FastAPI(
    title="DocuClaw API",
    description="Webhook and API ingestion endpoints for DocuClaw.",
    version="0.1.0",
)

STORAGE_PATH = os.environ.get("DOCUCLAW_DATA_DIR", "./docuclaw_data")
storage = MarkdownStorageEngine(base_path=STORAGE_PATH)
parser = DEInvoiceParser()  # For demonstration, we use the DE parser.


class IngestionResponse(BaseModel):
    """Response returned upon successful document ingestion."""

    status: str
    document_id: str
    message: str


@app.post("/api/v1/ingest", response_model=IngestionResponse)
async def ingest_document(
    file: UploadFile = File(...),  # noqa: B008
    entity_id: str = Form(...),
    entity_type: EntityType = Form(EntityType.COMPANY),  # noqa: B008
) -> IngestionResponse:
    """Ingest a physical or digital document via API upload.

    Parameters
    ----------
    file: UploadFile
        The document image or PDF file.
    entity_id: str
        Target entity identifier (e.g. org_acme_01).
    entity_type: EntityType
        Type of entity (company, personal, team).
    """
    if not file.filename:
        raise HTTPException(status_code=400, detail="No file uploaded.")

    temp_path = Path(f"/tmp/{file.filename}")
    try:
        with open(temp_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        # Parse the document (simulated multimodal extraction)
        document = parser.parse(
            file_path=temp_path,
            entity_id=entity_id,
            entity_type=entity_type,
            source_type="api",
        )

        # Save to storage (creates audit log automatically)
        storage.save(document)

    except Exception as exc:
        logger.error("Failed to ingest document: %s", exc)
        raise HTTPException(status_code=500, detail=str(exc)) from exc
    finally:
        if temp_path.exists():
            temp_path.unlink()

    return IngestionResponse(
        status="success",
        document_id=document.id,
        message="Document successfully ingested and archived.",
    )


@app.post("/webhooks/stripe", response_model=IngestionResponse)
async def stripe_webhook(
    # In a real implementation this would validate the Stripe signature
    payload: dict[str, Any],
) -> IngestionResponse:
    """Example webhook endpoint (e.g., for Stripe invoices)."""
    # Demonstration stub: here you would map the Stripe Invoice object
    # directly to a DocuClawDocument and save it.
    raise HTTPException(status_code=501, detail="Webhook mapping not yet implemented.")
