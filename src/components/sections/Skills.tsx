import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Code, Wrench, Heart, Sparkles } from 'lucide-react';

const technicalSkills = [
  { skill: 'Flutter', percentage: 100, color: 'from-blue-500 to-cyan-500' },
  { skill: 'Dart', percentage: 100, color: 'from-blue-600 to-blue-400' },
  { skill: 'SQLite', percentage: 100, color: 'from-emerald-500 to-teal-500' },
  { skill: 'GetX & Bloc', percentage: 100, color: 'from-purple-500 to-pink-500' },
  { skill: 'Git & GitHub', percentage: 95, color: 'from-orange-500 to-red-500' },
  { skill: 'MySQL', percentage: 95, color: 'from-blue-500 to-indigo-500' },
  { skill: 'Python', percentage: 90, color: 'from-yellow-500 to-green-500' },
  { skill: 'Firebase', percentage: 80, color: 'from-amber-500 to-orange-500' },
  { skill: 'Java', percentage: 70, color: 'from-red-500 to-orange-500' },
  { skill: 'Supabase', percentage: 70, color: 'from-emerald-500 to-green-500' },
  { skill: 'Kotlin', percentage: 30, color: 'from-purple-600 to-purple-400' },
];

const supportingTech = [
  { name: 'PHP', icon: '🐘' },
  { name: 'Hive', icon: '🗄️' },
  { name: 'WebSockets', icon: '🔌' },
  { name: 'UI/UX', icon: '🎨' },
  { name: 'Push Notifications', icon: '🔔' },
  { name: 'Windows & Linux', icon: '💻' },
];

const softSkills = [
  { name: 'Flexible', icon: '🧘' },
  { name: 'Time Management', icon: '⏰' },
  { name: 'Multitasking', icon: '🎯' },
  { name: 'Attention to Detail', icon: '🔍' },
  { name: 'Self-Motivation', icon: '🚀' },
  { name: 'Team Collaboration', icon: '🤝' },
  { name: 'Creativity', icon: '💡' },
];

const SkillBar = ({ skill, percentage, color, index }: { skill: string; percentage: number; color: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    className="group"
  >
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        {skill}
      </span>
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.05 + 0.3 }}
        className="text-sm font-bold text-neutral-900 dark:text-white"
      >
        {percentage}%
      </motion.span>
    </div>
    <div className="relative h-2.5 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: index * 0.05 + 0.2, ease: "easeOut" }}
        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${color} rounded-full`}
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.05 + 0.5 }}
        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${color} rounded-full blur-sm opacity-50`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  </motion.div>
);

const SkillBadge = ({ name, icon, index }: { name: string; icon: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    whileHover={{ scale: 1.05, y: -3 }}
    className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-neutral-800 rounded-xl shadow-md border border-neutral-200 dark:border-neutral-700 hover:border-primary-300 dark:hover:border-primary-600 hover:shadow-lg transition-all duration-300 cursor-default"
  >
    <span className="text-lg">{icon}</span>
    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{name}</span>
  </motion.div>
);

export const Skills = () => {
  return (
    <SectionWrapper id="skills" className="bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-800 dark:to-neutral-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />

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
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-4"
          >
            <Sparkles size={14} />
            My Expertise
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Skills &{' '}
            <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit for building exceptional mobile experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-neutral-800/50 rounded-3xl p-8 shadow-xl border border-neutral-200 dark:border-neutral-700/50"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/20">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                Technical Skills
              </h3>
            </div>

            <div className="space-y-5">
              {technicalSkills.map((skill, index) => (
                <SkillBar
                  key={skill.skill}
                  skill={skill.skill}
                  percentage={skill.percentage}
                  color={skill.color}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Supporting Technologies & Soft Skills */}
          <div className="space-y-8">
            {/* Supporting Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white dark:bg-neutral-800/50 rounded-3xl p-8 shadow-xl border border-neutral-200 dark:border-neutral-700/50"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                  Supporting Tech
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {supportingTech.map((tech, index) => (
                  <SkillBadge key={tech.name} name={tech.name} icon={tech.icon} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-neutral-800/50 rounded-3xl p-8 shadow-xl border border-neutral-200 dark:border-neutral-700/50"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center shadow-lg shadow-pink-500/20">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                  Soft Skills
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};