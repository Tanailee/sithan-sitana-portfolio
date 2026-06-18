# Sithan Sitana — Professional Portfolio

A Next.js portfolio for a data-science master’s student and banking analytics professional in Phnom Penh. It presents verified project case studies, live Streamlit applications, research interests, professional experience, education, certificates, and a downloadable CV.

## Technology

- Next.js App Router, React, and TypeScript
- Tailwind CSS v4
- Lucide icons
- Native hydration-safe light/dark theme controller
- Typed local content with no database or unnecessary backend
- Vercel-compatible static generation

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Before deployment, run:

```bash
npm run lint
npm run typecheck
npm run build
```

## Content architecture

All project and application views read from the single source `src/data/projects.ts`. The Applications page filters that same array for records with `status: "Live"`, a `githubUrl`, and a `liveUrl`. Project detail routes are generated from each unique `slug`; do not create a second application dataset or duplicate route.

The `Project` interface in `src/data/types.ts` supports:

- Identity: `id`, `slug`, `title`, `shortTitle`
- Presentation: `summary`, `image`, `imageAlt`, `imagePosition`, `imageFit`, `categories`, `technologies`, `status`, `featured`
- Evidence: `githubUrl`, `liveUrl`
- Case study: `problem`, `solution`, `objectives`, `dataset`, `methodology`, `features`, `workflow`, `analyticalApproach`, `results`, `limitations`, `futureImprovements`

All claims should be traceable to a public README, source file, report, notebook, or information supplied directly by the portfolio owner. Omit unsupported metrics and outcomes.

## Add a project

1. Add a typed `Project` object to `src/data/projects.ts`.
2. Choose a unique, URL-safe `id` and `slug`.
3. Write a 25–45 word card summary that explains purpose, audience, approach, and significance.
4. Add only verified categories and technologies.
5. Provide honest data, result, and limitation notes; never infer metrics from a repository name.
6. Add a 16:9 screenshot, descriptive alternative text, and optional crop controls (`imagePosition`, `imageFit`).
7. Run lint, type-check, build, and confirm `/projects/[slug]` loads.

## Update GitHub and Streamlit links

Set `githubUrl` to the full public repository URL and `liveUrl` to the exact deployed Streamlit URL. External actions are rendered separately, open in a new tab, and use `rel="noopener noreferrer"`. Test both destinations before publishing.

Streamlit Community Cloud deployments may sleep after inactivity. A wake-up delay does not mean a link is broken.

## Screenshots

Project cards, application cards, and detail pages share `src/components/project-thumbnail.tsx`. It provides the consistent 16:9 frame, browser-window treatment, responsive Next.js image sizing, border, radius, theme-aware background, and non-distorting image fit.

Existing source screenshots live in `public/projects/`. Use a consistent 16:9 cover, ideally 1600×900 pixels or 1200×675 pixels, in WebP or optimized JPEG/PNG format. Use `imagePosition` to keep the important workflow in frame and use `imageFit: "cover"` unless the complete interface must remain visible. Never stretch screenshots.

Replacement-ready paths and composition notes are documented in `public/images/projects/README.md`. Current source filenames are:

- `smart-complaint-structuring-system.JPG`
- `khmer-english-scam-safety-assistant.JPG`
- `fixed-deposit-analysis-and-recommendation.JPG`
- `retail-sales-forecasting.JPG`
- `call-center-dashboard.JPG`
- `khmer-text-generator.JPG`
- `nlp-khmer-embeddings.JPG`

Do not use unrelated stock images or screenshots containing customer, bank-internal, or other confidential information.

## Featured projects

Set `featured: true` in `src/data/projects.ts`. The homepage derives its selection from the shared data and displays at most four projects in array order. Keep the selection balanced across practical banking applications, Khmer NLP, and analytical work.

## Project status

Use one of the interface-supported values:

- `Live`: a verified public deployment is available
- `Prototype`: functional concept without a verified live deployment
- `Under Development`: actively incomplete
- `Archived`: retained for reference but no longer maintained

Do not mark a project Live unless both its deployment status and URL have been verified.

## Other editable content

- `src/data/profile.ts`: identity, biography, contact links, skills, and goals
- `src/data/experience.ts`: work timeline
- `src/data/education.ts`: study history
- `src/data/research.ts`: interests and linked academic projects
- `src/data/certificates.ts`: learning records

Replace `public/professional-photo.jpg` and `public/cv.pdf` when updated. Review both for private metadata and personal details before publishing.

## Contact configuration

Verified contact details live in `src/data/profile.ts`. Leave `linkedin` empty until the exact public profile URL is confirmed; the Contact page will show a clear “Not configured” state instead of creating a fake link.

The current contact form is intentionally backend-free. It builds a `mailto:` link in the browser and opens the visitor’s email application. It does not transmit or store messages and requires no API key. To add a hosted form later, use a reputable provider or a server-side route, keep service credentials outside frontend code, validate and rate-limit submissions, add spam protection, document data retention, and store secrets only in server-side environment variables.

## Deployment and domain

1. Push the repository to GitHub.
2. Import it into Vercel.
3. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin.
4. Deploy and verify canonical URLs, Open Graph previews, sitemap, robots file, project links, screenshots, and CV.

GitHub Pages requires static export configuration, an appropriate `basePath`/`assetPrefix`, and publishing the generated `out` directory. Vercel is the recommended deployment target.

## Security and privacy

- Never commit API keys, tokens, customer records, or internal bank data.
- Demonstrations must use public, anonymized, educational, or synthetic data.
- Keep external links protected with `noopener noreferrer`.
- Do not publish a private phone number or home address by default.
- Verify every credential, metric, result, and repository claim before release.
- Never place secrets in `NEXT_PUBLIC_` environment variables.
