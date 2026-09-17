/* Build static per-language landing pages for SEO.
 * Usage: node scripts/build-i18n-pages.js
 * Reads index.html + assets/app.js, writes {lang}/index.html for all non-en locales.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const appJs = fs.readFileSync(path.join(ROOT, 'assets', 'app.js'), 'utf8');

// Extract I18N object literal
const m = appJs.match(/const I18N = (\{[\s\S]*?\n\});/);
if (!m) { console.error('I18N not found'); process.exit(1); }
const I18N = eval('(' + m[1] + ')');

const LANGS = [
  { code: 'en',     dir: 'ltr', name: 'English' },
  { code: 'zh',     dir: 'ltr', name: '中文' },
  { code: 'zh-tw',  dir: 'ltr', name: '繁體中文' },
  { code: 'ja',     dir: 'ltr', name: '日本語' },
  { code: 'ko',     dir: 'ltr', name: '한국어' },
  { code: 'fr',     dir: 'ltr', name: 'Français' },
  { code: 'de',     dir: 'ltr', name: 'Deutsch' },
  { code: 'es',     dir: 'ltr', name: 'Español' },
  { code: 'pt',     dir: 'ltr', name: 'Português' },
  { code: 'ru',     dir: 'ltr', name: 'Русский' },
  { code: 'vi',     dir: 'ltr', name: 'Tiếng Việt' },
  { code: 'sv',     dir: 'ltr', name: 'Svenska' },
  { code: 'ar',     dir: 'rtl', name: 'العربية' },
];
const BASE = 'https://jingmark.xyz';

function hreflangBlock() {
  let s = '';
  for (const l of LANGS) {
    const u = l.code === 'en' ? BASE + '/' : BASE + '/' + l.code + '/';
    s += `<link rel="alternate" hreflang="${l.code}" href="${u}">\n`;
  }
  s += `<link rel="alternate" hreflang="x-default" href="${BASE}/">\n`;
  return s;
}

// Escape for use inside an HTML attribute
function escAttr(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Escape plain text for use as element text content
function escapeHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Static, crawlable + no-JS language switcher links (mirrors app.js LANGS).
// Clicking navigates to the locale's dedicated URL; root-relative so it works
// from both '/' and '/xx/' depths. Active class marks the current locale.
function langPanelHtml(currentCode) {
  return LANGS.map(function (l) {
    const active = l.code === currentCode ? ' active' : '';
    const href = l.code === 'en' ? '/' : '/' + l.code + '/';
    return '<a class="lang-item' + active + '" href="' + href + '" hreflang="' + l.code +
      '" data-code="' + l.code + '">' + escapeHtml(l.name) + '</a>';
  }).join('');
}

// Pre-render [data-i18n] / [data-i18n-html] / [data-i18n-placeholder] into the
// static HTML so each locale page is fully translated without JS (matches the
// runtime applyText() in app.js).
function applyI18nToHtml(html, dict) {
  // Pass A: placeholder attributes (input fields)
  html = html.replace(/<[a-zA-Z0-9]+(?:\s[^>]*)?data-i18n-placeholder="([^"]+)"(?:\s[^>]*)?>/g, function (full, key) {
    const val = dict[key] !== undefined ? dict[key] : '';
    return full.replace(/placeholder="[^"]*"/, 'placeholder="' + escAttr(val) + '"');
  });
  // Pass B: inner content for data-i18n-html (innerHTML) and data-i18n (textContent)
  const attrRe = /data-i18n-html="([^"]+)"|data-i18n="([^"]+)"/g;
  let result = '';
  let cursor = 0;
  let m;
  while ((m = attrRe.exec(html))) {
    const isHtml = m[1] !== undefined;
    const key = isHtml ? m[1] : m[2];
    const idx = m.index;
    const tagStart = html.lastIndexOf('<', idx);
    const gt = html.indexOf('>', idx);
    if (tagStart === -1 || gt === -1) { cursor = idx + m[0].length; continue; }
    const tagMatch = html.slice(tagStart).match(/^<([a-zA-Z0-9]+)/);
    const tag = tagMatch ? tagMatch[1] : null;
    const closeRe = new RegExp('</' + tag + '>', 'g');
    closeRe.lastIndex = gt + 1;
    const cm = closeRe.exec(html);
    // Always emit the opening tag; only replace inner when it's a real element we own.
    result += html.slice(cursor, gt + 1);
    cursor = gt + 1;
    if (cm && tag !== 'meta' && tag !== 'title') {
      const inner = html.slice(gt + 1, cm.index);
      let newInner;
      if (isHtml) {
        newInner = dict[key] !== undefined ? dict[key] : inner;
      } else {
        const val = dict[key];
        newInner = val !== undefined ? escapeHtml(val) : inner;
      }
      result += newInner + '</' + tag + '>';
      cursor = cm.index + ('</' + tag + '>').length;
      attrRe.lastIndex = cursor;
    }
    // meta/title are handled separately (head tags); elements without a close tag are left intact.
  }
  result += html.slice(cursor);
  return result;
}

function buildPage(langCode) {
  const dict = I18N[langCode];
  if (!dict) { console.error('no dict for', langCode); return; }
  const meta = LANGS.find(l => l.code === langCode);
  const isEn = langCode === 'en';
  const langUrl = isEn ? BASE + '/' : BASE + '/' + langCode + '/';
  let out = html;

  // 1. <html lang/dir> — match the real root tag which carries dir="ltr"
  out = out.replace(/<html[^>]*>/, `<html lang="${langCode}" dir="${meta.dir}">`);

  // 2. title text
  out = out.replace(/(<title data-i18n="page.title">)[^<]*(<\/title>)/,
    (_, a, b) => a + escAttr(dict['page.title']) + b);

  // 3. meta description
  out = out.replace(/(<meta name="description"[^>]*content=")[^"]*(")/,
    (_, a, b) => a + escAttr(dict['meta.desc']) + b);

  // 4. canonical / og:url
  out = out.replace(/(<link rel="canonical" href=")[^"]*(")/,
    (_, a, b) => a + langUrl + b);
  out = out.replace(/(<meta property="og:url" content=")[^"]*(")/,
    (_, a, b) => a + langUrl + b);

  // 5. og:title / og:description / twitter:title / twitter:description
  out = out.replace(/(<meta property="og:title" content=")[^"]*(")/,
    (_, a, b) => a + escAttr(dict['page.title']) + b);
  out = out.replace(/(<meta property="og:description" content=")[^"]*(")/,
    (_, a, b) => a + escAttr(dict['meta.desc']) + b);
  out = out.replace(/(<meta name="twitter:title" content=")[^"]*(")/,
    (_, a, b) => a + escAttr(dict['page.title']) + b);
  out = out.replace(/(<meta name="twitter:description" content=")[^"]*(")/,
    (_, a, b) => a + escAttr(dict['meta.desc']) + b);

  // 6. hreflang block: strip any previously generated block, then insert after canonical
  out = out.replace(/\n?<link rel="alternate" hreflang="[^"]*" href="[^"]*">\n?/g, '\n');
  out = out.replace(/(<link rel="canonical" href="[^"]*">\n)/,
    (_, a) => a + hreflangBlock());

  // 7. Resource path prefix for subdirs
  // Strip any pre-existing FORCE_LOCALE script first so repeated builds stay idempotent
  // (index.html is itself a committed build artifact that may already carry one).
  out = out.replace(/\n?<script>window\.JINGMARK_FORCE_LOCALE=[^;]*;<\/script>\n?/g, '\n');
  if (!isEn) {
    out = out.replace('<script src="assets/app.js"></script>',
      `<script>window.JINGMARK_FORCE_LOCALE=${JSON.stringify(langCode)};</script>\n<script src="../assets/app.js"></script>`);
    out = out.replace(/(href|src)="(favicon\.svg|Chrome\.png|Edge\.png|Firefox\.png|assets\/)/g,
      (_, attr, f) => `${attr}="../${f}`);
  } else {
    out = out.replace('<script src="assets/app.js"></script>',
      `<script>window.JINGMARK_FORCE_LOCALE=null;</script>\n<script src="assets/app.js"></script>`);
  }

  // 8. Pre-render translated body text + inject static language switcher links
  out = applyI18nToHtml(out, dict);
  out = out.replace(/<div class="lang-panel">[\s\S]*?<\/div>/, '<div class="lang-panel">' + langPanelHtml(langCode) + '</div>');

  return out;
}

// English root (adds hreflang + force-locale reset)
const enPage = buildPage('en');
fs.writeFileSync(path.join(ROOT, 'index.html'), enPage);
console.log('wrote index.html (en)');

// Subdirs
for (const l of LANGS) {
  if (l.code === 'en') continue;
  const dir = path.join(ROOT, l.code);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), buildPage(l.code));
  console.log('wrote', l.code + '/index.html');
}
