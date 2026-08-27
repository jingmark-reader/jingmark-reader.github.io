// 重写 13 语言 auth.upgrade 为早鸟三段式 HTML（单引号属性避免破坏 JS 字符串）
const fs = require('fs');
const path = 'assets/app.js';
let c = fs.readFileSync(path, 'utf8');

// 语言块顺序（与 app.js 中一致）
const ORDER = ['en','zh','zh-tw','ja','ko','fr','de','es','pt','ru','vi','sv','ar'];

const LEAD = {
  en: "Get Pro", zh: "购买 Pro", zhtw: "購買 Pro", ja: "Pro を購入", ko: "Pro 구매",
  fr: "Obtenir Pro", de: "Pro holen", es: "Obtener Pro", pt: "Obter Pro",
  ru: "Купить Pro", vi: "Mua Pro", sv: "Skaffa Pro", ar: "احصل على Pro"
};
const SAVE = {
  en: "Save 50%", zh: "立省 50%", zhtw: "立省 50%", ja: "50% お得", ko: "50% 절약",
  fr: "-50%", de: "50% sparen", es: "Ahorra 50%", pt: "Economize 50%",
  ru: "Экономия 50%", vi: "Tiết kiệm 50%", sv: "Spara 50%", ar: "وفّر 50%"
};

// 构造每段 HTML（单引号属性）
function seg(key, save) {
  return `<span class='au-label'>${LEAD[key]}</span>` +
         `<span class='au-now'>$4.99</span>` +
         `<span class='au-was'>$9.99</span>` +
         `<span class='au-save'>${save}</span>`;
}

// 按行处理：找到所有含 "auth.upgrade": 的行，按出现顺序映射语言
const lines = c.split('\n');
let idx = 0; // 命中计数
const out = [];
for (const line of lines) {
  if (line.includes('"auth.upgrade":')) {
    const lang = ORDER[idx] || 'en';
    const key = lang === 'zh-tw' ? 'zhtw' : lang;
    const newVal = seg(key, SAVE[key]);
    out.push(`    "auth.upgrade": "${newVal}",`);
    idx++;
  } else {
    out.push(line);
  }
}
c = out.join('\n');
fs.writeFileSync(path, c, 'utf8');
console.log('已重写 auth.upgrade 行数:', idx);
