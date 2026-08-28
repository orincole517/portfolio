import { ArchitectureDiagram } from '@/components/case-study/ArchitectureDiagram';
import { PullQuote } from '@/components/case-study/PullQuote';
import { Figure } from '@/components/ui/Figure';
import type { Block, Chapter as ChapterData } from '@/content/case-study';
import { richText } from '@/lib/rich-text';

function renderBlock(block: Block, index: number) {
  switch (block.type) {
    case 'p':
      return (
        <p key={index} className="u-prose text-[1.0625rem]">
          {richText(block.text)}
        </p>
      );
    case 'list':
      return (
        <ul key={index} className="u-prose space-y-3">
          {block.items.map((item) => (
            <li key={item.slice(0, 24)} className="flex gap-3">
              <span
                aria-hidden
                className="mt-2.5 size-1.5 shrink-0 rounded-full"
                style={{ backgroundImage: 'var(--gradient)' }}
              />
              <span>{richText(item)}</span>
            </li>
          ))}
        </ul>
      );
    case 'quote':
      return <PullQuote key={index}>{block.text}</PullQuote>;
    case 'diagram':
      return <ArchitectureDiagram key={index} />;
    case 'figure':
      return (
        <Figure
          key={index}
          src={block.src}
          alt={block.alt}
          caption={block.caption}
          width={block.width}
          height={block.height}
          frame={block.frame}
        />
      );
  }
}

interface ChapterProps {
  readonly chapter: ChapterData;
  readonly index: number;
}

export function Chapter({ chapter, index }: ChapterProps) {
  const number = String(index + 1).padStart(2, '0');

  return (
    <section
      id={chapter.id}
      aria-labelledby={`${chapter.id}-heading`}
      className="border-line scroll-mt-24 border-t py-12 first:border-t-0 sm:py-16"
    >
      <div className="flex items-center gap-3">
        <span
          aria-hidden
          className="h-px w-6 rounded-full"
          style={{ backgroundImage: 'var(--gradient)' }}
        />
        <p className="u-label text-label">Chapter {number}</p>
      </div>

      <h2
        id={`${chapter.id}-heading`}
        className="font-display text-fg mt-4 mb-8 text-3xl font-bold tracking-[-0.03em] sm:text-[2.5rem] sm:leading-[1.08]"
      >
        {chapter.title}
      </h2>

      <div className="space-y-5">
        {chapter.blocks.map((block, blockIndex) => renderBlock(block, blockIndex))}
      </div>
    </section>
  );
}
