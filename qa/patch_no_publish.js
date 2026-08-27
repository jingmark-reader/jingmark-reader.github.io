#!/usr/bin/env node
// Fix non-zh languages: f1.desc and themes.sub still mention "publishing" leaking WeChat intent.
// Replace "publishing"-style word with "typesetting/layout" so prose aligns with the new
// typeset slot which is what non-zh users actually get.
const fs = require('fs');
const path = 'assets/app.js';
let s = fs.readFileSync(path, 'utf8');

const langs = ['en', 'ja', 'ko', 'fr', 'de', 'es', 'pt', 'ru', 'vi', 'sv', 'ar'];

const newDesc = {
  en:    'Aura, Paper, Rhythm, Dark, and Archive families for reading, writing, and typesetting.',
  ja:    'Aura、Paper、Rhythm、Dark、Archive の各系統で読書・執筆・組版に対応。',
  ko:    'Aura, Paper, Rhythm, Dark, Archive 계열로 읽기·쓰기·조판을 지원.',
  fr:    'Familles Aura, Paper, Rhythm, Dark et Archive pour lire, écrire et composer.',
  de:    'Familien Aura, Paper, Rhythm, Dark und Archive zum Lesen, Schreiben und Setzen.',
  es:    'Familias Aura, Paper, Rhythm, Dark y Archive para leer, escribir y componer.',
  pt:    'Famílias Aura, Paper, Rhythm, Dark e Archive para ler, escrever e compor.',
  ru:    'Семейства Aura, Paper, Rhythm, Dark и Archive для чтения, письма и вёрстки.',
  vi:    'Các hệ Aura, Paper, Rhythm, Dark và Archive để đọc, viết và trình bày.',
  sv:    'Familjerna Aura, Paper, Rhythm, Dark och Archive för läsning, skrivning och typografi.',
  ar:    'عائلات Aura وPaper وRhythm وDark وArchive للقراءة والكتابة والتنضيد.'
};
const newSub = {
  en:    'Aura · Paper · Rhythm · Dark · Archive — for reading, writing, and editorial typesetting.',
  ja:    'Aura · Paper · Rhythm · Dark · Archive — 読書・執筆・編集組版のためのシリーズ。',
  ko:    'Aura · Paper · Rhythm · Dark · Archive — 읽기·쓰기·편집 조판을 위한 시리즈.',
  fr:    'Aura · Paper · Rhythm · Dark · Archive — pour la lecture, l’écriture et la composition éditoriale.',
  de:    'Aura · Paper · Rhythm · Dark · Archive — zum Lesen, Schreiben und für den Buchsatz.',
  es:    'Aura · Paper · Rhythm · Dark · Archive — para leer, escribir y maquetar con calidad editorial.',
  pt:    'Aura · Paper · Rhythm · Dark · Archive — para ler, escrever e diagramar com qualidade editorial.',
  ru:    'Aura · Paper · Rhythm · Dark · Archive — для чтения, письма и редакционной вёрстки.',
  vi:    'Aura · Paper · Rhythm · Dark · Archive — cho đọc, viết và trình bày biên tập.',
  sv:    'Aura · Paper · Rhythm · Dark · Archive — för läsning, skrivning och redaktionell typografi.',
  ar:    'Aura · Paper · Rhythm · Dark · Archive — للقراءة والكتابة والتنضيد التحريري.'
};

// Find each language block; the per-language key lines follow strict order. We use regex
// per-lang and rely on the fact that f1.desc and themes.sub are unique.
for (const lang of langs) {
  // f1.desc
  const reDesc = new RegExp(`("${escape(lang)}":\\s*\\{[\\s\\S]*?)"f1\\.desc":\\s*"[^"]*"`);
  s = s.replace(reDesc, (m, head) => head + `"f1.desc": "${esc(newDesc[lang])}"`);
  // themes.sub
  const reSub  = new RegExp(`("${escape(lang)}":\\s*\\{[\\s\\S]*?)"themes\\.sub":\\s*"[^"]*"`);
  s = s.replace(reSub, (m, head) => head + `"themes.sub": "${esc(newSub[lang])}"`);
}
fs.writeFileSync(path, s);
console.log('OK');

function esc(v){return String(v).replace(/\\/g,'\\\\').replace(/"/g,'\\"');}
function escape(s){return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');}
