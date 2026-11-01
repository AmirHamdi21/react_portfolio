/** @type {import('tailwindcss').Config} */
// Design system: "The Instrument" — see design-system/MASTER.md (global source of truth).
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        field: 'var(--c-field)',
        panel: 'var(--c-panel)',
        'panel-2': 'var(--c-panel-2)',
        edge: {
          DEFAULT: 'var(--c-edge)',
          hi: 'var(--c-edge-hi)',
        },
        ink: {
          DEFAULT: 'var(--c-text)',
          dim: 'var(--c-text-dim)',
          faint: 'var(--c-text-faint)',
        },
        amber: {
          DEFAULT: 'var(--c-amber)',
          on: 'var(--c-on-amber)',
        },
        ok: 'var(--c-ok)',
        alert: 'var(--c-alert)',
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        sm: '3px',
        DEFAULT: '6px',
        md: '8px',
      },
      boxShadow: {
        panel: 'var(--shadow-panel)',
        led: '0 0 7px var(--c-ok)',
      },
      maxWidth: {
        site: '1240px',
      },
    },
  },
  plugins: [],
};
