export interface SkillGroup {
  readonly id: string;
  readonly title: string;
  readonly note: string;
  readonly items: ReadonlyArray<string>;
}

/** Groups and membership come straight from the résumé — nothing added. */
export const skillGroups: ReadonlyArray<SkillGroup> = [
  {
    id: 'frontend',
    title: 'Frontend engineering',
    note: 'What I write day to day.',
    items: [
      'JavaScript',
      'TypeScript',
      'React',
      'Vue.js',
      'HTML',
      'CSS',
      'Bootstrap',
      'Tailwind CSS',
    ],
  },
  {
    id: 'workflow',
    title: 'Product & workflow',
    note: 'How the work gets planned, checked, and shipped.',
    items: ['Agile / Scrum', 'GitHub Actions', 'Docker', 'Prettier', 'WXT'],
  },
  {
    id: 'quality',
    title: 'Quality & UX',
    note: 'The parts that decide whether an interface holds up.',
    items: [
      'Browser extension development',
      'Responsive interface design',
      'Cross-browser compatibility',
      'Testing & debugging',
    ],
  },
];
