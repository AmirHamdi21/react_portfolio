import { motion } from 'framer-motion';
import { Github, ExternalLink, Calendar, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { ImageLightbox } from './ImageLightbox';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface ProjectCardProps {
  title: string;
  dateRange: string;
  description: string;
  technologies: string[];
  images?: string[];
  githubUrl?: string;
  liveUrl?: string;
  index: number;
  status?: 'live' | 'development' | 'coming-soon';
}

export const ProjectCard = ({
  title,
  dateRange,
  description,
  technologies,
  images = [],
  githubUrl,
  liveUrl,
  index,
  status = 'live',
}: ProjectCardProps) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxInitialIndex, setLightboxInitialIndex] = useState(0);

  const statusConfig = {
    'live': { label: 'Live', color: 'bg-emerald-500', glow: 'shadow-emerald-500/30' },
    'development': { label: 'In Development', color: 'bg-amber-500', glow: 'shadow-amber-500/30' },
    'coming-soon': { label: 'Coming Soon', color: 'bg-blue-500', glow: 'shadow-blue-500/30' },
  };

  const openLightbox = (index: number) => {
    setLightboxInitialIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        className="group relative bg-white dark:bg-neutral-800/80 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-neutral-200/50 dark:border-neutral-700/50 backdrop-blur-sm"
      >
        {/* Gradient Border Effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Image Carousel Section */}
        <div className="relative h-60 md:h-72 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 overflow-hidden">
          {images.length > 0 ? (
            <>
              <Swiper
                modules={[Navigation, Pagination, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                onSwiper={setSwiperInstance}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                className="h-full w-full project-swiper"
              >
                {images.map((img, imgIndex) => (
                  <SwiperSlide key={imgIndex}>
                    <div 
                      className="relative h-full w-full cursor-pointer group/image"
                      onClick={() => openLightbox(imgIndex)}
                    >
                      <img 
                        src={img} 
                        alt={`${title} screenshot ${imgIndex + 1}`} 
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/image:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      
                      {/* Expand Icon on Hover */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"
                      >
                        <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm">
                          <Maximize2 className="w-6 h-6 text-white" />
                        </div>
                      </motion.div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              
              {/* Custom Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); swiperInstance?.slidePrev(); }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 dark:bg-neutral-900/90 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white dark:hover:bg-neutral-800 hover:scale-110"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={18} className="text-neutral-700 dark:text-neutral-300" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); swiperInstance?.slideNext(); }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 dark:bg-neutral-900/90 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white dark:hover:bg-neutral-800 hover:scale-110"
                    aria-label="Next image"
                  >
                    <ChevronRight size={18} className="text-neutral-700 dark:text-neutral-300" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              {images.length > 1 && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full bg-black/60 text-white text-xs font-medium backdrop-blur-sm">
                  {activeIndex + 1} / {images.length}
                </div>
              )}
            </>
          ) : (
            <div className="h-full flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                className="text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-purple-600 rounded-3xl mx-auto mb-4 flex items-center justify-center shadow-2xl shadow-primary-500/30">
                  <span className="text-white font-bold text-3xl">
                    {title.charAt(0)}
                  </span>
                </div>
                <span className="text-neutral-500 dark:text-neutral-400 text-sm font-medium">
                  Screenshots coming soon
                </span>
              </motion.div>
            </div>
          )}

          {/* Status Badge */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.15 + 0.3 }}
            className={`absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full ${statusConfig[status].color} ${statusConfig[status].glow} text-white text-xs font-semibold shadow-lg`}
          >
            <span className="flex items-center gap-1.5">
              {status === 'live' && <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />}
              {statusConfig[status].label}
            </span>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="p-6 relative">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
            >
              {title}
            </motion.h3>
            <div className="flex items-center gap-1.5 text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-700/50 px-2.5 py-1 rounded-full">
              <Calendar size={12} />
              <span className="text-xs font-medium">{dateRange}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-5 line-clamp-3">
            {description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech, techIndex) => (
              <motion.span
                key={techIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-neutral-100 to-neutral-50 dark:from-neutral-700/80 dark:to-neutral-700/50 text-neutral-700 dark:text-neutral-300 rounded-lg border border-neutral-200 dark:border-neutral-600/50 hover:border-primary-300 dark:hover:border-primary-600 transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            {githubUrl && githubUrl !== '#' && (
              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-neutral-100 dark:bg-neutral-700/50 text-neutral-700 dark:text-neutral-300 rounded-xl hover:bg-neutral-200 dark:hover:bg-neutral-600/50 transition-all duration-200 text-sm font-medium border border-neutral-200 dark:border-neutral-600/50 group/btn"
              >
                <Github size={16} className="group-hover/btn:rotate-12 transition-transform" />
                Source Code
              </motion.a>
            )}
            {liveUrl && liveUrl !== '#' && (
              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-200 text-sm font-medium shadow-lg shadow-primary-500/25 group/btn"
              >
                <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                Live Demo
              </motion.a>
            )}
            {(!githubUrl || githubUrl === '#') && (!liveUrl || liveUrl === '#') && (
              <div className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-neutral-100 dark:bg-neutral-700/30 text-neutral-500 dark:text-neutral-400 rounded-xl text-sm font-medium border border-dashed border-neutral-300 dark:border-neutral-600">
                Links coming soon
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Lightbox */}
      {images.length > 0 && (
        <ImageLightbox
          images={images}
          initialIndex={lightboxInitialIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          title={title}
        />
      )}
    </>
  );
};