/* =============================================================
 * JingMark — Landing page i18n + UI logic
 * 13 languages: en zh zh-tw ja ko fr de es pt ru vi sv ar
 * Single source of truth for all copy. Key parity enforced.
 * ============================================================= */
(function () {
  'use strict';

  /* ---- Language registry (native names + direction) ---- */
  const LANGS = [
    { code: 'en',     name: 'English',         dir: 'ltr' },
    { code: 'zh',     name: '中文',             dir: 'ltr' },
    { code: 'zh-tw',  name: '繁體中文',         dir: 'ltr' },
    { code: 'ja',     name: '日本語',           dir: 'ltr' },
    { code: 'ko',     name: '한국어',           dir: 'ltr' },
    { code: 'fr',     name: 'Français',         dir: 'ltr' },
    { code: 'de',     name: 'Deutsch',          dir: 'ltr' },
    { code: 'es',     name: 'Español',          dir: 'ltr' },
    { code: 'pt',     name: 'Português',        dir: 'ltr' },
    { code: 'ru',     name: 'Русский',          dir: 'ltr' },
    { code: 'vi',     name: 'Tiếng Việt',       dir: 'ltr' },
    { code: 'sv',     name: 'Svenska',          dir: 'ltr' },
    { code: 'ar',     name: 'العربية',          dir: 'rtl' }
  ];

  /* ---- Dictionary ---- */
  const I18N = {
  "en": {
    "brand": "JingMark",
    "nav.features": "Features",
    "nav.themes": "Themes",
    "nav.pricing": "Pricing",
    "nav.faq": "FAQ",
    "nav.login": "Sign in",
    "nav.install": "Add to browser",
    "hero.eyebrow": "Local-first · Zero setup · Reads & writes your files",
    "hero.title": "Read and write Markdown in your browser",
    "hero.sub": "Rich, refined Markdown typography themes built in, offline by design, your files never leave your device.",
    "badge.free": "Free",
    "badge.pro": "Pro",
    "diff1.title": "Local-first, no uploads",
    "diff1.desc": "No servers and no account required. Everything runs in your browser; your files never leave your device.",
    "diff2.title": "Direct file read & write",
    "diff2.desc": "Open real .md files through the File System Access API and save edits straight back — no copies, no sync conflicts.",
    "diff3.title": "Word import & export",
    "diff3.desc": "Open .docx in a Word-like view without an office suite, convert to editable Markdown, or export real Word objects.",
    "diff4.title": "WeChat-ready copy",
    "diff4.desc": "Your chosen theme's styling is inlined so pasted content keeps its look inside the WeChat editor.",
    "feat.title": "A reader built for Markdown",
    "feat.sub": "Warm, focused, and endlessly customizable — every session feels like reading on paper.",
    "f1.title": "46 themes, 6 families",
    "f1.desc": "Aura, Paper, Rhythm, Archive, Dark, and Editorial families for reading, writing, and typesetting.",
    "f2.title": "WYSIWYG editing",
    "f2.desc": "Edit what you see and write changes back to the original file — no duplicate copies.",
    "f3.title": "Folder library",
    "f3.desc": "Multiple roots, instant search, image preview — manage docs like a bookshelf.",
    "f4.title": "One-click export",
    "f4.desc": "Export to HTML, PDF, or native editable Word to share or archive.",
    "f5.title": "Tabs & outline",
    "f5.desc": "Multi-tab editing, heading outline navigation, live KaTeX math and Mermaid diagrams.",
    "f6.title": "Search & drag",
    "f6.desc": "Instant filtering and cross-folder drag to move files with image links auto-rewritten.",
    "f7.title": "Save web docs",
    "f7.desc": "Save Markdown pages from the web to your local library for offline reading.",
    "f8.title": "Session restore",
    "f8.desc": "Open tabs and paths persist; everything returns after a reload — no re-authorizing.",
    "themes.title": "46 themes across 6 families",
    "themes.sub": "Aura · Paper · Rhythm · Archive · Dark · Editorial — for reading, writing, and editorial typesetting.",
    "t1.name": "Aura · Warm",
    "t1.desc": "Amber-brown · Serif body · Paper-book feel",
    "t2.name": "Paper · Song",
    "t2.desc": "Rice-paper cream · Eastern typography · Classic",
    "t3.name": "Rhythm · Forest",
    "t3.desc": "Forest green · Journal layout · Fresh",
    "t4.name": "Archive · Latte",
    "t4.desc": "Coffee tones · Rounded weight · Cozy",
    "t5.name": "Dark · Night",
    "t5.desc": "Deep film · Immersive · Easy on the eyes",
    "t6.name": "WeChat · Fresh",
    "t6.desc": "Fresh green · WeChat layout · One-click export",
    "privacy.title": "Your documents stay on your device",
    "privacy.sub": "Local-first: your documents stay on your device. We only send the minimum data needed to operate your account and Pro license.",
    "p1.title": "No uploads",
    "p1.desc": "Nothing is sent to a server; all processing stays on your machine.",
    "p2.title": "Authorized folders only",
    "p2.desc": "We read and write only folders you allow, and you can revoke access anytime.",
    "p3.title": "Sanitized & strict CSP",
    "p3.desc": "Rendering and export are double-sanitized; only local scripts ever run.",
    "p4.title": "Libraries bundled locally",
    "p4.desc": "marked, Vditor, and docx ship inside the extension — no remote loads.",
    "pricing.title": "Start free, upgrade when you need",
    "pricing.sub": "Reading is free forever. Unlock themes, export, and editing with a one-time Pro purchase.",
    "price.free.plan": "Free",
    "price.free.cost": "Free forever",
    "price.free.f1": "Markdown rendering & reading",
    "price.free.f2": "6 curated themes",
    "price.free.f3": "Single-root folder browsing",
    "price.free.f4": "Local files stay on your device",
    "price.free.f5": "Recent folders & quick open",
    "price.free.f6": "Keyboard shortcuts & search",
    "price.free.btn": "Add to browser",
    "price.pro.tag": "Most popular",
    "price.pro.plan": "Pro",
    "price.pro.cost": "<span class=\"now\">$4.99</span><span class=\"was\">$9.99</span><span class=\"save\">Save 50%</span>",
    "price.promoFree": "Free during launch",
    "price.promoFreePrice": "Free",
    "price.promoFreeNote": "Limited-time free · reverts to $9.99 after launch",
    "price.pro.pendingNote": "New payment provider in review · purchases paused for now",
    "price.pro.early": "Limited early bird · reverts to $9.99",
    "price.pro.note": "One-time purchase · Lifetime updates",
    "price.pro.f1": "All 46 themes (six families)",
    "price.pro.f2": "Native Word / PDF / HTML export",
    "price.pro.f3": "WYSIWYG editing with auto write-back",
    "price.pro.f4": "Multi-root folder management",
    "price.pro.f5": "Save web docs to your library",
    "price.pro.f6": "WeChat one-click publishing",
    "diff4t.title": "Print-ready typesetting",
    "diff4t.desc": "Vertical rhythm, a locked measure, and tuned spacing make long reads feel effortless.",
    "t6t.name": "Typeset · Refined",
    "t6t.desc": "Serif headings, justified body, minimal tables — editorial polish in every theme.",
    "price.pro.f6t": "Print-grade typesetting engine",
    "price.pro.btn": "Get Pro for $4.99 →",
    "price.pro.btnPending": "Payments paused",
    "steps.title": "Three steps to paper-like reading",
    "steps.sub": "No complex setup — as simple as opening a book.",
    "s1.title": "Pick a folder",
    "s1.desc": "Authorize one or more local Markdown folders as your library roots and browse them recursively.",
    "s2.title": "Pick a theme",
    "s2.desc": "Choose from 46 themes across six families and switch the look in one click.",
    "s3.title": "Edit & write back",
    "s3.desc": "Edits save straight to the original .md, or export to HTML, PDF, or native Word.",
    "faq.title": "Frequently asked questions",
    "faq.sub": "Answers about privacy, features, and purchasing.",
    "faq.q1": "Are my files uploaded to a server?",
    "faq.a1": "No. JingMark is local-first — every file read and write happens in your browser through the File System Access API. Nothing is uploaded. Pro status is verified by email; only your email and payment state are stored.",
    "faq.q2": "What is the difference between Free and Pro?",
    "faq.a2": "Free includes full Markdown reading, 6 curated themes, and single-root browsing. Pro unlocks all 46 themes, native Word/PDF export, Word .docx import to editable Markdown, WYSIWYG editing with write-back, multi-root management, split-preview, saving web docs, and more. Reading stays free forever.",
    "faq.q3": "Which browsers are supported?",
    "faq.a3": "Any Chromium-based browser (Chrome, Edge, Brave, Arc, and so on) with File System Access API support (Chrome 86+).",
    "faq.q4": "How do I activate Pro after buying?",
    "faq.a4": "Click 'Upgrade' in the extension and sign in with your email. Your Pro status syncs automatically.",
    "faq.q5": "Can I use Pro on multiple computers?",
    "faq.a5": "Pro is tied to your email account and works on up to 3 devices. On a 4th device you will not get Pro — you are not signed out, and your other devices are unaffected. Remove an unused device in Account panel → Authorized devices to free the slot.",
    "faq.q6": "Does it support math equations and diagrams?",
    "faq.a6": "Yes. JingMark renders KaTeX math formulas and Mermaid diagrams natively — just write standard LaTeX or Mermaid syntax in your Markdown.",
    "faq.q7": "How many languages are supported?",
    "faq.a7": "The interface is available in 13 languages: English, 中文, 繁體中文, 日本語, 한국어, Français, Deutsch, Español, Português, Русский, Tiếng Việt, Svenska, and العربية (RTL).",
    "faq.q8": "Can I preview before exporting?",
    "faq.a8": "Yes. Split-preview shows your content at narrow (680px), medium (820px), or wide (960px) widths, with a fullscreen mode for distraction-free proofreading.",

    "dl.title": "Choose your browser and start reading",
    "dl.sub": "No account, no server — install and feel the paper-book calm right away.",
    "dl.chrome": "Chrome",
    "dl.edge": "Edge",
    "dl.firefox": "Firefox",
    "dl.note": "Now available on Chrome and Edge — install today. Brave, Arc, and Firefox coming soon.",
    "dl.soon": "Coming soon",
    "footer.copy": "© 2026 JingMark · A warm Markdown reader & writer for the browser.",
    "footer.tagline": "Crafted for readers who love paper.",
    "auth.login": "Sign in",
    "auth.register": "Create account",
    "auth.email": "Email",
    "auth.password": "Password",
    "auth.confirm": "Confirm password",
    "auth.inviteCode": "Invite code",
    "auth.invitePlaceholder": "Enter your invite code",
    "auth.inviteRequired": "Invite code is required.",
    "auth.inviteInvalid": "Invalid or expired invite code.",
    "auth.inviteUsed": "This invite code has already been used.",
    "auth.upgrade": "<span class='au-label'>Get Pro</span><span class='au-now'>$4.99</span><span class='au-was'>$9.99</span><span class='au-save'>Save 50%</span>",
    "auth.logout": "Sign out",
    "auth.errEmpty": "Please fill in all fields",
    "auth.errShort": "Password must be at least 8 characters",
    "auth.errMatch": "Passwords do not match",
    "auth.errNetwork": "Network error. Please check your connection.",
    "auth.loginToPurchase": "Please sign in first — your Pro purchase needs to be linked to your account.",
    "auth.errFail": "Something went wrong. Please try again.",
    "auth.successReg": "Account created!",
    "auth.welcome": "Signed in",
    "auth.forgot": "Forgot password?",
    "auth.resetHint": "Enter your registered email and we'll send a password reset link.",
    "auth.sendReset": "Send reset email",
    "auth.backLogin": "Back to sign in",
    "auth.resetSent": "Reset email sent. Please check your inbox.",
    "auth.resetSuccess": "Password reset successful! Please sign in again.",
    "meta.desc": "Local-first Markdown reader & writer Chrome extension. 46 hand-crafted themes, native Word import/export, direct file read/write. No uploads, no server.",
    "page.title": "JingMark — Local-first Markdown Reader & Writer Chrome Extension"
  },
  "zh": {
    "brand": "境相阅读",
    "nav.features": "功能",
    "nav.themes": "主题",
    "nav.pricing": "价格",
    "nav.faq": "常见问题",
    "nav.login": "登录",
    "nav.install": "安装扩展",
    "hero.eyebrow": "本地优先 · 零配置 · 直读直写你的文件",
    "hero.title": "在浏览器里读写 Markdown 文件",
    "hero.sub": "内置丰富精致的 Markdown 排版主题、天生离线，你的文件从不离开本机。",
    "badge.free": "免费",
    "badge.pro": "Pro",
    "diff1.title": "本地优先，零上传",
    "diff1.desc": "无需服务器，也无需注册。一切都在你的浏览器中运行，文件从不离开本机。",
    "diff2.title": "文件系统直读直写",
    "diff2.desc": "通过 File System Access API 打开真实的 .md 文件，修改直接写回——无副本、无同步冲突。",
    "diff3.title": "原生 Word 导入与导出",
    "diff3.desc": "导出真 Word 对象，而非扁平化 HTML；也能在仿 Word 版式下打开 .docx（无需 Office），转为可编辑 Markdown。",
    "diff4.title": "公众号一键复制",
    "diff4.desc": "按所选主题样式全内联，粘贴到公众号编辑器也不丢格式。",
    "feat.title": "为 Markdown 而生的阅读器",
    "feat.sub": "温润、专注、可无限定制——每一次阅读都像在读纸书。",
    "f1.title": "46 套主题 · 六大分类",
    "f1.desc": "境相、纸墨、气韵、暗夜、档案、公众号，覆盖阅读、写作与发布。",
    "f2.title": "所见即所得编辑",
    "f2.desc": "编辑后所见即所得，修改自动写回原文件——不产生副本。",
    "f3.title": "文件夹书库",
    "f3.desc": "多根目录、即时搜索、图片预览——像管理书架一样管理文档。",
    "f4.title": "一键导出",
    "f4.desc": "导出 HTML / PDF 或原生可编辑 Word，分享或存档都轻松。",
    "f5.title": "多标签与大纲",
    "f5.desc": "多标签编辑、标题大纲导航、KaTeX 公式与 Mermaid 图表实时渲染。",
    "f6.title": "搜索与拖拽",
    "f6.desc": "即时过滤、跨文件夹拖拽移动，图片引用自动改写。",
    "f7.title": "收藏网页文档",
    "f7.desc": "把网页上的 Markdown 文档保存到本地书库，离线也能读。",
    "f8.title": "会话恢复",
    "f8.desc": "打开的标签与路径持久化，刷新后自动恢复——无需重新授权。",
    "themes.title": "46 套主题 · 六大分类",
    "themes.sub": "境相 · 纸墨 · 气韵 · 暗夜 · 档案 · 公众号——阅读、写作、排版、发布全覆盖。",
    "t1.name": "境相 · 温润",
    "t1.desc": "琥珀暖棕 · 衬线正文 · 纸书之感",
    "t2.name": "纸墨 · 宋笺",
    "t2.desc": "米黄宣纸 · 东方排版 · 古典气息",
    "t3.name": "气韵 · 森手帐",
    "t3.desc": "森林绿调 · 手账排版 · 自然清新",
    "t4.name": "档案 · 拿铁",
    "t4.desc": "咖啡暖调 · 圆润字重 · 慵懒午后",
    "t5.name": "暗夜 · 夜航",
    "t5.desc": "深色胶片 · 沉浸阅读 · 护眼专注",
    "t6.name": "公众号 · 清新",
    "t6.desc": "清新绿白 · 微信排版 · 一键出图",
    "privacy.title": "你的文档，始终留在本地",
    "privacy.sub": "本地优先：你的文档始终留在设备上。我们只发送运营账户与 Pro 授权所需的最小数据。",
    "p1.title": "零上传",
    "p1.desc": "不向服务器发送任何数据，一切处理都在本机完成。",
    "p2.title": "仅访问授权目录",
    "p2.desc": "只在你明确授权的目录内读写，权限可随时收回。",
    "p3.title": "净化 + 严格 CSP",
    "p3.desc": "渲染与导出双重净化，脚本仅来自本地资源。",
    "p4.title": "第三方库本地打包",
    "p4.desc": "marked、Vditor、docx 本地打包，不加载远程资源。",
    "pricing.title": "免费开始，按需升级",
    "pricing.sub": "阅读永久免费；主题、导出与编辑等高级能力，一次性买断 Pro 即可解锁。",
    "price.free.plan": "免费版",
    "price.free.cost": "永久免费",
    "price.free.f1": "Markdown 渲染与阅读",
    "price.free.f2": "6 套精选主题",
    "price.free.f3": "单根目录文件夹浏览",
    "price.free.f4": "本地文件不离开你的设备",
    "price.free.f5": "最近文件夹与快速打开",
    "price.free.f6": "键盘快捷键与全文搜索",
    "price.free.btn": "安装扩展",
    "price.pro.tag": "最受欢迎",
    "price.pro.plan": "Pro",
    "price.pro.cost": "<span class=\"now\">$4.99</span><span class=\"was\">$9.99</span><span class=\"save\">立省 50%</span>",
    "price.promoFree": "限时免费",
    "price.promoFreePrice": "免费",
    "price.promoFreeNote": "限时免费 · 活动结束后恢复 $9.99",
    "price.pro.pendingNote": "新支付服务商审核中 · 暂时无法购买",
    "price.pro.early": "限时早鸟价 · 售完即恢复 $9.99",
    "price.pro.note": "一次性买断 · 终身更新",
    "price.pro.f1": "全部 46 套主题（六大分类）",
    "price.pro.f2": "原生 Word / PDF / HTML 导出",
    "price.pro.f3": "所见即所得编辑，自动写回原文件",
    "price.pro.f4": "多根目录文件夹管理",
    "price.pro.f5": "收藏网页文档到本地",
    "price.pro.f6": "公众号一键推送",
    "diff4t.title": "印刷级排版",
    "diff4t.desc": "垂直节奏、锁定行宽与精调间距，让长文阅读毫不费力。",
    "t6t.name": "排版 · 精控",
    "t6t.desc": "衬线标题、两端对齐正文、极简表格——每套主题都自带编辑级排版。",
    "price.pro.f6t": "印刷级排版引擎",
    "price.pro.btn": "立即获取 Pro · $4.99 →",
    "price.pro.btnPending": "支付通道升级中",
    "steps.title": "三步开启纸书阅读",
    "steps.sub": "无需复杂配置，像打开一本书一样简单。",
    "s1.title": "选择文件夹",
    "s1.desc": "授权一个或多个本地 Markdown 文件夹作为书库根目录，递归浏览。",
    "s2.title": "选主题",
    "s2.desc": "从六大分类 46 套主题中挑选，一键切换排版风格。",
    "s3.title": "编辑并写回原文件",
    "s3.desc": "修改自动写回 .md 原文件，或导出 HTML / PDF / 原生 Word 分享存档。",
    "faq.title": "常见问题",
    "faq.sub": "关于隐私、功能与购买的答疑。",
    "faq.q1": "我的文件会上传到服务器吗？",
    "faq.a1": "不会。JingMark 是本地优先架构，所有文件读写都在你的浏览器内通过 File System Access API 完成，不会上传到任何服务器。Pro 付费状态通过邮箱验证，仅存储你的邮箱与付费状态。",
    "faq.q2": "免费版和 Pro 有什么区别？",
    "faq.a2": "免费版包含完整的 Markdown 阅读、6 套精选主题与单根目录浏览。Pro 解锁全部 46 套主题、原生 Word/PDF 导出、Word .docx 导入并转为可编辑 Markdown、所见即所得编辑写回、多根目录管理、收藏网页文档、公众号推送等更多能力。阅读功能永久免费。",
    "faq.q3": "支持哪些浏览器？",
    "faq.a3": "任何基于 Chromium 的浏览器（Chrome、Edge、Brave、Arc 等），且支持 File System Access API（Chrome 86+）。",
    "faq.q4": "购买 Pro 后如何激活？",
    "faq.a4": "点击插件内「升级 Pro」，用邮箱登录即可，状态自动同步。",
    "faq.q5": "我可以在多台电脑上使用 Pro 吗？",
    "faq.a5": "Pro 与你的邮箱账户绑定，最多可在 3 台设备上使用。第 4 台设备不会获得 Pro 功能，但不会被登出，其他设备也不受影响；在「账户面板 → 已授权设备」里移除一台不再使用的设备，名额即释放。",
    "faq.q6": "是否支持数学公式与图表？",
    "faq.a6": "支持。JingMark 原生渲染 KaTeX 数学公式与 Mermaid 图表——只需在 Markdown 中书写标准 LaTeX 或 Mermaid 语法即可。",
    "faq.q7": "支持多少种语言？",
    "faq.a7": "界面提供 13 种语言：English、中文、繁體中文、日本語、한국어、Français、Deutsch、Español、Português、Русский、Tiếng Việt、Svenska 与 العربية（RTL）。",
    "faq.q8": "导出前可以预览吗？",
    "faq.a8": "可以。分屏预览支持窄（680px）、中（820px）、宽（960px）三种版心，并提供全屏模式，让你专注校对。",

    "dl.title": "选择你的浏览器，开始阅读",
    "dl.sub": "无需注册、无需服务器，安装即享温润的纸书阅读感。",
    "dl.chrome": "Chrome",
    "dl.edge": "Edge",
    "dl.firefox": "Firefox",
    "dl.note": "现已上架 Chrome 与 Edge，立即安装。Brave、Arc 与 Firefox 即将推出。",
    "dl.soon": "即将推出",
    "footer.copy": "© 2026 境相阅读 JingMark · 一款为 Markdown 打造的温润阅读器",
    "footer.tagline": "为爱纸书的人而做。",
    "auth.login": "登录",
    "auth.register": "注册",
    "auth.email": "邮箱",
    "auth.password": "密码",
    "auth.confirm": "确认密码",
    "auth.inviteCode": "邀请码",
    "auth.invitePlaceholder": "请输入邀请码",
    "auth.inviteRequired": "请填写邀请码。",
    "auth.inviteInvalid": "邀请码无效或已失效。",
    "auth.inviteUsed": "该邀请码已被使用。",
    "auth.upgrade": "<span class='au-label'>购买 Pro</span><span class='au-now'>$4.99</span><span class='au-was'>$9.99</span><span class='au-save'>立省 50%</span>",
    "auth.logout": "退出登录",
    "auth.errEmpty": "请填写所有字段",
    "auth.errShort": "密码至少 8 位",
    "auth.errMatch": "两次密码不一致",
    "auth.errNetwork": "网络错误，请检查连接后重试",
    "auth.loginToPurchase": "请先登录或注册：购买需要关联到你的账户才能生效。",
    "auth.errFail": "操作失败，请重试",
    "auth.successReg": "注册成功！",
    "auth.welcome": "已登录",
    "auth.forgot": "忘记密码？",
    "auth.resetHint": "输入注册邮箱，我们将发送密码重置链接",
    "auth.sendReset": "发送重置邮件",
    "auth.backLogin": "返回登录",
    "auth.resetSent": "重置邮件已发送，请检查邮箱",
    "auth.resetSuccess": "密码重置成功！请重新登录",
    "meta.desc": "本地优先的 Markdown 阅读与写作插件，46 套暖棕纸境主题、原生 Word 导出、直读直写你的文件。无上传、无服务器。",
    "page.title": "境相阅读 · 温润的 Markdown 阅读与写作扩展"
  },
  "zh-tw": {
    "brand": "境相閱讀",
    "nav.features": "功能",
    "nav.themes": "主題",
    "nav.pricing": "價格",
    "nav.faq": "常見問題",
    "nav.login": "登入",
    "nav.install": "安裝擴充功能",
    "hero.eyebrow": "本地優先 · 零設定 · 直讀直寫你的檔案",
    "hero.title": "在瀏覽器裡讀寫 Markdown 檔案",
    "hero.sub": "內建精緻的 Markdown 排版主題、天生離線，你的檔案從不離開本機。",
    "badge.free": "免費",
    "badge.pro": "Pro",
    "diff1.title": "本地優先，零上傳",
    "diff1.desc": "無需伺服器，也無需註冊。一切都在你的瀏覽器中執行，檔案從不離開本機。",
    "diff2.title": "檔案系統直讀直寫",
    "diff2.desc": "透過 File System Access API 開啟真實的 .md 檔案，修改直接寫回——無副本、無同步衝突。",
    "diff3.title": "原生 Word 匯入與匯出",
    "diff3.desc": "匯出真 Word 物件，而非扁平化 HTML；也能在仿 Word 版式下開啟 .docx（無需 Office），轉為可編輯 Markdown。",
    "diff4.title": "公眾號一鍵複製",
    "diff4.desc": "依所選主題樣式全內聯，貼到公眾號編輯器也不丟格式。",
    "feat.title": "為 Markdown 而生的閱讀器",
    "feat.sub": "溫潤、專注、可無限客製——每一次閱讀都像在讀紙本書。",
    "f1.title": "46 套主題 · 六大分類",
    "f1.desc": "境相、紙墨、氣韻、暗夜、檔案、公眾號，涵蓋閱讀、寫作與發布。",
    "f2.title": "所見即所得編輯",
    "f2.desc": "編輯後所見即所得，修改自動寫回原檔——不產生副本。",
    "f3.title": "資料夾書庫",
    "f3.desc": "多根目錄、即時搜尋、圖片預覽——像管理書架一樣管理文件。",
    "f4.title": "一鍵匯出",
    "f4.desc": "匯出 HTML / PDF 或原生可編輯 Word，分享或存檔都輕鬆。",
    "f5.title": "多標籤與大綱",
    "f5.desc": "多標籤編輯、標題大綱導覽、KaTeX 公式與 Mermaid 圖表即時渲染。",
    "f6.title": "搜尋與拖曳",
    "f6.desc": "即時過濾、跨資料夾拖曳移動，圖片引用自動改寫。",
    "f7.title": "收藏網頁文件",
    "f7.desc": "把網頁上的 Markdown 文件儲存到本地書庫，離線也能讀。",
    "f8.title": "工作階段還原",
    "f8.desc": "開啟的標籤與路徑持久化，重新整理後自動還原——無需重新授權。",
    "themes.title": "46 套主題 · 六大分類",
    "themes.sub": "境相 · 紙墨 · 氣韻 · 暗夜 · 檔案 · 公眾號——閱讀、寫作、排版、發布全涵蓋。",
    "t1.name": "境相 · 溫潤",
    "t1.desc": "琥珀暖棕 · 襯線正文 · 紙本書感",
    "t2.name": "紙墨 · 宋箋",
    "t2.desc": "米黃宣紙 · 東方排版 · 古典氣息",
    "t3.name": "氣韻 · 森手帳",
    "t3.desc": "森林綠調 · 手帳排版 · 自然清新",
    "t4.name": "檔案 · 拿鐵",
    "t4.desc": "咖啡暖調 · 圓潤字重 · 慵懶午後",
    "t5.name": "暗夜 · 夜航",
    "t5.desc": "深色膠片 · 沉浸閱讀 · 護眼專注",
    "t6.name": "公眾號 · 清新",
    "t6.desc": "清新綠白 · 微信排版 · 一鍵出圖",
    "privacy.title": "你的文件，始終留在本地",
    "privacy.sub": "本地優先：你的文件始終留在裝置上。我們只傳送營運帳戶與 Pro 授權所需的最小資料。",
    "p1.title": "零上傳",
    "p1.desc": "不向伺服器傳送任何資料，一切處理都在本機完成。",
    "p2.title": "僅存取授權目錄",
    "p2.desc": "只在你明確授權的目錄內讀寫，權限可隨時收回。",
    "p3.title": "淨化 + 嚴格 CSP",
    "p3.desc": "渲染與匯出雙重淨化，腳本僅來自本地資源。",
    "p4.title": "第三方庫本地打包",
    "p4.desc": "marked、Vditor、docx 本地打包，不載入遠端資源。",
    "pricing.title": "免費開始，按需升級",
    "pricing.sub": "閱讀永久免費；主題、匯出與編輯等進階能力，一次性買斷 Pro 即可解鎖。",
    "price.free.plan": "免費版",
    "price.free.cost": "永久免費",
    "price.free.f1": "Markdown 渲染與閱讀",
    "price.free.f2": "6 套精選主題",
    "price.free.f3": "單根目錄資料夾瀏覽",
    "price.free.f4": "本機檔案不離開你的裝置",
    "price.free.f5": "最近資料夾與快速開啟",
    "price.free.f6": "鍵盤快捷鍵與全文搜尋",
    "price.free.btn": "安裝擴充功能",
    "price.pro.tag": "最受歡迎",
    "price.pro.plan": "Pro",
    "price.pro.cost": "<span class=\"now\">$4.99</span><span class=\"was\">$9.99</span><span class=\"save\">省 50%</span>",
    "price.promoFree": "限時免費",
    "price.promoFreePrice": "免費",
    "price.promoFreeNote": "限時免費 · 活動結束後恢復 $9.99",
    "price.pro.pendingNote": "新支付服務商審核中 · 暫時無法購買",
    "price.pro.early": "限時早鳥價 · 售完即恢復 $9.99",
    "price.pro.note": "一次性買斷 · 終身更新",
    "price.pro.f1": "全部 46 套主題（六大分類）",
    "price.pro.f2": "原生 Word / PDF / HTML 匯出",
    "price.pro.f3": "所見即所得編輯，自動寫回原檔",
    "price.pro.f4": "多根目錄資料夾管理",
    "price.pro.f5": "收藏網頁文件到本地",
    "price.pro.f6": "公眾號一鍵推送",
    "diff4t.title": "印刷級排版",
    "diff4t.desc": "垂直節奏、鎖定行寬與精調間距，讓長文閱讀毫不費力。",
    "t6t.name": "排版 · 精控",
    "t6t.desc": "襯線標題、兩端對齊正文、極簡表格——每套主題都自帶編輯級排版。",
    "price.pro.f6t": "印刷級排版引擎",
    "price.pro.btn": "立即獲取 Pro · $4.99 →",
    "price.pro.btnPending": "支付通道升級中",
    "steps.title": "三步開啟紙本閱讀",
    "steps.sub": "無需複雜設定，像打開一本書一樣簡單。",
    "s1.title": "選擇資料夾",
    "s1.desc": "授權一個或多個本地 Markdown 資料夾作為書庫根目錄，遞迴瀏覽。",
    "s2.title": "選主題",
    "s2.desc": "從六大分類 46 套主題中挑選，一鍵切換排版風格。",
    "s3.title": "編輯並寫回原檔",
    "s3.desc": "修改自動寫回 .md 原檔，或匯出 HTML / PDF / 原生 Word 分享存檔。",
    "faq.title": "常見問題",
    "faq.sub": "關於隱私、功能與購買的答疑。",
    "faq.q1": "我的檔案會上傳到伺服器嗎？",
    "faq.a1": "不會。JingMark 是本地優先架構，所有檔案讀寫都在你的瀏覽器內透過 File System Access API 完成，不會上傳到任何伺服器。Pro 付費狀態透過郵箱驗證，僅儲存你的郵箱與付費狀態。",
    "faq.q2": "免費版和 Pro 有什麼差別？",
    "faq.a2": "免費版包含完整的 Markdown 閱讀、6 套精選主題與單根目錄瀏覽。Pro 解鎖全部 46 套主題、原生 Word/PDF 匯出、Word .docx 匯入並轉為可編輯 Markdown、所見即所得編輯寫回、多根目錄管理、收藏網頁文件、公眾號推送等更多能力。閱讀功能永久免費。",
    "faq.q3": "支援哪些瀏覽器？",
    "faq.a3": "任何基於 Chromium 的瀏覽器（Chrome、Edge、Brave、Arc 等），且支援 File System Access API（Chrome 86+）。",
    "faq.q4": "購買 Pro 後如何啟用？",
    "faq.a4": "點擊擴充功能內「升級 Pro」，用郵箱登入即可，狀態自動同步。",
    "faq.q5": "我可以在多台電腦上使用 Pro 嗎？",
    "faq.a5": "Pro 與你的郵箱帳號綁定，最多可在 3 台裝置上使用。第 4 台裝置不會取得 Pro 功能，但不會被登出，其他裝置也不受影響；在「帳戶面板 → 已授權裝置」裡移除一台不再使用的裝置，名額即釋放。",
    "faq.q6": "是否支援數學公式與圖表？",
    "faq.a6": "支援。JingMark 原生渲染 KaTeX 數學公式與 Mermaid 圖表——只需在 Markdown 中書寫標準 LaTeX 或 Mermaid 語法即可。",
    "faq.q7": "支援多少種語言？",
    "faq.a7": "介面提供 13 種語言：English、中文、繁體中文、日本語、한국어、Français、Deutsch、Español、Português、Русский、Tiếng Việt、Svenska 與 العربية（RTL）。",
    "faq.q8": "匯出前可以預覽嗎？",
    "faq.a8": "可以。分屏預覽支援窄（680px）、中（820px）、寬（960px）三種版心，並提供全螢幕模式，讓你專注校對。",

    "dl.title": "選擇你的瀏覽器，開始閱讀",
    "dl.sub": "無需註冊、無需伺服器，安裝即享溫潤的紙本閱讀感。",
    "dl.chrome": "Chrome",
    "dl.edge": "Edge",
    "dl.firefox": "Firefox",
    "dl.note": "現已上架 Chrome 與 Edge，立即安裝。Brave、Arc 與 Firefox 即將推出。",
    "dl.soon": "即將推出",
    "footer.copy": "© 2026 境相閱讀 JingMark · 一款為 Markdown 打造的溫潤閱讀器",
    "footer.tagline": "為愛紙本書的人而做。",
    "auth.login": "登入",
    "auth.register": "註冊",
    "auth.email": "郵箱",
    "auth.password": "密碼",
    "auth.confirm": "確認密碼",
    "auth.inviteCode": "邀請碼",
    "auth.invitePlaceholder": "請輸入邀請碼",
    "auth.inviteRequired": "請填寫邀請碼。",
    "auth.inviteInvalid": "邀請碼無效或已失效。",
    "auth.inviteUsed": "該邀請碼已被使用。",
    "auth.upgrade": "<span class='au-label'>購買 Pro</span><span class='au-now'>$4.99</span><span class='au-was'>$9.99</span><span class='au-save'>立省 50%</span>",
    "auth.logout": "登出",
    "auth.errEmpty": "請填寫所有欄位",
    "auth.errShort": "密碼至少 8 位",
    "auth.errMatch": "兩次密碼不一致",
    "auth.errNetwork": "網路錯誤，請檢查連線後重試",
    "auth.loginToPurchase": "請先登入或註冊：購買需要關聯到你的帳號才能生效。",
    "auth.errFail": "操作失敗，請重試",
    "auth.successReg": "註冊成功！",
    "auth.welcome": "已登入",
    "auth.forgot": "忘記密碼？",
    "auth.resetHint": "輸入註冊郵箱，我們將發送密碼重設連結",
    "auth.sendReset": "發送重設郵件",
    "auth.backLogin": "返回登入",
    "auth.resetSent": "重設郵件已發送，請檢查郵箱",
    "auth.resetSuccess": "密碼重設成功！請重新登入",
    "meta.desc": "本地優先的 Markdown 閱讀與寫作插件，46 套暖棕紙境主題、原生 Word 匯出、直讀直寫你的檔案。無上傳、無伺服器。",
    "page.title": "境相閱讀 · 溫潤的 Markdown 閱讀與寫作擴充"
  },
  "ja": {
    "brand": "JingMark",
    "nav.features": "機能",
    "nav.themes": "テーマ",
    "nav.pricing": "料金",
    "nav.faq": "よくある質問",
    "nav.login": "ログイン",
    "nav.install": "ブラウザに追加",
    "hero.eyebrow": "ローカル優先 · 設定不要 · ファイルをそのまま読み書き",
    "hero.title": "ブラウザで Markdown を読み書き",
    "hero.sub": "洗練された Markdown 用タイポグラフィテーマを内蔵。オフライン設計で、ファイルは端末から出ません。",
    "badge.free": "無料",
    "badge.pro": "Pro",
    "diff1.title": "ローカル優先、アップロードなし",
    "diff1.desc": "サーバーもアカウントも不要。すべてブラウザ内で動き、ファイルは端末から出ません。",
    "diff2.title": "ファイルの直接読み書き",
    "diff2.desc": "File System Access API で本物の .md を開き、編集をそのまま書き戻し。コピーも衝突もなし。",
    "diff3.title": "Word 読み書き",
    "diff3.desc": "Office なしで .docx をワープロ風の表示で開き、編集可能な Markdown に変換。本物の Word オブジェクトの書き出しも。",
    "diff4.title": "微信（WeChat）向けコピー",
    "diff4.desc": "選んだテーマのスタイルがインライン化され、微信エディタでも見た目を維持。",
    "feat.title": "Markdown のために作られたリーダー",
    "feat.sub": "温かく、集中でき、自由にカスタマイズ。すべての読書が紙の本のように。",
    "f1.title": "46 テーマ · 6 系統",
    "f1.desc": "Aura、Paper、Rhythm、Dark、Archive の各系統で読書・執筆・組版に対応。",
    "f2.title": "WYSIWYG 編集",
    "f2.desc": "見たまま編集し、変更を元のファイルに書き戻し。コピーは作られません。",
    "f3.title": "フォルダライブラリ",
    "f3.desc": "複数ルート、インスタント検索、画像プレビュー。本棚のように文書を管理。",
    "f4.title": "ワンクリック書き出し",
    "f4.desc": "HTML・PDF・編集可能なネイティブ Word へ書き出し、共有や保存に。",
    "f5.title": "タブとアウトライン",
    "f5.desc": "マルチタブ編集、見出しアウトライン、KaTeX 数式と Mermaid 図のライブ描画。",
    "f6.title": "検索とドラッグ",
    "f6.desc": "即時フィルタとフォルダ間ドラッグでファイル移動、画像リンクは自動書き換え。",
    "f7.title": "Web 文書の保存",
    "f7.desc": "Web 上の Markdown をローカルライブラリに保存し、オフラインで読書。",
    "f8.title": "セッション復元",
    "f8.desc": "開いたタブとパスを保持。再読み込み後も自動で復元、再認証は不要。",
    "themes.title": "46 テーマ · 6 系統",
    "themes.sub": "Aura · Paper · Rhythm · Dark · Archive — 読書・執筆・編集組版のためのシリーズ。",
    "t1.name": "Aura · 温潤",
    "t1.desc": "琥珀色の茶 · セリフ本文 · 本のような質感",
    "t2.name": "Paper · 宋箋",
    "t2.desc": "生成り色の紙 · 東洋の組版 · 古典的",
    "t3.name": "Rhythm · 森",
    "t3.desc": "森の緑 · ジャーナル風 · 爽やか",
    "t4.name": "Archive · ラテ",
    "t4.desc": "コーヒー色 · 丸みのある太さ · 居心地のよい",
    "t5.name": "Dark · 夜",
    "t5.desc": "深いフィルム · 没入 · 目に優しい",
    "t6.name": "WeChat · 清新",
    "t6.desc": "さわやかな緑 · 微信レイアウト · ワンクリック書き出し",
    "privacy.title": "あなたの文書は端末に留まる",
    "privacy.sub": "ローカル優先：あなたの文書はデバイス上に残ります。アカウントと Pro ライセンスの運用に必要な最小限のデータのみを送信します。",
    "p1.title": "アップロードなし",
    "p1.desc": "サーバーへ送信するデータは一切なし。処理はすべて端末内。",
    "p2.title": "許可したフォルダのみ",
    "p2.desc": "許可したフォルダだけを読み書きし、いつでも取り消し可能。",
    "p3.title": "無害化 + 厳格な CSP",
    "p3.desc": "描画と書き出しは二重に無害化。実行されるのはローカル スクリプトのみ。",
    "p4.title": "ライブラリをローカル同梱",
    "p4.desc": "marked・Vditor・docx を拡張機能内に同梱。遠隔読み込みなし。",
    "pricing.title": "無料ではじめ、必要に応じてアップグレード",
    "pricing.sub": "読書は永久無料。テーマ・書き出し・編集などの高度な機能は、買い切りの Pro で解放。",
    "price.free.plan": "無料",
    "price.free.cost": "永久無料",
    "price.free.f1": "Markdown の描画と閲覧",
    "price.free.f2": "6 つの厳選テーマ",
    "price.free.f3": "単一ルートのフォルダ閲覧",
    "price.free.f4": "ローカルファイルは端末から外に出ない",
    "price.free.f5": "最近使ったフォルダとクイック起動",
    "price.free.f6": "キーボードショートカットと全文検索",
    "price.free.btn": "ブラウザに追加",
    "price.pro.tag": "人気",
    "price.pro.plan": "Pro",
    "price.pro.cost": "<span class=\"now\">$4.99</span><span class=\"was\">$9.99</span><span class=\"save\">50% OFF</span>",
    "price.promoFree": "期間限定で無料",
    "price.promoFreePrice": "無料",
    "price.promoFreeNote": "期間限定無料 · 終了後は $9.99 に戻ります",
    "price.pro.pendingNote": "新しい決済サービスを審査中 · 現在は購入できません",
    "price.pro.early": "早割限定 · 終了後は $9.99",
    "price.pro.note": "買い切り · 永久アップデート",
    "price.pro.f1": "全 46 テーマ（6 系統）",
    "price.pro.f2": "ネイティブ Word / PDF / HTML 書き出し",
    "price.pro.f3": "WYSIWYG 編集、自動書き戻し",
    "price.pro.f4": "複数ルートのフォルダ管理",
    "price.pro.f5": "Web 文書をライブラリに保存",
    "price.pro.f6": "微信ワンクリック公開",
    "diff4t.title": "印刷品質の組版",
    "diff4t.desc": "垂直リズム、固定行幅、調整された間隔により、長文も読みやすくなります。",
    "t6t.name": "組版 · 洗練",
    "t6t.desc": "セリフ見出し、両端揃え本文、ミニマルな表——すべてのテーマに編集品質の組版。",
    "price.pro.f6t": "印刷グレードの組版エンジン",
    "price.pro.btn": "Pro を $4.99 で入手 →",
    "price.pro.btnPending": "決済を準備中",
    "steps.title": "3 ステップで紙のような読書",
    "steps.sub": "複雑な設定は不要。本を開くように簡単。",
    "s1.title": "フォルダを選ぶ",
    "s1.desc": "1 つ以上のローカル Markdown フォルダをライブラリのルートとして許可し、再帰的に閲覧。",
    "s2.title": "テーマを選ぶ",
    "s2.desc": "6 系統 46 テーマから選び、ワンクリックで見た目を切り替え。",
    "s3.title": "編集して書き戻す",
    "s3.desc": "編集は元の .md に直接保存、または HTML・PDF・ネイティブ Word へ書き出し。",
    "faq.title": "よくある質問",
    "faq.sub": "プライバシー・機能・購入についての回答。",
    "faq.q1": "ファイルはサーバーにアップロードされますか？",
    "faq.a1": "いいえ。JingMark はローカル優先です。すべての読み書きはブラウザ内の File System Access API で行われ、アップロードはありません。Pro の状態はメールで検証され、保存されるのはメールアドレスと支払い状況のみです。",
    "faq.q2": "無料版と Pro の違いは？",
    "faq.a2": "無料版は Markdown の全文閲覧、6 つの厳選テーマ、単一ルートの閲覧を含みます。Pro は全 46 テーマ、ネイティブ Word/PDF 書き出し、Word .docx の取り込みと Markdown 変換、WYSIWYG 編集と書き戻し、複数ルート管理、Web 文書の保存などを解放します。読書は永久無料です。",
    "faq.q3": "対応ブラウザは？",
    "faq.a3": "File System Access API をサポートする Chromium 系ブラウザ（Chrome・Edge・Brave・Arc など、Chrome 86 以降）。",
    "faq.q4": "購入後に Pro をどう有効化しますか？",
    "faq.a4": "拡張機能の「アップグレード」をクリックし、メールでログインすると、Pro 状態が自動で同期されます。",
    "faq.q5": "Pro を複数のパソコンで使えますか？",
    "faq.a5": "Pro はメールアカウントに紐づいており、最大 3 台の端末で利用できます。4 台目では Pro 機能が有効になりませんが、ログアウトされず、他の端末にも影響しません。「認証済み端末」で使わなくなった端末を削除すると枠が空きます。",
    "faq.q6": "数式や図表に対応していますか？",
    "faq.a6": "はい。JingMark は KaTeX の数式と Mermaid の図表をネイティブに描画します——Markdown に標準的な LaTeX または Mermaid の構文を書くだけで大丈夫です。",
    "faq.q7": "対応言語はいくつありますか？",
    "faq.a7": "インターフェイスは 13 言語に対応しています：English、中文、繁體中文、日本語、한국어、Français、Deutsch、Español、Português、Русский、Tiếng Việt、Svenska、العربية（RTL）。",
    "faq.q8": "書き出し前にプレビューできますか？",
    "faq.a8": "はい。分割プレビューは幅 680px（狭）、820px（中）、960px（広）の 3 段階で表示でき、集中して校正できる全画面モードも備えています。",

    "dl.title": "ブラウザを選んで読書開始",
    "dl.sub": "アカウント不要、サーバー不要。インストールするだけで紙のような落ち着きを。",
    "dl.chrome": "Chrome",
    "dl.edge": "Edge",
    "dl.firefox": "Firefox",
    "dl.note": "Chrome と Edge で今すぐ利用可能 — 今日インストールを。Brave・Arc・Firefox は近日対応予定。",
    "dl.soon": "近日公開",
    "footer.copy": "© 2026 JingMark · ブラウザのための温かな Markdown リーダー＆ライター",
    "footer.tagline": "紙の本を愛する人のために。",
    "auth.login": "ログイン",
    "auth.register": "アカウント作成",
    "auth.email": "メールアドレス",
    "auth.password": "パスワード",
    "auth.confirm": "パスワード（確認）",
    "auth.inviteCode": "招待コード",
    "auth.invitePlaceholder": "招待コードを入力",
    "auth.inviteRequired": "招待コードを入力してください。",
    "auth.inviteInvalid": "招待コードが無効か、有効期限が切れています。",
    "auth.inviteUsed": "この招待コードは既に使用されています。",
    "auth.upgrade": "<span class='au-label'>Pro を購入</span><span class='au-now'>$4.99</span><span class='au-was'>$9.99</span><span class='au-save'>50% お得</span>",
    "auth.logout": "ログアウト",
    "auth.errEmpty": "すべての項目を入力してください",
    "auth.errShort": "パスワードは 8 文字以上で",
    "auth.errMatch": "パスワードが一致しません",
    "auth.errNetwork": "ネットワークエラー。接続を確認してください。",
    "auth.loginToPurchase": "先にサインインしてください：購入はアカウントと紐付ける必要があります。",
    "auth.errFail": "処理に失敗しました。もう一度お試しください。",
    "auth.successReg": "アカウントを作成しました！",
    "auth.welcome": "ログイン中",
    "auth.forgot": "パスワードをお忘れですか？",
    "auth.resetHint": "登録したメールアドレスを入力すると、再設定リンクを送信します。",
    "auth.sendReset": "再設定メールを送信",
    "auth.backLogin": "ログインに戻る",
    "auth.resetSent": "再設定メールを送信しました。受信箱をご確認ください。",
    "auth.resetSuccess": "パスワードの再設定が完了しました。再度ログインしてください。",
    "meta.desc": "ローカル優先の Markdown リーダー＆ライター。46 のテーマ、ネイティブ Word 書き出し、ファイルの直接読み書き。アップロードなし、サーバーなし。",
    "page.title": "JingMark · ブラウザ向けの温かい Markdown リーダー＆ライター"
  },
  "ko": {
    "brand": "JingMark",
    "nav.features": "기능",
    "nav.themes": "테마",
    "nav.pricing": "가격",
    "nav.faq": "자주 묻는 질문",
    "nav.login": "로그인",
    "nav.install": "브라우저에 추가",
    "hero.eyebrow": "로컬 우선 · 설정 불필요 · 파일을 바로 읽고 씁니다",
    "hero.title": "브라우저에서 Markdown 읽고 쓰기",
    "hero.sub": "정교한 Markdown 타이포그래피 테마 내장, 오프라인 설계, 파일은 기기를 떠나지 않습니다.",
    "badge.free": "무료",
    "badge.pro": "Pro",
    "diff1.title": "로컬 우선, 업로드 없음",
    "diff1.desc": "서버도 계정도 필요 없습니다. 모든 작업이 브라우저에서 이루어지고 파일은 기기를 떠나지 않습니다.",
    "diff2.title": "파일 직접 읽기/쓰기",
    "diff2.desc": "File System Access API로 실제 .md를 열고 편집을 그대로 저장합니다. 사본도 충돌도 없죠.",
    "diff3.title": "Word 읽기·쓰기",
    "diff3.desc": "Office 없이 .docx를 워드 프로세서 같은 화면으로 열어 편집 가능한 Markdown으로 변환하고, 진짜 Word 객체로 내보냅니다.",
    "diff4.title": "위챗(WeChat) 복사",
    "diff4.desc": "선택한 테마 스타일이 인라인화되어 위챗 편집기에서도 모양이 유지됩니다.",
    "feat.title": "Markdown을 위해 만든 리더",
    "feat.sub": "따뜻하고, 집중할 수 있고, 마음껏 꾸밀 수 있습니다. 모든 읽기가 종이책 같습니다.",
    "f1.title": "46 테마 · 6 계열",
    "f1.desc": "Aura, Paper, Rhythm, Dark, Archive 계열로 읽기·쓰기·조판을 지원.",
    "f2.title": "WYSIWYG 편집",
    "f2.desc": "보는 대로 편집하고 원본 파일에 바로 저장. 사본은 만들어지지 않습니다.",
    "f3.title": "폴더 라이브러리",
    "f3.desc": "여러 루트, 즉시 검색, 이미지 미리보기. 책장처럼 문서를 관리하세요.",
    "f4.title": "원클릭 내보내기",
    "f4.desc": "HTML·PDF·편집 가능한 네이티브 Word로 내보내 공유하거나 보관.",
    "f5.title": "탭과 개요",
    "f5.desc": "멀티탭 편집, 제목 개요 탐색, KaTeX 수식과 Mermaid 다이어그램 실시간 렌더링.",
    "f6.title": "검색과 드래그",
    "f6.desc": "즉시 필터링과 폴더 간 드래그로 파일 이동, 이미지 링크 자동 수정.",
    "f7.title": "웹 문서 저장",
    "f7.desc": "웹의 Markdown을 로컬 라이브러리에 저장해 오프라인으로 읽기.",
    "f8.title": "세션 복원",
    "f8.desc": "열린 탭과 경로가 유지됩니다. 새로고침 후에도 자동 복원, 재인증 불필요.",
    "themes.title": "46 테마 · 6 계열",
    "themes.sub": "Aura · Paper · Rhythm · Dark · Archive — 읽기·쓰기·편집 조판을 위한 시리즈.",
    "t1.name": "Aura · 따뜻함",
    "t1.desc": "호박빛 갈색 · 세리프 본문 · 종이책 느낌",
    "t2.name": "Paper · 송지",
    "t2.desc": "누른 색 종이 · 동양 조판 · 고전적",
    "t3.name": "Rhythm · 숲",
    "t3.desc": "숲의 녹색 · 저널 풍 · 상쾌함",
    "t4.name": "Archive · 라떼",
    "t4.desc": "커피 톤 · 둥근 자중 · 아늑함",
    "t5.name": "Dark · 밤",
    "t5.desc": "깊은 필름 · 몰입 · 눈이 편안함",
    "t6.name": "WeChat · 청량",
    "t6.desc": "싱그러운 녹색 · 위챗 조판 · 원클릭 내보내기",
    "privacy.title": "문서는 항상 기기에 머뭅니다",
    "privacy.sub": "로컬 우선: 문서는 항상 기기에 남습니다. 계정과 Pro 라이선스 운영에 필요한 최소한의 데이터만 전송합니다.",
    "p1.title": "업로드 없음",
    "p1.desc": "서버로 전송되는 데이터는 없습니다. 모든 처리가 기기 내에서.",
    "p2.title": "허용한 폴더만",
    "p2.desc": "허용한 폴더만 읽고 쓰며 언제든 철회 가능.",
    "p3.title": "정리 + 엄격한 CSP",
    "p3.desc": "렌더링과 내보내기는 이중 정리. 실행되는 건 로컬 스크립트뿐.",
    "p4.title": "라이브러리 로컬 동봉",
    "p4.desc": "marked·Vditor·docx를 확장 프로그램에 동봉. 원격 로드 없음.",
    "pricing.title": "무료로 시작, 필요할 때 업그레이드",
    "pricing.sub": "읽기는 영구 무료. 테마·내보내기·편집 등 고급 기능은 일시불 Pro로 해제.",
    "price.free.plan": "무료",
    "price.free.cost": "영구 무료",
    "price.free.f1": "Markdown 렌더링 및 읽기",
    "price.free.f2": "6개 엄선 테마",
    "price.free.f3": "단일 루트 폴더 탐색",
    "price.free.f4": "로컬 파일은 기기 밖으로 나가지 않음",
    "price.free.f5": "최근 폴더 및 빠른 열기",
    "price.free.f6": "키보드 단축키 및 검색",
    "price.free.btn": "브라우저에 추가",
    "price.pro.tag": "인기",
    "price.pro.plan": "Pro",
    "price.pro.cost": "<span class=\"now\">$4.99</span><span class=\"was\">$9.99</span><span class=\"save\">50% 할인</span>",
    "price.promoFree": "출시 기간 무료",
    "price.promoFreePrice": "무료",
    "price.promoFreeNote": "기간 한정 무료 · 종료 후 $9.99로 복귀",
    "price.pro.pendingNote": "새 결제 서비스 심사 중 · 현재 구매할 수 없습니다",
    "price.pro.early": "얼리버드 한정 · 종료 후 $9.99",
    "price.pro.note": "일시불 · 평생 업데이트",
    "price.pro.f1": "전체 46 테마 (6 계열)",
    "price.pro.f2": "네이티브 Word / PDF / HTML 내보내기",
    "price.pro.f3": "WYSIWYG 편집, 자동 저장",
    "price.pro.f4": "다중 루트 폴더 관리",
    "price.pro.f5": "웹 문서를 라이브러리에 저장",
    "price.pro.f6": "위챗 원클릭 발행",
    "diff4t.title": "인쇄급 조판",
    "diff4t.desc": "수직 리듬, 고정 행폭, 정교한 간격으로 긴 글도 편안하게 읽힙니다.",
    "t6t.name": "조판 · 정교",
    "t6t.desc": "세리프 제목, 양쪽 맞춤 본문, 미니멀 표——모든 테마에 편집급 조판.",
    "price.pro.f6t": "인쇄급 조판 엔진",
    "price.pro.btn": "$4.99 에 Pro 받기 →",
    "price.pro.btnPending": "결제 준비 중",
    "steps.title": "세 단계로 종이책 같은 읽기",
    "steps.sub": "복잡한 설정 없이, 책을 여는 것만큼 간단하게.",
    "s1.title": "폴더 선택",
    "s1.desc": "하나 이상의 로컬 Markdown 폴더를 라이브러리 루트로 허용하고 재귀적으로 탐색.",
    "s2.title": "테마 선택",
    "s2.desc": "6 계열 46 테마 중에서 고르고 원클릭으로 모양 전환.",
    "s3.title": "편집하고 저장",
    "s3.desc": "편집은 원본 .md에 바로 저장되거나 HTML·PDF·네이티브 Word로 내보내기.",
    "faq.title": "자주 묻는 질문",
    "faq.sub": "개인정보·기능·구매에 대한 답변.",
    "faq.q1": "내 파일이 서버에 업로드되나요?",
    "faq.a1": "아니요. JingMark는 로컬 우선입니다. 모든 읽기와 쓰기는 브라우저의 File System Access API에서 이루어지며 업로드되지 않습니다. Pro 상태는 이메일로 확인되며, 저장되는 것은 이메일과 결제 상태뿐입니다.",
    "faq.q2": "무료와 Pro의 차이는?",
    "faq.a2": "무료는 Markdown 전체 읽기, 6개 엄선 테마, 단일 루트 탐색을 포함합니다. Pro는 전체 46 테마, 네이티브 Word/PDF 내보내기, Word .docx 가져오기 및 Markdown 변환, WYSIWYG 편집 및 저장, 다중 루트 관리, 웹 문서 저장 등을 해제합니다. 읽기는 영구 무료입니다.",
    "faq.q3": "지원하는 브라우저는?",
    "faq.a3": "File System Access API를 지원하는 Chromium 기반 브라우저(Chrome·Edge·Brave·Arc 등, Chrome 86 이상).",
    "faq.q4": "구매 후 Pro를 어떻게 활성화하나요?",
    "faq.a4": "확장 프로그램의 '업그레이드'를 클릭해 이메일로 로그인하면 Pro 상태가 자동 동기화됩니다.",
    "faq.q5": "Pro를 여러 대의 컴퓨터에서 사용할 수 있나요?",
    "faq.a5": "Pro는 이메일 계정에 연결되며 최대 3대의 기기에서 사용할 수 있습니다. 4번째 기기에서는 Pro 기능이 활성화되지 않지만 로그아웃되지 않고 다른 기기도 영향을 받지 않습니다. '인증된 기기'에서 사용하지 않는 기기를 제거하면 자리가 비워집니다.",
    "faq.q6": "수식과 다이어그램을 지원하나요?",
    "faq.a6": "예. JingMark는 KaTeX 수식과 Mermaid 다이어그램을 네이티브로 렌더링합니다——Markdown에 표준 LaTeX 또는 Mermaid 구문을 작성하기만 하면 됩니다.",
    "faq.q7": "몇 개의 언어를 지원하나요?",
    "faq.a7": "인터페이스는 13개 언어를 지원합니다: English, 中文, 繁體中文, 日本語, 한국어, Français, Deutsch, Español, Português, Русский, Tiếng Việt, Svenska, العربية(RTL).",
    "faq.q8": "내보내기 전에 미리보기할 수 있나요?",
    "faq.a8": "예. 분할 미리보기는 좁게(680px), 중간(820px), 넓게(960px)의 세 가지 너비로 표시되며, 몰입형 교정을 위한 전체 화면 모드도 제공합니다.",

    "dl.title": "브라우저를 고르고 읽기 시작",
    "dl.sub": "계정 불필요, 서버 불필요. 설치만으로 종이책 같은 고요함을.",
    "dl.chrome": "Chrome",
    "dl.edge": "Edge",
    "dl.firefox": "Firefox",
    "dl.note": "Chrome과 Edge에서 지금 바로 사용 가능 — 오늘 설치하세요. Brave·Arc·Firefox는 곧 지원됩니다.",
    "dl.soon": "곧 출시",
    "footer.copy": "© 2026 JingMark · 브라우저를 위한 따뜻한 Markdown 리더＆라이터",
    "footer.tagline": "종이책을 사랑하는 이들을 위해.",
    "auth.login": "로그인",
    "auth.register": "계정 만들기",
    "auth.email": "이메일",
    "auth.password": "비밀번호",
    "auth.confirm": "비밀번호 확인",
    "auth.inviteCode": "초대 코드",
    "auth.invitePlaceholder": "초대 코드를 입력하세요",
    "auth.inviteRequired": "초대 코드를 입력해 주세요.",
    "auth.inviteInvalid": "초대 코드가 유효하지 않거나 만료되었습니다.",
    "auth.inviteUsed": "이미 사용된 초대 코드입니다.",
    "auth.upgrade": "<span class='au-label'>Pro 구매</span><span class='au-now'>$4.99</span><span class='au-was'>$9.99</span><span class='au-save'>50% 절약</span>",
    "auth.logout": "로그아웃",
    "auth.errEmpty": "모든 항목을 입력하세요",
    "auth.errShort": "비밀번호는 8자 이상",
    "auth.errMatch": "비밀번호가 일치하지 않습니다",
    "auth.errNetwork": "네트워크 오류. 연결을 확인하세요.",
    "auth.loginToPurchase": "먼저 로그인하세요: 구매는 계정에 연결되어야 합니다.",
    "auth.errFail": "문제가 발생했습니다. 다시 시도하세요.",
    "auth.successReg": "계정이 생성되었습니다!",
    "auth.welcome": "로그인됨",
    "auth.forgot": "비밀번호를 잊으셨나요?",
    "auth.resetHint": "가입한 이메일을 입력하면 재설정 링크를 보내드립니다.",
    "auth.sendReset": "재설정 메일 보내기",
    "auth.backLogin": "로그인으로 돌아가기",
    "auth.resetSent": "재설정 메일을 보냈습니다. 받은 편지를 확인하세요.",
    "auth.resetSuccess": "비밀번호 재설정 완료! 다시 로그인하세요.",
    "meta.desc": "로컬 우선 Markdown 리더 & 라이터. 46개 테마, 네이티브 Word 내보내기, 파일 직접 읽기/쓰기. 업로드 없음, 서버 없음.",
    "page.title": "JingMark · 브라우저용 따뜻한 Markdown 리더 & 라이터"
  },
  "fr": {
    "brand": "JingMark",
    "nav.features": "Fonctionnalités",
    "nav.themes": "Thèmes",
    "nav.pricing": "Tarifs",
    "nav.faq": "FAQ",
    "nav.login": "Se connecter",
    "nav.install": "Ajouter au navigateur",
    "hero.eyebrow": "Local d'abord · Sans configuration · Lit et écrit vos fichiers",
    "hero.title": "Lire et écrire du Markdown dans le navigateur",
    "hero.sub": "Des thèmes de typographie Markdown riches et raffinés intégrés, conçue pour le hors-ligne, vos fichiers ne quittent jamais votre appareil.",
    "badge.free": "Gratuit",
    "badge.pro": "Pro",
    "diff1.title": "Local d'abord, sans envoi",
    "diff1.desc": "Aucun serveur ni compte requis. Tout s'exécute dans votre navigateur ; vos fichiers ne quittent jamais votre appareil.",
    "diff2.title": "Lecture & écriture directes",
    "diff2.desc": "Ouvrez de vrais fichiers .md via l'API File System Access et enregistrez directement — sans copie, sans conflit.",
    "diff3.title": "Import/export Word",
    "diff3.desc": "Ouvrez vos .docx sans suite bureautique, convertissez-les en Markdown modifiable, ou exportez de vrais objets Word.",
    "diff4.title": "Copie prête pour WeChat",
    "diff4.desc": "Le style de votre thème est intégré en ligne, le collage conserve son apparence dans l'éditeur WeChat.",
    "feat.title": "Un lecteur conçu pour Markdown",
    "feat.sub": "Chaleureux, concentré et infiniment personnalisable — chaque lecture ressemble à du papier.",
    "f1.title": "46 thèmes, 6 familles",
    "f1.desc": "Familles Aura, Paper, Rhythm, Dark et Archive pour lire, écrire et composer.",
    "f2.title": "Édition WYSIWYG",
    "f2.desc": "Éditez ce que vous voyez et réécrivez dans le fichier d'origine — sans copie.",
    "f3.title": "Bibliothèque de dossiers",
    "f3.desc": "Plusieurs racines, recherche instantanée, aperçu des images — gérez vos docs comme une bibliothèque.",
    "f4.title": "Export en un clic",
    "f4.desc": "Exportez en HTML, PDF ou Word natif modifiable pour partager ou archiver.",
    "f5.title": "Onglets & plan",
    "f5.desc": "Édition multi-onglets, plan par titres, mathématiques KaTeX et diagrammes Mermaid en direct.",
    "f6.title": "Recherche & glisser",
    "f6.desc": "Filtrage instantané et glisser-déposer entre dossiers, liens d'images réécrits automatiquement.",
    "f7.title": "Sauvegarder le web",
    "f7.desc": "Enregistrez des pages Markdown du web dans votre bibliothèque locale pour une lecture hors-ligne.",
    "f8.title": "Reprise de session",
    "f8.desc": "Les onglets et chemins ouverts persistent ; tout revient après rechargement — sans réautorisation.",
    "themes.title": "46 thèmes, 6 familles",
    "themes.sub": "Aura · Paper · Rhythm · Dark · Archive — pour la lecture, l’écriture et la composition éditoriale.",
    "t1.name": "Aura · Chaleur",
    "t1.desc": "Brun ambré · Corps serif · Touche papier",
    "t2.name": "Paper · Song",
    "t2.desc": "Crème papier de riz · Typo orientale · Classique",
    "t3.name": "Rhythm · Forêt",
    "t3.desc": "Vert forêt · Mise en page journal · Frais",
    "t4.name": "Archive · Latte",
    "t4.desc": "Tons café · Graisse arrondie · Confortable",
    "t5.name": "Dark · Nuit",
    "t5.desc": "Film profond · Immersif · Doux pour les yeux",
    "t6.name": "WeChat · Frais",
    "t6.desc": "Vert frais · Mise en page WeChat · Export en un clic",
    "privacy.title": "Vos documents restent sur votre appareil",
    "privacy.sub": "Local d'abord : vos documents restent sur votre appareil. Nous n'envoyons que le minimum de données nécessaires au fonctionnement de votre compte et de votre licence Pro.",
    "p1.title": "Aucun envoi",
    "p1.desc": "Rien n'est envoyé à un serveur ; tout le traitement reste sur votre machine.",
    "p2.title": "Dossiers autorisés uniquement",
    "p2.desc": "Nous lisons et écrivons seulement les dossiers que vous autorisez, révocables à tout moment.",
    "p3.title": "Assaini & CSP stricte",
    "p3.desc": "Rendu et export sont doublement assainis ; seuls des scripts locaux s'exécutent.",
    "p4.title": "Bibliothèques intégrées",
    "p4.desc": "marked, Vditor et docx sont inclus dans l'extension — aucun chargement distant.",
    "pricing.title": "Gratuit pour commencer, à upgradé si besoin",
    "pricing.sub": "La lecture est gratuite à toujours. Débloquez thèmes, export et édition avec un achat Pro unique.",
    "price.free.plan": "Gratuit",
    "price.free.cost": "Gratuit à toujours",
    "price.free.f1": "Rendu & lecture Markdown",
    "price.free.f2": "6 thèmes sélectionnés",
    "price.free.f3": "Navigation à racine unique",
    "price.free.f4": "Vos fichiers restent sur votre appareil",
    "price.free.f5": "Dossiers récents et ouverture rapide",
    "price.free.f6": "Raccourcis clavier et recherche",
    "price.free.btn": "Ajouter au navigateur",
    "price.pro.tag": "Le plus populaire",
    "price.pro.plan": "Pro",
    "price.pro.cost": "<span class=\"now\">$4.99</span><span class=\"was\">$9.99</span><span class=\"save\">−50%</span>",
    "price.promoFree": "Gratuit au lancement",
    "price.promoFreePrice": "Gratuit",
    "price.promoFreeNote": "Gratuit pour une durée limitée · retour à 9,99 $ après le lancement",
    "price.pro.pendingNote": "Nouveau prestataire en cours de validation · achats suspendus",
    "price.pro.early": "Offre de lancement · repasse à 9,99 $",
    "price.pro.note": "Achat unique · Mises à jour à vie",
    "price.pro.f1": "Les 46 thèmes (six familles)",
    "price.pro.f2": "Export Word / PDF / HTML natif",
    "price.pro.f3": "Édition WYSIWYG avec réécriture auto",
    "price.pro.f4": "Gestion multi-racines",
    "price.pro.f5": "Sauvegarde de docs web",
    "price.pro.f6": "Publication WeChat en un clic",
    "diff4t.title": "Mise en page imprimable",
    "diff4t.desc": "Le rythme vertical, une mesure verrouillée et un espacement réglé rendent la lecture fluide.",
    "t6t.name": "Typo · Raffinée",
    "t6t.desc": "Titres serif, corps justifié, tables minimales — une finition éditoriale dans chaque thème.",
    "price.pro.f6t": "Moteur de typographie de qualité imprimerie",
    "price.pro.btn": "Obtenir Pro pour 4,99 $ →",
    "price.pro.btnPending": "Paiements en pause",
    "steps.title": "Trois étapes vers une lecture papier",
    "steps.sub": "Aucune configuration complexe — aussi simple qu'ouvrir un livre.",
    "s1.title": "Choisir un dossier",
    "s1.desc": "Autorisez un ou plusieurs dossiers Markdown locaux comme racines et parcourez-les récursivement.",
    "s2.title": "Choisir un thème",
    "s2.desc": "Choisissez parmi 46 thèmes en six familles et changez le style en un clic.",
    "s3.title": "Éditer & réécrire",
    "s3.desc": "Les edits s'enregistrent dans le .md d'origine, ou exportez en HTML, PDF ou Word natif.",
    "faq.title": "Questions fréquentes",
    "faq.sub": "Réponses sur la confidentialité, les fonctionnalités et l'achat.",
    "faq.q1": "Mes fichiers sont-ils envoyés sur un serveur ?",
    "faq.a1": "Non. JingMark est local d'abord — toute lecture et écriture se fait dans votre navigateur via l'API File System Access. Rien n'est envoyé. Le statut Pro est vérifié par e-mail ; seuls votre e-mail et l'état du paiement sont stockés.",
    "faq.q2": "Quelle est la différence entre Gratuit et Pro ?",
    "faq.a2": "Gratuit inclut la lecture complète Markdown, 6 thèmes sélectionnés et la navigation à racine unique. Pro débloque les 46 thèmes, l'export Word/PDF natif, l'import Word .docx vers Markdown éditable, l'édition WYSIWYG avec réécriture, la gestion multi-racines, la sauvegarde de docs web et plus. La lecture reste gratuite à toujours.",
    "faq.q3": "Quels navigateurs sont pris en charge ?",
    "faq.a3": "Tout navigateur Chromium (Chrome, Edge, Brave, Arc, etc.) avec l'API File System Access (Chrome 86+).",
    "faq.q4": "Comment activer Pro après l'achat ?",
    "faq.a4": "Cliquez « Mettre à niveau » dans l'extension et connectez-vous par e-mail. Votre statut Pro se synchronise automatiquement.",
    "faq.q5": "Puis-je utiliser Pro sur plusieurs ordinateurs ?",
    "faq.a5": "Pro est lié à votre compte e-mail et fonctionne sur 3 appareils maximum. Sur un 4e appareil, Pro ne s'active pas : vous n'êtes pas déconnecté et vos autres appareils ne sont pas affectés. Retirez un appareil inutilisé depuis le panneau du compte pour libérer une place.",
    "faq.q6": "Prenez-vous en charge les équations mathématiques et les diagrammes ?",
    "faq.a6": "Oui. JingMark rend nativement les formules KaTeX et les diagrammes Mermaid — il suffit d'écrire la syntaxe LaTeX ou Mermaid standard dans votre Markdown.",
    "faq.q7": "Combien de langues sont prises en charge ?",
    "faq.a7": "L'interface est disponible en 13 langues : English, 中文, 繁體中文, 日本語, 한국어, Français, Deutsch, Español, Português, Русский, Tiếng Việt, Svenska et العربية (RTL).",
    "faq.q8": "Puis-je prévisualiser avant l'export ?",
    "faq.a8": "Oui. L'aperçu partagé affiche votre contenu en largeurs étroite (680px), moyenne (820px) ou large (960px), avec un mode plein écran pour une relecture sans distraction.",

    "dl.title": "Choisissez votre navigateur et commencez",
    "dl.sub": "Sans compte, sans serveur — installez et ressentez le calme du papier aussitôt.",
    "dl.chrome": "Chrome",
    "dl.edge": "Edge",
    "dl.firefox": "Firefox",
    "dl.note": "Déjà disponible sur Chrome et Edge — installez-les dès aujourd'hui. Brave, Arc et Firefox bientôt.",
    "dl.soon": "Bientôt disponible",
    "footer.copy": "© 2026 JingMark · Un lecteur & éditeur Markdown chaleureux pour le navigateur",
    "footer.tagline": "Conçu pour les lecteurs amoureux du papier.",
    "auth.login": "Se connecter",
    "auth.register": "Créer un compte",
    "auth.email": "E-mail",
    "auth.password": "Mot de passe",
    "auth.confirm": "Confirmer le mot de passe",
    "auth.inviteCode": "Code d'invitation",
    "auth.invitePlaceholder": "Saisissez votre code d'invitation",
    "auth.inviteRequired": "Le code d'invitation est requis.",
    "auth.inviteInvalid": "Code d'invitation invalide ou expiré.",
    "auth.inviteUsed": "Ce code d'invitation a déjà été utilisé.",
    "auth.upgrade": "<span class='au-label'>Obtenir Pro</span><span class='au-now'>$4.99</span><span class='au-was'>$9.99</span><span class='au-save'>-50%</span>",
    "auth.logout": "Se déconnecter",
    "auth.errEmpty": "Veuillez remplir tous les champs",
    "auth.errShort": "Le mot de passe doit faire 8 caractères minimum",
    "auth.errMatch": "Les mots de passe ne correspondent pas",
    "auth.errNetwork": "Erreur réseau. Vérifiez votre connexion.",
    "auth.loginToPurchase": "Connectez-vous d'abord : votre achat doit être lié à votre compte.",
    "auth.errFail": "Une erreur est survenue. Veuillez réessayer.",
    "auth.successReg": "Compte créé !",
    "auth.welcome": "Connecté",
    "auth.forgot": "Mot de passe oublié ?",
    "auth.resetHint": "Saisissez votre e-mail et nous enverrons un lien de réinitialisation.",
    "auth.sendReset": "Envoyer l'e-mail",
    "auth.backLogin": "Retour à la connexion",
    "auth.resetSent": "E-mail de réinitialisation envoyé. Vérifiez votre boîte de réception.",
    "auth.resetSuccess": "Mot de passe réinitialisé ! Veuillez vous reconnecter.",
    "meta.desc": "Lecteur & éditeur Markdown local-first. 46 thèmes, export Word natif, lecture/écriture directe des fichiers. Sans upload, sans serveur.",
    "page.title": "JingMark · Lecteur et éditeur Markdown chaleureux pour le navigateur"
  },
  "de": {
    "brand": "JingMark",
    "nav.features": "Funktionen",
    "nav.themes": "Themen",
    "nav.pricing": "Preise",
    "nav.faq": "FAQ",
    "nav.login": "Anmelden",
    "nav.install": "Zum Browser hinzufügen",
    "hero.eyebrow": "Lokal zuerst · Keine Einrichtung · Liest & schreibt Ihre Dateien",
    "hero.title": "Markdown im Browser lesen und schreiben",
    "hero.sub": "Reiche, ausgefeilte Markdown-Typografie-Themen integriert, offline konzipiert, Ihre Dateien verlassen nie Ihr Gerät.",
    "badge.free": "Kostenlos",
    "badge.pro": "Pro",
    "diff1.title": "Lokal zuerst, keine Uploads",
    "diff1.desc": "Kein Server und kein Konto nötig. Alles läuft im Browser; Ihre Dateien verlassen nie Ihr Gerät.",
    "diff2.title": "Direktes Lesen & Schreiben",
    "diff2.desc": "Öffnen Sie echte .md-Dateien über die File System Access API und speichern Sie direkt — keine Kopien, keine Konflikte.",
    "diff3.title": "Word-Import & -Export",
    "diff3.desc": "Öffnen Sie .docx ohne Office-Suite, wandeln Sie sie in bearbeitbares Markdown um oder exportieren Sie echte Word-Objekte.",
    "diff4.title": "WeChat-fertige Kopie",
    "diff4.desc": "Der Stil Ihres Themas wird inline eingefügt, damit der Inhalt im WeChat-Editor sein Aussehen behält.",
    "feat.title": "Ein für Markdown gemachter Leser",
    "feat.sub": "Warm, fokussiert und endlos anpassbar — jede Lesung fühlt sich wie Papier an.",
    "f1.title": "46 Themen, 6 Familien",
    "f1.desc": "Familien Aura, Paper, Rhythm, Dark und Archive zum Lesen, Schreiben und Setzen.",
    "f2.title": "WYSIWYG-Bearbeitung",
    "f2.desc": "Bearbeiten Sie, was Sie sehen, und schreiben Sie zurück in die Originaldatei — keine Kopien.",
    "f3.title": "Ordner-Bibliothek",
    "f3.desc": "Mehrere Wurzeln, Sofort-Suche, Bildvorschau — verwalten Sie Docs wie ein Bücherregal.",
    "f4.title": "Export mit einem Klick",
    "f4.desc": "Exportieren Sie nach HTML, PDF oder nativem bearbeitbarem Word zum Teilen oder Archivieren.",
    "f5.title": "Tabs & Gliederung",
    "f5.desc": "Mehrfach-Tab-Bearbeitung, Übersicht nach Überschriften, live KaTeX-Mathematik und Mermaid-Diagramme.",
    "f6.title": "Suche & Ziehen",
    "f6.desc": "Sofortige Filterung und Ordner-übergreifendes Ziehen, Bildlinks werden automatisch umgeschrieben.",
    "f7.title": "Web-Docs speichern",
    "f7.desc": "Speichern Sie Markdown-Seiten aus dem Web in Ihrer lokalen Bibliothek für Offline-Lesung.",
    "f8.title": "Sitzungs-Wiederherstellung",
    "f8.desc": "Offene Tabs und Pfade bleiben erhalten; nach Neuladen ist alles zurück — ohne erneute Autorisierung.",
    "themes.title": "46 Themen, 6 Familien",
    "themes.sub": "Aura · Paper · Rhythm · Dark · Archive — zum Lesen, Schreiben und für den Buchsatz.",
    "t1.name": "Aura · Warm",
    "t1.desc": "Bernsteinbraun · Serifen-Text · Papierbuch-Gefühl",
    "t2.name": "Paper · Song",
    "t2.desc": "ReisPapier-Creme · Östliche Typografie · Klassisch",
    "t3.name": "Rhythm · Wald",
    "t3.desc": "Waldgrün · Journal-Layout · Frisch",
    "t4.name": "Archive · Latte",
    "t4.desc": "Kaffee-Töne · Runde Schriftstärke · Gemütlich",
    "t5.name": "Dark · Nacht",
    "t5.desc": "Tiefer Film · Immersiv · Augenschonend",
    "t6.name": "WeChat · Frisch",
    "t6.desc": "Frisches Grün · WeChat-Layout · Export mit einem Klick",
    "privacy.title": "Ihre Dokumente bleiben auf Ihrem Gerät",
    "privacy.sub": "Lokal zuerst: Ihre Dokumente bleiben auf Ihrem Gerät. Wir senden nur die minimalen Daten, die zum Betrieb Ihres Kontos und Ihrer Pro-Lizenz nötig sind.",
    "p1.title": "Keine Uploads",
    "p1.desc": "Nichts wird an einen Server gesendet; alle Verarbeitung bleibt auf Ihrem Rechner.",
    "p2.title": "Nur erlaubte Ordner",
    "p2.desc": "Wir lesen und schreiben nur Ordner, die Sie erlauben — jederzeit widerrufbar.",
    "p3.title": "Bereinigt & strenge CSP",
    "p3.desc": "Rendering und Export sind doppelt bereinigt; nur lokale Skripte laufen.",
    "p4.title": "Bibliotheken lokal gebündelt",
    "p4.desc": "marked, Vditor und docx sind in der Erweiterung enthalten — keine Fernladung.",
    "pricing.title": "Kostenlos starten, bei Bedarf upgraden",
    "pricing.sub": "Lesen ist für immer kostenlos. Themen, Export und Bearbeitung mit einem einmaligen Pro-Kauf freischalten.",
    "price.free.plan": "Kostenlos",
    "price.free.cost": "Für immer kostenlos",
    "price.free.f1": "Markdown-Rendering & Lesen",
    "price.free.f2": "6 ausgewählte Themen",
    "price.free.f3": "Ordner-Navigation mit einer Wurzel",
    "price.free.f4": "Lokale Dateien bleiben auf deinem Gerät",
    "price.free.f5": "Zuletzt verwendete Ordner & Schnellöffnung",
    "price.free.f6": "Tastaturkürzel & Volltextsuche",
    "price.free.btn": "Zum Browser hinzufügen",
    "price.pro.tag": "Am beliebtesten",
    "price.pro.plan": "Pro",
    "price.pro.cost": "<span class=\"now\">$4.99</span><span class=\"was\">$9.99</span><span class=\"save\">−50%</span>",
    "price.promoFree": "Beim Start kostenlos",
    "price.promoFreePrice": "Kostenlos",
    "price.promoFreeNote": "Zeitlich begrenzt kostenlos · danach wieder 9,99 $",
    "price.pro.pendingNote": "Neuer Zahlungsanbieter in Prüfung · Käufe derzeit pausiert",
    "price.pro.early": "Frühbucher-Aktion · danach 9,99 $",
    "price.pro.note": "Einmaliger Kauf · Lebenslange Updates",
    "price.pro.f1": "Alle 46 Themen (sechs Familien)",
    "price.pro.f2": "Native Word-/PDF-/HTML-Export",
    "price.pro.f3": "WYSIWYG-Bearbeitung mit Auto-Rückschreiben",
    "price.pro.f4": "Ordner-Verwaltung mit mehreren Wurzeln",
    "price.pro.f5": "Web-Docs in Bibliothek speichern",
    "price.pro.f6": "WeChat-Veröffentlichung mit einem Klick",
    "diff4t.title": "Druckreifes Satzbild",
    "diff4t.desc": "Vertikaler Rhythmus, feste Zeilenbreite und abgestimmter Abstand machen langes Lesen mühelos.",
    "t6t.name": "Satz · Edel",
    "t6t.desc": "Serifen-Überschriften, Blocksatz, schlichte Tabellen — editorialer Schliff in jedem Thema.",
    "price.pro.f6t": "Satz-Engine in Druckqualität",
    "price.pro.btn": "Pro für 4,99 $ holen →",
    "price.pro.btnPending": "Zahlungen pausiert",
    "steps.title": "Drei Schritte zum Papier-Lesen",
    "steps.sub": "Keine komplizierte Einrichtung — so einfach wie ein Buch öffnen.",
    "s1.title": "Ordner wählen",
    "s1.desc": "Erlauben Sie einen oder mehrere lokale Markdown-Ordner als Wurzeln und durchsuchen Sie sie rekursiv.",
    "s2.title": "Thema wählen",
    "s2.desc": "Wählen Sie aus 46 Themen in sechs Familien und wechseln Sie den Stil mit einem Klick.",
    "s3.title": "Bearbeiten & zurückschreiben",
    "s3.desc": "Bearbeitungen speichern direkt in der originalen .md oder exportieren nach HTML, PDF oder nativem Word.",
    "faq.title": "Häufige Fragen",
    "faq.sub": "Antworten zu Datenschutz, Funktionen und Kauf.",
    "faq.q1": "Werden meine Dateien auf einen Server hochgeladen?",
    "faq.a1": "Nein. JingMark ist lokal zuerst — jedes Lesen und Schreiben erfolgt im Browser über die File System Access API. Es wird nichts hochgeladen. Der Pro-Status wird per E-Mail verifiziert; nur Ihre E-Mail und der Zahlungsstatus werden gespeichert.",
    "faq.q2": "Was ist der Unterschied zwischen Kostenlos und Pro?",
    "faq.a2": "Kostenlos umfasst das vollständige Markdown-Lesen, 6 ausgewählte Themen und die Navigation mit einer Wurzel. Pro schaltet alle 46 Themen, nativen Word/PDF-Export, Word-.docx-Import nach bearbeitbarem Markdown, WYSIWYG-Bearbeitung mit Rückschreiben, Mehrfach-Wurzeln, Web-Doc-Speicherung und mehr frei. Lesen bleibt für immer kostenlos.",
    "faq.q3": "Welche Browser werden unterstützt?",
    "faq.a3": "Jeder Chromium-Browser (Chrome, Edge, Brave, Arc usw.) mit File System Access API (Chrome 86+).",
    "faq.q4": "Wie aktiviere ich Pro nach dem Kauf?",
    "faq.a4": "Klicken Sie in der Erweiterung auf „Upgraden“ und melden Sie sich per E-Mail an. Ihr Pro-Status wird automatisch synchronisiert.",
    "faq.q5": "Kann ich Pro auf mehreren Computern nutzen?",
    "faq.a5": "Pro ist an Ihr E-Mail-Konto gebunden und funktioniert auf bis zu 3 Geräten. Auf einem 4. Gerät wird Pro nicht aktiviert — Sie werden nicht abgemeldet und Ihre anderen Geräte bleiben unberührt. Entfernen Sie ein ungenutztes Gerät im Kontobereich, um einen Platz freizugeben.",
    "faq.q6": "Werden mathematische Formeln und Diagramme unterstützt?",
    "faq.a6": "Ja. JingMark rendert KaTeX-Formeln und Mermaid-Diagramme nativ — schreiben Sie einfach Standard-LaTeX- oder Mermaid-Syntax in Ihr Markdown.",
    "faq.q7": "Wie viele Sprachen werden unterstützt?",
    "faq.a7": "Die Oberfläche ist in 13 Sprachen verfügbar: English, 中文, 繁體中文, 日本語, 한국어, Français, Deutsch, Español, Português, Русский, Tiếng Việt, Svenska und العربية (RTL).",
    "faq.q8": "Kann ich vor dem Export eine Vorschau ansehen?",
    "faq.a8": "Ja. Die geteilte Vorschau zeigt Ihren Inhalt in schmaler (680px), mittlerer (820px) oder weiter (960px) Breite, mit einem Vollbildmodus für konzentriertes Korrekturlesen.",

    "dl.title": "Wählen Sie Ihren Browser und lesen Sie los",
    "dl.sub": "Kein Konto, kein Server — installieren und spüren Sie sofort die Papier-Ruhe.",
    "dl.chrome": "Chrome",
    "dl.edge": "Edge",
    "dl.firefox": "Firefox",
    "dl.note": "Jetzt für Chrome und Edge verfügbar — installieren Sie es heute. Brave, Arc und Firefox folgen bald.",
    "dl.soon": "Demnächst verfügbar",
    "footer.copy": "© 2026 JingMark · Ein warmer Markdown-Leser & -Schreiber für den Browser",
    "footer.tagline": "Gemacht für Leser, die Papier lieben.",
    "auth.login": "Anmelden",
    "auth.register": "Konto erstellen",
    "auth.email": "E-Mail",
    "auth.password": "Passwort",
    "auth.confirm": "Passwort bestätigen",
    "auth.inviteCode": "Einladungscode",
    "auth.invitePlaceholder": "Einladungscode eingeben",
    "auth.inviteRequired": "Einladungscode ist erforderlich.",
    "auth.inviteInvalid": "Einladungscode ungültig oder abgelaufen.",
    "auth.inviteUsed": "Dieser Einladungscode wurde bereits verwendet.",
    "auth.upgrade": "<span class='au-label'>Pro holen</span><span class='au-now'>$4.99</span><span class='au-was'>$9.99</span><span class='au-save'>50% sparen</span>",
    "auth.logout": "Abmelden",
    "auth.errEmpty": "Bitte füllen Sie alle Felder aus",
    "auth.errShort": "Passwort muss mindestens 8 Zeichen lang sein",
    "auth.errMatch": "Passwörter stimmen nicht überein",
    "auth.errNetwork": "Netzwerkfehler. Bitte prüfen Sie Ihre Verbindung.",
    "auth.loginToPurchase": "Bitte zuerst anmelden — der Kauf muss mit Ihrem Konto verknüpft werden.",
    "auth.errFail": "Etwas ist schiefgelaufen. Bitte erneut versuchen.",
    "auth.successReg": "Konto erstellt!",
    "auth.welcome": "Angemeldet",
    "auth.forgot": "Passwort vergessen?",
    "auth.resetHint": "Geben Sie Ihre E-Mail ein, wir senden einen Link zum Zurücksetzen.",
    "auth.sendReset": "Reset-E-Mail senden",
    "auth.backLogin": "Zurück zum Anmelden",
    "auth.resetSent": "Reset-E-Mail gesendet. Bitte Postfach prüfen.",
    "auth.resetSuccess": "Passwort zurückgesetzt! Bitte erneut anmelden.",
    "meta.desc": "Lokal-first Markdown-Reader & -Writer. 46 Themen, nativer Word-Export, direktes Lesen/Schreiben von Dateien. Kein Upload, kein Server.",
    "page.title": "JingMark · Warmer Markdown-Reader & -Writer für den Browser"
  },
  "es": {
    "brand": "JingMark",
    "nav.features": "Funciones",
    "nav.themes": "Temas",
    "nav.pricing": "Precios",
    "nav.faq": "Preguntas",
    "nav.login": "Iniciar sesión",
    "nav.install": "Añadir al navegador",
    "hero.eyebrow": "Local primero · Sin configuración · Lee y escribe tus archivos",
    "hero.title": "Lee y escribe Markdown en tu navegador",
    "hero.sub": "Temas de tipografía Markdown ricos y refinados integrados, pensada para sin conexión, tus archivos nunca salen de tu dispositivo.",
    "badge.free": "Gratis",
    "badge.pro": "Pro",
    "diff1.title": "Local primero, sin envíos",
    "diff1.desc": "No hace falta servidor ni cuenta. Todo ocurre en tu navegador; tus archivos nunca salen de tu dispositivo.",
    "diff2.title": "Lectura y escritura directa",
    "diff2.desc": "Abre archivos .md reales con la API File System Access y guarda directamente — sin copias, sin conflictos.",
    "diff3.title": "Importar y exportar",
    "diff3.desc": "Abre tus .docx sin suite ofimática, conviértelos en Markdown editable o expórtalos como objetos Word reales.",
    "diff4.title": "Copia lista para WeChat",
    "diff4.desc": "El estilo de tu tema se inserta en línea, así el contenido conserva su aspecto en el editor de WeChat.",
    "feat.title": "Un lector hecho para Markdown",
    "feat.sub": "Cálido, enfocado y totalmente personalizable — cada lectura se siente como papel.",
    "f1.title": "46 temas, 6 familias",
    "f1.desc": "Familias Aura, Paper, Rhythm, Dark y Archive para leer, escribir y componer.",
    "f2.title": "Edición WYSIWYG",
    "f2.desc": "Edita lo que ves y escribe de vuelta en el archivo original — sin copias.",
    "f3.title": "Biblioteca de carpetas",
    "f3.desc": "Varias raíces, búsqueda instantánea, vista previa de imágenes — gestiona docs como una estantería.",
    "f4.title": "Exportar con un clic",
    "f4.desc": "Exporta a HTML, PDF o Word nativo editable para compartir o archivar.",
    "f5.title": "Pestañas y esquema",
    "f5.desc": "Edición multi-pestaña, esquema por títulos, matemáticas KaTeX y diagramas Mermaid en vivo.",
    "f6.title": "Buscar y arrastrar",
    "f6.desc": "Filtrado instantáneo y arrastrar entre carpetas, enlaces de imagen reescritos automáticamente.",
    "f7.title": "Guardar docs web",
    "f7.desc": "Guarda páginas Markdown de la web en tu biblioteca local para leer sin conexión.",
    "f8.title": "Restaurar sesión",
    "f8.desc": "Las pestañas y rutas abiertas persisten; todo vuelve tras recargar — sin reautorizar.",
    "themes.title": "46 temas, 6 familias",
    "themes.sub": "Aura · Paper · Rhythm · Dark · Archive — para leer, escribir y maquetar con calidad editorial.",
    "t1.name": "Aura · Cálido",
    "t1.desc": "Marrón ámbar · Cuerpo serif · Sensación de papel",
    "t2.name": "Paper · Song",
    "t2.desc": "Crema papel de arroz · Tipografía oriental · Clásico",
    "t3.name": "Rhythm · Bosque",
    "t3.desc": "Verde bosque · Diseño de diario · Fresco",
    "t4.name": "Archive · Latte",
    "t4.desc": "Tonos café · Peso redondeado · Acogedor",
    "t5.name": "Dark · Noche",
    "t5.desc": "Película profunda · Inmersivo · Suave con la vista",
    "t6.name": "WeChat · Fresco",
    "t6.desc": "Verde fresco · Maquetación WeChat · Exportar con un clic",
    "privacy.title": "Tus documentos permanecen en tu dispositivo",
    "privacy.sub": "Local primero: tus documentos permanecen en tu dispositivo. Solo enviamos los datos mínimos necesarios para gestionar tu cuenta y tu licencia Pro.",
    "p1.title": "Sin envíos",
    "p1.desc": "Nada se envía a un servidor; todo el procesamiento queda en tu equipo.",
    "p2.title": "Solo carpetas autorizadas",
    "p2.desc": "Leemos y escribimos solo las carpetas que permitas, revocables en cualquier momento.",
    "p3.title": "Saneado y CSP estricta",
    "p3.desc": "Render y export se saneam doblemente; solo corren scripts locales.",
    "p4.title": "Librerías empaquetadas localmente",
    "p4.desc": "marked, Vditor y docx vienen dentro de la extensión — sin carga remota.",
    "pricing.title": "Empieza gratis, mejora cuando lo necesites",
    "pricing.sub": "Leer es gratis para siempre. Desbloquea temas, exportar y editar con una compra única de Pro.",
    "price.free.plan": "Gratis",
    "price.free.cost": "Gratis para siempre",
    "price.free.f1": "Render y lectura Markdown",
    "price.free.f2": "6 temas seleccionados",
    "price.free.f3": "Navegación de carpeta con raíz única",
    "price.free.f4": "Tus archivos permanecen en tu dispositivo",
    "price.free.f5": "Carpetas recientes y apertura rápida",
    "price.free.f6": "Atajos de teclado y búsqueda",
    "price.free.btn": "Añadir al navegador",
    "price.pro.tag": "Más popular",
    "price.pro.plan": "Pro",
    "price.pro.cost": "<span class=\"now\">$4.99</span><span class=\"was\">$9.99</span><span class=\"save\">−50%</span>",
    "price.promoFree": "Gratis durante el lanzamiento",
    "price.promoFreePrice": "Gratis",
    "price.promoFreeNote": "Gratis por tiempo limitado · vuelve a 9,99 $ tras el lanzamiento",
    "price.pro.pendingNote": "Nuevo proveedor en revisión · compras en pausa por ahora",
    "price.pro.early": "Oferta inicial · vuelve a 9,99 $",
    "price.pro.note": "Pago único · Actualizaciones de por vida",
    "price.pro.f1": "Los 46 temas (seis familias)",
    "price.pro.f2": "Export nativo Word / PDF / HTML",
    "price.pro.f3": "Edición WYSIWYG con reescritura auto",
    "price.pro.f4": "Gestión multi-raíz",
    "price.pro.f5": "Guardar docs web",
    "price.pro.f6": "Publicación WeChat con un clic",
    "diff4t.title": "Maquetación de imprenta",
    "diff4t.desc": "El ritmo vertical, una medida fija y el espaciado ajustado hacen que leer sea fácil.",
    "t6t.name": "Maquetación · Refinada",
    "t6t.desc": "Títulos serif, cuerpo justificado, tablas mínimas — acabado de edición en cada tema.",
    "price.pro.f6t": "Motor de maquetación de grado imprenta",
    "price.pro.btn": "Obtener Pro por 4,99 $ →",
    "price.pro.btnPending": "Pagos en pausa",
    "steps.title": "Tres pasos hacia una lectura de papel",
    "steps.sub": "Sin configuración compleja — tan simple como abrir un libro.",
    "s1.title": "Elegir carpeta",
    "s1.desc": "Autoriza una o más carpetas Markdown locales como raíces y explóralas recursivamente.",
    "s2.title": "Elegir tema",
    "s2.desc": "Elige entre 46 temas en seis familias y cambia el estilo con un clic.",
    "s3.title": "Editar y reescribir",
    "s3.desc": "Las ediciones se guardan en el .md original, o exporta a HTML, PDF o Word nativo.",
    "faq.title": "Preguntas frecuentes",
    "faq.sub": "Respuestas sobre privacidad, funciones y compra.",
    "faq.q1": "¿Se suben mis archivos a un servidor?",
    "faq.a1": "No. JingMark es local primero — toda lectura y escritura ocurre en tu navegador mediante la API File System Access. Nada se sube. El estado Pro se verifica por correo; solo se guardan tu correo y el estado de pago.",
    "faq.q2": "¿Cuál es la diferencia entre Gratis y Pro?",
    "faq.a2": "Gratis incluye la lectura completa de Markdown, 6 temas seleccionados y la navegación con raíz única. Pro desbloquea los 46 temas, el export nativo Word/PDF, la importación de Word .docx a Markdown editable, la edición WYSIWYG con reescritura, la gestión multi-raíz, guardar docs web y más. Leer sigue siendo gratis para siempre.",
    "faq.q3": "¿Qué navegadores se admiten?",
    "faq.a3": "Cualquier navegador basado en Chromium (Chrome, Edge, Brave, Arc, etc.) con la API File System Access (Chrome 86+).",
    "faq.q4": "¿Cómo activo Pro tras la compra?",
    "faq.a4": "Haz clic en «Mejorar» en la extensión e inicia sesión con tu correo. Tu estado Pro se sincroniza automáticamente.",
    "faq.q5": "¿Puedo usar Pro en varios ordenadores?",
    "faq.a5": "Pro está vinculado a tu cuenta de correo y funciona en hasta 3 dispositivos. En un 4.º dispositivo no se activa Pro: no se cierra tu sesión y tus otros dispositivos no se ven afectados. Elimina un dispositivo sin usar desde el panel de cuenta para liberar una plaza.",
    "faq.q6": "¿Admite ecuaciones matemáticas y diagramas?",
    "faq.a6": "Sí. JingMark renderiza fórmulas KaTeX y diagramas Mermaid de forma nativa — solo tienes que escribir la sintaxis LaTeX o Mermaid estándar en tu Markdown.",
    "faq.q7": "¿Cuántos idiomas se admiten?",
    "faq.a7": "La interfaz está disponible en 13 idiomas: English, 中文, 繁體中文, 日本語, 한국어, Français, Deutsch, Español, Português, Русский, Tiếng Việt, Svenska y العربية (RTL).",
    "faq.q8": "¿Puedo previsualizar antes de exportar?",
    "faq.a8": "Sí. La vista previa dividida muestra tu contenido en anchos estrecho (680px), medio (820px) o ancho (960px), con un modo de pantalla completa para una corrección sin distracciones.",

    "dl.title": "Elige tu navegador y empieza a leer",
    "dl.sub": "Sin cuenta, sin servidor — instala y siente la calma del papel al instante.",
    "dl.chrome": "Chrome",
    "dl.edge": "Edge",
    "dl.firefox": "Firefox",
    "dl.note": "Ya disponible en Chrome y Edge — instálalo hoy. Brave, Arc y Firefox próximamente.",
    "dl.soon": "Próximamente",
    "footer.copy": "© 2026 JingMark · Un cálido lector y editor Markdown para el navegador",
    "footer.tagline": "Hecho para lectores que aman el papel.",
    "auth.login": "Iniciar sesión",
    "auth.register": "Crear cuenta",
    "auth.email": "Correo",
    "auth.password": "Contraseña",
    "auth.confirm": "Confirmar contraseña",
    "auth.inviteCode": "Código de invitación",
    "auth.invitePlaceholder": "Introduce tu código de invitación",
    "auth.inviteRequired": "El código de invitación es obligatorio.",
    "auth.inviteInvalid": "Código de invitación no válido o caducado.",
    "auth.inviteUsed": "Este código de invitación ya se ha utilizado.",
    "auth.upgrade": "<span class='au-label'>Obtener Pro</span><span class='au-now'>$4.99</span><span class='au-was'>$9.99</span><span class='au-save'>Ahorra 50%</span>",
    "auth.logout": "Cerrar sesión",
    "auth.errEmpty": "Por favor completa todos los campos",
    "auth.errShort": "La contraseña debe tener al menos 8 caracteres",
    "auth.errMatch": "Las contraseñas no coinciden",
    "auth.errNetwork": "Error de red. Comprueba tu conexión.",
    "auth.loginToPurchase": "Inicia sesión primero: la compra debe vincularse a tu cuenta.",
    "auth.errFail": "Algo salió mal. Inténtalo de nuevo.",
    "auth.successReg": "¡Cuenta creada!",
    "auth.welcome": "Sesión iniciada",
    "auth.forgot": "¿Olvidaste tu contraseña?",
    "auth.resetHint": "Ingresa tu correo y te enviaremos un enlace de restablecimiento.",
    "auth.sendReset": "Enviar correo de restablecimiento",
    "auth.backLogin": "Volver al inicio de sesión",
    "auth.resetSent": "Correo de restablecimiento enviado. Revisa tu bandeja de entrada.",
    "auth.resetSuccess": "¡Contraseña restablecida! Inicia sesión de nuevo.",
    "meta.desc": "Lector y editor Markdown local-first. 46 temas, export nativo Word, lectura/escritura directa de archivos. Sin subidas, sin servidor.",
    "page.title": "JingMark · Lector y editor Markdown cálido para el navegador"
  },
  "pt": {
    "brand": "JingMark",
    "nav.features": "Recursos",
    "nav.themes": "Temas",
    "nav.pricing": "Preços",
    "nav.faq": "Perguntas",
    "nav.login": "Entrar",
    "nav.install": "Adicionar ao navegador",
    "hero.eyebrow": "Local primeiro · Sem configuração · Lê e escreve seus arquivos",
    "hero.title": "Leia e escreva Markdown no seu navegador",
    "hero.sub": "Temas de tipografia Markdown ricos e refinados integrados, pensada para offline, seus arquivos nunca saem do seu dispositivo.",
    "badge.free": "Grátis",
    "badge.pro": "Pro",
    "diff1.title": "Local primeiro, sem envios",
    "diff1.desc": "Nenhum servidor ou conta necessários. Tudo roda no navegador; seus arquivos nunca saem do dispositivo.",
    "diff2.title": "Leitura e escrita direta",
    "diff2.desc": "Abra arquivos .md reais pela API File System Access e salve direto — sem cópias, sem conflitos.",
    "diff3.title": "Importar e exportar",
    "diff3.desc": "Abra seus .docx sem suíte de escritório, converta-os em Markdown editável ou exporte objetos Word reais.",
    "diff4.title": "Cópia pronta para WeChat",
    "diff4.desc": "O estilo do seu tema é inline, então o conteúdo mantém a aparência no editor do WeChat.",
    "feat.title": "Um leitor feito para Markdown",
    "feat.sub": "Quente, focado e infinitamente personalizável — cada leitura parece papel.",
    "f1.title": "46 temas, 6 famílias",
    "f1.desc": "Famílias Aura, Paper, Rhythm, Dark e Archive para ler, escrever e compor.",
    "f2.title": "Edição WYSIWYG",
    "f2.desc": "Edite o que vê e escreva de volta no arquivo original — sem cópias.",
    "f3.title": "Biblioteca de pastas",
    "f3.desc": "Várias raízes, busca instantânea, pré-visualização de imagens — gerencie docs como uma estante.",
    "f4.title": "Exportar em um clique",
    "f4.desc": "Exporte para HTML, PDF ou Word nativo editável para compartilhar ou arquivar.",
    "f5.title": "Abas e esboço",
    "f5.desc": "Edição multi-aba, esboço por títulos, matemática KaTeX e diagramas Mermaid ao vivo.",
    "f6.title": "Busca e arrastar",
    "f6.desc": "Filtragem instantânea e arrastar entre pastas, links de imagem reescritos automaticamente.",
    "f7.title": "Salvar docs da web",
    "f7.desc": "Salve páginas Markdown da web na sua biblioteca local para leitura offline.",
    "f8.title": "Restaurar sessão",
    "f8.desc": "As abas e caminhos abertos persistem; tudo volta após recarregar — sem reautorizar.",
    "themes.title": "46 temas, 6 famílias",
    "themes.sub": "Aura · Paper · Rhythm · Dark · Archive — para ler, escrever e diagramar com qualidade editorial.",
    "t1.name": "Aura · Quente",
    "t1.desc": "Marrom âmbar · Corpo serif · Sensação de livro",
    "t2.name": "Paper · Song",
    "t2.desc": "Creme papel de arroz · Tipografia oriental · Clássico",
    "t3.name": "Rhythm · Floresta",
    "t3.desc": "Verde floresta · Layout de diário · Fresco",
    "t4.name": "Archive · Latte",
    "t4.desc": "Tons de café · Peso arredondado · Aconchegante",
    "t5.name": "Dark · Noite",
    "t5.desc": "Filme profundo · Imersivo · Suave aos olhos",
    "t6.name": "WeChat · Fresco",
    "t6.desc": "Verde fresco · Layout WeChat · Exportar em um clique",
    "privacy.title": "Seus documentos ficam no seu dispositivo",
    "privacy.sub": "Local primeiro: seus documentos permanecem no seu dispositivo. Enviamos apenas os dados mínimos necessários para operar sua conta e sua licença Pro.",
    "p1.title": "Sem envios",
    "p1.desc": "Nada é enviado a um servidor; todo o processamento fica na sua máquina.",
    "p2.title": "Só pastas autorizadas",
    "p2.desc": "Lemos e escrevemos apenas as pastas que você permite, revogáveis a qualquer momento.",
    "p3.title": "Saneado e CSP rígida",
    "p3.desc": "Render e export são duplamente saneados; só rodam scripts locais.",
    "p4.title": "Bibliotecas empacotadas localmente",
    "p4.desc": "marked, Vditor e docx vêm dentro da extensão — sem carga remota.",
    "pricing.title": "Comece grátis, melhore quando precisar",
    "pricing.sub": "Ler é grátis para sempre. Libere temas, exportar e editar com uma compra única do Pro.",
    "price.free.plan": "Grátis",
    "price.free.cost": "Grátis para sempre",
    "price.free.f1": "Render e leitura Markdown",
    "price.free.f2": "6 temas seleccionados",
    "price.free.f3": "Navegação de pasta com raiz única",
    "price.free.f4": "Seus arquivos ficam no seu dispositivo",
    "price.free.f5": "Pastas recentes e abertura rápida",
    "price.free.f6": "Atalhos de teclado e busca",
    "price.free.btn": "Adicionar ao navegador",
    "price.pro.tag": "Mais popular",
    "price.pro.plan": "Pro",
    "price.pro.cost": "<span class=\"now\">$4.99</span><span class=\"was\">$9.99</span><span class=\"save\">−50%</span>",
    "price.promoFree": "Grátis no lançamento",
    "price.promoFreePrice": "Grátis",
    "price.promoFreeNote": "Grátis por tempo limitado · volta a US$ 9,99 após o lançamento",
    "price.pro.pendingNote": "Novo provedor em análise · compras em pausa por enquanto",
    "price.pro.early": "Oferta de lançamento · volta a $9,99",
    "price.pro.note": "Pagamento único · Atualizações vitalícias",
    "price.pro.f1": "Os 46 temas (seis famílias)",
    "price.pro.f2": "Export nativo Word / PDF / HTML",
    "price.pro.f3": "Edição WYSIWYG com reescrita automática",
    "price.pro.f4": "Gestão multi-raiz",
    "price.pro.f5": "Salvar docs web",
    "price.pro.f6": "Publicação WeChat em um clique",
    "diff4t.title": "Tipografia de impressão",
    "diff4t.desc": "Ritmo vertical, medida fixa e espaçamento ajustado tornam a leitura prazerosa.",
    "t6t.name": "Tipografia · Refinada",
    "t6t.desc": "Títulos serif, corpo justificado, tabelas mínimas — acabamento editorial em cada tema.",
    "price.pro.f6t": "Motor de tipografia de grau impressão",
    "price.pro.btn": "Obter Pro por $4,99 →",
    "price.pro.btnPending": "Pagamentos em pausa",
    "steps.title": "Três passos para uma leitura de papel",
    "steps.sub": "Sem configuração complexa — tão simples quanto abrir um livro.",
    "s1.title": "Escolher pasta",
    "s1.desc": "Autorize uma ou mais pastas Markdown locais como raízes e navegue recursivamente.",
    "s2.title": "Escolher tema",
    "s2.desc": "Escolha entre 46 temas em seis famílias e troque o estilo em um clique.",
    "s3.title": "Editar e reescrever",
    "s3.desc": "As edições salvam direto no .md original, ou exporte para HTML, PDF ou Word nativo.",
    "faq.title": "Perguntas frequentes",
    "faq.sub": "Respostas sobre privacidade, recursos e compra.",
    "faq.q1": "Meus arquivos são enviados a um servidor?",
    "faq.a1": "Não. O JingMark é local primeiro — toda leitura e escrita acontece no navegador via API File System Access. Nada é enviado. O status Pro é verificado por e-mail; só são armazenados seu e-mail e o estado do pagamento.",
    "faq.q2": "Qual a diferença entre Grátis e Pro?",
    "faq.a2": "Grátis inclui a leitura completa de Markdown, 6 temas selecionados e a navegação com raiz única. Pro libera os 46 temas, o export nativo Word/PDF, a importação de Word .docx para Markdown editável, a edição WYSIWYG com reescrita, a gestão multi-raiz, salvar docs web e mais. Ler segue grátis para sempre.",
    "faq.q3": "Quais navegadores são suportados?",
    "faq.a3": "Qualquer navegador baseado em Chromium (Chrome, Edge, Brave, Arc etc.) com a API File System Access (Chrome 86+).",
    "faq.q4": "Como ativo o Pro após a compra?",
    "faq.a4": "Clique em «Melhorar» na extensão e entre com seu e-mail. Seu status Pro sincroniza automaticamente.",
    "faq.q5": "Posso usar o Pro em vários computadores?",
    "faq.a5": "O Pro está vinculado à sua conta de e-mail e funciona em até 3 dispositivos. No 4.º dispositivo o Pro não é ativado — você não é desconectado e seus outros dispositivos não são afetados. Remova um dispositivo sem uso no painel da conta para liberar uma vaga.",
    "faq.q6": "Você suporta equações matemáticas e diagramas?",
    "faq.a6": "Sim. O JingMark renderiza fórmulas KaTeX e diagramas Mermaid nativamente — basta escrever a sintaxe LaTeX ou Mermaid padrão no seu Markdown.",
    "faq.q7": "Quantos idiomas são suportados?",
    "faq.a7": "A interface está disponível em 13 idiomas: English, 中文, 繁體中文, 日本語, 한국어, Français, Deutsch, Español, Português, Русский, Tiếng Việt, Svenska e العربية (RTL).",
    "faq.q8": "Posso visualizar antes de exportar?",
    "faq.a8": "Sim. A visualização dividida mostra seu conteúdo em larguras estreita (680px), média (820px) ou larga (960px), com um modo de tela cheia para revisão sem distrações.",

    "dl.title": "Escolha seu navegador e comece a ler",
    "dl.sub": "Sem conta, sem servidor — instale e sinta a calma do papel na hora.",
    "dl.chrome": "Chrome",
    "dl.edge": "Edge",
    "dl.firefox": "Firefox",
    "dl.note": "Disponível agora no Chrome e Edge — instale hoje. Brave, Arc e Firefox em breve.",
    "dl.soon": "Em breve",
    "footer.copy": "© 2026 JingMark · Um caloroso leitor e editor Markdown para o navegador",
    "footer.tagline": "Feito para leitores que amam o papel.",
    "auth.login": "Entrar",
    "auth.register": "Criar conta",
    "auth.email": "E-mail",
    "auth.password": "Senha",
    "auth.confirm": "Confirmar senha",
    "auth.inviteCode": "Código de convite",
    "auth.invitePlaceholder": "Introduza o seu código de convite",
    "auth.inviteRequired": "O código de convite é obrigatório.",
    "auth.inviteInvalid": "Código de convite inválido ou expirado.",
    "auth.inviteUsed": "Este código de convite já foi utilizado.",
    "auth.upgrade": "<span class='au-label'>Obter Pro</span><span class='au-now'>$4.99</span><span class='au-was'>$9.99</span><span class='au-save'>Economize 50%</span>",
    "auth.logout": "Sair",
    "auth.errEmpty": "Por favor preencha todos os campos",
    "auth.errShort": "A senha deve ter ao menos 8 caracteres",
    "auth.errMatch": "As senhas não coincidem",
    "auth.errNetwork": "Erro de rede. Verifique sua conexão.",
    "auth.loginToPurchase": "Entre primeiro: a compra precisa estar vinculada à sua conta.",
    "auth.errFail": "Algo deu errado. Tente novamente.",
    "auth.successReg": "Conta criada!",
    "auth.welcome": "Conectado",
    "auth.forgot": "Esqueceu a senha?",
    "auth.resetHint": "Digite seu e-mail e enviaremos um link de redefinição.",
    "auth.sendReset": "Enviar e-mail de redefinição",
    "auth.backLogin": "Voltar ao login",
    "auth.resetSent": "E-mail de redefinição enviado. Verifique sua caixa de entrada.",
    "auth.resetSuccess": "Senha redefinida! Faça login novamente.",
    "meta.desc": "Leitor e editor Markdown local-first. 46 temas, export nativo Word, leitura/escrita direta de arquivos. Sem uploads, sem servidor.",
    "page.title": "JingMark · Leitor e editor Markdown caloroso para o navegador"
  },
  "ru": {
    "brand": "JingMark",
    "nav.features": "Возможности",
    "nav.themes": "Темы",
    "nav.pricing": "Цены",
    "nav.faq": "Вопросы",
    "nav.login": "Войти",
    "nav.install": "Добавить в браузер",
    "hero.eyebrow": "Сначала локально · Без настройки · Читает и пишет ваши файлы",
    "hero.title": "Читайте и пишите Markdown прямо в браузере",
    "hero.sub": "Богатые и изысканные темы типографики Markdown встроены, офлайн по замыслу, ваши файлы никогда не покидают устройство.",
    "badge.free": "Бесплатно",
    "badge.pro": "Pro",
    "diff1.title": "Сначала локально, без загрузок",
    "diff1.desc": "Не нужны ни сервер, ни аккаунт. Всё работает в браузере, файлы не покидают устройство.",
    "diff2.title": "Прямое чтение и запись",
    "diff2.desc": "Открывайте настоящие .md через File System Access API и сохраняйте сразу — без копий, без конфликтов.",
    "diff3.title": "Импорт/экспорт Word",
    "diff3.desc": "Открывайте .docx без Office, конвертируйте в Markdown или экспортируйте настоящие объекты Word.",
    "diff4.title": "Копия для WeChat",
    "diff4.desc": "Стиль вашей темы встраивается в строку, и в редакторе WeChat вид сохраняется.",
    "feat.title": "Ридер, созданный для Markdown",
    "feat.sub": "Тёплый, сосредоточенный и бесконечно настраиваемый — каждое чтение как на бумаге.",
    "f1.title": "46 тем, 6 семейств",
    "f1.desc": "Семейства Aura, Paper, Rhythm, Dark и Archive для чтения, письма и вёрстки.",
    "f2.title": "Редактирование WYSIWYG",
    "f2.desc": "Редактируйте то, что видите, и записывайте в исходный файл — без копий.",
    "f3.title": "Библиотека папок",
    "f3.desc": "Несколько корней, мгновенный поиск, предпросмотр изображений — управляйте документами как полкой.",
    "f4.title": "Экспорт в один клик",
    "f4.desc": "Экспортируйте в HTML, PDF или нативный редактируемый Word, чтобы поделиться или сохранить.",
    "f5.title": "Вкладки и структура",
    "f5.desc": "Редактирование в нескольких вкладках, навигация по заголовкам, живые формулы KaTeX и диаграммы Mermaid.",
    "f6.title": "Поиск и перетаскивание",
    "f6.desc": "Мгновенная фильтрация и перетаскивание между папками, ссылки на изображения переписываются автоматически.",
    "f7.title": "Сохранять веб-доки",
    "f7.desc": "Сохраняйте Markdown-страницы из сети в локальную библиотеку для чтения офлайн.",
    "f8.title": "Восстановление сессии",
    "f8.desc": "Открытые вкладки и пути сохраняются; после перезагрузки всё возвращается — без повторной авторизации.",
    "themes.title": "46 тем, 6 семейств",
    "themes.sub": "Aura · Paper · Rhythm · Dark · Archive — для чтения, письма и редакционной вёрстки.",
    "t1.name": "Aura · Тепло",
    "t1.desc": "Янтарно-коричневый · Серифный текст · Ощущение книги",
    "t2.name": "Paper · Песнь",
    "t2.desc": "Кремовая рисовая бумага · Восточная типографика · Классика",
    "t3.name": "Rhythm · Лес",
    "t3.desc": "Лесная зелень · Дневниковая вёрстка · Свежесть",
    "t4.name": "Archive · Латте",
    "t4.desc": "Кофейные тона · Округлый вес · Уют",
    "t5.name": "Dark · Ночь",
    "t5.desc": "Глубокая плёнка · Погружение · Бережёт глаза",
    "t6.name": "WeChat · Свежесть",
    "t6.desc": "Свежая зелень · Вёрстка WeChat · Экспорт в один клик",
    "privacy.title": "Ваши документы остаются на устройстве",
    "privacy.sub": "Сначала локально: ваши документы остаются на вашем устройстве. Мы отправляем только минимум данных, необходимых для работы вашего аккаунта и лицензии Pro.",
    "p1.title": "Без загрузок",
    "p1.desc": "Ничего не отправляется на сервер; вся обработка остаётся на вашем устройстве.",
    "p2.title": "Только разрешённые папки",
    "p2.desc": "Мы читаем и пишем только те папки, что вы разрешили, и вы можете отозвать доступ в любой момент.",
    "p3.title": "Очистка и строгий CSP",
    "p3.desc": "Рендер и экспорт дважды очищаются; выполняются только локальные скрипты.",
    "p4.title": "Библиотеки упакованы локально",
    "p4.desc": "marked, Vditor и docx встроены в расширение — без удалённой загрузки.",
    "pricing.title": "Начните бесплатно, обновите при необходимости",
    "pricing.sub": "Чтение бесплатно навсегда. Откройте темы, экспорт и редактирование разовой покупкой Pro.",
    "price.free.plan": "Бесплатно",
    "price.free.cost": "Бесплатно навсегда",
    "price.free.f1": "Рендер и чтение Markdown",
    "price.free.f2": "6 отборных тем",
    "price.free.f3": "Навигация по папке с одним корнем",
    "price.free.f4": "Локальные файлы остаются на устройстве",
    "price.free.f5": "Недавние папки и быстрое открытие",
    "price.free.f6": "Горячие клавиши и поиск",
    "price.free.btn": "Добавить в браузер",
    "price.pro.tag": "Популярно",
    "price.pro.plan": "Pro",
    "price.pro.cost": "<span class=\"now\">$4.99</span><span class=\"was\">$9.99</span><span class=\"save\">−50%</span>",
    "price.promoFree": "Бесплатно при запуске",
    "price.promoFreePrice": "Бесплатно",
    "price.promoFreeNote": "Бесплатно ограниченное время · затем снова $9.99",
    "price.pro.pendingNote": "Новый платёжный провайдер на проверке · покупки приостановлены",
    "price.pro.early": "Ранняя цена · далее 9,99 $",
    "price.pro.note": "Разовая покупка · Обновления навсегда",
    "price.pro.f1": "Все 46 тем (шесть семейств)",
    "price.pro.f2": "Нативный экспорт Word / PDF / HTML",
    "price.pro.f3": "Редактирование WYSIWYG с автозаписью",
    "price.pro.f4": "Управление папками с несколькими корнями",
    "price.pro.f5": "Сохранение веб-доков",
    "price.pro.f6": "Публикация WeChat в один клик",
    "diff4t.title": "Вёрстка уровня печати",
    "diff4t.desc": "Вертикальный ритм, фиксированная ширина и выверенный интервал делают чтение лёгким.",
    "t6t.name": "Вёрстка · Точная",
    "t6t.desc": "Заголовки с засечками, выключка по ширине, минимальные таблицы — редакционная отделка в каждой теме.",
    "price.pro.f6t": "Движок вёрстки уровня печати",
    "price.pro.btn": "Купить Pro за 4,99 $ →",
    "price.pro.btnPending": "Оплата приостановлена",
    "steps.title": "Три шага к чтению как на бумаге",
    "steps.sub": "Без сложных настроек — просто как открыть книгу.",
    "s1.title": "Выбрать папку",
    "s1.desc": "Разрешите одну или несколько локальных папок Markdown как корни и просматривайте рекурсивно.",
    "s2.title": "Выбрать тему",
    "s2.desc": "Выберите из 46 тем в шести семействах и смените стиль в один клик.",
    "s3.title": "Редактировать и записать",
    "s3.desc": "Правки сохраняются прямо в исходный .md либо экспортируются в HTML, PDF или нативный Word.",
    "faq.title": "Часто задаваемые вопросы",
    "faq.sub": "Ответы о приватности, возможностях и покупке.",
    "faq.q1": "Мои файлы загружаются на сервер?",
    "faq.a1": "Нет. JingMark сначала локальный — любое чтение и запись происходят в браузере через File System Access API. Ничего не загружается. Статус Pro проверяется по почте; сохраняются только ваш e-mail и состояние оплаты.",
    "faq.q2": "В чём разница между Бесплатно и Pro?",
    "faq.a2": "Бесплатно включает полное чтение Markdown, 6 отборных тем и навигацию с одним корнем. Pro открывает все 46 тем, нативный экспорт Word/PDF, импорт Word .docx в редактируемый Markdown, редактирование WYSIWYG с автозаписью, управление несколькими корнями, сохранение веб-доков и другое. Чтение остаётся бесплатным навсегда.",
    "faq.q3": "Какие браузеры поддерживаются?",
    "faq.a3": "Любой браузер на базе Chromium (Chrome, Edge, Brave, Arc и др.) с поддержкой File System Access API (Chrome 86+).",
    "faq.q4": "Как активировать Pro после покупки?",
    "faq.a4": "Нажмите «Обновить» в расширении и войдите по почте. Статус Pro синхронизируется автоматически.",
    "faq.q5": "Можно ли использовать Pro на нескольких компьютерах?",
    "faq.a5": "Pro привязан к вашей учётной записи электронной почты и работает максимум на 3 устройствах. На 4-м устройстве Pro не активируется — вас не разлогинивает, а другие устройства продолжают работать. Удалите неиспользуемое устройство в панели аккаунта, чтобы освободить слот.",
    "faq.q6": "Поддерживаются ли математические формулы и диаграммы?",
    "faq.a6": "Да. JingMark отображает формулы KaTeX и диаграммы Mermaid встроенными средствами — достаточно написать стандартный синтаксис LaTeX или Mermaid в вашем Markdown.",
    "faq.q7": "Сколько языков поддерживается?",
    "faq.a7": "Интерфейс доступен на 13 языках: English, 中文, 繁體中文, 日本語, 한국어, Français, Deutsch, Español, Português, Русский, Tiếng Việt, Svenska и العربية (RTL).",
    "faq.q8": "Можно ли предварительно просмотреть перед экспортом?",
    "faq.a8": "Да. Раздельный предпросмотр показывает ваш контент в узком (680px), среднем (820px) или широком (960px) формате, а полноэкранный режим помогает сосредоточиться на вычитке.",

    "dl.title": "Выберите браузер и начните чтение",
    "dl.sub": "Без аккаунта, без сервера — установите и сразу почувствуйте спокойствие бумаги.",
    "dl.chrome": "Chrome",
    "dl.edge": "Edge",
    "dl.firefox": "Firefox",
    "dl.note": "Уже доступно в Chrome и Edge — установите сегодня. Brave, Arc и Firefox скоро.",
    "dl.soon": "Скоро",
    "footer.copy": "© 2026 JingMark · Тёплый редактор и читалка Markdown для браузера",
    "footer.tagline": "Создано для тех, кто любит бумагу.",
    "auth.login": "Войти",
    "auth.register": "Создать аккаунт",
    "auth.email": "E-mail",
    "auth.password": "Пароль",
    "auth.confirm": "Подтвердите пароль",
    "auth.inviteCode": "Код приглашения",
    "auth.invitePlaceholder": "Введите код приглашения",
    "auth.inviteRequired": "Код приглашения обязателен.",
    "auth.inviteInvalid": "Код приглашения недействителен или истёк.",
    "auth.inviteUsed": "Этот код приглашения уже использован.",
    "auth.upgrade": "<span class='au-label'>Купить Pro</span><span class='au-now'>$4.99</span><span class='au-was'>$9.99</span><span class='au-save'>Экономия 50%</span>",
    "auth.logout": "Выйти",
    "auth.errEmpty": "Заполните все поля",
    "auth.errShort": "Пароль должен быть не короче 8 символов",
    "auth.errMatch": "Пароли не совпадают",
    "auth.errNetwork": "Ошибка сети. Проверьте соединение.",
    "auth.loginToPurchase": "Сначала войдите: покупка должна быть привязана к вашему аккаунту.",
    "auth.errFail": "Что-то пошло не так. Попробуйте ещё раз.",
    "auth.successReg": "Аккаунт создан!",
    "auth.welcome": "Вы вошли",
    "auth.forgot": "Забыли пароль?",
    "auth.resetHint": "Введите ваш e-mail, и мы отправим ссылку для сброса.",
    "auth.sendReset": "Отправить письмо для сброса",
    "auth.backLogin": "Назад ко входу",
    "auth.resetSent": "Письмо для сброса отправлено. Проверьте почту.",
    "auth.resetSuccess": "Пароль сброшен! Войдите снова.",
    "meta.desc": "Локальный Markdown-ридер и редактор. 46 тем, нативный экспорт Word, прямое чтение/запись файлов. Без загрузок, без сервера.",
    "page.title": "JingMark · Тёплый Markdown-ридер и редактор для браузера"
  },
  "vi": {
    "brand": "JingMark",
    "nav.features": "Tính năng",
    "nav.themes": "Chủ đề",
    "nav.pricing": "Giá",
    "nav.faq": "Câu hỏi",
    "nav.login": "Đăng nhập",
    "nav.install": "Thêm vào trình duyệt",
    "hero.eyebrow": "Ưu tiên cục bộ · Không cấu hình · Đọc và ghi tệp của bạn",
    "hero.title": "Đọc và viết Markdown ngay trong trình duyệt",
    "hero.sub": "Các chủ đề kiểu chữ Markdown phong phú và tinh tế được tích hợp sẵn, thiết kế ngoại tuyến, tệp của bạn không rời thiết bị.",
    "badge.free": "Miễn phí",
    "badge.pro": "Pro",
    "diff1.title": "Ưu tiên cục bộ, không tải lên",
    "diff1.desc": "Không cần máy chủ hay tài khoản. Mọi thứ chạy trong trình duyệt; tệp không rời thiết bị.",
    "diff2.title": "Đọc & ghi trực tiếp",
    "diff2.desc": "Mở tệp .md thật qua File System Access API và lưu trực tiếp — không bản sao, không xung đột.",
    "diff3.title": "Nhập và xuất Word",
    "diff3.desc": "Mở .docx không cần bộ Office, chuyển thành Markdown có thể chỉnh sửa hoặc xuất đối tượng Word thật.",
    "diff4.title": "Bản sao sẵn sàng cho WeChat",
    "diff4.desc": "Kiểu chủ đề của bạn được inline, nên khi dán vào trình soạn thảo WeChat vẫn giữ nguyên hình thức.",
    "feat.title": "Trình đọc được làm cho Markdown",
    "feat.sub": "Ấm áp, tập trung và tuỳ biến vô hạn — mỗi lần đọc đều như trên giấy.",
    "f1.title": "46 chủ đề, 6 hệ",
    "f1.desc": "Các hệ Aura, Paper, Rhythm, Dark và Archive để đọc, viết và trình bày.",
    "f2.title": "Soạn WYSIWYG",
    "f2.desc": "Soạn những gì bạn thấy và ghi lại tệp gốc — không bản sao.",
    "f3.title": "Thư viện thư mục",
    "f3.desc": "Nhiều gốc, tìm kiếm tức thì, xem trước ảnh — quản lý tài liệu như kệ sách.",
    "f4.title": "Xuất một chạm",
    "f4.desc": "Xuất ra HTML, PDF hoặc Word gốc có thể chỉnh sửa để chia sẻ hay lưu trữ.",
    "f5.title": "Tab & đề mục",
    "f5.desc": "Soạn nhiều tab, điều hướng theo đề mục, công thức KaTeX và biểu đồ Mermaid theo thời gian thực.",
    "f6.title": "Tìm & kéo",
    "f6.desc": "Lọc tức thì và kéo thả giữa thư mục, liên kết ảnh tự động viết lại.",
    "f7.title": "Lưu tài liệu web",
    "f7.desc": "Lưu trang Markdown từ web vào thư viện cục bộ để đọc ngoại tuyến.",
    "f8.title": "Phục hồi phiên",
    "f8.desc": "Các tab và đường dẫn mở sẽ lưu lại; sau khi tải lại mọi thứ trở lại — không cần cấp quyền lại.",
    "themes.title": "46 chủ đề, 6 hệ",
    "themes.sub": "Aura · Paper · Rhythm · Dark · Archive — cho đọc, viết và trình bày biên tập.",
    "t1.name": "Aura · Ấm",
    "t1.desc": "Nâu hổ phách · Thân serif · Cảm giác sách",
    "t2.name": "Paper · Tống",
    "t2.desc": "Kem giấy gạo · Kiểu đông phương · Cổ điển",
    "t3.name": "Rhythm · Rừng",
    "t3.desc": "Xanh rừng · Bố cục nhật ký · Tươi mát",
    "t4.name": "Archive · Latte",
    "t4.desc": "Tông cà phê · Nét tròn · Ấm cúng",
    "t5.name": "Dark · Đêm",
    "t5.desc": "Phim sâu · Đắm chìm · Dịu mắt",
    "t6.name": "WeChat · Tươi",
    "t6.desc": "Xanh tươi · Bố cục WeChat · Xuất một chạm",
    "privacy.title": "Tài liệu của bạn ở lại trên thiết bị",
    "privacy.sub": "Ưu tiên cục bộ: tài liệu của bạn luôn nằm trên thiết bị. Chúng tôi chỉ gửi tối thiểu dữ liệu cần thiết để vận hành tài khoản và giấy phép Pro của bạn.",
    "p1.title": "Không tải lên",
    "p1.desc": "Không gửi dữ liệu lên máy chủ; mọi xử lý đều trên máy bạn.",
    "p2.title": "Chỉ thư mục được cấp quyền",
    "p2.desc": "Chúng tôi chỉ đọc/ghi thư mục bạn cho phép, có thể thu hồi bất cứ lúc nào.",
    "p3.title": "Làm sạch & CSP nghiêm ngặt",
    "p3.desc": "Bản dựng và xuất được làm sạch hai lớp; chỉ chạy script cục bộ.",
    "p4.title": "Thư viện đóng gói cục bộ",
    "p4.desc": "marked, Vditor và docx nằm trong tiện ích mở rộng — không tải từ xa.",
    "pricing.title": "Bắt đầu miễn phí, nâng cấp khi cần",
    "pricing.sub": "Đọc miễn phí mãi mãi. Mở khoá chủ đề, xuất và soạn bằng một lần mua Pro.",
    "price.free.plan": "Miễn phí",
    "price.free.cost": "Miễn phí mãi mãi",
    "price.free.f1": "Dựng & đọc Markdown",
    "price.free.f2": "6 chủ đề tuyển chọn",
    "price.free.f3": "Duyệt thư mục một gốc",
    "price.free.f4": "Tệp cục bộ không rời thiết bị của bạn",
    "price.free.f5": "Thư mục gần đây và mở nhanh",
    "price.free.f6": "Phím tắt và tìm kiếm",
    "price.free.btn": "Thêm vào trình duyệt",
    "price.pro.tag": "Phổ biến nhất",
    "price.pro.plan": "Pro",
    "price.pro.cost": "<span class=\"now\">$4.99</span><span class=\"was\">$9.99</span><span class=\"save\">Giảm 50%</span>",
    "price.promoFree": "Miễn phí khi ra mắt",
    "price.promoFreePrice": "Miễn phí",
    "price.promoFreeNote": "Miễn phí có thời hạn · trở lại $9.99 sau khi ra mắt",
    "price.pro.pendingNote": "Nhà cung cấp mới đang thẩm định · tạm dừng mua hàng",
    "price.pro.early": "Giá sớm có hạn · quay lại $9,99",
    "price.pro.note": "Mua một lần · Cập nhật trọn đời",
    "price.pro.f1": "Đủ 46 chủ đề (sáu hệ)",
    "price.pro.f2": "Xuất Word / PDF / HTML gốc",
    "price.pro.f3": "Soạn WYSIWYG, tự ghi lại",
    "price.pro.f4": "Quản lý nhiều gốc",
    "price.pro.f5": "Lưu tài liệu web",
    "price.pro.f6": "Phát hành WeChat một chạm",
    "diff4t.title": "Sắp chữ chuẩn in",
    "diff4t.desc": "Nhịp điệu dọc, chiều rộng khóa và khoảng cách tinh chỉnh giúp đọc dài không mệt.",
    "t6t.name": "Sắp chữ · Tinh tế",
    "t6t.desc": "Tiêu đề chữ serif, thân bài căn đều, bảng tối giản—chất lượng báo chí trong mọi chủ đề.",
    "price.pro.f6t": "Công cụ sắp chữ chuẩn in",
    "price.pro.btn": "Nhận Pro với $4,99 →",
    "price.pro.btnPending": "Tạm dừng thanh toán",
    "steps.title": "Ba bước đến trải nghiệm giấy",
    "steps.sub": "Không cấu hình phức tạp — đơn giản như mở một cuốn sách.",
    "s1.title": "Chọn thư mục",
    "s1.desc": "Cấp quyền một hoặc nhiều thư mục Markdown cục bộ làm gốc và duyệt đệ quy.",
    "s2.title": "Chọn chủ đề",
    "s2.desc": "Chọn trong 46 chủ đề thuộc sáu hệ và đổi kiểu bằng một chạm.",
    "s3.title": "Soạn & ghi lại",
    "s3.desc": "Soạn tự ghi vào .md gốc, hoặc xuất ra HTML, PDF hay Word gốc.",
    "faq.title": "Câu hỏi thường gặp",
    "faq.sub": "Trả lời về riêng tư, tính năng và mua hàng.",
    "faq.q1": "Tệp của tôi có được tải lên máy chủ không?",
    "faq.a1": "Không. JingMark ưu tiên cục bộ — mọi đọc/ghi đều diễn ra trong trình duyệt qua File System Access API. Không tải lên gì cả. Trạng thái Pro xác thực qua email; chỉ lưu email và trạng thái thanh toán của bạn.",
    "faq.q2": "Khác biệt giữa Miễn phí và Pro?",
    "faq.a2": "Miễn phí gồm đọc Markdown đầy đủ, 6 chủ đề tuyển chọn và duyệt một gốc. Pro mở khoá 46 chủ đề, xuất Word/PDF gốc, nhập Word .docx sang Markdown có thể chỉnh sửa, soạn WYSIWYG ghi lại, quản lý nhiều gốc, lưu tài liệu web và hơn thế. Đọc vẫn miễn phí mãi mãi.",
    "faq.q3": "Trình duyệt nào được hỗ trợ?",
    "faq.a3": "Mọi trình duyệt dựa trên Chromium (Chrome, Edge, Brave, Arc…) có File System Access API (Chrome 86+).",
    "faq.q4": "Sau khi mua, cách kích hoạt Pro?",
    "faq.a4": "Bấm «Nâng cấp» trong tiện ích và đăng nhập bằng email. Trạng thái Pro tự đồng bộ.",
    "faq.q5": "Tôi có thể dùng Pro trên nhiều máy tính không?",
    "faq.a5": "Pro được liên kết với tài khoản email của bạn và dùng được trên tối đa 3 thiết bị. Ở thiết bị thứ 4, Pro sẽ không được bật — bạn không bị đăng xuất và các thiết bị khác vẫn hoạt động bình thường. Hãy xoá một thiết bị không dùng trong bảng tài khoản để giải phóng suất.",
    "faq.q6": "Có hỗ trợ công thức toán học và sơ đồ không?",
    "faq.a6": "Có. JingMark hiển thị trực tiếp công thức KaTeX và sơ đồ Mermaid — bạn chỉ cần viết cú pháp LaTeX hoặc Mermaid chuẩn trong Markdown.",
    "faq.q7": "Có bao nhiêu ngôn ngữ được hỗ trợ?",
    "faq.a7": "Giao diện hỗ trợ 13 ngôn ngữ: English, 中文, 繁體中文, 日本語, 한국어, Français, Deutsch, Español, Português, Русский, Tiếng Việt, Svenska và العربية (RTL).",
    "faq.q8": "Tôi có thể xem trước trước khi xuất không?",
    "faq.a8": "Có. Xem trước chia đôi hiển thị nội dung với chiều rộng hẹp (680px), trung bình (820px) hoặc rộng (960px), kèm chế độ toàn màn hình để hiệu đính không bị xao nhãng.",

    "dl.title": "Chọn trình duyệt và bắt đầu đọc",
    "dl.sub": "Không tài khoản, không máy chủ — cài xong là thấy sự bình yên của giấy.",
    "dl.chrome": "Chrome",
    "dl.edge": "Edge",
    "dl.firefox": "Firefox",
    "dl.note": "Đã có trên Chrome và Edge — cài đặt ngay hôm nay. Brave, Arc và Firefox sắp ra mắt.",
    "dl.soon": "Sắp ra mắt",
    "footer.copy": "© 2026 JingMark · Trình đọc & soạn Markdown ấm áp cho trình duyệt",
    "footer.tagline": "Dành cho người yêu giấy.",
    "auth.login": "Đăng nhập",
    "auth.register": "Tạo tài khoản",
    "auth.email": "Email",
    "auth.password": "Mật khẩu",
    "auth.confirm": "Xác nhận mật khẩu",
    "auth.inviteCode": "Mã mời",
    "auth.invitePlaceholder": "Nhập mã mời của bạn",
    "auth.inviteRequired": "Vui lòng nhập mã mời.",
    "auth.inviteInvalid": "Mã mời không hợp lệ hoặc đã hết hạn.",
    "auth.inviteUsed": "Mã mời này đã được sử dụng.",
    "auth.upgrade": "<span class='au-label'>Mua Pro</span><span class='au-now'>$4.99</span><span class='au-was'>$9.99</span><span class='au-save'>Tiết kiệm 50%</span>",
    "auth.logout": "Đăng xuất",
    "auth.errEmpty": "Vui lòng điền đầy đủ các trường",
    "auth.errShort": "Mật khẩu ít nhất 8 ký tự",
    "auth.errMatch": "Mật khẩu không khớp",
    "auth.errNetwork": "Lỗi mạng. Kiểm tra kết nối của bạn.",
    "auth.loginToPurchase": "Vui lòng đăng nhập trước: giao dịch cần được liên kết với tài khoản của bạn.",
    "auth.errFail": "Có lỗi xảy ra. Vui lòng thử lại.",
    "auth.successReg": "Đã tạo tài khoản!",
    "auth.welcome": "Đã đăng nhập",
    "auth.forgot": "Quên mật khẩu?",
    "auth.resetHint": "Nhập email đăng ký, chúng tôi sẽ gửi liên kết đặt lại.",
    "auth.sendReset": "Gửi email đặt lại",
    "auth.backLogin": "Quay lại đăng nhập",
    "auth.resetSent": "Email đặt lại đã gửi. Kiểm tra hộp thư.",
    "auth.resetSuccess": "Đặt lại mật khẩu thành công! Vui lòng đăng nhập lại.",
    "meta.desc": "Trình đọc & soạn Markdown ưu tiên cục bộ. 46 chủ đề, xuất Word gốc, đọc/ghi trực tiếp tệp. Không tải lên, không máy chủ.",
    "page.title": "JingMark · Trình đọc & soạn Markdown ấm áp cho trình duyệt"
  },
  "sv": {
    "brand": "JingMark",
    "nav.features": "Funktioner",
    "nav.themes": "Teman",
    "nav.pricing": "Priser",
    "nav.faq": "Vanliga frågor",
    "nav.login": "Logga in",
    "nav.install": "Lägg till i webbläsaren",
    "hero.eyebrow": "Lokal först · Ingen inställning · Läser och skriver dina filer",
    "hero.title": "Läs och skriv Markdown direkt i webbläsaren",
    "hero.sub": "Rika och förfinade Markdown-typografiteman inbyggda, byggd för offline, dina filer lämnar aldrig din enhet.",
    "badge.free": "Gratis",
    "badge.pro": "Pro",
    "diff1.title": "Lokal först, inga uppladdningar",
    "diff1.desc": "Ingen server eller konto behövs. Allt körs i webbläsaren; dina filer lämnar aldrig enheten.",
    "diff2.title": "Direkt läsning & skrivning",
    "diff2.desc": "Öppna riktiga .md-filer via File System Access API och spara direkt — inga kopior, inga konflikter.",
    "diff3.title": "Import/export Word",
    "diff3.desc": "Öppna .docx utan kontorssvit, konvertera till redigerbar Markdown eller exportera riktiga Word-objekt.",
    "diff4.title": "WeChat-klar kopia",
    "diff4.desc": "Ditt temas stil läggs inline så att innehållet behåller utseendet i WeChat-redigeraren.",
    "feat.title": "En läsare gjord för Markdown",
    "feat.sub": "Varm, fokuserad och oändligt anpassningsbar — varje läsning känns som papper.",
    "f1.title": "46 teman, 6 familjer",
    "f1.desc": "Familjerna Aura, Paper, Rhythm, Dark och Archive för läsning, skrivning och typografi.",
    "f2.title": "WYSIWYG-redigering",
    "f2.desc": "Redigera det du ser och skriv tillbaka till originalfilen — inga kopior.",
    "f3.title": "Mappbibliotek",
    "f3.desc": "Flera rötter, direktsökning, bildförhandsvisning — hantera dokument som en bokhylla.",
    "f4.title": "Exportera med ett klick",
    "f4.desc": "Exportera till HTML, PDF eller nativt redigerbart Word för att dela eller arkivera.",
    "f5.title": "Flikar & disposition",
    "f5.desc": "Flertabsredigering, rubrikdisposition, live KaTeX-formler och Mermaid-diagram.",
    "f6.title": "Sök & dra",
    "f6.desc": "Direktfiltrering och drag mellan mappar, bildlänkar skrivs om automatiskt.",
    "f7.title": "Spara webbdok",
    "f7.desc": "Spara Markdown-sidor från webben i ditt lokala bibliotek för offline-läsning.",
    "f8.title": "Sessionsåterställning",
    "f8.desc": "Öppna flikar och sökvägar består; allt återvänder efter omladdning — ingen ny auktorisering.",
    "themes.title": "46 teman, 6 familjer",
    "themes.sub": "Aura · Paper · Rhythm · Dark · Archive — för läsning, skrivning och redaktionell typografi.",
    "t1.name": "Aura · Varm",
    "t1.desc": "Bärnstensbrun · Serif-brödtext · Bokkänsla",
    "t2.name": "Paper · Song",
    "t2.desc": "Rispapperscreme · Östlig typografi · Klassisk",
    "t3.name": "Rhythm · Skog",
    "t3.desc": "Skogsgrön · Journal-layout · Frisk",
    "t4.name": "Archive · Latte",
    "t4.desc": "Kaffetoner · Runt tyngd · Mysig",
    "t5.name": "Dark · Natt",
    "t5.desc": "Djup film · Immersiv · Skonsam mot ögonen",
    "t6.name": "WeChat · Frisk",
    "t6.desc": "Frisk grön · WeChat-layout · Exportera med ett klick",
    "privacy.title": "Dina dokument stannar på din enhet",
    "privacy.sub": "Lokal först: dina dokument stannar på din enhet. Vi skickar bara den minimala datan som behövs för att driva ditt konto och din Pro-licens.",
    "p1.title": "Inga uppladdningar",
    "p1.desc": "Inget skickas till en server; all bearbetning stannar på din dator.",
    "p2.title": "Endast tillåtna mappar",
    "p2.desc": "Vi läser och skriver bara mappar du tillåter, återkallbara när som helst.",
    "p3.title": "Sanerat & strikt CSP",
    "p3.desc": "Rendering och export saneras dubbelt; endast lokala skript körs.",
    "p4.title": "Bibliotek bunta in lokalt",
    "p4.desc": "marked, Vditor och docx följer med tillägget — ingen fjärrladdning.",
    "pricing.title": "Börja gratis, uppgradera när du behöver",
    "pricing.sub": "Läsning är gratis för alltid. Lås upp teman, export och redigering med ett engångsköp av Pro.",
    "price.free.plan": "Gratis",
    "price.free.cost": "Gratis för alltid",
    "price.free.f1": "Markdown-rendering & läsning",
    "price.free.f2": "6 utvalda teman",
    "price.free.f3": "Mappnavigering med en rot",
    "price.free.f4": "Lokala filer lämnar inte din enhet",
    "price.free.f5": "Senaste mappar och snabböppning",
    "price.free.f6": "Tangentbordsgenvägar och sökning",
    "price.free.btn": "Lägg till i webbläsaren",
    "price.pro.tag": "Populärast",
    "price.pro.plan": "Pro",
    "price.pro.cost": "<span class=\"now\">$4.99</span><span class=\"was\">$9.99</span><span class=\"save\">−50%</span>",
    "price.promoFree": "Gratis vid lansering",
    "price.promoFreePrice": "Gratis",
    "price.promoFreeNote": "Gratis under en begränsad tid · återgår till $9.99 efter lanseringen",
    "price.pro.pendingNote": "Ny betalningsleverantör granskas · köp pausade tills vidare",
    "price.pro.early": "Begränsad early bird · återgår till $9,99",
    "price.pro.note": "Engångsköp · Livstidsuppdateringar",
    "price.pro.f1": "Alla 46 teman (sex familjer)",
    "price.pro.f2": "Navt Word / PDF / HTML-export",
    "price.pro.f3": "WYSIWYG-redigering med automatisk tillbakaskrivning",
    "price.pro.f4": "Mapphantering med flera rötter",
    "price.pro.f5": "Spara webbdok",
    "price.pro.f6": "WeChat-publicering med ett klick",
    "diff4t.title": "Tryckfärdig typsättning",
    "diff4t.desc": "Vertikal rytm, låst radlängd och avstämda mellanrum gör långläsning lätt.",
    "t6t.name": "Typsättning · Fin",
    "t6t.desc": "Serif-rubriker, marginaljusterad brödtext, minimala tabeller — redaktionell finish i varje tema.",
    "price.pro.f6t": "Typsättningsmotor i tryckkvalitet",
    "price.pro.btn": "Skaffa Pro för $4,99 →",
    "price.pro.btnPending": "Betalningar pausade",
    "steps.title": "Tre steg till pappersläsning",
    "steps.sub": "Ingen krånglig inställning — lika enkelt som att öppna en bok.",
    "s1.title": "Välj en mapp",
    "s1.desc": "Tillåt en eller flera lokala Markdown-mappar som rötter och bläddra rekursivt.",
    "s2.title": "Välj ett tema",
    "s2.desc": "Välj bland 46 teman i sex familjer och byt stil med ett klick.",
    "s3.title": "Redigera & skriv tillbaka",
    "s3.desc": "Ändringar sparas direkt i original-.md, eller exportera till HTML, PDF eller nativt Word.",
    "faq.title": "Vanliga frågor",
    "faq.sub": "Svar om integritet, funktioner och köp.",
    "faq.q1": "Laddas mina filer upp till en server?",
    "faq.a1": "Nej. JingMark är lokal först — all läsning och skrivning sker i webbläsaren via File System Access API. Inget laddas upp. Pro-status verifieras via e-post; endast din e-post och betalningsstatus lagras.",
    "faq.q2": "Vad skiljer Gratis och Pro?",
    "faq.a2": "Gratis innehåller fullständig Markdown-läsning, 6 utvalda teman och navigering med en rot. Pro låser upp alla 46 teman, nativt Word/PDF-export, import av Word .docx till redigerbar Markdown, WYSIWYG-redigering med tillbakaskrivning, hantering med flera rötter, sparande av webbdok och mer. Läsning är gratis för alltid.",
    "faq.q3": "Vilka webbläsare stöds?",
    "faq.a3": "Alla Chromium-baserade webbläsare (Chrome, Edge, Brave, Arc med flera) med File System Access API (Chrome 86+).",
    "faq.q4": "Hur aktiverar jag Pro efter köp?",
    "faq.a4": "Klicka på «Uppgradera» i tillägget och logga in med din e-post. Din Pro-status synkroniseras automatiskt.",
    "faq.q5": "Kan jag använda Pro på flera datorer?",
    "faq.a5": "Pro är kopplad till ditt e-postkonto och fungerar på upp till 3 enheter. På en 4:e enhet aktiveras inte Pro — du loggas inte ut och dina andra enheter påverkas inte. Ta bort en oanvänd enhet i kontopanelen för att frigöra en plats.",
    "faq.q6": "Stöds matematiska formler och diagram?",
    "faq.a6": "Ja. JingMark återger KaTeX-formler och Mermaid-diagram nativt — du skriver bara standard LaTeX- eller Mermaid-syntax i din Markdown.",
    "faq.q7": "Hur många språk stöds?",
    "faq.a7": "Gränssnittet finns på 13 språk: English, 中文, 繁體中文, 日本語, 한국어, Français, Deutsch, Español, Português, Русский, Tiếng Việt, Svenska och العربية (RTL).",
    "faq.q8": "Kan jag förhandsgranska innan jag exporterar?",
    "faq.a8": "Ja. Delad förhandsgranskning visar ditt innehåll i smalt (680px), medel (820px) eller brett (960px) format, med ett helskärmsläge för störningsfri korrekturläsning.",

    "dl.title": "Välj din webbläsare och börja läsa",
    "dl.sub": "Inget konto, ingen server — installera och känn papperslugnet direkt.",
    "dl.chrome": "Chrome",
    "dl.edge": "Edge",
    "dl.firefox": "Firefox",
    "dl.note": "Tillgängligt på Chrome och Edge nu — installera idag. Brave, Arc och Firefox kommer snart.",
    "dl.soon": "Kommer snart",
    "footer.copy": "© 2026 JingMark · En varm Markdown-läsare & -skrivare för webbläsaren",
    "footer.tagline": "Gjord för läsare som älskar papper.",
    "auth.login": "Logga in",
    "auth.register": "Skapa konto",
    "auth.email": "E-post",
    "auth.password": "Lösenord",
    "auth.confirm": "Bekräfta lösenord",
    "auth.inviteCode": "Inbjudningskod",
    "auth.invitePlaceholder": "Ange din inbjudningskod",
    "auth.inviteRequired": "Inbjudningskod krävs.",
    "auth.inviteInvalid": "Ogiltig eller utgången inbjudningskod.",
    "auth.inviteUsed": "Den här inbjudningskoden har redan använts.",
    "auth.upgrade": "<span class='au-label'>Skaffa Pro</span><span class='au-now'>$4.99</span><span class='au-was'>$9.99</span><span class='au-save'>Spara 50%</span>",
    "auth.logout": "Logga ut",
    "auth.errEmpty": "Fyll i alla fält",
    "auth.errShort": "Lösenordet måste vara minst 8 tecken",
    "auth.errMatch": "Lösenorden matchar inte",
    "auth.errNetwork": "Nätverksfel. Kontrollera din anslutning.",
    "auth.loginToPurchase": "Logga in först: köpet måste kopplas till ditt konto.",
    "auth.errFail": "Något gick fel. Försök igen.",
    "auth.successReg": "Kontot skapat!",
    "auth.welcome": "Inloggad",
    "auth.forgot": "Glömt lösenordet?",
    "auth.resetHint": "Ange din registrerade e-post så skickar vi en återställningslänk.",
    "auth.sendReset": "Skicka återställningsmejl",
    "auth.backLogin": "Tillbaka till inloggningen",
    "auth.resetSent": "Återställningsmejl skickat. Kolla inkorgen.",
    "auth.resetSuccess": "Lösenordet återställt! Logga in igen.",
    "meta.desc": "Lokal-first Markdown-läsare & -skrivare. 46 teman, nativt Word-export, direkt läsning/skrivning av filer. Inga uppladdningar, ingen server.",
    "page.title": "JingMark · Varm Markdown-läsare & -skrivare för webbläsaren"
  },
  "ar": {
    "brand": "JingMark",
    "nav.features": "المزايا",
    "nav.themes": "السمات",
    "nav.pricing": "الأسعار",
    "nav.faq": "الأسئلة الشائعة",
    "nav.login": "تسجيل الدخول",
    "nav.install": "أضف إلى المتصفح",
    "hero.eyebrow": "محلي أولاً · بلا إعداد · يقرأ ملفاتك ويكتبها",
    "hero.title": "اقرأ واكتب Markdown في متصفحك",
    "hero.sub": "سمات تنسيق Markdown غنية ومصقولة مدمجة، مصممة للعمل دون اتصال، وملفاتك لا تغادر جهازك أبدًا.",
    "badge.free": "مجاني",
    "badge.pro": "Pro",
    "diff1.title": "محلي أولاً، بلا رفع",
    "diff1.desc": "لا حاجة لخادم أو حساب. كل شيء يعمل في متصفحك، وملفاتك لا تغادر جهازك.",
    "diff2.title": "قراءة وكتابة مباشرة",
    "diff2.desc": "افتح ملفات .md الحقيقية عبر File System Access API واحفظ مباشرة — بلا نسخ، بلا تعارض.",
    "diff3.title": "استيراد وتصدير Word",
    "diff3.desc": "افتح ملفات .docx دون حزمة مكتبية، وحوّلها إلى Markdown قابل للتحرير، أو صدّر كائنات Word حقيقية.",
    "diff4.title": "نسخة جاهزة لـ WeChat",
    "diff4.desc": "يُدمج أسلوب سمتك ضمن السطر، فيحافظ المحتوى على مظهره داخل محرر WeChat.",
    "feat.title": "قارئ صُنع من أجل Markdown",
    "feat.sub": "دافئ، مركّز، وقابل للتخصيص بلا حدود — كل قراءة تشبه الورق.",
    "f1.title": "46 سمة، 6 عائلات",
    "f1.desc": "عائلات Aura وPaper وRhythm وDark وArchive للقراءة والكتابة والتنضيد.",
    "f2.title": "تحرير WYSIWYG",
    "f2.desc": "حرّر ما تراه واكتبه في الملف الأصلي — بلا نسخ.",
    "f3.title": "مكتبة المجلدات",
    "f3.desc": "جذور متعددة، بحث فوري، معاينة الصور — نظّم مستنداتك كرف كتب.",
    "f4.title": "تصدير بنقرة واحدة",
    "f4.desc": "صدّر إلى HTML أو PDF أو Word أصلي قابل للتحرير للمشاركة أو الأرشفة.",
    "f5.title": "تبويبات ومخطط",
    "f5.desc": "تحرير متعدد التبويبات، تنقّل بالعناوين، معادلات KaTeX ورسوم Mermaid حية.",
    "f6.title": "بحث وسحب",
    "f6.desc": "تصفية فورية وسحب بين المجلدات، مع إعادة كتابة روابط الصور تلقائيًا.",
    "f7.title": "حفظ مستندات الويب",
    "f7.desc": "احفظ صفحات Markdown من الويب في مكتبتك المحلية للقراءة دون اتصال.",
    "f8.title": "استعادة الجلسة",
    "f8.desc": "تبقى التبويبات والمسارات المفتوحة؛ يعود كل شيء بعد إعادة التحميل — بلا إذن جديد.",
    "themes.title": "46 سمة، 6 عائلات",
    "themes.sub": "Aura · Paper · Rhythm · Dark · Archive — للقراءة والكتابة والتنضيد التحريري.",
    "t1.name": "Aura · دافئ",
    "t1.desc": "بني كهرماني · متن Serif · إحساس ورقي",
    "t2.name": "Paper · سونغ",
    "t2.desc": "كريمي ورق الأرز · طباعة شرقية · كلاسيكي",
    "t3.name": "Rhythm · غابة",
    "t3.desc": "أخضر غابي · تخطيط يوميات · منعش",
    "t4.name": "Archive · لاتيه",
    "t4.desc": "درجات القهوة · وزن دائري · دافئ",
    "t5.name": "Dark · ليل",
    "t5.desc": "فيلم عميق · غامر · لطيف على العين",
    "t6.name": "WeChat · منعش",
    "t6.desc": "أخضر منعش · تخطيط WeChat · تصدير بنقرة",
    "privacy.title": "مستنداتك تبقى على جهازك",
    "privacy.sub": "محلي أولاً: تبقى مستنداتك على جهازك. نرسل فقط الحد الأدنى من البيانات اللازمة لتشغيل حسابك ورخصة Pro.",
    "p1.title": "بلا رفع",
    "p1.desc": "لا شيء يُرسل إلى خادم؛ كل المعالجة تبقى على جهازك.",
    "p2.title": "المجلدات المأذون بها فقط",
    "p2.desc": "نقرأ ونكتب فقط المجلدات التي تسمح بها، ويمكن سحب الصلاحية أي وقت.",
    "p3.title": "مطهّر وCSP صارم",
    "p3.desc": "العرض والتصدير مطهّران مرتين؛ لا يعمل سوى سكربتات محلية.",
    "p4.title": "مكتبات محزومة محليًا",
    "p4.desc": "marked وVditor وdocx مدمجة في الإضافة — بلا تحميل عن بُعد.",
    "pricing.title": "ابدأ مجانًا، وارتقِ عند الحاجة",
    "pricing.sub": "القراءة مجانية للأبد. افتح السمات والتصدير والتحرير بشراء Pro لمرة واحدة.",
    "price.free.plan": "مجاني",
    "price.free.cost": "مجاني للأبد",
    "price.free.f1": "عرض وقراءة Markdown",
    "price.free.f2": "6 سمات مختارة",
    "price.free.f3": "تصفّح مجلد بجذر واحد",
    "price.free.f4": "ملفاتك تبقى على جهازك",
    "price.free.f5": "المجلدات الأخيرة وفتح سريع",
    "price.free.f6": "اختصارات لوحة المفاتيح والبحث",
    "price.free.btn": "أضف إلى المتصفح",
    "price.pro.tag": "الأكثر رواجًا",
    "price.pro.plan": "Pro",
    "price.pro.cost": "<span class=\"now\">$4.99</span><span class=\"was\">$9.99</span><span class=\"save\">خصم 50%</span>",
    "price.promoFree": "مجاني أثناء الإطلاق",
    "price.promoFreePrice": "مجاني",
    "price.promoFreeNote": "مجاني لفترة محدودة · يعود إلى 9.99 $ بعد الإطلاق",
    "price.pro.pendingNote": "مزوّد دفع جديد قيد المراجعة · الشراء متوقف مؤقتًا",
    "price.pro.early": "سعر مبكر محدود · يعود إلى 9.99$",
    "price.pro.note": "دفعة واحدة · تحديثات مدى الحياة",
    "price.pro.f1": "كل السمات الـ46 (ست عائلات)",
    "price.pro.f2": "تصدير أصلي Word / PDF / HTML",
    "price.pro.f3": "تحرير WYSIWYG مع كتابة تلقائية",
    "price.pro.f4": "إدارة مجلدات متعددة الجذور",
    "price.pro.f5": "حفظ مستندات الويب",
    "price.pro.f6": "نشر WeChat بنقرة",
    "diff4t.title": "طباعة جاهزة التنضيد",
    "diff4t.desc": "الإيقاع الرأسي والقياس الثابت والتباعد المضبوط تجعل القراءة الطويلة سهلة.",
    "t6t.name": "تنضيد · رصين",
    "t6t.desc": "عناوين بخط serif وجسم مضبوط وجداول بسيطة—لمسة تحريرية في كل سمة.",
    "price.pro.f6t": "محرك تنضيد بجودة الطباعة",
    "price.pro.btn": "احصل على Pro مقابل 4.99$ →",
    "price.pro.btnPending": "المدفوعات متوقفة مؤقتًا",
    "steps.title": "ثلاث خطوات لقراءة كالورق",
    "steps.sub": "بلا إعداد معقد — ببساطة فتح كتاب.",
    "s1.title": "اختر مجلدًا",
    "s1.desc": "أذِن بمجلد Markdown محلي واحد أو أكثر كجذور وتصفّحه تكراريًا.",
    "s2.title": "اختر سمة",
    "s2.desc": "اختر من 46 سمة في ست عائلات وبدّل الأسلوب بنقرة.",
    "s3.title": "حرّر واكتب",
    "s3.desc": "تُحفظ التعديلات مباشرة في .md الأصلي، أو صدّرها إلى HTML أو PDF أو Word أصلي.",
    "faq.title": "الأسئلة الشائعة",
    "faq.sub": "إجابات عن الخصوصية والمزايا والشراء.",
    "faq.q1": "هل تُرفع ملفاتي إلى خادم؟",
    "faq.a1": "لا. JingMark محلي أولًا — كل قراءة وكتابة تحدث في متصفحك عبر File System Access API. لا شيء يُرفع. تُتحقق حالة Pro عبر البريد؛ لا يُخزَّن سوى بريدك وحالة الدفع.",
    "faq.q2": "ما الفرق بين المجاني وPro؟",
    "faq.a2": "يتضمن المجاني القراءة الكاملة لـ Markdown، 6 سمات مختارة، وتصفّحاً بجذر واحد. يفتح Pro كل السمات الـ46، وتصدير Word/PDF الأصلي، واستيراد Word .docx إلى Markdown قابل للتحرير، وتحرير WYSIWYG مع كتابة تلقائية، وإدارة مجلدات متعددة الجذور، وحفظ مستندات الويب، والمزيد. تبقى القراءة مجانية للأبد.",
    "faq.q3": "أي المتصفحات مدعومة؟",
    "faq.a3": "أي متصفح قائم على Chromium (Chrome وEdge وBrave وArc وغيرها) يدعم File System Access API (Chrome 86+).",
    "faq.q4": "كيف أُفعّل Pro بعد الشراء؟",
    "faq.a4": "انقر «ترقية» في الإضافة وسجّل الدخول ببريدك. تتم مزامنة حالة Pro تلقائيًا.",
    "faq.q5": "هل يمكنني استخدام Pro على عدة أجهزة كمبيوتر؟",
    "faq.a5": "يرتبط Pro بحساب بريدك الإلكتروني ويعمل على 3 أجهزة كحد أقصى. على الجهاز الرابع لن تُفعَّل ميزات Pro — لن يتم تسجيل خروجك ولن تتأثر أجهزتك الأخرى. أزِل جهازًا غير مستخدم من لوحة الحساب لتحرير مكان.",
    "faq.q6": "هل يدعم المعادلات الرياضية والرسوم البيانية؟",
    "faq.a6": "نعم. يعرض JingMark معادلات KaTeX ومخططات Mermaid أصليًا — ما عليك سوى كتابة صيغة LaTeX أو Mermaid القياسية في Markdown الخاص بك.",
    "faq.q7": "كم عدد اللغات المدعومة؟",
    "faq.a7": "الواجهة متوفرة بـ 13 لغة: English و中文 و繁體中文 و日本語 و한국어 وFrançais وDeutsch وEspañol وPortuguês وРусский وTiếng Việt وSvenska والعربية (RTL).",
    "faq.q8": "هل يمكنني معاينة المحتوى قبل التصدير؟",
    "faq.a8": "نعم. يعرض المعاينة المقسمة محتواك بعرض ضيق (680px) أو متوسط (820px) أو عريض (960px)، مع وضع ملء الشاشة للمراجعة دون تشتيت.",

    "dl.title": "اختر متصفحك وابدأ القراءة",
    "dl.sub": "بلا حساب، بلا خادم — ثبّت وشعر بهدوء الورق فورًا.",
    "dl.chrome": "Chrome",
    "dl.edge": "Edge",
    "dl.firefox": "Firefox",
    "dl.note": "متاح الآن على Chrome وEdge — ثبّته اليوم. Brave وArc وFirefox قريبًا.",
    "dl.soon": "قريبًا",
    "footer.copy": "© 2026 JingMark · قارئ وكاتب Markdown دافئ للمتصفح",
    "footer.tagline": "صُنع لقرّاء يحبون الورق.",
    "auth.login": "تسجيل الدخول",
    "auth.register": "إنشاء حساب",
    "auth.email": "البريد الإلكتروني",
    "auth.password": "كلمة المرور",
    "auth.confirm": "تأكيد كلمة المرور",
    "auth.inviteCode": "رمز الدعوة",
    "auth.invitePlaceholder": "أدخل رمز الدعوة",
    "auth.inviteRequired": "رمز الدعوة مطلوب.",
    "auth.inviteInvalid": "رمز الدعوة غير صالح أو منتهي الصلاحية.",
    "auth.inviteUsed": "تم استخدام رمز الدعوة هذا بالفعل.",
    "auth.upgrade": "<span class='au-label'>احصل على Pro</span><span class='au-now'>$4.99</span><span class='au-was'>$9.99</span><span class='au-save'>وفّر 50%</span>",
    "auth.logout": "تسجيل الخروج",
    "auth.errEmpty": "يرجى ملء جميع الحقول",
    "auth.errShort": "كلمة المرور 8 أحرف على الأقل",
    "auth.errMatch": "كلمتا المرور غير متطابقتين",
    "auth.errNetwork": "خطأ في الشبكة. تحقق من اتصالك.",
    "auth.loginToPurchase": "سجّل الدخول أولاً: يجب ربط عملية الشراء بحسابك.",
    "auth.errFail": "حدث خطأ ما. حاول مرة أخرى.",
    "auth.successReg": "تم إنشاء الحساب!",
    "auth.welcome": "تم تسجيل الدخول",
    "auth.forgot": "نسيت كلمة المرور؟",
    "auth.resetHint": "أدخل بريدك المسجّل وسنرسل رابط إعادة التعيين.",
    "auth.sendReset": "إرسال بريد إعادة التعيين",
    "auth.backLogin": "العودة إلى تسجيل الدخول",
    "auth.resetSent": "أُرسل بريد إعادة التعيين. تحقق من صندوق الوارد.",
    "auth.resetSuccess": "تمت إعادة تعيين كلمة المرور! سجّل الدخول مجددًا.",
    "meta.desc": "قارئ وكاتب Markdown محلي الأولوية. 46 سمة، تصدير Word أصلي، قراءة وكتابة مباشرة للملفات. بلا رفع، بلا خادم.",
    "page.title": "JingMark · قارئ وكاتب Markdown دافئ للمتصفح"
  }
};

  /* expose for inline debugging */
  window.JINGMARK_I18N = I18N;
  window.JINGMARK_LANGS = LANGS;

  /* ============================ UI logic ============================ */
  const STORE_KEY = 'jingmark-lang';
  const CREEM_URL = 'https://www.creem.io/payment/prod_2CZgvuTFBQXMiyF0owBU8g';
  // 支付通道状态：Creem 已于 2026-09-15 弃用，新通道仍在审核中。
  // 通道过审后只改这里改成 true —— 文案、href、点击守卫全部跟着它走，不必再散改。
  const PAY_CHANNEL_READY = false;
  const AUTH_API = 'https://jingmark-api.fenghua25.workers.dev';
  const AUTH_TOKEN_KEY = 'jingmark-jwt';
  const AUTH_STATUS_KEY = 'jingmark-pro-status';

  function getLangMeta(code) { return LANGS.find(function (l) { return l.code === code; }) || null; }

  function detectLang() {
    if (window.JINGMARK_FORCE_LOCALE && I18N[window.JINGMARK_FORCE_LOCALE]) return window.JINGMARK_FORCE_LOCALE;
    let stored = null;
    try { stored = localStorage.getItem(STORE_KEY); } catch (e) {}
    if (stored && I18N[stored]) return stored;
    const navLangs = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || 'en'];
    for (let i = 0; i < navLangs.length; i++) {
      const raw = String(navLangs[i]).toLowerCase();
      const base = raw.split('-')[0];
      // exact (e.g. zh-tw) then base (e.g. zh)
      if (I18N[raw]) return raw;
      if (I18N[base]) return base;
    }
    return 'en';
  }

  let currentLang = 'en';

  function applyText() {
    const dict = I18N[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    // 输入框的 placeholder 走独立属性（data-i18n 只能写 textContent，对 input 无效）
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
  }

  function setLang(lang) {
    if (!I18N[lang]) lang = 'en';
    currentLang = lang;
    const meta = getLangMeta(lang);
    if (meta) {
      document.documentElement.lang = meta.code;
      document.documentElement.dir = meta.dir || 'ltr';
    }
    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
    applyText();
    syncLangUI();
    updateNavAuth();
    syncConditionalUI();
    gateCheckoutLinks();
    if (window.__jmkPromoFree) applyPromoUI(); // 限时免费：语言切换后重绘促销态
    applyChannelUI();                          // 通道未就绪：重绘禁用态（促销态下自行让位）
  }

  /* ---- Conditional UI: WeChat/公众号 shown only in Chinese; typesetting shown otherwise ---- */
  function isChineseLang(code) { return code === 'zh' || code === 'zh-tw'; }
  function syncConditionalUI() {
    document.body.classList.toggle('lang-zh', isChineseLang(currentLang));
    const dict = I18N[currentLang];
    if (dict && dict['meta.desc']) {
      const m = document.querySelector('meta[name="description"]');
      if (m) m.setAttribute('content', dict['meta.desc']);
    }
  }

  /* ---- Language dropdown ---- */
  function buildLangDropdown() {
    const wrap = document.getElementById('langDropdown');
    if (!wrap) return;
    const btn = wrap.querySelector('.lang-current');
    const panel = wrap.querySelector('.lang-panel');
    LANGS.forEach(function (l) {
      const item = document.createElement('button');
      item.className = 'lang-item';
      item.setAttribute('data-code', l.code);
      item.setAttribute('data-i18n-name', l.code);
      item.innerHTML = '<span class="lang-dot">' + (l.dir === 'rtl' ? 'ا' : l.name.charAt(0)) + '</span><span class="lang-label">' + l.name + '</span>';
      item.addEventListener('click', function () {
        setLang(l.code);
        closeLangPanel();
      });
      panel.appendChild(item);
    });
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      toggleLangPanel();
    });
    document.addEventListener('click', function (e) {
      if (wrap && !wrap.contains(e.target)) closeLangPanel();
    });
  }
  function toggleLangPanel() {
    const wrap = document.getElementById('langDropdown');
    if (wrap) wrap.classList.toggle('open');
  }
  function closeLangPanel() {
    const wrap = document.getElementById('langDropdown');
    if (wrap) wrap.classList.remove('open');
  }
  function syncLangUI() {
    const wrap = document.getElementById('langDropdown');
    if (!wrap) return;
    const meta = getLangMeta(currentLang);
    const cur = wrap.querySelector('.lang-current');
    if (cur && meta) {
      cur.querySelector('.lang-current-label').textContent = meta.name;
    }
    wrap.querySelectorAll('.lang-item').forEach(function (it) {
      it.classList.toggle('active', it.getAttribute('data-code') === currentLang);
    });
  }

  /* ---- Mobile nav ---- */
  function setupMobileNav() {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    if (toggle && links) {
      toggle.addEventListener('click', function () { links.classList.toggle('open'); });
      links.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () { links.classList.remove('open'); });
      });
    }
  }

  /* ---- Scroll reveal ---- */
  function setupReveal() {
    const els = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---- Nav shadow on scroll ---- */
  function setupNavScroll() {
    const nav = document.getElementById('nav');
    if (!nav) return;
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 12);
    });
  }

  /* ---- FAQ accordion ---- */
  function setupFaq() {
    document.querySelectorAll('.faq-q').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const item = btn.closest('.faq-item');
        const ans = item.querySelector('.faq-a');
        const open = item.classList.toggle('open');
        btn.classList.toggle('open', open);
        ans.classList.toggle('open', open);
        ans.style.maxHeight = open ? (ans.scrollHeight + 'px') : null;
      });
    });
  }

  /* ============================ Auth modal ============================ */
  // 解析本站 JWT 的 payload（base64url：-/_ 归一 + 补 padding，否则含 -/_ 的
  // token 在此抛错、邮箱静默变 null——导航显示空白、结账 metadata 缺失）
  function parseJwtEmail(token) {
    try {
      let seg = String(token).split('.')[1] || '';
      seg = seg.replace(/-/g, '+').replace(/_/g, '/');
      while (seg.length % 4) seg += '=';
      return JSON.parse(atob(seg)).email || null;
    } catch (e) { return null; }
  }

  function updateNavAuth() {
    const navLinks = document.querySelectorAll('[data-i18n="nav.login"]');
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    const t = I18N[currentLang];
    if (token) {
      let email = null;
      try { email = parseJwtEmail(token); } catch (e) {}
      navLinks.forEach(function (el) {
        el.textContent = email ? email.split('@')[0] : (t['auth.welcome'] || 'Account');
      });
    } else {
      navLinks.forEach(function (el) { el.textContent = t['nav.login']; });
    }
  }
  function openAuthModal() {
    const overlay = document.getElementById('authOverlay');
    if (!overlay) return;
    overlay.classList.add('show');
    if (localStorage.getItem(AUTH_TOKEN_KEY)) checkAuthStatus();
  }
  function closeAuthModal() {
    const overlay = document.getElementById('authOverlay');
    if (overlay) overlay.classList.remove('show');
  }
  // 下面两个切换函数历史上曾因首页弹窗整块移除表单而变成"裸 getElementById(...).classList"，
  // 一旦被调到就 TypeError（节点不存在）。这里统一先判空——恢复表单后它们是可达的，
  // 但守卫留着，避免下次再动标记时复发。
  function switchAuthTab(tab) {
    const tl = document.getElementById('tabLogin'), tr = document.getElementById('tabRegister');
    const lf = document.getElementById('loginForm'), rf = document.getElementById('registerForm');
    const resetF = document.getElementById('resetForm');
    const alertEl = document.getElementById('authAlert');
    if (!tl || !tr || !lf || !rf || !resetF || !alertEl) return;
    alertEl.classList.remove('show', 'error', 'success');
    resetF.classList.add('hidden');
    if (tab === 'login') { tl.classList.add('active'); tr.classList.remove('active'); lf.classList.remove('hidden'); rf.classList.add('hidden'); }
    else { tr.classList.add('active'); tl.classList.remove('active'); rf.classList.remove('hidden'); lf.classList.add('hidden'); }
  }
  function switchAuthView(view) {
    const lf = document.getElementById('loginForm'), rf = document.getElementById('registerForm'), resetF = document.getElementById('resetForm');
    const tl = document.getElementById('tabLogin'), tr = document.getElementById('tabRegister');
    const alertEl = document.getElementById('authAlert');
    if (!lf || !rf || !resetF || !tl || !tr || !alertEl) return;
    alertEl.classList.remove('show', 'error', 'success');
    if (view === 'reset') { lf.classList.add('hidden'); rf.classList.add('hidden'); resetF.classList.remove('hidden'); tl.classList.remove('active'); tr.classList.remove('active'); }
    else { resetF.classList.add('hidden'); lf.classList.remove('hidden'); rf.classList.add('hidden'); tl.classList.add('active'); tr.classList.remove('active'); }
  }
  function showAuthAlert(type, msg) {
    const el = document.getElementById('authAlert');
    el.textContent = msg; el.className = 'auth-alert show ' + type;
  }
  function getAuthEmail() {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    if (!token) return null;
    return parseJwtEmail(token);
  }
  // Checkout: metadata carries the JingMark account email so the Creem webhook
  // can activate the right account even if the payer uses another mailbox.
  // 结账链接：metadata 带上账户邮箱，webhook 据此把 Pro 开到正确账户。
  //
  // 未登录时返回 '#' 而不是裸 Creem 链接 —— 这是刻意改的「失败即关闭」（2026-08-31）。
  // 旧实现未登录也返回完整 Creem 地址，只靠下面的 click 监听兜底；一旦 JS 报错、
  // 页面被缓存成旧版、或链接被直接分享出去，用户就会在未登录状态下完成付款，
  // 而 webhook 拿不到 jingmark_email、该邮箱又没有账户 → 钱收了、Pro 开不了。
  // （后端已加待认领兜底，能事后补开；但能不产生孤儿付款就别产生。）
  // 现在：href 只有在确认已登录时才由 JS 注入真实地址，其余情况点击无副作用。
  // 「当前是否禁止暴露结账入口」的唯一判定：促销期（免费，无购买语义）或通道未就绪。
  // 两态原因不同、要求一致，合并成一个判定，免得两处守卫各自漂移。
  function checkoutBlocked() { return !!window.__jmkPromoFree || !PAY_CHANNEL_READY; }
  function buildCheckoutUrl() {
    // 通道未就绪一律返回 '#'：即便某个调用点漏了 checkoutBlocked()，也绝不把
    // 真实结账地址写进 DOM（与上面「失败即关闭」同一思路）。
    if (!PAY_CHANNEL_READY) return '#';
    const email = getAuthEmail();
    if (!email) return '#';
    return CREEM_URL + '?metadata%5Bjingmark_email%5D=' + encodeURIComponent(email);
  }
  // 付费门控：未登录点击购买 → 拦截并弹登录/注册。
  // 用 data-creem 标记定位（而不是 href 前缀）——href 现在会变成 '#'，
  // 按 href 选择会在改过一次之后就再也选不中。
  function gateCheckoutLinks() {
    document.querySelectorAll('a[data-creem]').forEach(function (a) {
      if (a.dataset.creemGated === '1') return; // 避免每次 setLang 重复挂监听
      a.dataset.creemGated = '1';
      a.addEventListener("click", function (e) {
        // 无可用通道（促销期 / 通道未就绪）时 href 是 '#'，点击不该有任何副作用
        if (checkoutBlocked()) { e.preventDefault(); return; }
        if (getAuthEmail()) return; // 已登录：链接已带 metadata，放行
        e.preventDefault();
        openAuthModal();
        var t = I18N[currentLang] || {};
        showAuthAlert("error", t["auth.loginToPurchase"] || "Please sign in first so your Pro purchase is linked to your account.");
      });
    });
  }
  function refreshCheckoutLinks() {
    document.querySelectorAll('a[data-creem]').forEach(function (a) { a.href = checkoutBlocked() ? '#' : buildCheckoutUrl(); });
  }
  // 限时免费（PROMO_FREE）：保留 $9.99 划线价与功能清单，CTA 改为「限时免费」并点击弹登录框。
  function applyPromoUI() {
    // 注意：I18N[lang] 是【扁平 map】——键自带点号（"price.promoFree"），不是嵌套对象，
    // 全文件其他地方都是 dict[key]。原实现写 I18N[currentLang].price → 恒为 {}，
    // 于是 label 一直落在 || 兜底上：非中文用户看到的促销按钮是中文。
    var dict = I18N[currentLang] || {};
    var label = dict['price.promoFree'] || '限时免费';
    var freePrice = dict['price.promoFreePrice'] || 'Free';
    var freeNote = dict['price.promoFreeNote'] || '';

    // 1) 价格区：主价改成「免费」，$9.99 退回普通划线锚点。
    //    原实现把 $4.99 现价整块隐藏、只把 $9.99 放大加粗加红线，实测结果是
    //    价格区里没有任何「免费」的价格陈述，只剩一个被划掉的原价 —— 与「限时免费」矛盾。
    document.querySelectorAll('.price-amount[data-i18n-html="price.pro.cost"]').forEach(function (el) {
      var now = el.querySelector('.now');
      if (now) { now.style.display = ''; now.textContent = freePrice; }
      var save = el.querySelector('.save'); if (save) save.style.display = 'none';
      // 清掉上一次可能留下的内联样式，交还给样式表里的 .was 规则
      var was = el.querySelector('.was'); if (was) was.removeAttribute('style');
    });

    // 1b)「限时早鸟价 · 售完即恢复 $9.99」是配合 $4.99 现价写的，现价已改成免费，
    //     这句必须一起换，否则价格区自相矛盾（活动结束恢复 $9.99 才是真的）。
    document.querySelectorAll('[data-i18n="price.pro.early"]').forEach(function (el) {
      el.textContent = freeNote;
    });

    // 2) Pro CTA：文案改为「限时免费」，移除 Creem 跳转，点击弹登录框
    document.querySelectorAll('a.price-btn.pro-btn[data-creem], a.price-btn.pro-btn#promoFreeBtn, a.price-btn.pro-btn#payPendingBtn').forEach(function (a) {
      if (!a.dataset.promoWired) {
        a.dataset.promoWired = '1';
        a.removeAttribute('data-creem'); a.removeAttribute('target'); a.removeAttribute('rel');
        a.href = '#';
        a.addEventListener('click', function (e) { e.preventDefault(); if (typeof openAuthModal === 'function') openAuthModal(); });
      }
      // 清掉「通道未就绪」态留下的禁用样式：loadPromo() 是异步的，两条路径可能
      // 先后到达同一个按钮（先被 applyChannelUI 禁用，再被促销态接管）。不清的话
      // 按钮文案写着「限时免费」、却因为 pointer-events:none 点不动。
      a.style.opacity = ''; a.style.pointerEvents = ''; a.style.cursor = '';
      a.removeAttribute('aria-disabled');
      a.id = 'promoFreeBtn';
      var txt = a.querySelector('.pro-btn-text');
      if (txt) txt.textContent = label;
    });

    // 3) 账户面板升级按钮同步改为「限时免费」并弹登录框
    var au = document.getElementById('authUpgrade');
    if (au) {
      if (!au.dataset.promoWired) {
        au.dataset.promoWired = '1';
        au.removeAttribute('data-creem'); au.removeAttribute('target');
        au.href = '#';
        au.addEventListener('click', function (e) { e.preventDefault(); if (typeof openAuthModal === 'function') openAuthModal(); });
      }
      au.style.display = '';
      au.style.cssText = 'display:inline-flex;align-items:center;justify-content:center;padding:12px 26px;border-radius:12px;background:linear-gradient(135deg,#b07a4d 0%,#9a6a43 50%,#7d5536 100%);color:#fff;font-size:16px;font-weight:700;text-decoration:none';
      au.textContent = label;
    }

    // 4) 移除之前版本的独立 banner（不再使用）
    var b = document.getElementById('promoBanner'); if (b) b.remove();
  }
  // 支付通道未就绪（Creem 已弃用、新通道审核中）：价格照常展示，但购买入口必须
  // 禁用并说明原因 —— 否则用户会点进一个已经没有实名主体的结账页。
  // 促销态优先：免费期的 CTA 由 applyPromoUI 负责，这里直接让位。
  function applyChannelUI() {
    if (PAY_CHANNEL_READY || window.__jmkPromoFree) return;
    var dict = I18N[currentLang] || {};
    // 兜底写英文（不是中文）：applyPromoUI 曾因 || '限时免费' 让 12 种语言看到中文按钮。
    var label = dict['price.pro.btnPending'] || 'Payments paused';
    var note = dict['price.pro.pendingNote'] || '';
    // 1) 价格卡 CTA：摘掉跳转与 data-creem，并挡住中键/右键「新标签页打开」
    document.querySelectorAll('a.price-btn.pro-btn[data-creem], a.price-btn.pro-btn#payPendingBtn').forEach(function (a) {
      a.removeAttribute('data-creem'); a.removeAttribute('target'); a.removeAttribute('rel');
      a.href = '#';
      a.id = 'payPendingBtn';
      a.setAttribute('aria-disabled', 'true');
      a.style.opacity = '.55';
      a.style.pointerEvents = 'none';
      var txt = a.querySelector('.pro-btn-text'); if (txt) txt.textContent = label;
    });
    // 2)「限时早鸟价 · 售完即恢复」换成通道说明 —— 一个买不了的价格配「售完即恢复」自相矛盾
    document.querySelectorAll('[data-i18n="price.pro.early"]').forEach(function (el) {
      if (note) el.textContent = note;
    });
    // 3) 账户面板升级入口：data-i18n-html 会把它填回含价格的 HTML，必须先摘掉
    var au = document.getElementById('authUpgrade');
    if (au) {
      au.removeAttribute('data-i18n-html');
      au.removeAttribute('data-creem'); au.removeAttribute('target'); au.href = '#';
      au.setAttribute('aria-disabled', 'true');
      au.style.pointerEvents = 'none';
      au.textContent = label;
    }
  }
  // 促销开关探测失败会【静默保留 $4.99 购买入口】—— 免费期里这等于引导用户付款，
  // 所以失败要重试（原实现一次失败就放弃）。重试仍失败则保持现状：不猜、不硬编码。
  function loadPromo(attempt) {
    attempt = attempt || 0;
    fetch(AUTH_API + '/api/promo').then(function (r) { return r.json(); }).then(function (d) {
      if (d && d.promoFree) { window.__jmkPromoFree = true; applyPromoUI(); }
    }).catch(function () {
      if (attempt < 2) setTimeout(function () { loadPromo(attempt + 1); }, 1500);
    });
  }
  async function doLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const t = I18N[currentLang];
    if (!email || !password) { showAuthAlert('error', t['auth.errEmpty']); return false; }
    const btn = document.getElementById('loginBtn'); btn.disabled = true;
    try {
      const res = await fetch(AUTH_API + '/api/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) });
      const data = await res.json();
      if (data.token) { localStorage.setItem(AUTH_TOKEN_KEY, data.token); await checkAuthStatus(); }
      else showAuthAlert('error', data.error || t['auth.errFail']);
    } catch (e) { showAuthAlert('error', t['auth.errNetwork']); }
    btn.disabled = false; return false;
  }
  // 邀请码类失败的本地化。后端为此类失败额外回传机器可读的 code 字段，这里映射到
  // 13 语言文案（与扩展端 jingmark/ui.js 的 inviteErrorMessage 同一套 code 与键名）；
  // 其余错误（邮箱已注册、密码太短等）保持既有的原样直显。
  function inviteErrorMessage(result) {
    const code = result && result.code;
    if (code === 'invite_required') return I18N[currentLang]['auth.inviteRequired'];
    if (code === 'invite_used') return I18N[currentLang]['auth.inviteUsed'];
    if (code === 'invite_invalid') return I18N[currentLang]['auth.inviteInvalid'];
    return '';
  }
  async function doRegister(e) {
    e.preventDefault();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value;
    const password2 = document.getElementById('regPassword2').value;
    const invite = document.getElementById('regInvite');
    const inviteCode = invite ? invite.value.trim() : '';
    const t = I18N[currentLang];
    if (!email || !password) { showAuthAlert('error', t['auth.errEmpty']); return false; }
    if (password.length < 8) { showAuthAlert('error', t['auth.errShort']); return false; }
    if (password !== password2) { showAuthAlert('error', t['auth.errMatch']); return false; }
    // 空邀请码在前端直接拦下，不白跑一趟网络（后端仍会再校验一次）
    if (!inviteCode) { showAuthAlert('error', t['auth.inviteRequired']); return false; }
    const btn = document.getElementById('registerBtn'); btn.disabled = true;
    try {
      const res = await fetch(AUTH_API + '/api/auth/register', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password, inviteCode }) });
      const data = await res.json();
      if (data.token) { localStorage.setItem(AUTH_TOKEN_KEY, data.token); await checkAuthStatus(); }
      else showAuthAlert('error', inviteErrorMessage(data) || data.error || t['auth.errFail']);
    } catch (e) { showAuthAlert('error', t['auth.errNetwork']); }
    btn.disabled = false; return false;
  }
  async function doResetRequest(e) {
    e.preventDefault();
    const email = document.getElementById('resetEmail').value.trim();
    const t = I18N[currentLang];
    if (!email) { showAuthAlert('error', t['auth.errEmpty']); return false; }
    const btn = document.getElementById('resetBtn'); btn.disabled = true;
    try {
      await fetch(AUTH_API + '/api/auth/reset-request', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) });
      showAuthAlert('success', t['auth.resetSent']);
      setTimeout(function () { switchAuthView('login'); }, 1800);
    } catch (e) { showAuthAlert('error', t['auth.errNetwork']); }
    btn.disabled = false; return false;
  }
  async function checkAuthStatus() {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    if (!token) return;
    const email = getAuthEmail();
    const userEmail = document.getElementById('authUserEmail');
    if (userEmail) userEmail.textContent = email || '';
    const forms = document.getElementById('authForms'); if (forms) forms.style.display = 'none';
    const user = document.getElementById('authUser'); if (user) user.classList.add('show');
    try {
      const res = await fetch(AUTH_API + '/api/user/status', { headers: { 'Authorization': 'Bearer ' + token } });
      if (res.status === 401) { doLogout(); return; }
      const data = await res.json();
      localStorage.setItem(AUTH_STATUS_KEY, JSON.stringify({ paid: data.paid, plan: data.plan, cachedAt: Date.now() }));
      const badge = document.getElementById('authUserPlan');
      const upgrade = document.getElementById('authUpgrade');
      if (data.paid) { badge.textContent = 'Pro'; badge.className = 'plan pro'; if (upgrade) upgrade.style.display = 'none'; }
      else {
        badge.textContent = 'Free'; badge.className = 'plan free';
        if (upgrade) {
          upgrade.style.display = '';
          // 促销期不得写回 Creem 地址：applyPromoUI 已把 href 摘成 "#"，这里写回会得到
          // 一个「文案写着限时免费、href 却是真实结账页」的活链接。左键被 preventDefault
          // 挡住，但中键与右键「在新标签页打开」照样会跳 Creem（实测复现路径见 qa/）。
          upgrade.href = checkoutBlocked() ? '#' : buildCheckoutUrl();
        }
      }
    } catch (e) {
      const cached = JSON.parse(localStorage.getItem(AUTH_STATUS_KEY) || '{}');
      const badge = document.getElementById('authUserPlan');
      if (cached.paid) { badge.textContent = 'Pro'; badge.className = 'plan pro'; }
    }
    updateNavAuth();
  }
  function doLogout() {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(AUTH_STATUS_KEY);
    const user = document.getElementById('authUser'); if (user) user.classList.remove('show');
    const forms = document.getElementById('authForms'); if (forms) forms.style.display = '';
    const lf = document.getElementById('loginForm'); if (lf) lf.classList.remove('hidden');
    const rf = document.getElementById('registerForm'); if (rf) rf.classList.add('hidden');
    const tl = document.getElementById('tabLogin'); if (tl) tl.classList.add('active');
    const tr = document.getElementById('tabRegister'); if (tr) tr.classList.remove('active');
    updateNavAuth();
  }

  /* ============================ Init ============================ */
  document.addEventListener('DOMContentLoaded', function () {
    buildLangDropdown();
    setupMobileNav();
    setupReveal();
    setupNavScroll();
    setupFaq();
    setLang(detectLang());
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeAuthModal(); });
    // Click on the dimmed overlay (outside the modal card) closes the modal
    const authOverlay = document.getElementById('authOverlay');
    if (authOverlay) authOverlay.addEventListener('click', function (e) { if (e.target === authOverlay) closeAuthModal(); });
    // Inject the logged-in email into static checkout links (#authUpgrade / .price-btn)
    refreshCheckoutLinks();
    loadPromo(); // 限时免费开关：开启时隐藏金额/购买入口
  });

  /* Expose auth handlers so the inline on* handlers in index.html can reach them.
     (These live inside this IIFE; without this they are undefined in global scope
      and the login/register/reset modal silently does nothing.) */
  window.openAuthModal = openAuthModal;
  window.closeAuthModal = closeAuthModal;
  window.switchAuthTab = switchAuthTab;
  window.switchAuthView = switchAuthView;
  window.doLogin = doLogin;
  window.doRegister = doRegister;
  window.doResetRequest = doResetRequest;
  window.doLogout = doLogout;

  /* ---- Google OAuth（登录弹窗，2026-08-29）----
     授权回跳固定到 /login.html（Google 要求 URI 逐字一致，不能带当前页路径）；
     redirected 到当前 origin 的 login.html，兼容 GitHub Pages 站点与自有域名（2026-09-09）。
     回调由 login.html 的既有处理逻辑接管（state 键同源共享），登录成功后经
     sessionStorage['jingmark-redirect']='/' 自动跳回本页。 */
  var GOOGLE_REDIRECT = window.location.origin + '/login.html';
  function initGoogleSignin() {
    var btn = document.getElementById('googleBtn');
    if (!btn) return;
    fetch(AUTH_API + '/api/auth/google').then(function (r) { return r.json(); }).then(function (cfg) {
      if (cfg && cfg.enabled && cfg.clientId && !localStorage.getItem(AUTH_TOKEN_KEY)) {
        window.GOOGLE_CLIENT_ID = cfg.clientId;
        document.getElementById('googleSection').style.display = '';
      }
    }).catch(function () { /* 探测失败保持隐藏 */ });
  }
  function startGoogleSignin() {
    if (!window.GOOGLE_CLIENT_ID) return;
    var state = Array.from(crypto.getRandomValues(new Uint8Array(16)), function (b) { return b.toString(16).padStart(2, '0'); }).join('');
    localStorage.setItem('jingmark-oauth-state', state);            // login.html 回调校验同一键
    sessionStorage.setItem('jingmark-redirect', '/');               // 登录完成后跳回首页
    var authUrl = 'https://accounts.google.com/o/oauth2/v2/auth?' + new URLSearchParams({
      client_id: window.GOOGLE_CLIENT_ID,
      redirect_uri: GOOGLE_REDIRECT,
      response_type: 'code',
      scope: 'openid email profile',
      state: state,
      prompt: 'select_account'
    });
    window.location.href = authUrl;
  }
  var gBtn = document.getElementById('googleBtn');
  if (gBtn) gBtn.addEventListener('click', startGoogleSignin);
  initGoogleSignin();

})();
