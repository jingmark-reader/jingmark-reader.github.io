# JingMark 落地页设计 Review

> **Reviewer**：平面设计师 / 交互设计师 / SEO 顾问视角
> **日期**：2026-08-27
> **Review 范围**：`jingmark-pages/`（index.html 主落地页、pricing.html、login.html、reset.html、assets/）
> **产品现状基准**：46 套主题 · 6 大分类 · 13 种语言 · 6 套免费主题 · Pro $9.99 买断（早鸟 $4.99）

---

## 一、总体评价

| 维度 | 评分 | 说明 |
|------|------|------|
| 视觉设计 | 7/10 | 暖纸色调统一、Fraunces 衬线标题有气质，但 Hero 区缺乏真实产品画面 |
| 内容准确性 | **3/10** | 主题数量三处不一致（22/44/46），免费主题数错误，与产品实际严重脱节 |
| SEO 基础 | **2/10** | 无 favicon、无 robots.txt、无 sitemap、无 OG 标签、无结构化数据 |
| 转化设计 | 5/10 | 有完整漏斗，但 CTA 按钮未链接商店、缺乏社交证明 |
| 性能 | 6/10 | 单文件轻量，但 Google Fonts 加载 7 种字体拖慢 LCP |
| 多语言 | 6/10 | 13 种语言客户端切换完整，但 SPA 架构不利于多语言 SEO |
| Logo/品牌 | 4/10 | 当前 Logo 过于简单，缺乏辨识度和品牌记忆点 |

**核心结论**：落地页视觉基础不错，但**内容数据严重过时**（主题数量、免费主题数与产品实际不符），**SEO 基础设施几乎为零**，且 Hero 区用 CSS 线条占位而非真实产品截图，无法让用户感知产品真实体验。建议优先修复内容准确性和 SEO 基础，再迭代视觉和转化。

---

## 二、Logo 重新设计

### 2.1 当前 Logo 问题

当前 Logo 为棕色渐变圆角方块 + 两个白色半透明矩形（模拟书页）+ 中间棕色分隔线：

- 图形过于简单，两个矩形在 16px 小尺寸下糊成一团
- 没有体现 "Aura"（光晕/氛围）的品牌概念
- 与同类阅读 App（微信读书、Kindle、Obsidian）区分度低
- 缺乏延展性（无法从中提取辅助图形/纹样）

### 2.2 新 Logo 方案

生成了 3 个方向，**推荐方案一**：

| 方案 | 图形概念 | 优势 | 劣势 |
|------|---------|------|------|
| **方案一（推荐）** | 字母 A 与翻开书页融合，顶部尖角散发暖金光晕 | 直接呼应 Aura+Reader；小尺寸辨识度最高；图形可延展 | — |
| 方案二 | 抽象书本上方悬浮圆形光晕 | 温暖、直观 | 与同类 App 区分度弱；光晕在小尺寸消失 |
| 方案三 | 几何字母 A + 负形书签 + 顶部光点 | 现代技术感强，类似 Linear/Notion | "阅读温度"稍弱；负形在小尺寸消失 |

**方案一设计说明**：
- 字母 A 的两条斜边 = 翻开的左右两页
- A 的横杠 = 书页中缝
- 顶部尖角光晕 = Aura（阅读的氛围/光）
- 暖琥珀棕渐变底（#b9824f → #9a6a43）+ 奶白书页 + 暖金光晕
- 圆角矩形外框，适配 Chrome 扩展图标规范
- 16px 下：A 字形清晰可辨，光晕简化为一个亮点

### 2.3 Logo 交付物建议

1. **主标**（图形 + 字标横版）——导航栏、页脚
2. **图形标**（1:1）——favicon、扩展图标、社交头像
3. **单色版**（纯白/纯棕）——深色背景、印刷场景
4. **SVG 源码**——替换当前内联 SVG，确保所有尺寸锐利

---

## 三、内容准确性问题（P0 · 必须立即修复）

### 3.1 主题数量三处矛盾

