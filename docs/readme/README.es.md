<p align="center">
  <img src="../../assets/logo.svg" alt="DocuClaw Logo" width="160" />
</p>

<h1 align="center">DocuClaw</h1>

<p align="center">
  <strong>🦀 Infraestructura de Datos Soberana Universal para Individuos y Equipos</strong>
</p>

<p align="center">
  <a href="https://github.com/openclaw-ai/docuclaw/actions"><img src="https://img.shields.io/github/actions/workflow/status/openclaw-ai/docuclaw/ci.yml?branch=main&style=flat-square" alt="CI"></a>
  <a href="https://pypi.org/project/docuclaw/"><img src="https://img.shields.io/pypi/v/docuclaw?style=flat-square&color=blue" alt="PyPI"></a>
  <a href="https://pypi.org/project/docuclaw/"><img src="https://img.shields.io/pypi/pyversions/docuclaw?style=flat-square" alt="Python"></a>
  <a href="https://github.com/openclaw-ai/docuclaw/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="Licencia"></a>
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

## 🗺️ Hoja de Ruta (Roadmap)

Nuestra visión para DocuClaw es convertirnos en el \*\*Centro de Datos Soberano\*\* definitivo para tus documentos personales y empresariales. A continuación te presentamos lo que estamos construyendo:

### Fase 1: Motor Central y Parsers Expandidos (Actual)
- [x] **Hito 1**: Esquema central, motor de almacenamiento, framework de parsers, esqueleto CLI
- [x] **Hito 2**: Adaptador de ingesta de email (IMAP/POP3)
- [x] **Hito 3**: Integración real de LLM multimodal (Ollama, OpenAI Vision)
- [x] **Hito 4**: Panel Web de gestión (solo local, sin nube)
- [x] **Hito 5**: Pista de auditoría de cadena de hashes (hash chains) compatible con GoBD
- [x] **Hito 6**: Modelo de permisos multientidad y colaboración en equipo
- [x] **Hito 7**: Endpoints de ingesta API y Webhook
- [ ] **Ecosistema de Parsers Multinación:** Lógica de extracción especializada para regiones altamente burocráticas:
  - 🇩🇪 Alemania (ej. Steuerbescheid, consideraciones de cumplimiento GoBD)
  - 🇫🇷 Francia (ej. documentos CAF, URSSAF, CPAM)
  - 🇮🇹 Italia (ej. Raccomandata, Fattura Elettronica)
  - 🇪🇸 España, 🇺🇸 Estados Unidos (facturas médicas, avisos del IRS), 🇯🇵 Japón (documentos Hanko).
- [ ] **Proceso OCR Avanzado:** Reconocimiento de diseño mejorado para datos tabulares complejos (como facturas).

### Fase 2: Ingesta Omnicanal (Sincronización donde residen los datos)
- [ ] **Integración de Email sin Ficciones:**
  - OAuth de un solo clic para **Gmail**, **Outlook** y **iCloud**.
  - **Soporte IMAP** estándar para proveedores enfocados en la privacidad (ProtonMail) y gigantes regionales (GMX, Web.de).
- [ ] **Sincronización Nativa de Sistema Operativo y Multimedia:**
  - **Integración con Apple Photos:** Importación automática de recibos y documentos directamente desde tu biblioteca de fotos en macOS/iOS.
  - **Watchdogs Locales:** Autoprocesamiento de archivos soltados en directorios locales específicos (ideal para escáneres de red).

### Fase 3: Motores de IA Enchufables (Trae tu Propio Cerebro)
- [ ] **Integración de IA en la Nube:** Configuración sencilla de claves API para OpenAI (GPT-4o), Anthropic (Claude) y Google (Gemini).
- [ ] **LLMs con Enfoque Local Primero (Local-First):** Soporte inmediato para motores de inferencia local como **Ollama** y **LM Studio**. Procesa documentos extremadamente sensibles (como historias clínicas) de manera totalmente aislada y sin conexión.

### Fase 4: Flujos de Exportación Automatizada (El Enrutador de Datos)
- [ ] **Calendario y Tareas:** Sincronización automática de fechas límite (ej. fechas de vencimiento de facturas) hacia **Google Calendar, Apple iCal o Todoist**.
- [ ] **Sincronización de Contabilidad y Fiscalidad:** Exportación de datos financieros extraídos a herramientas como **DATEV, Lexoffice, SevDesk** (UE) o **QuickBooks** (US).
- [ ] **Integración con Bases de Conocimiento:** Sincronización ininterrumpida de información Markdown estructurada hacia **Obsidian** o **Notion** para conformar tu Segundo Cerebro.

---

## 📄 Licencia

Publicado bajo la licencia [MIT License](LICENSE). Úsalo libremente. Sé el dueño de tus datos.

---

<p align="center">
  <strong>Construido por la comunidad de <a href="https://openclaw.ai">OpenClaw</a></strong><br>
  <em>"Tus datos deberían trabajar para ti, no contra ti."</em>
</p>
