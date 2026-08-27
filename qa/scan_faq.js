const fs = require("fs"), vm = require("vm");
let code = fs.readFileSync("assets/app.js", "utf8");
const stub = new Proxy(function(){}, { get:(t,p)=> p==="classList"?{toggle(){},add(){},remove(){}}:stub, apply:()=>stub, set:()=>true });
const store = {};
const windowStub = new Proxy(function(){}, {
  get:(t,p)=> (p in store)?store[p]:(p==="addEventListener"?()=>{}:stub),
  set:(t,p,v)=>{ store[p]=v; return true; },
  apply:()=>stub
});
const sb = { window: windowStub, document: stub, localStorage: stub, fetch:()=>Promise.resolve(stub), console };
vm.createContext(sb);
vm.runInContext(code, sb);
const I18N = store.AURA_I18N;
const LANGS = store.AURA_LANGS;
if(!I18N){ console.log("NO_I18N"); process.exit(1); }

const faqKeys = Object.keys(I18N.en).filter(k=>k.startsWith("faq."));
const cjk = /[一-鿿]/;
console.log("LANGS:", LANGS.map(l=>l.code).join(","));
console.log("FAQ keys count:", faqKeys.length);
console.log("\n=== CJK leak in non-zh/zh-tw FAQ ===");
let leak=0;
for(const lg of LANGS.map(l=>l.code)){
  if(lg==="zh"||lg==="zh-tw") continue;
  for(const k of faqKeys){
    const v = I18N[lg][k]||"";
    if(cjk.test(v)){ console.log("  CJK_LEAK", lg, k, "=>", v.slice(0,70)); leak++; }
  }
}
console.log(leak? `\n${leak} CJK leaks` : "  none");

console.log("\n=== Latin words in zh/zh-tw FAQ (excluding brands/tech) ===");
const ok = new Set(["Creem","Aura","Reader","File","System","Access","API","Chrome","Edge","Brave","Arc","KaTeX","Mermaid","Markdown","Word","PDF","HTML","Pro","Free","TV","Tiếng","Svenska","WYSIWYG","DOMPurify"]);
let lat=0;
for(const lg of ["zh","zh-tw"]){
  for(const k of faqKeys){
    const v = I18N[lg][k]||"";
    const words = (v.match(/[A-Za-z][A-Za-z.+-]*/g)||[]).filter(w=>!ok.has(w));
    if(words.length){ console.log("  ZH_LATIN", lg, k, "=>", words.join(",")); lat++; }
  }
}
console.log(lat? `\n${lat} latin groups` : "  none");
console.log("\n=== show faq.a7 in each lang (language-list line) ===");
for(const lg of LANGS.map(l=>l.code)){ console.log("  ", lg, ":", (I18N[lg]["faq.a7"]||"").slice(0,90)); }
