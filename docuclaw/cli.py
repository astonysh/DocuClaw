"""DocuClaw CLI entry point.

This module provides the Click-based CLI interface. For Milestone 1,
it serves as a thin wrapper around the demonstration pipeline in main.py.
The full CLI with subcommands will be implemented in Milestone 2+.
"""

from __future__ import annotations

from main import main as _main


def main() -> None:
    """CLI entry point (registered via pyproject.toml ``[project.scripts]``)."""
    raise SystemExit(_main())
