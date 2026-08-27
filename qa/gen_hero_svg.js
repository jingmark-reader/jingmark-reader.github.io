// Generate hero-mockup.svg — a paper-realm reading interface mock
// Mirrors the visual language of the 6 theme cards: window chrome +
// library sidebar + warm cream content (title, paragraph, quote, list).
// Resolves the original PNG's empty area by packing everything within 1200x720.

const fs = require('fs');
const path = require('path');

const OUT = path.resolve(__dirname, '..', 'assets', 'hero-mockup.svg');

// Paper-realm warm palette (mobai theme)
const BG       = '#faf6ef';   // outer canvas (paper)
const WIN      = '#f6efe2';   // window body
const CHROME   = '#eee2cc';   // title bar
const SIDEBAR  = '#efe4cf';
const SIDEBAR2 = '#e6d8bb';
const INK      = '#3d2f22';
const INK_SOFT = '#6b5544';
const ACCENT   = '#9a6a43';
const HIGHLIGHT= '#c89870';   // quotation
const CURSOR   = '#9a6a43';

// Content layout: 1200 wide, 720 tall, padded
const W = 1200, H = 720;
const PAD = 32;
const WIN_X = PAD, WIN_Y = PAD, WIN_W = W - PAD*2, WIN_H = H - PAD*2;
const TITLEBAR_H = 56;
const SIDEBAR_W = 260;
const BODY_X = WIN_X + SIDEBAR_W;
const BODY_W = WIN_W - SIDEBAR_W;
const CONTENT_X = BODY_X + 36;
const CONTENT_W = BODY_W - 72;

// SVG fragments
const trafficLights = `
  <circle cx="${WIN_X + 30}" cy="${WIN_Y + TITLEBAR_H/2}" r="9" fill="#e8b7a0"/>
  <circle cx="${WIN_X + 56}" cy="${WIN_Y + TITLEBAR_H/2}" r="9" fill="#e8d4a0"/>
  <circle cx="${WIN_X + 82}" cy="${WIN_Y + TITLEBAR_H/2}" r="9" fill="#b9d6a0"/>
`;

// File tab in title bar
const tab = `
  <g transform="translate(${WIN_X + 200}, ${WIN_Y + 12})">
    <rect width="220" height="${TITLEBAR_H - 24}" rx="6" fill="${BG}" stroke="${SIDEBAR2}"/>
    <text x="20" y="22" font-family="Inter, system-ui, sans-serif" font-size="13" font-weight="500" fill="${INK}">reading-notes.md</text>
    <circle cx="200" cy="17" r="4" fill="#cdb892"/>
  </g>
`;

// Right-side tiny toolbar in title bar
const toolbar = `
  <g transform="translate(${WIN_X + WIN_W - 220}, ${WIN_Y + TITLEBAR_H/2 - 10})" font-family="Inter, system-ui, sans-serif" font-size="11" fill="${INK_SOFT}">
    <rect x="0"   y="0" width="50" height="22" rx="4" fill="${BG}"/>
    <text x="25"  y="15" text-anchor="middle">Today</text>
    <rect x="56"  y="0" width="64" height="22" rx="4" fill="${BG}"/>
    <text x="88"  y="15" text-anchor="middle">Search</text>
    <rect x="126" y="0" width="62" height="22" rx="4" fill="${ACCENT}"/>
    <text x="157" y="15" text-anchor="middle" fill="#faf6ef" font-weight="600">Edit</text>
  </g>
`;

// Sidebar header
const libHeader = `
  <g transform="translate(${WIN_X + 28}, ${WIN_Y + TITLEBAR_H + 28})" font-family="Inter, system-ui, sans-serif">
    <text x="0" y="0" font-size="11" font-weight="700" fill="${INK_SOFT}" letter-spacing="1.5">LIBRARY · 24</text>
  </g>
`;

// Sidebar entries: bullet + label + meta
const entries = [
  { y: 70,  active: true,  dot: '#9a6a43', label: 'Reading notes',  meta: 'now' },
  { y: 110, active: false, dot: '#b8965a', label: 'Webhook design', meta: '2h' },
  { y: 150, active: false, dot: '#8a6e44', label: 'Wave journal',   meta: '1d' },
  { y: 190, active: false, dot: '#a87f3a', label: 'Paper sketches', meta: '3d' },
  { y: 230, active: false, dot: '#9a6a43', label: 'Quote garden',   meta: '1w' },
  { y: 270, active: false, dot: '#b8965a', label: 'Field notes',    meta: '2w' },
];
function sidebarItems() {
  return entries.map(e => {
    const bg = e.active ? `<rect x="${WIN_X + 22}" y="${WIN_Y + TITLEBAR_H + e.y - 18}" width="${SIDEBAR_W - 36}" height="34" rx="6" fill="${SIDEBAR2}"/>` : '';
    const weight = e.active ? '600' : '500';
    const labelColor = e.active ? INK : INK_SOFT;
    return `
    <g transform="translate(${WIN_X + 22}, ${WIN_Y + TITLEBAR_H + e.y})" font-family="Inter, system-ui, sans-serif">
      ${bg}
      <rect x="6" y="6" width="8" height="8" rx="2" fill="${e.dot}"/>
      <text x="22" y="12" font-size="13" font-weight="${weight}" fill="${labelColor}">${e.label}</text>
      <text x="${SIDEBAR_W - 60}" y="12" font-size="11" fill="${INK_SOFT}" opacity=".7">${e.meta}</text>
    </g>`;
  }).join('');
}

// Content block: a curated paper-realm reading view
// h1, subtitle, paragraph lines (text-as-rect for paragraph density),
// pull-quote, list.
const CONTENT_TOP = WIN_Y + TITLEBAR_H + 32;

