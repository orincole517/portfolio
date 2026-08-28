import { cn } from '@/lib/cn';

export interface Spec {
  readonly label: string;
  readonly value: string;
}

interface SpecListProps {
  readonly specs: ReadonlyArray<Spec>;
  readonly className?: string;
}

/**
 * A definition list of facts. Semantic <dl>, so a screen reader reads it as the
 * term/value pairs it looks like.
 */
export function SpecList({ specs, className }: SpecListProps) {
  return (
    <dl className={cn('divide-line divide-y', className)}>
      {specs.map((spec) => (
        <div key={spec.label} className="grid gap-1 py-3.5 sm:grid-cols-[6.5rem_1fr] sm:gap-4">
          <dt className="u-label text-fg-faint sm:pt-1">{spec.label}</dt>
          <dd className="text-fg font-mono text-[0.8125rem] leading-relaxed">{spec.value}</dd>
        </div>
      ))}
    </dl>
  );
}
