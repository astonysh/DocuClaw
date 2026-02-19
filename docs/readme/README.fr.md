<p align="center">
  <img src="https://docuclaw.com/logo.svg" alt="DocuClaw Logo" width="120" />
</p>

<h1 align="center">DocuClaw</h1>

<p align="center">
  <strong>🦀 Infrastructure de données souveraine et universelle pour les particuliers et les équipes</strong>
</p>

<p align="center">
  <a href="https://github.com/openclaw-ai/docuclaw/actions"><img src="https://img.shields.io/github/actions/workflow/status/openclaw-ai/docuclaw/ci.yml?branch=main&style=flat-square" alt="CI"></a>
  <a href="https://pypi.org/project/docuclaw/"><img src="https://img.shields.io/pypi/v/docuclaw?style=flat-square&color=blue" alt="PyPI"></a>
  <a href="https://pypi.org/project/docuclaw/"><img src="https://img.shields.io/pypi/pyversions/docuclaw?style=flat-square" alt="Python"></a>
  <a href="https://github.com/openclaw-ai/docuclaw/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-Apache--2.0-green?style=flat-square" alt="Licence"></a>
  <a href="https://openclaw.ai"><img src="https://img.shields.io/badge/ecosystem-OpenClaw.ai-purple?style=flat-square" alt="OpenClaw"></a>
</p>

<p align="center">
  <em>Vos factures. Vos contrats. Vos courriers. Vos données. <strong>Vos règles.</strong></em>
</p>

---

## 🚀 Pourquoi DocuClaw ?

Dans un monde dominé par le verrouillage des plateformes SaaS et la surveillance du cloud, **DocuClaw** vous redonne le contrôle.

Que vous soyez un freelance gérant ses reçus fiscaux, une startup traitant des factures B2B internationales ou une PME soucieuse de la conformité — DocuClaw est votre **cerveau documentaire local, respectueux de la vie privée et propulsé par l'IA**.

```
📄 Courrier physique → 📸 Scan → 🤖 Extraction IA → 📁 Archive locale Markdown
📧 Reçu par email → 🔗 Webhook → 🤖 Extraction IA → 📁 Archive locale Markdown
🧾 Facture API → 🔌 Plugin → 🤖 Extraction IA → 📁 Archive locale Markdown
```

### ✨ Caractéristiques principales

| Fonctionnalité | Description |
|---------|-------------|
| 🛡️ **100% Souverain** | Toutes les données restent sur votre machine. Zéro dépendance cloud. Zéro télémétrie. |
| 🏢 **Multi-entités** | Gérez vos documents personnels, factures d'entreprise et fichiers d'équipe dans une seule instance. |
| 🔌 **Architecture Plugin** | Des analyseurs spécifiques par pays (DE, US, FR, ...) s'imbriquent comme des LEGO. |
| 📝 **Natif Markdown** | Chaque document est transformé en fichier `.md` avec un frontmatter YAML structuré. |
| 🤖 **Extraction par IA** | Les modèles LLM multimodaux extraient les données structurées des scans et emails. |
| ✅ **Conformité** | Conçu avec les principes de protection des données (RGPD) et de piste d'audit. |
| 🔍 **Prêt pour le RAG** | Les originaux textuels sont préservés pour les flux de génération augmentée par récupération (RAG). |

---

## 🏗️ Architecture

DocuClaw suit une architecture de type **Moteur Central + Analyseurs Enfichables**, conçue pour l'extensibilité en entreprise.

### Le Contrat de Données

Chaque document est normalisé dans un **schéma Markdown universel** :

```yaml
---
id: doc_20260215_a1b2c3d4
entity_id: "org_acme_01"
entity_type: "company"
source_type: physical_mail
country: FR
document_type: b2b_invoice
date_received: "2026-02-15"
sender_name: "AWS EMEA SARL"
amount_total: 125.50
currency: EUR
status: pending
tags: [Infrastucture_IT, Depenses_Q1]
---
```

---

## 📄 Licence

Sous licence [Apache 2.0](LICENSE). Utilisez-le librement. Soyez maître de vos données.

---

<p align="center">
  <strong>Construit par la communauté <a href="https://openclaw.ai">OpenClaw</a></strong><br>
  <em>"Vos données devraient travailler pour vous, pas contre vous."</em>
</p>
