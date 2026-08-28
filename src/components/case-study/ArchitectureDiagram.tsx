const layers = [
  {
    name: 'Popup',
    world: 'React · extension page',
    note: 'The controls. Reads current state, sends the user’s intent.',
    edge: 'setPitch',
  },
  {
    name: 'Background service worker',
    world: 'MV3 · event-driven',
    note: 'Holds per-tab state and keeps the toolbar badge honest.',
    edge: 'pitchCommand',
  },
  {
    name: 'Content bridge',
    world: 'Isolated world · every frame',
    note: 'Can call extension APIs. Cannot see the page’s globals.',
    edge: 'CustomEvent bridge',
  },
  {
    name: 'Pitch engine',
    world: 'Main world · every frame',
    note: 'Can see the page’s globals. Patches AudioContext and owns the graph.',
    edge: 'AudioParam',
  },
  {
    name: 'AudioWorklet processor',
    world: 'Audio thread',
    note: 'Where the sound actually changes, on the way to the speakers.',
    edge: null,
  },
] as const;

/**
 * Rendered as an ordered list rather than an image, so a screen reader gets the
 * same chain a sighted reader does — and so it stays legible at any width.
 */
export function ArchitectureDiagram() {
  return (
    <figure className="my-10">
      <ol>
        {layers.map((layer) => (
          <li key={layer.name}>
            <div className="u-card px-5 py-4">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-fg text-base font-semibold tracking-[-0.01em]">
                  {layer.name}
                </h3>
                <p className="u-label text-fg-faint">{layer.world}</p>
              </div>
              <p className="text-fg-muted mt-2 text-[0.9375rem] leading-relaxed">
                {layer.note}
              </p>
            </div>

            {layer.edge ? (
              <div className="flex items-center gap-3 py-2 pl-6">
                <span
                  aria-hidden
                  className="h-7 w-px"
                  style={{
                    backgroundImage:
                      'linear-gradient(to bottom, rgb(124 92 255 / 0.9), rgb(59 130 246 / 0.5))',
                  }}
                />
                <span className="text-label font-mono text-[0.75rem]">{layer.edge}</span>
              </div>
            ) : null}
          </li>
        ))}
      </ol>
      <figcaption className="text-fg-faint mx-auto mt-4 max-w-[58ch] text-center text-sm leading-relaxed">
        One gesture, five contexts. The split between the isolated and main worlds is not a
        design choice — Manifest V3 requires it — and most of the extension’s architecture
        follows from it.
      </figcaption>
    </figure>
  );
}
