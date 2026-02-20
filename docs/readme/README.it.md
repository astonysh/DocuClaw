<p align="center">
  <img src="../../assets/logo.svg" alt="DocuClaw Logo" width="160" />
</p>

<h1 align="center">DocuClaw</h1>

<p align="center">
  <strong>🦀 Infrastruttura Dati Sovrana Universale per Individui e Team</strong>
</p>

<p align="center">
  <a href="https://github.com/openclaw-ai/docuclaw/actions"><img src="https://img.shields.io/github/actions/workflow/status/openclaw-ai/docuclaw/ci.yml?branch=main&style=flat-square" alt="CI"></a>
  <a href="https://pypi.org/project/docuclaw/"><img src="https://img.shields.io/pypi/v/docuclaw?style=flat-square&color=blue" alt="PyPI"></a>
  <a href="https://pypi.org/project/docuclaw/"><img src="https://img.shields.io/pypi/pyversions/docuclaw?style=flat-square" alt="Python"></a>
  <a href="https://github.com/openclaw-ai/docuclaw/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="Licenza"></a>
  <a href="https://openclaw.ai"><img src="https://img.shields.io/badge/ecosystem-OpenClaw.ai-purple?style=flat-square" alt="OpenClaw"></a>
</p>

<p align="center">
  <em>Le tue fatture. I tuoi contratti. Le tue lettere. I tuoi dati. <strong>Le tue regole.</strong></em>
</p>

---

## 🚀 Perché DocuClaw?

In un mondo dominato dal lock-in dei software SaaS e dalla sorveglianza dei dati in cloud, **DocuClaw** ti restituisce il controllo.

Che tu sia un libero professionista che gestisce ricevute fiscali, una startup che si occupa di fatturazione B2B internazionale o una piccola-media impresa (PMI) che necessita di conformità — DocuClaw è il tuo **cervello documentale locale, privato e potenziato dall'IA**.

```
📄 Posta fisica → 📸 Scansione → 🤖 Estrazione IA → 📁 Archivio Locale Markdown
📧 Ricevuta Email → 🔗 Webhook → 🤖 Estrazione IA → 📁 Archivio Locale Markdown
🧾 Fattura API → 🔌 Plugin → 🤖 Estrazione IA → 📁 Archivio Locale Markdown
```

### ✨ Caratteristiche principali

| Funzionalità | Descrizione |
|---------|-------------|
| 🛡️ **Sovereign 100%** | Tutti i dati rimangono sulla tua macchina. Nessuna dipendenza dal cloud. Zero telemetria. |
| 🏢 **Multi-Entity** | Gestisci documenti personali, fatture aziendali e file di team in un'unica istanza. |
| 🔌 **Architettura Plugin** | Parser specifici per paese (DE, US, IT, ...) si integrano come pezzi LEGO. |
| 📝 **Markdown-Native** | Ogni documento diventa un file `.md` con frontmatter YAML strutturato. |
| 🤖 **Estrazione IA** | Modelli LLM multimodali estraggono dati strutturati da scansioni ed email. |
| ✅ **Pronto per la Compliance** | Progettato con i principi del GDPR e della conservazione sostitutiva. |

---

## 🏗️ Architettura

DocuClaw segue un'architettura **Core Engine + Pluggable Parsers**, progettata per la scalabilità aziendale.

### Il Contratto Dati

Ogni documento viene normalizzato in uno **schema Markdown universale**:

```yaml
---
id: doc_20260215_a1b2c3d4
entity_id: "org_acme_01"
entity_type: "company"
country: IT
document_type: b2b_invoice
sender_name: "AWS EMEA SARL"
amount_total: 125.50
currency: EUR
status: pending
---
```

---

## 🗺️ Roadmap

La nostra visione per DocuClaw è di diventare il \*\*Data Hub Sovrano\*\* definitivo per i tuoi documenti personali e aziendali. Ecco cosa stiamo costruendo:

### Fase 1: Motore Centrale e Parsers (Attuale)
- [x] **Traguardo 1**: Schema centrale, motore di archiviazione, framework, CLI
- [x] **Traguardo 2**: Adattatore di ingestione Email (IMAP/POP3)
- [x] **Traguardo 3**: Integrazione LLM multimodale (Ollama, OpenAI Vision)
- [x] **Traguardo 4**: Dashboard Web (solo locale, no cloud)
- [x] **Traguardo 5**: Tracciamento audit Hash-chain compatibile con GoBD
- [x] **Traguardo 6**: Modello permessi Multi-entità e collaborazione
- [x] **Traguardo 7**: Endpoint Ingestione API e Webhook
- [ ] **Ecosistema multi-paese:** Logica di estrazione specializzata per varie regioni:
  - 🇩🇪 Germania (es. Steuerbescheid, requisiti GoBD)
  - 🇫🇷 Francia (es. documenti CAF, URSSAF, CPAM)
  - 🇮🇹 Italia (es. Raccomandata, Fattura Elettronica)
  - 🇪🇸 Spagna, 🇺🇸 Stati Uniti (fatture mediche, avvisi IRS), 🇯🇵 Giappone (documenti Hanko).
- [ ] **Pipeline OCR Avanzata:** Migliore riconoscimento per dati tabulari complessi.

### Fase 2: Ingestione Omnicanale
- [ ] **Integrazione Email senza sforzi:** One-click OAuth (Gmail, Outlook) e supporto IMAP completo (ProtonMail, GMX).
- [ ] **Sincronizzazione di Sistema nativa:** Auto-importazione da Apple Photos e Watchdog di cartelle su computer desktop e scanner.

### Fase 3: Motori IA Pluggabili
- [ ] **Integrazione Cloud IA:** Configurazione API Keys (OpenAI, Anthropic, Gemini).
- [ ] **Local-First LLM:** Supporto pronto all'uso per motori offline locali come **Ollama** e **LM Studio** per documenti sensibili.

### Fase 4: Flussi di esportazione automatizzata
- [ ] **Calendario e Attività:** Date di scadenza fatture su Todoist/Calendari.
- [ ] **Integrazione Fiscale:** Esportazione per **DATEV, Lexoffice, SevDesk** e **QuickBooks**.
- [ ] **Sincronizzazione Markdown:** Esportazione nativa verso ecosistemi come **Obsidian** e **Notion**.

---

## 📄 Licenza

Rilasciato sotto licenza [MIT License](LICENSE). Usalo liberamente. Sii padrone dei tuoi dati.

---

<p align="center">
  <strong>Creato dalla community di <a href="https://openclaw.ai">OpenClaw</a></strong><br>
  <em>"I tuoi dati dovrebbero lavorare per te, non contro di te."</em>
</p>
