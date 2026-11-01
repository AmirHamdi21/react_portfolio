import { motion } from 'framer-motion';

interface SkillBadgeProps {
  skill: string;
  level?: number;
  index: number;
}

/**
 * Chip (MASTER.md §7): mono, square-ish — rounded-full pill badges are
 * banned by the anti-pattern register (§8.7).
 */
export const SkillBadge = ({ skill, level, index }: SkillBadgeProps) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.15), ease: 'easeOut' }}
      className="chip hover:border-edge-hi hover:text-ink transition-colors duration-200"
    >
      {skill.toLowerCase()}
      {level ? <span className="ml-2 text-amber tabular">{level}%</span> : null}
    </motion.span>
  );
};
