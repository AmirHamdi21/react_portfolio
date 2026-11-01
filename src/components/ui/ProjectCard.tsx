import { motion } from 'framer-motion';
import { ExternalLinkIcon } from './ExternalLinkIcon';

interface ProjectCardProps {
  title: string;
  dateRange: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  liveLabel?: string;
  badge?: string;
  featured?: boolean;
  index: number;
}

/**
 * Device-window project card (MASTER.md §7): panel-2 title bar with window
 * dots, mono title, right-aligned real date range, real content only.
 */
export const ProjectCard = ({
  title,
  dateRange,
  description,
  technologies,
  imageUrl,
  githubUrl,
  liveUrl,
  liveLabel = 'Live Demo',
  badge,
  featured = false,
  index,
}: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.06, 0.18), ease: 'easeOut' }}
      className="bg-panel border border-edge rounded-md overflow-hidden hover:border-edge-hi transition-colors duration-300 h-full flex flex-col"
    >
      {/* Title bar */}
      <div className="bg-panel-2 border-b border-edge px-4 py-2.5 font-mono text-[12px] text-ink-dim flex items-center gap-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <i className="w-[9px] h-[9px] rounded-full bg-amber" />
          <i className="w-[9px] h-[9px] rounded-full bg-edge-hi" />
          <i className="w-[9px] h-[9px] rounded-full bg-edge-hi" />
        </span>
        <span className="truncate">{title.toLowerCase()}</span>
        <span className="ml-auto text-ink-faint tabular shrink-0">{dateRange}</span>
      </div>

      {/* Optional visual */}
      {imageUrl && (
        <div className="border-b border-edge bg-field">
          <img
            src={imageUrl}
            alt={`${title} preview`}
            className="w-full max-h-56 object-cover"
          />
        </div>
      )}

      {/* Body */}
      <div className={`p-6 flex flex-col flex-1 ${featured ? 'lg:p-7' : ''}`}>
        {badge && (
          <span className="chip border-amber text-amber self-start mb-3">{badge}</span>
        )}
        <h3 className={`${featured ? 'text-2xl' : 'text-lg'} font-semibold tracking-tight text-ink`}>
          {title}
        </h3>
        <p className={`mt-2 text-ink-dim ${featured ? 'text-[14.5px]' : 'text-[13px]'} leading-relaxed`}>
          {description}
        </p>

        <div className="flex flex-wrap gap-2 my-5">
          {technologies.map((tech) => (
            <span key={tech} className="chip">{tech.toLowerCase()}</span>
          ))}
        </div>

        {(githubUrl || liveUrl) && (
          <div className="flex flex-wrap gap-2.5 mt-auto">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !text-[12.5px] !px-4 !py-2">
                github <ExternalLinkIcon className="h-3 w-3" />
              </a>
            )}
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary !text-[12.5px] !px-4 !py-2">
                {liveLabel.toLowerCase()} ↓
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
};
