"""DocuClaw API Server.

Provides a FastAPI server for external webhook and API ingestion.
"""

from __future__ import annotations

import sys

try:
    import uvicorn
except ImportError:
    uvicorn = None  # type: ignore


def main() -> None:
    """CLI entry point for the API Server."""
    if uvicorn is None:
        print("API dependencies not installed. Please run `pip install -e '.[api]'`.", file=sys.stderr)
        sys.exit(1)

    uvicorn.run("docuclaw.api.server:app", host="127.0.0.1", port=8000, reload=True)
