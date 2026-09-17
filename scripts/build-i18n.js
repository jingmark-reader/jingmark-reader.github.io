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
  { code: 'en',     dir: 'ltr' },
  { code: 'zh',     dir: 'ltr' },
  { code: 'zh-tw',  dir: 'ltr' },
  { code: 'ja',     dir: 'ltr' },
  { code: 'ko',     dir: 'ltr' },
  { code: 'fr',     dir: 'ltr' },
  { code: 'de',     dir: 'ltr' },
  { code: 'es',     dir: 'ltr' },
  { code: 'pt',     dir: 'ltr' },
  { code: 'ru',     dir: 'ltr' },
  { code: 'vi',     dir: 'ltr' },
  { code: 'sv',     dir: 'ltr' },
  { code: 'ar',     dir: 'rtl' },
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
  if (!isEn) {
    out = out.replace('<script src="assets/app.js"></script>',
      `<script>window.JINGMARK_FORCE_LOCALE=${JSON.stringify(langCode)};</script>\n<script src="../assets/app.js"></script>`);
    out = out.replace(/(href|src)="(favicon\.svg|Chrome\.png|Edge\.png|Firefox\.png|assets\/)/g,
      (_, attr, f) => `${attr}="../${f}`);
  } else {
    out = out.replace('<script src="assets/app.js"></script>',
      `<script>window.JINGMARK_FORCE_LOCALE=null;</script>\n<script src="assets/app.js"></script>`);
  }

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
