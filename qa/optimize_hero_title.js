// 第二轮优化 hero.title：让 14ch 容器下保持 2 行内（之前 11 语言版本偏长）。
// 副标 hero.sub 全部不动（已在上一轮固化）。
// 目标语序：更短 + 保留 4 要素（轻量/浏览器/Markdown/扩展/插件 同义）。
const fs = require('fs');
const file = 'assets/app.js';
let s = fs.readFileSync(file, 'utf8');

const map = {
  en: 'A lighter browser extension for Markdown',
  ja: 'より軽い、ブラウザ向け Markdown 拡張',
  ko: '더 가벼운 브라우저 Markdown 확장',
  fr: 'Une extension Markdown plus légère pour le navigateur',
  de: 'Eine leichtere Markdown-Erweiterung für den Browser',
  es: 'Una extensión Markdown más ligera para el navegador',
  pt: 'Uma extensão Markdown mais leve para o navegador',
  ru: 'Более лёгкое расширение Markdown для браузера',
  vi: 'Tiện ích Markdown nhẹ hơn cho trình duyệt',
  sv: 'Ett lättare Markdown-tillägg för webbläsaren',
  ar: 'إضافة Markdown أخف لمتصفحك'
};

const re = /\n  "([a-z\-]+)": \{\n([\s\S]*?)\n  \},/g;
let count = 0;
s = s.replace(re, (m, lg, block) => {
  if (!map[lg]) return m;
  const newTitle = map[lg];
  let b = block.replace(/("hero\.title": )"[^"]*"/, `$1"${newTitle}"`);
  count++;
  return `\n  "${lg}": {\n${b}\n  },`;
});

fs.writeFileSync(file, s);
console.log('optimized:', count, '(expect 10; ar is last block without trailing comma)');
