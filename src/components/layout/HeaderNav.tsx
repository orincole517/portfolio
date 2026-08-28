'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useMemo, useRef } from 'react';
import { primaryNav } from '@/content/navigation';
import { cn } from '@/lib/cn';
import { useActiveSection } from '@/lib/use-active-section';

/**
 * Desktop section links plus the reading-progress bar under the header. Both
 * are driven by one passive scroll listener, throttled to an animation frame —
 * the bar is written straight to a transform, so tracking scroll never causes a
 * React render.
 */
export function HeaderNav() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const ids = useMemo(() => primaryNav.map((item) => item.id), []);
  const barRef = useRef<HTMLSpanElement>(null);

  const onProgress = useCallback((progress: number) => {
    if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`;
  }, []);

  const activeId = useActiveSection(ids, onProgress);

  return (
    <>
      <nav aria-label="Sections" className="hidden md:block">
        <ul className="flex items-center gap-1">
          {primaryNav.map((item) => {
            const isActive = isHome && item.id === activeId;
            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'relative rounded-full px-3.5 py-2 text-[0.875rem] transition-colors duration-200 motion-reduce:transition-none',
                    isActive ? 'text-fg' : 'text-fg-muted hover:text-fg',
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={cn(
                      'absolute inset-x-3.5 -bottom-px h-px transition-opacity duration-200 motion-reduce:transition-none',
                      isActive ? 'opacity-100' : 'opacity-0',
                    )}
                    style={{ backgroundImage: 'var(--gradient)' }}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <span aria-hidden className="absolute inset-x-0 -bottom-px h-[2px] overflow-hidden">
        <span
          ref={barRef}
          className="block h-full w-full origin-left"
          style={{ backgroundImage: 'var(--gradient)', transform: 'scaleX(0)' }}
        />
      </span>
    </>
  );
}
