/* =============================================================
 * JingMark — Legal page generator (English only)
 * Produces two static English pages:
 *   privacy.html, terms.html
 * No per-language variants, no Changelog page.
 * Run: node qa/gen_legal.js
 * ============================================================= */
const fs = require('fs');

const CSS = `
:root{
  --bg:#faf6ef; --paper:#fffdf8; --ink:#2c2620; --muted:#837259; --primary:#9a6a43; --primary-2:#b9824f; --primary-soft:#f1e3d3; --line:#ece1d2; --night:#26201a; --night-muted:#b3a392;
  --serif:Georgia,"Songti SC",serif; --sans:"Segoe UI",Roboto,"PingFang SC",sans-serif; --maxw:820px;
}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:var(--sans);background:var(--bg);color:var(--ink);line-height:1.7;-webkit-font-smoothing:antialiased}
a{color:var(--primary);text-decoration:none}
a:hover{text-decoration:underline}
header.nav{position:sticky;top:0;z-index:20;background:rgba(250,246,239,.86);backdrop-filter:blur(12px);border-bottom:1px solid var(--line)}
.nav-inner{max-width:var(--maxw);margin:0 auto;padding:16px 24px;display:flex;align-items:center;justify-content:space-between}
.brand{display:flex;align-items:center;gap:10px;font-family:var(--serif);font-weight:600;font-size:18px;color:var(--ink)}
.brand .logo{width:34px;height:34px;border-radius:10px;background:linear-gradient(140deg,#b9824f,#9a6a43);display:flex;align-items:center;justify-content:center}
.back{font-size:14px;font-weight:600;color:var(--primary)}
main{max-width:var(--maxw);margin:0 auto;padding:56px 24px 40px}
.eyebrow{display:inline-block;font-size:12.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--primary);margin-bottom:14px}
h1{font-family:var(--serif);font-size:38px;font-weight:600;line-height:1.15;margin-bottom:8px}
.updated{font-size:13.5px;color:var(--muted);margin-bottom:36px}
h2{font-family:var(--serif);font-size:22px;font-weight:600;margin:34px 0 10px}
p{font-size:15.5px;color:var(--ink-soft,#4a4138);margin:10px 0}
ul{margin:10px 0 10px 22px;font-size:15.5px;color:var(--ink-soft,#4a4138)}
li{margin:6px 0}
.card{background:var(--paper);border:1px solid var(--line);border-radius:16px;padding:14px 20px;margin:14px 0}
footer{background:var(--night);color:var(--night-muted);margin-top:60px;padding:40px 24px}
.foot-inner{max-width:var(--maxw);margin:0 auto;display:flex;flex-direction:column;align-items:center;gap:16px;text-align:center}
.foot-links{display:flex;gap:24px;flex-wrap:wrap;justify-content:center}
.foot-links a{font-size:13.5px;color:var(--night-muted)}
.foot-links a:hover{color:#fff}
.foot-copy{font-size:12.5px}
`;

const LOGO = `<svg width="18" height="18" viewBox="0 0 48 48" fill="none"><ellipse cx="24" cy="10.5" rx="4.5" ry="5.5" fill="#fff4d8" fill-opacity="0.4"/><circle cx="24" cy="10.5" r="1.6" fill="#fffaf0"/><path d="M23 12.5L12.2 35c-.5 1 .5 1.3 1.5 1.3H17c1 0 1.5-.3 2-1.3l2.5-6.5H23Z" fill="#fffdf8"/><path d="M25 12.5L35.8 35c.5 1-.5 1.3-1.5 1.3H31c-1 0-1.5-.3-2-1.3l-2.5-6.5H25Z" fill="#fffdf8" fill-opacity="0.85"/><path d="M21.8 27 24 23.2 26.2 27Z" fill="#9a6a43"/></svg>`;

