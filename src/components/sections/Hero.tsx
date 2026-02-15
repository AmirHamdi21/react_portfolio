import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Download, Eye, Mail, ChevronDown, Sparkles, Code2, Smartphone } from 'lucide-react';
import profilePic from "../../assets/profile_picture.jpg";

const FloatingIcon = ({ icon: Icon, className, delay }: { icon: React.ElementType; className: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, type: 'spring', stiffness: 200 }}
    className={`absolute ${className}`}
  >
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      className="p-3 bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-2xl border border-white/20 dark:border-white/10 shadow-xl"
    >
      <Icon className="w-6 h-6 text-primary-500 dark:text-primary-400" />
    </motion.div>
  </motion.div>
);

export const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-primary-50/30 to-neutral-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      
      {/* Gradient Orbs */}
      <motion.div
        style={{ y }}
        className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollY, [0, 500], [0, -100]) }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-500/10 to-purple-500/10 rounded-full blur-3xl"
      />

      {/* Floating Icons */}
      <FloatingIcon icon={Code2} className="top-1/4 left-[15%] hidden lg:block" delay={1} />
      <FloatingIcon icon={Smartphone} className="top-1/3 right-[15%] hidden lg:block" delay={1.2} />
      <FloatingIcon icon={Sparkles} className="bottom-1/3 left-[20%] hidden lg:block" delay={1.4} />

      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Profile Avatar */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
            className="relative mx-auto w-44 h-44 mb-10"
          >
            {/* Rotating Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-3 rounded-full border-2 border-dashed border-primary-500/30"
            />
            
            {/* Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full blur-lg opacity-40" />
            
            <img
              src={profilePic}
              alt="Amir Mohamed Hamdi El Sayed"
              className="relative w-full h-full object-cover rounded-full shadow-2xl ring-4 ring-white dark:ring-neutral-800"
            />
            
            {/* Status Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: 'spring' }}
              className="absolute -bottom-2 -right-2 w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30 rotate-12"
            >
              <span className="text-2xl">👋</span>
            </motion.div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full"
          >
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
              Available for opportunities
            </span>
          </motion.div>

          {/* Main Content */}
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-neutral-900 dark:text-white leading-tight"
            >
              Amir Mohamed{' '}
              <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-primary-600 bg-clip-text text-transparent bg-[size:200%] animate-gradient">
                Hamdi
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl sm:text-2xl lg:text-3xl font-medium text-neutral-600 dark:text-neutral-300"
            >
              <span className="text-primary-600 dark:text-primary-400 font-semibold">Flutter Developer</span>
              {' '}· Software Engineer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed italic"
            >
              "Passionate About Mobile, Driven by Innovation"
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center justify-center gap-2 text-neutral-500 dark:text-neutral-400"
            >
              <MapPin size={18} className="text-primary-500" />
              <span className="text-base">Alexandria, Egypt</span>
            </motion.div>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl shadow-xl shadow-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/40 transition-all duration-300 font-medium text-lg"
            >
              <Eye size={22} className="group-hover:scale-110 transition-transform" />
              View Projects
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="group flex items-center gap-3 px-8 py-4 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white border-2 border-neutral-200 dark:border-neutral-700 rounded-2xl shadow-lg hover:shadow-xl hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 font-medium text-lg"
            >
              <Mail size={22} className="group-hover:rotate-12 transition-transform" />
              Contact Me
            </motion.button>
          </motion.div>

          {/* Download CV Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="pt-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/13FKRMhMUIdmcIaRKRZUZVdISL16LV3vX/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-100 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 rounded-xl hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-300 font-medium border border-neutral-200 dark:border-neutral-700"
            >
              <Download size={18} />
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection('about')}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-neutral-400 hover:text-primary-500 transition-colors"
        >
          <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
          <ChevronDown size={20} />
        </motion.button>
      </motion.div>
    </section>
  );
};