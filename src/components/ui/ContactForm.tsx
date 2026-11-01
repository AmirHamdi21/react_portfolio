import { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Opens the visitor's mail client — no backend required.
    const mailtoLink = `mailto:amirhamdi2112@gmail.com?subject=Contact from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
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

  const inputClass =
    'w-full px-3.5 py-2.5 bg-field border border-edge rounded text-[14px] text-ink placeholder:text-ink-faint focus:border-amber focus:outline-none focus:ring-1 focus:ring-amber transition-all duration-200';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block font-mono text-[11px] text-ink-faint mb-1.5">
            name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="Your name"
            autoComplete="name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-mono text-[11px] text-ink-faint mb-1.5">
            email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="you@domain.com"
            autoComplete="email"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block font-mono text-[11px] text-ink-faint mb-1.5">
          message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className={`${inputClass} resize-y min-h-[120px]`}
          placeholder="What can I help you with?"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span
            className="w-4 h-4 border-2 rounded-full animate-spin"
            style={{ borderColor: 'var(--c-ok)', borderTopColor: 'transparent' }}
            aria-hidden="true"
          />
        ) : (
          <>send message →</>
        )}
      </button>
    </form>
  );
};
