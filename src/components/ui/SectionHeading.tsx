interface SectionHeadingProps {
  readonly id: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly lede?: string;
}

/**
 * A short gradient rule, a cyan label, then the heading. Every section opens the
 * same way, which is what makes them scannable.
 */
export function SectionHeading({ id, eyebrow, title, lede }: SectionHeadingProps) {
  return (
    <header className="mb-12 sm:mb-16">
      <div className="flex items-center gap-3">
        <span
          aria-hidden
          className="h-px w-8 rounded-full"
          style={{ backgroundImage: 'var(--gradient)' }}
        />
        <p className="u-label text-label">{eyebrow}</p>
      </div>

      <h2
        id={id}
        className="font-display text-fg mt-5 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] font-bold tracking-[-0.03em]"
      >
        {title}
      </h2>

      {lede ? <p className="u-prose mt-5 text-lg">{lede}</p> : null}
    </header>
  );
}
