import Image from 'next/image';
import { ActionLink } from '@/components/ui/ActionLink';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Tag } from '@/components/ui/Tag';
import { featuredProject, supportingProjects } from '@/content/projects';
import { asset } from '@/lib/asset';

function FeaturedProject() {
  return (
    <article className="u-card u-card-interactive relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{ backgroundImage: 'var(--gradient)' }}
      />

      <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 lg:p-12">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <Tag tone="accent">Featured</Tag>
            <Eyebrow as="span">{featuredProject.kind}</Eyebrow>
          </div>

          <h3 className="font-display text-fg mt-6 text-[clamp(2.25rem,5vw,3.5rem)] leading-none font-bold tracking-[-0.04em]">
            {featuredProject.name}
          </h3>
          <p className="font-display text-fg mt-5 max-w-[38ch] text-xl leading-snug font-medium tracking-[-0.015em]">
            {featuredProject.tagline}
          </p>

          <div className="mt-9 space-y-6">
            <div>
              <Eyebrow tone="label">The problem</Eyebrow>
              <p className="u-prose mt-2.5">{featuredProject.problem}</p>
            </div>
            <div>
              <Eyebrow tone="label">My role</Eyebrow>
              <p className="u-prose mt-2.5">{featuredProject.role}</p>
            </div>
            <div>
              <Eyebrow tone="label">What I built</Eyebrow>
              <ul className="u-prose mt-2.5 space-y-3">
                {featuredProject.contributions.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-2.5 size-1.5 shrink-0 rounded-full"
                      style={{ backgroundImage: 'var(--gradient)' }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-9">
            <Eyebrow>Built with</Eyebrow>
            <ul className="mt-3 flex flex-wrap gap-2">
              {featuredProject.stack.map((item) => (
                <li key={item}>
                  <Tag>{item}</Tag>
                </li>
              ))}
            </ul>
          </div>

          <p className="border-line text-fg mt-8 border-t pt-6 font-mono text-[0.8125rem]">
            <span className="text-fg-faint">Status — </span>
            {featuredProject.status}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
            <ActionLink href={featuredProject.links[0].href} variant="primary">
              {featuredProject.links[0].label}
            </ActionLink>
            {featuredProject.links.slice(1).map((link) => (
              <ActionLink key={link.href} href={link.href} variant="quiet" external>
                {link.label}
              </ActionLink>
            ))}
          </div>
        </div>

        <div className="border-line bg-surface-sunken relative flex items-center justify-center overflow-hidden rounded-xl border p-8 sm:p-12">
          <div
            aria-hidden
            className="absolute inset-0 opacity-70"
            style={{
              background:
                'radial-gradient(120% 90% at 50% 0%, rgb(124 92 255 / 0.35), transparent 65%)',
            }}
          />
          <Image
            src={asset(featuredProject.image.src)}
            alt={featuredProject.image.alt}
            width={featuredProject.image.width}
            height={featuredProject.image.height}
            sizes="(min-width: 1024px) 320px, 60vw"
            className="border-line-strong relative h-auto w-full max-w-[19rem] rounded-xl border shadow-[0_40px_80px_-40px_rgb(0_0_0_/_0.9)]"
          />
        </div>
      </div>
    </article>
  );
}

export function SelectedWork() {
  return (
    <Section id="work" labelledBy="work-heading">
      <SectionHeading
        id="work-heading"
        eyebrow="Selected work"
        title="What I have built"
        lede="One shipped product I work on every day, the site that supports it, and four and a half years of client work behind both."
      />

      <FeaturedProject />

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {supportingProjects.map((project) => (
          <article
            key={project.id}
            className="u-card u-card-interactive flex flex-col p-6 sm:p-8"
          >
            <Eyebrow>{project.kind}</Eyebrow>

            <h3 className="font-display text-fg mt-4 text-2xl font-bold tracking-[-0.02em]">
              {project.name}
            </h3>
            <p className="text-fg-faint mt-2 font-mono text-[0.75rem]">{project.period}</p>

            <p className="text-fg mt-5 text-[1.0625rem] leading-relaxed">{project.tagline}</p>
            <p className="u-prose mt-4">{project.problem}</p>

            <ul className="u-prose mt-4 space-y-2.5">
              {project.contributions.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden
                    className="bg-line-strong mt-2.5 size-1.5 shrink-0 rounded-full"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <ul className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <li key={item}>
                  <Tag>{item}</Tag>
                </li>
              ))}
            </ul>

            <div className="border-line mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 border-t pt-6">
              <p className="text-fg-muted font-mono text-[0.75rem]">
                <span className="text-fg-faint">Status — </span>
                {project.status}
              </p>
              {project.links.map((link) => (
                <ActionLink
                  key={link.href}
                  href={link.href}
                  variant="quiet"
                  external={link.external}
                >
                  {link.label}
                </ActionLink>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
