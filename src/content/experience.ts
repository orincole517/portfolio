export interface Role {
  readonly id: string;
  readonly company: string;
  readonly title: string;
  readonly location: string;
  readonly start: string;
  readonly end: string;
  /** Machine-readable for <time>, e.g. "2025-11". */
  readonly startISO: string;
  readonly endISO?: string;
  readonly summary: string;
  readonly highlights: ReadonlyArray<string>;
  readonly focus: ReadonlyArray<string>;
}

export const roles: ReadonlyArray<Role> = [
  {
    id: 'elyra-lab',
    company: 'Elyra Lab',
    title: 'Frontend Engineer',
    location: 'Myrtle Creek, OR · Remote',
    start: 'Nov 2025',
    end: 'Present',
    startISO: '2025-11',
    summary:
      'I work on Capo, a Chrome extension for musicians, as a frontend engineer on the team — I own the practice interface and follow it through to what ships on the Chrome Web Store.',
    highlights: [
      'Designed and developed the practice experience: the pitch, speed, and volume controls a musician reaches for while a song is playing, and the interactions around them.',
      'Built the extension’s interfaces in TypeScript and React with control clarity as the priority — someone mid-song should never have to stop and work out what a control does.',
      'Developed browser-extension features and integrated audio processing into the page’s playback path, so adjustments apply to media that is already running.',
      'Designed product features around how people actually practice a song, rather than around what the audio pipeline made easy to expose.',
      'Ran the cycle from planning through testing and release, and kept the extension current through Chrome Web Store updates.',
    ],
    focus: [
      'Interface ownership',
      'Browser extensions',
      'Interactive audio UI',
      'Testing',
      'Release',
    ],
  },
  {
    id: 'dalong',
    company: 'DaLong Software Development Co. Ltd.',
    title: 'Web Developer (Junior → Senior)',
    location: 'Shanghai, China',
    start: 'Apr 2021',
    end: 'Oct 2025',
    startISO: '2021-04',
    endISO: '2025-10',
    summary:
      'Four and a half years building user-facing web applications, moving from implementing designs to owning the interfaces themselves.',
    highlights: [
      'Built responsive web applications in HTML, CSS, and JavaScript, with usability and cross-browser reliability as the standing requirements rather than a final pass.',
      'Worked directly with designers to turn user feedback into concrete UI and UX changes.',
      'Troubleshot and debugged issues across multiple browsers to keep behavior and performance consistent.',
    ],
    focus: [
      'Responsive interfaces',
      'UX implementation',
      'Cross-browser debugging',
      'Design collaboration',
    ],
  },
];

export interface Achievement {
  readonly label: string;
  readonly detail: string;
}

export const achievements: ReadonlyArray<Achievement> = [
  {
    label: 'Shipped a real product',
    detail: 'Capo is live on the Chrome Web Store and still getting updates.',
  },
  {
    label: 'Across the whole cycle',
    detail:
      'Interface design, implementation, testing, and release — not just the handed-over parts.',
  },
  {
    label: 'Across disciplines',
    detail: 'Frontend engineering, product design, and user-focused development.',
  },
];
