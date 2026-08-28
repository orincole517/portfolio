import Link from 'next/link';
import { profile } from '@/content/profile';
import { HeaderNav } from './HeaderNav';
import { MobileNav } from './MobileNav';

/**
 * Server component. The two interactive pieces inside it — the section nav with
 * its progress bar, and the mobile menu — are the only client JavaScript here.
 */
export function SiteHeader() {
  return (
    <header className="border-line bg-surface/80 sticky top-0 z-50 border-b backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-6 sm:px-8 lg:px-12">
        {/* The link's whole accessible name is its visible text — the dot is
            decoration, so no aria-label is needed and none can disagree with it. */}
        <Link href="/" className="group flex items-center gap-2.5">
          <span
            aria-hidden
            className="size-2 rounded-full"
            style={{ backgroundImage: 'var(--gradient)' }}
          />
          <span className="font-display text-fg group-hover:text-accent text-[1.0625rem] font-bold tracking-[-0.01em] transition-colors duration-200 motion-reduce:transition-none">
            {profile.name}
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <HeaderNav />

          <Link
            href="/#contact"
            className="hidden rounded-full px-5 py-2.5 text-[0.875rem] font-medium text-white transition-opacity duration-200 hover:opacity-90 motion-reduce:transition-none sm:inline-flex"
            style={{ backgroundImage: 'var(--gradient-solid)' }}
          >
            Get in touch
          </Link>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}
