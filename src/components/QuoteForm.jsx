import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    eventType: 'Wedding',
    eventDate: '',
    location: '',
    guests: '',
    additionalRequirements: ''
  });

  const [selectedServices, setSelectedServices] = useState({
    tentHouse: false,
    lighting: false,
    jaymala: false,
    balloon: false,
    stage: false,
    weddingDecor: false,
    eventDecor: false,
    completeSetup: false
  });

  const availableServices = [
    { key: 'tentHouse', label: 'Tent House (टेंट हाउस)' },
    { key: 'lighting', label: 'Lighting Decoration (लाइटिंग)' },
    { key: 'jaymala', label: 'Jaymala Stage (जयमाला स्टेज)' },
    { key: 'balloon', label: 'Balloon Decoration (बैलून सजावट)' },
    { key: 'stage', label: 'Stage Decoration (मंच सजावट)' },
    { key: 'weddingDecor', label: 'Wedding Decoration (सम्पूर्ण विवाह सजावट)' },
    { key: 'eventDecor', label: 'Event Decoration (समारोह सजावट)' },
    { key: 'completeSetup', label: 'Complete Event Setup (सम्पूर्ण व्यवस्था)' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (key) => {
    setSelectedServices((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Compile selected services
    const servicesList = Object.entries(selectedServices)
      .filter(([_, checked]) => checked)
      .map(([key, _]) => {
        const found = availableServices.find(s => s.key === key);
        return found ? found.label : key;
      })
      .join(', ');

    // Format the WhatsApp message block
    const message = `Namaste Shri Sai Tent & Light House,

I would like to enquire about an event setup and get a quotation.

📝 EVENT ENQUIRY DETAILS:
-------------------------------------
👤 Name: ${formData.name || 'Not specified'}
📞 Mobile: ${formData.mobile || 'Not specified'}
💍 Event Type: ${formData.eventType}
📅 Event Date: ${formData.eventDate || 'Not specified'}
📍 Location: ${formData.location || 'Not specified'}
👥 Guests: ${formData.guests || 'Not specified'}
🛠️ Services Required: ${servicesList || 'None selected'}
✍️ Additional Requirements: ${formData.additionalRequirements || 'None'}

Please share the available options, catalog, and quotation. Thank you.`;

    const encodedMsg = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919838956703?text=${encodedMsg}`;

    // Open WhatsApp URL in a new window/tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="quote" className="relative py-24 bg-primary-navy">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-1/4 h-80 w-80 rounded-full bg-accent-gold/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-crimson/5 blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-accent-gold">QUOTATION</span>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            कोटेशन अनुरोध करें
          </h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto mt-4" />
          <p className="mt-4 text-base text-warm-white/70 font-medium">
            अपने कार्यक्रम की जानकारी भरें और तुरंत व्हाट्सएप पर कोटेशन प्राप्त करें
          </p>
        </div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-accent-gold/20 bg-primary-blue/10 p-8 backdrop-blur-md md:p-12 shadow-xl shadow-black/25"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Row 1: Name and Mobile */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-accent-gold mb-2">
                  पूरा नाम / Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="अपना नाम लिखें"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-accent-gold/20 bg-primary-navy/70 px-4 py-3.5 text-sm text-white placeholder-warm-white/40 focus:border-accent-gold focus:outline-none focus:ring-1 focus:ring-accent-gold transition-colors duration-300"
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block text-xs font-bold uppercase tracking-wider text-accent-gold mb-2">
                  मोबाइल नंबर / Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  required
                  placeholder="अपना 10 अंकों का नंबर लिखें"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-accent-gold/20 bg-primary-navy/70 px-4 py-3.5 text-sm text-white placeholder-warm-white/40 focus:border-accent-gold focus:outline-none focus:ring-1 focus:ring-accent-gold transition-colors duration-300"
                />
              </div>
            </div>

            {/* Row 2: Event Type, Date, Guests */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div>
                <label htmlFor="eventType" className="block text-xs font-bold uppercase tracking-wider text-accent-gold mb-2">
                  आयोजन का प्रकार / Event Type
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-accent-gold/20 bg-primary-navy/70 px-4 py-3.5 text-sm text-white focus:border-accent-gold focus:outline-none focus:ring-1 focus:ring-accent-gold transition-colors duration-300"
                >
                  <option value="Wedding" className="bg-primary-navy">शुभ विवाह (Wedding)</option>
                  <option value="Engagement" className="bg-primary-navy">सगाई (Engagement)</option>
                  <option value="Birthday" className="bg-primary-navy">जन्मदिन (Birthday)</option>
                  <option value="Reception" className="bg-primary-navy">रिसेप्शन (Reception)</option>
                  <option value="Religious" className="bg-primary-navy">धार्मिक कार्य (Religious)</option>
                  <option value="Family Function" className="bg-primary-navy">पारिवारिक कार्यक्रम (Family Function)</option>
                  <option value="Social Event" className="bg-primary-navy">सामाजिक समारोह (Social Event)</option>
                </select>
              </div>

              <div>
                <label htmlFor="eventDate" className="block text-xs font-bold uppercase tracking-wider text-accent-gold mb-2">
                  कार्यक्रम की तिथि / Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  required
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-accent-gold/20 bg-primary-navy/70 px-4 py-3.5 text-sm text-white focus:border-accent-gold focus:outline-none focus:ring-1 focus:ring-accent-gold transition-colors duration-300 [color-scheme:dark]"
                />
              </div>

              <div>
                <label htmlFor="guests" className="block text-xs font-bold uppercase tracking-wider text-accent-gold mb-2">
                  मेहमानों की संख्या / Guests
                </label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  placeholder="उदा. 500"
                  value={formData.guests}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-accent-gold/20 bg-primary-navy/70 px-4 py-3.5 text-sm text-white placeholder-warm-white/40 focus:border-accent-gold focus:outline-none focus:ring-1 focus:ring-accent-gold transition-colors duration-300"
                />
              </div>
            </div>

            {/* Row 3: Location */}
            <div>
              <label htmlFor="location" className="block text-xs font-bold uppercase tracking-wider text-accent-gold mb-2">
                आयोजन स्थल (स्थान) / Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="location"
                name="location"
                required
                placeholder="उदा. मेहदावल रोड, खलीलाबाद"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full rounded-xl border border-accent-gold/20 bg-primary-navy/70 px-4 py-3.5 text-sm text-white placeholder-warm-white/40 focus:border-accent-gold focus:outline-none focus:ring-1 focus:ring-accent-gold transition-colors duration-300"
              />
            </div>

            {/* Services Checklist */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-accent-gold mb-4">
                आवश्यक सेवाएं चुनें / Select Services Needed
              </label>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {availableServices.map((service) => (
                  <label
                    key={service.key}
                    onClick={() => handleServiceChange(service.key)}
                    className={`flex items-center gap-3 rounded-xl border p-4 cursor-pointer select-none transition-all duration-300 ${
                      selectedServices[service.key]
                        ? 'border-accent-gold bg-accent-gold/10 text-white'
                        : 'border-accent-gold/10 bg-primary-navy/40 text-warm-white/70 hover:bg-primary-navy/60 hover:border-accent-gold/20'
                    }`}
                  >
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-accent-gold/30">
                      {selectedServices[service.key] && (
                        <CheckCircle2 className="h-4 w-4 fill-accent-gold text-primary-navy" />
                      )}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold tracking-wide">{service.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Row 4: Additional Requirements */}
            <div>
              <label htmlFor="additionalRequirements" className="block text-xs font-bold uppercase tracking-wider text-accent-gold mb-2">
                अतिरिक्त आवश्यकताएं / Additional Details
              </label>
              <textarea
                id="additionalRequirements"
                name="additionalRequirements"
                rows="4"
                placeholder="अपनी विशेष पसंद या कोई अतिरिक्त जानकारी यहाँ लिखें..."
                value={formData.additionalRequirements}
                onChange={handleInputChange}
                className="w-full rounded-xl border border-accent-gold/20 bg-primary-navy/70 px-4 py-3.5 text-sm text-white placeholder-warm-white/40 focus:border-accent-gold focus:outline-none focus:ring-1 focus:ring-accent-gold transition-colors duration-300 resize-y"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4 text-center">
              <button
                type="submit"
                className="inline-flex items-center gap-3 rounded-full bg-emerald-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-emerald-950/20 hover:scale-105 hover:bg-emerald-700 focus:outline-none transition-all duration-300 cursor-pointer"
              >
                <Send className="h-5 w-5" />
                <span>Get Quote on WhatsApp</span>
              </button>
              <p className="mt-3 text-xs text-warm-white/40 uppercase tracking-widest font-semibold">
                * Submit करने पर आपके व्हाट्सएप पर डिटेल्स के साथ चैट खुल जाएगी
              </p>
            </div>

          </form>
        </motion.div>

      </div>
    </section>
  );
}
