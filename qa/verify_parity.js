const fs = require('fs');
const vm = require('vm');
let code = fs.readFileSync('assets/app.js', 'utf8');
// inject hook to expose IIFE-private I18N & LANGS
code = code.replace(/\}\)\(\);\s*$/, '\n  __ex(I18N, LANGS);\n})();');

let captured = null;
const stub = new Proxy(function(){}, {
  get: (t, p) => {
    if (p === 'classList') return { toggle(){}, add(){}, remove(){} };
    if (p === Symbol.toPrimitive) return () => '';
    return stub;
  },
  apply: () => stub,
  set: () => true,
});
const sandbox = {
  __ex: (I18N, LANGS) => { captured = { I18N, LANGS }; },
  window: stub, document: stub, localStorage: stub,
  fetch: () => Promise.resolve(stub), console: console,
};
vm.createContext(sandbox);
vm.runInContext(code, sandbox);

const { I18N, LANGS } = captured;
const keys = Object.keys(I18N);
const langs = LANGS.map(l => l.code);

// 1) key parity
const ref = Object.keys(I18N['zh']);
const PARITY = ref.length;
let parityOK = true;
const bad = [];
for (const lg of langs) {
  const k = Object.keys(I18N[lg]);
  if (k.length !== PARITY) { parityOK = false; bad.push(`${lg}:${k.length}`); }
}
console.log('PARITY', PARITY, parityOK ? 'OK' : ('MISSING ' + bad.join(',')));

// 2) leak check: non-zh langs must NOT mention publish/WeChat/公众号 in f1.desc/themes.sub
const leakRE = /publish|wechat|公众号|公眾號/i;
const zhSet = new Set(['zh', 'zh-tw']);
let leak = [];
let zhKeep = [];
for (const lg of langs) {
  if (zhSet.has(lg)) {
    const keep = /公众号|公眾號|wechat/i.test(I18N[lg]['f1.desc'] + I18N[lg]['themes.sub'] + I18N[lg]['t6.name']);
    if (keep) zhKeep.push(lg); else zhKeep.push(lg + ':MISSING-WECHAT');
    continue;
  }
  for (const k of ['f1.desc', 'themes.sub']) {
    if (leakRE.test(I18N[lg][k])) leak.push(`${lg}.${k}`);
  }
}
console.log('ZH_WECHAT', zhKeep.join(','));
console.log('NO_PUBLISH_LEAK', leak.length === 0 ? 'OK' : ('LEAK ' + leak.join(',')));

// 3) theme count wording in f1.title/themes.title per lang
const cntRE = /46|22|四十六|四十四/;
let cntBad = [];
for (const lg of langs) {
  const t = I18N[lg]['f1.title'] + I18N[lg]['themes.title'];
  if (!/\d/.test(t)) cntBad.push(lg + ':NONUM');
}
console.log('THEME_COUNT', cntBad.length ? ('CHECK ' + cntBad.join(',')) : 'OK(has number)');

// 4) typeset-slot keys (diff4t.* / t6t.* / price.pro.f6t) must be WeChat/publish-free in ALL langs
const slotLeakRE = /wechat|公众号|公眾號|publish/i;
let slotLeak = [];
for (const lg of langs) {
  const d = I18N[lg];
  const blob = [d['diff4t.desc'], d['t6t.name'], d['t6t.desc'], d['price.pro.f6t']].join(' ');
  if (slotLeakRE.test(blob)) slotLeak.push(lg);
}
console.log('TYPESET_SLOT', slotLeak.length ? ('LEAK ' + slotLeak.join(',')) : 'OK(all langs WeChat-free)');
