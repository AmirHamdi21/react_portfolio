import { ReactNode } from 'react';

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

/**
 * Full-width section shell of "The Instrument": field background, border
 * separation between sections (structure from borders, not shadows).
 */
export const SectionWrapper = ({ id, children, className = '' }: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={`scroll-mt-24 border-t border-edge px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-field ${className}`}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
};
