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

## Replace placeholders

- Add `assets/portrait.jpg` for the hero portrait.
- Add `assets/gym.jpg`, `assets/travel.jpg`, `assets/concerts.jpg` for the three interest cards.
- Replace the About paragraph in `script.js` in both `de` and `en` translations.
- Edit links in `index.html` if your accounts change.
- Update the meta description and title in `index.html` as desired.

The design reference image is saved as `assets/design-reference.png` for your convenience and is not loaded by the website. Delete it before deploying if you prefer a smaller repository.

## Notes

No analytics, tracking cookies or contact form are included. Fonts load from Google Fonts; for fully self-hosted fonts, download appropriately licensed font assets and update `styles.css`. The language choice is saved in localStorage.
