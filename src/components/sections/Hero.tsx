import Image from 'next/image';
import { ActionLink } from '@/components/ui/ActionLink';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SpecList } from '@/components/ui/SpecList';
import { profile } from '@/content/profile';
import { asset } from '@/lib/asset';

const socials = [
  {
    label: 'GitHub',
    href: profile.links.github.href,
    path: 'M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z',
  },
  {
    label: 'Email',
    href: '#contact',
    path: 'M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-11Zm2.2.5 6.8 5.1L18.8 7H5.2Z',
  },
  {
    label: profile.links.product.label,
    href: profile.links.product.href,
    path: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.9 9h-3.2a15.6 15.6 0 0 0-1.2-5.4A8 8 0 0 1 18.9 11ZM12 4.2c.7 1 1.4 3 1.6 6.8h-3.2c.2-3.8.9-5.8 1.6-6.8ZM5.1 11a8 8 0 0 1 4.4-5.4A15.6 15.6 0 0 0 8.3 11H5.1Zm0 2h3.2c.1 2 .5 4 1.2 5.4A8 8 0 0 1 5.1 13Zm6.9 6.8c-.7-1-1.4-3-1.6-6.8h3.2c-.2 3.8-.9 5.8-1.6 6.8Zm2.5-1.4c.7-1.4 1.1-3.4 1.2-5.4h3.2a8 8 0 0 1-4.4 5.4Z',
  },
] as const;

export function Hero() {
  return (
    <section id="intro" className="relative scroll-mt-24 overflow-hidden">
      <div aria-hidden className="u-aurora" />

      <Container className="relative">
        <div className="pt-16 pb-20 sm:pt-24 lg:pt-28 lg:pb-28">
          <div className="flex flex-wrap items-center gap-4">
            <span
              className="relative grid size-16 shrink-0 place-items-center rounded-full p-[2px]"
              style={{ backgroundImage: 'var(--gradient)' }}
            >
              <Image
                src={asset('/images/avatar.jpg')}
                alt={`${profile.name}’s profile picture`}
                width={512}
                height={512}
                priority
                sizes="64px"
                className="size-full rounded-full object-cover"
              />
            </span>

            <p className="border-line-strong bg-surface-raised text-fg-muted inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-[0.8125rem]">
              <span aria-hidden className="relative flex size-2">
                <span className="bg-label absolute inline-flex size-full rounded-full opacity-60" />
                <span className="bg-label relative inline-flex size-2 rounded-full" />
              </span>
              {profile.status}
            </p>
          </div>

          <div className="mt-10 grid gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-16">
            <div>
              <h1 className="font-display text-fg text-[clamp(3.5rem,10vw,6.5rem)] leading-[0.9] font-bold tracking-[-0.045em]">
                Orin
                <br />
                <span className="u-gradient-text">Cole</span>
              </h1>

              <p className="u-label text-label mt-7">
                {profile.title} · {profile.availability}
              </p>

              <p className="font-display text-fg mt-6 max-w-[34ch] text-[clamp(1.375rem,2.6vw,1.875rem)] leading-[1.25] font-medium tracking-[-0.02em] text-balance">
                {profile.lede}
              </p>
              <p className="u-prose mt-5">{profile.summary}</p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <ActionLink href="/work/capo" variant="primary">
                  View my work
                </ActionLink>
                <ActionLink href="#contact" variant="secondary">
                  Get in touch
                </ActionLink>
              </div>

              <ul className="mt-9 flex items-center gap-3">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      {...(social.href.startsWith('http')
                        ? { target: '_blank', rel: 'noreferrer noopener' }
                        : {})}
                      aria-label={social.label}
                      title={social.label}
                      className="border-line-strong bg-surface-raised text-fg-muted hover:border-accent hover:text-fg grid size-11 place-items-center rounded-full border transition-colors duration-200 motion-reduce:transition-none"
                    >
                      <svg
                        aria-hidden
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-4.5"
                      >
                        <path d={social.path} />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <aside aria-label="At a glance" className="u-card relative p-6 sm:p-8">
              <div aria-hidden className="u-card-edge absolute inset-x-0 -top-px h-px" />
              <Eyebrow tone="label">At a glance</Eyebrow>
              <SpecList specs={profile.specs} className="mt-5" />
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}
