export interface Education {
  readonly institution: string;
  readonly qualification: string;
  readonly location: string;
  readonly start: string;
  readonly end: string;
  readonly detail: string;
}

export const education: Education = {
  institution: 'Shanghai Jiao Tong University',
  qualification: 'Computer Science',
  location: 'Shanghai, China',
  start: 'Sep 2020',
  end: 'Jun 2024',
  detail:
    'Coursework across algorithms, software engineering, databases, operating systems, computer networks, and artificial intelligence, alongside team-based software projects.',
};
