export interface NavItem {
  readonly id: string;
  readonly label: string;
  readonly href: string;
}

/** One source for the header links, the mobile sheet, and section tracking. */
export const primaryNav: ReadonlyArray<NavItem> = [
  { id: 'work', label: 'Work', href: '/#work' },
  { id: 'about', label: 'About', href: '/#about' },
  { id: 'experience', label: 'Experience', href: '/#experience' },
  { id: 'skills', label: 'Skills', href: '/#skills' },
  { id: 'contact', label: 'Contact', href: '/#contact' },
];
