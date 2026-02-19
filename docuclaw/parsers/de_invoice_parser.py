"""German Invoice Parser — Plugin for DE B2B/B2C invoice extraction.

This parser handles German invoices and official letters. It extracts
structured data such as VAT IDs (Umsatzsteuer-Identifikationsnummer),
amounts, tax breakdowns, sender information, and due dates.

In production, this parser would delegate heavy lifting to a multimodal
LLM (e.g. GPT-4V, Gemini, or a local Ollama model) for OCR and
intelligent field extraction. For Milestone 1, the LLM call is replaced
with a deterministic mock to demonstrate the pipeline.

GoBD Compliance Notes
---------------------
- The raw OCR text is preserved verbatim in ``raw_content`` for audit purposes.
- The original scan file path is recorded in ``attachments``.
- Document IDs are immutable once assigned.
"""

from __future__ import annotations

import logging
import re
from datetime import date
from decimal import Decimal
from pathlib import Path
from typing import Any

from docuclaw.parsers.base import BaseDocumentParser, ParseError
from docuclaw.schema import (
    DocuClawDocument,
    DocumentStatus,
    DocumentType,
    EntityType,
    SourceType,
)

logger = logging.getLogger(__name__)


# ──────────────────────────────────────────────────────────────────────────────
# Mock LLM Response (will be replaced by real LLM integration in Milestone 3)
# ──────────────────────────────────────────────────────────────────────────────


def _mock_llm_extract(file_path: Path) -> dict[str, Any]:
    """Simulate a multimodal LLM extracting structured data from a scan.

    In production, this function would:
      1. Send the image/PDF to a vision-capable LLM.
      2. Receive structured JSON with extracted fields.
      3. Apply confidence-based validation.

    For now, it returns realistic mock data for demonstration.
    """
    logger.info("🤖 [MOCK LLM] Extracting data from: %s", file_path.name)

    return {
        "sender_name": "Amazon Web Services EMEA SARL",
        "sender_address": "38 Avenue John F. Kennedy, L-1855 Luxembourg",
        "tax_id_vat": "LU26375245",
        "invoice_number": "INV-2026-DE-0042",
        "amount_net": "105.46",
        "amount_tax": "20.04",
        "amount_total": "125.50",
        "currency": "EUR",
        "due_date": "2026-03-01",
        "document_type": "b2b_invoice",
        "raw_text": (
            "Amazon Web Services EMEA SARL\n"
            "38 Avenue John F. Kennedy, L-1855 Luxembourg\n"
            "USt-IdNr.: LU26375245\n\n"
            "Rechnung Nr.: INV-2026-DE-0042\n"
            "Rechnungsdatum: 15.02.2026\n"
            "Fälligkeitsdatum: 01.03.2026\n\n"
            "Beschreibung                    Netto       MwSt.    Brutto\n"
            "AWS EC2 Compute (Feb 2026)     85.00 €     16.15 €  101.15 €\n"
            "AWS S3 Storage  (Feb 2026)     20.46 €      3.89 €   24.35 €\n"
            "──────────────────────────────────────────────────────────\n"
            "Gesamt                        105.46 €     20.04 €  125.50 €\n"
        ),
        "ai_summary": (
            "Dies ist die AWS-Rechnung für Februar 2026. "
            "Gesamtbetrag: 125,50 € (inkl. 20,04 € Vorsteuer). "
            "Die Rechnung muss bis zum 01.03.2026 beglichen werden. "
            "Empfehlung: Vorsteuerabzug prüfen und dem Kostenzentrum 'Engineering' zuordnen."
        ),
    }


# ──────────────────────────────────────────────────────────────────────────────
# Parser Implementation
# ──────────────────────────────────────────────────────────────────────────────