/* ===================== English content ===================== */
const CONTACT = `<p>Support &amp; legal contact: <a href="mailto:fenghua25@gmail.com">fenghua25@gmail.com</a> (replies within 2 business days).</p>`;
const T = {
  back: `← Back to home`, home: `Home`, privacy: `Privacy`, terms: `Terms`, contact: `Support`,
  copy: `© 2026 JingMark · A warm Markdown reader &amp; writer for the browser.`,
  privacyPage: {
    eyebrow: `Legal`, title: `Privacy Policy`, updated: `Last updated: August 2026`,
    intro: `<strong>JingMark is local-first.</strong> Every file you open and edit stays on your device. We do not upload, sync, or transmit your documents to any server.`,
    sections: [
      { h: `1. What we collect`, body: `<ul><li><strong>For free users:</strong> nothing. No account is required to read and write Markdown.</li><li><strong>For Pro users:</strong> only your email address and payment state (active / inactive), used to verify and sync your Pro license.</li></ul>` },
      { h: `2. File access`, body: `<p>JingMark reads and writes only the folders you explicitly authorize through the File System Access API. You can revoke access at any time from your browser’s site settings. We never read files outside the folders you choose.</p>` },
      { h: `3. Payments`, body: `<p>Pro purchases are processed by our payment partner <strong>Creem</strong>. JingMark never stores your card details; payment information is handled entirely by Creem under their own privacy policy.</p>` },
      { h: `4. Rendering &amp; security`, body: `<p>All Markdown rendering and export happen locally. Every render is sanitized (DOMPurify), third-party libraries (marked, Vditor, docx) are bundled inside the extension, and only local scripts ever run under a strict Content Security Policy.</p>` },
      { h: `5. Children`, body: `<p>JingMark is not directed at children under 13 and we do not knowingly collect their data.</p>` },
      { h: `6. Changes`, body: `<p>We may update this policy and will post the new version here.</p>` },
      { h: `7. How to contact us`, body: CONTACT }
    ]
  },
  termsPage: {
    eyebrow: `Legal`, title: `Terms of Service`, updated: `Last updated: August 2026`,
    sections: [
      { h: `1. Acceptance`, body: `<p>By installing or using JingMark you agree to these terms. The extension is provided “as is” for reading and writing Markdown on your own device.</p>` },
      { h: `2. License &amp; use`, body: `<p>JingMark is licensed for personal and commercial use. You may not reverse-engineer, redistribute, or use the software to violate any law.</p>` },
      { h: `3. Pro license`, body: `<ul><li>Pro is a <strong>one-time purchase</strong> that unlocks all 46 themes, native Word/PDF export, WYSIWYG editing, multi-root management, and more.</li><li>Pro is tied to the email account used at purchase and works across the devices you sign in to.</li></ul>` },
      { h: `4. Payments &amp; refunds`, body: `<p>Payments are handled by Creem. Refunds follow Creem’s refund policy and applicable consumer law. Activation keys are issued per device for offline use.</p>` },
      { h: `5. Intellectual property`, body: `<p>The software, name, and brand assets are owned by JingMark. Your documents remain entirely yours.</p>` },
      { h: `6. Disclaimer &amp; termination`, body: `<p>The software is provided without warranty. We may suspend access for abuse. These terms may change; continued use after changes constitutes acceptance.</p>` },
      { h: `7. Contact`, body: CONTACT }
    ]
  }
};

/* ===================== Render ===================== */
function footer(t) {
  return `
<footer><div class="foot-inner">
  <div class="foot-links">
    <a href="privacy.html">${t.privacy}</a>
    <a href="terms.html">${t.terms}</a>
    <a href="index.html">${t.home}</a>
    <a href="mailto:fenghua25@gmail.com">${t.contact}</a>
  </div>
  <p class="foot-copy">${t.copy}</p>
</div></footer>`;
}

function renderPage(kind) {
  const data = T[kind + 'Page'];
  const introHtml = data.intro ? `\n  <div class="card">${data.intro}</div>` : '';
  const mainInner = `
  <span class="eyebrow">${data.eyebrow}</span>
  <h1>${data.title}</h1>
  <p class="updated">${data.updated}</p>${introHtml}
${data.sections.map(function (s) {
  return `  <h2>${s.h}</h2>\n  ${s.body}`;
}).join('\n')}`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${data.title} · JingMark</title>
<meta name="description" content="${data.title} for JingMark, a local-first Markdown reader &amp; writer.">
<link rel="icon" type="image/svg+xml" href="favicon.svg">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap">
<style>${CSS}</style>
</head>
<body>
<header class="nav"><div class="nav-inner">
  <a class="brand" href="index.html"><span class="logo" aria-hidden="true">${LOGO}</span>JingMark</a>
  <a class="back" href="index.html">${T.back}</a>
</div></header>
<main>${mainInner}</main>${footer(T)}
</body>
</html>`;
}

/* ===================== Emit ===================== */
fs.writeFileSync('privacy.html', renderPage('privacy'));
fs.writeFileSync('terms.html', renderPage('terms'));
console.log('Generated privacy.html + terms.html (English only).');
