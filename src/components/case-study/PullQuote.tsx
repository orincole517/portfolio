interface PullQuoteProps {
  readonly children: string;
}

export function PullQuote({ children }: PullQuoteProps) {
  return (
    <blockquote className="relative my-10 pl-6">
      <span
        aria-hidden
        className="absolute inset-y-0 left-0 w-[3px] rounded-full"
        style={{ backgroundImage: 'var(--gradient)' }}
      />
      <p className="font-display text-fg text-xl leading-snug font-medium tracking-[-0.015em] sm:text-2xl">
        {children}
      </p>
    </blockquote>
  );
}
