'use client';

import Link from 'next/link';
import { useEffect, useId, useRef, useState } from 'react';
import { primaryNav } from '@/content/navigation';
import { profile } from '@/content/profile';

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Escape closes and returns focus to the trigger; a pointer press outside
  // closes without stealing focus.
  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }

    function onPointerDown(event: PointerEvent) {
      const target = event.target as Node;
      if (panelRef.current?.contains(target) || triggerRef.current?.contains(target)) return;
      setOpen(false);
    }

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="border-line-strong text-fg hover:border-accent flex items-center gap-2 rounded-full border px-4 py-2 text-[0.8125rem] transition-colors duration-200 motion-reduce:transition-none"
      >
        {open ? 'Close' : 'Menu'}
        <svg
          aria-hidden
          viewBox="0 0 16 16"
          className="size-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          {open ? <path d="M4 4l8 8M12 4l-8 8" /> : <path d="M2.5 5h11M2.5 11h11" />}
        </svg>
      </button>

      <div
        id={panelId}
        ref={panelRef}
        hidden={!open}
        className="border-line bg-surface absolute inset-x-0 top-full border-b px-6 py-4 shadow-[0_24px_60px_-30px_rgb(124_92_255_/_0.6)] sm:px-8"
      >
        <nav aria-label="Sections">
          <ul className="divide-line divide-y">
            {primaryNav.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-fg hover:text-accent block py-3.5 text-[0.9375rem] transition-colors duration-200 motion-reduce:transition-none"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${profile.email}`}
                onClick={() => setOpen(false)}
                className="text-accent block py-3.5 text-[0.9375rem] font-medium"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
