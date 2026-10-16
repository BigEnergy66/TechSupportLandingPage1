import React from 'react';
import { Phone, PhoneCall, ShieldCheck, Heart, MessageSquare } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-brand-navy-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      
      {/* Background glow subtle */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-radial-glow opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Telemetry Status Strip */}
        <div className="p-4 rounded-2xl bg-brand-navy-900/90 border border-brand-electric-500/20 mb-14 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-terminal-glow opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-terminal-500"></span>
            </span>
            <span className="text-white font-bold">SYSTEM TELEMETRY:</span>
            <span className="text-brand-terminal-300">All South African Nodes Operational</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <span>Ping: <strong className="text-white">8.4ms (Teraco JB1)</strong></span>
            <span>•</span>
            <span>Loadshedding Inverters: <strong className="text-brand-sunny-400">100% Armed</strong></span>
            <span>•</span>
            <span>SLA: <strong className="text-brand-terminal-400">&lt; 15m Remote</strong></span>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-electric-600 to-brand-navy-950 border border-brand-electric-400/40 text-brand-terminal-glow shadow-glow-electric">
                <Phone className="w-5 h-5" />
              </div>
              <span className="font-display font-black text-2xl tracking-tight text-white">
                Nerd<span className="text-brand-terminal-glow">Dial</span>
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-brand-sunny-400/20 text-brand-sunny-400 border border-brand-sunny-400/40 font-bold">
                🇿🇦 SOUTH AFRICA
              </span>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-sm">
              The smart, friendly IT cavalry for South Africa. We turn tech frustration into instant relief with joyful problem-solving, zero condescending jargon, and reliable digital craftsmanship.
            </p>

            <div className="flex flex-col gap-2 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-brand-terminal-glow" />
                <span>Toll-Free Hotline: <strong>0800-NERD-DIAL (0800 6373 3425)</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Direct WhatsApp: <strong>+27 82 000 0000</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Services */}
          <div>
            <h4 className="font-display font-bold text-white text-sm tracking-wider uppercase mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-brand-terminal-glow transition-colors">Instant Remote Rescue</a></li>
              <li><a href="#services" className="hover:text-brand-terminal-glow transition-colors">On-Site Hardware Squad</a></li>
              <li><a href="#services" className="hover:text-brand-terminal-glow transition-colors">Mesh Wi-Fi & Loadshedding</a></li>
              <li><a href="#services" className="hover:text-brand-terminal-glow transition-colors">Cyber Defense & POPIA</a></li>
              <li><a href="#services" className="hover:text-brand-terminal-glow transition-colors">Workstation Cable Craft</a></li>
            </ul>
          </div>

          {/* South African Metros */}
          <div>
            <h4 className="font-display font-bold text-white text-sm tracking-wider uppercase mb-4">
              Regional Hubs
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#coverage" className="hover:text-brand-electric-400 transition-colors">Cape Town & Winelands</a></li>
              <li><a href="#coverage" className="hover:text-brand-electric-400 transition-colors">Johannesburg & Sandton</a></li>
              <li><a href="#coverage" className="hover:text-brand-electric-400 transition-colors">Pretoria & Centurion</a></li>
              <li><a href="#coverage" className="hover:text-brand-electric-400 transition-colors">Durban & Umhlanga</a></li>
              <li><a href="#coverage" className="hover:text-brand-electric-400 transition-colors">Nationwide Remote Link</a></li>
            </ul>
          </div>

          {/* Trust & Guarantee */}
          <div>
            <h4 className="font-display font-bold text-white text-sm tracking-wider uppercase mb-4">
              The Nerd Promise
            </h4>
            <div className="p-4 rounded-xl bg-brand-navy-900 border border-slate-800 text-xs space-y-2.5">
              <div className="flex items-center gap-1.5 text-brand-terminal-glow font-bold font-mono">
                <ShieldCheck className="w-4 h-4" />
                <span>No Fix = No Fee</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                If we cannot propose an actionable fix for your issue, you pay nothing.
              </p>
              <button
                onClick={onOpenBooking}
                className="w-full py-2 rounded-lg bg-brand-electric-600 hover:bg-brand-electric-500 text-white font-display font-bold text-xs transition-colors shadow-glow-electric"
              >
                Book A Nerd Now
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Mzansi Note */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Nerd Dial (Pty) Ltd. All rights reserved.
          </div>

          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for South African creators, homes & businesses.</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300 transition-colors">POPIA Notice</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