| 位置 | 当前文案 | 实际 | 严重度 |
|------|---------|------|--------|
| Features 区标题 | `f1.title`: "22 themes, 5 families" | **46 套主题，6 大分类** | 🔴 |
| Steps 区第 2 步 | `s2.desc`: "44 themes across six families" | **46 套主题，6 大分类** | 🔴 |
| Pricing Pro 卡片 | `price.pro.f1`: "All 22 themes (five families)" | **46 套主题，6 大分类** | 🔴 |
| Themes 区标题 | `themes.title`: "22 themes across 5 families" | **46 套主题，6 大分类** | 🔴 |
| 中文 i18n | "全部 46 套主题（六大分类）" | ✅ 正确 | — |
| pricing.html | "All 46 themes" | ✅ 正确 | — |

**修复**：英文及所有非中文语言的 i18n 字典中，将 22/44 统一为 **46**，5 families 统一为 **6 families**。涉及 `app.js` 中 13 种语言的 `f1.title`、`f1.desc`、`themes.title`、`themes.sub`、`s2.desc`、`price.pro.f1`、`faq.a2` 等 key。

### 3.2 免费主题数量错误

| 位置 | 当前文案 | 实际 |
|------|---------|------|
| Pricing Free 卡片 | `price.free.f2`: "2 base themes (Native · Warm)" | **6 套免费主题**：native、mobai、nordic、night-film、fleet-street、swiss-index |
| FAQ A2 | "2 base themes" | 同上 |

**修复**：改为 "6 carefully crafted themes" / "6 套精选主题"，并列出主题名称或展示缩略图。

### 3.3 功能描述缺失/过时

当前落地页未展示以下已上线的重要功能：

| 缺失功能 | 建议位置 | 优先级 |
|---------|---------|--------|
| 13 种语言支持 | Features 区或 Pillars 区 | P1 |
| 大文档性能优化（只读预览/分块渲染/Worker 解析） | Features 区 | P1 |
| 分屏预览 + 全屏态 + 窄中宽三档 | Features 区 | P1 |
| 微信公众号草稿箱推送（API 绑定） | Pillars 区第 4 项（中文已展示，需更新描述） | P1 |
| 数学公式（KaTeX）/ Mermaid 图表 | Features 区 | P2 |
| 绑定 Key 激活 Pro（一机一 Key） | Pricing/FAQ | P2 |
| 账户面板（语言/Pro 状态管理） | 无需展示 | — |

### 3.4 价格确认

- 标准价 **$9.99**（一次性买断）、早鸟价 **$4.99** —— 与产品当前定价一致，无需修改。
- 但需确认：pricing.html 中价格为 $9.99，index.html 中也是 $9.99，保持一致。
- Creem 支付链接 `prod_6uXEIs0CjyYKzcJn6J6jJF` 需确认是否为最新有效链接。

---

## 四、SEO 问题（P0-P1）

### 4.1 技术 SEO 缺失清单

| 项目 | 状态 | 优先级 | 修复建议 |
|------|------|--------|---------|
| favicon | ❌ 无 | P0 | 添加 `favicon.svg`（新 Logo 图形标）+ `favicon.ico` 兜底 |
| robots.txt | ❌ 无 | P0 | 添加，允许全部爬虫，指向 sitemap |
| sitemap.xml | ❌ 无 | P0 | 添加，列出所有页面（index/pricing/login/reset） |
| canonical URL | ❌ 无 | P1 | `<link rel="canonical" href="https://域名/">` |
| Open Graph 标签 | ❌ 无 | P1 | og:title/description/image/type/url |
| Twitter Card | ❌ 无 | P1 | twitter:card=summary_large_image + 图片 |
| og:image | ❌ 无 | P1 | 制作 1200×630 社交分享图（Logo + 标语 + 产品截图） |
| JSON-LD 结构化数据 | ❌ 无 | P1 | 添加 `SoftwareApplication` 类型（名称/描述/评分/价格/操作系统） |
| meta keywords | ❌ 无 | P2 | 可加可不加，Google 已不参考 |
| 多语言 hreflang | ❌ 无 | P1 | 见 4.2 |
| alt 文本 | ❌ 缺失 | P1 | 浏览器徽章 SVG 加 aria-label/role="img" |
| 语义化 HTML | ⚠️ 部分 | P2 | Features/Themes 列表可用 `<ul>`，FAQ 可用 `<details>/<summary>` |

