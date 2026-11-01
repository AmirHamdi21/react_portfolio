import { SectionWrapper } from '../ui/SectionWrapper';
import { PanelHead } from '../ui/PanelHead';
import { SectionFade } from '../ui/SectionFade';
import { ExternalLinkIcon } from '../ui/ExternalLinkIcon';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
}

const certificates: Certificate[] = [
  {
    title: 'DEPI Mobile App Developer – Certificate of Achievement',
    issuer: 'Digital Egypt Pioneers Initiative (DEPI)',
    date: '2025',
    credentialUrl: 'https://drive.google.com/file/d/1vLifxjxbDknzKo02ltHUAOFb9GzbFx2u/view?usp=drive_link',
  },
  {
    title: 'DEPI Business English Track (Round 2) – Certificate of Completion',
    issuer: 'Digital Egypt Pioneers Initiative (DEPI)',
    date: '2025',
    credentialUrl: 'https://drive.google.com/file/d/16o_pmpnxObutOYeeOH-MZygdhYL2hGsc/view?usp=drive_link',
  },
];

export const Certificates = () => {
  return (
    <SectionWrapper id="certificates">
      <PanelHead
        title="Credentials"
        note="verified · links open the original certificate"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 items-stretch">
        {certificates.map((cert, index) => (
          <SectionFade key={cert.title} delay={index * 0.06} className="h-full">
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full items-center gap-5 bg-panel border border-edge rounded-md p-5 hover:border-edge-hi hover:[@media(hover:hover)]:translate-x-[3px] transition-all duration-200"
            >
              <span className="font-mono text-[11px] text-ink-faint w-14 shrink-0 tabular">
                {cert.date}
              </span>
              <span className="flex-1 min-w-0 flex flex-col justify-center gap-1">
                <span className="font-mono text-[11px] text-ink-faint truncate">
                  {cert.issuer}
                </span>
                <span className="text-[13.5px] font-medium text-ink leading-snug">
                  {cert.title}
                </span>
              </span>
              <span className="font-mono text-[12px] text-ink-faint group-hover:text-amber transition-colors duration-200 shrink-0">
                <span className="inline-flex items-center gap-1.5">
                  view <ExternalLinkIcon className="h-3 w-3" />
                </span>
              </span>
            </a>
          </SectionFade>
        ))}
      </div>
    </SectionWrapper>
  );
};
