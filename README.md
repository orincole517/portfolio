# orincole.dev — portfolio

The personal site of **Orin Cole**, Frontend Engineer. It is a portfolio,
and it is also meant to be read as a work sample: the same standards it claims
in prose — semantics, accessibility, responsiveness, performance — are the ones
it is built to.

Live site: _add your deployment URL here_

---

## Overview

Two routes, both statically rendered:

| Route        | What it is                                                         |
| ------------ | ------------------------------------------------------------------ |
| `/`          | Hero, selected work, about, experience, skills, education, contact |
| `/work/capo` | A long-form case study of Capo, the Chrome extension Orin ships    |

Content is separated from presentation: everything the site says lives in typed
modules under `src/content/`, and the components under `src/components/` render
that data. Changing a job title or adding a project means editing one object,
not hunting through JSX.

## Tech stack

- **Next.js (App Router)** — server components by default, file-based metadata
- **TypeScript**, strict, with `noUncheckedIndexedAccess` and no `any`
- **Tailwind CSS v4** — design tokens defined as CSS custom properties in
  `src/app/globals.css` and mapped into the Tailwind theme
- **next/font** — Space Grotesk, Inter, and JetBrains Mono, self-hosted
- **next/image** — WebP screenshots at fixed intrinsic dimensions

No UI kit, no animation library, no state library, no icon package. Nothing here
needed one, and every dependency you do not add is one you never have to upgrade.

## Key features

- **Server-first rendering.** Three client components in the whole site: the
  section nav, the mobile menu, and the copy-email button. Everything else is
  static HTML sent from the server.
- **One committed theme.** The site is dark on purpose, so every surface, state,
  and screenshot was designed against a single ground rather than two — no theme
  flash, no second palette to keep honest.
- **Scroll-linked chrome.** The header's progress bar and its active section
  link come from one passive scroll listener throttled to an animation frame
  (`useActiveSection`), shared with the case study's chapter nav. The bar is
  written straight to a transform, so tracking scroll never triggers a render.
- **Accessible by construction** — see the section below.
- **Real screenshots.** The Capo captures are the actual product UI, not mockups.

## Project structure

```
src/
├── app/
│   ├── layout.tsx          root layout: fonts, metadata, Person JSON-LD, landmarks
│   ├── page.tsx            homepage — composes the section components
│   ├── globals.css         design tokens, base layer, three utility classes
│   ├── not-found.tsx       styled 404
│   ├── robots.ts           robots.txt
│   ├── sitemap.ts          sitemap.xml
│   └── work/capo/page.tsx  the case study route
├── components/
│   ├── layout/             header, section nav, mobile nav, footer, skip link
│   ├── ui/                 Container, Section, SectionHeading, Eyebrow,
│   │                       ActionLink, Tag, SpecList, Figure, CopyButton
│   ├── sections/           one component per homepage band
│   └── case-study/         Chapter, ChapterNav, ArchitectureDiagram, PullQuote
├── content/                all copy and data, fully typed
│   ├── profile.ts          name, title, contact, hero and about copy
│   ├── projects.ts         featured + supporting projects
│   ├── experience.ts       roles and achievements
│   ├── skills.ts           skill groups
│   ├── education.ts        education
│   ├── navigation.ts       nav and rail items — one source for both
│   └── case-study.ts       the Capo case study, as typed content blocks
└── lib/
    ├── cn.ts               class name joiner
    ├── rich-text.tsx       renders **strong** and `code` in content strings
    ├── site.ts             deployment URL and site name
    └── use-active-section.ts  shared scroll-position hook
```

## Local development

Requires Node 20+ and pnpm (npm or yarn work too).

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

Other tasks:

```bash
pnpm typecheck    # tsc --noEmit
pnpm lint         # eslint
pnpm format       # prettier --write .
pnpm format:check # prettier --check .
```

## Build

```bash
pnpm build        # production build; both routes prerender to static HTML
pnpm start        # serve the production build locally
```

The build fails on type errors and lint errors by design — a broken build should
never reach a deploy.

## Deployment

The site deploys to **GitHub Pages** as a fully static export. Pushing to `main`
runs `.github/workflows/deploy.yml`, which typechecks, lints, builds, and
publishes — a failing check stops the deploy.

Three things make a Next.js app work on Pages, and all three are already set up:

| Concern            | How it is handled                                                           |
| ------------------ | --------------------------------------------------------------------------- |
| No Node server     | `output: 'export'` in `next.config.ts` writes plain HTML to `out/`          |
| Served from a path | `basePath` comes from `NEXT_PUBLIC_BASE_PATH`, set by the workflow          |
| `_next/` directory | `public/.nojekyll` stops Pages' Jekyll step from dropping `_`-prefixed dirs |

The workflow works out the URL by itself: a repo named `<user>.github.io` is a
user site and gets no base path, anything else is a project site served from
`/<repo>`. Nothing is hardcoded, so renaming the repo does not break the build.

**One-time setup:** in the repo, go to _Settings → Pages_ and set **Source** to
**GitHub Actions**. The first push to `main` then publishes the site.

To reproduce a Pages build locally:

```bash
NEXT_PUBLIC_BASE_PATH=/portfolio \
NEXT_PUBLIC_SITE_URL=https://<user>.github.io/portfolio \
pnpm build

npx serve out    # or any static file server
```

### A note on images

Pages has no image optimizer, so the build sets `images.unoptimized`. Next.js
does not apply `basePath` to unoptimized image sources, which would 404 every
image on a project site — so everything pointing at `public/` goes through
`asset()` in `src/lib/asset.ts`. If you ever move to a host that runs the
Next.js server, drop `output: 'export'` and `images.unoptimized`; `asset()` stays
correct either way.

## Accessibility

Treated as a requirement, not a pass at the end:

- Semantic landmarks — `header`, `nav`, `main`, `section`, `footer` — and one
  `h1` per page with headings in order after it.
- A skip link as the first item in the tab order.
- Visible focus rings everywhere, via a single `:focus-visible` rule; the mouse
  loses the ring, the keyboard never does.
- The mobile menu is a labelled disclosure: `aria-expanded`, `aria-controls`,
  Escape to close, and focus returned to the trigger.
- No information conveyed by hover alone, and no control that needs a pointer.
- Section navigation is duplicated in the header and footer, so the desktop-only
  rail is never the only route to anything.
- `prefers-reduced-motion` is honored globally — transitions and smooth scrolling
  are cut, not just softened.
- Every foreground/background pair was checked against WCAG AA before it shipped.

Lighthouse reports 100 for accessibility, best practices, and SEO on both routes.

## Performance

- Both routes are prerendered as static HTML.
- Client JavaScript is limited to three small components; nothing else hydrates.
- Fonts are self-hosted and preloaded through `next/font`, with `display: swap`
  and metric fallbacks, so text never shifts on load.
- The ambient gradients are CSS radial gradients on pseudo-elements — no images,
  no canvas, nothing animating on the main thread.
- Images declare intrinsic width and height and are lazy-loaded below the fold,
  so there is no layout shift.
- The interface leans on CSS for its motion; there is no animation runtime.
