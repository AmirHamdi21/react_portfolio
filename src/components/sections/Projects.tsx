import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { ProjectCard } from '../ui/ProjectCard';
import { FolderOpen, Sparkles } from 'lucide-react';

// GPAce App Images
import gpace1 from '../../assets/GPAce images/GPAce 1.png';
import gpace2 from '../../assets/GPAce images/GPAce 2.png';

// Habit Tracking App Images
import habit1 from '../../assets/Habit tracking images/Habit Tracking 1.png';
import habit2 from '../../assets/Habit tracking images/Habit Tracking 2.png';
import habit3 from '../../assets/Habit tracking images/Habit Tracking 3.png';
import habit4 from '../../assets/Habit tracking images/Habit Tracking 4.png';

const projects = [
  {
    title: 'GPAce',
    dateRange: 'Jan 2025 – Present',
    description: 'An intelligent GPA calculator and academic tracker designed to help students monitor their academic performance. Features intuitive grade input, semester-wise tracking, and predictive GPA calculations to help students achieve their academic goals.',
    technologies: ['Flutter', 'Dart', 'Material Design', 'Local Storage'],
    images: [gpace1, gpace2],
    githubUrl: 'https://github.com/AmirHamdi21',
    liveUrl: '#',
    status: 'live' as const,
  },
  {
    title: 'Habit Tracker',
    dateRange: 'Dec 2024 – Present',
    description: 'A comprehensive habit tracking application that helps users build and maintain positive habits. Features daily tracking, streak monitoring, progress analytics, and motivational reminders to keep users on track with their personal development goals.',
    technologies: ['Flutter', 'Firebase', 'GetX', 'Charts', 'Notifications'],
    images: [habit1, habit2, habit3, habit4],
    githubUrl: 'https://github.com/AmirHamdi21',
    liveUrl: '#',
    status: 'live' as const,
  },
  {
    title: 'Coming Soon',
    dateRange: 'TBD',
    description: 'An exciting new project currently in the planning phase. Stay tuned for updates on this upcoming application that will showcase innovative features and cutting-edge mobile development techniques.',
    technologies: ['Flutter', 'Firebase', 'More TBD'],
    images: [],
    githubUrl: '#',
    liveUrl: '#',
    status: 'coming-soon' as const,
  },
];

export const Projects = () => {
  return (
    <SectionWrapper id="projects" className="bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-xl">
              <FolderOpen className="w-7 h-7 text-primary-600 dark:text-primary-400" />
            </div>
            <h2 className="text-4xl font-bold text-neutral-900 dark:text-white">
              Featured Projects
            </h2>
            <Sparkles className="w-5 h-5 text-yellow-500" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mb-6" />
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore my latest mobile applications showcasing expertise in Flutter development, 
            clean architecture, and user-centric design principles.
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
              images={project.images}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              status={project.status}
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
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-200 font-medium shadow-lg shadow-primary-500/25"
          >
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};