import { Container } from '@/components/ui/Container';

const notes = [
  {
    label: 'Stack',
    value:
      'Next.js App Router, TypeScript in strict mode, Tailwind CSS v4. No UI library, no animation library, no state library — nothing here needed one.',
  },
  {
    label: 'Rendering',
    value:
      'Every section is a server component. The only client components are the section nav with its progress bar, and the mobile menu.',
  },
  {
    label: 'Type',
    value:
      'Space Grotesk for display, Inter for text, JetBrains Mono for labels and data. Self-hosted through next/font, so no layout shift on load.',
  },
  {
    label: 'Media',
    value:
      'Screenshots are real captures of Capo, served as WebP at fixed dimensions through next/image and lazy-loaded below the fold.',
  },
  {
    label: 'Accessibility',
    value:
      'Semantic landmarks, one h1 per page, visible focus rings, a skip link, keyboard paths for everything, and prefers-reduced-motion honored globally. Lighthouse 100 on both routes.',
  },
];

/** Quiet proof: how the site you are reading was actually built. */
export function Colophon() {
  return (
    <section aria-labelledby="colophon-heading" className="border-line border-t py-16">
      <Container>
        <h2 id="colophon-heading" className="u-label text-fg-faint">
          Colophon — about this site
        </h2>

        <dl className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {notes.map((note) => (
            <div key={note.label}>
              <dt className="u-label text-label">{note.label}</dt>
              <dd className="text-fg-faint mt-2 text-[0.9375rem] leading-relaxed">
                {note.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
