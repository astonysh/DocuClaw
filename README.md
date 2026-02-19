<p align="center">
  <img src="assets/logo.svg" alt="DocuClaw Logo" width="160" />
</p>


<h1 align="center">DocuClaw</h1>

<p align="center">
  <strong>🦀 Universal Sovereign Data Infrastructure for Individuals & Teams</strong>
</p>

<p align="center">
  <a href="README.md">English</a> | 
  <a href="docs/readme/README.zh.md">简体中文</a> | 
  <a href="docs/readme/README.de.md">Deutsch</a> | 
  <a href="docs/readme/README.fr.md">Français</a> | 
  <a href="docs/readme/README.es.md">Español</a> | 
  <a href="docs/readme/README.it.md">Italiano</a> | 
  <a href="docs/readme/README.ja.md">日本語</a>
</p>

<p align="center">
  <a href="https://github.com/openclaw-ai/docuclaw/actions"><img src="https://img.shields.io/github/actions/workflow/status/openclaw-ai/docuclaw/ci.yml?branch=main&style=flat-square" alt="CI"></a>
  <a href="https://pypi.org/project/docuclaw/"><img src="https://img.shields.io/pypi/v/docuclaw?style=flat-square&color=blue" alt="PyPI"></a>
  <a href="https://pypi.org/project/docuclaw/"><img src="https://img.shields.io/pypi/pyversions/docuclaw?style=flat-square" alt="Python"></a>
  <a href="https://github.com/openclaw-ai/docuclaw/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="License"></a>
  <a href="https://openclaw.ai"><img src="https://img.shields.io/badge/ecosystem-OpenClaw.ai-purple?style=flat-square" alt="OpenClaw"></a>
</p>

<p align="center">
  <em>Your invoices. Your contracts. Your letters. Your data. <strong>Your rules.</strong></em>
</p>

---

## 🚀 Why DocuClaw?

In a world drowning in SaaS lock-in and cloud surveillance, **DocuClaw** gives you back control.

Whether you're a freelancer managing personal tax receipts, a startup juggling B2B invoices across borders, or a growing SME facing GoBD compliance audits — DocuClaw is your **local-first, privacy-native, AI-powered document brain**.

```
📄 Physical Mail → 📸 Scan → 🤖 AI Extract → 📁 Local Markdown Archive
📧 Email Receipt → 🔗 Webhook → 🤖 AI Extract → 📁 Local Markdown Archive
🧾 API Invoice  → 🔌 Plugin  → 🤖 AI Extract → 📁 Local Markdown Archive
```

### ✨ Key Features

| Feature | Description |
|---------|-------------|
| 🛡️ **100% Sovereign** | All data stays on YOUR machine. Zero cloud dependency. Zero telemetry. |
| 🏢 **Multi-Entity** | Manage personal docs, company invoices, and team files — all in one install. |
| 🔌 **Plugin Architecture** | Country-specific parsers (DE, US, CN, ...) snap in like LEGO bricks. |
| 📝 **Markdown-Native** | Every document becomes a searchable `.md` file with structured YAML frontmatter. |
| 🤖 **AI-Powered Extraction** | Multimodal LLM extracts structured data from scans, photos, and emails. |
| ✅ **Compliance-Ready** | Designed with GoBD (Germany), GDPR, and audit-trail principles baked in. |
| 🔍 **RAG-Ready** | Full-text originals preserved for retrieval-augmented generation workflows. |

---

## 🏗️ Architecture

DocuClaw follows a **Core Engine + Pluggable Parsers** architecture, designed for enterprise-grade extensibility:

```
┌─────────────────────────────────────────────┐
│                   CLI / API                  │
├─────────────────────────────────────────────┤
│               Core Engine                    │
│  ┌──────────┐  ┌──────────┐  ┌───────────┐ │
│  │  Schema   │  │ Storage  │  │  Registry │ │
│  │(Pydantic) │  │  Layer   │  │  (Plugin) │ │
│  └──────────┘  └──────────┘  └───────────┘ │
├─────────────────────────────────────────────┤
│             Parser Plugins                   │
│  ┌────────┐  ┌────────┐  ┌──────────────┐  │
│  │ DE 🇩🇪  │  │ US 🇺🇸  │  │ Custom ...  │  │
│  │Invoice │  │Invoice │  │  Your Parser │  │
│  └────────┘  └────────┘  └──────────────┘  │
├─────────────────────────────────────────────┤
│        Input Adapters (Future)               │
│  📷 Scanner │ 📧 Email │ 🔗 Webhook │ 🔌 API │
└─────────────────────────────────────────────┘
```

