const fs = require("fs");
let code = fs.readFileSync("assets/app.js", "utf8");

const T = {
  en: {
    q5: "Can I use Pro on multiple computers?",
    a5: "Pro is tied to your email account and works across devices. Activation keys are issued per device for offline use, so you can sign in on any computer to access Pro features.",
    q6: "Does it support math equations and diagrams?",
    a6: "Yes. JingMark renders KaTeX math formulas and Mermaid diagrams natively — just write standard LaTeX or Mermaid syntax in your Markdown.",
    q7: "How many languages are supported?",
    a7: "The interface is available in 13 languages: English, 中文, 繁體中文, 日本語, 한국어, Français, Deutsch, Español, Português, Русский, Tiếng Việt, Svenska, and العربية (RTL).",
    q8: "Can I preview before exporting?",
    a8: "Yes. Split-preview shows your content at narrow (680px), medium (820px), or wide (960px) widths, with a fullscreen mode for distraction-free proofreading."
  },
  zh: {
    q5: "我可以在多台电脑上使用 Pro 吗？",
    a5: "Pro 与你的邮箱账户绑定，可在多台设备间通用。离线激活按设备发放激活 Key，因此在任意电脑登录即可使用 Pro 功能。",
    q6: "是否支持数学公式与图表？",
    a6: "支持。JingMark 原生渲染 KaTeX 数学公式与 Mermaid 图表——只需在 Markdown 中书写标准 LaTeX 或 Mermaid 语法即可。",
    q7: "支持多少种语言？",
    a7: "界面提供 13 种语言：English、中文、繁體中文、日本語、한국어、Français、Deutsch、Español、Português、Русский、Tiếng Việt、Svenska 与 العربية（RTL）。",
    q8: "导出前可以预览吗？",
    a8: "可以。分屏预览支持窄（680px）、中（820px）、宽（960px）三种版心，并提供全屏模式，让你专注校对。"
  },
  "zh-tw": {
    q5: "我可以在多台電腦上使用 Pro 嗎？",
    a5: "Pro 與你的郵箱帳號綁定，可在多台裝置間通用。離線啟用會依裝置發放啟用 Key，因此在任意電腦登入即可使用 Pro 功能。",
    q6: "是否支援數學公式與圖表？",
    a6: "支援。JingMark 原生渲染 KaTeX 數學公式與 Mermaid 圖表——只需在 Markdown 中書寫標準 LaTeX 或 Mermaid 語法即可。",
    q7: "支援多少種語言？",
    a7: "介面提供 13 種語言：English、中文、繁體中文、日本語、한국어、Français、Deutsch、Español、Português、Русский、Tiếng Việt、Svenska 與 العربية（RTL）。",
    q8: "匯出前可以預覽嗎？",
    a8: "可以。分屏預覽支援窄（680px）、中（820px）、寬（960px）三種版心，並提供全螢幕模式，讓你專注校對。"
  },
  ja: {
    q5: "Pro を複数のパソコンで使えますか？",
    a5: "Pro はメールアカウントに紐づき、複数のデバイスで共通して使えます。オフライン有効化はデバイスごとにアクティベーション キーを発行するため、どのパソコンからでもログインして Pro 機能を利用できます。",
    q6: "数式や図表に対応していますか？",
    a6: "はい。JingMark は KaTeX の数式と Mermaid の図表をネイティブに描画します——Markdown に標準的な LaTeX または Mermaid の構文を書くだけで大丈夫です。",
    q7: "対応言語はいくつありますか？",
    a7: "インターフェイスは 13 言語に対応しています：English、中文、繁體中文、日本語、한국어、Français、Deutsch、Español、Português、Русский、Tiếng Việt、Svenska、العربية（RTL）。",
    q8: "書き出し前にプレビューできますか？",
    a8: "はい。分割プレビューは幅 680px（狭）、820px（中）、960px（広）の 3 段階で表示でき、集中して校正できる全画面モードも備えています。"
  },
  ko: {
    q5: "Pro를 여러 대의 컴퓨터에서 사용할 수 있나요?",
    a5: "Pro는 이메일 계정에 연결되어 여러 기기에서 공통으로 사용할 수 있습니다. 오프라인 정품 인증은 기기별로 활성화 키를 발급하므로, 어떤 컴퓨터에서든 로그인해 Pro 기능을 이용할 수 있습니다.",
    q6: "수식과 다이어그램을 지원하나요?",
    a6: "예. JingMark는 KaTeX 수식과 Mermaid 다이어그램을 네이티브로 렌더링합니다——Markdown에 표준 LaTeX 또는 Mermaid 구문을 작성하기만 하면 됩니다.",
    q7: "몇 개의 언어를 지원하나요?",
    a7: "인터페이스는 13개 언어를 지원합니다: English, 中文, 繁體中文, 日本語, 한국어, Français, Deutsch, Español, Português, Русский, Tiếng Việt, Svenska, العربية(RTL).",
    q8: "내보내기 전에 미리보기할 수 있나요?",
    a8: "예. 분할 미리보기는 좁게(680px), 중간(820px), 넓게(960px)의 세 가지 너비로 표시되며, 몰입형 교정을 위한 전체 화면 모드도 제공합니다."
  },
  fr: {
    q5: "Puis-je utiliser Pro sur plusieurs ordinateurs ?",
    a5: "Pro est lié à votre compte e-mail et fonctionne sur plusieurs appareils. Les clés d'activation sont délivrées par appareil pour une utilisation hors ligne, vous pouvez donc vous connecter sur n'importe quel ordinateur pour accéder aux fonctions Pro.",
    q6: "Prenez-vous en charge les équations mathématiques et les diagrammes ?",
    a6: "Oui. JingMark rend nativement les formules KaTeX et les diagrammes Mermaid — il suffit d'écrire la syntaxe LaTeX ou Mermaid standard dans votre Markdown.",
    q7: "Combien de langues sont prises en charge ?",
    a7: "L'interface est disponible en 13 langues : English, 中文, 繁體中文, 日本語, 한국어, Français, Deutsch, Español, Português, Русский, Tiếng Việt, Svenska et العربية (RTL).",
    q8: "Puis-je prévisualiser avant l'export ?",
    a8: "Oui. L'aperçu partagé affiche votre contenu en largeurs étroite (680px), moyenne (820px) ou large (960px), avec un mode plein écran pour une relecture sans distraction."
  },
  de: {
    q5: "Kann ich Pro auf mehreren Computern nutzen?",
    a5: "Pro ist an Ihr E-Mail-Konto gebunden und funktioniert geräteübergreifend. Aktivierungsschlüssel werden pro Gerät für die Offline-Nutzung ausgestellt, sodass Sie sich auf jedem Computer anmelden und Pro-Funktionen nutzen können.",
    q6: "Werden mathematische Formeln und Diagramme unterstützt?",
    a6: "Ja. JingMark rendert KaTeX-Formeln und Mermaid-Diagramme nativ — schreiben Sie einfach Standard-LaTeX- oder Mermaid-Syntax in Ihr Markdown.",
    q7: "Wie viele Sprachen werden unterstützt?",
    a7: "Die Oberfläche ist in 13 Sprachen verfügbar: English, 中文, 繁體中文, 日本語, 한국어, Français, Deutsch, Español, Português, Русский, Tiếng Việt, Svenska und العربية (RTL).",
    q8: "Kann ich vor dem Export eine Vorschau ansehen?",
    a8: "Ja. Die geteilte Vorschau zeigt Ihren Inhalt in schmaler (680px), mittlerer (820px) oder weiter (960px) Breite, mit einem Vollbildmodus für konzentriertes Korrekturlesen."
  },
  es: {
    q5: "¿Puedo usar Pro en varios ordenadores?",
    a5: "Pro está vinculado a tu cuenta de correo y funciona en varios dispositivos. Las claves de activación se emiten por dispositivo para uso sin conexión, así que puedes iniciar sesión en cualquier ordenador para acceder a las funciones Pro.",
    q6: "¿Admite ecuaciones matemáticas y diagramas?",
    a6: "Sí. JingMark renderiza fórmulas KaTeX y diagramas Mermaid de forma nativa — solo tienes que escribir la sintaxis LaTeX o Mermaid estándar en tu Markdown.",
    q7: "¿Cuántos idiomas se admiten?",
    a7: "La interfaz está disponible en 13 idiomas: English, 中文, 繁體中文, 日本語, 한국어, Français, Deutsch, Español, Português, Русский, Tiếng Việt, Svenska y العربية (RTL).",
    q8: "¿Puedo previsualizar antes de exportar?",
    a8: "Sí. La vista previa dividida muestra tu contenido en anchos estrecho (680px), medio (820px) o ancho (960px), con un modo de pantalla completa para una corrección sin distracciones."
  },
  pt: {
    q5: "Posso usar o Pro em vários computadores?",
    a5: "O Pro está vinculado à sua conta de e-mail e funciona em vários dispositivos. As chaves de ativação são emitidas por dispositivo para uso offline, então você pode entrar em qualquer computador para acessar os recursos Pro.",
    q6: "Você suporta equações matemáticas e diagramas?",
    a6: "Sim. O JingMark renderiza fórmulas KaTeX e diagramas Mermaid nativamente — basta escrever a sintaxe LaTeX ou Mermaid padrão no seu Markdown.",
    q7: "Quantos idiomas são suportados?",
    a7: "A interface está disponível em 13 idiomas: English, 中文, 繁體中文, 日本語, 한국어, Français, Deutsch, Español, Português, Русский, Tiếng Việt, Svenska e العربية (RTL).",
    q8: "Posso visualizar antes de exportar?",
    a8: "Sim. A visualização dividida mostra seu conteúdo em larguras estreita (680px), média (820px) ou larga (960px), com um modo de tela cheia para revisão sem distrações."
  },
  ru: {
    q5: "Можно ли использовать Pro на нескольких компьютерах?",
    a5: "Pro привязан к вашей учётной записи электронной почты и работает на разных устройствах. Ключи активации выдаются для каждого устройства для автономного использования, поэтому вы можете войти с любого компьютера и получить доступ к функциям Pro.",
    q6: "Поддерживаются ли математические формулы и диаграммы?",
    a6: "Да. JingMark отображает формулы KaTeX и диаграммы Mermaid встроенными средствами — достаточно написать стандартный синтаксис LaTeX или Mermaid в вашем Markdown.",
    q7: "Сколько языков поддерживается?",
    a7: "Интерфейс доступен на 13 языках: English, 中文, 繁體中文, 日本語, 한국어, Français, Deutsch, Español, Português, Русский, Tiếng Việt, Svenska и العربية (RTL).",
    q8: "Можно ли предварительно просмотреть перед экспортом?",
    a8: "Да. Раздельный предпросмотр показывает ваш контент в узком (680px), среднем (820px) или широком (960px) формате, а полноэкранный режим помогает сосредоточиться на вычитке."
  },
  vi: {
    q5: "Tôi có thể dùng Pro trên nhiều máy tính không?",
    a5: "Pro được liên kết với tài khoản email của bạn và hoạt động trên nhiều thiết bị. Khóa kích hoạt được cấp cho từng thiết bị để dùng ngoại tuyến, vì vậy bạn có thể đăng nhập trên bất kỳ máy tính nào để sử dụng tính năng Pro.",
    q6: "Có hỗ trợ công thức toán học và sơ đồ không?",
    a6: "Có. JingMark hiển thị trực tiếp công thức KaTeX và sơ đồ Mermaid — bạn chỉ cần viết cú pháp LaTeX hoặc Mermaid chuẩn trong Markdown.",
    q7: "Có bao nhiêu ngôn ngữ được hỗ trợ?",
    a7: "Giao diện hỗ trợ 13 ngôn ngữ: English, 中文, 繁體中文, 日本語, 한국어, Français, Deutsch, Español, Português, Русский, Tiếng Việt, Svenska và العربية (RTL).",
    q8: "Tôi có thể xem trước trước khi xuất không?",
    a8: "Có. Xem trước chia đôi hiển thị nội dung với chiều rộng hẹp (680px), trung bình (820px) hoặc rộng (960px), kèm chế độ toàn màn hình để hiệu đính không bị xao nhãng."
  },
  sv: {
    q5: "Kan jag använda Pro på flera datorer?",
    a5: "Pro är kopplad till ditt e-postkonto och fungerar på flera enheter. Aktiveringsnycklar utfärdas per enhet för offlineanvändning, så du kan logga in på valfri dator för att komma åt Pro-funktionerna.",
    q6: "Stöds matematiska formler och diagram?",
    a6: "Ja. JingMark återger KaTeX-formler och Mermaid-diagram nativt — du skriver bara standard LaTeX- eller Mermaid-syntax i din Markdown.",
    q7: "Hur många språk stöds?",
    a7: "Gränssnittet finns på 13 språk: English, 中文, 繁體中文, 日本語, 한국어, Français, Deutsch, Español, Português, Русский, Tiếng Việt, Svenska och العربية (RTL).",
    q8: "Kan jag förhandsgranska innan jag exporterar?",
    a8: "Ja. Delad förhandsgranskning visar ditt innehåll i smalt (680px), medel (820px) eller brett (960px) format, med ett helskärmsläge för störningsfri korrekturläsning."
  },
  ar: {
    q5: "هل يمكنني استخدام Pro على عدة أجهزة كمبيوتر؟",
    a5: "يرتبط Pro بحساب بريدك الإلكتروني ويعمل عبر عدة أجهزة. تُصدر مفاتيح التفعيل لكل جهاز للاستخدام دون اتصال، لذا يمكنك تسجيل الدخول من أي جهاز كمبيوتر للوصول إلى ميزات Pro.",
    q6: "هل يدعم المعادلات الرياضية والرسوم البيانية؟",
    a6: "نعم. يعرض JingMark معادلات KaTeX ومخططات Mermaid أصليًا — ما عليك سوى كتابة صيغة LaTeX أو Mermaid القياسية في Markdown الخاص بك.",
    q7: "كم عدد اللغات المدعومة؟",
    a7: "الواجهة متوفرة بـ 13 لغة: English و中文 و繁體中文 و日本語 و한국어 وFrançais وDeutsch وEspañol وPortuguês وРусский وTiếng Việt وSvenska والعربية (RTL).",
    q8: "هل يمكنني معاينة المحتوى قبل التصدير؟",
    a8: "نعم. يعرض المعاينة المقسمة محتواك بعرض ضيق (680px) أو متوسط (820px) أو عريض (960px)، مع وضع ملء الشاشة للمراجعة دون تشتيت."
  }
};

const order = ["en","zh","zh-tw","ja","ko","fr","de","es","pt","ru","vi","sv","ar"];
const keysArr = ["q5","a5","q6","a6","q7","a7","q8","a8"];
let offset = 0;
let inserted = 0;
for (const lg of order) {
  const blockStart = code.indexOf(`"${lg}":`, offset);
  if (blockStart < 0) { console.log("BLOCK_NOT_FOUND", lg); continue; }
  const a4 = code.indexOf(`"faq.a4":`, blockStart);
  if (a4 < 0) { console.log("A4_NOT_FOUND", lg); continue; }
  const lineEnd = code.indexOf("\n", a4);
  const ins = "\n" + keysArr.map(k => `    "faq.${k}": ${JSON.stringify(T[lg][k])}`).join(",\n") + ",\n";
  code = code.slice(0, lineEnd) + ins + code.slice(lineEnd);
  offset = lineEnd + ins.length;
  inserted++;
}
fs.writeFileSync("assets/app.js", code);
console.log("INSERTED_BLOCKS:", inserted);
