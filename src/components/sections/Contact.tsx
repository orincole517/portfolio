import { Container } from '@/components/ui/Container';
import { CopyButton } from '@/components/ui/CopyButton';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { profile } from '@/content/profile';

const links = [
  {
    label: 'GitHub',
    value: profile.links.github.label,
    href: profile.links.github.href,
    description: profile.links.github.description,
  },
  {
    label: 'Product',
    value: profile.links.product.label,
    href: profile.links.product.href,
    description: profile.links.product.description,
  },
] as const;

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-line relative scroll-mt-24 overflow-hidden border-t py-20 sm:py-24 lg:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(80% 60% at 50% 100%, rgb(124 92 255 / 0.22), transparent 70%)',
        }}
      />

      <Container className="relative">
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="h-px w-8 rounded-full"
            style={{ backgroundImage: 'var(--gradient)' }}
          />
          <Eyebrow tone="label">Contact</Eyebrow>
        </div>

        <h2
          id="contact-heading"
          className="font-display text-fg mt-5 max-w-[16ch] text-[clamp(2.5rem,6.5vw,4.5rem)] leading-[1] font-bold tracking-[-0.04em] text-balance"
        >
          Hiring for a <span className="u-gradient-text">frontend role?</span>
        </h2>

        <p className="u-prose mt-6 text-lg">
          I am open to frontend roles, remote. If you want to see how I think before you write,
          the Capo case study is the honest version — decisions, tradeoffs, and the parts that
          were hard.
        </p>

        {/* The address is written out, linked, and copyable. A mailto: link on
            its own does nothing for anyone without a mail client registered. */}
        <div className="u-card mt-12 p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <Eyebrow>Email</Eyebrow>
              <a
                href={`mailto:${profile.email}`}
                className="font-display text-fg hover:text-accent mt-2 block text-2xl font-semibold tracking-[-0.015em] break-all transition-colors duration-200 motion-reduce:transition-none sm:text-3xl"
              >
                {profile.email}
              </a>
            </div>

            <CopyButton value={profile.email} label="Email address" />
          </div>
        </div>

        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="u-card u-card-interactive group flex h-full flex-col p-6"
              >
                <Eyebrow>{link.label}</Eyebrow>
                <span className="font-display text-fg group-hover:text-accent mt-2 text-xl font-semibold tracking-[-0.015em] break-all transition-colors duration-200 motion-reduce:transition-none">
                  {link.value}
                </span>
                <span className="text-fg-faint mt-3 flex items-center gap-2 text-[0.9375rem]">
                  {link.description}
                  <span
                    aria-hidden
                    className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
                  >
                    ↗
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