### The Data Contract

Every document, whether a €10K enterprise invoice or a personal electricity bill, is normalized into a **universal Markdown schema** with structured YAML frontmatter:

```yaml
---
id: doc_20260215_a1b2c3d4
entity_id: "org_acme_01"
entity_type: "company"
source_type: physical_mail
country: DE
document_type: b2b_invoice
date_received: "2026-02-15"
sender_name: "AWS EMEA SARL"
amount_total: 125.50
currency: EUR
status: pending
tags: [IT_Infrastructure, Q1_Expense]
---
### Raw Content
[Full OCR / email body preserved for compliance & RAG]

### AI Summary
This is the February AWS bill containing €20.04 input VAT...
```

---

## ⚡ Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/openclaw-ai/docuclaw.git
cd docuclaw

# Install dependencies
pip install -e .
```

### Usage

```bash
# Process a German invoice scan
docuclaw process \
  --entity-id "org_mycompany_01" \
  --entity-type company \
  --country DE \
  --source-type physical_mail \
  --input ./scans/invoice_aws_feb.png

# Output: ./docuclaw_data/org_mycompany_01/2026/02/doc_20260215_xxxx.md
```

### Python API

```python
from docuclaw.schema import DocuClawDocument, EntityType, SourceType
from docuclaw.core.storage import MarkdownStorageEngine
from docuclaw.parsers.de_invoice_parser import DEInvoiceParser

# Initialize
storage = MarkdownStorageEngine(base_path="./docuclaw_data")
parser = DEInvoiceParser()

# Parse a document
doc = parser.parse(
    file_path="./scans/invoice.png",
    entity_id="org_mycompany_01",
    entity_type=EntityType.COMPANY,
)

# Persist as structured Markdown
output_path = storage.save(doc)
print(f"📄 Saved: {output_path}")
```

---

## 🧩 Writing Custom Parsers

Extend DocuClaw for any country or document type:

```python
from docuclaw.parsers.base import BaseDocumentParser
from docuclaw.schema import DocuClawDocument

class USReceiptParser(BaseDocumentParser):
    """Parser for US retail receipts."""

    @property
    def supported_countries(self) -> list[str]:
        return ["US"]

    @property
    def supported_document_types(self) -> list[str]:
        return ["receipt", "b2c_invoice"]

    def parse(self, file_path, entity_id, entity_type, **kwargs):
        # Your extraction logic here
        ...
```

---

## 🗺️ Roadmap

- [x] **Milestone 1**: Core schema, storage engine, parser framework, CLI skeleton
- [ ] **Milestone 2**: Email ingestion adapter (IMAP/POP3)
- [ ] **Milestone 3**: Real multimodal LLM integration (Ollama, OpenAI Vision)
- [ ] **Milestone 4**: Web UI dashboard (local-only, no cloud)
- [ ] **Milestone 5**: GoBD-compliant audit trail with hash chains
- [ ] **Milestone 6**: Multi-entity permission model & team collaboration
- [ ] **Milestone 7**: Webhook & API ingestion endpoints

---

## 📦 Part of the OpenClaw Ecosystem

DocuClaw is a core component of [**openclaw.ai**](https://openclaw.ai) — an open-source ecosystem for sovereign AI-powered productivity tools.

| Project | Description |
|---------|-------------|
| **DocuClaw** | Sovereign document intelligence & archival |
| **DeepReader** | AI-powered web content ingestion |
| **ClawHub** | Plugin marketplace & community hub |

---

## 🤝 Contributing

We welcome contributions! Whether it's a new country parser, a bug fix, or documentation improvements.

```bash
# Development setup
git clone https://github.com/openclaw-ai/docuclaw.git
cd docuclaw
pip install -e ".[dev]"

# Run tests
pytest

# Run linters
ruff check .
mypy docuclaw/
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

---

## 📄 License

Licensed under the [MIT License](LICENSE). Use it freely. Own your data.

---

<p align="center">
  <strong>Built with 🦀 by the <a href="https://openclaw.ai">OpenClaw</a> community</strong><br>
  <em>"Your data should work for you, not against you."</em>
</p>
