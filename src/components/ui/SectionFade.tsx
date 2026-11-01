import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionFadeProps {
  children: ReactNode;
  delay?: number;
  /** Extra classes for the wrapper (e.g. h-full in stretch grids). */
  className?: string;
}

/**
 * The single entrance tier of the design system (MASTER.md §6):
 * at most one subtle fade per element group, once, small rise.
 * MotionConfig reducedMotion="user" in App disables it when requested.
 */
export const SectionFade = ({ children, delay = 0, className = '' }: SectionFadeProps) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.35, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);
