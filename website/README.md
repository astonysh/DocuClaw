# DocuClaw Website

Static website for [DocuClaw](https://github.com/astonysh/DocuClaw), deployed on Cloudflare Pages.

## Deploy to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages
2. Create a project → Connect to Git
3. Select this repository
4. Build configuration:
   - **Build command**: (leave empty — static site)
   - **Build output directory**: `website`
5. Deploy!

## Structure

```
website/
├── index.html    # Main page with all sections
├── style.css     # OpenClaw-inspired design system
├── i18n.js       # 7-language translations (en, zh, de, fr, es, it, ja)
├── main.js       # Star field animation & scroll effects
├── _headers      # Security headers for Cloudflare
└── _redirects    # URL redirects for Cloudflare
```

## Languages Supported

- 🇬🇧 English (default)
- 🇨🇳 简体中文
- 🇩🇪 Deutsch
- 🇫🇷 Français
- 🇪🇸 Español
- 🇮🇹 Italiano
- 🇯🇵 日本語
