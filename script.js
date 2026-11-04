
(() => {
  "use strict";
  const translations = {
    de: {
      skip:"Zum Inhalt springen",whatIDo:"What I Do",behind:"Behind the Scenes",beyond:"Beyond Work",
      eyebrow:"Kreativ. Neugierig. Echt.",heroSub:`<span class="hero-skill-list"><span>Webdesign</span><span>E-Learning</span><span>Medienproduktion</span></span><span class="hero-sub-tagline">&amp; ein Leben dazwischen.</span>`,
      heroItalic:"Same Person.<br>Different Passions.",seeWork:"Meine Arbeit entdecken",
      webDescription:"Moderne Websites & digitale Erlebnisse.",learningDescription:"Interaktive Lerninhalte & digitale Trainings.",
      mediaTitle:"Medienproduktion",mediaDescription:"Kreative Inhalte für Social Media & Branding.",aboutLabel:"ÜBER MICH",
      aboutTitle:"Nicht nur ein Job.<br><span>Viele Leidenschaften.</span>",
      aboutBody:"Ich bin Nick – kreativ, neugierig und offen für neue Ideen. Hier zeige ich, woran ich arbeite und was mich antreibt.",
      discoverLife:"Mehr über mich",contactText:"Kreative Projekte. Neue Ideen.<br>Spannende Menschen.<br>Ich freue mich auf den Austausch!",
      fullServiceEyebrow:"MEINE ARBEITSWEISE",fullServiceTitle:"Eine Idee.<br><span>Alles aus einer Hand.</span>",fullServiceLead:"Ich begleite digitale Projekte ganzheitlich – von der ersten Idee über Design und Entwicklung bis zu Medieninhalten und laufender Weiterentwicklung. Persönlich, kreativ und technisch durchdacht.",fullServiceLink:"Projekte und Arbeitsweise entdecken",step1:"01 · Idee & Konzeption",step2:"02 · Webdesign & Entwicklung",step3:"03 · Content & Medien",step4:"04 · Betreuung & Weiterentwicklung",zgShowcaseTitle:"Interaktiv & persönlich",zgShowcaseDesc:"Einblicke in die Gestaltung der Webanwendung und ihre interaktive Herzfunktion.",zgAnamneseTitle:"Digital statt Papier",zgAnamneseDesc:"Ein digitaler Anamnesebogen, der die Vorbereitung auf den Praxisbesuch vereinfacht.",zgPodcastTitle:"Von der Idee zur Umsetzung",zgPodcastDesc:"Konzeption, UI/UX Design und Entwicklung der Webanwendung – ergänzt durch Podcasts, Videos und weitere Inhalte.",storyEyebrow:"VON DER IDEE ZUR DIGITALEN LÖSUNG",storyTitle:"Wie ZAHNGEFÜHL entstand",storyText:"Ein beiläufiger Scherz über einen möglichen Podcast wurde zum Ausgangspunkt für eine größere Idee: ein digitales Zusatzangebot, das Patienten auch zwischen den Terminen begleitet. Daraus entwickelten sich unterschiedliche Inhalte und Funktionen – und die Plattform wächst weiter.",storyNote:"Ein gemeinsames Kundenprojekt mit der Zahnarztpraxis Dr. Lisa Ruhland. Die neue Animationsreihe befindet sich in Vorbereitung.",
      dmMe:"Email me",footer:"Made with curiosity ✳",backTop:"Nach oben",
      workIntro:"Einblicke hinter die Kulissen meiner kreativen Arbeit – zwischen Ideen, Content und digitalen Projekten.",
      workSamples:"ARBEITSPROBEN & EINBLICKE",zgStatus:"LIVE-PROJEKT · WIRD WEITERENTWICKELT",zgTitle:"ZAHNGEFÜHL – Digitaler Zahnbegleiter",zgPreviewTitle:"ZAHNGEFÜHL<br><strong>Digitaler Zahnbegleiter</strong>",zgFeatures:"Podcasts · Videos · Digitaler Anamnesebogen · Wissen",zgDesc:"Aus meiner Idee entstand ein digitaler Begleiter für die Praxis: mit Anamnese, Podcasts, Zahnwissen, Praxisnews und interaktiven Funktionen. Ich begleite Konzeption, digitale Umsetzung, Medienformate, Equipment-Auswahl und die laufende Weiterentwicklung. Neue Animationen sind in Arbeit.",ruhlandTitle:"Website-Redesign · Zahnarztpraxis Dr. Lisa Ruhland",ruhlandTag:"KUNDENPROJEKT · WEBDESIGN",ruhlandPreviewTitle:"Website-Redesign<br><strong>Zahnarztpraxis Dr. Lisa Ruhland</strong>",ruhlandPreviewSub:"Konzeption · Webdesign<br>Technische Umsetzung · Webtexte",ruhlandVisit:"Website ansehen ↗",ruhlandDesc:"Nach einer Übergangshomepage realisierte ich den neuen Webauftritt mit überarbeitetem Layout. Das Corporate Design entstand gemeinsam mit der Kundin und Media 9. Ich übernahm Konzeption, Webdesign, technische Umsetzung und die mit der Kundin abgestimmten Webtexte. Das Bildmaterial stellte die Kundin bereit.",viewWebsite:"Website ansehen",workCard1:"Behind the Scenes",workCard1Desc:"Kreative Arbeit hinter den Kulissen.",
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
      mediaTitle:"Media Production",mediaDescription:"Creative content for social media & branding.",aboutLabel:"ABOUT ME",
      aboutTitle:"More than a job.<br><span>Many passions.</span>",
      aboutBody:"I'm Nick – creative, curious, and always open to new ideas. Here's a glimpse of what I work on and what drives me.",
      discoverLife:"Get to know me",contactText:"Creative projects. New ideas.<br>Interesting people.<br>I'd love to connect!",
      fullServiceEyebrow:"HOW I WORK",fullServiceTitle:"One idea.<br><span>Everything from one partner.</span>",fullServiceLead:"I support digital projects end to end – from the initial idea to design, development, media content and ongoing improvements. Personal, creative and technically considered.",fullServiceLink:"Explore projects and my approach",step1:"01 · Ideas & Concept",step2:"02 · Web Design & Development",step3:"03 · Content & Media",step4:"04 · Ongoing Support & Evolution",zgShowcaseTitle:"Interactive & Personal",zgShowcaseDesc:"A look at the web app's design and interactive heart feature.",zgAnamneseTitle:"Digital Instead of Paper",zgAnamneseDesc:"A digital medical history form designed to make preparing for a dental appointment easier.",zgPodcastTitle:"From Idea to Implementation",zgPodcastDesc:"Concept, UI/UX design and web application development – complemented by podcasts, videos and ongoing content.",storyEyebrow:"FROM IDEA TO DIGITAL EXPERIENCE",storyTitle:"How ZAHNGEFÜHL began",storyText:"A casual joke about starting a podcast sparked a bigger idea: a digital companion for patients beyond their appointments. That initial thought grew into a collection of features and content formats – and the platform continues to evolve.",storyNote:"A client project developed in collaboration with Dr. Lisa Ruhland's dental practice. A new animation series is in preparation.",
      dmMe:"Email me",footer:"Made with curiosity ✳",backTop:"Back to top",
      workIntro:"A look behind the scenes of my creative work – from ideas and content to digital projects.",
      workSamples:"WORK SAMPLES & INSIGHTS",zgStatus:"LIVE PROJECT · CONTINUOUSLY EVOLVING",zgTitle:"ZAHNGEFÜHL – Digital Dental Companion",zgPreviewTitle:"ZAHNGEFÜHL<br><strong>Digital Dental Companion</strong>",zgFeatures:"Podcasts · Videos · Digital Medical History Form · Knowledge",zgDesc:"An idea I developed into a digital companion for the practice: medical history forms, podcasts, dental knowledge, practice news and interactive features. My work spans concept development, digital implementation, media formats, equipment selection and ongoing evolution. New animations are in progress.",ruhlandTitle:"Website Redesign · Dr. Lisa Ruhland Dental Practice",ruhlandTag:"CLIENT PROJECT · WEB DESIGN",ruhlandPreviewTitle:"Website Redesign<br><strong>Dr. Lisa Ruhland Dental Practice</strong>",ruhlandPreviewSub:"Concept · Web Design<br>Technical Implementation · Website Copy",ruhlandVisit:"View website ↗",ruhlandDesc:"After creating a temporary homepage, I built the new website with a redesigned layout. The corporate design was developed together with the client and Media 9. I handled the concept, web design, technical implementation and website copy, which was reviewed with the client. The client supplied the images.",viewWebsite:"Visit website",workCard1:"Behind the Scenes",workCard1Desc:"Creative work behind the scenes.",
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
