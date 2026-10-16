import React, { useState } from 'react';
import { 
  PhoneCall, 
  Wifi, 
  BatteryCharging, 
  AlertTriangle, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  MapPin, 
  ArrowRight,
  Flame,
  Cpu
} from 'lucide-react';
import { QUICK_DIAL_ISSUES } from '../data/mockData';

interface HeroProps {
  onOpenBooking: (initialIssue?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [selectedIssueId, setSelectedIssueId] = useState<string>('wifi');
  const [isDialing, setIsDialing] = useState<boolean>(false);

  const currentIssue = QUICK_DIAL_ISSUES.find(i => i.id === selectedIssueId) || QUICK_DIAL_ISSUES[0];

  const handleHeroDial = () => {
    setIsDialing(true);
    setTimeout(() => {
      setIsDialing(false);
      onOpenBooking(currentIssue.title);
    }, 600);
  };

  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Ambient background glow layers */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-brand-electric-500/20 via-brand-terminal-glow/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-brand-electric-600/15 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-brand-sunny-400/10 blur-3xl pointer-events-none rounded-full" />

      {/* Decorative Circuit Lines (SVG) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 120 Q 300 120, 450 250 T 900 250 T 1600 100" fill="none" stroke="#0ea5e9" strokeWidth="1.5" className="circuit-line" />
          <path d="M 100 0 V 300 H 450 V 600" fill="none" stroke="#00ff9d" strokeWidth="1" className="circuit-line" />
          <path d="M 1200 800 V 450 H 900" fill="none" stroke="#facc15" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="450" cy="250" r="4" fill="#00ff9d" />
          <circle cx="900" cy="250" r="4" fill="#38bdf8" />
          <circle cx="900" cy="450" r="4" fill="#facc15" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Friendly Narrative & Brand Core */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Friendly Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy-900/90 border border-brand-terminal-glow/30 shadow-glow-terminal text-xs font-mono text-brand-terminal-300 mb-6 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-brand-terminal-glow animate-pulse" />
              <span>ON-DEMAND IT SOLUTIONS • SOUTH AFRICA</span>
              <span className="px-1.5 py-0.5 rounded bg-brand-sunny-400/20 text-brand-sunny-400 font-bold text-[10px]">
                NO FIX = NO FEE
              </span>
            </div>

            {/* Main Title with Playful Typography */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.12] mb-6">
              Tech support that feels like your{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-electric-400 via-brand-terminal-glow to-brand-sunny-400">
                smartest friend
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-sunny-400/80" viewBox="0 0 200 8" fill="none" preserveAspectRatio="none">
                  <path d="M1 5.5C40 2 120 1.5 199 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>{' '}
              just pulled up to help.
            </h1>

            {/* Subtext evoking relief and friendliness */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-8 mx-auto lg:mx-0">
              Breathe out. That frozen screen, spinning loading wheel, loadshedding router blackout, or rogue office printer is about to be solved. We connect you to patient, high-energy South African IT craftspeople in minutes.
            </p>

            {/* Micro Trust Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 max-w-2xl mx-auto lg:mx-0">
              <div className="p-3 rounded-xl bg-brand-navy-900/60 border border-slate-800 text-left">
                <div className="text-brand-terminal-glow font-display font-bold text-lg">15 Mins</div>
                <div className="text-xs text-slate-400">Instant Remote Pickup</div>
              </div>
              <div className="p-3 rounded-xl bg-brand-navy-900/60 border border-slate-800 text-left">
                <div className="text-brand-electric-400 font-display font-bold text-lg">45 Mins</div>
                <div className="text-xs text-slate-400">On-Site Metros Dispatch</div>
              </div>
              <div className="p-3 rounded-xl bg-brand-navy-900/60 border border-slate-800 text-left">
                <div className="text-brand-sunny-400 font-display font-bold text-lg">4.98 / 5</div>
                <div className="text-xs text-slate-400">Mzansi Client Rating</div>
              </div>
              <div className="p-3 rounded-xl bg-brand-navy-900/60 border border-slate-800 text-left">
                <div className="text-emerald-400 font-display font-bold text-lg">100%</div>
                <div className="text-xs text-slate-400">Jargon-Free Guarantee</div>
              </div>
            </div>

            {/* Direct Action Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => onOpenBooking()}
                className="btn-tactile px-7 py-4 rounded-2xl bg-gradient-to-r from-brand-electric-500 via-brand-electric-600 to-brand-terminal-500 hover:from-brand-electric-400 hover:to-brand-terminal-400 text-brand-navy-950 font-display font-extrabold text-base sm:text-lg flex items-center gap-3 shadow-glow-electric transition-all"
              >
                <PhoneCall className="w-5 h-5 text-brand-navy-950" />
                <span>Book A Nerd Visit</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#speed-dial"
                className="px-6 py-4 rounded-2xl bg-brand-navy-900/80 hover:bg-brand-navy-800 border border-slate-700 hover:border-brand-terminal-glow/50 text-slate-200 font-display font-semibold text-base flex items-center gap-2 transition-all"
              >
                <Sparkles className="w-4 h-4 text-brand-sunny-400" />
                <span>Test Interactive Dial</span>
              </a>
            </div>

            {/* Live South African footprint snippet */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-electric-400" />
                <span>Cape Town</span>
              </span>
              <span>•</span>
              <span>Johannesburg</span>
              <span>•</span>
              <span>Pretoria</span>
              <span>•</span>
              <span>Durban</span>
              <span>•</span>
              <span className="text-brand-terminal-400">Nationwide Remote</span>
            </div>

          </div>

          {/* Right Column: Tactile "Quick Dial" Terminal Hardware Console */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Backing Neon Halo */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-brand-electric-500/40 via-brand-terminal-glow/30 to-brand-sunny-400/30 blur-xl opacity-75" />

              {/* Physical Console Box */}
              <div className="relative rounded-3xl bg-brand-navy-900/95 border-2 border-brand-electric-500/30 shadow-2xl p-6 sm:p-7 backdrop-blur-xl">
                
                {/* Hardware Header with Screws and Status Light */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-600 border border-slate-500 shadow-inner" />
                    <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase font-semibold">
                      NERD DIAL • SPEED DISPATCH CONSOLE
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-brand-terminal-dark/80 border border-brand-terminal-500/40 text-[10px] font-mono text-brand-terminal-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-terminal-glow animate-ping" />
                    <span>READY</span>
                  </div>
                </div>

                {/* Question Prompt */}
                <div className="mb-4">
                  <div className="text-xs font-mono text-brand-electric-400 uppercase font-bold tracking-wider mb-1">
                    STEP 1: SELECT YOUR TECH HEADACHE
                  </div>
                  <div className="text-sm font-display font-medium text-slate-200">
                    What frustrating gremlin needs fixing today?
                  </div>
                </div>

                {/* Interactive Issue Grid */}
                <div className="space-y-2 mb-6">
                  {QUICK_DIAL_ISSUES.slice(0, 4).map((issue) => {
                    const isSelected = selectedIssueId === issue.id;
                    return (
                      <button
                        key={issue.id}
                        type="button"
                        onClick={() => setSelectedIssueId(issue.id)}
                        className={`w-full p-3 rounded-xl text-left transition-all duration-200 flex items-center justify-between group ${
                          isSelected
                            ? 'bg-gradient-to-r from-brand-electric-600/30 to-brand-navy-800 border-2 border-brand-terminal-glow text-white shadow-glow-terminal/20'
                            : 'bg-brand-navy-850/70 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${isSelected ? 'bg-brand-terminal-glow/20 text-brand-terminal-glow' : 'bg-slate-800 text-slate-400 group-hover:text-slate-200'}`}>
                            {issue.id === 'wifi' && <Wifi className="w-4 h-4" />}
                            {issue.id === 'power' && <BatteryCharging className="w-4 h-4" />}
                            {issue.id === 'crash' && <AlertTriangle className="w-4 h-4" />}
                            {issue.id === 'virus' && <ShieldCheck className="w-4 h-4" />}
                          </div>
                          <div>
                            <div className="text-xs sm:text-sm font-semibold font-sans">{issue.title}</div>
                            <div className="text-[11px] font-mono text-slate-400 flex items-center gap-2 mt-0.5">
                              <span className="text-brand-terminal-400">{issue.estTime}</span>
                            </div>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className={`text-xs font-mono font-bold ${isSelected ? 'text-brand-sunny-400' : 'text-slate-400'}`}>
                            {issue.estPrice}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Selected Issue Preview Box */}
                <div className="p-4 rounded-xl bg-brand-navy-950 border border-brand-electric-500/20 mb-6">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                    <span>ESTIMATED DISPATCH:</span>
                    <span className="text-brand-terminal-glow font-bold">12 - 38 MINS</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>ON-DUTY SPECIALIST:</span>
                    <span className="text-slate-200 font-semibold">Senior Certified Tech</span>
                  </div>
                </div>

                {/* Tactile Glowing Dial Button */}
                <button
                  type="button"
                  onClick={handleHeroDial}
                  disabled={isDialing}
                  className={`w-full py-4 rounded-2xl font-display font-extrabold text-base tracking-wide flex items-center justify-center gap-3 transition-all duration-300 btn-tactile ${
                    isDialing 
                      ? 'bg-brand-sunny-400 text-brand-navy-950 scale-95 shadow-glow-sunny'
                      : 'bg-gradient-to-r from-brand-terminal-glow via-emerald-400 to-brand-electric-400 hover:from-brand-terminal-300 hover:to-brand-electric-300 text-brand-navy-950 shadow-glow-terminal hover:scale-[1.02]'
                  }`}
                >
                  <PhoneCall className={`w-5 h-5 text-brand-navy-950 ${isDialing ? 'animate-spin' : 'animate-bounce'}`} />
                  <span>{isDialing ? 'CONNECTING TO ON-DUTY NERD...' : `DIAL A NERD FOR THIS ISSUE`}</span>
                </button>

                {/* Reassurance Subtext */}
                <p className="text-center text-[11px] font-mono text-slate-400 mt-3 flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-terminal-glow" />
                  <span>Free diagnosis advice before any work begins</span>
                </p>

              </div>

              {/* Floating hardware craft accessories badge */}
              <div className="absolute -bottom-5 -left-4 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-brand-navy-900 border border-brand-electric-400/30 shadow-xl text-xs font-mono text-slate-200 backdrop-blur-md animate-float-slow">
                <Cpu className="w-4 h-4 text-brand-electric-400" />
                <span>Ubiquiti & Mikrotik Certified</span>
              </div>

              <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-brand-navy-900 border border-brand-sunny-400/40 shadow-xl text-xs font-mono text-brand-sunny-400 backdrop-blur-md animate-float-delayed">
                <Flame className="w-3.5 h-3.5" />
                <span>Stage 6 UPS Ready</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
