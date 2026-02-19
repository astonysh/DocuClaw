<p align="center">
  <img src="https://docuclaw.com/logo.svg" alt="DocuClaw Logo" width="120" />
</p>

<h1 align="center">DocuClaw</h1>

<p align="center">
  <strong>🦀 Infrastruttura Dati Sovrana Universale per Individui e Team</strong>
</p>

<p align="center">
  <a href="https://github.com/openclaw-ai/docuclaw/actions"><img src="https://img.shields.io/github/actions/workflow/status/openclaw-ai/docuclaw/ci.yml?branch=main&style=flat-square" alt="CI"></a>
  <a href="https://pypi.org/project/docuclaw/"><img src="https://img.shields.io/pypi/v/docuclaw?style=flat-square&color=blue" alt="PyPI"></a>
  <a href="https://pypi.org/project/docuclaw/"><img src="https://img.shields.io/pypi/pyversions/docuclaw?style=flat-square" alt="Python"></a>
  <a href="https://github.com/openclaw-ai/docuclaw/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-Apache--2.0-green?style=flat-square" alt="Licenza"></a>
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

## 📄 Licenza

Rilasciato sotto licenza [Apache 2.0](LICENSE). Usalo liberamente. Sii padrone dei tuoi dati.

---

<p align="center">
  <strong>Creato dalla community di <a href="https://openclaw.ai">OpenClaw</a></strong><br>
  <em>"I tuoi dati dovrebbero lavorare per te, non contro di te."</em>
</p>
