'use client';

import { useMemo } from 'react';
import { chapters } from '@/content/case-study';
import { cn } from '@/lib/cn';
import { useActiveSection } from '@/lib/use-active-section';

export function ChapterNav() {
  const ids = useMemo(() => chapters.map((chapter) => chapter.id), []);
  const activeId = useActiveSection(ids);

  return (
    <nav aria-label="Chapters" className="u-no-print sticky top-24 hidden lg:block">
      <p className="u-label text-fg-faint mb-4">Chapters</p>
      <ol className="space-y-1">
        {chapters.map((chapter, index) => {
          const isActive = chapter.id === activeId;
          return (
            <li key={chapter.id}>
              <a
                href={`#${chapter.id}`}
                aria-current={isActive ? 'true' : undefined}
                className={cn(
                  'flex gap-3 rounded-md px-3 py-2 text-[0.9375rem] leading-snug transition-colors duration-200 motion-reduce:transition-none',
                  isActive
                    ? 'bg-surface-raised text-fg'
                    : 'text-fg-faint hover:bg-surface-raised/60 hover:text-fg-muted',
                )}
              >
                <span
                  className={cn(
                    'pt-0.5 font-mono text-[0.75rem] tabular-nums',
                    isActive ? 'text-label' : 'text-fg-faint',
                  )}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{chapter.title}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
