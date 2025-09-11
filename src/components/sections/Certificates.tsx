import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { CertificateCard } from '../ui/CertificateCard';
import { Award, BookOpen, ExternalLink } from 'lucide-react';

// Placeholder certificates - Amir will update with actual Google Drive links
const certificates = [
  {
    title: 'Mobile App Development',
    issuer: 'DEPI Internship',
    date: '16/5/2025',
    credentialUrl: 'https://drive.google.com/file/d/1vLifxjxbDknzKo02ltHUAOFb9GzbFx2u/view?usp=drive_link', // TODO: Add Google Drive link
  },
  {
    title: 'Business English Track',
    issuer: 'Berlitz Egypt',
    date: '16/5/2025',
    credentialUrl: 'https://drive.google.com/file/d/16o_pmpnxObutOYeeOH-MZygdhYL2hGsc/view?usp=sharing', // TODO: Add Google Drive link
  },
  {
    title: 'Firebase Integration',
    issuer: 'Platform Name',
    date: 'Coming Soon',
    credentialUrl: '', // TODO: Add Google Drive link
  },
];

// Placeholder courses - Amir will update with actual course details
const courses = [
  'Advanced Flutter Development',
  'Firebase for Mobile Apps',
  'Android Development with Java/Kotlin',
  'UI/UX Design Principles',
  'State Management with Bloc',
  'Database Design and Implementation',
];

export const Certificates = () => {
  return (
    <SectionWrapper id="certificates" className="bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            <h2 className="text-4xl font-bold text-neutral-900 dark:text-white">
              Certificates & Courses
            </h2>
          </div>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-4" />
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
            Professional certifications and continuous learning journey in mobile development and software engineering.
          </p>
        </motion.div>

        {/* Developer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-lg p-6 mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <ExternalLink className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            <h3 className="text-lg font-semibold text-primary-700 dark:text-primary-300">
              Certificate Links
            </h3>
          </div>
          <p className="text-primary-700 dark:text-primary-300">
            Amir will update this section with actual certificate Google Drive links and course details.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certificates Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                  Certificates
                </h3>
              </div>
            </motion.div>

            <div className="space-y-6">
              {certificates.map((certificate, index) => (
                <CertificateCard
                  key={index}
                  title={certificate.title}
                  issuer={certificate.issuer}
                  date={certificate.date}
                  credentialUrl={certificate.credentialUrl}
                  index={index}
                />
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
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                  Courses & Training
                </h3>
              </div>
            </motion.div>

            <div className="space-y-4">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:shadow-md hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full" />
                    <span className="text-neutral-700 dark:text-neutral-300 font-medium">
                      {course}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 p-4 bg-neutral-200 dark:bg-neutral-800 rounded-lg text-center"
            >
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Continuous learning through online platforms, workshops, and hands-on projects
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};