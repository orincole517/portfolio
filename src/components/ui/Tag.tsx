import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface TagProps {
  readonly children: ReactNode;
  readonly tone?: 'default' | 'accent';
  readonly className?: string;
}

export function Tag({ children, tone = 'default', className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1.5 font-mono text-[0.6875rem] leading-none tracking-[0.04em]',
        tone === 'accent'
          ? 'border-accent/40 bg-accent/12 text-accent'
          : 'border-line-strong bg-surface-hover text-fg-muted',
        className,
      )}
    >
      {children}
    </span>
  );
}
