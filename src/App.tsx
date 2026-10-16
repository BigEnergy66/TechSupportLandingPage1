import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FrustrationRelief } from './components/FrustrationRelief';
import { DialSimulator } from './components/DialSimulator';
import { ServicesShowcase } from './components/ServicesShowcase';
import { TerminalSimulator } from './components/TerminalSimulator';
import { CoverageMap } from './components/CoverageMap';
import { PricingTiers } from './components/PricingTiers';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { PhoneCall, MessageCircle } from 'lucide-react';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedIssue, setSelectedIssue] = useState<string>('');

  const handleOpenBooking = (issue?: string) => {
    if (issue) {
      setSelectedIssue(issue);
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-brand-navy-950 text-slate-100 flex flex-col selection:bg-brand-terminal-glow selection:text-brand-navy-950">
      
      {/* Top Fixed Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Continuous Scrolling Journey */}
      <main className="flex-1">
        {/* 1. Hero with Uplifting Narrative & Quick Dial */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. Frustration to Relief (Emotional Transformation) */}
        <FrustrationRelief />

        {/* 3. Interactive Speed Dial Hotline Experience */}
        <DialSimulator onOpenBooking={handleOpenBooking} />

        {/* 4. Deep Interactive Services & Capabilities */}
        <ServicesShowcase onOpenBooking={handleOpenBooking} />

        {/* 5. The Satisfying Live Terminal Simulator */}
        <TerminalSimulator />

        {/* 6. South African Metros & Network Coverage */}
        <CoverageMap onSelectHub={(hub) => handleOpenBooking(`On-Site Visit in ${hub}`)} />

        {/* 7. Transparent ZAR Pricing & No-Fix-No-Fee Promise */}
        <PricingTiers onOpenBooking={handleOpenBooking} />

        {/* 8. Authentic South African Client Testimonials */}
        <Testimonials />
      </main>

      {/* Floating Quick Dial Pill (Desktop/Mobile Bottom Float) */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <a
          href="https://wa.me/27820000000?text=Hi%20Nerd%20Dial,%20I%20need%20quick%20advice"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 px-4 py-3 rounded-2xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/50 text-emerald-300 font-display font-bold text-xs backdrop-blur-md shadow-xl transition-all hover:scale-105"
          title="Direct WhatsApp Helpline"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400" />
          <span>WhatsApp Tech</span>
        </a>

        <button
          onClick={() => handleOpenBooking()}
          className="btn-tactile flex items-center gap-2.5 px-5 py-3.5 rounded-2xl bg-gradient-to-r from-brand-terminal-glow to-brand-electric-400 hover:from-brand-terminal-300 hover:to-brand-electric-300 text-brand-navy-950 font-display font-extrabold text-sm shadow-glow-terminal transition-all hover:scale-105"
        >
          <PhoneCall className="w-4 h-4 text-brand-navy-950 animate-bounce" />
          <span>DIAL A NERD</span>
        </button>
      </div>

      {/* Complete Footer with Live Telemetry */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* High-Trust Booking & Consultation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialIssue={selectedIssue}
      />

    </div>
  );
}

export default App;
