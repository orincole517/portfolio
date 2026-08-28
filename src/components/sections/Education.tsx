import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { education } from '@/content/education';

export function Education() {
  return (
    <Section id="education" labelledBy="education-heading">
      <SectionHeading id="education-heading" eyebrow="Education" title="Where I trained" />

      <article className="u-card p-6 sm:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <h3 className="font-display text-fg text-2xl font-bold tracking-[-0.02em]">
            {education.qualification}
          </h3>
          <p className="text-fg-faint font-mono text-[0.8125rem]">
            {education.start}
            <span aria-hidden> — </span>
            {education.end}
          </p>
        </div>

        <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.9375rem]">
          <span className="text-accent font-medium">{education.institution}</span>
          <span aria-hidden className="text-line-strong">
            /
          </span>
          <span className="text-fg-faint">{education.location}</span>
        </p>

        <p className="u-prose mt-5">{education.detail}</p>
      </article>
    </Section>
  );
}
