import { motion } from 'framer-motion';

interface ProgressBarProps {
  skill: string;
  percentage: number;
  index: number;
}

export const ProgressBar = ({ skill, percentage, index }: ProgressBarProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {skill}
        </span>
        <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
          className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
        />
      </div>
    </motion.div>
  );
};