import type { Metadata } from 'next';
import { ActionLink } from '@/components/ui/ActionLink';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="relative overflow-hidden">
      <div aria-hidden className="u-aurora" />
      <Container className="relative">
        <div className="flex min-h-[60vh] flex-col justify-center py-24">
          <Eyebrow tone="label">Error 404</Eyebrow>
          <h1 className="font-display text-fg mt-5 text-[clamp(2.5rem,7vw,4.5rem)] leading-[1] font-bold tracking-[-0.04em]">
            This page <span className="u-gradient-text">isn’t here</span>
          </h1>
          <p className="u-prose mt-6 text-lg">
            The link may be out of date, or the address slightly off. The work and the contact
            details are both one click away.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ActionLink href="/" variant="primary">
              Go to the homepage
            </ActionLink>
            <ActionLink href="/work/capo" variant="secondary">
              Read the Capo case study
            </ActionLink>
          </div>
        </div>
      </Container>
    </div>
  );
}
