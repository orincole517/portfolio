import type { Metadata } from 'next';
import Link from 'next/link';
import { Chapter } from '@/components/case-study/Chapter';
import { ChapterNav } from '@/components/case-study/ChapterNav';
import { ActionLink } from '@/components/ui/ActionLink';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SpecList } from '@/components/ui/SpecList';
import { caseStudyMeta, chapters } from '@/content/case-study';
import { profile } from '@/content/profile';
import { featuredProject } from '@/content/projects';

const description = `${caseStudyMeta.subtitle} A case study by ${profile.name}: product design, frontend engineering, and shipping a Chrome extension.`;

export const metadata: Metadata = {
  title: 'Capo — case study',
  description,
  alternates: { canonical: '/work/capo' },
  openGraph: {
    type: 'article',
    url: '/work/capo',
    title: `Capo — case study — ${profile.name}`,
    description,
  },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Capo — a Chrome extension for musicians',
  description,
  author: { '@type': 'Person', name: profile.name },
  about: 'Browser extension development, Web Audio, frontend engineering',
};

export default function CapoCaseStudyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article>
        <header className="border-line relative overflow-hidden border-b pt-12 pb-16 sm:pt-16 lg:pb-20">
          <div aria-hidden className="u-aurora" />
          <Container className="relative">
            <Link
              href="/#work"
              className="u-label text-fg-faint hover:text-accent inline-flex items-center gap-2 transition-colors duration-200 motion-reduce:transition-none"
            >
              <span aria-hidden>←</span> Back to work
            </Link>

            <div className="mt-10 flex items-center gap-3">
              <span
                aria-hidden
                className="h-px w-8 rounded-full"
                style={{ backgroundImage: 'var(--gradient)' }}
              />
              <Eyebrow tone="label">Case study</Eyebrow>
            </div>
            <h1 className="font-display mt-5 text-[clamp(3rem,9vw,6rem)] leading-[0.95] font-bold tracking-[-0.045em]">
              <span className="u-gradient-text">{caseStudyMeta.title}</span>
            </h1>

            <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
              <p className="font-display text-fg text-[clamp(1.25rem,2.6vw,1.75rem)] leading-[1.28] font-medium tracking-[-0.015em] text-balance">
                {caseStudyMeta.subtitle}
              </p>

              <div className="u-card relative p-6 sm:p-7">
                <div aria-hidden className="u-card-edge absolute inset-x-0 -top-px h-px" />
                <Eyebrow tone="label" className="mb-4">
                  Project details
                </Eyebrow>
                <SpecList specs={caseStudyMeta.specs} />
                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
                  {featuredProject.links.slice(1).map((link) => (
                    <ActionLink key={link.href} href={link.href} variant="quiet" external>
                      {link.label}
                    </ActionLink>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </header>

        <Container>
          <div className="grid gap-12 py-8 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16 lg:py-12">
            <ChapterNav />

            <div className="mx-auto max-w-[46rem] min-w-0">
              {chapters.map((chapter, index) => (
                <Chapter key={chapter.id} chapter={chapter} index={index} />
              ))}

              <footer className="border-line border-t py-12">
                <Eyebrow>End of case study</Eyebrow>
                <p className="u-prose mt-4 text-lg">
                  If you want the version with the code open next to it, that conversation is
                  probably a better use of both our time than another page.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <ActionLink href="/#contact" variant="primary">
                    Get in touch
                  </ActionLink>
                  <ActionLink href="/#work" variant="secondary">
                    Back to the work
                  </ActionLink>
                </div>
              </footer>
            </div>
          </div>
        </Container>
      </article>
    </>
  );
}
