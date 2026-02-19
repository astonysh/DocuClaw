#!/usr/bin/env python3
"""DocuClaw CLI — Demonstration entry point.

This script demonstrates the full DocuClaw pipeline:

  1. Initialize a company entity context.
  2. Feed an invoice scan through the German Invoice Parser.
  3. Persist the result as a structured Markdown file.
  4. Read it back and display the contents.

Usage::

    python main.py [--input <path_to_invoice_image>]

If no input is provided, a temporary dummy file is created for demonstration.
"""

from __future__ import annotations

import argparse
import logging
import sys
import tempfile
from pathlib import Path

from rich.console import Console
from rich.logging import RichHandler
from rich.panel import Panel
from rich.syntax import Syntax
from rich.table import Table

from docuclaw import __version__
from docuclaw.core.storage import MarkdownStorageEngine
from docuclaw.parsers.de_invoice_parser import DEInvoiceParser
from docuclaw.schema import EntityType

# ──────────────────────────────────────────────────────────────────────────────
# Configuration
# ──────────────────────────────────────────────────────────────────────────────

DEFAULT_STORAGE_PATH = "./docuclaw_data"
DEMO_ENTITY_ID = "org_acme_gmbh_01"
DEMO_ENTITY_TYPE = EntityType.COMPANY

console = Console()


def setup_logging(verbose: bool = False) -> None:
    """Configure structured logging with rich output."""
    level = logging.DEBUG if verbose else logging.INFO
    logging.basicConfig(
        level=level,
        format="%(message)s",
        datefmt="[%X]",
        handlers=[RichHandler(console=console, rich_tracebacks=True, markup=True)],
    )


def parse_args() -> argparse.Namespace:
    """Parse command-line arguments."""
    parser = argparse.ArgumentParser(
        prog="docuclaw",
        description="DocuClaw — Sovereign Document Intelligence CLI",
    )
    parser.add_argument(
        "--input",
        "-i",
        type=str,
        default=None,
        help="Path to an invoice image or PDF to process.",
    )
    parser.add_argument(
        "--entity-id",
        type=str,
        default=DEMO_ENTITY_ID,
        help=f"Entity identifier (default: {DEMO_ENTITY_ID}).",
    )
    parser.add_argument(
        "--entity-type",
        type=str,
        choices=["personal", "company", "team"],
        default="company",
        help="Entity type (default: company).",
    )
    parser.add_argument(
        "--storage-path",
        type=str,
        default=DEFAULT_STORAGE_PATH,
        help=f"Root storage directory (default: {DEFAULT_STORAGE_PATH}).",
    )
    parser.add_argument(
        "--verbose",
        "-v",
        action="store_true",
        help="Enable debug logging.",
    )
    parser.add_argument(
        "--version",
        action="version",
        version=f"DocuClaw {__version__}",
    )
    return parser.parse_args()


def create_demo_input() -> Path:
    """Create a temporary dummy invoice file for demonstration purposes."""
    with tempfile.NamedTemporaryFile(
        suffix=".png",
        prefix="docuclaw_demo_invoice_",
        delete=False,
    ) as tmp:
        tmp.write(b"DUMMY_INVOICE_SCAN_DATA")
        return Path(tmp.name)


# ──────────────────────────────────────────────────────────────────────────────
# Main Pipeline
# ──────────────────────────────────────────────────────────────────────────────


