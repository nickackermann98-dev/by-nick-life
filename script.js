
const translations = {
  de: {
    skip: 'Zum Inhalt springen',
    navWork: 'Leistungen',
    navAbout: 'Über mich',
    navContact: 'Kontakt',
    eyebrow: 'Kreativ. Neugierig. Echt.',
    heroSub: 'Webdesign<br>E-Learning<br>Media Production<br>&amp; a life in between.',
    heroItalic: 'Same Person.<br>Different Passions.',
    discover: 'Mehr entdecken',
    photoPlaceholder: 'DEIN PORTRÄT HIER',
    photoHint: 'portrait.webp hinzufügen',
    whatIDo: 'WHAT I DO',
    webDescription: 'Moderne Websites & digitale Erlebnisse.',
    learningDescription: 'Interaktive Lerninhalte & digitale Trainings.',
    mediaDescription: 'Kreative Inhalte für Social Media & Branding.',
    beyondWork: 'BEYOND WORK',
    gym: 'Gym',
    gymDesc: 'Training. Fortschritt. Balance.',
    travel: 'Reisen',
    travelDesc: 'Neue Orte. Neue Perspektiven.',
    concerts: 'Konzerte',
    concertsDesc: 'Gute Musik. Gute Menschen.',
    aboutLabel: 'ÜBER MICH',
    aboutTitle: 'Nicht nur ein Job.<br><span>Viele Leidenschaften.</span>',
    aboutBody: 'Ich bin Nick – kreativ, neugierig und gerne offen für neue Ideen. Hier entsteht bald mehr über meinen Weg, meine Projekte und das, was mich antreibt.',
    contactText: 'Kreative Projekte. Neue Ideen.<br>Spannende Menschen.<br>Ich freue mich auf den Austausch!',
    dmMe: 'DM me',
    footer: 'Made with curiosity ✳',
    backTop: 'Nach oben ↑'
  },

  en: {
    skip: 'Skip to content',
    navWork: 'Services',
    navAbout: 'About',
    navContact: 'Contact',
    eyebrow: 'Creative. Curious. Real.',
    heroSub: 'Web Design<br>E-Learning<br>Media Production<br>&amp; a life in between.',
    heroItalic: 'Same Person.<br>Different Passions.',
    discover: 'Explore more',
    photoPlaceholder: 'YOUR PORTRAIT HERE',
    photoHint: 'Add portrait.webp',
    whatIDo: 'WHAT I DO',
    webDescription: 'Modern websites & digital experiences.',
    learningDescription: 'Interactive learning content & digital training.',
    mediaDescription: 'Creative content for social media & branding.',
    beyondWork: 'BEYOND WORK',
    gym: 'Gym',
    gymDesc: 'Training. Progress. Balance.',
    travel: 'Travel',
    travelDesc: 'New places. New perspectives.',
    concerts: 'Concerts',
    concertsDesc: 'Good music. Good people.',
    aboutLabel: 'ABOUT ME',
    aboutTitle: 'More than one job.<br><span>Many passions.</span>',
    aboutBody: 'I’m Nick – creative, curious and always open to new ideas. More about my journey, projects and motivations is coming soon.',
    contactText: 'Creative projects. New ideas.<br>Interesting people.<br>Let’s connect!',
    dmMe: 'DM me',
    footer: 'Made with curiosity ✳',
    backTop: 'Back to top ↑'
  }
};

// SPRACHUMSCHALTER

const toggle = document.getElementById('language-toggle');

let language = localStorage.getItem('nick-language') === 'en'
  ? 'en'
  : 'de';

function setLanguage(lang) {
  language = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = translations[lang][el.dataset.i18n];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = translations[lang][el.dataset.i18nHtml];
  });

  if (toggle) {
    toggle.innerHTML =
      (lang === 'de' ? 'EN' : 'DE') +
      ' <span aria-hidden="true">↗</span>';

    toggle.setAttribute(
      'aria-label',
      lang === 'de'
        ? 'Switch to English'
        : 'Zu Deutsch wechseln'
    );
  }

  localStorage.setItem('nick-language', lang);
}

if (toggle) {
  toggle.addEventListener('click', () => {
    setLanguage(language === 'de' ? 'en' : 'de');
  });
}

setLanguage(language);

// AKTUELLES JAHR

const yearElement = document.getElementById('year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// ORIGINALFOTOS – KORRIGIERTE BILDPFADE

const imageAssets = [
  ['.hero-visual', './portrait.webp'],
  ['.gym', './gym.webp'],
  ['.travel', './travel.webp'],
  ['.music', './concerts.webp']
];

// BILDER LADEN

imageAssets.forEach(([selector, url]) => {
  const img = new Image();

  img.onload = () => {
    const el = document.querySelector(selector);

    if (!el) return;

    el.classList.add('has-photo');

    if (selector !== '.hero-visual') {
      const cardArt = el.querySelector('.card-art');

      if (cardArt) {
        cardArt.style.backgroundImage = `
          linear-gradient(
            0deg,
            rgba(5,12,35,.3),
            rgba(5,12,35,.05)
          ),
          url("${url}")
        `;
      }
    }
  };

  img.onerror = () => {
    console.warn('Bild konnte nicht geladen werden:', url);
  };

  img.src = url;
});
