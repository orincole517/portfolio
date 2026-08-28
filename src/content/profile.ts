export interface ContactLink {
  readonly label: string;
  readonly href: string;
  readonly description: string;
}

export interface Profile {
  readonly name: string;
  readonly title: string;
  readonly availability: string;
  /** Short status line for the hero pill. */
  readonly status: string;
  readonly lede: string;
  readonly summary: string;
  /** One-sentence description for page metadata and link previews. */
  readonly metaDescription: string;
  readonly email: string;
  readonly links: {
    readonly github: ContactLink;
    readonly product: ContactLink;
  };
  /** Liner-notes block beside the hero. Facts only. */
  readonly specs: ReadonlyArray<{ readonly label: string; readonly value: string }>;
  readonly about: ReadonlyArray<string>;
}

export const profile: Profile = {
  name: 'Orin Cole',
  title: 'Frontend Engineer',
  availability: 'Remote',
  status: 'Open to frontend roles',
  lede: 'I build user-facing web products in TypeScript and React.',
  summary:
    'Right now that means Capo — a Chrome extension that lets musicians change the pitch, speed, and volume of audio playing on any page. I work on it as a frontend engineer with the team at Elyra Lab: the practice interface, the controls around it, and what ships to the Chrome Web Store.',
  metaDescription:
    'Frontend Engineer focused on TypeScript and React, building user-facing products that are clean, intuitive, and easy to use.',
  email: 'orin.cole517@outlook.com',
  links: {
    github: {
      label: 'github.com/orincole517',
      href: 'https://github.com/orincole517',
      description: 'Code, commits, and the extension work.',
    },
    product: {
      label: 'capotune.com',
      href: 'https://capotune.com',
      description: 'The product I build and maintain.',
    },
  },
  specs: [
    { label: 'Role', value: 'Frontend Engineer' },
    { label: 'Team', value: 'Capo, at Elyra Lab' },
    { label: 'Focus', value: 'Interactive interfaces, browser extensions' },
    { label: 'Stack', value: 'TypeScript · React · Tailwind CSS' },
    { label: 'Shipped', value: 'Chrome Web Store, maintained' },
    { label: 'Working', value: 'Remote' },
  ],
  about: [
    'I work on the part of a product people actually touch. In practice that means TypeScript and React, and interfaces where a control has to read correctly at a glance, respond immediately, and behave the same way on the second use as it did on the first.',
    'Capo is the clearest example of how I work. It answers a question worth answering — what would it take to move a song into a different key while it plays in a browser tab — and it is a real product on the Chrome Web Store. I work on it as a frontend engineer with the team at Elyra Lab, where I own the practice interface: the pitch, speed, and volume controls, the interactions around them, and the work of getting that through testing and release.',
    'Before that I spent four and a half years at DaLong Software Development building responsive web applications alongside designers, mostly closing the gap between how an interface is drawn and how it behaves in a real browser on a real device. That is still the work I like most: taking something that technically functions and making it reliable, fast, and obvious.',
  ],
};
