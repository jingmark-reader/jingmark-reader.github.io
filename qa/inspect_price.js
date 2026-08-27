// Inspect current Pro pricing copy across all 13 langs
const fs = require('fs'), vm = require('vm');
const code = fs.readFileSync('assets/app.js', 'utf8');
const stub = new Proxy(function(){}, { get: (t,p)=> p === 'classList' ? {toggle(){},add(){},remove(){}} : stub, apply: ()=> stub, set: ()=> true });
const store = {};
const ws = new Proxy(function(){}, { get: (t,p)=> (p in store) ? store[p] : stub, set: (t,p,v)=> { store[p]=v; return true; }, apply: ()=> stub });
const sandbox = { window: ws, document: stub, localStorage: stub, fetch: ()=> Promise.resolve(stub), console };
vm.createContext(sandbox);
vm.runInContext(code, sandbox);
const I = store.AURA_I18N;
for (const lg of Object.keys(I)) {
  const v = I[lg];
  console.log(lg.padEnd(6), '| cost:', v['price.pro.cost'], '| early:', v['price.pro.early'], '| btn:', v['price.pro.btn']);
}
