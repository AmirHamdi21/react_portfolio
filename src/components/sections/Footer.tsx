import { SegmentMark } from '../ui/SegmentMark';

/**
 * Footer — signature block (MASTER.md §7).
 * The link row uses compact icon chips (mail / phone / GitHub / LinkedIn,
 * inline SVG, no emoji) with accessible names — the long text URLs wrapped
 * messily at mobile widths (2026-10-31 audit) while the same data already
 * lives verbatim in Contact's channel rows.
 *
 * Mobile-only redesign (2026-10-31): centered identity column — the AH
 * segment mark (reuse, per §10) over the © and LED status lines, hairline,
 * then centered icon chips. ≥ sm keeps the original row layout untouched.
 * Data is REAL — keep in sync with Contact.tsx / StatusBar.tsx.
 */

const iconChip =
  'flex h-9 w-9 items-center justify-center border border-edge rounded-md text-ink-faint transition-colors duration-200 hover:border-amber hover:text-amber focus-visible:outline focus-visible:outline-1 focus-visible:outline-amber';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-edge bg-field">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6 sm:py-7 flex flex-col items-center text-center gap-y-2.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-x-8 sm:text-left font-mono text-[12px] text-ink-faint border-b border-edge">
          {/* AH mark: mobile identity anchor only — desktop keeps the row layout */}
          <span className="sm:hidden flex py-1">
            <SegmentMark className="h-8 w-auto" />
          </span>
          <span>
            © <span className="tabular">{currentYear}</span>{' '}
            <b className="text-ink-dim font-medium">Amir Mohamed Hamdi El Sayed</b> · Alexandria, Egypt
          </span>
          <span className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="w-1.5 h-1.5 rounded-full bg-ok"
            />
            built with React · no trackers · all systems nominal
          </span>
        </div>
        {/* signature links: centered under the mark on mobile, right on desktop */}
        <div className="py-6 sm:py-8 flex flex-wrap items-center gap-2.5 justify-center sm:justify-end">
          <a
            href="mailto:amirhamdi2112@gmail.com"
            aria-label="Email — amirhamdi2112@gmail.com"
            title="email"
            className={iconChip}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
              className="w-4 h-4"
            >
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
            </svg>
          </a>
          <a
            href="tel:+201030825155"
            aria-label="Phone — +20 103 082 5155"
            title="phone"
            className={iconChip}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
              className="w-4 h-4"
            >
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z" />
            </svg>
          </a>
          <a
            href="https://github.com/AmirHamdi21"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub — github.com/AmirHamdi21"
            title="GitHub"
            className={iconChip}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
              className="w-4 h-4"
            >
              <path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.12.83-.26.83-.58l-.01-2.04c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.5 1-.1-.78-.42-1.31-.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.81 5.63-5.49 5.92.43.38.82 1.11.82 2.24l-.01 3.32c0 .32.22.7.83.58A12 12 0 0 0 12 .3Z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/amir-mohamed-hamdi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn — linkedin.com/in/amir-mohamed-hamdi"
            title="LinkedIn"
            className={iconChip}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
              className="w-4 h-4"
            >
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};
