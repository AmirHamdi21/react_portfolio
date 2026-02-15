import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles } from 'lucide-react';

const experiences = [
  {
    title: 'Mobile Development Intern',
    company: 'DEPI Internship',
    location: 'Hybrid (Remote & On-site)',
    period: '10-2024 – Present',
    type: 'Internship',
    current: true,
    description: 'Actively participating in a comprehensive mobile development internship program focused on modern mobile app development.',
    responsibilities: [
      'Learning advanced Java and Kotlin programming for Android development',
      'Mastering Dart language fundamentals and advanced concepts',
      'Building a comprehensive fitness application as the main project',
      'Implementing state management using Bloc pattern for scalable app architecture',
      'Integrating Firebase Cloud Messaging (FCM) for push notifications',
      'Collaborating with team members on code reviews and best practices'
    ],
    color: 'from-primary-500 to-purple-500',
  },
  {
    title: 'Software Engineer Intern',
    company: 'ALX',
    location: 'Remote',
    period: '2023 – 2024',
    type: 'Internship',
    current: false,
    description: 'Completed an intensive software engineering program focused on full-stack development and industry best practices.',
    responsibilities: [
      'Developed proficiency in multiple programming languages and frameworks',
      'Participated in collaborative coding projects and peer programming sessions',
      'Learned software engineering principles including version control, testing, and deployment',
      'Completed hands-on projects demonstrating problem-solving and technical skills',
      'Engaged in continuous learning and professional development activities'
    ],
    color: 'from-emerald-500 to-teal-500',
  },
];

export const Experience = () => {
  return (
    <SectionWrapper id="experience" className="bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-800 dark:to-neutral-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-4"
          >
            <Briefcase size={14} />
            Work History
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Experience &{' '}
            <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
            My professional journey and learning experiences in software development
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-purple-500 to-primary-500" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, type: 'spring' }}
                  className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4"
                >
                  <div className={`w-full h-full bg-gradient-to-br ${exp.color} rounded-full shadow-lg`}>
                    {exp.current && (
                      <motion.div
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`absolute inset-0 bg-gradient-to-br ${exp.color} rounded-full opacity-40`}
                      />
                    )}
                  </div>
                </motion.div>

                {/* Content */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-neutral-800/80 rounded-3xl shadow-xl border border-neutral-200 dark:border-neutral-700/50 overflow-hidden hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Header Gradient */}
                    <div className={`h-2 bg-gradient-to-r ${exp.color}`} />

                    <div className="p-8">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                              {exp.title}
                            </h3>
                            {exp.current && (
                              <motion.span
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-medium rounded-full"
                              >
                                Current
                              </motion.span>
                            )}
                          </div>
                          <div className="flex flex-wrap items-center gap-4 text-neutral-600 dark:text-neutral-400">
                            <span className={`text-lg font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                              {exp.company}
                            </span>
                            <div className="flex items-center gap-1 text-sm">
                              <MapPin size={14} />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-700/50 px-3 py-1.5 rounded-full">
                            <Calendar size={14} />
                            <span className="text-sm font-medium">{exp.period}</span>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${exp.color} shadow-lg`}>
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
                        <h4 className="flex items-center gap-2 text-lg font-semibold text-neutral-900 dark:text-white mb-4">
                          <Sparkles size={18} className="text-primary-500" />
                          Key Achievements
                        </h4>
                        <ul className="grid gap-3">
                          {exp.responsibilities.map((responsibility, respIndex) => (
                            <motion.li
                              key={respIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: (index * 0.2) + (respIndex * 0.05) }}
                              className="flex items-start gap-3 group"
                            >
                              <CheckCircle2 
                                size={18} 
                                className={`flex-shrink-0 mt-0.5 text-transparent bg-gradient-to-br ${exp.color} rounded-full group-hover:scale-110 transition-transform`}
                                style={{ stroke: 'url(#gradient)' }}
                              />
                              <div className={`w-5 h-5 flex-shrink-0 mt-0.5 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center`}>
                                <CheckCircle2 size={14} className="text-white" />
                              </div>
                              <span className="text-neutral-600 dark:text-neutral-400 leading-relaxed group-hover:text-neutral-900 dark:group-hover:text-neutral-200 transition-colors">
                                {responsibility}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};