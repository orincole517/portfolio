import { Fragment, type ReactNode } from 'react';

/**
 * Content files are plain strings so they stay easy to edit. This renders the
 * only two marks they use — **strong** and `code` — without pulling in a
 * markdown parser for two rules.
 */
export function richText(input: string): ReactNode {
  const parts = input.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);

  return parts.map((part, index) => {
    const key = `${index}-${part.slice(0, 8)}`;

    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={key}>{part.slice(2, -2)}</strong>;
    }

    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={key}
          className="bg-surface-sunken text-fg rounded-sm px-1 py-0.5 font-mono text-[0.85em]"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    return <Fragment key={key}>{part}</Fragment>;
  });
}
