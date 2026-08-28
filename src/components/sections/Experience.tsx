import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Tag } from '@/components/ui/Tag';
import { roles } from '@/content/experience';

export function Experience() {
  return (
    <Section id="experience" labelledBy="experience-heading">
      <SectionHeading
        id="experience-heading"
        eyebrow="Experience"
        title="Where I have done it"
      />

      <ol className="relative space-y-6">
        {/* The spine: a gradient that fades as the timeline goes back in time. */}
        <span
          aria-hidden
          className="absolute top-2 bottom-2 left-[7px] hidden w-px sm:block"
          style={{
            backgroundImage:
              'linear-gradient(to bottom, #7c5cff, #3b82f6 45%, var(--line) 100%)',
          }}
        />

        {roles.map((role) => (
          <li key={role.id} className="relative sm:pl-12">
            <span
              aria-hidden
              className="border-surface absolute top-8 left-0 hidden size-4 rounded-full border-4 sm:block"
              style={{ backgroundImage: 'var(--gradient)' }}
            />

            <article className="u-card u-card-interactive p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <h3 className="font-display text-fg text-2xl font-bold tracking-[-0.02em]">
                  {role.title}
                </h3>
                <p className="text-fg-faint font-mono text-[0.8125rem]">
                  <time dateTime={role.startISO}>{role.start}</time>
                  <span aria-hidden> — </span>
                  {role.endISO ? (
                    <time dateTime={role.endISO}>{role.end}</time>
                  ) : (
                    <span>{role.end}</span>
                  )}
                </p>
              </div>

              <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.9375rem]">
                <span className="text-accent font-medium">{role.company}</span>
                <span aria-hidden className="text-line-strong">
                  /
                </span>
                <span className="text-fg-faint">{role.location}</span>
              </p>

              <p className="u-prose text-fg mt-5 text-[1.0625rem]">{role.summary}</p>

              <ul className="u-prose mt-5 space-y-3">
                {role.highlights.map((highlight) => (
                  <li key={highlight.slice(0, 24)} className="flex gap-3">
                    <span
                      aria-hidden
                      className="bg-line-strong mt-2.5 size-1.5 shrink-0 rounded-full"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-2">
                {role.focus.map((item) => (
                  <li key={item}>
                    <Tag>{item}</Tag>
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
