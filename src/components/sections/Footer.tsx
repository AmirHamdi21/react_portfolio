import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Heart, ArrowUp, Sparkles } from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/AmirHamdi21',
    label: 'GitHub',
    color: 'hover:bg-neutral-700',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/amir-mohamed-hamdi',
    label: 'LinkedIn',
    color: 'hover:bg-blue-600',
  },
  {
    icon: Mail,
    href: 'mailto:amirhamdi2112@gmail.com',
    label: 'Email',
    color: 'hover:bg-red-500',
  },
  {
    icon: Phone,
    href: 'tel:+201030825155',
    label: 'Phone',
    color: 'hover:bg-emerald-500',
  },
];

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 dark:from-neutral-950 dark:to-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -5, scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full flex items-center justify-center shadow-xl shadow-primary-500/30 hover:shadow-2xl transition-all"
      >
        <ArrowUp size={20} />
      </motion.button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-12 mb-12"
        >
          {/* Brand & Bio */}
          <div className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer inline-block"
              onClick={scrollToTop}
            >
              <span className="text-3xl font-bold">
                Amir<span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">Dev</span>
              </span>
            </motion.div>
            <p className="text-neutral-400 leading-relaxed">
              Flutter Developer & Software Engineer passionate about creating 
              high-quality mobile applications that make a difference.
            </p>
            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <Sparkles size={14} className="text-primary-400" />
              <span className="italic">"Passionate About Mobile, Driven by Innovation"</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full" />
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => scrollToSection(link.href)}
                    className="text-neutral-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full" />
              Connect
            </h3>
            <div className="space-y-4 mb-8">
              <motion.a
                whileHover={{ x: 5 }}
                href="mailto:amirhamdi2112@gmail.com"
                className="block text-neutral-400 hover:text-primary-400 transition-colors duration-200 text-sm"
              >
                amirhamdi2112@gmail.com
              </motion.a>
              <motion.a
                whileHover={{ x: 5 }}
                href="tel:+201030825155"
                className="block text-neutral-400 hover:text-primary-400 transition-colors duration-200 text-sm"
              >
                +20 1030825155
              </motion.a>
              <p className="text-neutral-500 text-sm">Alexandria, Egypt</p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className={`w-11 h-11 bg-neutral-800 ${social.color} rounded-xl flex items-center justify-center transition-all duration-300 border border-neutral-700 hover:border-transparent`}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-neutral-800 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-500 text-sm flex items-center gap-2">
              © {currentYear} Amir Mohamed Hamdi El Sayed
            </p>
            <p className="text-neutral-500 text-sm flex items-center gap-2">
              Made with 
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart size={14} className="text-red-500" fill="currentColor" />
              </motion.span>
              using React & Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};