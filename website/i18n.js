// === DocuClaw i18n Translations ===
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
        ecosystem: "Part of the OpenClaw Ecosystem",
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
        footer_tagline: 'Built with 🦞 by the <a href="https://openclaw.ai" target="_blank" rel="noopener">OpenClaw</a> community.',
        footer_copy: '"Your data should work for you, not against you."'
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
        ecosystem: "OpenClaw 生态系统",
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
        footer_tagline: '由 <a href="https://openclaw.ai" target="_blank" rel="noopener">OpenClaw</a> 社区用 🦞 构建。',
        footer_copy: '"你的数据应该为你所用，而不是与你为敌。"'
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
        feat_ai_desc: "Multimodale LLMs extrahieren strukturierte Daten aus Scans, Fotos und E-Mails. Funktioniert mit Ollama, OpenAI oder jedem Modell.",
        feat_compliance_title: "Compliance-Ready",
        feat_compliance_desc: "Entwickelt mit eingebauten GoBD-, DSGVO- und Audit-Trail-Prinzipien. Enterprise-Grade von Tag eins.",
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
        ecosystem: "Teil des OpenClaw-Ökosystems",
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
        footer_tagline: 'Gebaut mit 🦞 von der <a href="https://openclaw.ai" target="_blank" rel="noopener">OpenClaw</a>-Community.',
        footer_copy: '"Ihre Daten sollten für Sie arbeiten, nicht gegen Sie."'
    },

    fr: {
        tagline: "VOS DOCUMENTS. VOS RÈGLES.",
        hero_desc: "Intelligence documentaire open-source, locale d'abord, propulsée par l'IA. Extrayez, organisez et archivez factures, reçus et contrats — 100% sur votre machine.",
        cta_github: "Voir sur GitHub",
        quick_start: "Démarrage rapide",
        what_it_does: "Fonctionnalités",
        feat_sovereign_title: "100% Souverain",
        feat_sovereign_desc: "Toutes les données restent sur VOTRE machine. Zéro dépendance cloud. Zéro télémétrie. Votre vie privée est non négociable.",
        feat_multi_title: "Multi-Entité",
        feat_multi_desc: "Gérez documents personnels, factures d'entreprise et fichiers d'équipe — tout en une seule installation.",
        feat_plugin_title: "Architecture Plugin",
        feat_plugin_desc: "Les parseurs spécifiques par pays s'emboîtent comme des LEGO. Allemagne, États-Unis, Chine — étendez DocuClaw pour toute locale.",
        feat_markdown_title: "Markdown-Natif",
        feat_markdown_desc: "Chaque document devient un fichier .md consultable avec un frontmatter YAML structuré.",
        feat_ai_title: "Extraction IA",
        feat_ai_desc: "Les LLM multimodaux extraient des données structurées à partir de scans, photos et e-mails.",
        feat_compliance_title: "Prêt pour la Conformité",
        feat_compliance_desc: "Conçu avec les principes GoBD (Allemagne), RGPD et piste d'audit intégrés.",
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
        ecosystem: "Partie de l'écosystème OpenClaw",
        eco_docuclaw: "Intelligence documentaire souveraine",
        eco_openclaw: "Assistant IA personnel sur toute plateforme",
        eco_clawhub: "Marketplace de plugins & hub communautaire",
        roadmap: "Feuille de route",
        road_1: "Schéma de base, moteur de stockage, framework de parseurs, CLI",
        road_2: "Adaptateur d'ingestion e-mail (IMAP / POP3)",
        road_3: "Intégration LLM multimodal réel (Ollama, OpenAI Vision)",
        road_4: "Tableau de bord Web UI (local uniquement, sans cloud)",
        road_5: "Piste d'audit conforme GoBD avec chaînes de hachage",
        road_6: "Modèle de permissions multi-entité & collaboration d'équipe",
        road_7: "Points d'entrée Webhook & API",
        license_link: "Licence MIT",
        footer_tagline: 'Construit avec 🦞 par la communauté <a href="https://openclaw.ai" target="_blank" rel="noopener">OpenClaw</a>.',
        footer_copy: '"Vos données devraient travailler pour vous, pas contre vous."'
    },

    es: {
        tagline: "TUS DOCUMENTOS. TUS REGLAS.",
        hero_desc: "Inteligencia documental de código abierto, local-first, impulsada por IA. Extrae, organiza y archiva facturas, recibos y contratos — 100% en tu máquina.",
        cta_github: "Ver en GitHub",
        quick_start: "Inicio rápido",
        what_it_does: "Qué hace",
        feat_sovereign_title: "100% Soberano",
        feat_sovereign_desc: "Todos los datos se quedan en TU máquina. Cero dependencia de la nube. Cero telemetría. Tu privacidad no es negociable.",
        feat_multi_title: "Multi-Entidad",
        feat_multi_desc: "Gestiona documentos personales, facturas de empresa y archivos de equipo — todo en una sola instalación.",
        feat_plugin_title: "Arquitectura de Plugins",
        feat_plugin_desc: "Los parsers específicos por país encajan como piezas de LEGO. Alemania, EE.UU., China — extiende DocuClaw para cualquier localidad.",
        feat_markdown_title: "Markdown-Nativo",
        feat_markdown_desc: "Cada documento se convierte en un archivo .md buscable con frontmatter YAML estructurado.",
        feat_ai_title: "Extracción con IA",
        feat_ai_desc: "Los LLM multimodales extraen datos estructurados de escaneos, fotos y correos electrónicos.",
        feat_compliance_title: "Preparado para Cumplimiento",
        feat_compliance_desc: "Diseñado con principios de GoBD (Alemania), GDPR y trazabilidad integrados.",
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
        ecosystem: "Parte del ecosistema OpenClaw",
        eco_docuclaw: "Inteligencia documental soberana",
        eco_openclaw: "Asistente IA personal en cualquier plataforma",
        eco_clawhub: "Marketplace de plugins y hub comunitario",
        roadmap: "Hoja de ruta",
        road_1: "Esquema base, motor de almacenamiento, framework de parsers, CLI",
        road_2: "Adaptador de ingesta de email (IMAP / POP3)",
        road_3: "Integración LLM multimodal real (Ollama, OpenAI Vision)",
        road_4: "Panel Web UI (solo local, sin nube)",
        road_5: "Trazabilidad conforme a GoBD con cadenas hash",
        road_6: "Modelo de permisos multi-entidad y colaboración en equipo",
        road_7: "Endpoints de ingesta Webhook y API",
        license_link: "Licencia MIT",
        footer_tagline: 'Construido con 🦞 por la comunidad <a href="https://openclaw.ai" target="_blank" rel="noopener">OpenClaw</a>.',
        footer_copy: '"Tus datos deberían trabajar para ti, no en tu contra."'
    },

    it: {
        tagline: "I TUOI DOCUMENTI. LE TUE REGOLE.",
        hero_desc: "Intelligenza documentale open-source, local-first, basata sull'IA. Estrai, organizza e archivia fatture, ricevute e contratti — 100% sulla tua macchina.",
        cta_github: "Vedi su GitHub",
        quick_start: "Avvio rapido",
        what_it_does: "Cosa fa",
        feat_sovereign_title: "100% Sovrano",
        feat_sovereign_desc: "Tutti i dati restano sulla TUA macchina. Zero dipendenza dal cloud. Zero telemetria. La tua privacy non è negoziabile.",
        feat_multi_title: "Multi-Entità",
        feat_multi_desc: "Gestisci documenti personali, fatture aziendali e file del team — tutto in un'unica installazione.",
        feat_plugin_title: "Architettura Plugin",
        feat_plugin_desc: "I parser specifici per paese si incastrano come mattoncini LEGO. Germania, USA, Cina — estendi DocuClaw per qualsiasi località.",
        feat_markdown_title: "Markdown-Nativo",
        feat_markdown_desc: "Ogni documento diventa un file .md ricercabile con frontmatter YAML strutturato.",
        feat_ai_title: "Estrazione IA",
        feat_ai_desc: "I LLM multimodali estraggono dati strutturati da scansioni, foto ed email.",
        feat_compliance_title: "Pronto per la Conformità",
        feat_compliance_desc: "Progettato con principi GoBD (Germania), GDPR e audit trail integrati.",
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
        ecosystem: "Parte dell'ecosistema OpenClaw",
        eco_docuclaw: "Intelligenza documentale sovrana",
        eco_openclaw: "Assistente IA personale su qualsiasi piattaforma",
        eco_clawhub: "Marketplace di plugin e hub comunitario",
        roadmap: "Roadmap",
        road_1: "Schema base, motore di storage, framework parser, CLI",
        road_2: "Adattatore di ingestione email (IMAP / POP3)",
        road_3: "Integrazione LLM multimodale reale (Ollama, OpenAI Vision)",
        road_4: "Dashboard Web UI (solo locale, nessun cloud)",
        road_5: "Audit trail conforme GoBD con catene hash",
        road_6: "Modello di permessi multi-entità e collaborazione di team",
        road_7: "Endpoint di ingestione Webhook e API",
        license_link: "Licenza MIT",
        footer_tagline: 'Costruito con 🦞 dalla community <a href="https://openclaw.ai" target="_blank" rel="noopener">OpenClaw</a>.',
        footer_copy: '"I tuoi dati dovrebbero lavorare per te, non contro di te."'
    },

    ja: {
        tagline: "あなたのドキュメント。あなたのルール。",
        hero_desc: "オープンソース、ローカルファースト、AIを活用したドキュメントインテリジェンス。請求書、領収書、契約書を抽出・整理・アーカイブ — 100%あなたのマシン上で。",
        cta_github: "GitHubで見る",
        quick_start: "クイックスタート",
        what_it_does: "機能紹介",
        feat_sovereign_title: "100% ソブリン",
        feat_sovereign_desc: "すべてのデータはあなたのマシンに残ります。クラウド依存ゼロ。テレメトリゼロ。あなたのプライバシーは交渉の余地なし。",
        feat_multi_title: "マルチエンティティ",
        feat_multi_desc: "個人の書類、会社の請求書、チームファイルを一つのインストールで管理。分離も統合も自由自在。",
        feat_plugin_title: "プラグインアーキテクチャ",
        feat_plugin_desc: "国別パーサーがレゴブロックのようにはめ込めます。ドイツ、米国、中国 — あらゆるロケールに対応。",
        feat_markdown_title: "Markdownネイティブ",
        feat_markdown_desc: "すべてのドキュメントが構造化YAML frontmatter付きの検索可能な .md ファイルに変換されます。",
        feat_ai_title: "AI駆動の抽出",
        feat_ai_desc: "マルチモーダルLLMがスキャン、写真、メールから構造化データを抽出します。",
        feat_compliance_title: "コンプライアンス対応",
        feat_compliance_desc: "GoBD（ドイツ）、GDPR、監査証跡の原則を組み込んで設計。初日からエンタープライズグレード。",
        architecture: "アーキテクチャ",
        data_contract: "データ契約",
        schema_desc: "すべてのドキュメントは構造化YAMLフロントマター付きのユニバーサルMarkdownスキーマに正規化されます。",
        how_it_works: "仕組み",
        pipe_input: "ドキュメント入力",
        pipe_input_sub: "スキャン、メール、API",
        pipe_extract: "AI抽出",
        pipe_extract_sub: "LLM駆動パーシング",
        pipe_validate: "バリデーション",
        pipe_validate_sub: "Pydanticスキーマチェック",
        pipe_archive: "ローカルアーカイブ",
        pipe_archive_sub: "構造化Markdown",
        ecosystem: "OpenClawエコシステムの一部",
        eco_docuclaw: "ソブリンドキュメントインテリジェンスとアーカイブ",
        eco_openclaw: "あらゆるプラットフォームで使えるパーソナルAIアシスタント",
        eco_clawhub: "プラグインマーケットプレイス＆コミュニティハブ",
        roadmap: "ロードマップ",
        road_1: "コアスキーマ、ストレージエンジン、パーサーフレームワーク、CLI",
        road_2: "メール取り込みアダプター（IMAP / POP3）",
        road_3: "実際のマルチモーダルLLM統合（Ollama、OpenAI Vision）",
        road_4: "Web UIダッシュボード（ローカルのみ、クラウドなし）",
        road_5: "GoBD準拠のハッシュチェーン監査証跡",
        road_6: "マルチエンティティ権限モデルとチームコラボレーション",
        road_7: "Webhook & API取り込みエンドポイント",
        license_link: "MITライセンス",
        footer_tagline: '<a href="https://openclaw.ai" target="_blank" rel="noopener">OpenClaw</a>コミュニティが🦞で構築。',
        footer_copy: '"あなたのデータは、あなたのために働くべきだ。"'
    }
};

