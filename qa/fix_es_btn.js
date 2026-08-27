// fix_es_btn.js — patch only Spanish btn (idempotent)
const fs = require('fs');
const F = 'assets/app.js';
let s = fs.readFileSync(F, 'utf8');
const re = /(\"es\":\s*\{[\s\S]*?\"price\.pro\.btn\":\s*)\"[^"]*\"/;
s = s.replace(re, '$1' + '"Obtener Pro por 4,99 $ \u2192"');
fs.writeFileSync(F, s, 'utf8');
console.log('es patched');
