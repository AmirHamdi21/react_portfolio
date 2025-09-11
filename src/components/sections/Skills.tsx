import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { ProgressBar } from '../ui/ProgressBar';
import { SkillBadge } from '../ui/SkillBadge';
import { Code, Wrench, Heart } from 'lucide-react';

const technicalSkills = [
  { skill: 'Flutter', percentage: 100 },
  { skill: 'Dart', percentage: 100 },
  { skill: 'SQLite', percentage: 100 },
  { skill: 'GetX & Bloc', percentage: 100 },
  { skill: 'Git & GitHub', percentage: 95 },
  { skill: 'MySQL', percentage: 95 },
  { skill: 'Python', percentage: 90 },
  { skill: 'Firebase', percentage: 80 },
  { skill: 'Microsoft Office', percentage: 80 },
  { skill: 'Java', percentage: 70 },
  { skill: 'Supabase', percentage: 70 },
  { skill: 'Kotlin', percentage: 30 },
];

const supportingTech = [
  'PHP', 'Hive', 'WebSockets', 'UI/UX', 'Push Notifications', 'Windows & Linux'
];

const softSkills = [
  'Flexible', 'Time Management', 'Multitasking', 'Attention to Detail', 
  'Self-Motivation', 'Team Collaboration', 'Creativity'
];

export const Skills = () => {
  return (
    <SectionWrapper id="skills" className="bg-neutral-50 dark:bg-neutral-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                Technical Skills
              </h3>
            </div>

            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <ProgressBar
                  key={skill.skill}
                  skill={skill.skill}
                  percentage={skill.percentage}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Supporting Technologies & Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Supporting Technologies */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                  Supporting Technologies
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {supportingTech.map((tech, index) => (
                  <SkillBadge key={tech} skill={tech} index={index} />
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                  Soft Skills
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <SkillBadge key={skill} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};