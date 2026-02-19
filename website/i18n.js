// === DocuClaw i18n Translations ===

// Display labels for language switcher
const langLabels = {
    en: 'EN',
    zh: '中文',
    de: 'DE',
    fr: 'FR',
    es: 'ES',
    it: 'IT',
    ja: 'JA'
};

const translations = {
    en: {
        tagline: "YOUR DOCUMENTS. YOUR RULES.",
        hero_desc: "Open-source, local-first, AI-powered document intelligence. Extract, organize, and archive invoices, receipts, and contracts — 100% on your machine.",
        cta_github: "View on GitHub",
        quick_start: "Quick Start",
        what_it_does: "What It Does",
        feat_sovereign_title: "100% Sovereign",
        feat_sovereign_desc: "All data stays on YOUR machine. Zero cloud dependency. Zero telemetry. Your privacy is non-negotiable.",
        feat_multi_title: "Multi-Entity",
        feat_multi_desc: "Manage personal docs, company invoices, and team files — all in one install. Separate or combine as you wish.",
        feat_plugin_title: "Plugin Architecture",
        feat_plugin_desc: "Country-specific parsers snap in like LEGO bricks. Germany, US, China — extend DocuClaw for any locale.",
        feat_markdown_title: "Markdown-Native",
        feat_markdown_desc: "Every document becomes a searchable .md file with structured YAML frontmatter. Human-readable, version-controllable.",
        feat_ai_title: "AI-Powered Extraction",
        feat_ai_desc: "Multimodal LLM extracts structured data from scans, photos, and emails. Works with Ollama, OpenAI, or any model.",
        feat_compliance_title: "Compliance-Ready",
        feat_compliance_desc: "Designed with GoBD (Germany), GDPR, and audit-trail principles baked in. Enterprise-grade from day one.",
        gdpr_title: "GDPR & Compliance",
        gdpr_intro: "DocuClaw is designed from the ground up with EU GDPR compliance in mind. By keeping all data processing local and giving you full control, DocuClaw eliminates the most common compliance risks associated with cloud-based document management.",
        gdpr_local_title: "Local-First by Design",
        gdpr_local_desc: "No data leaves your machine — ever. No third-party servers, no cross-border data transfers, no sub-processors. Full compliance with GDPR Articles 44–49 on international data transfers by simply not transferring data at all.",
        gdpr_minimization_title: "Data Minimization",
        gdpr_minimization_desc: "DocuClaw only extracts and stores the structured fields you define. No hidden telemetry, no usage analytics, no behavioral tracking. Aligned with GDPR Article 5(1)(c) — data minimization principle.",
        gdpr_erasure_title: "Right to Erasure",
        gdpr_erasure_desc: "Since all data is stored as plain Markdown files on your local filesystem, exercising the right to erasure (GDPR Article 17) is as simple as deleting a file. No vendor lock-in, no deletion request tickets.",
        gdpr_audit_title: "Audit Trail & Accountability",
        gdpr_audit_desc: "Built-in audit logging and hash-chain integrity verification support GDPR Article 5(2) accountability requirements and GoBD (Germany) compliant archival standards.",
        architecture: "Architecture",
        data_contract: "The Data Contract",
        schema_desc: "Every document, whether a €10K enterprise invoice or a personal electricity bill, is normalized into a universal Markdown schema with structured YAML frontmatter.",
        how_it_works: "How It Works",
        pipe_input: "Document Input",
        pipe_input_sub: "Scan, email, or API",
        pipe_extract: "AI Extraction",
        pipe_extract_sub: "LLM-powered parsing",
        pipe_validate: "Validation",
        pipe_validate_sub: "Pydantic schema check",
        pipe_archive: "Local Archive",
        pipe_archive_sub: "Structured Markdown",
        ecosystem: "Ecosystem",
        eco_docuclaw: "Sovereign document intelligence & archival",
        eco_openclaw: "Personal AI assistant on any platform",
        eco_clawhub: "Plugin marketplace & community hub",
        roadmap: "Roadmap",
        road_1: "Core schema, storage engine, parser framework, CLI",
        road_2: "Email ingestion adapter (IMAP / POP3)",
        road_3: "Real multimodal LLM integration (Ollama, OpenAI Vision)",
        road_4: "Web UI dashboard (local-only, no cloud)",
        road_5: "GoBD-compliant audit trail with hash chains",
        road_6: "Multi-entity permission model & team collaboration",
        road_7: "Webhook & API ingestion endpoints",
        license_link: "MIT License",
        footer_tagline: 'Built with 🦞 by <a href="https://astonysh.com" target="_blank" rel="noopener">AsTonySh</a>.',
        footer_copy: '"Your data should work for you, not against you."',
        footer_disclaimer: 'DocuClaw is an independent project created by <a href="https://astonysh.com" target="_blank" rel="noopener">AsTonySh</a>. It is not affiliated with or endorsed by OpenClaw.'
    },

    zh: {
        tagline: "你的文档。你的规则。",
        hero_desc: "开源、本地优先、AI 驱动的文档智能系统。提取、整理和归档发票、收据和合同 —— 100% 在你的设备上完成。",
        cta_github: "在 GitHub 上查看",
        quick_start: "快速开始",
        what_it_does: "核心功能",
        feat_sovereign_title: "100% 数据主权",
        feat_sovereign_desc: "所有数据都留在你自己的机器上。零云端依赖，零遥测追踪。你的隐私不容置疑。",
        feat_multi_title: "多实体管理",
        feat_multi_desc: "在一个安装中管理个人文档、公司发票和团队文件。随心所欲地分开或合并。",
        feat_plugin_title: "插件架构",
        feat_plugin_desc: "国家/地区专属解析器像乐高积木一样即插即用。德国、美国、中国 —— 为任何地区扩展 DocuClaw。",
        feat_markdown_title: "Markdown 原生",
        feat_markdown_desc: "每份文档都变成可搜索的 .md 文件，包含结构化 YAML 元数据。人类可读，版本可控。",
        feat_ai_title: "AI 智能提取",
        feat_ai_desc: "多模态 LLM 从扫描件、照片和邮件中提取结构化数据。支持 Ollama、OpenAI 或任何模型。",
        feat_compliance_title: "合规就绪",
        feat_compliance_desc: "内置 GoBD（德国）、GDPR 和审计追踪原则。从第一天起就达到企业级标准。",
        gdpr_title: "GDPR 与合规",
        gdpr_intro: "DocuClaw 从底层架构开始就以符合欧盟 GDPR 为核心设计原则。通过将所有数据处理保持在本地并赋予你完全控制权，DocuClaw 从根本上消除了云端文档管理的常见合规风险。",
        gdpr_local_title: "本地优先架构",
        gdpr_local_desc: "数据永远不会离开你的设备。没有第三方服务器，没有跨境数据传输，没有数据子处理者。通过根本不传输数据来完全符合 GDPR 第 44-49 条关于国际数据传输的规定。",
        gdpr_minimization_title: "数据最小化",
        gdpr_minimization_desc: "DocuClaw 仅提取和存储你定义的结构化字段。没有隐藏的遥测、没有使用分析、没有行为追踪。符合 GDPR 第 5(1)(c) 条数据最小化原则。",
        gdpr_erasure_title: "被遗忘权",
        gdpr_erasure_desc: "所有数据都存储在你本地文件系统的纯 Markdown 文件中，行使被遗忘权（GDPR 第 17 条）只需删除一个文件。无供应商锁定，无删除请求工单。",
        gdpr_audit_title: "审计追踪与问责",
        gdpr_audit_desc: "内置审计日志和哈希链完整性验证，支持 GDPR 第 5(2) 条问责要求和 GoBD（德国）合规归档标准。",
        architecture: "架构设计",
        data_contract: "数据契约",
        schema_desc: "每份文档，无论是 10 万欧元的企业发票还是个人电费单，都会被标准化为通用的 Markdown 模式，带有结构化的 YAML 前置元数据。",
        how_it_works: "工作流程",
        pipe_input: "文档输入",
        pipe_input_sub: "扫描、邮件或 API",
        pipe_extract: "AI 提取",
        pipe_extract_sub: "LLM 驱动的解析",
        pipe_validate: "数据验证",
        pipe_validate_sub: "Pydantic 模式检查",
        pipe_archive: "本地归档",
        pipe_archive_sub: "结构化 Markdown",
        ecosystem: "生态系统",
        eco_docuclaw: "主权文档智能与归档",
        eco_openclaw: "任何平台上的个人 AI 助手",
        eco_clawhub: "插件市场与社区中心",
        roadmap: "路线图",
        road_1: "核心模式、存储引擎、解析器框架、CLI",
        road_2: "邮件接入适配器 (IMAP / POP3)",
        road_3: "真正的多模态 LLM 集成 (Ollama, OpenAI Vision)",
        road_4: "Web UI 仪表盘（纯本地，无云端）",
        road_5: "符合 GoBD 的审计追踪和哈希链",
        road_6: "多实体权限模型与团队协作",
        road_7: "Webhook 与 API 接入端点",
        license_link: "MIT 许可证",
        footer_tagline: '由 <a href="https://astonysh.com" target="_blank" rel="noopener">AsTonySh</a> 用 🦞 构建。',
        footer_copy: '"你的数据应该为你所用，而不是与你为敌。"',
        footer_disclaimer: 'DocuClaw 是由 <a href="https://astonysh.com" target="_blank" rel="noopener">AsTonySh</a> 创建的独立项目，与 OpenClaw 没有任何关联。'
    },

    de: {
        tagline: "IHRE DOKUMENTE. IHRE REGELN.",
        hero_desc: "Open-Source, Local-First, KI-gestützte Dokumentenintelligenz. Extrahieren, organisieren und archivieren Sie Rechnungen, Belege und Verträge — 100% auf Ihrem Rechner.",
        cta_github: "Auf GitHub ansehen",
        quick_start: "Schnellstart",
        what_it_does: "Funktionen",
        feat_sovereign_title: "100% Souverän",
        feat_sovereign_desc: "Alle Daten bleiben auf IHREM Rechner. Keine Cloud-Abhängigkeit. Keine Telemetrie. Ihre Privatsphäre ist nicht verhandelbar.",
        feat_multi_title: "Multi-Entity",
        feat_multi_desc: "Verwalten Sie persönliche Dokumente, Firmenrechnungen und Team-Dateien — alles in einer Installation.",
        feat_plugin_title: "Plugin-Architektur",
        feat_plugin_desc: "Länderspezifische Parser rasten wie LEGO-Steine ein. Deutschland, USA, China — erweitern Sie DocuClaw für jeden Standort.",
        feat_markdown_title: "Markdown-Nativ",
        feat_markdown_desc: "Jedes Dokument wird zu einer durchsuchbaren .md-Datei mit strukturiertem YAML-Frontmatter.",
        feat_ai_title: "KI-Extraktion",
        feat_ai_desc: "Multimodale LLMs extrahieren strukturierte Daten aus Scans, Fotos und E-Mails.",
        feat_compliance_title: "Compliance-Ready",
        feat_compliance_desc: "Entwickelt mit eingebauten GoBD-, DSGVO- und Audit-Trail-Prinzipien. Enterprise-Grade von Tag eins.",
        gdpr_title: "DSGVO & Compliance",
        gdpr_intro: "DocuClaw wurde von Grund auf mit Blick auf die EU-DSGVO-Konformität entwickelt. Durch die ausschließlich lokale Datenverarbeitung und volle Datenkontrolle eliminiert DocuClaw die häufigsten Compliance-Risiken cloudbasierter Dokumentenverwaltung.",
        gdpr_local_title: "Local-First by Design",
        gdpr_local_desc: "Keine Daten verlassen Ihren Rechner — niemals. Keine Drittanbieter-Server, keine grenzüberschreitenden Datentransfers, keine Unterauftragnehmer. Volle Konformität mit DSGVO Art. 44–49 durch schlichten Verzicht auf Datenübertragung.",
        gdpr_minimization_title: "Datenminimierung",
        gdpr_minimization_desc: "DocuClaw extrahiert und speichert nur die von Ihnen definierten strukturierten Felder. Keine versteckte Telemetrie, keine Nutzungsanalysen, kein Verhaltenstracking. Konform mit DSGVO Art. 5(1)(c) — Grundsatz der Datenminimierung.",
        gdpr_erasure_title: "Recht auf Löschung",
        gdpr_erasure_desc: "Da alle Daten als einfache Markdown-Dateien auf Ihrem lokalen Dateisystem gespeichert werden, ist die Ausübung des Rechts auf Löschung (DSGVO Art. 17) so einfach wie das Löschen einer Datei. Kein Vendor Lock-in, keine Löschanträge.",
        gdpr_audit_title: "Audit-Trail & Rechenschaftspflicht",
        gdpr_audit_desc: "Integriertes Audit-Logging und Hash-Ketten-Integritätsprüfung unterstützen die Rechenschaftspflicht nach DSGVO Art. 5(2) und GoBD-konforme Archivierungsstandards.",
        architecture: "Architektur",
        data_contract: "Der Datenvertrag",
        schema_desc: "Jedes Dokument wird in ein universelles Markdown-Schema mit strukturiertem YAML-Frontmatter normalisiert.",
        how_it_works: "So funktioniert es",
        pipe_input: "Dokumenten-Eingang",
        pipe_input_sub: "Scan, E-Mail oder API",
        pipe_extract: "KI-Extraktion",
        pipe_extract_sub: "LLM-gestütztes Parsing",
        pipe_validate: "Validierung",
        pipe_validate_sub: "Pydantic-Schema-Check",
        pipe_archive: "Lokales Archiv",
        pipe_archive_sub: "Strukturiertes Markdown",
        ecosystem: "Ökosystem",
        eco_docuclaw: "Souveräne Dokumentenintelligenz & -archivierung",
        eco_openclaw: "Persönlicher KI-Assistent auf jeder Plattform",
        eco_clawhub: "Plugin-Marktplatz & Community-Hub",
        roadmap: "Roadmap",
        road_1: "Core-Schema, Speicher-Engine, Parser-Framework, CLI",
        road_2: "E-Mail-Aufnahme-Adapter (IMAP / POP3)",
        road_3: "Echte multimodale LLM-Integration (Ollama, OpenAI Vision)",
        road_4: "Web-UI-Dashboard (nur lokal, keine Cloud)",
        road_5: "GoBD-konformer Audit-Trail mit Hash-Ketten",
        road_6: "Multi-Entity-Berechtigungsmodell & Teamzusammenarbeit",
        road_7: "Webhook- & API-Aufnahme-Endpunkte",
        license_link: "MIT-Lizenz",
        footer_tagline: 'Gebaut mit 🦞 von <a href="https://astonysh.com" target="_blank" rel="noopener">AsTonySh</a>.',
        footer_copy: '"Ihre Daten sollten für Sie arbeiten, nicht gegen Sie."',
        footer_disclaimer: 'DocuClaw ist ein unabhängiges Projekt von <a href="https://astonysh.com" target="_blank" rel="noopener">AsTonySh</a>. Es steht in keiner Verbindung zu OpenClaw.'
    },

    fr: {
        tagline: "VOS DOCUMENTS. VOS RÈGLES.",
        hero_desc: "Intelligence documentaire open-source, locale d'abord, propulsée par l'IA. Extrayez, organisez et archivez factures, reçus et contrats — 100% sur votre machine.",
        cta_github: "Voir sur GitHub",
        quick_start: "Démarrage rapide",
        what_it_does: "Fonctionnalités",
        feat_sovereign_title: "100% Souverain",
        feat_sovereign_desc: "Toutes les données restent sur VOTRE machine. Zéro dépendance cloud. Zéro télémétrie.",
        feat_multi_title: "Multi-Entité",
        feat_multi_desc: "Gérez documents personnels, factures d'entreprise et fichiers d'équipe — tout en une seule installation.",
        feat_plugin_title: "Architecture Plugin",
        feat_plugin_desc: "Les parseurs spécifiques par pays s'emboîtent comme des LEGO.",
        feat_markdown_title: "Markdown-Natif",
        feat_markdown_desc: "Chaque document devient un fichier .md consultable avec un frontmatter YAML structuré.",
        feat_ai_title: "Extraction IA",
        feat_ai_desc: "Les LLM multimodaux extraient des données structurées à partir de scans, photos et e-mails.",
        feat_compliance_title: "Prêt pour la Conformité",
        feat_compliance_desc: "Conçu avec les principes GoBD (Allemagne), RGPD et piste d'audit intégrés.",
        gdpr_title: "RGPD & Conformité",
        gdpr_intro: "DocuClaw est conçu dès le départ avec la conformité au RGPD de l'UE comme principe fondamental. En gardant tout le traitement des données en local et en vous donnant un contrôle total, DocuClaw élimine les risques de conformité les plus courants.",
        gdpr_local_title: "Local-First par conception",
        gdpr_local_desc: "Aucune donnée ne quitte votre machine — jamais. Pas de serveurs tiers, pas de transferts transfrontaliers, pas de sous-traitants. Conformité totale avec les articles 44–49 du RGPD.",
        gdpr_minimization_title: "Minimisation des données",
        gdpr_minimization_desc: "DocuClaw n'extrait et ne stocke que les champs structurés que vous définissez. Aucune télémétrie cachée, aucune analyse d'utilisation. Conforme à l'article 5(1)(c) du RGPD.",
        gdpr_erasure_title: "Droit à l'effacement",
        gdpr_erasure_desc: "Toutes les données sont stockées en fichiers Markdown sur votre système local. Exercer le droit à l'effacement (article 17 du RGPD) est aussi simple que supprimer un fichier.",
        gdpr_audit_title: "Piste d'audit & Responsabilité",
        gdpr_audit_desc: "Journalisation d'audit intégrée et vérification d'intégrité par chaîne de hachage, conformes aux exigences de responsabilité de l'article 5(2) du RGPD et aux normes GoBD.",
        architecture: "Architecture",
        data_contract: "Le Contrat de Données",
        schema_desc: "Chaque document est normalisé en un schéma Markdown universel avec un frontmatter YAML structuré.",
        how_it_works: "Comment ça marche",
        pipe_input: "Entrée Document",
        pipe_input_sub: "Scan, e-mail ou API",
        pipe_extract: "Extraction IA",
        pipe_extract_sub: "Parsing piloté par LLM",
        pipe_validate: "Validation",
        pipe_validate_sub: "Vérification schéma Pydantic",
        pipe_archive: "Archive Locale",
        pipe_archive_sub: "Markdown structuré",
        ecosystem: "Écosystème",
        eco_docuclaw: "Intelligence documentaire souveraine",
        eco_openclaw: "Assistant IA personnel sur toute plateforme",
        eco_clawhub: "Marketplace de plugins & hub communautaire",
        roadmap: "Feuille de route",
        road_1: "Schéma de base, moteur de stockage, framework de parseurs, CLI",
        road_2: "Adaptateur d'ingestion e-mail (IMAP / POP3)",
        road_3: "Intégration LLM multimodal réel (Ollama, OpenAI Vision)",
        road_4: "Tableau de bord Web UI (local uniquement)",
        road_5: "Piste d'audit conforme GoBD avec chaînes de hachage",
        road_6: "Modèle de permissions multi-entité & collaboration",
        road_7: "Points d'entrée Webhook & API",
        license_link: "Licence MIT",
        footer_tagline: 'Construit avec 🦞 par <a href="https://astonysh.com" target="_blank" rel="noopener">AsTonySh</a>.',
        footer_copy: '"Vos données devraient travailler pour vous, pas contre vous."',
        footer_disclaimer: 'DocuClaw est un projet indépendant créé par <a href="https://astonysh.com" target="_blank" rel="noopener">AsTonySh</a>. Il n\'est pas affilié à OpenClaw.'
    },

    es: {
        tagline: "TUS DOCUMENTOS. TUS REGLAS.",
        hero_desc: "Inteligencia documental de código abierto, local-first, impulsada por IA. Extrae, organiza y archiva facturas, recibos y contratos — 100% en tu máquina.",
        cta_github: "Ver en GitHub",
        quick_start: "Inicio rápido",
        what_it_does: "Qué hace",
        feat_sovereign_title: "100% Soberano",
        feat_sovereign_desc: "Todos los datos se quedan en TU máquina. Cero dependencia de la nube. Cero telemetría.",
        feat_multi_title: "Multi-Entidad",
        feat_multi_desc: "Gestiona documentos personales, facturas de empresa y archivos de equipo — todo en una sola instalación.",
        feat_plugin_title: "Arquitectura de Plugins",
        feat_plugin_desc: "Los parsers específicos por país encajan como piezas de LEGO.",
        feat_markdown_title: "Markdown-Nativo",
        feat_markdown_desc: "Cada documento se convierte en un archivo .md buscable con frontmatter YAML estructurado.",
        feat_ai_title: "Extracción con IA",
        feat_ai_desc: "Los LLM multimodales extraen datos estructurados de escaneos, fotos y correos electrónicos.",
        feat_compliance_title: "Preparado para Cumplimiento",
        feat_compliance_desc: "Diseñado con principios de GoBD (Alemania), GDPR y trazabilidad integrados.",
        gdpr_title: "GDPR y Cumplimiento",
        gdpr_intro: "DocuClaw está diseñado desde cero con el cumplimiento del RGPD de la UE como principio fundamental. Al mantener todo el procesamiento de datos en local y darte control total, DocuClaw elimina los riesgos de cumplimiento más comunes.",
        gdpr_local_title: "Local-First por diseño",
        gdpr_local_desc: "Ningún dato sale de tu máquina — nunca. Sin servidores de terceros, sin transferencias transfronterizas. Cumplimiento total con los artículos 44–49 del RGPD.",
        gdpr_minimization_title: "Minimización de datos",
        gdpr_minimization_desc: "DocuClaw solo extrae y almacena los campos estructurados que definas. Sin telemetría oculta, sin análisis de uso. Conforme al artículo 5(1)(c) del RGPD.",
        gdpr_erasure_title: "Derecho al olvido",
        gdpr_erasure_desc: "Todos los datos se almacenan como archivos Markdown en tu sistema local. Ejercer el derecho al olvido (artículo 17 del RGPD) es tan simple como eliminar un archivo.",
        gdpr_audit_title: "Trazabilidad y Responsabilidad",
        gdpr_audit_desc: "Registro de auditoría integrado y verificación de integridad mediante cadenas hash, conforme a los requisitos de responsabilidad del artículo 5(2) del RGPD y estándares GoBD.",
        architecture: "Arquitectura",
        data_contract: "El Contrato de Datos",
        schema_desc: "Cada documento se normaliza en un esquema Markdown universal con frontmatter YAML estructurado.",
        how_it_works: "Cómo funciona",
        pipe_input: "Entrada de Documento",
        pipe_input_sub: "Escaneo, email o API",
        pipe_extract: "Extracción IA",
        pipe_extract_sub: "Parsing con LLM",
        pipe_validate: "Validación",
        pipe_validate_sub: "Verificación esquema Pydantic",
        pipe_archive: "Archivo Local",
        pipe_archive_sub: "Markdown estructurado",
        ecosystem: "Ecosistema",
        eco_docuclaw: "Inteligencia documental soberana",
        eco_openclaw: "Asistente IA personal en cualquier plataforma",
        eco_clawhub: "Marketplace de plugins y hub comunitario",
        roadmap: "Hoja de ruta",
        road_1: "Esquema base, motor de almacenamiento, framework de parsers, CLI",
        road_2: "Adaptador de ingesta de email (IMAP / POP3)",
        road_3: "Integración LLM multimodal real (Ollama, OpenAI Vision)",
        road_4: "Panel Web UI (solo local, sin nube)",
        road_5: "Trazabilidad conforme a GoBD con cadenas hash",
        road_6: "Modelo de permisos multi-entidad y colaboración",
        road_7: "Endpoints de ingesta Webhook y API",
        license_link: "Licencia MIT",
        footer_tagline: 'Construido con 🦞 por <a href="https://astonysh.com" target="_blank" rel="noopener">AsTonySh</a>.',
        footer_copy: '"Tus datos deberían trabajar para ti, no en tu contra."',
        footer_disclaimer: 'DocuClaw es un proyecto independiente creado por <a href="https://astonysh.com" target="_blank" rel="noopener">AsTonySh</a>. No está afiliado a OpenClaw.'
    },

    it: {
        tagline: "I TUOI DOCUMENTI. LE TUE REGOLE.",
        hero_desc: "Intelligenza documentale open-source, local-first, basata sull'IA. Estrai, organizza e archivia fatture, ricevute e contratti — 100% sulla tua macchina.",
        cta_github: "Vedi su GitHub",
        quick_start: "Avvio rapido",
        what_it_does: "Cosa fa",
        feat_sovereign_title: "100% Sovrano",
        feat_sovereign_desc: "Tutti i dati restano sulla TUA macchina. Zero dipendenza dal cloud. Zero telemetria.",
        feat_multi_title: "Multi-Entità",
        feat_multi_desc: "Gestisci documenti personali, fatture aziendali e file del team — tutto in un'unica installazione.",
        feat_plugin_title: "Architettura Plugin",
        feat_plugin_desc: "I parser specifici per paese si incastrano come mattoncini LEGO.",
        feat_markdown_title: "Markdown-Nativo",
        feat_markdown_desc: "Ogni documento diventa un file .md ricercabile con frontmatter YAML strutturato.",
        feat_ai_title: "Estrazione IA",
        feat_ai_desc: "I LLM multimodali estraggono dati strutturati da scansioni, foto ed email.",
        feat_compliance_title: "Pronto per la Conformità",
        feat_compliance_desc: "Progettato con principi GoBD (Germania), GDPR e audit trail integrati.",
        gdpr_title: "GDPR e Conformità",
        gdpr_intro: "DocuClaw è progettato fin dalle fondamenta con la conformità al GDPR dell'UE come principio di design fondamentale. Mantenendo tutto il trattamento dei dati in locale e dandoti il pieno controllo, DocuClaw elimina i rischi di conformità più comuni.",
        gdpr_local_title: "Local-First per design",
        gdpr_local_desc: "Nessun dato lascia la tua macchina — mai. Nessun server di terze parti, nessun trasferimento transfrontaliero. Piena conformità con gli articoli 44–49 del GDPR.",
        gdpr_minimization_title: "Minimizzazione dei dati",
        gdpr_minimization_desc: "DocuClaw estrae e memorizza solo i campi strutturati che definisci. Nessuna telemetria nascosta, nessuna analisi di utilizzo. Conforme all'articolo 5(1)(c) del GDPR.",
        gdpr_erasure_title: "Diritto alla cancellazione",
        gdpr_erasure_desc: "Tutti i dati sono memorizzati come file Markdown sul tuo filesystem locale. Esercitare il diritto alla cancellazione (articolo 17 del GDPR) è semplice come eliminare un file.",
        gdpr_audit_title: "Audit Trail e Responsabilità",
        gdpr_audit_desc: "Logging di audit integrato e verifica dell'integrità tramite catene hash, conformi ai requisiti di responsabilità dell'articolo 5(2) del GDPR e agli standard GoBD.",
        architecture: "Architettura",
        data_contract: "Il Contratto Dati",
        schema_desc: "Ogni documento viene normalizzato in uno schema Markdown universale con frontmatter YAML strutturato.",
        how_it_works: "Come funziona",
        pipe_input: "Input Documento",
        pipe_input_sub: "Scansione, email o API",
        pipe_extract: "Estrazione IA",
        pipe_extract_sub: "Parsing basato su LLM",
        pipe_validate: "Validazione",
        pipe_validate_sub: "Verifica schema Pydantic",
        pipe_archive: "Archivio Locale",
        pipe_archive_sub: "Markdown strutturato",
        ecosystem: "Ecosistema",
        eco_docuclaw: "Intelligenza documentale sovrana",
        eco_openclaw: "Assistente IA personale su qualsiasi piattaforma",
        eco_clawhub: "Marketplace di plugin e hub comunitario",
        roadmap: "Roadmap",
        road_1: "Schema base, motore di storage, framework parser, CLI",
        road_2: "Adattatore di ingestione email (IMAP / POP3)",
        road_3: "Integrazione LLM multimodale reale (Ollama, OpenAI Vision)",
        road_4: "Dashboard Web UI (solo locale)",
        road_5: "Audit trail conforme GoBD con catene hash",
        road_6: "Modello di permessi multi-entità e collaborazione",
        road_7: "Endpoint di ingestione Webhook e API",
        license_link: "Licenza MIT",
        footer_tagline: 'Costruito con 🦞 da <a href="https://astonysh.com" target="_blank" rel="noopener">AsTonySh</a>.',
        footer_copy: '"I tuoi dati dovrebbero lavorare per te, non contro di te."',
        footer_disclaimer: 'DocuClaw è un progetto indipendente creato da <a href="https://astonysh.com" target="_blank" rel="noopener">AsTonySh</a>. Non è affiliato a OpenClaw.'
    },

    ja: {
        tagline: "あなたのドキュメント。あなたのルール。",
        hero_desc: "オープンソース、ローカルファースト、AI活用のドキュメントインテリジェンス。請求書、領収書、契約書を抽出・整理・アーカイブ — 100%あなたのマシンで。",
        cta_github: "GitHubで見る",
        quick_start: "クイックスタート",
        what_it_does: "機能紹介",
        feat_sovereign_title: "100% ソブリン",
        feat_sovereign_desc: "すべてのデータはあなたのマシンに。クラウド依存ゼロ。テレメトリゼロ。",
        feat_multi_title: "マルチエンティティ",
        feat_multi_desc: "個人の書類、会社の請求書、チームファイルを一つのインストールで管理。",
        feat_plugin_title: "プラグインアーキテクチャ",
        feat_plugin_desc: "国別パーサーがレゴブロックのようにはめ込めます。",
        feat_markdown_title: "Markdownネイティブ",
        feat_markdown_desc: "すべてのドキュメントが構造化YAML frontmatter付きの .md ファイルに。",
        feat_ai_title: "AI駆動の抽出",
        feat_ai_desc: "マルチモーダルLLMがスキャン、写真、メールから構造化データを抽出。",
        feat_compliance_title: "コンプライアンス対応",
        feat_compliance_desc: "GoBD、GDPR、監査証跡を組み込み設計。初日からエンタープライズグレード。",
        gdpr_title: "GDPR とコンプライアンス",
        gdpr_intro: "DocuClawはEU GDPRコンプライアンスを基本設計原則として、ゼロから設計されています。すべてのデータ処理をローカルに保ち、完全な制御を提供することで、クラウドベースの文書管理に伴う一般的なコンプライアンスリスクを排除します。",
        gdpr_local_title: "設計からローカルファースト",
        gdpr_local_desc: "データはマシンから出ません — 決して。サードパーティサーバーなし、国際データ転送なし。GDPR第44-49条に完全準拠。",
        gdpr_minimization_title: "データ最小化",
        gdpr_minimization_desc: "DocuClawは定義した構造化フィールドのみを抽出・保存。隠れたテレメトリ、利用分析、行動追跡なし。GDPR第5条(1)(c)に準拠。",
        gdpr_erasure_title: "消去権",
        gdpr_erasure_desc: "すべてのデータはローカルファイルシステム上のMarkdownファイルとして保存。消去権（GDPR第17条）の行使はファイル削除と同じくらい簡単です。",
        gdpr_audit_title: "監査証跡とアカウンタビリティ",
        gdpr_audit_desc: "内蔵の監査ログとハッシュチェーン整合性検証により、GDPR第5条(2)のアカウンタビリティ要件とGoBD準拠のアーカイブ基準をサポート。",
        architecture: "アーキテクチャ",
        data_contract: "データ契約",
        schema_desc: "すべてのドキュメントは構造化YAML付きのユニバーサルMarkdownスキーマに正規化されます。",
        how_it_works: "仕組み",
        pipe_input: "ドキュメント入力",
        pipe_input_sub: "スキャン、メール、API",
        pipe_extract: "AI抽出",
        pipe_extract_sub: "LLM駆動パーシング",
        pipe_validate: "バリデーション",
        pipe_validate_sub: "Pydanticスキーマチェック",
        pipe_archive: "ローカルアーカイブ",
        pipe_archive_sub: "構造化Markdown",
        ecosystem: "エコシステム",
        eco_docuclaw: "ソブリンドキュメントインテリジェンス",
        eco_openclaw: "あらゆるプラットフォームのパーソナルAIアシスタント",
        eco_clawhub: "プラグインマーケットプレイス＆コミュニティ",
        roadmap: "ロードマップ",
        road_1: "コアスキーマ、ストレージエンジン、パーサーフレームワーク、CLI",
        road_2: "メール取り込みアダプター（IMAP / POP3）",
        road_3: "マルチモーダルLLM統合（Ollama、OpenAI Vision）",
        road_4: "Web UIダッシュボード（ローカルのみ）",
        road_5: "GoBD準拠のハッシュチェーン監査証跡",
        road_6: "マルチエンティティ権限モデルとチームコラボレーション",
        road_7: "Webhook & API取り込みエンドポイント",
        license_link: "MITライセンス",
        footer_tagline: '<a href="https://astonysh.com" target="_blank" rel="noopener">AsTonySh</a>が🦞で構築。',
        footer_copy: '"あなたのデータは、あなたのために働くべきだ。"',
        footer_disclaimer: 'DocuClawは<a href="https://astonysh.com" target="_blank" rel="noopener">AsTonySh</a>による独立プロジェクトです。OpenClawとは提携・関連はありません。'
    }
};

