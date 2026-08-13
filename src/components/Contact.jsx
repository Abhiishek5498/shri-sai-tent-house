import React from 'react';
import { Phone, MessageCircle, MapPin, User, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const primaryPhone = '9838956703';
  const secondaryPhone = '9161842629';
  const addressStr = 'मेहदावल रोड, निकट नई तहसील, खलीलाबाद – संत कबीर नगर, उत्तर प्रदेश';

  const googleMapsUrl = `https://maps.app.goo.gl/aYyaD5RugJCF837p7`;

  const whatsappMsg = encodeURIComponent('Namaste Shri Sai Tent & Light House, I would like to enquire about decoration services for my upcoming function.');
  const whatsappUrl = `https://wa.me/91${primaryPhone}?text=${whatsappMsg}`;

  return (
    <section id="contact" className="relative py-24 bg-primary-navy/98 border-t border-accent-gold/10">
      {/* Decorative Radial glow */}
      <div className="absolute top-1/2 left-10 h-72 w-72 rounded-full bg-accent-gold/5 blur-[125px] pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Contact Info Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-accent-gold">CONTACT US</span>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl leading-relaxed md:leading-normal">
            आपका अगला समारोह, हमारी जिम्मेदारी ✨
          </h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto mt-4" />
          <p className="mt-4 text-base sm:text-lg text-warm-white/70 font-semibold">
            अपने कार्यक्रम की तैयारी आज ही शुरू करें।
          </p>
        </div>

        {/* Contact Grid layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-stretch">

          {/* Info Card Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 rounded-3xl border border-accent-gold/15 bg-primary-blue/10 p-8 backdrop-blur-sm flex flex-col justify-between"
          >
            <div>
              <h3 className="font-serif text-2xl font-bold text-white mb-6">
                सम्पर्क सूत्र (Contact Details)
              </h3>

              <div className="space-y-6">

                {/* Owner details */}
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-gold/10 border border-accent-gold/20 text-accent-gold">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent-gold/80 block">
                      Owner (संचालक)
                    </span>
                    <p className="text-base font-bold text-white mt-1">
                      प्रो- रामजीत चौरसिया (Pro- Ramjeet Chaurasiya)
                    </p>
                  </div>
                </div>

                {/* Physical Address details */}
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-gold/10 border border-accent-gold/20 text-accent-gold">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent-gold/80 block">
                      Business Location (पता)
                    </span>
                    <p className="text-sm font-semibold text-white mt-1 leading-relaxed">
                      {addressStr}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Google Map Directions Action */}
            <div className="mt-12 pt-8 border-t border-accent-gold/10">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#D4AF37] px-6 py-4 text-sm font-bold text-primary-navy shadow-md hover:bg-[#C5A028] transition-colors focus:outline-none"
              >
                <Navigation className="h-4 w-4 fill-current" />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>

          </motion.div>

          {/* Quick Action Dialing Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 rounded-3xl border border-accent-gold/15 bg-primary-blue/15 p-8 backdrop-blur-sm flex flex-col justify-between"
          >
            <div>
              <h3 className="font-serif text-2xl font-bold text-white mb-6">
                तुरंत पूछताछ करें
              </h3>
              <p className="text-sm text-warm-white/70 font-medium mb-8 leading-relaxed">
                बुकिंग उपलब्धता और दरों की जानकारी के लिए नीचे दिए गए बटनों पर क्लिक करके हमसे कॉल या व्हाट्सएप के माध्यम से सीधे संपर्क करें।
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                {/* Phone Call 1 */}
                <a
                  href={`tel:+91${primaryPhone}`}
                  className="flex items-center gap-3 rounded-xl border border-accent-gold/30 bg-primary-navy/50 p-4 transition-all duration-300 hover:border-accent-gold hover:bg-accent-gold/10 group focus:outline-none"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#D4AF37] text-primary-navy group-hover:scale-105 transition-transform">
                    <Phone className="h-5 w-5 fill-current" />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-accent-gold block">
                      Primary Number
                    </span>
                    <span className="text-sm font-bold text-white font-sans">{primaryPhone}</span>
                  </div>
                </a>

                {/* Phone Call 2 */}
                <a
                  href={`tel:+91${secondaryPhone}`}
                  className="flex items-center gap-3 rounded-xl border border-accent-gold/30 bg-primary-navy/50 p-4 transition-all duration-300 hover:border-accent-gold hover:bg-accent-gold/10 group focus:outline-none"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#D4AF37] text-primary-navy group-hover:scale-105 transition-transform">
                    <Phone className="h-5 w-5 fill-current" />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-accent-gold block">
                      Secondary Number
                    </span>
                    <span className="text-sm font-bold text-white font-sans">{secondaryPhone}</span>
                  </div>
                </a>

              </div>
            </div>

            {/* WhatsApp Contact Action */}
            <div className="mt-8">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-xl bg-emerald-600 px-6 py-4 text-sm font-bold text-white hover:bg-emerald-700 transition-colors shadow-md focus:outline-none"
              >
                <MessageCircle className="h-5 w-5 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
