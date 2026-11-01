import { SegmentMark } from './SegmentMark';

/**
 * Global status strip — the signature element of "The Instrument".
 * Data here is REAL and must stay in sync with Contact.tsx (MASTER.md §7).
 * The AH segment-display mark leads the strip (idle "screen" state).
 *
 * Mobile (≤ sm): same single line as desktop, compressed — 11px mono,
 * 22px mark, tight cell padding — and the `loc` value truncates if a
 * narrower phone still can't fit it (never a wrapped second line).
 */
export const StatusBar = () => (
  <div className="bg-field border-b border-edge">
    <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center whitespace-nowrap font-mono text-[11px] sm:text-[12px]">
        <span className="flex items-center py-1.5 pr-2 sm:pr-3 shrink-0">
          <SegmentMark className="h-[22px] sm:h-[26px] w-auto" />
        </span>
        <span className="flex items-center gap-1.5 sm:gap-2 py-2 px-2 sm:px-4 border-l border-edge text-ink-dim shrink-0">
          <span
            aria-hidden="true"
            className="w-2 h-2 rounded-full bg-ok shadow-led"
          />
          <b className="font-medium text-ink">available</b>
        </span>
        <span className="flex items-center gap-1.5 sm:gap-2 py-2 px-2 sm:px-4 border-l border-edge text-ink-dim flex-1 sm:flex-none min-w-0">
          <span>loc</span>
          <b className="font-medium text-ink truncate">Alexandria, EG · UTC+2</b>
        </span>
        <span className="hidden sm:flex items-center gap-2 py-2 px-4 border-l border-edge text-ink-dim">
          role <b className="font-medium text-ink">Flutter / mobile dev</b>
        </span>
        <span className="hidden md:flex items-center gap-2 py-2 pl-4 text-ink-dim">
          SLA <b className="font-medium text-ink">response ≤ 24h</b>
        </span>
      </div>
    </div>
  </div>
);