### 4.2 多语言 SEO 架构问题

当前 13 种语言通过客户端 JS 切换（`localStorage` + `data-i18n`），所有语言共享同一个 URL。这对 SEO 有严重影响：

- Google 爬虫只能看到英文（JS 渲染前的默认 HTML）
- 其他 12 种语言的内容几乎无法被索引
- 无法针对不同语言地区投放关键词广告

**建议方案**（按投入排序）：

| 方案 | 投入 | SEO 效果 | 说明 |
|------|------|---------|------|
| A. 保持 SPA，添加 hreflang + 接受爬虫语言头 | 低 | 有限 | Google 可渲染 JS 但不保证索引所有语言 |
| B. 预渲染各语言静态页（`/en/`、`/zh/`、`/ja/`...） | 中 | **好** | 用构建脚本生成 13 个静态 HTML，各自有独立 URL、title、description、hreflang |
| C. 服务端渲染（SSR） | 高 | 最好 | 当前 GitHub Pages 不支持，需换托管 |

**推荐方案 B**：项目是纯静态站（GitHub Pages），用简单的 Node/Python 构建脚本从 i18n 字典生成 13 个目录即可。

### 4.3 meta 标签优化

当前只有：
```html
<title>JingMark · A warm Markdown reader & writer for the browser</title>
<meta name="description" content="Local-first Markdown reader & writer with warm paper-realm themes, native Word export, and direct file read/write. No uploads, no server.">
```

建议补充：
```html
<!-- 基础 -->
<link rel="canonical" href="https://jingmark-reader.github.io/">
<meta name="robots" content="index, follow">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://jingmark-reader.github.io/">
<meta property="og:title" content="JingMark · A warm Markdown reader & writer">
<meta property="og:description" content="Local-first Markdown reader with 46 warm themes, native Word export, and direct file read/write. No uploads, no server.">
<meta property="og:image" content="https://jingmark-reader.github.io/og-image.png">
<meta property="og:site_name" content="JingMark">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="JingMark · A warm Markdown reader & writer">
<meta name="twitter:description" content="...">
<meta name="twitter:image" content="https://jingmark-reader.github.io/og-image.png">

<!-- 结构化数据 -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "JingMark",
  "applicationCategory": "ProductivityApplication",
  "operatingSystem": "Chrome, Edge, Brave, Arc (Chromium 86+)",
  "description": "...",
  "offers": {
    "@type": "Offer",
    "price": "9.99",
    "priceCurrency": "USD"
  },
  "aggregateRating": { ... }
}
</script>
```

### 4.4 关键词策略建议

| 页面 | 主关键词 | 长尾关键词 |
|------|---------|-----------|
| 首页 | markdown reader, markdown editor chrome extension | "markdown reader chrome extension", "local markdown editor", "markdown to word chrome", "warm markdown themes" |
| 定价页 | jingmark pro, markdown editor pricing | "markdown editor one-time purchase", "markdown pro features" |

---

## 五、视觉与交互设计问题（P1）

### 5.1 Hero 区：CSS 线条占位无法展示产品

当前 Hero mockup 是纯 CSS 绘制的灰色线条占位符（`.ln`、`.lb` 等），模拟了一个阅读器界面，但：

- 灰色线条看起来像"线框图"而非成品，给人"产品未完成"的印象
- 无法展示 46 套主题的真实视觉效果
- 无法展示 WYSIWYG 编辑、分屏预览等核心体验

**建议**：
1. 用真实产品截图替换 CSS mockup（建议展示 Aura · Warm 主题下的阅读界面）
2. 截图可加浏览器窗口框（保留当前 traffic lights 设计）
3. 考虑用短 GIF/Lottie 演示主题切换、编辑写回等交互
4. 截图需准备 @2x 版本适配高分屏

### 5.2 主题卡片：抽象色块 vs 真实预览

当前主题卡片用渐变色块 + 三条灰线表示主题，无法让用户感知主题的真实排版效果。

**建议**：
- 每张卡片使用真实主题渲染的 Markdown 片段截图（标题 + 正文 + 引用 + 代码块）
- 6 张卡片展示 6 个分类的代表主题（Aura/Paper/Rhythm/Archive/Dark/Editorial）
- 卡片 hover 时可放大预览或跳转"查看全部 46 套主题"

