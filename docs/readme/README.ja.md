<p align="center">
  <img src="../../assets/logo.svg" alt="DocuClaw Logo" width="160" />
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

## 🗺️ ロードマップ (Roadmap)

DocuClawのビジョンは、個人およびビジネスドキュメントの究極の**ソブリンデータハブ (主権データハブ)**になることです。今後の計画は以下の通りです：

### フェーズ1：コアエンジンと拡張パーサー（現在）
- [x] **マイルストーン1**: コアスキーマ、ストレージエンジン、パーサーフレームワーク、CLI スケルトン
- [x] **マイルストーン2**: メール取り込みアダプタ (IMAP/POP3)
- [x] **マイルストーン3**: リアルなマルチモーダルLLM統合 (Ollama、OpenAI Vision)
- [x] **マイルストーン4**: Web UI管理ダッシュボード（ローカル専用、クラウドなし）
- [x] **マイルストーン5**: ドイツ GoBD 準拠のハッシュチェーン監査証跡
- [x] **マイルストーン6**: マルチエンティティ権限モデルとチームコラボレーション
- [x] **マイルストーン7**: WebhookおよびAPIのインジェストエンドポイント
- [ ] **多国間パーサーエコシステム:** 各地域の固有文書向けの抽出システム：
  - 🇩🇪 ドイツ (例: Steuerbescheid、GoBD 準拠対応)
  - 🇫🇷 フランス (例: CAF、URSSAF、CPAM ドキュメント)
  - 🇮🇹 イタリア (例: Raccomandata、Fattura Elettronica)
  - 🇪🇸 スペイン、🇺🇸 米国 (医療請求書、IRS 通知)、🇯🇵 日本 (請求書、ハンコ押印書類)。
- [ ] **高度なOCRパイプライン:** 複雑な表形式データ (例: 請求書) に対するレイアウト認識の向上。

### フェーズ2：オムニチャネルインジェスト（データソースとの同期）
- [ ] **シームレスなメール統合:**
  - **Gmail**、**Outlook**、**iCloud** のためのワンクリックOAuth。
  - プロトンメールなどのプライバシー重視のプロバイダやGMXなどのための標準 **IMAPのサポート**。
- [ ] **メディアとネイティブOS同期:**
  - **Apple Photosの統合:** macOS/iOSの写真ライブラリからレシートを直接自動インポート。
  - **ローカル監視フォルダー:** 特定のローカルフォルダーにドロップされたファイルを自動処理します（ネットワークスキャナーに最適）。

### フェーズ3：プラガブルAIエンジン（自身のモデルを使用）
- [ ] **クラウドAI統合:** OpenAI (GPT-4o)、Anthropic (Claude)、Google (Gemini) のための簡単なAPIキー設定。
- [ ] **ローカルファーストLLM:** **Ollama** や **LM Studio** のようなローカル推論エンジンをアウトオブザボックスでサポート。高度に機密性の高い文書を完全にオフラインで処理します。

### フェーズ4：自動エクスポートワークフロー (データルーター)
- [ ] **カレンダー＆タスク:** 期限（例: 請求書の支払日）を自動的に **Google カレンダー、Apple iCal、または Todoist** にプッシュ。
- [ ] **税と会計のエクスポート:** 解析された財務データを **DATEV、Lexoffice、SevDesk** (EU) または **QuickBooks** (米国) のようなツールにエクスポート。
- [ ] **ナレッジベースの統合:** 構造化されたMarkdownデータを第二の脳である **Obsidian** または **Notion** とシームレスに同期。

---

## 📄 ライセンス

[MIT License](LICENSE) の下で公開されています。

---

<p align="center">
  <strong><a href="https://openclaw.ai">OpenClaw</a> コミュニティによって構築されています</strong><br>
  <em>"データはあなたのためにあるべきです。誰かの利益のためではなく。"</em>
</p>
