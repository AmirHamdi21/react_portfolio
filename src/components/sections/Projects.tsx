import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { ProjectCard } from '../ui/ProjectCard';
import { FolderOpen } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce App',
    dateRange: 'Aug 2024 – Oct 2024',
    description: 'A comprehensive e-commerce mobile application built with Flutter, featuring user authentication, product catalog, shopping cart, and secure payment integration. Optimized for both iOS and Android platforms.',
    technologies: ['Flutter', 'Firebase', 'SQL'],
    // TODO: Add actual project links and screenshots
    githubUrl: '#', // Placeholder
    liveUrl: '#', // Placeholder
  },
  {
    title: 'NoteFlow App',
    dateRange: 'Sep 2024 – Nov 2024',
    description: 'A powerful note-taking application with real-time synchronization, rich text editing, and offline support. Features advanced organization with tags, folders, and search functionality.',
    technologies: ['Flutter', 'Firebase', 'SQL', 'Hive', 'GetX'],
    // TODO: Add actual project links and screenshots
    githubUrl: '#', // Placeholder
    liveUrl: '#', // Placeholder
  },
  {
    title: 'Voho Chat App',
    dateRange: 'Oct 2024 – Dec 2024',
    description: 'A real-time chat application with group messaging, file sharing, and push notifications. Built with WebSocket integration for instant messaging and smooth user experience.',
    technologies: ['Flutter', 'Firebase', 'SQL', 'WebSockets', 'GetX'],
    // TODO: Add actual project links and screenshots
    githubUrl: '#', // Placeholder
    liveUrl: '#', // Placeholder
  },
];

export const Projects = () => {
  return (
    <SectionWrapper id="projects" className="bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FolderOpen className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            <h2 className="text-4xl font-bold text-neutral-900 dark:text-white">
              Featured Projects
            </h2>
          </div>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-4" />
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
            Here are some of my recent projects that showcase my skills in mobile development and cross-platform app creation.
          </p>
        </motion.div>

        {/* Developer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-lg p-4 mb-12 text-center"
        >
          <p className="text-primary-700 dark:text-primary-300 text-sm">
            <strong>Note:</strong> Project links, screenshots, and extended descriptions will be updated by Amir with actual project details.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              dateRange={project.dateRange}
              description={project.description}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              index={index}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/AmirHamdi21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium"
          >
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};