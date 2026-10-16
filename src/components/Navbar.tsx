import React, { useState, useEffect } from 'react';
import { Phone, PhoneCall, Menu, X, MessageSquare } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (initialIssue?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sastTime, setSastTime] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Live South African Standard Time (SAST, UTC+2)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Calculate SAST (UTC+2)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Johannesburg',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setSastTime(new Intl.DateTimeFormat('en-ZA', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-brand-navy-950/90 backdrop-blur-md border-b border-brand-electric-500/20 shadow-lg shadow-black/40 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-brand-electric-600 via-brand-navy-800 to-brand-navy-950 border border-brand-electric-400/40 shadow-glow-electric group-hover:scale-105 transition-all duration-300">
              {/* Dial ring animation */}
              <div className="absolute inset-0 rounded-xl border border-brand-terminal-glow/40 animate-pulse-glow" />
              <Phone className="w-5 h-5 text-brand-terminal-glow group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-brand-sunny-400 border-2 border-brand-navy-950" />
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-extrabold text-2xl tracking-tight text-white group-hover:text-brand-electric-300 transition-colors">
                  Nerd<span className="text-brand-terminal-glow">Dial</span>
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-brand-sunny-400/15 text-brand-sunny-400 border border-brand-sunny-400/30">
                  🇿🇦 ZA
                </span>
              </div>
              <span className="text-[11px] font-mono tracking-wide text-slate-400 -mt-1 hidden sm:block">
                On-Demand IT Cavalry
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-brand-terminal-glow transition-colors">Services</a>
            <a href="#speed-dial" className="hover:text-brand-terminal-glow transition-colors flex items-center gap-1.5">
              <span>Speed Dial</span>
              <span className="w-2 h-2 rounded-full bg-brand-terminal-glow animate-ping" />
            </a>
            <a href="#terminal" className="hover:text-brand-terminal-glow transition-colors">Live Terminal</a>
            <a href="#coverage" className="hover:text-brand-terminal-glow transition-colors">Coverage</a>
            <a href="#pricing" className="hover:text-brand-terminal-glow transition-colors">Pricing</a>
            <a href="#testimonials" className="hover:text-brand-terminal-glow transition-colors">Stories</a>
          </nav>

          {/* Right Action Center */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Live SAST Status Pill */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-navy-900/80 border border-slate-700/60 text-xs font-mono text-slate-300">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-terminal-glow opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-terminal-500"></span>
              </span>
              <span>SAST {sastTime || '15:30'}</span>
              <span className="text-slate-500">|</span>
              <span className="text-brand-terminal-400 font-semibold">18 Nerds Active</span>
            </div>

            {/* Direct WhatsApp Call Pill */}
            <a 
              href="https://wa.me/27820000000?text=Hi%20Nerd%20Dial,%20I%20need%20urgent%20tech%20support!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 text-xs font-mono font-semibold transition-all"
              title="Chat with on-duty technician on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Triage</span>
            </a>

            {/* Main Dial CTA */}
            <button
              onClick={() => onOpenBooking()}
              className="relative group overflow-hidden px-4 py-2 rounded-xl bg-gradient-to-r from-brand-electric-500 to-brand-terminal-500 p-[1px] font-semibold text-sm shadow-glow-electric hover:shadow-glow-terminal transition-all duration-300"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-[11px] bg-brand-navy-950 group-hover:bg-brand-navy-900 transition-colors">
                <PhoneCall className="w-4 h-4 text-brand-terminal-glow animate-bounce" />
                <span className="text-white font-display font-bold">Dial A Nerd</span>
              </div>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="p-2 rounded-lg bg-brand-electric-600 text-white shadow-glow-electric text-xs font-bold font-display"
            >
              Dial
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-brand-navy-900 border border-slate-700 text-slate-300 hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-brand-navy-900 border border-brand-electric-500/30 shadow-2xl backdrop-blur-xl flex flex-col gap-3 animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-terminal-glow animate-ping" />
                SAST {sastTime} • 18 Nerds Online
              </span>
              <span className="text-brand-sunny-400 font-bold">Johannesburg / CPT</span>
            </div>
            
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-200 hover:bg-brand-navy-800"
            >
              Services & Capabilities
            </a>
            <a 
              href="#speed-dial" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-200 hover:bg-brand-navy-800 flex items-center justify-between"
            >
              <span>Interactive Speed Dial</span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-brand-terminal-glow/20 text-brand-terminal-glow font-mono font-bold">LIVE</span>
            </a>
            <a 
              href="#terminal" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-200 hover:bg-brand-navy-800"
            >
              Interactive Console
            </a>
            <a 
              href="#coverage" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-200 hover:bg-brand-navy-800"
            >
              South African Hubs
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-200 hover:bg-brand-navy-800"
            >
              Transparent Pricing (ZAR)
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-200 hover:bg-brand-navy-800"
            >
              Client Stories
            </a>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-electric-500 to-brand-terminal-500 font-display font-bold text-white shadow-glow-electric flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Dial A Nerd Now</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
