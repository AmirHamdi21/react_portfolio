import { MapPin } from 'lucide-react';
import { SectionFade } from '../ui/SectionFade';
import profilePic from '../../assets/profile_picture.jpg';
import cvPdf from '../../assets/Amir_Hamdi_Flutter_Developer_CV.pdf';

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-14">
      <div className="space-y-7 sm:space-y-9">
        {/* Boot line — the one orchestrated moment (MASTER.md §6) */}
        <SectionFade>
          <p className="font-mono text-[12.5px] text-ink-faint flex items-center gap-2">
            <span
              aria-hidden="true"
              className="w-1.5 h-1.5 rounded-full bg-ok"
            />
            <span>
              $ whoami → <b className="text-ink font-medium">ready</b> · Flutter developer &amp; software engineer
            </span>
          </p>
        </SectionFade>

        {/* Headline + operator ID plate — the plate sits at the other end of the
            headline and stretches to its height on ALL sizes (mobile: narrow
            portrait, no caption — it can't fit honestly at that width).
            Master contract: square-ish, 1px edge frame, grayscale, mono caption
            (≥sm), no circle avatar. */}
        <SectionFade delay={0.06}>
          <div className="flex items-stretch justify-between gap-5 sm:gap-10">
            <h1 className="flex-1 min-w-0 max-w-[18ch] text-[clamp(1.9rem,5.4vw,4.2rem)] font-semibold leading-[1.08] tracking-[-0.025em] text-balance">
              Amir Mohamed Hamdi El Sayed — <span className="text-amber">Flutter Developer</span>
            </h1>
            <aside className="shrink-0 w-20 sm:w-32 lg:w-[9.5rem] flex flex-col">
              <div className="relative flex-1 min-h-0 overflow-hidden rounded border border-edge">
                <img
                  src={profilePic}
                  alt="Portrait of Amir Mohamed Hamdi El Sayed"
                  className="absolute inset-0 w-full h-full object-cover object-top grayscale contrast-105"
                />
              </div>
              <span
                aria-hidden="true"
                className="hidden sm:block font-mono text-[10px] text-ink-faint text-center mt-1.5 truncate"
              >
                operator · amir-hamdi
              </span>
            </aside>
          </div>
        </SectionFade>

        <SectionFade delay={0.12}>
          <dl className="flex flex-wrap gap-x-12 gap-y-6">
            <div>
              <dt className="font-mono text-[11px] text-ink-faint mb-1.5">education</dt>
              <dd className="text-[15px] text-ink">
                B.Sc. Communication &amp; Electronics Eng.{' '}
                <span className="text-ink-dim">· Alexandria University ’26</span>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] text-ink-faint mb-1.5">field record</dt>
              <dd className="text-[15px] text-ink tabular">
                6 mo internship · 3 shipped apps · 2 certs
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] text-ink-faint mb-1.5">calibration</dt>
              <dd className="text-[15px] text-ink">
                CGPA <span className="tabular">3.65 / 4.00</span>{' '}
                <span className="text-ink-dim">· Excellent</span>
              </dd>
            </div>
          </dl>
        </SectionFade>

        <SectionFade delay={0.18}>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => scrollToSection('projects')}
              className="btn btn-primary"
            >
              view projects →
            </button>
            <a
              href={cvPdf}
              download="Amir_Hamdi_Flutter_Developer_CV.pdf"
              className="btn btn-ghost"
            >
              download CV ↓
            </a>
            <span className="hidden sm:flex items-center gap-2 btn btn-ghost !border-transparent cursor-default" aria-label="Based in Alexandria, Egypt">
              <MapPin size={14} aria-hidden="true" />
              <span>Alexandria, Egypt</span>
            </span>
          </div>
        </SectionFade>
      </div>
    </section>
  );
};
