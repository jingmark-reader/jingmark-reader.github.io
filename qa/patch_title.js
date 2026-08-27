const fs = require('fs');
const path = 'D:/开发/插件/jingmark-pages/assets/app.js';
let src = fs.readFileSync(path, 'utf8');

const titles = {
  en: 'JingMark · A warm Markdown reader & writer for the browser',
  zh: '境相阅读 · 温润的 Markdown 阅读与写作扩展',
  'zh-tw': '境相閱讀 · 溫潤的 Markdown 閱讀與寫作擴充',
  ja: 'JingMark · ブラウザ向けの温かい Markdown リーダー＆ライター',
  ko: 'JingMark · 브라우저용 따뜻한 Markdown 리더 & 라이터',
  fr: 'JingMark · Lecteur et éditeur Markdown chaleureux pour le navigateur',
  de: 'JingMark · Warmer Markdown-Reader & -Writer für den Browser',
  es: 'JingMark · Lector y editor Markdown cálido para el navegador',
  pt: 'JingMark · Leitor e editor Markdown caloroso para o navegador',
  ru: 'JingMark · Тёплый Markdown-ридер и редактор для браузера',
  vi: 'JingMark · Trình đọc & soạn Markdown ấm áp cho trình duyệt',
  sv: 'JingMark · Varm Markdown-läsare & -skrivare för webbläsaren',
  ar: 'JingMark · قارئ وكاتب Markdown دافئ للمتصفح'
};

// Extract I18N literal
const startIdx = src.indexOf('const I18N =');
const braceStart = src.indexOf('{', startIdx);
let depth = 0, endIdx = -1;
for (let i = braceStart; i < src.length; i++) {
  if (src[i] === '{') depth++;
  else if (src[i] === '}') { depth--; if (depth === 0) { endIdx = i; break; } }
}
const literal = src.slice(braceStart, endIdx + 1);
const I = eval('(' + literal + ')');

for (const lang in titles) {
  if (!I[lang]) throw new Error('missing lang ' + lang);
  I[lang]['page.title'] = titles[lang];
}

const newLiteral = JSON.stringify(I, null, 2);
const newSrc = src.slice(0, startIdx) + src.slice(startIdx, braceStart) + newLiteral + src.slice(endIdx + 1);
fs.writeFileSync(path, newSrc);

// Verify
const base = Object.keys(I.en).length;
let ok = true;
for (const l in I) {
  if (Object.keys(I[l]).length !== base) { ok = false; console.log('COUNT_MISMATCH', l); }
  if (!I[l]['page.title']) { ok = false; console.log('NO page.title', l); }
}
console.log('BASE_KEYS:', base, 'LANGS:', Object.keys(I).length, '| page.title present:', Object.keys(I).every(l => 'page.title' in I[l]));
console.log(ok ? 'PARITY_OK' : 'PARITY_FAIL');