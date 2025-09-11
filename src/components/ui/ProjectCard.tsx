import { motion } from 'framer-motion';
import { Github, ExternalLink, Calendar } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  dateRange: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  index: number;
}

export const ProjectCard = ({
  title,
  dateRange,
  description,
  technologies,
  imageUrl,
  githubUrl,
  liveUrl,
  index,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-neutral-50 dark:bg-neutral-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-neutral-300 dark:border-neutral-700"
    >
      {/* Project Image Placeholder */}
      <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 flex items-center justify-center">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
              <span className="text-white font-bold text-xl">
                {title.charAt(0)}
              </span>
            </div>
            <span className="text-primary-700 dark:text-primary-300 text-sm font-medium">
              Project Image Placeholder
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <Calendar size={16} className="text-neutral-500" />
          <span className="text-sm text-neutral-500 dark:text-neutral-400">{dateRange}</span>
        </div>

        <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
          {title}
        </h3>

        <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={githubUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-300 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors duration-200 text-sm font-medium"
          >
            <Github size={16} />
            GitHub
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={liveUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 text-sm font-medium"
          >
            <ExternalLink size={16} />
            Live Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};