### 5.3 缺少社交证明

当前页面没有任何用户评价、下载量、评分、媒体报道等信任元素。

**建议**：
- Chrome Web Store 评分 + 下载量（上架后）
- 2-3 条用户推荐语（可从早期用户/反馈中收集）
- "Featured on" 或产品猎人（Product Hunt）徽章（如有）

### 5.4 下载区 CTA 未链接

```html
<a class="browser-badge" href="#" onclick="return false">
```

Chrome 和 Edge 按钮都是 `href="#"`，点击无反应。这是转化漏斗的最关键断裂点。

**修复**：
- Chrome 按钮链接到 Chrome Web Store 安装页
- Edge 按钮链接到 Microsoft Edge Add-ons 页
- Firefox 保持 "Soon" 状态但应灰化或标注即将上线
- 如果商店尚未上架，至少链接到 GitHub releases 或安装说明

### 5.5 其他视觉/交互问题

| 问题 | 建议 | 优先级 |
|------|------|--------|
| Pillars 区第 4 项中文显示微信、西文显示排版，但微信功能已升级为公众号草稿推送 | 更新中文描述为"公众号草稿推送"，西文保持排版或改为"13 语言" | P1 |
| FAQ 仅 4 个问题 | 补充：支持哪些 Markdown 语法？数据会丢失吗？可以在多台电脑用吗？更新频率？ | P1 |
| 无隐私政策/TOS 链接 | Footer 添加 Privacy / Terms 链接（Creem 支付可能需要） | P1 |
| 无更新日志链接 | Footer 添加 Changelog 链接（`qa/updates.json` 已有数据） | P2 |
| 无反馈/联系方式 | Footer 添加 Email 或 GitHub Issues 链接 | P2 |
| 登录弹窗在移动端体验 | 已做响应式，但建议测试 375px 宽度下的表单可用性 | P2 |
| `onclick=""` 内联事件 | 与插件 CSP 问题类似，建议改为 `addEventListener`（虽然落地页无 CSP 限制） | P2 |

---

## 六、性能问题（P1）

### 6.1 Google Fonts 加载过重

当前加载了 **7 种字体**：

```
Fraunces (opsz 9-144, 4 weights)
Inter (4 weights)
Noto Serif SC (3 weights)
Noto Sans SC (3 weights)
Noto Sans JP (3 weights)
Noto Sans KR (3 weights)
Noto Sans Arabic (3 weights)
```

问题：
- 首屏需要的字体（Fraunces + Inter）和 CJK/阿拉伯字体一起加载，拖慢 LCP
- CJK 字体文件巨大（Noto Sans SC 单字重约 4-8MB），即使有 `display=swap` 也会占用带宽
- 英文用户不需要加载 Noto Sans JP/KR/Arabic

**建议**：
1. **字体子集化 + 按需加载**：用 `unicode-range` 拆分，只在对应语言时加载 CJK 字体
2. **预加载关键字体**：`<link rel="preload" as="font">` 仅预加载 Fraunces 和 Inter
3. **自托管字体**：避免 fonts.googleapis.com 的第三方 DNS 查询和连接开销
4. **考虑用系统字体栈替代部分 Web 字体**：正文 Inter 可用 `-apple-system, "Segoe UI", Roboto` 替代，仅标题保留 Fraunces

示例优化：
```html
<!-- 仅预加载首屏关键字体 -->
<link rel="preload" as="font" type="font/woff2" href="/fonts/Fraunces-600.woff2" crossorigin>
<!-- CJK 字体通过 unicode-range 按需加载，不阻塞首屏 -->
```

### 6.2 资源体积

| 资源 | 大小 | 建议 |
|------|------|------|
| app.js | 145 KB（未压缩） | 拆分 i18n 字典为独立文件按需加载；压缩后约 50KB |
| 内联 CSS | ~15 KB | 可接受，首屏关键 CSS 内联有利性能 |
| 图片 | Chrome.png 6KB / Edge.png 9KB / Firefox.png 12KB | 很小，无问题；但未使用（浏览器徽章是 SVG） |

### 6.3 Core Web Vitals 预估

