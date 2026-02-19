<p align="center">
  <img src="../../assets/logo.svg" alt="DocuClaw Logo" width="160" />
</p>

<h1 align="center">DocuClaw</h1>

<p align="center">
  <strong>🦀 面向个人与团队的全域数据主权基座 (Universal Sovereign Data Infrastructure)</strong>
</p>

<p align="center">
  <a href="https://github.com/openclaw-ai/docuclaw/actions"><img src="https://img.shields.io/github/actions/workflow/status/openclaw-ai/docuclaw/ci.yml?branch=main&style=flat-square" alt="CI"></a>
  <a href="https://pypi.org/project/docuclaw/"><img src="https://img.shields.io/pypi/v/docuclaw?style=flat-square&color=blue" alt="PyPI"></a>
  <a href="https://pypi.org/project/docuclaw/"><img src="https://img.shields.io/pypi/pyversions/docuclaw?style=flat-square" alt="Python"></a>
  <a href="https://github.com/openclaw-ai/docuclaw/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="License"></a>
  <a href="https://openclaw.ai"><img src="https://img.shields.io/badge/ecosystem-OpenClaw.ai-purple?style=flat-square" alt="OpenClaw"></a>
</p>

<p align="center">
  <em>你的发票。你的合同。你的信件。你的数据。<strong>由你掌控。</strong></em>
</p>

---

## 🚀 为什么选择 DocuClaw？

在 SaaS 平台锁定和云端监视横行的世界里，**DocuClaw** 将控制权重新交还给你。

无论你是管理个人税务收据的自由职业者，还是跨国处理 B2B 发票的初创公司，亦或者是面临德国 GoBD 合规审计的中小微企业（SME）—— DocuClaw 都是你的 **本地优先、隐私原生、AI 驱动的文档大脑**。

```
📄 实体信件 → 📸 扫描 → 🤖 AI 提取 → 📁 本地 Markdown 归档
📧 邮件收据 → 🔗 Webhook → 🤖 AI 提取 → 📁 本地 Markdown 归档
🧾 API 发票  → 🔌 插件  → 🤖 AI 提取 → 📁 本地 Markdown 归档
```

### ✨ 核心特性

| 特性 | 描述 |
|---------|-------------|
| 🛡️ **100% 数据主权** | 所有数据保留在你的机器上。零云端依赖。零遥测采集。 |
| 🏢 **多实体支持** | 在同一个实例中管理个人文档、公司发票和团队文件。 |
| 🔌 **插件化架构** | 针对不同国家（DE, US, CN...）的解析器可像乐高一样随插随用。 |
| 📝 **Markdown 原生** | 每份文档都转化为带有结构化 YAML Frontmatter 的 `.md` 文件。 |
| 🤖 **AI 自动提取** | 多模态大模型从扫描件、照片和邮件中提取结构化数据。 |
| ✅ **合规就绪** | 内置德国 GoBD、GDPR 和审计追踪原则。 |
| 🔍 **RAG 就绪** | 完整保存原始文本，通过本地检索增强生成（RAG）轻松实现知识搜索。 |

---

## 🏗️ 架构设计

DocuClaw 采用 **核心引擎 + 插件化解析器** 的架构，专为企业级扩展性而设计：

```
┌─────────────────────────────────────────────┐
│                   CLI / API                  │
├─────────────────────────────────────────────┤
│               核心引擎 (Core Engine)          │
│  ┌──────────┐  ┌──────────┐  ┌───────────┐ │
│  │  数据契约 │  │ 存储层    │  │  插件注册 │ │
│  │(Pydantic) │  │ (Storage) │  │ (Registry)│ │
│  └──────────┘  └──────────┘  └───────────┘ │
├─────────────────────────────────────────────┤
│               解析器插件 (Parsers)           │
│  ┌────────┐  ┌────────┐  ┌──────────────┐  │
│  │ DE 🇩🇪  │  │ US 🇺🇸  │  │ 自定义 ...    │  │
│  │ 发票解析 │  │ 发票解析 │  │ 你的解析器   │  │
│  └────────┘  └────────┘  └──────────────┘  │
├─────────────────────────────────────────────┤
│             输入适配器 (适配中)              │
│  📷 扫描仪 │ 📧 邮件 │ 🔗 Webhook │ 🔌 API   │
└─────────────────────────────────────────────┘
```

