
(() => {
  "use strict";
  const translations = {
    de: {
      skip:"Zum Inhalt springen",whatIDo:"What I Do",behind:"Behind the Scenes",beyond:"Beyond Work",
      eyebrow:"Kreativ. Neugierig. Echt.",heroSub:`<span class="hero-skill-list"><span>Webdesign</span><span>E-Learning</span><span>Media Production</span></span><span class="hero-sub-tagline">&amp; a life in between.</span>`,
      heroItalic:"Same Person.<br>Different Passions.",seeWork:"Meine Arbeit entdecken",
      webDescription:"Moderne Websites & digitale Erlebnisse.",learningDescription:"Interaktive Lerninhalte & digitale Trainings.",
      mediaDescription:"Kreative Inhalte für Social Media & Branding.",aboutLabel:"ÜBER MICH",
      aboutTitle:"Nicht nur ein Job.<br><span>Viele Leidenschaften.</span>",
      aboutBody:"Ich bin Nick – kreativ, neugierig und offen für neue Ideen. Hier zeige ich, woran ich arbeite und was mich antreibt.",
      discoverLife:"Mehr über mich",contactText:"Kreative Projekte. Neue Ideen.<br>Spannende Menschen.<br>Ich freue mich auf den Austausch!",
      dmMe:"Email me",footer:"Made with curiosity ✳",backTop:"Nach oben",
      workIntro:"Einblicke hinter die Kulissen meiner kreativen Arbeit – zwischen Ideen, Content und digitalen Projekten.",
      workSamples:"ARBEITSPROBEN & EINBLICKE",zgStatus:"IN ENTWICKLUNG · INHALTE WERDEN ERGÄNZT",zgTitle:"ZAHNGEFÜHL – Digitaler Zahnbegleiter",zgFeatures:"Podcasts · Videos · Digitaler Anamnesebogen · Wissen",zgDesc:"Eine Webanwendung rund um Zahngesundheit und Patientenaufklärung mit Podcasts, Videos, Wissensbeiträgen und digitalem Anamnesebogen. Aktuell in Entwicklung; die Inhalte werden noch ergänzt.",ruhlandTitle:"Website-Redesign · Zahnarztpraxis Dr. Lisa Ruhland",ruhlandDesc:"Nach einer Übergangshomepage realisierte ich den neuen Webauftritt mit überarbeitetem Layout. Das Corporate Design entstand gemeinsam mit der Kundin und Media 9. Ich übernahm Konzeption, Webdesign, technische Umsetzung und die mit der Kundin abgestimmten Webtexte. Das Bildmaterial stellte die Kundin bereit.",viewWebsite:"Website ansehen",workCard1:"Behind the Scenes",workCard1Desc:"Kreative Arbeit hinter den Kulissen.",
      workCard2:"Podcastaufnahme",workCard2Desc:"Ein Blick hinter die Kulissen unserer Podcastaufnahme.",
      moreComing:"Weitere Arbeitsproben folgen.",moreComingText:"Diese Galerie wird nach und nach um neue Projekte erweitert.",
      moreProfiles:"MEHR ÜBER MEINE ARBEIT",profileTitle:"Erfahrung. Projekte.<br><span>Mehr Details.</span>",
      profileText:"Ausführliche Informationen zu meinem beruflichen Werdegang und meinen Leistungen findest du auf meinen Profilen.",
      lifeIntro:"Nicht nur ein Job. Auch Bewegung, neue Orte und unvergessliche Momente gehören zu mir.",
      lifeMoments:"DAS LEBEN DAZWISCHEN",gym:"Gym",gymDesc:"Training. Fortschritt. Balance.",
      travel:"Reisen",travelDesc:"Neue Orte. Neue Perspektiven.",concerts:"Konzerte",concertsDesc:"Gute Musik. Gute Menschen."
    },
    en: {
      skip:"Skip to content",whatIDo:"What I Do",behind:"Behind the Scenes",beyond:"Beyond Work",
      eyebrow:"Creative. Curious. Authentic.",heroSub:`<span class="hero-skill-list"><span>Web Design</span><span>E-Learning</span><span>Media Production</span></span><span class="hero-sub-tagline">&amp; a life in between.</span>`,
      heroItalic:"Same Person.<br>Different Passions.",seeWork:"Explore my work",
      webDescription:"Modern websites & digital experiences.",learningDescription:"Interactive learning content & digital training.",
      mediaDescription:"Creative content for social media & branding.",aboutLabel:"ABOUT ME",
      aboutTitle:"More than a job.<br><span>Many passions.</span>",
      aboutBody:"I'm Nick – creative, curious, and always open to new ideas. Here's a glimpse of what I work on and what drives me.",
      discoverLife:"Get to know me",contactText:"Creative projects. New ideas.<br>Interesting people.<br>I'd love to connect!",
      dmMe:"Email me",footer:"Made with curiosity ✳",backTop:"Back to top",
      workIntro:"A look behind the scenes of my creative work – from ideas and content to digital projects.",
      workSamples:"WORK SAMPLES & INSIGHTS",zgStatus:"IN DEVELOPMENT · CONTENT BEING ADDED",zgTitle:"ZAHNGEFÜHL – Digital Dental Companion",zgFeatures:"Podcasts · Videos · Digital Medical History Form · Knowledge",zgDesc:"A web application focused on dental health and patient education, featuring podcasts, videos, educational articles and a digital medical history form. Currently in development; content is still being added.",ruhlandTitle:"Website Redesign · Dr. Lisa Ruhland Dental Practice",ruhlandDesc:"After creating a temporary homepage, I built the new website with a redesigned layout. The corporate design was developed together with the client and Media 9. I handled the concept, web design, technical implementation and website copy, which was reviewed with the client. The client supplied the images.",viewWebsite:"Visit website",workCard1:"Behind the Scenes",workCard1Desc:"Creative work behind the scenes.",
      workCard2:"Podcast Recording",workCard2Desc:"A behind-the-scenes look at our podcast recording.",
      moreComing:"More work samples coming soon.",moreComingText:"I'll keep adding new projects to this gallery.",
      moreProfiles:"MORE ABOUT MY WORK",profileTitle:"Experience. Projects.<br><span>More details.</span>",
      profileText:"Find out more about my professional background and services on my profiles.",
      lifeIntro:"More than work. Movement, new places and unforgettable moments are part of who I am.",
      lifeMoments:"LIFE IN BETWEEN",gym:"Gym",gymDesc:"Training. Progress. Balance.",
      travel:"Travel",travelDesc:"New places. New perspectives.",concerts:"Concerts",concertsDesc:"Great music. Great people."
    }
  };
  const toggle = document.getElementById("language-toggle");
  const label = document.getElementById("language-label");
  const menu = document.getElementById("menu-toggle");
  const nav = document.getElementById("primary-nav");
  let lang = "de";
  try { if (localStorage.getItem("by-nick-language") === "en") lang = "en"; } catch (_) {}
  function setLanguage(next) {
    lang = next;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (translations[lang][key] !== undefined) el.textContent = translations[lang][key];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(el => {
      const key = el.dataset.i18nHtml;
      if (translations[lang][key] !== undefined) el.innerHTML = translations[lang][key];
    });
    if (label) label.textContent = lang === "de" ? "EN" : "DE";
    if (toggle) toggle.setAttribute("aria-label",lang === "de" ? "Switch to English" : "Zu Deutsch wechseln");
    if (menu) menu.setAttribute("aria-label",lang === "de" ? (menu.getAttribute("aria-expanded") === "true" ? "Menü schließen" : "Menü öffnen") : (menu.getAttribute("aria-expanded") === "true" ? "Close menu" : "Open menu"));
    try { localStorage.setItem("by-nick-language",lang); } catch (_) {}
  }
  toggle?.addEventListener("click", () => setLanguage(lang === "de" ? "en" : "de"));
  function closeMenu() {
    nav?.classList.remove("is-open");
    menu?.setAttribute("aria-expanded","false");
    if (menu) menu.setAttribute("aria-label",lang === "de" ? "Menü öffnen" : "Open menu");
  }
  menu?.addEventListener("click", () => {
    const open = menu.getAttribute("aria-expanded") !== "true";
    menu.setAttribute("aria-expanded",String(open));
    nav?.classList.toggle("is-open",open);
    menu.setAttribute("aria-label",lang === "de" ? (open ? "Menü schließen" : "Menü öffnen") : (open ? "Close menu" : "Open menu"));
  });
  nav?.querySelectorAll("a").forEach(a => a.addEventListener("click",closeMenu));
  document.addEventListener("keydown",e => { if(e.key === "Escape") closeMenu(); });
  document.addEventListener("click",e => { if(menu && nav && !menu.contains(e.target) && !nav.contains(e.target)) closeMenu(); });
  const year = document.getElementById("year");
  if(year) year.textContent = new Date().getFullYear();
  setLanguage(lang);
})();
