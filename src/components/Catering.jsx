import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Leaf, ShieldCheck, Sparkles, MessageCircle } from 'lucide-react';

export default function Catering() {
  const whatsappNumber = '9838956703';
  const whatsappMsg = encodeURIComponent('Namaste Shri Sai Tent & Light House, I would like to enquire about your Pure Vegetarian Catering and Bhandara setup services.');
  const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=${whatsappMsg}`;

  const cateringFeatures = [
    {
      id: 'cat-1',
      titleEn: '100% Pure Vegetarian',
      titleHi: '100% शुद्ध शाकाहारी रसोई',
      description: 'Strictly pure vegetarian food preparation. Special arrangements for No Onion & Garlic (बिना लहसुन-प्याज) meals upon request.',
      icon: Leaf,
      color: 'text-emerald-500 bg-emerald-500/10'
    },
    {
      id: 'cat-2',
      titleEn: 'Bhandara & Mass Seating',
      titleHi: 'भव्य भंडारा एवं भोजन व्यवस्था',
      description: 'Years of expertise organizing large-scale community feeding, bhandara catering stalls, and comfortable guest seating layouts.',
      icon: ChefHat,
      color: 'text-amber-500 bg-amber-500/10'
    },
    {
      id: 'cat-3',
      titleEn: 'High Hygiene Standards',
      titleHi: 'पूर्ण स्वच्छता एवं शुद्धता',
      description: 'Strict adherence to cleanliness and sanitation guidelines during food preparation, transport, and catering presentation.',
      icon: ShieldCheck,
      color: 'text-sky-500 bg-sky-500/10'
    },
    {
      id: 'cat-4',
      titleEn: 'Exquisite Food Stall Decor',
      titleHi: 'आकर्षक फूड स्टॉल सजावट',
      description: 'Stunning catering buffet setup matching the main wedding/event theme, with elegant food warmers and server layouts.',
      icon: Sparkles,
      color: 'text-accent-gold bg-accent-gold/10'
    }
  ];

  return (
    <section id="catering" className="relative py-24 bg-primary-navy border-t border-accent-gold/10 overflow-hidden">
      {/* Background Graphic Blobs */}
      <div className="absolute top-1/2 right-0 h-80 w-80 rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-accent-gold/5 blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-emerald-500 flex items-center justify-center gap-2">
            <Leaf className="h-4 w-4 fill-current text-emerald-500" />
            100% PURE VEG CATERING
          </span>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            शुद्ध शाकाहारी केटरिंग सेवा उपलब्ध
          </h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mt-4" />
          <p className="mt-4 text-base text-warm-white/70 font-medium">
            स्वादिष्ट, स्वच्छ और 100% शाकाहारी भोजन व्यवस्था आपके खास अवसरों के लिए
          </p>
        </div>

        {/* Layout: Image on Left, Feature Cards on Right */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
          
          {/* Catering Cover Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative group"
          >
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-accent-gold/20 opacity-75 blur-lg transition duration-1000 group-hover:opacity-100"></div>
            <div className="relative h-96 w-full overflow-hidden rounded-2xl border border-accent-gold/20 shadow-2xl">
              <img
                src="/catering.jpg"
                alt="Pure Vegetarian Indian Wedding Catering buffet"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-transparent to-transparent"></div>
              
              {/* Badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-primary-navy/85 border border-emerald-500/30 p-4 backdrop-blur-sm text-center">
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider block mb-1">
                  विशिष्ट केटरिंग सेवा
                </span>
                <p className="text-sm font-semibold text-white">
                  शादी, भंडारा एवं सभी मांगलिक अवसरों के लिए
                </p>
              </div>
            </div>
          </motion.div>

          {/* Features Checklist */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {cateringFeatures.map((feat) => {
                const IconComp = feat.icon;
                return (
                  <div
                    key={feat.id}
                    className="p-6 rounded-2xl bg-primary-blue/15 border border-accent-gold/15 transition-all duration-300 hover:border-emerald-500/30 hover:bg-primary-blue/25"
                  >
                    <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${feat.color}`}>
                      <IconComp className="h-5 w-5" />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-accent-gold/80 block">
                      {feat.titleEn}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-white mb-2">
                      {feat.titleHi}
                    </h4>
                    <p className="text-xs sm:text-sm text-warm-white/70 leading-relaxed font-medium">
                      {feat.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Quick Enquire button */}
            <div className="pt-4 flex justify-start">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-emerald-700 transition-colors focus:outline-none"
              >
                <MessageCircle className="h-4 w-4 fill-white" />
                <span>पूछताछ करें / Enquire Catering</span>
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
