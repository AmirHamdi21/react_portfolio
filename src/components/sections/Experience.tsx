import { SectionWrapper } from '../ui/SectionWrapper';
import { PanelHead } from '../ui/PanelHead';
import { SectionFade } from '../ui/SectionFade';

const experiences = [
  {
    title: 'Mobile Development Intern',
    company: 'Digital Egypt Pioneers Initiative (DEPI)',
    location: 'Remote',
    period: 'Nov 2024 – May 2025',
    description: 'A 6-month intensive mobile development internship at the Mobile track of the Digital Egypt Pioneers Initiative (DEPI), Ministry of Communications and Information Technology.',
    responsibilities: [
      'Built Fitlytic, a fitness tracking app with Flutter and Dart featuring workout and calorie tracking, using BLoC/Cubit for state management and Firebase / MySQL + PHP REST API',
      'Integrated Firebase Cloud Messaging (FCM) to deliver push notifications for workout reminders',
      'Developed multiple Flutter applications applying structured UI development, reusable widgets, and mobile app best practices',
      'Collaborated in a team of 5 using Git and GitHub to deliver the Fitlytic app over 6 months',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'ALX',
    location: 'Remote',
    period: '2023 – 2024',
    description: 'Completed an intensive software engineering program focused on full-stack development and industry best practices.',
    responsibilities: [
      'Developed proficiency in multiple programming languages and frameworks',
      'Participated in collaborative coding projects and peer programming sessions',
      'Learned software engineering principles including version control, testing, and deployment',
      'Completed hands-on projects demonstrating problem-solving and technical skills',
      'Engaged in continuous learning and professional development activities',
    ],
  },
];

export const Experience = () => {
  return (
    <SectionWrapper id="experience">
      <PanelHead title="Field log" note="experience & internships" />
      <div className="bg-panel border border-edge rounded-md">
        {experiences.map((exp, index) => (
          <SectionFade key={exp.title} delay={index * 0.06}>
            <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-x-6 gap-y-2 p-6 md:p-[26px] border-b border-edge last:border-b-0">
              <p className="font-mono text-[12px] text-ink-faint leading-relaxed tabular pt-1">
                {exp.period} · {exp.location.toLowerCase()}
              </p>
              <div>
                <h3 className="text-[15.5px] font-semibold text-ink">{exp.title}</h3>
                <p className="font-mono text-[12px] text-amber my-2">{exp.company}</p>
                <p className="text-[13px] text-ink-dim max-w-[66ch] leading-relaxed">
                  {exp.description}
                </p>
                <ul className="mt-3.5 space-y-2">
                  {exp.responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13px] text-ink-dim leading-relaxed max-w-[66ch]">
                      <span aria-hidden="true" className="font-mono text-[11px] text-amber mt-[3px]">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionFade>
        ))}
      </div>
    </SectionWrapper>
  );
};
