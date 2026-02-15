import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { ContactForm } from '../ui/ContactForm';
import { Mail, Phone, Github, Linkedin, MessageCircle, MapPin, Clock, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'amirhamdi2112@gmail.com',
    href: 'mailto:amirhamdi2112@gmail.com',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+20 1030825155',
    href: 'tel:+201030825155',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Amir Mohamed Hamdi',
    href: 'https://www.linkedin.com/in/amir-mohamed-hamdi',
    color: 'from-blue-600 to-blue-400',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'AmirHamdi21',
    href: 'https://github.com/AmirHamdi21',
    color: 'from-neutral-700 to-neutral-500',
  },
];

export const Contact = () => {
  return (
    <SectionWrapper id="contact" className="bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />

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
            <MessageCircle size={14} />
            Get In Touch
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Let's Work{' '}
            <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Info Card */}
            <div className="bg-white dark:bg-neutral-800/80 rounded-3xl p-8 shadow-xl border border-neutral-200 dark:border-neutral-700/50">
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                Let's Connect
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a conversation about mobile development and technology.
              </p>

              {/* Location */}
              <div className="flex items-center gap-4 mb-8 p-4 bg-neutral-50 dark:bg-neutral-700/30 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 dark:text-white">Location</p>
                  <p className="text-neutral-600 dark:text-neutral-400">Alexandria, Egypt</p>
                </div>
              </div>

              {/* Contact Links */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4 p-4 bg-neutral-50 dark:bg-neutral-700/30 rounded-2xl border border-transparent hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">{info.label}</p>
                      <p className="font-medium text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {info.value}
                      </p>
                    </div>
                    <Send size={18} className="text-neutral-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4 p-5 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-200 dark:border-emerald-800/30"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-emerald-700 dark:text-emerald-400">Quick Response</p>
                <p className="text-sm text-emerald-600 dark:text-emerald-500">
                  I typically respond within 24 hours
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white dark:bg-neutral-800/80 p-8 md:p-10 rounded-3xl shadow-2xl border border-neutral-200 dark:border-neutral-700/50">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                    Send a Message
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Fill out the form and I'll get back to you
                  </p>
                </div>
              </div>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};