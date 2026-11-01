import { SectionWrapper } from '../ui/SectionWrapper';
import { PanelHead } from '../ui/PanelHead';
import { SectionFade } from '../ui/SectionFade';
import { SkillBadge } from '../ui/SkillBadge';

/**
 * Capability modules — weight is expressed with load dots (calibrated),
 * never with percent bars (banned: MASTER.md §8.9).
 */
const modules = [
  {
    name: 'core runtime',
    level: 4,
    items: <><b>Flutter</b> · <b>Dart</b> · <b>BLoC / Cubit</b> · <b>GetX</b></>,
  },
  {
    name: 'data & storage',
    level: 3,
    items: <><b>Firebase</b> · MySQL · Sqflite · <b>REST APIs</b> · Supabase · Hive</>,
  },
  {
    name: 'backend',
    level: 2,
    items: <><b>NestJS</b> · PHP · WebSockets · push (FCM)</>,
  },
  {
    name: 'adjacent',
    level: 1,
    items: <>Android (Java/Kotlin) · Python · Java · C · Assembly</>,
  },
];

const supportingTech = [
  'Git & GitHub',
  'OOP',
  'State management',
  'Push notifications',
  'Linux',
  'Windows',
];

const softSkills = [
  'Flexible',
  'Time management',
  'Multitasking',
  'Attention to detail',
  'Self-motivation',
  'Team collaboration',
  'Creativity',
];

const LoadDots = ({ level }: { level: number }) => (
  <span
    role="img"
    aria-label={`daily use level ${level} of 4`}
    className="flex gap-1"
  >
    {Array.from({ length: 4 }, (_, i) => (
      <i
        key={i}
        aria-hidden="true"
        className={`w-2.5 h-[3px] rounded-sm ${i < level ? 'bg-amber' : 'bg-edge-hi'}`}
      />
    ))}
  </span>
);

export const Skills = () => {
  return (
    <SectionWrapper id="skills">
      <PanelHead
        title="Capability cluster"
        note="no percent bars — dots indicate daily use"
      />

      <SectionFade>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {modules.map((mod) => (
            <div
              key={mod.name}
              className="bg-panel border border-edge rounded p-[18px] hover:border-edge-hi transition-colors duration-200"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-[12.5px] font-semibold text-ink">{mod.name}</span>
                <LoadDots level={mod.level} />
              </div>
              <p className="font-mono text-[12px] leading-[1.8] text-ink-dim">{mod.items}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 font-mono text-[11px] text-ink-faint">
          method platform: <span className="text-ink-dim">Linux · Windows · Git &amp; GitHub</span>
        </p>
      </SectionFade>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
        <SectionFade>
          <h3 className="font-mono text-[12px] text-ink-faint mb-3.5">supporting technologies</h3>
          <div className="flex flex-wrap gap-2">
            {supportingTech.map((tech, i) => (
              <SkillBadge key={tech} skill={tech} index={i} />
            ))}
          </div>
        </SectionFade>
        <SectionFade delay={0.08}>
          <h3 className="font-mono text-[12px] text-ink-faint mb-3.5">soft skills</h3>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill, i) => (
              <SkillBadge key={skill} skill={skill} index={i} />
            ))}
          </div>
        </SectionFade>
      </div>
    </SectionWrapper>
  );
};
