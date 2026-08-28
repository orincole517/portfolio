import Image from 'next/image';
import { asset } from '@/lib/asset';
import { cn } from '@/lib/cn';

interface FigureProps {
  readonly src: string;
  readonly alt: string;
  readonly caption: string;
  readonly width: number;
  readonly height: number;
  /** Popup captures are small and portrait; panel captures are wider and taller. */
  readonly frame: 'popup' | 'panel';
  readonly priority?: boolean;
}

/**
 * Product screenshots are shown at roughly the width of the surface they were
 * captured from, which keeps them honest but makes the dense ones small. Panel
 * captures therefore link to the full-size file — a plain anchor, so inspecting
 * the detail costs no JavaScript and works with the keyboard.
 */
export function Figure({ src, alt, caption, width, height, frame, priority }: FigureProps) {
  const isPopup = frame === 'popup';
  const href = asset(src);

  const image = (
    <Image
      src={href}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      loading={priority ? undefined : 'lazy'}
      sizes={isPopup ? '304px' : '416px'}
      className="h-auto w-full"
    />
  );

  const frameClasses = cn(
    'block overflow-hidden rounded-xl border border-line-strong bg-surface-raised shadow-[0_40px_80px_-48px_rgb(0_0_0_/_0.9)]',
    isPopup ? 'mx-auto w-full max-w-[19rem]' : 'mx-auto w-full max-w-[26rem]',
  );

  return (
    <figure className="my-10">
      <div
        className="relative rounded-2xl p-6 sm:p-8"
        style={{
          background:
            'radial-gradient(110% 80% at 50% 0%, rgb(124 92 255 / 0.22), transparent 62%)',
        }}
      >
        {isPopup ? (
          <div className={frameClasses}>{image}</div>
        ) : (
          <a
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`Open the full-size screenshot: ${caption}`}
            className={cn(
              frameClasses,
              'hover:border-accent transition-colors duration-200 motion-reduce:transition-none',
            )}
          >
            {image}
          </a>
        )}
      </div>

      <figcaption className="text-fg-faint mx-auto mt-4 max-w-[58ch] text-center text-sm leading-relaxed">
        {caption}
        {!isPopup ? (
          <>
            {' '}
            <a
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              className="text-fg decoration-accent hover:text-accent whitespace-nowrap underline underline-offset-4 transition-colors duration-200 motion-reduce:transition-none"
            >
              View full size ↗
            </a>
          </>
        ) : null}
      </figcaption>
    </figure>
  );
}
