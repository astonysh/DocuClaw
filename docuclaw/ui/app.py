"""Streamlit Web UI Dashboard for DocuClaw."""

from __future__ import annotations

import os
from pathlib import Path

try:
    import pandas as pd  # type: ignore
    import streamlit as st
except ImportError:
    # Handle graceful exit if dependencies aren't met
    print("Missing UI dependencies. Please install with `pip install -e '.[web]'`")
    import sys
    sys.exit(1)

from docuclaw.core.storage import MarkdownStorageEngine
from docuclaw.schema import DocuClawDocument

# Configuration
STORAGE_PATH = os.environ.get("DOCUCLAW_DATA_DIR", "./docuclaw_data")
storage = MarkdownStorageEngine(base_path=STORAGE_PATH)

st.set_page_config(
    page_title="DocuClaw Dashboard",
    page_icon="🦀",
    layout="wide",
)

st.title("🦀 DocuClaw Web UI Dashboard")
st.markdown("*Local-only, privacy-first document intelligence.*")


@st.cache_data(ttl=5)
def load_all_documents() -> list[DocuClawDocument]:
    """Load all indexed documents from the storage path."""
    docs: list[DocuClawDocument] = []
    base_dir = Path(STORAGE_PATH)
    if not base_dir.exists():
        return docs

    for md_file in base_dir.rglob("*.md"):
        try:
            docs.append(storage.load(md_file))
        except Exception as e:
            st.warning(f"Failed to load {md_file.name}: {e}")

    return docs

all_docs = load_all_documents()

if not all_docs:
    st.info(f"No documents found in `{STORAGE_PATH}`. Try parsing an invoice first!")
    st.stop()

# Convert to dataframe for easy filtering/viewing
data = []
for doc in all_docs:
    data.append({
        "ID": doc.id,
        "Date": doc.date_received,
        "Sender": doc.sender_name,
        "Amount": float(doc.amount_total) if doc.amount_total else 0.0,
        "Currency": doc.currency or "",
        "Type": doc.document_type.value,
        "Status": doc.status.value,
    })

df = pd.DataFrame(data)

# Dashboard Layout
col1, col2, col3 = st.columns(3)
col1.metric("Total Documents", len(df))
col2.metric("Total Extracted Value (Approx/EUR)", f"€ {df[df['Currency'] == 'EUR']['Amount'].sum():.2f}")
col3.metric("Pending Review", len(df[df['Status'] == 'pending']))

st.subheader("Document Archive")

# Search and Filter
search_term = st.text_input("Search sender or ID", "")
if search_term:
    df = df[df["Sender"].str.contains(search_term, case=False) | df["ID"].str.contains(search_term, case=False)]

st.dataframe(
    df,
    use_container_width=True,
    column_config={
        "Amount": st.column_config.NumberColumn(format="%.2f"),
    },
)

st.subheader("Document Viewer")
doc_id = st.selectbox("Select a document to view", df["ID"].tolist())

if doc_id:
    # Find active document
    selected_doc: DocuClawDocument | None = next((d for d in all_docs if d.id == doc_id), None)
    if selected_doc:
        st.markdown(f"### {selected_doc.sender_name} - {selected_doc.date_received}")

        c1, c2 = st.columns([1, 1])
        with c1:
            st.markdown("#### Metadata")
            st.json(selected_doc.to_frontmatter_dict())

            if selected_doc.ai_summary:
                st.markdown("#### AI Summary")
                st.info(selected_doc.ai_summary)

        with c2:
            st.markdown("#### Raw Content (Extracted)")
            if selected_doc.raw_content:
                st.text_area("OCR / Text Body", selected_doc.raw_content, height=400, disabled=True)
            else:
                st.write("No raw content available.")
