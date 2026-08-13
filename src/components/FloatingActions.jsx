import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingActions() {
  const whatsappNumber = '9838956703';
  const callNumber = '9838956703';
  const whatsappMsg = encodeURIComponent('Namaste Shri Sai Tent & Light House, I would like to enquire about your services for an upcoming event. Please share the details.');
  const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=${whatsappMsg}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 md:bottom-8 md:right-8">
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Us"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
      >
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
        </span>
        <MessageCircle className="h-7 w-7 fill-white transition-transform group-hover:rotate-12" />
        <span className="pointer-events-none absolute right-16 rounded bg-slate-900 px-2 py-1 text-xs font-semibold text-white opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap">
          WhatsApp Us
        </span>
      </a>

      {/* Call Button */}
      <a
        href={`tel:+91${callNumber}`}
        aria-label="Call Us"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#D4AF37] text-slate-950 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#C5A028] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
      >
        <Phone className="h-6 w-6 fill-slate-950 transition-transform group-hover:rotate-12" />
        <span className="pointer-events-none absolute right-16 rounded bg-slate-900 px-2 py-1 text-xs font-semibold text-white opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap">
          Call Now
        </span>
      </a>
    </div>
  );
}
