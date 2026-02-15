import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Award, BookOpen, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

const certificates = [
  {
    title: 'Mobile App Development',
    issuer: 'DEPI Internship',
    date: '16/5/2025',
    credentialUrl: 'https://drive.google.com/file/d/1vLifxjxbDknzKo02ltHUAOFb9GzbFx2u/view?usp=drive_link',
    color: 'from-blue-500 to-indigo-500',
    icon: '📱',
  },
  {
    title: 'Business English Track',
    issuer: 'Berlitz Egypt',
    date: '16/5/2025',
    credentialUrl: 'https://drive.google.com/file/d/16o_pmpnxObutOYeeOH-MZygdhYL2hGsc/view?usp=sharing',
    color: 'from-emerald-500 to-teal-500',
    icon: '🌐',
  },
  {
    title: 'Firebase Integration',
    issuer: 'Platform Name',
    date: 'Coming Soon',
    credentialUrl: '',
    color: 'from-amber-500 to-orange-500',
    icon: '🔥',
  },
];

const courses = [
  { name: 'Advanced Flutter Development', icon: '💙', progress: 100 },
  { name: 'Firebase for Mobile Apps', icon: '🔥', progress: 100 },
  { name: 'Android Development with Java/Kotlin', icon: '🤖', progress: 85 },
  { name: 'UI/UX Design Principles', icon: '🎨', progress: 90 },
  { name: 'State Management with Bloc', icon: '🧩', progress: 100 },
  { name: 'Database Design and Implementation', icon: '🗄️', progress: 95 },
];

export const Certificates = () => {
  return (
    <SectionWrapper id="certificates" className="bg-white dark:bg-neutral-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
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
            <Award size={14} />
            Achievements
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Certificates &{' '}
            <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              Courses
            </span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
            Continuous learning journey in mobile development and software engineering
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Certificates Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/20">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                Certificates
              </h3>
            </motion.div>

            <div className="space-y-5">
              {certificates.map((certificate, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  onClick={() => certificate.credentialUrl && window.open(certificate.credentialUrl, '_blank', 'noopener,noreferrer')}
                  className={`group relative bg-white dark:bg-neutral-800/80 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-700/50 overflow-hidden hover:shadow-xl transition-all duration-300 ${certificate.credentialUrl ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  {/* Gradient Border */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${certificate.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  <div className={`h-1 bg-gradient-to-r ${certificate.color}`} />

                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className={`w-14 h-14 bg-gradient-to-br ${certificate.color} rounded-2xl flex items-center justify-center shadow-lg text-2xl`}
                      >
                        {certificate.icon}
                      </motion.div>

                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {certificate.title}
                        </h4>
                        <p className="text-neutral-600 dark:text-neutral-400 mb-2">
                          {certificate.issuer}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-500">
                          <Calendar size={14} />
                          <span>{certificate.date}</span>
                        </div>
                      </div>

                      {certificate.credentialUrl ? (
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => e.stopPropagation()}
                          className={`p-3 bg-gradient-to-br ${certificate.color} rounded-xl text-white shadow-lg hover:shadow-xl transition-all`}
                        >
                          <ExternalLink size={18} />
                        </motion.div>
                      ) : (
                        <div className="p-3 bg-neutral-200 dark:bg-neutral-700 rounded-xl text-neutral-400 dark:text-neutral-500">
                          <ExternalLink size={18} />
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Courses Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                Courses & Training
              </h3>
            </motion.div>

            <div className="bg-white dark:bg-neutral-800/50 rounded-3xl p-6 shadow-xl border border-neutral-200 dark:border-neutral-700/50">
              <div className="space-y-4">
                {courses.map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ x: 5 }}
                    className="group flex items-center gap-4 p-4 bg-neutral-50 dark:bg-neutral-700/30 rounded-xl border border-transparent hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300"
                  >
                    <span className="text-2xl">{course.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-neutral-800 dark:text-neutral-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {course.name}
                        </span>
                        <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                          {course.progress}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-neutral-200 dark:bg-neutral-600 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${course.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="h-full bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"
                        />
                      </div>
                    </div>
                    {course.progress === 100 && (
                      <CheckCircle size={20} className="text-emerald-500" />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-6 p-4 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-xl border border-primary-100 dark:border-primary-800/30"
              >
                <p className="text-center text-neutral-600 dark:text-neutral-400 text-sm">
                  🎯 Continuous learning through online platforms, workshops, and hands-on projects
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};