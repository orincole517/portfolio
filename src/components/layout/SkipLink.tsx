/** First thing in the tab order; invisible until it has focus. */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="focus:bg-accent sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-full focus:px-5 focus:py-3 focus:text-[0.875rem] focus:font-medium focus:text-[#0a0a0f]"
    >
      Skip to content
    </a>
  );
}
