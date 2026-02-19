<p align="center">
  <img src="https://docuclaw.com/logo.svg" alt="DocuClaw Logo" width="120" />
</p>

<h1 align="center">DocuClaw</h1>

<p align="center">
  <strong>🦀 Infraestructura de Datos Soberana Universal para Individuos y Equipos</strong>
</p>

<p align="center">
  <a href="https://github.com/openclaw-ai/docuclaw/actions"><img src="https://img.shields.io/github/actions/workflow/status/openclaw-ai/docuclaw/ci.yml?branch=main&style=flat-square" alt="CI"></a>
  <a href="https://pypi.org/project/docuclaw/"><img src="https://img.shields.io/pypi/v/docuclaw?style=flat-square&color=blue" alt="PyPI"></a>
  <a href="https://pypi.org/project/docuclaw/"><img src="https://img.shields.io/pypi/pyversions/docuclaw?style=flat-square" alt="Python"></a>
  <a href="https://github.com/openclaw-ai/docuclaw/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-Apache--2.0-green?style=flat-square" alt="Licencia"></a>
  <a href="https://openclaw.ai"><img src="https://img.shields.io/badge/ecosystem-OpenClaw.ai-purple?style=flat-square" alt="OpenClaw"></a>
</p>

<p align="center">
  <em>Tus facturas. Tus contratos. Tus cartas. Tus datos. <strong>Tus reglas.</strong></em>
</p>

---

## 🚀 ¿Por qué DocuClaw?

En un mundo dominado por el bloqueo de plataformas SaaS y la vigilancia en la nube, **DocuClaw** te devuelve el control.

Ya seas un profesional independiente que gestiona recibos de impuestos, una startup que procesa facturas B2B internacionales o una PYME preocupada por el cumplimiento — DocuClaw es tu **cerebro documental local, privado y potenciado por IA**.

```
📄 Correo físico → 📸 Escaneo → 🤖 Extracción IA → 📁 Archivo Local Markdown
📧 Recibo de Email → 🔗 Webhook → 🤖 Extracción IA → 📁 Archivo Local Markdown
🧾 Factura API → 🔌 Plugin → 🤖 Extracción IA → 📁 Archivo Local Markdown
```

### ✨ Características principales

| Funcionalidad | Descripción |
|---------|-------------|
| 🛡️ **100% Soberano** | Todos los datos permanecen en tu máquina. Sin dependencia de la nube. Cero telemetría. |
| 🏢 **Multientidad** | Gestiona documentos personales, facturas de empresa y archivos de equipo en una sola instancia. |
| 🔌 **Arquitectura Plugin** | Parsers específicos por país (DE, US, ES, ...) se integran como piezas de LEGO. |
| 📝 **Nativo de Markdown** | Cada documento se convierte en un archivo `.md` con metadatos YAML estructurados. |
| 🤖 **Extracción por IA** | Modelos LLM multimodales extraen datos estructurados de escaneos y correos. |
| ✅ **Cumplimiento** | Diseñado bajo principios de privacidad (RGPD) y trazabilidad de auditoría. |

---

## 🏗️ Arquitectura

DocuClaw sigue una arquitectura de **Motor Central + Parsers Enchufables**, diseñada para la escalabilidad empresarial.

### El Contrato de Datos

Cada documento se normaliza en un **esquema de Markdown universal**:

```yaml
---
id: doc_20260215_a1b2c3d4
entity_id: "org_acme_01"
entity_type: "company"
country: ES
document_type: b2b_invoice
sender_name: "AWS EMEA SARL"
amount_total: 125.50
currency: EUR
status: pending
---
```

---

## 📄 Licencia

Publicado bajo la licencia [Apache 2.0](LICENSE). Úsalo libremente. Sé el dueño de tus datos.

---

<p align="center">
  <strong>Construido por la comunidad de <a href="https://openclaw.ai">OpenClaw</a></strong><br>
  <em>"Tus datos deberían trabajar para ti, no contra ti."</em>
</p>
