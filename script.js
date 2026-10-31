const translations = {
  de: {workHeading:'BEHIND THE SCENES',workTitle:'Creative Work.<br><span>In Action.</span>',workIntro:'Einblicke in kreative Momente bei der Arbeit – zwischen Content, Ideen und Praxisalltag.',workCard1:'Behind the Scenes',workCard1Desc:'Praxisalltag. Einblicke. Momente.',workCard2:'Content & Praxis',workCard2Desc:'Kreativität trifft Praxisalltag.',skip:'Zum Inhalt springen',navWork:'Leistungen',navAbout:'Über mich',navContact:'Kontakt',eyebrow:'Kreativ. Neugierig. Echt.',heroSub:'Webdesign<br>E-Learning<br>Media Production<br>&amp; a life in between.',heroItalic:'Same Person.<br>Different Passions.',discover:'Mehr entdecken',photoPlaceholder:'DEIN PORTRÄT HIER',photoHint:'assets/portrait.webp hinzufügen',whatIDo:'WHAT I DO',webDescription:'Moderne Websites & digitale Erlebnisse.',learningDescription:'Interaktive Lerninhalte & digitale Trainings.',mediaDescription:'Kreative Inhalte für Social Media & Branding.',beyondWork:'BEYOND WORK',gym:'Gym',gymDesc:'Training. Fortschritt. Balance.',travel:'Reisen',travelDesc:'Neue Orte. Neue Perspektiven.',concerts:'Konzerte',concertsDesc:'Gute Musik. Gute Menschen.',aboutLabel:'ÜBER MICH',aboutTitle:'Nicht nur ein Job.<br><span>Viele Leidenschaften.</span>',aboutBody:'Ich bin Nick – kreativ, neugierig und gerne offen für neue Ideen. Hier entsteht bald mehr über meinen Weg, meine Projekte und das, was mich antreibt.',contactText:'Kreative Projekte. Neue Ideen.<br>Spannende Menschen.<br>Ich freue mich auf den Austausch!',dmMe:'DM me',footer:'Made with curiosity ✳',backTop:'Nach oben ↑'},
  en: {workHeading:'BEHIND THE SCENES',workTitle:'Creative Work.<br><span>In Action.</span>',workIntro:'A look at creative moments at work – from content and ideas to everyday practice.',workCard1:'Behind the Scenes',workCard1Desc:'Everyday work. Insights. Moments.',workCard2:'Content & Practice',workCard2Desc:'Where creativity meets everyday work.',skip:'Skip to content',navWork:'Services',navAbout:'About',navContact:'Contact',eyebrow:'Creative. Curious. Real.',heroSub:'Web Design<br>E-Learning<br>Media Production<br>&amp; a life in between.',heroItalic:'Same Person.<br>Different Passions.',discover:'Explore more',photoPlaceholder:'YOUR PORTRAIT HERE',photoHint:'Add assets/portrait.webp',whatIDo:'WHAT I DO',webDescription:'Modern websites & digital experiences.',learningDescription:'Interactive learning content & digital training.',mediaDescription:'Creative content for social media & branding.',beyondWork:'BEYOND WORK',gym:'Gym',gymDesc:'Training. Progress. Balance.',travel:'Travel',travelDesc:'New places. New perspectives.',concerts:'Concerts',concertsDesc:'Good music. Good people.',aboutLabel:'ABOUT ME',aboutTitle:'More than one job.<br><span>Many passions.</span>',aboutBody:'I’m Nick – creative, curious and always open to new ideas. More about my journey, projects and motivations is coming soon.',contactText:'Creative projects. New ideas.<br>Interesting people.<br>Let’s connect!',dmMe:'DM me',footer:'Made with curiosity ✳',backTop:'Back to top ↑'}
};
const toggle=document.getElementById('language-toggle');
let language=localStorage.getItem('nick-language')==='en'?'en':'de';
function setLanguage(lang){language=lang;document.documentElement.lang=lang;document.querySelectorAll('[data-i18n]').forEach(el=>{el.textContent=translations[lang][el.dataset.i18n]});document.querySelectorAll('[data-i18n-html]').forEach(el=>{el.innerHTML=translations[lang][el.dataset.i18nHtml]});toggle.innerHTML=(lang==='de'?'EN':'DE')+' <span aria-hidden="true">↗</span>';toggle.setAttribute('aria-label',lang==='de'?'Switch to English':'Zu Deutsch wechseln');localStorage.setItem('nick-language',lang)}
toggle.addEventListener('click',()=>setLanguage(language==='de'?'en':'de'));setLanguage(language);
document.getElementById('year').textContent=new Date().getFullYear();
// Die Fotos liegen direkt neben index.html im Hauptverzeichnis.
const portrait = document.querySelector('.hero-visual');
if (portrait) {
  const preload = new Image();
  preload.onload = () => portrait.classList.add('has-photo');
  preload.src = './portrait.webp';
}

// Echte img-Elemente statt stark beschnittener CSS-Hintergrundbilder.
const lifeImages = [
  ['.gym', './gym.webp', 'Nick im Fitnessstudio'],
  ['.travel', './travel.webp', 'Nick auf Reisen'],
  ['.music', './concerts.webp', 'Nick mit einem Freund bei Nacht']
];
lifeImages.forEach(([selector, src, alt]) => {
  const card = document.querySelector(selector);
  const art = card?.querySelector('.card-art');
  if (!art) return;
  const image = document.createElement('img');
  image.className = 'life-photo';
  image.src = src;
  image.alt = alt;
  image.loading = 'lazy';
  image.decoding = 'async';
  image.addEventListener('load', () => card.classList.add('has-image'));
  art.prepend(image);
});
