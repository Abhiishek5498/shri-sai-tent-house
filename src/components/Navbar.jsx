import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'मुख्य पृष्ठ', englishName: 'Home', href: '#home' },
    { name: 'हमारी सेवाएं', englishName: 'Services', href: '#services' },
    { name: 'गैलरी', englishName: 'Gallery', href: '#gallery' },
    { name: 'हमें क्यों चुनें', englishName: 'About', href: '#about' },
    { name: 'सम्पर्क करें', englishName: 'Contact', href: '#contact' },
  ];

  const whatsappNumber = '9838956703';
  const whatsappMsg = encodeURIComponent('Namaste Shri Sai Tent & Light House, I am visiting your website and would like to enquire about event services.');
  const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=${whatsappMsg}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-primary-navy/95 border-b border-accent-gold/20 shadow-lg backdrop-blur-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo / Brand Name */}
          <a href="#home" className="flex flex-col group focus:outline-none">
            <span className="font-serif text-lg font-bold tracking-wide text-accent-gold sm:text-xl md:text-2xl transition-colors duration-300 group-hover:text-accent-champagne">
              श्री साईं टेन्ट
            </span>
            <span className="text-[9px] font-semibold tracking-wider text-warm-white/80 uppercase sm:text-[10px] md:text-xs">
              & लाइट हाउस • KHALILABAD
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group flex flex-col items-center justify-center text-sm font-medium transition-colors duration-300 focus:outline-none"
              >
                <span className="text-warm-white group-hover:text-accent-gold transition-colors">
                  {link.name}
                </span>
                <span className="text-[10px] text-warm-white/50 group-hover:text-accent-champagne transition-colors">
                  {link.englishName}
                </span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+919838956703"
              className="flex items-center gap-2 rounded-full border border-accent-gold/30 bg-transparent px-4 py-2 text-sm font-semibold text-accent-gold transition-all duration-300 hover:bg-accent-gold hover:text-primary-navy"
            >
              <Phone className="h-4 w-4" />
              <span>9838956703</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-emerald-700 shadow-md shadow-emerald-900/30"
            >
              <MessageCircle className="h-4 w-4 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-warm-white hover:bg-primary-blue hover:text-accent-gold focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-accent-gold/15 bg-primary-navy/98 shadow-xl"
            id="mobile-menu"
          >
            <div className="space-y-1 px-4 py-4 sm:px-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-warm-white hover:bg-primary-blue hover:text-accent-gold transition-all"
                >
                  <div className="flex justify-between items-center">
                    <span>{link.name}</span>
                    <span className="text-xs text-warm-white/40 uppercase tracking-widest">{link.englishName}</span>
                  </div>
                </a>
              ))}
              
              <div className="mt-6 grid grid-cols-2 gap-3 pt-6 border-t border-warm-white/10">
                <a
                  href="tel:+919838956703"
                  className="flex items-center justify-center gap-2 rounded-lg border border-accent-gold/45 py-3 text-center text-sm font-bold text-accent-gold hover:bg-accent-gold/10"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call Now</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-emerald-600 py-3 text-center text-sm font-bold text-white hover:bg-emerald-700"
                >
                  <MessageCircle className="h-4 w-4 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
