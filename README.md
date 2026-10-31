# Nick Ackermann – Personal Website

Responsive, bilingual (DE/EN) static portfolio website inspired by the supplied reference screenshot. No build step required.

## Preview locally

Open `index.html` in a browser, or run `python3 -m http.server 8000` in this folder and visit http://localhost:8000.

## Deploy on Cloudflare Pages

1. Create a GitHub repository and upload the contents of this folder (not the ZIP file itself).
2. In Cloudflare, open **Workers & Pages** → **Create** → **Pages** → connect to Git.
3. Select the repository. Set **Framework preset** to **None**, leave **Build command** empty, and set **Build output directory** to `/` (repository root). Deploy.
4. Cloudflare will provide a `*.pages.dev` URL. Add a custom domain in the Pages project settings if desired.

Alternative: Cloudflare Pages Direct Upload – upload the website folder as static assets.

## Fotos eingebunden

Die vier Originalfotos wurden als optimierte WebP-Dateien unter `assets/` eingebunden:

- `portrait.webp` – Amsterdam (Hero)
- `gym.webp` – Fitnessstudio
- `travel.webp` – Bali
- `concerts.webp` – Konzert / Nachtaufnahme

Die Dateien `index.html`, `styles.css`, `script.js` und den kompletten Ordner `assets/` bei GitHub hochladen und vorhandene Dateien ersetzen. Keine erneute Cloudflare-Einrichtung nötig.

## Inhalte anpassen

- Über-mich-Text in `script.js` für Deutsch und Englisch aktualisieren.
- Social-Links bei Bedarf in `index.html` ändern.

## Notes

No analytics, tracking cookies or contact form are included. Fonts load from Google Fonts; for fully self-hosted fonts, download appropriately licensed font assets and update `styles.css`. The language choice is saved in localStorage.
