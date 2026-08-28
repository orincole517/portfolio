import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface EyebrowProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly as?: 'p' | 'span' | 'div';
  readonly tone?: 'faint' | 'label';
}

/** The page's utility voice: mono, uppercase, tracked out. */
export function Eyebrow({ children, className, as: Tag = 'p', tone = 'faint' }: EyebrowProps) {
  return (
    <Tag
      className={cn('u-label', tone === 'label' ? 'text-label' : 'text-fg-faint', className)}
    >
      {children}
    </Tag>
  );
}
