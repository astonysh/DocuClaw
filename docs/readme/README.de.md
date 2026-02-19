<p align="center">
  <img src="../../assets/logo.svg" alt="DocuClaw Logo" width="160" />
</p>

<h1 align="center">DocuClaw</h1>

<p align="center">
  <strong>🦀 Die universelle souveräne Dateninfrastruktur für Einzelpersonen und Teams</strong>
</p>

<p align="center">
  <a href="https://github.com/openclaw-ai/docuclaw/actions"><img src="https://img.shields.io/github/actions/workflow/status/openclaw-ai/docuclaw/ci.yml?branch=main&style=flat-square" alt="CI"></a>
  <a href="https://pypi.org/project/docuclaw/"><img src="https://img.shields.io/pypi/v/docuclaw?style=flat-square&color=blue" alt="PyPI"></a>
  <a href="https://pypi.org/project/docuclaw/"><img src="https://img.shields.io/pypi/pyversions/docuclaw?style=flat-square" alt="Python"></a>
  <a href="https://github.com/openclaw-ai/docuclaw/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="Lizenz"></a>
  <a href="https://openclaw.ai"><img src="https://img.shields.io/badge/ecosystem-OpenClaw.ai-purple?style=flat-square" alt="OpenClaw"></a>
</p>

<p align="center">
  <em>Ihre Rechnungen. Ihre Verträge. Ihre Briefe. Ihre Daten. <strong>Ihre Regeln.</strong></em>
</p>

---

## 🚀 Warum DocuClaw?

In einer Welt voller SaaS-Lock-ins und Cloud-Überwachung gibt **DocuClaw** Ihnen die Kontrolle zurück.

Ob Sie Freiberufler sind, der private Steuerbelege verwaltet, ein Startup, das internationale B2B-Rechnungen jongliert, oder ein wachsendes KMU, das die GoBD-Konformität sicherstellen muss — DocuClaw ist Ihr **lokales, datenschutzorientiertes und KI-gestütztes Dokumenten-Gehirn**.

```
📄 Postpost → 📸 Scan → 🤖 KI-Extraktion → 📁 Lokales Markdown-Archiv
📧 E-Mail-Beleg → 🔗 Webhook → 🤖 KI-Extraktion → 📁 Lokales Markdown-Archiv
🧾 API-Rechnung → 🔌 Plugin → 🤖 KI-Extraktion → 📁 Lokales Markdown-Archiv
```

### ✨ Hauptmerkmale

| Feature | Beschreibung |
|---------|-------------|
| 🛡️ **100% Souverän** | Alle Daten bleiben auf Ihrem Rechner. Keine Cloud-Abhängigkeit. Keine Telemetrie. |
| 🏢 **Mandantenfähig** | Verwalten Sie private Dokumente, Firmenrechnungen und Teamdateien in einer Instanz. |
| 🔌 **Plugin-Architektur** | Länderspezifische Parser (DE, US, CN, ...) lassen sich wie LEGO einstecken. |
| 📝 **Markdown-Nativ** | Jedes Dokument wird zu einer archivierbaren `.md`-Datei mit strukturiertem YAML-Frontmatter. |
| 🤖 **KI-Extraktion** | Multimodale LLMs extrahieren strukturierte Daten aus Scans, Fotos und E-Mails. |
| ✅ **GoBD & Compliance** | Entwickelt nach Prinzipien der GoBD (Deutschland), DSGVO und Revisionssicherheit. |
| 🔍 **RAG-Ready** | Volltext-Originale bleiben für Retrieval-Augmented Generation (RAG) Workflows erhalten. |

---

## 🏗️ Architektur

DocuClaw folgt einer Architektur aus **Core Engine + Pluggable Parsers**, entwickelt für Skalierbarkeit im Unternehmenseinsatz:

```
┌─────────────────────────────────────────────┐
│                   CLI / API                  │
├─────────────────────────────────────────────┤
│               Core Engine                    │
│  ┌──────────┐  ┌──────────┐  ┌───────────┐ │
│  │  Schema   │  │ Storage- │  │  Registry │ │
│  │(Pydantic) │  │  Schicht  │  │ (Plugin)  │ │
│  └──────────┘  └──────────┘  └───────────┘ │
├─────────────────────────────────────────────┤
│             Parser-Plugins                   │
│  ┌────────┐  ┌────────┐  ┌──────────────┐  │
│  │ DE 🇩🇪  │  │ US 🇺🇸  │  │ Eigener ...  │  │
│  │Rechnung│  │Rechnung│  │ Ihr Parser   │  │
│  └────────┘  └────────┘  └──────────────┘  │
├─────────────────────────────────────────────┤
│         Input-Adapter (In Planung)           │
│  📷 Scanner │ 📧 E-Mail │ 🔗 Webhook │ 🔌 API │
└─────────────────────────────────────────────┘
```

### Der Daten-Vertrag

Jedes Dokument, ob eine 10.000 € Rechnung oder eine einfache Quittung, wird in ein **universelles Markdown-Schema** normalisiert:

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
tags: [IT_Infrastruktur, Q1_Ausgaben]
---
### Rohinhalt
[Vollständiger OCR-Text oder E-Mail-Inhalt für Compliance & RAG-Suche]

### KI-Zusammenfassung & Handlungsempfehlungen
Dies ist die AWS-Rechnung für Februar 2026. Sie enthält 20,04 € Vorsteuer...
```

---

## ⚡ Schnellstart

### Installation

```bash
# Repository klonen
git clone https://github.com/openclaw-ai/docuclaw.git
cd docuclaw

# Abhängigkeiten installieren
pip install -e .
```

### Nutzung

```bash
# Deutschen Rechnungs-Scan verarbeiten
docuclaw process \
  --entity-id "org_meinefirma_01" \
  --entity-type company \
  --country DE \
  --source-type physical_mail \
  --input ./scans/rechnung_aws_feb.png

# Ausgabe: ./docuclaw_data/org_meinefirma_01/2026/02/doc_20260215_xxxx.md
```

---

## 🗺️ Roadmap

- [x] **Milestone 1**: Core Schema, Storage Layer, Parser Framework, CLI Skelett
- [ ] **Milestone 2**: E-Mail Ingestion Adapter (IMAP/POP3)
- [ ] **Milestone 3**: Echte multimodale LLM Integration (Ollama, OpenAI Vision)
- [ ] **Milestone 4**: Web UI Dashboard (nur lokal)
- [ ] **Milestone 5**: GoBD-konforme Audit Trails mit Hash-Ketten
- [ ] **Milestone 6**: Mandantenfähiges Berechtigungsmodell
- [ ] **Milestone 7**: Webhook & API Endpunkte

---

## 📄 Lizenz

Lizenziert unter der [MIT License](LICENSE). Frei nutzen. Behalten Sie die Kontrolle über Ihre Daten.

---

<p align="center">
  <strong>Entwickelt von der <a href="https://openclaw.ai">OpenClaw</a> Community</strong><br>
  <em>"Ihre Daten sollten für Sie arbeiten, nicht gegen Sie."</em>
</p>
