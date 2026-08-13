import React from 'react';
import { Award, Palette, CheckCircle, UserCheck, Sparkles, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const benefits = [
    {
      id: 'benefit-1',
      titleEn: 'Quality Decoration',
      titleHi: 'उत्कृष्ट गुणवत्ता सजावट',
      description: 'We use high-quality drapes, fresh premium flowers, and state-of-the-art lighting fixtures to create a luxurious setup.',
      icon: Award
    },
    {
      id: 'benefit-2',
      titleEn: 'Attractive Designs',
      titleHi: 'आकर्षक और आधुनिक डिज़ाइन',
      description: 'Stay ahead with modern wedding decoration ideas and themes tailored exclusively to match your vision.',
      icon: Palette
    },
    {
      id: 'benefit-3',
      titleEn: 'Complete Event Setup',
      titleHi: 'सम्पूर्ण इवेंट व्यवस्था',
      description: 'One-stop management for catering areas, stage setups, sound layouts, seating arrangements, and primary tent housing.',
      icon: CheckCircle
    },
    {
      id: 'benefit-4',
      titleEn: 'Professional Service',
      titleHi: 'समय पर पेशेवर सेवा',
      description: 'Our experienced staff handles setups and tear-downs professionally, ensuring your event timeline is fully respected.',
      icon: UserCheck
    },
    {
      id: 'benefit-5',
      titleEn: 'Flexible Requirements',
      titleHi: 'बजट के अनुसार व्यवस्था',
      description: 'We adapt decoration sizes and setups to match the scaling, layout density, and specific budget of your social function.',
      icon: Sparkles
    },
    {
      id: 'benefit-6',
      titleEn: 'Local & Trustworthy',
      titleHi: 'स्थानीय एवं विश्वसनीय सेवा',
      description: 'Proudly serving Khalilabad and nearby regions. Being local, we are always accessible and ready to support.',
      icon: MapPin
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="relative py-24 bg-primary-navy/95 border-t border-accent-gold/10">
      {/* Background Graphic elements */}
      <div className="absolute top-1/4 left-10 h-64 w-64 rounded-full bg-accent-gold/5 blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-accent-gold">WHY CHOOSE US</span>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            हमें क्यों चुनें?
          </h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto mt-4" />
          <p className="mt-4 text-base text-warm-white/70 font-medium">
            विश्वास, गुणवत्ता और समय पर सर्वश्रेष्ठ सेवाएं ही हमारी पहचान हैं
          </p>
        </div>

        {/* Grid of benefits */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={benefit.id}
                variants={itemVariants}
                className="group relative rounded-2xl bg-primary-blue/20 border border-accent-gold/10 p-8 transition-all duration-300 hover:border-accent-gold/30 hover:-translate-y-1 hover:bg-primary-blue/35 hover:shadow-lg hover:shadow-accent-gold/5"
              >
                {/* Decorative border accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-gold/0 to-transparent transition-all duration-300 group-hover:via-accent-gold rounded-t-2xl"></div>

                {/* Icon wrapper */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gold/10 border border-accent-gold/25 text-accent-gold transition-colors duration-300 group-hover:bg-accent-gold group-hover:text-primary-navy">
                  <IconComponent className="h-6 w-6" />
                </div>

                {/* Content */}
                <span className="text-[10px] font-bold uppercase tracking-wider text-accent-gold/75 block mb-1">
                  {benefit.titleEn}
                </span>
                <h3 className="font-serif text-xl font-bold text-white mb-3">
                  {benefit.titleHi}
                </h3>
                <p className="text-sm text-warm-white/70 leading-relaxed font-medium">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
