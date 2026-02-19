"""DocuClaw Markdown Storage Engine.

Responsible for serializing :class:`DocuClawDocument` instances into
structured Markdown files with YAML frontmatter and persisting them
to the local filesystem.

Storage Layout
--------------
Documents are organized in a deterministic, human-browsable hierarchy::

    <base_path>/
    └── <entity_id>/
        └── <YYYY>/
            └── <MM>/
                └── <document_id>.md

This layout supports multi-entity isolation, chronological browsing,
and future GoBD-style immutability constraints (append-only directories).
"""

from __future__ import annotations

import logging
from pathlib import Path

import yaml

from docuclaw.schema import DocuClawDocument

logger = logging.getLogger(__name__)


class StorageError(Exception):
    """Raised when a storage operation fails."""


class MarkdownStorageEngine:
    """File-system storage engine that writes documents as structured Markdown.

    Parameters
    ----------
    base_path:
        Root directory for all document storage. Created automatically
        if it does not exist.
    """

    def __init__(self, base_path: str | Path) -> None:
        self._base_path = Path(base_path).resolve()
        self._base_path.mkdir(parents=True, exist_ok=True)
        logger.info("Storage engine initialized at: %s", self._base_path)

    # ── Public API ───────────────────────────────────────────────────────────

    def save(self, document: DocuClawDocument, *, overwrite: bool = False) -> Path:
        """Persist a document as a Markdown file.

        Parameters
        ----------
        document:
            The validated document to persist.
        overwrite:
            If ``True``, silently overwrite an existing file with the same ID.
            Defaults to ``False`` to prevent accidental data loss.

        Returns
        -------
        Path
            Absolute path to the written ``.md`` file.

        Raises
        ------
        StorageError
            If the file already exists and *overwrite* is ``False``,
            or if writing fails for any I/O reason.
        """
        output_path = self._resolve_path(document)

        if output_path.exists() and not overwrite:
            raise StorageError(
                f"Document already exists at {output_path}. Pass overwrite=True to replace."
            )

        markdown_content = self._serialize(document)

        try:
            output_path.parent.mkdir(parents=True, exist_ok=True)
            output_path.write_text(markdown_content, encoding="utf-8")
        except OSError as exc:
            raise StorageError(f"Failed to write document: {exc}") from exc

        logger.info("Document saved: %s  →  %s", document.id, output_path)
        return output_path

    def load(self, file_path: str | Path) -> DocuClawDocument:
        """Load a document from a Markdown file.

        Parameters
        ----------
        file_path:
            Path to the ``.md`` file to read.

        Returns
        -------
        DocuClawDocument
            Parsed and validated document instance.

        Raises
        ------
        StorageError
            If the file cannot be read or parsed.
        """
        path = Path(file_path).resolve()

        if not path.exists():
            raise StorageError(f"File not found: {path}")

        try:
            content = path.read_text(encoding="utf-8")
        except OSError as exc:
            raise StorageError(f"Failed to read file: {exc}") from exc

        return self._deserialize(content)

    def exists(self, document: DocuClawDocument) -> bool:
        """Check whether a document file already exists on disk."""
        return self._resolve_path(document).exists()

    def list_documents(self, entity_id: str | None = None) -> list[Path]:
        """List all stored ``.md`` document files.

        Parameters
        ----------
        entity_id:
            If provided, scope the listing to a specific entity.

        Returns
        -------
        list[Path]
            Sorted list of Markdown file paths.
        """
        search_root = self._base_path / entity_id if entity_id else self._base_path
        if not search_root.exists():
            return []
        return sorted(search_root.rglob("*.md"))

    # ── Internal Helpers ─────────────────────────────────────────────────────

    def _resolve_path(self, document: DocuClawDocument) -> Path:
        """Compute the canonical storage path for a document.

        Layout: ``<base>/<entity_id>/<YYYY>/<MM>/<doc_id>.md``
        """
        year = str(document.date_received.year)
        month = f"{document.date_received.month:02d}"
        return self._base_path / document.entity_id / year / month / f"{document.id}.md"

    @staticmethod
    def _serialize(document: DocuClawDocument) -> str:
        """Convert a document into Markdown with YAML frontmatter.

        Structure::

            ---
            <YAML frontmatter>
            ---

            ### Raw Content
            <raw_content>

            ### AI Summary
            <ai_summary>
        """
        # Build YAML frontmatter (excludes body fields)
        frontmatter = document.to_frontmatter_dict()
        yaml_block = yaml.dump(
            frontmatter,
            default_flow_style=False,
            allow_unicode=True,
            sort_keys=False,
            width=120,
        ).rstrip()

        sections: list[str] = [
            f"---\n{yaml_block}\n---",
        ]

        # Raw content section (preserved for compliance & RAG)
        if document.raw_content:
            sections.append(f"\n### Raw Content\n\n{document.raw_content}")

        # AI-generated summary section
        if document.ai_summary:
            sections.append(f"\n### AI Summary\n\n{document.ai_summary}")

        return "\n".join(sections) + "\n"

    @staticmethod
    def _deserialize(content: str) -> DocuClawDocument:
        """Parse a Markdown file back into a :class:`DocuClawDocument`.

        Expects the file to start with ``---`` YAML frontmatter delimiters.
        """
        if not content.startswith("---"):
            raise StorageError("Invalid document format: missing YAML frontmatter delimiter.")

        # Split on the second '---' to separate frontmatter from body
        parts = content.split("---", 2)
        if len(parts) < 3:
            raise StorageError("Invalid document format: incomplete YAML frontmatter.")

        yaml_str = parts[1]
        body = parts[2]

        try:
            metadata: dict[str, object] = yaml.safe_load(yaml_str) or {}
        except yaml.YAMLError as exc:
            raise StorageError(f"Failed to parse YAML frontmatter: {exc}") from exc

        # Extract body sections
        raw_content: str | None = None
        ai_summary: str | None = None

        if "### Raw Content" in body:
            raw_split = body.split("### Raw Content", 1)[1]
            if "### AI Summary" in raw_split:
                raw_content = raw_split.split("### AI Summary")[0].strip()
            else:
                raw_content = raw_split.strip()

        if "### AI Summary" in body:
            ai_summary = body.split("### AI Summary", 1)[1].strip()

        metadata["raw_content"] = raw_content
        metadata["ai_summary"] = ai_summary

        try:
            return DocuClawDocument.model_validate(metadata)
        except Exception as exc:
            raise StorageError(f"Failed to validate document data: {exc}") from exc