| 指标 | 当前预估 | 优化目标 |
|------|---------|---------|
| LCP（最大内容绘制） | Hero h1 或 mockup，受字体加载影响约 2.5-3.5s | < 2.5s |
| FID/INP | 纯静态页，JS 仅 i18n + 弹窗，应 < 100ms | ✅ 良好 |
| CLS | 字体加载可能导致布局偏移（FOUT），mockup 尺寸固定 | < 0.1 |

---

## 七、多语言体验问题（P2）

### 7.1 语言切换不更新 SEO 关键标签

`setLang()` 函数更新了 `document.documentElement.lang` 和文本内容，但未更新：
- `<title>`（虽然有 data-i18n，但 title 是特殊元素）
- `<meta name="description">`
- `<html lang>` 已更新 ✅
- URL 未变化（不利于 SEO 和分享）

### 7.2 语言切换后不滚动到顶部

切换语言后页面停留在原位置，但内容长度可能变化，建议保持当前滚动锚点或回到顶部。

### 7.3 13 种语言字典维护

`app.js` 中 13 种语言的字典全部内联在一个 145KB 文件中。建议：
- 将字典拆分为 `locales/en.js`、`locales/zh.js` 等独立文件
- 按需加载当前语言字典
- 英文作为 fallback，其他语言异步加载

---

## 八、优先级排序与实施计划

### P0 · 立即修复（预计 2-3 小时）

| # | 任务 | 文件 | 预计时间 |
|---|------|------|---------|
| 1 | 统一主题数量为 46 套、6 大分类（13 种语言 i18n） | app.js | 1h |
| 2 | 修正免费主题数量为 6 套（13 种语言 i18n） | app.js | 0.5h |
| 3 | 添加 favicon.svg（新 Logo） | index.html + 新文件 | 0.3h |
| 4 | 添加 robots.txt + sitemap.xml | 新文件 | 0.2h |
| 5 | 添加 OG/Twitter/JSON-LD 元标签 | index.html | 0.5h |
| 6 | 修复 Chrome/Edge 下载按钮链接 | index.html | 0.1h |

### P1 · 本周完成（预计 6-8 小时）

| # | 任务 | 预计时间 |
|---|------|---------|
| 7 | 替换 Hero CSS mockup 为真实产品截图 | 1.5h（含截图制作） |
| 8 | 替换主题卡片为真实主题预览截图 | 2h（含 6 张截图） |
| 9 | 制作 og-image.png（1200×630） | 1h |
| 10 | 新 Logo SVG 交付 + 全站替换 | 1h |
| 11 | Google Fonts 优化（preload + unicode-range） | 1h |
| 12 | 补充 FAQ 至 8-10 个问题 | 0.5h |
| 13 | Footer 添加 Privacy/TOS/Changelog/Contact 链接 | 0.5h |
| 14 | 更新功能描述（13 语言/大文档/分屏预览/公众号推送） | 1h |

### P2 · 后续迭代（预计 1-2 周）

| # | 任务 | 预计时间 |
|---|------|---------|
| 15 | 多语言静态页预渲染（13 个目录 + hreflang） | 4-6h |
| 16 | 拆分 i18n 字典为独立文件按需加载 | 2h |
| 17 | 添加社交证明（评分/评价/下载量） | 视素材获取 |
| 18 | 添加产品演示 GIF/Lottie | 2-3h |
| 19 | 内联 onclick 改为 addEventListener | 0.5h |
| 20 | PWA 支持（Service Worker + manifest.json） | 2h |

---

## 九、新 Logo 设计方向确认

请确认以下选择，以便进行 SVG 矢量化和全站替换：

- [ ] **采用方案一**（A + 书页 + 光晕，推荐）
- [ ] 采用方案二（书本 + 光晕）
- [ ] 采用方案三（几何 A + 书签）
- [ ] 需要调整/混合方向（请说明）

确认后我将：
1. 输出 SVG 格式的图形标（单色/反白/彩色三版）
2. 输出横版标准组合（图形 + "JingMark" 字标）
3. 替换 index.html、pricing.html、login.html、reset.html 中的 Logo
4. 生成 favicon.svg

---

*Review by JingMark Design Review · 2026-08-27*
