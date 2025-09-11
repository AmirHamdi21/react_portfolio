import { motion } from 'framer-motion';

interface SkillBadgeProps {
  skill: string;
  level?: number;
  index: number;
}

export const SkillBadge = ({ skill, level, index }: SkillBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-neutral-800 px-4 py-2 rounded-full shadow-md border border-neutral-200 dark:border-neutral-700 hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300"
    >
      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
        {skill}
        {level && (
          <span className="ml-2 text-primary-600 dark:text-primary-400 font-semibold">
            {level}%
          </span>
        )}
      </span>
    </motion.div>
  );
};