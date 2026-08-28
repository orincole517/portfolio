import { cn } from '@/lib/cn';

/** Monogram: initials, with the gradient carried by a single dot. */
export function BrandMark({ className }: { readonly className?: string }) {
  return (
    <span className={cn('flex items-center gap-2', className)} aria-hidden>
      <span className="font-display text-fg text-[1.0625rem] font-bold tracking-[0.02em]">
        OC
      </span>
      <span
        className="size-[7px] rounded-full"
        style={{ backgroundImage: 'var(--gradient)' }}
      />
    </span>
  );
}
