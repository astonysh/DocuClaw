"""DocuClaw Base Parser — Abstract interface for all document parsers.

Every parser plugin (country-specific, document-type-specific, or custom)
**must** inherit from :class:`BaseDocumentParser` and implement its abstract
methods. This guarantees a consistent API across the entire plugin ecosystem.

Design Principles
-----------------
1. **Single Responsibility**: A parser's *only* job is to take raw input
   (file path, bytes, or text) and produce a validated ``DocuClawDocument``.
2. **Declarative Capabilities**: Each parser declares which countries and
   document types it supports, enabling automatic registry/routing.
3. **Fail-Safe**: Parsers should raise :class:`ParseError` on failure,
   never return partial/invalid data silently.
"""

from __future__ import annotations

import logging
from abc import ABC, abstractmethod
from pathlib import Path
from typing import Any, Optional

from docuclaw.schema import DocuClawDocument, EntityType

logger = logging.getLogger(__name__)


class ParseError(Exception):
    """Raised when a parser cannot process the given input."""


class BaseDocumentParser(ABC):
    """Abstract base class for all DocuClaw document parsers.

    Subclasses must implement:
      - :attr:`parser_name`
      - :attr:`supported_countries`
      - :attr:`supported_document_types`
      - :meth:`parse`

    Optionally override:
      - :meth:`can_handle` for advanced routing logic.
      - :meth:`pre_validate` for input sanity checks.
    """

    # ── Declarative Capabilities ─────────────────────────────────────────────

    @property
    @abstractmethod
    def parser_name(self) -> str:
        """Human-readable name for this parser (e.g. 'German Invoice Parser')."""
        ...

    @property
    @abstractmethod
    def supported_countries(self) -> list[str]:
        """ISO 3166-1 alpha-2 country codes this parser handles.

        Return ``["*"]`` to indicate the parser is country-agnostic.
        """
        ...

    @property
    @abstractmethod
    def supported_document_types(self) -> list[str]:
        """Document type slugs this parser can process (e.g. ``["b2b_invoice", "invoice"]``)."""
        ...

    # ── Core Interface ───────────────────────────────────────────────────────

    @abstractmethod
    def parse(
        self,
        file_path: str | Path,
        entity_id: str,
        entity_type: EntityType,
        *,
        country: Optional[str] = None,
        source_type: Optional[str] = None,
        metadata: Optional[dict[str, Any]] = None,
    ) -> DocuClawDocument:
        """Parse a raw input file and return a validated document.

        Parameters
        ----------
        file_path:
            Path to the input file (image scan, PDF, text, etc.).
        entity_id:
            Identifier of the owning entity.
        entity_type:
            Whether the entity is personal, company, or team.
        country:
            Override country code. If ``None``, the parser uses its default.
        source_type:
            How the document was ingested (physical_mail, email, etc.).
        metadata:
            Additional key-value pairs to pass to the extraction logic.

        Returns
        -------
        DocuClawDocument
            A fully validated document instance.

        Raises
        ------
        ParseError
            If the input cannot be parsed or extraction fails.
        FileNotFoundError
            If the input file does not exist.
        """
        ...

    # ── Optional Hooks ───────────────────────────────────────────────────────

    def can_handle(self, file_path: str | Path, country: str, document_type: str) -> bool:
        """Determine whether this parser can handle the given input.

        Default implementation checks ``supported_countries`` and
        ``supported_document_types``. Override for more sophisticated
        matching (e.g. inspecting file headers).

        Parameters
        ----------
        file_path:
            Path to the candidate input file.
        country:
            ISO 3166-1 alpha-2 country code.
        document_type:
            Document type slug.

        Returns
        -------
        bool
            ``True`` if this parser should handle the input.
        """
        country_match = "*" in self.supported_countries or country.upper() in (
            c.upper() for c in self.supported_countries
        )
        type_match = document_type.lower() in (t.lower() for t in self.supported_document_types)
        return country_match and type_match

    def pre_validate(self, file_path: str | Path) -> None:
        """Run sanity checks before parsing.

        Default implementation verifies the file exists and is readable.
        Override to add format-specific checks (e.g. valid image header).

        Raises
        ------
        FileNotFoundError
            If the file does not exist.
        ParseError
            If the file fails pre-validation.
        """
        path = Path(file_path)
        if not path.exists():
            raise FileNotFoundError(f"Input file not found: {path}")
        if not path.is_file():
            raise ParseError(f"Input path is not a file: {path}")
        if path.stat().st_size == 0:
            raise ParseError(f"Input file is empty: {path}")

    # ── Dunder ───────────────────────────────────────────────────────────────

    def __repr__(self) -> str:
        return (
            f"<{self.__class__.__name__} "
            f"name={self.parser_name!r} "
            f"countries={self.supported_countries} "
            f"types={self.supported_document_types}>"
        )
