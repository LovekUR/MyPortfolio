# Lovepreet Kaur — Portfolio

A responsive, dark editorial portfolio built with **React + Vite + Tailwind CSS v4**. The visual details (orbit artwork, project illustrations, code card, moving ticker, and modal project details) are CSS/SVG-style UI elements, so no paid image assets or API keys are required.

## Included
- Responsive mobile, tablet, and desktop layout
- Animated hero artwork and custom project illustrations
- Clickable project cards with accessible keyboard support, project-detail modal, GitHub and LinkedIn profile links
- About, education, internship, training, toolkit, and contact sections
- Say Hello opens a pre-addressed Gmail compose page; Copy Email has a browser fallback
- Accessibility labels, reduced-motion support, SEO metadata
- GitHub Actions workflow to build and deploy to GitHub Pages
- No backend, database, paid service, or environment variables required

## Run locally
Install **Node.js 20 or newer** from https://nodejs.org/.

```bash
npm install
npm run dev
```

Open the local URL printed in your terminal.

To check the production build:

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages (free)

1. Create a new **public** repository on GitHub, for example `lovepreet-portfolio`.
2. Extract this ZIP and open the extracted folder in VS Code.
3. Open a terminal in that folder and run:

   ```bash
   git init
   git add .
   git commit -m "Build Lovepreet portfolio"
   git branch -M main
   git remote add origin https://github.com/LovekUR/lovepreet-portfolio.git
   git push -u origin main
   ```

   If you chose a different repository name, replace `lovepreet-portfolio` in the remote URL. If Git says the remote already exists, use `git remote set-url origin YOUR_REPOSITORY_URL`.

4. In GitHub, open the repository → **Settings → Pages**.
5. Under **Build and deployment → Source**, choose **GitHub Actions**.
6. Open the **Actions** tab and wait for **Deploy portfolio to GitHub Pages** to finish successfully.
7. Your site URL will appear in the deployment job. For a repository named `lovepreet-portfolio`, it will usually be `https://lovekUR.github.io/lovepreet-portfolio/`.

The workflow rebuilds and redeploys the site on every push to `main`.

### Important: use the repository name you actually created
The Vite config uses relative asset paths (`base: './'`) to work with GitHub Pages project URLs, so you do not need to change a base URL when naming the repository.

## Contact and project links
- The Say Hello and Email links open a pre-addressed Gmail compose page for `lovepkaur001@gmail.com`, so visitors do not need a desktop mail app configured.
- Project cards open a detail panel when clicked or activated with Enter/Space. Where an individual source repository was not provided, the panel links to your GitHub and LinkedIn profiles rather than inventing a repository URL.
- The public LinkedIn profile lists Myntra-clone, Functional-Myntra-clone, GAME (Bat, Ball and Stump), Simple-Calculator, and To-Do app; these are included in the portfolio project gallery.

## Personalise before publishing
- Review your public phone number and email in `src/App.jsx` before publishing.
- Confirm that each project description accurately represents your work. Project 2 and 3 are presented as learning/project concepts based on the supplied resume.
- LinkedIn is linked to the profile URL provided in your resume. I could not verify additional LinkedIn profile details from the supplied material, so no unconfirmed claims have been added.
- If you want the site to be contactable without opening the visitor's email app, a form backend (such as a free-tier form service) would need to be configured separately. This version intentionally avoids a non-working fake form.

## Troubleshooting
- **`npm` is not recognized:** install Node.js 20+, close and reopen the terminal, then run `node -v` and `npm -v`.
- **Page is blank after deploying:** check the Actions workflow first; open the deployment URL shown by GitHub rather than the repository URL.
- **Workflow did not run:** ensure the default branch is `main`, push the `.github/workflows/deploy.yml` file, and set Pages source to **GitHub Actions**.
- **Changes aren't showing:** commit and push them; then wait for the Actions deployment to finish. Hard-refresh the browser.
