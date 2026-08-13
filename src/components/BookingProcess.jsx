import React from 'react';
import { PhoneCall, MessageSquare, Palette, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BookingProcess() {
  const steps = [
    {
      number: '01',
      titleEn: 'Contact Us',
      titleHi: 'हमसे सम्पर्क करें',
      description: 'Reach out easily by directly calling us or sending a WhatsApp message to discuss your event dates.',
      icon: PhoneCall
    },
    {
      number: '02',
      titleEn: 'Discuss Requirements',
      titleHi: 'आवश्यकताओं पर चर्चा',
      description: 'Tell us about the event type, venue location, estimated guest capacity, and your specific theme preferences.',
      icon: MessageSquare
    },
    {
      number: '03',
      titleEn: 'Choose Your Setup',
      titleHi: 'सजावट और सेटअप चुनें',
      description: 'Select the exact decoration services, lighting layouts, and stage setups that fit your social function.',
      icon: Palette
    },
    {
      number: '04',
      titleEn: 'We Set It Up',
      titleHi: 'पूर्ण और भव्य सेटअप',
      description: 'Our experienced team prepares the entire tenting and decoration layout at your venue exactly as agreed.',
      icon: Sparkles
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section className="relative py-24 bg-primary-navy/98 border-t border-accent-gold/10">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-10 h-72 w-72 rounded-full bg-accent-gold/5 blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-bold uppercase tracking-widest text-accent-gold">HOW IT WORKS</span>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            बुकिंग प्रक्रिया
          </h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto mt-4" />
          <p className="mt-4 text-base text-warm-white/70 font-medium">
            4 आसान चरणों में अपने कार्यक्रम की सजावट बुक करें
          </p>
        </div>

        {/* Process Timeline Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 relative"
        >
          {/* Timeline Horizontal Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-accent-gold/5 via-accent-gold/20 to-accent-gold/5 -translate-y-12 z-0"></div>

          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="group relative flex flex-col items-center text-center bg-primary-blue/15 border border-accent-gold/10 rounded-2xl p-8 backdrop-blur-sm z-10 transition-all duration-300 hover:border-accent-gold/30 hover:bg-primary-blue/25 hover:shadow-lg hover:shadow-accent-gold/5"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-6 bg-primary-navy border border-accent-gold/35 text-accent-gold font-serif text-lg font-bold rounded-full h-12 w-12 flex items-center justify-center shadow-lg shadow-black/40 group-hover:bg-accent-gold group-hover:text-primary-navy transition-colors duration-300">
                  {step.number}
                </div>

                {/* Step Icon */}
                <div className="mt-4 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-gold/5 border border-accent-gold/15 text-accent-gold/90 transition-transform duration-300 group-hover:scale-110 group-hover:text-accent-gold">
                  <IconComponent className="h-6 w-6" />
                </div>

                {/* Step Content */}
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent-gold/75 block mb-1">
                  {step.titleEn}
                </span>
                <h3 className="font-serif text-lg font-bold text-white mb-3">
                  {step.titleHi}
                </h3>
                <p className="text-xs sm:text-sm text-warm-white/70 leading-relaxed font-medium">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
