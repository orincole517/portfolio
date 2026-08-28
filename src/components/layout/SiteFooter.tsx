import Image from 'next/image';
import { profile } from '@/content/profile';
import { asset } from '@/lib/asset';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { BrandMark } from './BrandMark';

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-line bg-surface-sunken border-t py-14">
      <Container>
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-4">
            <Image
              src={asset('/images/avatar.jpg')}
              alt=""
              width={512}
              height={512}
              sizes="48px"
              className="size-12 rounded-full object-cover"
            />
            <div>
              <BrandMark />
              <p className="font-display text-fg mt-2 text-lg font-semibold tracking-[-0.01em]">
                {profile.name}
              </p>
              <Eyebrow className="mt-1.5">
                {profile.title} · {profile.availability}
              </Eyebrow>
            </div>
          </div>

          <nav aria-label="Contact and profiles">
            <ul className="grid gap-2.5 text-[0.9375rem] sm:text-right">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-fg-muted hover:text-accent underline-offset-4 transition-colors duration-200 hover:underline motion-reduce:transition-none"
                >
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={profile.links.github.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-fg-muted hover:text-accent underline-offset-4 transition-colors duration-200 hover:underline motion-reduce:transition-none"
                >
                  {profile.links.github.label}
                </a>
              </li>
              <li>
                <a
                  href={profile.links.product.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-fg-muted hover:text-accent underline-offset-4 transition-colors duration-200 hover:underline motion-reduce:transition-none"
                >
                  {profile.links.product.label}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="border-line mt-12 flex flex-col gap-3 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
          <Eyebrow>
            © {year} {profile.name}
          </Eyebrow>
          <Eyebrow>Built with Next.js, TypeScript &amp; Tailwind CSS</Eyebrow>
        </div>
      </Container>
    </footer>
  );
}
