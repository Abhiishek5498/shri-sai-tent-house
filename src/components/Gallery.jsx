import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { galleryImages, galleryCategories } from '../data/gallery';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Filter images based on category selection
  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  // Lightbox navigation helpers
  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prevIndex) => 
      prevIndex === 0 ? filteredImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prevIndex) => 
      prevIndex === filteredImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  // Keyboard navigation inside Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') handlePrev(e);
      if (e.key === 'ArrowRight') handleNext(e);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredImages]);

  return (
    <section id="gallery" className="relative py-24 bg-primary-navy">
      {/* Decorative Gold Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-accent-gold/5 blur-[150px] pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-bold uppercase tracking-widest text-accent-gold">FEATURED GALLERY</span>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            हमारे काम की झलक
          </h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto mt-4" />
          <p className="mt-4 text-base text-warm-white/70 font-medium">
            शादी-विवाह और इवेंट्स के लिए की गई विशेष सजावटों की तस्वीरें
          </p>
        </div>

        {/* Filter Categories Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {galleryCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setLightboxIndex(null);
              }}
              className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 focus:outline-none ${
                activeCategory === category.id
                  ? 'text-primary-navy bg-accent-gold shadow-md'
                  : 'text-warm-white bg-primary-blue/30 hover:bg-primary-blue/60 hover:text-accent-gold border border-accent-gold/10'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Image Grid (Staggered Entrance) */}
        <motion.div 
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, index) => (
              <motion.div
                layout
                key={img.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightboxIndex(index)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-accent-gold/10 bg-primary-blue/20 aspect-4/3 sm:aspect-square"
              >
                {/* Image */}
                <img
                  src={img.imageUrl}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Dark Overlay & Reveal Text */}
                <div className="absolute inset-0 bg-primary-navy/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-6 z-10">
                  <div className="transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                    <Maximize2 className="h-6 w-6 text-accent-gold mb-3" />
                    <span className="text-[10px] font-bold tracking-widest text-accent-gold/95 uppercase block mb-1">
                      {img.category}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-white">
                      {img.title}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Overlay Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center bg-primary-navy/98 p-4 md:p-10 backdrop-blur-md"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 rounded-full bg-primary-blue/80 p-3 text-white border border-accent-gold/20 hover:bg-accent-gold hover:text-primary-navy transition-colors focus:outline-none"
              aria-label="Close Lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Left Nav Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 z-50 rounded-full bg-primary-blue/80 p-3 text-white border border-accent-gold/20 hover:bg-accent-gold hover:text-primary-navy transition-colors focus:outline-none"
              aria-label="Previous Image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Lightbox Content Container */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-2xl border border-accent-gold/25 bg-slate-950/40 shadow-2xl"
            >
              <img
                src={filteredImages[lightboxIndex].imageUrl}
                alt={filteredImages[lightboxIndex].alt}
                className="max-h-[75vh] w-auto max-w-full object-contain mx-auto"
              />
              
              {/* Image Details Bar */}
              <div className="bg-primary-navy/95 border-t border-accent-gold/15 p-4 text-center">
                <span className="text-[10px] font-bold tracking-widest text-accent-gold uppercase block mb-1">
                  {filteredImages[lightboxIndex].category}
                </span>
                <p className="font-serif text-lg font-bold text-white">
                  {filteredImages[lightboxIndex].title}
                </p>
              </div>
            </motion.div>

            {/* Right Nav Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 z-50 rounded-full bg-primary-blue/80 p-3 text-white border border-accent-gold/20 hover:bg-accent-gold hover:text-primary-navy transition-colors focus:outline-none"
              aria-label="Next Image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
