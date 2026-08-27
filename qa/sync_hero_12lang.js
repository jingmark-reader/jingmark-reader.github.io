// Syncs hero.title / hero.sub for the 11 non-Chinese locales to the new Chinese copy:
//   title : "轻量级的浏览器 Markdown 阅读/编辑 插件"
//   sub   : "内置丰富精致的 Markdown 排版主题、天生离线，你的文件从不离开本机。"
// zh and zh-tw were already updated by hand and are intentionally excluded.
const fs = require('fs');
const file = 'assets/app.js';
let s = fs.readFileSync(file, 'utf8');

const map = {
  en: ['A lightweight browser extension to read & write Markdown',
       'Rich, refined Markdown typography themes built in, offline by design, your files never leave your device.'],
  ja: ['軽量なブラウザ向け Markdown リーダー＆エディター拡張',
       '洗練された Markdown 用タイポグラフィテーマを内蔵。オフライン設計で、ファイルは端末から出ません。'],
  ko: ['가벼운 브라우저용 Markdown 리더 & 에디터 확장',
       '정교한 Markdown 타이포그래피 테마 내장, 오프라인 설계, 파일은 기기를 떠나지 않습니다.'],
  fr: ['Une extension Markdown légère pour lire et écrire, dans votre navigateur',
       'Des thèmes de typographie Markdown riches et raffinés intégrés, conçue pour le hors-ligne, vos fichiers ne quittent jamais votre appareil.'],
  de: ['Eine leichte Markdown-Reader-&-Editor-Erweiterung für den Browser',
       'Reiche, ausgefeilte Markdown-Typografie-Themen integriert, offline konzipiert, Ihre Dateien verlassen nie Ihr Gerät.'],
  es: ['Una extensión ligera de lector y editor Markdown para el navegador',
       'Temas de tipografía Markdown ricos y refinados integrados, pensada para sin conexión, tus archivos nunca salen de tu dispositivo.'],
  pt: ['Uma extensão leve de leitor e editor Markdown para o navegador',
       'Temas de tipografia Markdown ricos e refinados integrados, pensada para offline, seus arquivos nunca saem do seu dispositivo.'],
  ru: ['Лёгкое браузерное расширение — редактор и читалка Markdown',
       'Богатые и изысканные темы типографики Markdown встроены, офлайн по замыслу, ваши файлы никогда не покидают устройство.'],
  vi: ['Tiện ích trình đọc & soạn Markdown nhẹ cho trình duyệt',
       'Các chủ đề kiểu chữ Markdown phong phú và tinh tế được tích hợp sẵn, thiết kế ngoại tuyến, tệp của bạn không rời thiết bị.'],
  sv: ['Ett lättviktigt Markdown-tillägg för att läsa och skriva i webbläsaren',
       'Rika och förfinade Markdown-typografiteman inbyggda, byggd för offline, dina filer lämnar aldrig din enhet.'],
  ar: ['إضافة Markdown خفيفة للقراءة والكتابة في متصفحك',
       'سمات تنسيق Markdown غنية ومصقولة مدمجة، مصممة للعمل دون اتصال، وملفاتك لا تغادر جهازك أبدًا.']
};

const re = /\n  "([a-z\-]+)": \{\n([\s\S]*?)\n  \},/g;
let count = 0;
s = s.replace(re, (m, lg, block) => {
  if (!map[lg]) return m;
  const [title, sub] = map[lg];
  let b = block
    .replace(/("hero\.title": )"[^"]*"/, `$1"${title}"`)
    .replace(/("hero\.sub": )"[^"]*"/, `$1"${sub}"`);
  count++;
  return `\n  "${lg}": {\n${b}\n  },`;
});

fs.writeFileSync(file, s);
console.log('synced locales:', count);
