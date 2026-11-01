import { ReactNode } from 'react';

interface PanelHeadProps {
  title: string;
  /** Small mono note on the right — data, never decoration. */
  note?: ReactNode;
}

/**
 * Instrument panel header — the shared section header of "The Instrument"
 * design system (design-system/MASTER.md §7).
 */
export const PanelHead = ({ title, note }: PanelHeadProps) => (
  <div className="flex flex-wrap justify-between items-baseline gap-x-6 gap-y-1 mb-7">
    <h2 className="flex items-center text-[17px] font-semibold tracking-tight text-ink">
      <span aria-hidden="true" className="font-mono text-[11px] text-amber mr-2.5">▮</span>
      {title}
    </h2>
    {note ? (
      <span className="font-mono text-xs text-ink-faint text-right">{note}</span>
    ) : null}
  </div>
);
