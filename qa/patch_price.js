// Update Pro pricing copy across all 13 languages:
// - price.pro.cost: now-led pricing block ($4.99 主价 + $9.99 划线 + Save 50% chip)
// - price.pro.early: limited-time tagline
// - price.pro.btn: CTA with arrow + early-bird price
// Markup uses <span class="now">/<span class="was">/<span class="save"> so CSS can lay it out.

const fs = require('fs');
const path = require('path');
const F = path.resolve(__dirname, '..', 'assets', 'app.js');
let s = fs.readFileSync(F, 'utf8');

const SAVE = { en: 'Save 50%', zh: '立省 50%', 'zh-tw': '省 50%', ja: '50% OFF', ko: '50% 할인',
               fr: '−50%', de: '−50%', es: '−50%', pt: '−50%',
               ru: '−50%', vi: 'Giảm 50%', sv: '−50%', ar: 'خصم 50%' };

const EARLY = {
  en: 'Limited early bird · reverts to $9.99',
  zh: '限时早鸟价 · 售完即恢复 $9.99',
  'zh-tw': '限時早鳥價 · 售完即恢復 $9.99',
  ja: '早割限定 · 終了後は $9.99',
  ko: '얼리버드 한정 · 종료 후 $9.99',
  fr: 'Offre de lancement · repasse à 9,99 $',
  de: 'Frühbucher-Aktion · danach 9,99 $',
  es: 'Oferta inicial · vuelve a 9,99 $',
  pt: 'Oferta de lançamento · volta a $9,99',
  ru: 'Ранняя цена · далее 9,99 $',
  vi: 'Giá sớm có hạn · quay lại $9,99',
  sv: 'Begränsad early bird · återgår till $9,99',
  ar: 'سعر مبكر محدود · يعود إلى 9.99$'
};

const BTN = {
  en: 'Get Pro for $4.99 →',
  zh: '立即获取 Pro · $4.99 →',
  'zh-tw': '立即獲取 Pro · $4.99 →',
  ja: 'Pro を $4.99 で入手 →',
  ko: '$4.99 에 Pro 받기 →',
  fr: 'Obtenir Pro pour 4,99 $ →',
  de: 'Pro für 4,99 $ holen →',
  es: 'Obtener Pro por 4,99 $ →',
  pt: 'Obter Pro por $4,99 →',
  ru: 'Купить Pro за 4,99 $ →',
  vi: 'Nhận Pro với $4,99 →',
  sv: 'Skaffa Pro för $4,99 →',
  ar: 'احصل على Pro مقابل 4.99$ →'
};

// quick language to (currency decimal) hint for consistency
const LANGS = ['en','zh','zh-tw','ja','ko','fr','de','es','pt','ru','vi','sv','ar'];

function escRe(str) { return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
function escQ(str) { return str.replace(/"/g, '\\"'); }

let totalEdits = 0;

for (const lang of LANGS) {
  // cost: contains price.pro.cost
  const reCost = new RegExp(`("${escRe(lang)}":\\s*\\{[\\s\\S]*?"price\\.pro\\.cost":\\s*)"[^"]*"`);
  const newCost = `<span class="now">$4.99</span><span class="was">$9.99</span><span class="save">${SAVE[lang]}</span>`;
  const newCostEsc = escQ(newCost);
  const before1 = s;
  s = s.replace(reCost, (m, head) => head + `"${newCostEsc}"`);
  if (s !== before1) totalEdits++;

  // early
  const reEarly = new RegExp(`("${escRe(lang)}":\\s*\\{[\\s\\S]*?"price\\.pro\\.early":\\s*)"[^"]*"`);
  const before2 = s;
  s = s.replace(reEarly, (m, head) => head + `"${EARLY[lang]}"`);
  if (s !== before2) totalEdits++;

  // btn
  const reBtn = new RegExp(`("${escRe(lang)}":\\s*\\{[\\s\\S]*?"price\\.pro\\.btn":\\s*)"[^"]*"`);
  const before3 = s;
  s = s.replace(reBtn, (m, head) => head + `"${BTN[lang]}"`);
  if (s !== before3) totalEdits++;
}

fs.writeFileSync(F, s, 'utf8');
console.log('done; edits attempted per key lang * 3 keys; totalEdits =', totalEdits);
