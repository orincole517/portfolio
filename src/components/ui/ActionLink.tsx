import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary' | 'quiet';

interface ActionLinkProps {
  readonly href: string;
  readonly children: ReactNode;
  readonly variant?: Variant;
  readonly external?: boolean;
  readonly className?: string;
  readonly ariaLabel?: string;
}

const base =
  'group inline-flex items-center gap-2.5 rounded-full text-[0.9375rem] font-medium transition-all duration-200 motion-reduce:transition-none';

const variants: Record<Variant, string> = {
  primary:
    'px-6 py-3.5 text-white hover:opacity-90 hover:shadow-[0_16px_40px_-18px_rgb(124_92_255_/_0.9)]',
  secondary:
    'border border-line-strong px-6 py-3.5 text-fg hover:border-accent hover:bg-surface-raised',
  quiet: 'text-fg-muted underline-offset-4 hover:text-accent hover:underline',
};

/**
 * One link component for every call to action. External links get the right rel
 * attributes and an arrow that leans out on hover — the hover is decoration, the
 * destination is always in the text.
 */
export function ActionLink({
  href,
  children,
  variant = 'secondary',
  external,
  className,
  ariaLabel,
}: ActionLinkProps) {
  const style =
    variant === 'primary' ? { backgroundImage: 'var(--gradient-solid)' } : undefined;

  const content = (
    <>
      <span>{children}</span>
      <span
        aria-hidden
        className={cn(
          'transition-transform duration-200 motion-reduce:transition-none',
          external
            ? 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
            : 'group-hover:translate-x-0.5',
        )}
      >
        {external ? '↗' : '→'}
      </span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={ariaLabel}
        style={style}
        className={cn(base, variants[variant], className)}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      style={style}
      className={cn(base, variants[variant], className)}
    >
      {content}
    </Link>
  );
}
