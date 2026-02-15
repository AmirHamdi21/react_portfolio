import { motion } from 'framer-motion';
import { GraduationCap, Globe, Shield, Target, Zap, Users } from 'lucide-react';
import { SectionWrapper } from '../ui/SectionWrapper';

const highlights = [
  { icon: Target, label: 'Goal-Oriented', description: 'Focused on delivering results' },
  { icon: Zap, label: 'Fast Learner', description: 'Quick to adapt new technologies' },
  { icon: Users, label: 'Team Player', description: 'Collaborative mindset' },
];

export const About = () => {
  return (
    <SectionWrapper id="about" className="bg-white dark:bg-neutral-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
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
            className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-4"
          >
            About Me
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Crafting Digital{' '}
            <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group flex items-center gap-4 p-5 bg-neutral-50 dark:bg-neutral-800/50 rounded-2xl border border-neutral-200 dark:border-neutral-700/50 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 dark:text-white">{item.label}</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Career Objective */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-purple-500 rounded-full" />
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 pl-4">
                Career Objective
              </h3>
              <div className="space-y-4 pl-4">
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">
                  A skilled mobile developer specializing in building high-quality, cross-platform mobile applications. 
                  Expertise in <span className="text-primary-600 dark:text-primary-400 font-medium">Flutter</span> and 
                  Android development (<span className="text-primary-600 dark:text-primary-400 font-medium">Java/Kotlin</span>) 
                  ensures seamless, high-performance apps with smooth UI/UX.
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">
                  Focused on delivering efficient, well-structured code that guarantees a flawless user experience 
                  and rapid deployment. Passionate about innovation, problem-solving, and delivering top-notch 
                  mobile solutions across freelance projects and full-time roles.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Education */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-800 dark:to-neutral-800/50 p-6 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-700/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-neutral-900 dark:text-white">Education</h4>
              </div>
              <div className="space-y-2">
                <h5 className="font-semibold text-neutral-900 dark:text-white">
                  Alexandria University
                </h5>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  Faculty of Engineering, Communication & Electronics
                </p>
                <p className="text-neutral-500 dark:text-neutral-500 text-sm">
                  2021 – 2026 (Expected)
                </p>
                <div className="mt-3 p-3 bg-primary-50 dark:bg-primary-900/20 rounded-xl">
                  <p className="text-primary-600 dark:text-primary-400 font-bold text-lg">
                    CGPA: 3.63 / 4.00
                    <span className="text-sm font-normal ml-2">(Excellent)</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-800 dark:to-neutral-800/50 p-6 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-700/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-neutral-900 dark:text-white">Languages</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-700 dark:text-neutral-300">Arabic</span>
                  <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-medium">
                    Native
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-700 dark:text-neutral-300">English</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                    Fluent
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Military Status */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-800 dark:to-neutral-800/50 p-6 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-700/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-neutral-900 dark:text-white">Military Status</h4>
                  <p className="text-amber-600 dark:text-amber-400 font-medium">Postponed</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};