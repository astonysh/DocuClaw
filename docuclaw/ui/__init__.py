"""DocuClaw Web UI Dashboard.

This module provides a local-only Streamlit dashboard for visualizing
and searching extracted documents.
"""

from __future__ import annotations

import sys
from pathlib import Path

try:
    from streamlit.web import cli as stcli
except ImportError:
    stcli = None  # type: ignore


def main() -> None:
    """CLI entry point for the Web UI.

    Equivalent to running `streamlit run docuclaw/ui/app.py`.
    """
    if stcli is None:
        print("Streamlit not installed. Please run `pip install -e '.[web]'`.", file=sys.stderr)
        sys.exit(1)

    app_path = Path(__file__).parent / "app.py"
    sys.argv = ["streamlit", "run", str(app_path)]
    sys.exit(stcli.main())
