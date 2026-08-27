// Removes the orphaned "hero.install.hint" key from every locale block.
// Keys become unused after the hero install strip dropped the label span.
const fs = require('fs');
const path = 'assets/app.js';
let s = fs.readFileSync(path, 'utf8');
const before = (s.match(/    "hero\.install\.hint":[^,\n]*,?/g) || []).length;
s = s.replace(/    "hero\.install\.hint":\s*"[^"]*",?\s*\n/g, '');
fs.writeFileSync(path, s);
console.log('removed', before, '"hero.install.hint" lines');