// Apply translations
function setLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.innerHTML = t[key];
        }
    });

    // Update <html> lang
    document.documentElement.lang = lang;

    // Update current language label
    const label = document.getElementById('lang-current-label');
    if (label) label.textContent = langLabels[lang] || lang.toUpperCase();

    // Update active state in dropdown
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === lang);
    });

    // Save preference
    localStorage.setItem('docuclaw-lang', lang);
}

// Initialize language from stored pref → URL path → browser lang → 'en'
function initLanguage() {
    // 1. Stored preference
    const stored = localStorage.getItem('docuclaw-lang');
    if (stored && translations[stored]) {
        setLanguage(stored);
        return;
    }

    // 2. URL path (e.g. /zh/ or /de/)
    const pathLang = window.location.pathname.split('/').filter(Boolean)[0];
    if (pathLang && translations[pathLang]) {
        setLanguage(pathLang);
        return;
    }

    // 3. Browser language
    const navLangs = navigator.languages || [navigator.language || navigator.userLanguage || 'en'];
    for (const navLang of navLangs) {
        const short = navLang.split('-')[0].toLowerCase();
        if (translations[short]) {
            setLanguage(short);
            return;
        }
    }

    // 4. Default to English
    setLanguage('en');
}

// Bind dropdown options
document.querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', (e) => {
        e.stopPropagation();
        setLanguage(opt.dataset.lang);
        // Close dropdown on mobile after selection
        document.getElementById('lang-switcher').classList.remove('open');
    });
});

// Toggle dropdown on tap (for touch devices)
const langCurrentBtn = document.getElementById('lang-current');
if (langCurrentBtn) {
    langCurrentBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const switcher = document.getElementById('lang-switcher');
        switcher.classList.toggle('open');
    });
}

// Close dropdown when clicking outside
document.addEventListener('click', () => {
    document.getElementById('lang-switcher').classList.remove('open');
});

// Init
initLanguage();
