import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Catering from './components/Catering';
import Gallery from './components/Gallery';
import EventTypes from './components/EventTypes';
import WhyChooseUs from './components/WhyChooseUs';
import BookingProcess from './components/BookingProcess';
import QuoteForm from './components/QuoteForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

function App() {
  return (
    <div className="relative min-h-screen bg-primary-navy select-none">
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Presentation */}
      <Hero />

      {/* Services Grid */}
      <Services />

      {/* Pure Veg Catering Banner */}
      <Catering />

      {/* Photo Wall Gallery */}
      <Gallery />

      {/* Supported Event Categories */}
      <EventTypes />

      {/* Why Choose Us Values */}
      <WhyChooseUs />

      {/* Booking Timeline */}
      <BookingProcess />

      {/* WhatsApp Quote Generator Form */}
      <QuoteForm />

      {/* Contact Hub with Directions */}
      <Contact />

      {/* Footer Navigation */}
      <Footer />

      {/* Fixed Calling & Message overlays */}
      <FloatingActions />
    </div>
  );
}

export default App;
