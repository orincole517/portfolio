'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/cn';

interface CopyButtonProps {
  readonly value: string;
  /** Describes what is being copied, for the button's accessible name. */
  readonly label: string;
  readonly className?: string;
}

/**
 * Copying the address is the fallback for every visitor whose browser has no
 * mail client registered — for them a mailto: link does nothing at all.
 */
export function CopyButton({ value, label, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current !== null) window.clearTimeout(timer.current);
    };
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      if (timer.current !== null) window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (insecure context, or blocked by permissions).
      // The address is written out next to this button, so it stays reachable.
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={copy}
        aria-label={`Copy ${label}`}
        className={cn(
          'border-line-strong text-fg-muted hover:border-accent hover:text-fg inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 font-mono text-[0.75rem] transition-colors duration-200 motion-reduce:transition-none',
          className,
        )}
      >
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-3.5"
        >
          {copied ? (
            <path d="m5 12.5 4.5 4.5L19 7.5" />
          ) : (
            <>
              <rect x="9" y="9" width="11" height="11" rx="2" />
              <path d="M5 15V5a2 2 0 0 1 2-2h8" />
            </>
          )}
        </svg>
        {copied ? 'Copied' : 'Copy'}
      </button>

      {/* Announced to screen readers, which cannot see the icon change. */}
      <span aria-live="polite" className="sr-only">
        {copied ? `${label} copied to clipboard` : ''}
      </span>
    </>
  );
}