def main() -> int:
    """Run the DocuClaw demonstration pipeline."""
    args = parse_args()
    setup_logging(verbose=args.verbose)

    # ── Banner ───────────────────────────────────────────────────────────────
    console.print()
    console.print(
        Panel.fit(
            "[bold cyan]🦀 DocuClaw[/bold cyan]  "
            f"[dim]v{__version__}[/dim]\n"
            "[italic]Universal Sovereign Data Infrastructure[/italic]",
            border_style="cyan",
        )
    )
    console.print()

    # ── Step 1: Resolve input file ───────────────────────────────────────────
    if args.input:
        input_path = Path(args.input).resolve()
        if not input_path.exists():
            console.print(f"[red]❌ Input file not found:[/red] {input_path}")
            return 1
    else:
        console.print("[yellow]⚠️  No input file specified. Creating demo invoice scan...[/yellow]")
        input_path = create_demo_input()
        console.print(f"   Created: [dim]{input_path}[/dim]")

    console.print()

    # ── Step 2: Initialize components ────────────────────────────────────────
    entity_type = EntityType(args.entity_type)
    storage = MarkdownStorageEngine(base_path=args.storage_path)
    parser = DEInvoiceParser()

    # Display configuration
    config_table = Table(title="⚙️  Configuration", show_header=False, border_style="dim")
    config_table.add_column("Key", style="bold")
    config_table.add_column("Value")
    config_table.add_row("Entity ID", args.entity_id)
    config_table.add_row("Entity Type", entity_type.value)
    config_table.add_row("Parser", parser.parser_name)
    config_table.add_row("Input File", str(input_path))
    config_table.add_row("Storage Path", str(Path(args.storage_path).resolve()))
    console.print(config_table)
    console.print()

    # ── Step 3: Parse the document ───────────────────────────────────────────
    console.print("[bold]📄 Step 1:[/bold] Parsing document...")
    try:
        document = parser.parse(
            file_path=input_path,
            entity_id=args.entity_id,
            entity_type=entity_type,
            country="DE",
            source_type="physical_mail",
            metadata={
                "cost_center": "Engineering",
                "tags": ["IT_Infrastructure", "Q1_Expense", "Tax_Deductible"],
            },
        )
    except Exception as exc:
        console.print(f"[red]❌ Parsing failed:[/red] {exc}")
        return 1

    console.print(f"   [green]✅ Parsed successfully![/green]  ID: [bold]{document.id}[/bold]")
    console.print()

    # ── Step 4: Display extracted data ───────────────────────────────────────
    doc_table = Table(title="📋 Extracted Document Data", border_style="green")
    doc_table.add_column("Field", style="bold cyan")
    doc_table.add_column("Value", style="white")

    doc_table.add_row("Document ID", document.id)
    doc_table.add_row("Sender", document.sender_name)
    doc_table.add_row("VAT ID", document.tax_id_vat or "—")
    doc_table.add_row("Invoice #", document.invoice_number or "—")
    doc_table.add_row(
        "Net Amount", f"{document.amount_net} {document.currency}" if document.amount_net else "—"
    )
    doc_table.add_row(
        "Tax Amount", f"{document.amount_tax} {document.currency}" if document.amount_tax else "—"
    )
    doc_table.add_row(
        "Total Amount",
        f"[bold]{document.amount_total} {document.currency}[/bold]"
        if document.amount_total
        else "—",
    )
    doc_table.add_row("Due Date", str(document.due_date) if document.due_date else "—")
    doc_table.add_row("Status", document.status)
    doc_table.add_row("Tags", ", ".join(document.tags) if document.tags else "—")
    doc_table.add_row("Cost Center", document.cost_center or "—")

    console.print(doc_table)
    console.print()

    # ── Step 5: Persist to storage ───────────────────────────────────────────
    console.print("[bold]💾 Step 2:[/bold] Saving to local Markdown archive...")
    try:
        output_path = storage.save(document, overwrite=True)
    except Exception as exc:
        console.print(f"[red]❌ Storage failed:[/red] {exc}")
        return 1

    console.print(f"   [green]✅ Saved to:[/green] [bold]{output_path}[/bold]")
    console.print()

    # ── Step 6: Display the generated Markdown ───────────────────────────────
    console.print("[bold]📝 Step 3:[/bold] Generated Markdown output:")
    console.print()
    md_content = output_path.read_text(encoding="utf-8")
    console.print(Syntax(md_content, "markdown", theme="monokai", line_numbers=True))
    console.print()

    # ── Step 7: Verify round-trip ────────────────────────────────────────────
    console.print("[bold]🔄 Step 4:[/bold] Verifying round-trip (load from disk)...")
    loaded_doc = storage.load(output_path)
    assert loaded_doc.id == document.id, "Round-trip ID mismatch!"
    assert loaded_doc.sender_name == document.sender_name, "Round-trip sender mismatch!"
    assert loaded_doc.amount_total == document.amount_total, "Round-trip amount mismatch!"
    console.print("   [green]✅ Round-trip verification passed![/green]")
    console.print()

    # ── Done ─────────────────────────────────────────────────────────────────
    console.print(
        Panel.fit(
            "[bold green]🎉 Pipeline complete![/bold green]\n"
            f"Document [bold]{document.id}[/bold] has been:\n"
            "  • Parsed with AI extraction\n"
            "  • Validated against the data contract\n"
            "  • Archived as structured Markdown\n"
            "  • Verified via round-trip deserialization",
            border_style="green",
        )
    )
    console.print()

    return 0


if __name__ == "__main__":
    sys.exit(main())
