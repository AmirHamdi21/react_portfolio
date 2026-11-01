interface ExternalLinkIconProps {
  className?: string;
}

/** A font-independent external-link mark for consistent rendering on all devices. */
export const ExternalLinkIcon = ({ className = '' }: ExternalLinkIconProps) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block shrink-0 ${className}`}
  >
    <path d="M9 2h5v5" />
    <path d="m14 2-7 7" />
    <path d="M14 9v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3" />
  </svg>
);
