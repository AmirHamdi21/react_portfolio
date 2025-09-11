import { motion } from 'framer-motion';
import { GraduationCap, Globe, Shield } from 'lucide-react';
import { SectionWrapper } from '../ui/SectionWrapper';

export const About = () => {
  return (
    <SectionWrapper id="about" className="bg-white dark:bg-neutral-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Career Objective */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
              Career Objective
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">
              A skilled mobile developer specializing in building high-quality, cross-platform mobile applications. 
              Expertise in Flutter and Android development (Java/Kotlin) ensures seamless, high-performance apps 
              with smooth UI/UX, optimized for speed, scalability, and maintainability. Focused on delivering 
              efficient, well-structured code that guarantees a flawless user experience and rapid deployment. 
              Passionate about innovation, problem-solving, and delivering top-notch mobile solutions across 
              freelance projects and full-time roles.
            </p>
          </motion.div>

          {/* Education & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Education */}
            <div className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-neutral-900 dark:text-white">Education</h4>
                </div>
              </div>
              <div className="space-y-2">
                <h5 className="font-medium text-neutral-900 dark:text-white">
                  Alexandria University
                </h5>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Faculty of Engineering, Communication & Electronics
                </p>
                <p className="text-neutral-600 dark:text-neutral-400">
                  2021 – 2026 (Expected)
                </p>
                <p className="text-primary-600 dark:text-primary-400 font-semibold">
                  CGPA: 3.61 / 4.00 (Excellent)
                </p>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-neutral-900 dark:text-white">Languages</h4>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-neutral-700 dark:text-neutral-300">Arabic</span>
                  <span className="text-primary-600 dark:text-primary-400 font-medium">Native</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-700 dark:text-neutral-300">English</span>
                  <span className="text-primary-600 dark:text-primary-400 font-medium">Fluent</span>
                </div>
              </div>
            </div>

            {/* Military Status */}
            <div className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-neutral-900 dark:text-white">Military Status</h4>
                </div>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400">Postponed</p>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};