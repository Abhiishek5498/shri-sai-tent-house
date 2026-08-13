import React from 'react';
import { motion } from 'framer-motion';
import { 
  Tent, 
  Lightbulb, 
  Heart, 
  PartyPopper, 
  Sparkles, 
  Crown, 
  Calendar, 
  CheckSquare,
  MessageCircle 
} from 'lucide-react';
import { services } from '../data/services';

const iconMap = {
  Tent: Tent,
  Lightbulb: Lightbulb,
  Heart: Heart,
  PartyPopper: PartyPopper,
  Sparkles: Sparkles,
  Crown: Crown,
  Calendar: Calendar,
  CheckSquare: CheckSquare
};

export default function Services() {
  const whatsappNumber = '9838956703';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="services" className="relative py-24 bg-primary-navy/98">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/3 right-10 h-72 w-72 rounded-full bg-accent-gold/5 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-10 h-72 w-72 rounded-full bg-crimson/5 blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-widest text-accent-gold"
          >
            OUR SERVICES
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            हमारी सेवाएं
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-0.5 w-24 bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto mt-4"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-base sm:text-lg text-warm-white/70 font-medium"
          >
            आपके समारोह के लिए एक ही जगह पर सम्पूर्ण व्यवस्था
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Sparkles;
            const encodedQuery = encodeURIComponent(service.queryText);
            const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=${encodedQuery}`;

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-primary-blue/30 border border-accent-gold/15 backdrop-blur-sm transition-all duration-300 hover:border-accent-gold/40 hover:bg-primary-blue/50 hover:shadow-xl hover:shadow-accent-gold/5"
              >
                <div>
                  {/* Card Image Cover */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/90 via-transparent to-transparent z-10"></div>
                    <img
                      src={service.image}
                      alt={service.titleEn}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Floating Icon badge */}
                    <div className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-primary-navy/80 border border-accent-gold/30 text-accent-gold shadow-md">
                      <IconComponent className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-6">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent-gold/80 block mb-1">
                      {service.titleEn}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-white mb-2">
                      {service.titleHi}
                    </h3>
                    <p className="text-xs sm:text-sm text-warm-white/70 leading-relaxed font-medium">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Card CTA Action */}
                <div className="p-6 pt-0">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-accent-gold/20 bg-primary-navy/50 py-3 text-xs sm:text-sm font-bold text-accent-gold tracking-wide transition-all duration-300 group-hover:bg-accent-gold group-hover:text-primary-navy group-hover:border-accent-gold"
                  >
                    <MessageCircle className="h-4 w-4 fill-current" />
                    <span>Enquire Now</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