// Language metadata for <html> lang attribute
const langMeta = {
    en: { lang: 'en', dir: 'ltr' },
    zh: { lang: 'zh', dir: 'ltr' },
    de: { lang: 'de', dir: 'ltr' },
    fr: { lang: 'fr', dir: 'ltr' },
    es: { lang: 'es', dir: 'ltr' },
    it: { lang: 'it', dir: 'ltr' },
    ja: { lang: 'ja', dir: 'ltr' }
};

// Apply translations
function setLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[key];
            } else {
                el.innerHTML = t[key];
            }
        }
    });

    // Update lang attribute
    const meta = langMeta[lang];
    document.documentElement.lang = meta.lang;
    document.documentElement.dir = meta.dir;

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Save preference
    localStorage.setItem('docuclaw-lang', lang);
}

// Initialize language from stored preference or browser
function initLanguage() {
    const stored = localStorage.getItem('docuclaw-lang');
    if (stored && translations[stored]) {
        setLanguage(stored);
        return;
    }

    // Detect browser language
    const nav = navigator.language || navigator.userLanguage;
    const short = nav.split('-')[0].toLowerCase();
    if (translations[short]) {
        setLanguage(short);
    } else {
        setLanguage('en');
    }
}

// Bind language buttons
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

// Init
initLanguage();
