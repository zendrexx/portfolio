# Zendrex Adversalo — Portfolio

Personal portfolio built with Next.js 16, Tailwind CSS v4, and Framer Motion.
Dark vCard-style layout: profile sidebar + tabbed content (About / Resume / Portfolio / Contact).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

All text lives in [data/profile.ts](data/profile.ts) — bio, experience, skills, projects,
contact info. Edit that one file; no component changes needed.

## To finish setup

1. **Contact form** — grab a free access key at [web3forms.com](https://web3forms.com)
   (just enter your email), paste it into `.env.local` as `NEXT_PUBLIC_WEB3FORMS_KEY`,
   and restart the dev server. Messages will arrive at adversalozen8@gmail.com.
2. **Profile photo** — currently a "ZA" monogram. To use a photo, drop it in `public/`
   and swap the monogram block in [components/Sidebar.tsx](components/Sidebar.tsx) for an `<Image>`.
3. **Project screenshots** — cards use gradient placeholders; real screenshots can go in
   `public/projects/`.
4. **LinkedIn URL** — set to `linkedin.com/in/zendrex-adversalo` in `data/profile.ts`;
   correct it if your handle differs.

## Deploy

Push to GitHub and import on [Vercel](https://vercel.com) — zero config needed.
Remember to add `NEXT_PUBLIC_WEB3FORMS_KEY` in Vercel's environment variables.
