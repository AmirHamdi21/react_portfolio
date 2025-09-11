import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Mobile Development Intern',
    company: 'DEPI Internship',
    location: 'Remote',
    period: '10-2024 – Present',
    type: 'Internship',
    description: 'Actively participating in a comprehensive mobile development internship program focused on modern mobile app development.',
    responsibilities: [
      'Learning advanced Java and Kotlin programming for Android development',
      'Mastering Dart language fundamentals and advanced concepts',
      'Building a comprehensive fitness application as the main project',
      'Implementing state management using Bloc pattern for scalable app architecture',
      'Integrating Firebase Cloud Messaging (FCM) for push notifications',
      'Collaborating with team members on code reviews and best practices'
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'ALX',
    location: 'Remote',
    period: '2023 – 2024',
    type: 'Internship',
    description: 'Completed an intensive software engineering program focused on full-stack development and industry best practices.',
    responsibilities: [
      'Developed proficiency in multiple programming languages and frameworks',
      'Participated in collaborative coding projects and peer programming sessions',
      'Learned software engineering principles including version control, testing, and deployment',
      'Completed hands-on projects demonstrating problem-solving and technical skills',
      'Engaged in continuous learning and professional development activities'
    ],
  },
];

export const Experience = () => {
  return (
    <SectionWrapper id="experience" className="bg-neutral-50 dark:bg-neutral-800">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Briefcase className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            <h2 className="text-4xl font-bold text-neutral-900 dark:text-white">
              Experience & Internships
            </h2>
          </div>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-4" />
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
            My professional journey and learning experiences in software development and mobile app creation.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700 overflow-hidden"
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-neutral-600 dark:text-neutral-400">
                      <span className="text-lg font-medium text-primary-600 dark:text-primary-400">
                        {exp.company}
                      </span>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div>
                  <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
                    Key Responsibilities & Learning:
                  </h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <motion.li
                        key={respIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: (index * 0.2) + (respIndex * 0.1) }}
                        className="flex items-start gap-3"
                      >
                        <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2" />
                        <span className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                          {responsibility}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};