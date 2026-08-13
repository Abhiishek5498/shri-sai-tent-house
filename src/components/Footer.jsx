import React from 'react';
import { Phone, MapPin, ChevronRight, Heart } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'मुख्य पृष्ठ (Home)', href: '#home' },
    { name: 'हमारी सेवाएं (Services)', href: '#services' },
    { name: 'गैलरी (Gallery)', href: '#gallery' },
    { name: 'सम्पर्क करें (Contact)', href: '#contact' }
  ];

  const serviceLinks = [
    { name: 'Tent House (टेंट हाउस)', href: '#services' },
    { name: 'Lighting Decoration (लाइटिंग)', href: '#services' },
    { name: 'Jaymala Decoration (जयमाला)', href: '#services' },
    { name: 'Balloon Decoration (बैलून)', href: '#services' },
    { name: 'Wedding Decoration (विवाह)', href: '#services' }
  ];

  return (
    <footer className="relative bg-primary-navy border-t border-accent-gold/15 text-warm-white pt-16 pb-8">
      {/* Footer Top Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 mb-16">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <span className="font-serif text-2xl font-bold tracking-wide text-accent-gold">
              श्री साईं टेन्ट
            </span>
            <span className="text-[10px] font-semibold tracking-widest text-warm-white/70 uppercase mb-4 block">
              & लाइट हाउस • KHALILABAD
            </span>
            <p className="text-sm font-medium text-warm-white/60 leading-relaxed mb-6 max-w-sm">
              आपके हर समारोह को बनाएं यादगार। हम शादी, सगाई, जन्मदिन और सभी मांगलिक कार्यों के लिए विश्वसनीय टेन्ट और सजावट सेवाएं प्रदान करते हैं।
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-sm font-bold tracking-wider text-accent-gold uppercase mb-6 border-b border-accent-gold/10 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-1.5 text-xs sm:text-sm font-medium text-warm-white/60 hover:text-accent-gold transition-colors focus:outline-none"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-accent-gold/50 group-hover:text-accent-gold transition-colors" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-sm font-bold tracking-wider text-accent-gold uppercase mb-6 border-b border-accent-gold/10 pb-2">
              Our Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-1.5 text-xs sm:text-sm font-medium text-warm-white/60 hover:text-accent-gold transition-colors focus:outline-none"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-accent-gold/50 group-hover:text-accent-gold transition-colors" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm font-bold tracking-wider text-accent-gold uppercase mb-6 border-b border-accent-gold/10 pb-2">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start text-xs sm:text-sm font-medium text-warm-white/60">
                <MapPin className="h-4 w-4 text-accent-gold shrink-0 mt-0.5" />
                <span>मेहदावल रोड, निकट नई तहसील, खलीलाबाद - संत कबीर नगर</span>
              </li>
              <li className="flex gap-3 items-start text-xs sm:text-sm font-medium text-warm-white/60">
                <Phone className="h-4 w-4 text-accent-gold shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919838956703" className="hover:text-accent-gold transition-colors">9838956703</a>
                  <a href="tel:+919161842629" className="hover:text-accent-gold transition-colors">9161842629</a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom copyright block */}
        <div className="border-t border-accent-gold/10 pt-8 text-center flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-warm-white/40 uppercase tracking-widest">
          <p>© 2026 Shri Sai Tent & Light House. All Rights Reserved.</p>
          <div className="flex flex-col items-center sm:items-end gap-1 text-[10px] sm:text-xs font-semibold text-warm-white/45 tracking-widest text-center sm:text-right">
            <p>DESIGNED & DEVELOPED BY ABHISHEK CHAURASIYA</p>
            <p className="text-[9px] sm:text-[10px] tracking-wider normal-case">
              📞 +91 9161842629 &middot; ✉️ abhishekkld08@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