// Helper: short paragraph line as soft rect (text-flow without a font render)
function paraLines(yStart, lineH, widths, gap = 8) {
  return widths.map((w, i) =>
    `<rect x="${CONTENT_X}" y="${yStart + i*(lineH+gap)}" width="${w}" height="${lineH}" rx="3" fill="${INK}" opacity="${0.85 - i*0.08}"/>`
  ).join('');
}

// Title
const titleBlock = `
  <g transform="translate(${CONTENT_X}, ${CONTENT_TOP + 22})" font-family="'Fraunces', 'Noto Serif SC', serif">
    <text x="0" y="0" font-size="42" font-weight="700" fill="${INK}" letter-spacing="-1">晨光里的</text>
    <text x="0" y="50" font-size="42" font-weight="700" fill="${INK}" letter-spacing="-1">阅读笔记</text>
  </g>
`;

// Subtitle / meta
const metaRow = `
  <g transform="translate(${CONTENT_X}, ${CONTENT_TOP + 138})" font-family="Inter, system-ui, sans-serif" font-size="12">
    <text x="0" y="0" font-weight="600" fill="${ACCENT}" letter-spacing="0.5">FENG · AUG 27, 2026</text>
    <text x="200" y="0" font-weight="500" fill="${INK_SOFT}">·  8 min read  ·  Paper Realm #3</text>
  </g>
`;

// Thin divider
const divider = `
  <line x1="${CONTENT_X}" y1="${CONTENT_TOP + 158}" x2="${CONTENT_X + CONTENT_W - 60}" y2="${CONTENT_TOP + 158}" stroke="${SIDEBAR2}" stroke-width="1.5"/>
`;

// Body paragraph (3 staggered lines)
const paraY = CONTENT_TOP + 184;
const para = `
  ${paraLines(paraY, 12, [640, 600, 510])}
`;

// Pull-quote
const quoteY = CONTENT_TOP + 268;
const pullQuote = `
  <g transform="translate(${CONTENT_X}, ${quoteY})">
    <rect x="0" y="0" width="4" height="62" fill="${ACCENT}"/>
    <text x="20" y="22" font-family="'Fraunces', serif" font-size="22" font-weight="600" font-style="italic" fill="${INK}">“The morning sun makes even</text>
    <text x="20" y="50" font-family="'Fraunces', serif" font-size="22" font-weight="600" font-style="italic" fill="${INK}">a long shadow feel warm.”</text>
  </g>
`;

// Continuation paragraph below quote
const para2Y = CONTENT_TOP + 364;
const para2 = `
  ${paraLines(para2Y, 12, [560, 520, 480, 380])}
`;

// Tags / footer of the page
const tags = `
  <g transform="translate(${CONTENT_X}, ${CONTENT_TOP + 462})" font-family="Inter, system-ui, sans-serif" font-size="11">
    <rect x="0" y="0" width="78" height="22" rx="11" fill="${SIDEBAR2}"/>
    <text x="39" y="15" text-anchor="middle" fill="${INK_SOFT}" font-weight="500">reading</text>
    <rect x="86" y="0" width="68" height="22" rx="11" fill="${SIDEBAR2}"/>
    <text x="120" y="15" text-anchor="middle" fill="${INK_SOFT}" font-weight="500">paper</text>
    <rect x="162" y="0" width="92" height="22" rx="11" fill="${SIDEBAR2}"/>
    <text x="208" y="15" text-anchor="middle" fill="${INK_SOFT}" font-weight="500">morning</text>
  </g>
`;

// Caret/cursor at the end of body (signals "live editing")
const cursor = `
  <rect x="${CONTENT_X + 488}" y="${para2Y + 38}" width="2" height="14" fill="${CURSOR}"/>
`;

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Aura Reader paper-realm interface">
  <defs>
    <filter id="cardShadow" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="10" stdDeviation="18" flood-color="#9a6a43" flood-opacity="0.22"/>
    </filter>
  </defs>
  <!-- canvas -->
  <rect width="${W}" height="${H}" fill="${BG}"/>
  <!-- window -->
  <g filter="url(#cardShadow)">
    <rect x="${WIN_X}" y="${WIN_Y}" width="${WIN_W}" height="${WIN_H}" rx="14" fill="${WIN}" stroke="${SIDEBAR2}" stroke-width="1"/>
    <!-- title bar -->
    <rect x="${WIN_X}" y="${WIN_Y}" width="${WIN_W}" height="${TITLEBAR_H}" rx="14" fill="${CHROME}"/>
    <rect x="${WIN_X}" y="${WIN_Y + TITLEBAR_H - 14}" width="${WIN_W}" height="14" fill="${CHROME}"/>
    ${trafficLights}
    ${tab}
    ${toolbar}
  </g>
  <!-- sidebar -->
  <rect x="${WIN_X}" y="${WIN_Y + TITLEBAR_H}" width="${SIDEBAR_W}" height="${WIN_H - TITLEBAR_H}" fill="${SIDEBAR}"/>
  <line x1="${WIN_X + SIDEBAR_W}" y1="${WIN_Y + TITLEBAR_H}" x2="${WIN_X + SIDEBAR_W}" y2="${WIN_H + WIN_Y}" stroke="${SIDEBAR2}" stroke-width="1"/>
  ${libHeader}
  ${sidebarItems()}
  <!-- content -->
  ${titleBlock}
  ${metaRow}
  ${divider}
  ${para}
  ${pullQuote}
  ${para2}
  ${tags}
  ${cursor}
</svg>
`;

fs.writeFileSync(OUT, svg, 'utf8');
console.log('wrote', OUT, '(', fs.statSync(OUT).size, 'bytes)');
