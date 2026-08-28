import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Tag } from '@/components/ui/Tag';
import { skillGroups } from '@/content/skills';

export function Skills() {
  return (
    <Section id="skills" labelledBy="skills-heading">
      <SectionHeading
        id="skills-heading"
        eyebrow="Technical skills"
        title="What I work with"
        lede="Grouped by what the work is, not by logo. Everything here is something I have used on shipped work."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group, index) => (
          <section
            key={group.id}
            aria-labelledby={`skills-${group.id}`}
            className="u-card u-card-interactive p-6 sm:p-7"
          >
            <p className="text-fg-faint font-mono text-[0.75rem]">
              {String(index + 1).padStart(2, '0')}
            </p>
            <h3
              id={`skills-${group.id}`}
              className="font-display text-fg mt-3 text-xl font-bold tracking-[-0.015em]"
            >
              {group.title}
            </h3>
            <p className="text-fg-faint mt-2 text-[0.9375rem] leading-relaxed">{group.note}</p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item}>
                  <Tag>{item}</Tag>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Section>
  );
}
