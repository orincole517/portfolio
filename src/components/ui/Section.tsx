import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Container } from './Container';

interface SectionProps {
  readonly id: string;
  readonly children: ReactNode;
  readonly className?: string;
  /** Sections are the page's landmarks — each is labelled by its heading. */
  readonly labelledBy?: string;
}

export function Section({ id, children, className, labelledBy }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn('border-line scroll-mt-24 border-t py-20 sm:py-24 lg:py-32', className)}
    >
      <Container>{children}</Container>
    </section>
  );
}
