import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/AmirHamdi21',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/amir-mohamed-hamdi',
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    href: 'mailto:amirhamdi2112@gmail.com',
    label: 'Email',
  },
  {
    icon: Phone,
    href: 'tel:+201030825155',
    label: 'Phone',
  },
];

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
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
    <footer className="bg-neutral-900 dark:bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-12"
        >
          {/* Brand & Bio */}
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer inline-block"
              onClick={scrollToTop}
            >
              <span className="text-2xl font-bold">
                Amir<span className="text-primary-400">Dev</span>
              </span>
            </motion.div>
            <p className="text-neutral-300 leading-relaxed">
              Flutter Developer & Software Engineer passionate about creating 
              high-quality mobile applications. Based in Alexandria, Egypt.
            </p>
            <p className="text-sm text-neutral-400">
              "Passionate About Mobile, Driven by Innovation"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-neutral-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="space-y-3 mb-6">
              <a
                href="mailto:amirhamdi2112@gmail.com"
                className="block text-neutral-300 hover:text-primary-400 transition-colors duration-200"
              >
                amirhamdi2112@gmail.com
              </a>
              <a
                href="tel:+201030825155"
                className="block text-neutral-300 hover:text-primary-400 transition-colors duration-200"
              >
                +20 1030825155
              </a>
              <p className="text-neutral-400">Alexandria, Egypt</p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300"
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
          className="border-t border-neutral-800 pt-8 mt-12 text-center"
        >
          <p className="text-neutral-400 flex items-center justify-center gap-2">
            © {currentYear} Amir Mohamed Hamdi El Sayed. Made with 
            <Heart size={16} className="text-red-400" fill="currentColor" />
            and React
          </p>
        </motion.div>
      </div>
    </footer>
  );
};