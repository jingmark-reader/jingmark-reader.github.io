const fs = require('fs');
const path = 'D:/开发/插件/aura-reader-pages/assets/app.js';
let src = fs.readFileSync(path, 'utf8');

const updates = JSON.parse(fs.readFileSync('D:/开发/插件/aura-reader-pages/qa/updates.json', 'utf8'));

// 1) Extract I18N literal via brace matching
const startIdx = src.indexOf('const I18N =');
if (startIdx < 0) throw new Error('I18N not found');
const braceStart = src.indexOf('{', startIdx);
let depth = 0, endIdx = -1;
for (let i = braceStart; i < src.length; i++) {
  const ch = src[i];
  if (ch === '{') depth++;
  else if (ch === '}') { depth--; if (depth === 0) { endIdx = i; break; } }
}
if (endIdx < 0) throw new Error('I18N close not found');
const literal = src.slice(braceStart, endIdx + 1);
const I = eval('(' + literal + ')');

// 2) Apply updates
const ZH_LANGS = ['zh', 'zh-tw'];
let changed = 0;
for (const lang in updates) {
  if (!I[lang]) { console.log('MISSING LANG', lang); continue; }
  for (const k in updates[lang]) {
    if (I[lang][k] === undefined) console.log('NEW KEY ADDED', lang, k);
    I[lang][k] = updates[lang][k];
    changed++;
  }
}
console.log('FIELDS_CHANGED:', changed);

// 3) Re-emit (2-space indent)
const newLiteral = JSON.stringify(I, null, 2);
const prefix = src.slice(startIdx, braceStart); // 'const I18N = '
const suffix = src.slice(endIdx + 1);           // ';\n ...'
const newSrc = src.slice(0, startIdx) + prefix + newLiteral + suffix;
fs.writeFileSync(path, newSrc);
console.log('WRITTEN');

// 4) Verify parity (zh must have 46, others 22; WeChat gated)
const baseKeys = Object.keys(I.en).length;
let parity = true, miss = [];
for (const lang in I) {
  const ks = Object.keys(I[lang]).length;
  if (ks !== baseKeys) { parity = false; console.log('COUNT_MISMATCH', lang, ks, baseKeys); }
  for (const k of Object.keys(I.en)) if (!(k in I[lang])) { parity = false; miss.push(lang + ':' + k); }
  if (!('meta.desc' in I[lang])) { parity = false; console.log('NO meta.desc', lang); }
}
console.log('BASE_KEYS:', baseKeys, 'LANGS:', Object.keys(I).length);
console.log('MISSING:', miss.slice(0, 10).join(' | ') || 'none');

// count checks
const zhCount = (I.zh['f1.title'].match(/46/) ? '46' : '?');
const enCount = (I.en['f1.title'].match(/22/) ? '22' : '?');
const zhHasWeChat = /公众号/.test(I.zh['f1.desc']) && /公众号/.test(I.zh['faq.a2']);
const enHasWeChat = /WeChat/i.test(I.en['f1.desc']) || /WeChat publishing/i.test(I.en['faq.a2']);
console.log('zh f1.title count:', zhCount, '| en f1.title count:', enCount);
console.log('zh keeps WeChat:', zhHasWeChat, '| en drops WeChat:', !enHasWeChat);
console.log(parity ? 'PARITY_OK' : 'PARITY_FAIL');