### 数据契约

无论是价值 1 万欧元的企业发票还是平时的电费单，都会被规范化为带有 YAML Frontmatter 的 **通用 Markdown 架构**：

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
### 原始文本内容
[保留完整的 OCR 或邮件正文，用于合规审计与 RAG 检索]

### AI 提炼摘要与操作建议
这是 AWS 的 2 月账单，包含 20.04 欧元的进项税...
```

---

## ⚡ 快速上手

### 安装

```bash
# 克隆仓库
git clone https://github.com/openclaw-ai/docuclaw.git
cd docuclaw

# 安装依赖
pip install -e .
```

### 使用

```bash
# 处理一张德国发票扫描件
docuclaw process \
  --entity-id "org_mycompany_01" \
  --entity-type company \
  --country DE \
  --source-type physical_mail \
  --input ./scans/invoice_aws_feb.png

# 输出: ./docuclaw_data/org_mycompany_01/2026/02/doc_20260215_xxxx.md
```

### Python API

```python
from docuclaw.schema import DocuClawDocument, EntityType, SourceType
from docuclaw.core.storage import MarkdownStorageEngine
from docuclaw.parsers.de_invoice_parser import DEInvoiceParser

# 初始化
storage = MarkdownStorageEngine(base_path="./docuclaw_data")
parser = DEInvoiceParser()

# 解析文档
doc = parser.parse(
    file_path="./scans/invoice.png",
    entity_id="org_mycompany_01",
    entity_type=EntityType.COMPANY,
)

# 持久化为结构化 Markdown
output_path = storage.save(doc)
print(f"📄 已保存: {output_path}")
```

---

## 🧩 开发自定义解析器

你可以为任何国家或文档类型扩展 DocuClaw：

```python
from docuclaw.parsers.base import BaseDocumentParser
from docuclaw.schema import DocuClawDocument

class USReceiptParser(BaseDocumentParser):
    """美国零售收据解析器"""

    @property
    def supported_countries(self) -> list[str]:
        return ["US"]

    @property
    def supported_document_types(self) -> list[str]:
        return ["receipt", "b2c_invoice"]

    def parse(self, file_path, entity_id, entity_type, **kwargs):
        # 在此编写提取逻辑
        ...
```

---

## 🗺️ 路线图

- [x] **里程碑 1**: 核心架构、存储引擎、解析器框架、命令行骨架
- [ ] **里程碑 2**: 邮件接入适配器 (IMAP/POP3)
- [ ] **里程碑 3**: 真实的多模态大模型对接 (Ollama, OpenAI Vision)
- [ ] **里程碑 4**: Web UI 管理面板（仅限本地）
- [ ] **里程碑 5**: 符合 GoBD 标准的哈希链审计追踪
- [ ] **里程碑 6**: 多实体权限模型与团队协作
- [ ] **里程碑 7**: Webhook 与 API 接收端点

---

## 📦 OpenClaw 生态系统

DocuClaw 是 [**openclaw.ai**](https://openclaw.ai) 的核心组件 —— 这是一个主权 AI 驱动的生产力工具开源生态系统。

| 项目 | 描述 |
|---------|-------------|
| **DocuClaw** | 主权文档情报与长期归档基础设施 |
| **DeepReader** | AI 驱动的网络长文本采集引擎 |
| **ClawHub** | 插件市场与开发者社区 |

---

## 🤝 参与贡献

欢迎任何形式的贡献！无论是新的国家解析器、Bug 修复还是文档改进。

```bash
# 开发环境设置
pip install -e ".[dev]"

# 运行测试
pytest

# 代码检查
ruff check .
mypy docuclaw/
```

详见 [CONTRIBUTING.md](CONTRIBUTING.md)。

---

## 📄 开源协议

本项目采用 [MIT License](LICENSE) 协议。自由使用，捍卫你的数据所有权。

---

<p align="center">
  <strong>由 <a href="https://openclaw.ai">OpenClaw</a> 社区开发</strong><br>
  <em>"你的数据应该为你服务，而不是受制于人。"</em>
</p>
