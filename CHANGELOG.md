# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.0] - 2026-02-20
### Added
- **Core Engine**: Initial release of the core schema (`DocuClawDocument`), storage engine (`MarkdownStorageEngine`), and parser framework interface.
- **Input Adapters**: Added Email ingestion adapter supporting IMAP and POP3 protocols (`EmailIngestionAdapter`).
- **Input Adapters**: Added Webhook & API ingestion endpoints via FastAPI (`DocuClaw API`).
- **Parsers**: Added `DEInvoiceParser` for German invoices and business correspondence.
- **AI Integration**: Added real multimodal LLM integration supporting local Ollama (`llava`) and OpenAI Vision (`gpt-4o`) models for intelligent data extraction.
- **Compliance**: Added GoBD-compliant hash-chain audit trail in the Markdown storage engine to ensure immutability and precise tracking.
- **Access Control**: Added a Multi-entity Permission Model (`Role-Based Access Control`) supporting personal, company, and team entities.
- **UI**: Added a local-only Web UI Dashboard powered by Streamlit for document visualization, searching, and metadata inspection.
- **CLI**: Added the `docuclaw` and `docuclaw-ui` entry points for executing the pipeline and launching the web dashboard locally.
