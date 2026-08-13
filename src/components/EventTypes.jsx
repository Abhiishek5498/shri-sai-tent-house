import React from 'react';
import { motion } from 'framer-motion';

export default function EventTypes() {
  const events = [
    {
      id: 'event-wedding',
      titleEn: 'Wedding',
      titleHi: 'शुभ विवाह 💍',
      imageUrl: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=800&auto=format&fit=crop',
      alt: 'Luxury Indian Wedding Mandap decoration'
    },
    {
      id: 'event-engagement',
      titleEn: 'Engagement',
      titleHi: 'सगाई समारोह 🎉',
      imageUrl: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop',
      alt: 'Ring ceremony stage and flower decor'
    },
    {
      id: 'event-birthday',
      titleEn: 'Birthday Party',
      titleHi: 'जन्मदिन उत्सव 🎂',
      imageUrl: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop',
      alt: 'Birthday event decoration with balloons'
    },
    {
      id: 'event-reception',
      titleEn: 'Reception',
      titleHi: 'रिसेप्शन पार्टी 🌸',
      imageUrl: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop',
      alt: 'Royal reception stage decor and seating'
    },
    {
      id: 'event-religious',
      titleEn: 'Religious Functions',
      titleHi: 'धार्मिक एवं भजन संध्या 🙏',
      imageUrl: '/gate_peacock.jpg',
      alt: 'Traditional pooja decoration with flowers'
    },
    {
      id: 'event-family',
      titleEn: 'Family Functions',
      titleHi: 'पारिवारिक मांगलिक कार्य 🏠',
      imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop',
      alt: 'Home mandap and entrance flower decoration'
    },
    {
      id: 'event-social',
      titleEn: 'Social Events',
      titleHi: 'सामाजिक समारोह 🎊',
      imageUrl: '/gate_red.jpg',
      alt: 'Large public and social gathering tent'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section className="relative py-24 bg-primary-navy">
      {/* Decorative Radial Background */}
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-crimson/5 blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-accent-gold">EVENTS WE SERVE</span>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            आयोजन जो हम सजाते हैं
          </h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto mt-4" />
          <p className="mt-4 text-base text-warm-white/70 font-medium">
            सभी प्रकार के पारिवारिक, सामाजिक एवं मांगलिक समारोहों के लिए सर्वश्रेष्ठ सजावट
          </p>
        </div>

        {/* Events Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-2xl border border-accent-gold/15 h-64 cursor-default ${
                index === events.length - 1 ? 'sm:col-span-2 lg:col-span-3 xl:col-span-1' : ''
              }`}
            >
              {/* Event Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={event.imageUrl}
                  alt={event.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Dark Blue Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-primary-blue/60 to-transparent transition-opacity duration-300 group-hover:opacity-90"></div>
              </div>

              {/* Event Content text */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent-gold block mb-1">
                  {event.titleEn}
                </span>
                <h3 className="font-serif text-xl font-bold text-white tracking-wide">
                  {event.titleHi}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
