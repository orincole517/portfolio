export interface ProjectLink {
  readonly label: string;
  readonly href: string;
  /** External links get an icon and rel attributes. */
  readonly external?: boolean;
}

export interface Project {
  readonly id: string;
  readonly name: string;
  /** What kind of thing this is — shown as the card's eyebrow. */
  readonly kind: string;
  readonly period: string;
  readonly tagline: string;
  readonly problem: string;
  readonly role: string;
  readonly contributions: ReadonlyArray<string>;
  readonly stack: ReadonlyArray<string>;
  readonly status: string;
  readonly links: ReadonlyArray<ProjectLink>;
}

export const featuredProject = {
  id: 'capo',
  name: 'Capo',
  kind: 'Chrome extension · Shipped product',
  period: '2025 — present',
  tagline:
    'Change the pitch, speed, and volume of audio playing on any page, without leaving the tab.',
  problem:
    'Musicians practice along to songs that live in a browser tab. The song is rarely in a comfortable key, and it is almost always too fast to learn from. The usual answer is to download the audio and open a desktop editor — which is where practice stops.',
  role: 'Frontend engineer on the Capo team at Elyra Lab. I own the practice interface and take it through testing and release.',
  contributions: [
    'Designed and built the practice controls — a ±12 semitone pitch dial with cents-level fine tuning, speed, volume, an A/B loop, and transport.',
    'Worked on the audio path that inserts an AudioWorklet processor into pages we don’t control, so pitch changes apply to media that is already playing.',
    'Built interfaces that span three JavaScript contexts — popup, background service worker, and two content scripts in separate worlds — under Manifest V3’s constraints.',
    'Took the work through testing and release, and kept it current through Chrome Web Store updates, with releases automated in CI.',
  ],
  stack: [
    'TypeScript',
    'React 19',
    'WXT (Manifest V3)',
    'Tailwind CSS',
    'Zustand',
    'Radix UI',
    'Web Audio · AudioWorklet',
    'Vitest',
    'Lingui',
    'GitHub Actions',
  ],
  status: 'Shipped on the Chrome Web Store and actively maintained.',
  links: [
    { label: 'Read the case study', href: '/work/capo' },
    { label: 'capotune.com', href: 'https://capotune.com', external: true },
    {
      label: 'Chrome Web Store',
      href: 'https://chromewebstore.google.com/detail/eeonohpepkpflpmfkdjcnkjhbfijdhlp',
      external: true,
    },
  ],
  image: {
    src: '/images/capo/popup-dark.webp',
    alt: 'The Capo popup: a pitch dial reading 0 semitones with a fine-tune slider in cents, speed and volume controls, A/B loop buttons, and a transport bar at the bottom.',
    width: 598,
    height: 1034,
  },
} as const;

export const supportingProjects: ReadonlyArray<Project> = [
  {
    id: 'capotune-website',
    name: 'capotune.com',
    kind: 'Product site & help center',
    period: '2025 — present',
    tagline: 'The marketing site, help center, and release notes for Capo.',
    problem:
      'An extension gets one small listing on a store page. Everything else a prospective user needs — what it does, how to use a control, what changed in the last release — has to live somewhere it can be linked to and searched.',
    role: 'Frontend work alongside the extension.',
    contributions: [
      'Built the site on the Next.js App Router with server components by default, and MDX for the long-form help and release content.',
      'Set up localization with next-intl so the site speaks the same languages as the extension.',
      'Structured the help center so a single answer can be linked directly from inside the extension.',
    ],
    stack: ['TypeScript', 'Next.js (App Router)', 'next-intl', 'MDX', 'Tailwind CSS'],
    status: 'Live at capotune.com.',
    links: [{ label: 'Visit capotune.com', href: 'https://capotune.com', external: true }],
  },
  {
    id: 'dalong',
    name: 'Client web applications',
    kind: 'DaLong Software Development Co. Ltd.',
    period: '2021 — 2025',
    tagline:
      'Four and a half years of responsive, user-facing web applications built with a design team.',
    problem:
      'Interfaces that looked settled in a design file still had to survive real browsers, real content lengths, and real devices — which is where most of the work actually was.',
    role: 'Frontend development, moving from implementing designs to owning interfaces.',
    contributions: [
      'Built responsive interfaces in HTML, CSS, and JavaScript against cross-browser reliability requirements.',
      'Turned user feedback into concrete UI and UX changes with the designers who drew them.',
      'Debugged rendering and behavior differences between browsers to keep the experience consistent.',
    ],
    stack: ['JavaScript', 'HTML', 'CSS', 'Responsive design', 'Cross-browser debugging'],
    status: 'Client work — no public artifacts I can share.',
    links: [],
  },
];