class DEInvoiceParser(BaseDocumentParser):
    """Parser for German invoices and business correspondence.

    Supports B2B and B2C invoices originating from or addressed to
    German entities. Extracts VAT IDs, net/gross/tax amounts, due
    dates, and generates actionable AI summaries.
    """

    # ── Capabilities ─────────────────────────────────────────────────────────

    @property
    def parser_name(self) -> str:
        return "German Invoice Parser (DE)"

    @property
    def supported_countries(self) -> list[str]:
        return ["DE"]

    @property
    def supported_document_types(self) -> list[str]:
        return ["invoice", "b2b_invoice", "b2c_invoice", "receipt"]

    # ── Core Logic ───────────────────────────────────────────────────────────

    def parse(
        self,
        file_path: str | Path,
        entity_id: str,
        entity_type: EntityType,
        *,
        country: str | None = None,
        source_type: str | None = None,
        metadata: dict[str, Any] | None = None,
    ) -> DocuClawDocument:
        """Parse a German invoice scan into a structured document.

        Parameters
        ----------
        file_path:
            Path to the invoice image or PDF.
        entity_id:
            Owning entity identifier.
        entity_type:
            Entity classification.
        country:
            Defaults to ``"DE"`` if not provided.
        source_type:
            Ingestion channel. Defaults to ``"physical_mail"``.
        metadata:
            Extra metadata (e.g. cost_center, tags).

        Returns
        -------
        DocuClawDocument
            Validated document with extracted data.

        Raises
        ------
        ParseError
            If the extraction pipeline fails.
        """
        resolved_path = Path(file_path).resolve()
        self.pre_validate(resolved_path)

        logger.info("Parsing German invoice: %s", resolved_path.name)

        # ── Step 1: Call extraction engine (mocked for M1) ───────────────────
        try:
            extracted = _mock_llm_extract(resolved_path)
        except Exception as exc:
            raise ParseError(f"LLM extraction failed for {resolved_path.name}: {exc}") from exc

        # ── Step 2: Post-process & validate extracted fields ─────────────────
        resolved_country = (country or "DE").upper()
        resolved_source = source_type or SourceType.PHYSICAL_MAIL.value

        vat_id = extracted.get("tax_id_vat")
        if vat_id:
            vat_id = self._normalize_vat_id(vat_id)

        doc_type_str = extracted.get("document_type", "invoice")
        try:
            doc_type = DocumentType(doc_type_str)
        except ValueError:
            doc_type = DocumentType.INVOICE

        extra = metadata or {}

        # ── Step 3: Construct the validated document ─────────────────────────
        try:
            document = DocuClawDocument(
                entity_id=entity_id,
                entity_type=entity_type,
                source_type=SourceType(resolved_source),
                country=resolved_country,
                document_type=doc_type,
                date_received=date.today(),
                sender_name=extracted.get("sender_name", "Unknown Sender"),
                sender_address=extracted.get("sender_address"),
                tax_id_vat=vat_id,
                invoice_number=extracted.get("invoice_number"),
                amount_total=self._to_decimal(extracted.get("amount_total")),
                amount_net=self._to_decimal(extracted.get("amount_net")),
                amount_tax=self._to_decimal(extracted.get("amount_tax")),
                currency=extracted.get("currency", "EUR"),
                due_date=(
                    date.fromisoformat(extracted["due_date"]) if extracted.get("due_date") else None
                ),
                cost_center=extra.get("cost_center"),
                status=DocumentStatus.PENDING,
                tags=extra.get("tags", []),
                attachments=[str(resolved_path)],
                raw_content=extracted.get("raw_text"),
                ai_summary=extracted.get("ai_summary"),
            )
        except Exception as exc:
            raise ParseError(f"Failed to construct document from extracted data: {exc}") from exc

        logger.info(
            "✅ Successfully parsed: %s | Sender: %s | Total: %s %s",
            document.id,
            document.sender_name,
            document.amount_total,
            document.currency,
        )

        return document

    # ── Utility Methods ──────────────────────────────────────────────────────

    @staticmethod
    def _normalize_vat_id(vat_id: str) -> str:
        """Normalize a European VAT ID by stripping whitespace and uppercasing.

        Examples::

            "lu 2637 5245" → "LU26375245"
            " DE123456789 " → "DE123456789"
        """
        return re.sub(r"\s+", "", vat_id).upper()

    @staticmethod
    def _to_decimal(value: Any) -> Decimal | None:
        """Safely convert a value to :class:`Decimal`, returning None on failure."""
        if value is None:
            return None
        try:
            return Decimal(str(value))
        except Exception:
            logger.warning("Could not convert to Decimal: %r", value)
            return None
