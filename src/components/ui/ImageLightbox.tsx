import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Zoom } from 'swiper/modules';
import { useEffect, useState, useCallback } from 'react';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

interface ImageLightboxProps {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export const ImageLightbox = ({
  images,
  initialIndex,
  isOpen,
  onClose,
  title,
}: ImageLightboxProps) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') swiperInstance?.slidePrev();
    if (e.key === 'ArrowRight') swiperInstance?.slideNext();
  }, [onClose, swiperInstance]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  useEffect(() => {
    if (swiperInstance && isOpen) {
      swiperInstance.slideTo(initialIndex, 0);
    }
  }, [initialIndex, isOpen, swiperInstance]);

  const toggleZoom = () => {
    if (swiperInstance) {
      const zoom = swiperInstance.zoom;
      if (isZoomed) {
        zoom.out();
      } else {
        zoom.in();
      }
      setIsZoomed(!isZoomed);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
          />

          {/* Header */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ delay: 0.1 }}
            className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-gradient-to-b from-black/80 to-transparent"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-4">
              {title && (
                <h3 className="text-white font-semibold text-lg">{title}</h3>
              )}
              <span className="text-white/70 text-sm">
                {activeIndex + 1} / {images.length}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleZoom}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label={isZoomed ? "Zoom out" : "Zoom in"}
              >
                {isZoomed ? <ZoomOut size={20} /> : <ZoomIn size={20} />}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close lightbox"
              >
                <X size={24} />
              </motion.button>
            </div>
          </motion.div>

          {/* Main Swiper */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full h-full max-w-6xl max-h-[85vh] mx-4 my-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Swiper
              modules={[Navigation, Pagination, Keyboard, Zoom]}
              spaceBetween={0}
              slidesPerView={1}
              keyboard={{ enabled: true }}
              zoom={{ maxRatio: 3 }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              onSwiper={setSwiperInstance}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.activeIndex);
                setIsZoomed(false);
              }}
              className="h-full w-full lightbox-swiper"
            >
              {images.map((img, index) => (
                <SwiperSlide key={index} className="flex items-center justify-center">
                  <div className="swiper-zoom-container flex items-center justify-center h-full">
                    <img
                      src={img}
                      alt={`${title || 'Image'} ${index + 1}`}
                      className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                      draggable={false}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <motion.button
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => swiperInstance?.slidePrev()}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={28} />
                </motion.button>
                <motion.button
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => swiperInstance?.slideNext()}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all"
                  aria-label="Next image"
                >
                  <ChevronRight size={28} />
                </motion.button>
              </>
            )}
          </motion.div>

          {/* Thumbnail Strip */}
          {images.length > 1 && (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 px-4"
              onClick={(e) => e.stopPropagation()}
            >
              {images.map((img, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => swiperInstance?.slideTo(index)}
                  className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                    activeIndex === index
                      ? 'border-primary-500 opacity-100'
                      : 'border-white/20 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
