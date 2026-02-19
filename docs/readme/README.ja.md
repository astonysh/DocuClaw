<p align="center">
  <img src="https://docuclaw.com/logo.svg" alt="DocuClaw Logo" width="120" />
</p>

<h1 align="center">DocuClaw</h1>

<p align="center">
  <strong>🦀 個人とチームのためのユニバーサル・ソブリン・データ・インフラストラクチャ</strong>
</p>

<p align="center">
  <a href="https://github.com/openclaw-ai/docuclaw/actions"><img src="https://img.shields.io/github/actions/workflow/status/openclaw-ai/docuclaw/ci.yml?branch=main&style=flat-square" alt="CI"></a>
  <a href="https://pypi.org/project/docuclaw/"><img src="https://img.shields.io/pypi/v/docuclaw?style=flat-square&color=blue" alt="PyPI"></a>
  <a href="https://pypi.org/project/docuclaw/"><img src="https://img.shields.io/pypi/pyversions/docuclaw?style=flat-square" alt="Python"></a>
  <a href="https://github.com/openclaw-ai/docuclaw/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="License"></a>
  <a href="https://openclaw.ai"><img src="https://img.shields.io/badge/ecosystem-OpenClaw.ai-purple?style=flat-square" alt="OpenClaw"></a>
</p>

<p align="center">
  <em>あなたの請求書。あなたの契約書。あなたの手紙。あなたのデータ。<strong>ルールはあなたが決める。</strong></em>
</p>

---

## 🚀 なぜ DocuClaw なのか？

SaaS へのロックインやクラウドによる監視が広まる世界において、**DocuClaw** はデータへのコントロールをあなたの手に取り戻します。

個人の領収書を管理するフリーランサー、国際的な B2B 請求書を扱うスタートアップ、あるいはコンプライアンスを重視する中小企業。DocuClaw は、あなたのための **ローカルファーストでプライバシーを重視した AI 搭載のドキュメント・ブレイン** です。

```
📄 郵便物 → 📸 スキャン → 🤖 AI 抽出 → 📁 ローカル Markdown アーカイブ
📧 メールの領収書 → 🔗 Webhook → 🤖 AI 抽出 → 📁 ローカル Markdown アーカイブ
🧾 API 請求書 → 🔌 プラグイン → 🤖 AI 抽出 → 📁 ローカル Markdown アーカイブ
```

### ✨ 主な機能

| 機能 | 説明 |
|---------|-------------|
| 🛡️ **100% 主権（Sovereign）** | すべてのデータはあなたのマシン内に。クラウド依存ゼロ。テレメトリなし。 |
| 🏢 **マルチ・エンティティ** | 個人、会社、チームのドキュメントを一つのインスタンスで管理可能。 |
| 🔌 **プラグイン・アーキテクチャ** | 国別パーサー（DE, US, JP, ...）を LEGO のように自由に追加。 |
| 📝 **Markdown ネイティブ** | すべてのドキュメントは、構造化された YAML メタデータ付きの `.md` ファイルとして保存。 |
| 🤖 **AI 抽出** | マルチモーダル LLM がスキャンやメールから構造化データを自動抽出。 |
| ✅ **コンプライアンス対応** | 改ざん防止、GDPR、監査トレールの原則に基づいて設計。 |
| 🔍 **RAG Ready** | ローカルでの検索拡張生成（RAG）に最適化。 |

---

## 🏗️ アーキテクチャ

DocuClaw は、拡張性を考慮した **コア・エンジン + プラグイン・パーサー** の構成を採用しています。

### データ・コントラクト

すべてのドキュメントは、ユニバーサルな **Markdown スキーマ** に正規化されます：

```yaml
---
id: doc_20260215_a1b2c3d4
entity_id: "org_acme_01"
entity_type: "company"
source_type: physical_mail
country: JP
document_type: b2b_invoice
date_received: "2026-02-15"
sender_name: "AWS EMEA SARL"
amount_total: 125.50
currency: EUR
status: pending
---
```

---

## 📄 ライセンス

[MIT License](LICENSE) の下で公開されています。

---

<p align="center">
  <strong><a href="https://openclaw.ai">OpenClaw</a> コミュニティによって構築されています</strong><br>
  <em>"データはあなたのためにあるべきです。誰かの利益のためではなく。"</em>
</p>
