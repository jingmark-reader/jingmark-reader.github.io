'use strict';
const fs = require('fs');
const path = require('path');

const FILE = path.resolve(__dirname, '../assets/app.js');
let src = fs.readFileSync(FILE, 'utf8');

// Language order MUST match the order of `"price.pro.f6":` occurrences in the file.
// Verified order: en, zh, zh-tw, ja, ko, fr, de, es, pt, ru, vi, sv, ar
const L = ['en','zh','zh-tw','ja','ko','fr','de','es','pt','ru','vi','sv','ar'];

// 5 new keys per language, in the same order as L.
const diff4tTitle = [
  'Print-ready typesetting','印刷级排版','印刷級排版','印刷品質の組版','인쇄급 조판',
  'Mise en page imprimable','Druckreifes Satzbild','Maquetación de imprenta','Tipografia de impressão',
  'Вёрстка уровня печати','Sắp chữ chuẩn in','Tryckfärdig typsättning','طباعة جاهزة التنضيد'
];
const diff4tDesc = [
  'Vertical rhythm, a locked measure, and tuned spacing make long reads feel effortless.',
  '垂直节奏、锁定行宽与精调间距，让长文阅读毫不费力。',
  '垂直節奏、鎖定行寬與精調間距，讓長文閱讀毫不費力。',
  '垂直リズム、固定行幅、調整された間隔により、長文も読みやすくなります。',
  '수직 리듬, 고정 행폭, 정교한 간격으로 긴 글도 편안하게 읽힙니다.',
  'Le rythme vertical, une mesure verrouillée et un espacement réglé rendent la lecture fluide.',
  'Vertikaler Rhythmus, feste Zeilenbreite und abgestimmter Abstand machen langes Lesen mühelos.',
  'El ritmo vertical, una medida fija y el espaciado ajustado hacen que leer sea fácil.',
  'Ritmo vertical, medida fixa e espaçamento ajustado tornam a leitura prazerosa.',
  'Вертикальный ритм, фиксированная ширина и выверенный интервал делают чтение лёгким.',
  'Nhịp điệu dọc, chiều rộng khóa và khoảng cách tinh chỉnh giúp đọc dài không mệt.',
  'Vertikal rytm, låst radlängd och avstämda mellanrum gör långläsning lätt.',
  'الإيقاع الرأسي والقياس الثابت والتباعد المضبوط تجعل القراءة الطويلة سهلة.'
];
const t6tName = [
  'Typeset · Refined','排版 · 精控','排版 · 精控','組版 · 洗練','조판 · 정교',
  'Typo · Raffinée','Satz · Edel','Maquetación · Refinada','Tipografia · Refinada',
  'Вёрстка · Точная','Sắp chữ · Tinh tế','Typsättning · Fin','تنضيد · رصين'
];
const t6tDesc = [
  'Serif headings, justified body, minimal tables — editorial polish in every theme.',
  '衬线标题、两端对齐正文、极简表格——每套主题都自带编辑级排版。',
  '襯線標題、兩端對齊正文、極簡表格——每套主題都自帶編輯級排版。',
  'セリフ見出し、両端揃え本文、ミニマルな表——すべてのテーマに編集品質の組版。',
  '세리프 제목, 양쪽 맞춤 본문, 미니멀 표——모든 테마에 편집급 조판.',
  'Titres serif, corps justifié, tables minimales — une finition éditoriale dans chaque thème.',
  'Serifen-Überschriften, Blocksatz, schlichte Tabellen — editorialer Schliff in jedem Thema.',
  'Títulos serif, cuerpo justificado, tablas mínimas — acabado de edición en cada tema.',
  'Títulos serif, corpo justificado, tabelas mínimas — acabamento editorial em cada tema.',
  'Заголовки с засечками, выключка по ширине, минимальные таблицы — редакционная отделка в каждой теме.',
  'Tiêu đề chữ serif, thân bài căn đều, bảng tối giản—chất lượng báo chí trong mọi chủ đề.',
  'Serif-rubriker, marginaljusterad brödtext, minimala tabeller — redaktionell finish i varje tema.',
  'عناوين بخط serif وجسم مضبوط وجداول بسيطة—لمسة تحريرية في كل سمة.'
];
const f6t = [
  'Print-grade typesetting engine','印刷级排版引擎','印刷級排版引擎','印刷グレードの組版エンジン','인쇄급 조판 엔진',
  'Moteur de typographie de qualité imprimerie','Satz-Engine in Druckqualität','Motor de maquetación de grado imprenta','Motor de tipografia de grau impressão',
  'Движок вёрстки уровня печати','Công cụ sắp chữ chuẩn in','Typsättningsmotor i tryckkvalitet','محرك تنضيد بجودة الطباعة'
];

let i = 0;
src = src.replace(/"price\.pro\.f6":\s*"[^"]*",/g, (m) => {
  if (i >= L.length) return m;
  const k = i;
  i += 1;
  return m +
    `\n    "diff4t.title": "${diff4tTitle[k]}",` +
    `\n    "diff4t.desc": "${diff4tDesc[k]}",` +
    `\n    "t6t.name": "${t6tName[k]}",` +
    `\n    "t6t.desc": "${t6tDesc[k]}",` +
    `\n    "price.pro.f6t": "${f6t[k]}",`;
});

if (i !== L.length) {
  console.error('MATCH_COUNT_MISMATCH expected', L.length, 'got', i);
  process.exit(1);
}

fs.writeFileSync(FILE, src);
console.log('INSERTED for', i, 'languages');
