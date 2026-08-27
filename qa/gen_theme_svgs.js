const fs = require("fs");
const DIR = "assets/themes";

// Each theme: file, palette + sample content tone
const themes = [
  {
    file: "mobai.svg",
    name: "Aura · Warm",
    bg: "#faf3e8", ink: "#2c2620", soft: "#6b5d4b", accent: "#9a6a43",
    side: "#fff8ee", card: "#fffdf8", serif: "Georgia, 'Times New Roman', serif",
    sans: "'Segoe UI', Roboto, sans-serif", dark: false,
    title: "Paper Realm", sub: "A warm reading theme",
    para: ["Open any .md file and it reads like a book —", "amber paper, serif body, calm vertical rhythm."],
    quote: "“Reading should feel like turning pages.”"
  },
  {
    file: "xuanzhi.svg",
    name: "Paper · Letter",
    bg: "#fbf6ea", ink: "#3a3024", soft: "#7a6a52", accent: "#b9824f",
    side: "#fffaf0", card: "#fffef9", serif: "Georgia, 'Songti SC', serif",
    sans: "'PingFang SC', 'Segoe UI', sans-serif", dark: false,
    title: "宣纸 · 信笺", sub: "Rice-paper cream",
    para: ["以宣纸般的米色为底，衬线正文温润如", "信笺，适合长篇书写与东方排版。"],
    quote: "“落笔如有神，纸上生清风。”"
  },
  {
    file: "mori-journal.svg",
    name: "Rhythm · Journal",
    bg: "#eef3ea", ink: "#2f3a2c", soft: "#5b6b54", accent: "#6f8a5e",
    side: "#f4f8f0", card: "#fbFEF8", serif: "Georgia, serif",
    sans: "'Segoe UI', Roboto, sans-serif", dark: false,
    title: "Rhythm Journal", sub: "Forest green · washi",
    para: ["Fresh forest tones with a washi-tape feel —", "notes and journals stay light and breathing."],
    quote: "“A quiet page, a steady rhythm.”"
  },
  {
    file: "cream-orange.svg",
    name: "Archive · Cream",
    bg: "#fdf1e6", ink: "#4a3b2e", soft: "#8a6f59", accent: "#d98e5a",
    side: "#fff6ec", card: "#fffaf4", serif: "Georgia, serif",
    sans: "'Segoe UI', Roboto, sans-serif", dark: false,
    title: "Archive Cream", sub: "Cozy dessert tones",
    para: ["Rounded, dessert-warm cream for slow", "archiving — soft corners, easy on the eyes."],
    quote: "“Save the warm little things.”"
  },
  {
    file: "night-film.svg",
    name: "Dark · Night Film",
    bg: "#1c1814", ink: "#ece2d4", soft: "#9a8c7a", accent: "#c9a06a",
    side: "#251f18", card: "#221c16", serif: "Georgia, serif",
    sans: "'Segoe UI', Roboto, sans-serif", dark: true,
    title: "Night Film", sub: "Cinema dark",
    para: ["A dim cinema palette for late-night reads —", "high contrast, low glare, immersive focus."],
    quote: "“Lights low, story bright.”"
  },
  {
    file: "mono-editorial.svg",
    name: "Editorial · Mono",
    bg: "#ffffff", ink: "#1a1a1a", soft: "#6b6b6b", accent: "#111111",
    side: "#f4f4f4", card: "#ffffff", serif: "Georgia, serif",
    sans: "'Courier New', 'SFMono-Regular', monospace", dark: false,
    title: "Editorial Mono", sub: "Swiss grid · mono",
    para: ["Monochrome Swiss-grid layout with monospace", "body — magazine polish, zero decoration."],
    quote: "“Structure is the style.”"
  }
];

function svg(t) {
  const W = 600, H = 400;
  const dot = t.dark ? "#4a423a" : "#e6dccb";
  const lineCol = t.dark ? "rgba(255,255,255,.12)" : "rgba(44,38,32,.10)";
  const pCol = t.dark ? "rgba(236,226,212,.55)" : "rgba(44,38,32,.45)";
  const sideW = 150;
  const rows = [70, 104, 138, 172].map(y => `
    <rect x="22" y="${y}" width="106" height="20" rx="5" fill="${t.card}"/>
    <rect x="22" y="${y}" width="4" height="20" rx="2" fill="${t.accent}" opacity=".8"/>
    <rect x="36" y="${y+6}" width="${[64,52,72,44][[70,104,138,172].indexOf(y)]}" height="8" rx="4" fill="${t.soft}" opacity=".5"/>`).join("");
  const para = t.para.map((p,i)=>`<text x="188" y="${232+i*26}" font-family="${t.sans}" font-size="14" fill="${pCol}">${esc(p)}</text>`).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" font-family="${t.sans}">
  <rect width="${W}" height="${H}" fill="${t.bg}"/>
  <!-- window chrome -->
  <rect x="0" y="0" width="${W}" height="44" fill="${t.side}"/>
  <circle cx="22" cy="22" r="6" fill="#e8a09a"/>
  <circle cx="42" cy="22" r="6" fill="#e6c98a"/>
  <circle cx="62" cy="22" r="6" fill="#a6cf9b"/>
  <rect x="250" y="14" width="300" height="16" rx="8" fill="${t.dark?'#2c251d':'#efe6d6'}"/>
  <!-- sidebar -->
  <rect x="0" y="44" width="${sideW}" height="${H-44}" fill="${t.side}"/>
  <text x="22" y="58" font-family="${t.sans}" font-size="11" letter-spacing="1.5" fill="${t.soft}" opacity=".8">LIBRARY</text>
  ${rows}
  <!-- content -->
  <text x="188" y="96" font-family="${t.serif}" font-size="30" font-weight="700" fill="${t.ink}">${esc(t.title)}</text>
  <text x="188" y="120" font-family="${t.sans}" font-size="13" fill="${t.accent}">${esc(t.sub)}</text>
  <line x1="188" y1="138" x2="572" y2="138" stroke="${lineCol}"/>
  ${para}
  <!-- quote / code block -->
  <rect x="188" y="${232+t.para.length*26+6}" width="384" height="64" rx="10" fill="${t.card}" stroke="${lineCol}"/>
  <rect x="188" y="${232+t.para.length*26+6}" width="5" height="64" rx="2.5" fill="${t.accent}"/>
  <text x="208" y="${232+t.para.length*26+30}" font-family="${t.serif}" font-style="italic" font-size="15" fill="${t.ink}">${esc(t.quote)}</text>
  <text x="208" y="${232+t.para.length*26+52}" font-family="${t.sans}" font-size="11" fill="${t.soft}" opacity=".8">— Aura Reader</text>
</svg>`;
}
function esc(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}

for (const t of themes) {
  fs.writeFileSync(`${DIR}/${t.file}`, svg(t));
  console.log("wrote", t.file);
}
