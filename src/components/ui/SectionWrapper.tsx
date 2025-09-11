import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export const SectionWrapper = ({ id, children, className = '' }: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
};