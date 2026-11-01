import { SectionWrapper } from '../ui/SectionWrapper';
import { PanelHead } from '../ui/PanelHead';
import { SectionFade } from '../ui/SectionFade';
import { ContactForm } from '../ui/ContactForm';

const contactInfo = [
  {
    key: 'email',
    value: 'amirhamdi2112@gmail.com',
    href: 'mailto:amirhamdi2112@gmail.com',
  },
  {
    key: 'phone',
    value: '+20 103 082 5155',
    href: 'tel:+201030825155',
  },
  {
    key: 'linkedin',
    value: 'Amir Mohamed Hamdi',
    href: 'https://www.linkedin.com/in/amir-mohamed-hamdi',
  },
  {
    key: 'github',
    value: 'AmirHamdi21',
    href: 'https://github.com/AmirHamdi21',
  },
];

export const Contact = () => {
  return (
    <SectionWrapper id="contact">
      <PanelHead title="Open channel" note="typical response ≤ 24h" />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-3.5 items-start">
        {/* Channels */}
        <SectionFade>
          <div className="grid gap-2.5">
            {contactInfo.map((info) => (
              <a
                key={info.key}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 bg-panel border border-edge rounded-md px-5 py-4 hover:border-amber hover:[@media(hover:hover)]:translate-x-[3px] transition-all duration-200"
              >
                <span className="font-mono text-[11px] text-ink-faint w-[72px] shrink-0">{info.key}</span>
                <span className="text-[14px] text-ink truncate">{info.value}</span>
              </a>
            ))}
            <p className="mt-2 text-[13px] text-ink-dim leading-relaxed max-w-[52ch]">
              Open to junior Flutter / mobile roles, freelance builds, and
              conversations about mobile development. Use any channel above.
            </p>
          </div>
        </SectionFade>

        {/* Form — kept functional (mailto), restyled to the system */}
        <SectionFade delay={0.08}>
          <div className="bg-panel border border-edge rounded-md overflow-hidden">
            <div className="bg-panel-2 border-b border-edge px-5 py-2.5 font-mono text-[12px] text-ink-dim flex items-center justify-between">
              <span>compose</span>
              <span className="text-ink-faint">opens your mail client</span>
            </div>
            <div className="p-6">
              <ContactForm />
            </div>
          </div>
        </SectionFade>
      </div>
    </SectionWrapper>
  );
};
