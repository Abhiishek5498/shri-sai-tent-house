import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Star } from 'lucide-react';

export default function Hero() {
  const whatsappNumber = '9838956703';
  const whatsappMsg = encodeURIComponent('Namaste Shri Sai Tent & Light House, I would like to enquire about your event decoration services. Please contact me.');
  const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=${whatsappMsg}`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Dark Blue & Crimson Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1920&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary-navy/85 via-primary-blue/80 to-primary-navy/95"></div>
      </div>

      {/* Decorative Traditional Border Patterns (subtle gold lighting blobs) */}
      <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-accent-gold/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-crimson/10 blur-[130px] pointer-events-none"></div>

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Subtle Accent Crown Icon/Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-6 flex items-center gap-2 rounded-full border border-accent-gold/30 bg-accent-gold/5 px-4 py-1.5 backdrop-blur-sm"
          >
            <Star className="h-4 w-4 fill-accent-gold text-accent-gold animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-champagne sm:text-sm">
              Premium Event & Decoration Partner
            </span>
            <Star className="h-4 w-4 fill-accent-gold text-accent-gold animate-pulse" />
          </motion.div>

          {/* Hindi Main Title */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
          >
            श्री साईं टेन्ट <br className="hidden sm:inline" />
            <span className="gold-gradient-text">& लाइट हाउस</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            variants={itemVariants}
            className="mt-6 text-xl font-medium tracking-wide text-accent-champagne sm:text-2xl md:text-3xl"
          >
            आपके हर समारोह को बनाएं यादगार ✨
          </motion.h2>

          {/* Core Services Tagline */}
          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-2xl text-sm font-medium tracking-wider text-warm-white/80 sm:text-base md:text-lg"
          >
            Tent <span className="text-accent-gold">•</span> Lighting{' '}
            <span className="text-accent-gold">•</span> Jaymala{' '}
            <span className="text-accent-gold">•</span> Balloon Decoration{' '}
            <span className="text-accent-gold">•</span> Complete Event Setup
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md"
          >
            <a
              href="tel:+919838956703"
              className="flex items-center justify-center gap-3 w-full sm:w-auto rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] px-8 py-4 text-base font-bold text-primary-navy shadow-lg shadow-yellow-600/20 hover:scale-105 hover:shadow-yellow-600/35 transition-all duration-300 focus:outline-none"
            >
              <Phone className="h-5 w-5 fill-primary-navy" />
              <span>📞 Call Now</span>
            </a>
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full sm:w-auto rounded-full border border-emerald-500 bg-emerald-500/10 px-8 py-4 text-base font-bold text-emerald-400 backdrop-blur-sm hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-md focus:outline-none"
            >
              <MessageCircle className="h-5 w-5 fill-current" />
              <span>💬 WhatsApp Us</span>
            </a>
          </motion.div>

          {/* Trust Line */}
          <motion.p
            variants={itemVariants}
            className="mt-12 text-xs font-semibold uppercase tracking-widest text-warm-white/60 border-t border-warm-white/10 pt-4 px-6 sm:text-sm"
          >
            📍 खलीलाबाद एवं आसपास के क्षेत्रों में विश्वसनीय इवेंट एवं टेन्ट सेवाएं
          </motion.p>
        </motion.div>
      </div>

      {/* Decorative Bottom Curve Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-primary-navy to-transparent pointer-events-none"></div>
    </section>
  );
}
