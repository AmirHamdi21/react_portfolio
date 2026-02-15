import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User, MessageSquare, CheckCircle, Loader2 } from 'lucide-react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const mailtoLink = `mailto:amirhamdi2112@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const inputClasses = (field: string) => `
    w-full pl-12 pr-4 py-4 
    border-2 rounded-2xl
    bg-neutral-50 dark:bg-neutral-800/50
    text-neutral-900 dark:text-white 
    placeholder-neutral-400 dark:placeholder-neutral-500
    transition-all duration-300
    ${focusedField === field 
      ? 'border-primary-500 dark:border-primary-500 shadow-lg shadow-primary-500/10' 
      : 'border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600'
    }
    focus:outline-none focus:border-primary-500 dark:focus:border-primary-500
  `;

  const iconClasses = (field: string) => `
    absolute left-4 top-1/2 transform -translate-y-1/2 
    transition-colors duration-300
    ${focusedField === field 
      ? 'text-primary-500' 
      : 'text-neutral-400'
    }
  `;

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {/* Name Field */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="relative"
        >
          <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
            Your Name
          </label>
          <div className="relative">
            <User className={iconClasses('name')} size={20} />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              required
              className={inputClasses('name')}
              placeholder="John Doe"
            />
            {formData.name && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
              >
                <CheckCircle size={18} className="text-emerald-500" />
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Email Field */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className={iconClasses('email')} size={20} />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              required
              className={inputClasses('email')}
              placeholder="john@example.com"
            />
            {formData.email && formData.email.includes('@') && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
              >
                <CheckCircle size={18} className="text-emerald-500" />
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Message Field */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
          Your Message
        </label>
        <div className="relative">
          <MessageSquare className={`absolute left-4 top-4 transition-colors duration-300 ${
            focusedField === 'message' ? 'text-primary-500' : 'text-neutral-400'
          }`} size={20} />
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField(null)}
            required
            rows={5}
            className={`${inputClasses('message')} resize-none pt-4`}
            placeholder="Tell me about your project or just say hello..."
          />
        </div>
        <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
          {formData.message.length} / 500 characters
        </p>
      </motion.div>

      {/* Submit Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-2xl hover:from-primary-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-semibold text-lg shadow-xl shadow-primary-500/25 hover:shadow-2xl hover:shadow-primary-500/30"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={22} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={22} />
            Send Message
          </>
        )}
      </motion.button>
    </motion.form>
  );
};