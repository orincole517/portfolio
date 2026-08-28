'use client';

import { useEffect, useState } from 'react';

/**
 * Tracks which of the given section ids is currently being read, using one
 * passive scroll listener throttled to an animation frame. Shared by the
 * homepage rail and the case-study chapter nav so both behave identically.
 *
 * `onProgress`, when given, is called with document scroll progress (0 → 1) on
 * the same frame, so a progress indicator costs no extra listener. It must be
 * referentially stable — wrap it in useCallback.
 */
export function useActiveSection(
  ids: ReadonlyArray<string>,
  onProgress?: (progress: number) => void,
): string {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? '');

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (sections.length === 0) return;

    let frame: number | null = null;

    function measure() {
      frame = null;

      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      onProgress?.(scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0);

      // Active = the last section whose top has crossed the reading line.
      const readingLine = window.innerHeight * 0.35;
      let current = sections[0];
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= readingLine) current = section;
      }
      if (current) setActiveId(current.id);
    }

    function onScroll() {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(measure);
    }

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
    // Both call sites memoize `ids` and `onProgress`, so this runs once.
  }, [ids, onProgress]);

  return activeId;
}
