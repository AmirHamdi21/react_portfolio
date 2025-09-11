import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { ContactForm } from '../ui/ContactForm';
import { Mail, Phone, Github, Linkedin, MessageCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'amirhamdi2112@gmail.com',
    href: 'mailto:amirhamdi2112@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+20 1030825155',
    href: 'tel:+201030825155',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Amir Mohamed Hamdi',
    href: 'https://www.linkedin.com/in/amir-mohamed-hamdi',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'AmirHamdi21',
    href: 'https://github.com/AmirHamdi21',
  },
];

export const Contact = () => {
  return (
    <SectionWrapper id="contact" className="bg-neutral-50 dark:bg-neutral-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageCircle className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            <h2 className="text-4xl font-bold text-neutral-900 dark:text-white">
              Get In Touch
            </h2>
          </div>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-4" />
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you. 
            Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a conversation about mobile development and technology. 
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 bg-white dark:bg-neutral-900 rounded-xl shadow-md hover:shadow-lg border border-neutral-200 dark:border-neutral-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900 dark:text-white mb-1">
                      {info.label}
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-4 bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-lg"
            >
              <p className="text-primary-700 dark:text-primary-300 text-sm">
                <strong>Response Time:</strong> I typically respond within 24 hours. 
                Looking forward to hearing from you!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700"
          >
            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">
              Send a Message
            </h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};