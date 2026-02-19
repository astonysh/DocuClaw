"""DocuClaw Unified Data Schema.

This module defines the **Enterprise Data Contract** — a single Pydantic model
that normalizes every document (B2C personal bills, B2B invoices, contracts,
HR files, tax notices ...) into a unified, type-safe structure.

The schema is designed to be:
  - **Universal**: works for both personal users and enterprise teams.
  - **Extensible**: optional fields gracefully degrade for simpler use-cases.
  - **Compliance-ready**: supports GoBD audit trails, VAT tracking, cost-centers.
  - **Serializable**: round-trips cleanly to YAML frontmatter + Markdown body.
"""

from __future__ import annotations

import uuid
from datetime import date, datetime
from decimal import Decimal
from enum import Enum

from pydantic import BaseModel, Field, field_validator

# ──────────────────────────────────────────────────────────────────────────────
# Enumerations
# ──────────────────────────────────────────────────────────────────────────────


class EntityType(str, Enum):
    """Type of the owning entity."""

    PERSONAL = "personal"
    COMPANY = "company"
    TEAM = "team"


class SourceType(str, Enum):
    """How the document entered the system."""

    PHYSICAL_MAIL = "physical_mail"
    EMAIL = "email"
    PHOTO = "photo"
    API = "api"
    WEBHOOK = "webhook"
    MANUAL = "manual"


class DocumentType(str, Enum):
    """Semantic classification of the document."""

    INVOICE = "invoice"
    B2B_INVOICE = "b2b_invoice"
    B2C_INVOICE = "b2c_invoice"
    RECEIPT = "receipt"
    CONTRACT = "contract"
    HR_DOCUMENT = "hr_document"
    TAX_NOTICE = "tax_notice"
    LETTER = "letter"
    BANK_STATEMENT = "bank_statement"
    UTILITY_BILL = "utility_bill"
    OTHER = "other"


class DocumentStatus(str, Enum):
    """Lifecycle status of the document."""

    PENDING = "pending"
    REVIEWED = "reviewed"
    RECONCILED = "reconciled"
    ARCHIVED = "archived"
    FLAGGED = "flagged"


# ──────────────────────────────────────────────────────────────────────────────
# Core Document Model
# ──────────────────────────────────────────────────────────────────────────────


def _generate_document_id() -> str:
    """Generate a deterministic-looking, collision-safe document ID.

    Format: ``doc_<YYYYMMDD>_<short-uuid>``
    """
    timestamp = datetime.utcnow().strftime("%Y%m%d")
    short_uuid = uuid.uuid4().hex[:12]
    return f"doc_{timestamp}_{short_uuid}"


class DocuClawDocument(BaseModel):
    """The universal document record — the *Enterprise Data Contract*.

    This model captures both lightweight personal documents (a scanned receipt)
    and full-blown enterprise records (a multi-page B2B invoice with VAT,
    cost-center allocation, and compliance metadata).

    Fields marked ``Optional`` gracefully degrade so that a personal user is
    never forced to fill in enterprise-only attributes.
    """

    # ── Identity ─────────────────────────────────────────────────────────────
    id: str = Field(
        default_factory=_generate_document_id,
        description="Unique document identifier (doc_<date>_<uuid>).",
    )
    entity_id: str = Field(
        ...,
        min_length=1,
        description="Owning entity identifier, e.g. 'org_acme_01' or 'personal_jane'.",
    )
    entity_type: EntityType = Field(
        ...,
        description="Whether this belongs to a person, company, or team.",
    )

    # ── Source & Classification ───────────────────────────────────────────────
    source_type: SourceType = Field(
        ...,
        description="How the document was ingested.",
    )
    country: str = Field(
        ...,
        min_length=2,
        max_length=2,
        description="ISO 3166-1 alpha-2 country code (e.g. 'DE', 'US', 'CN').",
    )
    document_type: DocumentType = Field(
        ...,
        description="Semantic type of the document.",
    )

    # ── Temporal ─────────────────────────────────────────────────────────────
    date_received: date = Field(
        ...,
        description="Date the document was received or scanned.",
    )
    due_date: date | None = Field(
        default=None,
        description="Payment or action due date, if applicable.",
    )

    # ── Sender / Counterparty ────────────────────────────────────────────────
    sender_name: str = Field(
        ...,
        min_length=1,
        description="Name of the sender or counterparty.",
    )
    sender_address: str | None = Field(
        default=None,
        description="Full postal address of the sender.",
    )

    # ── Financial ────────────────────────────────────────────────────────────
    amount_total: Decimal | None = Field(
        default=None,
        ge=0,
        description="Total amount (gross), if applicable.",
    )
    amount_net: Decimal | None = Field(
        default=None,
        ge=0,
        description="Net amount before tax, if applicable.",
    )
    amount_tax: Decimal | None = Field(
        default=None,
        ge=0,
        description="Tax amount (VAT / sales tax), if applicable.",
    )
    currency: str | None = Field(
        default=None,
        min_length=3,
        max_length=3,
        description="ISO 4217 currency code (e.g. 'EUR', 'USD').",
    )

    # ── Enterprise / Compliance (Optional) ───────────────────────────────────
    tax_id_vat: str | None = Field(
        default=None,
        description="VAT identification number of the sender.",
    )
    invoice_number: str | None = Field(
        default=None,
        description="Invoice or reference number on the document.",
    )
    cost_center: str | None = Field(
        default=None,
        description="Cost center or department allocation.",
    )
    purchase_order: str | None = Field(
        default=None,
        description="Associated purchase order number.",
    )

    # ── Organization ─────────────────────────────────────────────────────────
    status: DocumentStatus = Field(
        default=DocumentStatus.PENDING,
        description="Current lifecycle status.",
    )
    tags: list[str] = Field(
        default_factory=list,
        description="Freeform tags for categorization and search.",
    )
    attachments: list[str] = Field(
        default_factory=list,
        description="Relative paths to attachment files (scans, PDFs, etc.).",
    )
    notes: str | None = Field(
        default=None,
        description="Free-text notes added by the user.",
    )

    # ── Content ──────────────────────────────────────────────────────────────
    raw_content: str | None = Field(
        default=None,
        description="Raw text extracted via OCR / email body / API payload. "
        "Preserved verbatim for compliance audit and RAG retrieval.",
    )
    ai_summary: str | None = Field(
        default=None,
        description="AI-generated actionable summary of the document.",
    )

    # ── Validators ───────────────────────────────────────────────────────────

    @field_validator("country")
    @classmethod
    def _uppercase_country(cls, v: str) -> str:
        return v.upper()

    @field_validator("currency")
    @classmethod
    def _uppercase_currency(cls, v: str | None) -> str | None:
        return v.upper() if v else v

    # ── Helpers ──────────────────────────────────────────────────────────────

    def to_frontmatter_dict(self) -> dict[str, object]:
        """Export model fields suitable for YAML frontmatter serialization.

        Excludes ``raw_content`` and ``ai_summary`` — those go into the
        Markdown body section, not the YAML header.
        """
        data = self.model_dump(
            mode="json",
            exclude={"raw_content", "ai_summary"},
            exclude_none=True,
        )
        return data

    class Config:
        """Pydantic model configuration."""

        str_strip_whitespace = True
        use_enum_values = True
