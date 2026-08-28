import { Eyebrow } from '@/components/ui/Eyebrow';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { achievements } from '@/content/experience';
import { profile } from '@/content/profile';

export function About() {
  return (
    <Section id="about" labelledBy="about-heading">
      <SectionHeading id="about-heading" eyebrow="About" title="How I work" />

      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="u-prose text-[1.125rem]">
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <aside aria-label="What that adds up to" className="self-start">
          <Eyebrow tone="label">Résumé highlights, in short</Eyebrow>
          <div className="mt-5 grid gap-4">
            {achievements.map((item) => (
              <div key={item.label} className="u-card p-5">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="size-1.5 rounded-full"
                    style={{ backgroundImage: 'var(--gradient)' }}
                  />
                  <h3 className="font-display text-fg text-base font-semibold tracking-[-0.01em]">
                    {item.label}
                  </h3>
                </div>
                <p className="text-fg-muted mt-2 text-[0.9375rem] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </Section>
  );
}
