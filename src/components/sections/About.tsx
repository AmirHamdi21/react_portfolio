import { ArrowUpRight } from 'lucide-react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { PanelHead } from '../ui/PanelHead';
import { SectionFade } from '../ui/SectionFade';

const facts = [
  'Arabic — native',
  'English — fluent',
  'Military status — postponed',
];

export const About = () => {
  return (
    <SectionWrapper id="about">
      <PanelHead
        title="About"
        note="owner’s record · junior Flutter / mobile role wanted"
      />
      <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6 items-start">
        {/* Narrative */}
        <SectionFade>
          <div className="space-y-5 max-w-[66ch]">
            <p className="text-lg md:text-xl leading-relaxed text-ink text-balance">
              Flutter developer and Communication &amp; Electronics Engineering
              graduate, building cross-platform mobile apps with{' '}
              <span className="text-amber font-medium">
                Dart, Flutter, Firebase, and BLoC/Cubit
              </span>
              .
            </p>
            <p className="text-[15px] leading-relaxed text-ink-dim">
              Built EduVerse, a multi-role educational platform with a NestJS and
              MySQL backend and AI integration. Seeking a junior Flutter / mobile
              developer role where I can ship reliable, well-structured features
              from day one.
            </p>
            <ul className="flex flex-wrap gap-2 pt-1">
              {facts.map((fact) => (
                <li key={fact}>
                  <span className="chip">{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </SectionFade>

        {/* Education module */}
        <SectionFade delay={0.08}>
          <aside className="bg-panel border border-edge rounded-md overflow-hidden">
            <div className="bg-panel-2 border-b border-edge px-5 py-2.5 font-mono text-[12px] text-ink-dim flex items-center justify-between">
              <span>edu</span>
              <span className="text-ink-faint">module</span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-ink leading-snug">
                B.Sc. Communication &amp; Electronics Engineering
              </h3>
              <p className="text-[13.5px] text-ink-dim mt-1">
                Alexandria University — Faculty of Engineering
              </p>
              <p className="font-mono text-[12px] text-ink-faint mt-1 tabular">
                09/2021 – 07/2026 · Alexandria, EG
              </p>

              <div className="my-5 border-t border-edge" />

              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] text-ink-faint mb-1">CGPA</p>
                  <p className="text-2xl font-semibold text-ink tabular leading-none">
                    3.65
                    <span className="text-[13px] font-medium text-ink-faint"> / 4.00</span>
                  </p>
                </div>
                <span className="chip border-amber text-amber">Excellent</span>
              </div>

              <div className="my-5 border-t border-edge" />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[13.5px] font-medium text-ink">Graduation project</p>
                  <p className="text-[13px] text-ink-dim mt-1 leading-snug">
                    EduVerse — educational management platform with AI integration
                  </p>
                </div>
                <a
                  href="#projects"
                  className="mt-0.5 inline-flex shrink-0 text-amber hover:text-ink transition-colors duration-200"
                  aria-label="View the EduVerse graduation project"
                >
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
          </aside>
        </SectionFade>
      </div>
    </SectionWrapper>
  );
};
