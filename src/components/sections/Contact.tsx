import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { profile } from '@/content/profile';

const channels = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    description: 'The fastest way to reach me.',
    external: false,
  },
  {
    label: 'GitHub',
    value: profile.links.github.label,
    href: profile.links.github.href,
    description: profile.links.github.description,
    external: true,
  },
  {
    label: 'Product',
    value: profile.links.product.label,
    href: profile.links.product.href,
    description: profile.links.product.description,
    external: true,
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

        <ul className="mt-12 grid gap-4">
          {channels.map((channel) => (
            <li key={channel.label}>
              <a
                href={channel.href}
                {...(channel.external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                className="u-card u-card-interactive group grid gap-2 p-6 sm:grid-cols-[7rem_1fr_auto] sm:items-center sm:gap-6"
              >
                <span className="u-label text-fg-faint">{channel.label}</span>
                <span className="font-display text-fg group-hover:text-accent text-xl font-semibold tracking-[-0.015em] break-all transition-colors duration-200 motion-reduce:transition-none sm:text-2xl">
                  {channel.value}
                </span>
                <span className="text-fg-faint flex items-center gap-4 text-[0.9375rem]">
                  {channel.description}
                  <span
                    aria-hidden
                    className="hidden transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none sm:inline"
                  >
                    →
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
