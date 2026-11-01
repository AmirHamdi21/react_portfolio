interface SegmentMarkProps {
  className?: string;
}

/**
 * AH instrument mark — seven-segment display cells, lit amber vs ghosted
 * unlit segments. Chosen by the owner on 2026-10-31 from five options
 * (design-system/illustrations/ah-slogan-mockups.html). Uses the site's
 * CSS-var tokens, so it re-themes automatically in both directions.
 */
export const SegmentMark = ({ className = '' }: SegmentMarkProps) => (
  <svg
    viewBox="0 0 160 64"
    role="img"
    aria-label="AH — instrument segment display mark"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="1" y="1" width="158" height="62" rx="6" fill="var(--c-panel)" stroke="var(--c-edge)" strokeWidth="1.5" />
    {/* letter A */}
    <g transform="translate(42 8)">
      <rect x="7" y="0" width="16" height="6" rx="1" fill="var(--c-amber)" />
      <rect x="7" y="21" width="16" height="6" rx="1" fill="var(--c-amber)" />
      <rect x="7" y="42" width="16" height="6" rx="1" fill="var(--c-edge)" opacity=".35" />
      <rect x="0" y="7" width="6" height="13" rx="1" fill="var(--c-amber)" />
      <rect x="0" y="28" width="6" height="13" rx="1" fill="var(--c-amber)" />
      <rect x="24" y="7" width="6" height="13" rx="1" fill="var(--c-amber)" />
      <rect x="24" y="28" width="6" height="13" rx="1" fill="var(--c-amber)" />
    </g>
    {/* letter H */}
    <g transform="translate(88 8)">
      <rect x="7" y="0" width="16" height="6" rx="1" fill="var(--c-edge)" opacity=".35" />
      <rect x="7" y="21" width="16" height="6" rx="1" fill="var(--c-amber)" />
      <rect x="7" y="42" width="16" height="6" rx="1" fill="var(--c-edge)" opacity=".35" />
      <rect x="0" y="7" width="6" height="13" rx="1" fill="var(--c-amber)" />
      <rect x="0" y="28" width="6" height="13" rx="1" fill="var(--c-amber)" />
      <rect x="24" y="7" width="6" height="13" rx="1" fill="var(--c-amber)" />
      <rect x="24" y="28" width="6" height="13" rx="1" fill="var(--c-amber)" />
    </g>
  </svg>
);
