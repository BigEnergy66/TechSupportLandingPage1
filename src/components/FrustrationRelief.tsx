import React, { useState } from 'react';
import { 
  Smile, 
  Frown, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  Zap, 
  ShieldAlert, 
  ShieldCheck, 
  Coffee, 
  VolumeX, 
  HeartHandshake
} from 'lucide-react';

export const FrustrationRelief: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'relief' | 'frustration'>('relief');

  return (
    <section className="py-20 bg-brand-navy-950 relative overflow-hidden border-y border-slate-800/80">
      
      {/* Decorative ambient gradients */}
      <div className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
        activeTab === 'relief' 
          ? 'bg-radial-hero opacity-80' 
          : 'bg-[radial-gradient(ellipse_at_top,_rgba(239,68,68,0.15),_transparent_70%)] opacity-80'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with emotional narrative */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy-900 border border-slate-700 text-xs font-mono text-slate-300 mb-4">
            <HeartHandshake className="w-3.5 h-3.5 text-brand-sunny-400" />
            <span>THE NERD DIAL DIFFERENCE</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            From hair-pulling panic to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-terminal-glow via-brand-electric-400 to-brand-sunny-400">
              an instant sigh of relief.
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Technology is supposed to give you superpowers, not high blood pressure. See how your day changes when a friendly digital craftsman steps in.
          </p>
        </div>

        {/* Interactive Mode Toggle */}
        <div className="flex justify-center mb-10">
          <div className="p-1.5 rounded-2xl bg-brand-navy-900 border border-slate-800 inline-flex shadow-inner">
            <button
              onClick={() => setActiveTab('relief')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-display font-bold text-sm sm:text-base transition-all duration-300 ${
                activeTab === 'relief'
                  ? 'bg-gradient-to-r from-brand-terminal-glow to-brand-electric-500 text-brand-navy-950 shadow-glow-terminal'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Smile className="w-5 h-5 text-brand-navy-950" />
              <span>With Nerd Dial (Pure Relief)</span>
            </button>

            <button
              onClick={() => setActiveTab('frustration')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-display font-bold text-sm sm:text-base transition-all duration-300 ${
                activeTab === 'frustration'
                  ? 'bg-rose-600 text-white shadow-lg shadow-rose-950'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Frown className="w-5 h-5" />
              <span>The Standard IT Nightmare</span>
            </button>
          </div>
        </div>

        {/* Dynamic Display Panel */}
        {activeTab === 'relief' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            
            {/* Card 1 */}
            <div className="rounded-3xl bg-brand-navy-900/80 border-2 border-brand-terminal-glow/40 p-7 relative group hover:border-brand-terminal-glow transition-all duration-300 shadow-glow-terminal/10">
              <div className="w-12 h-12 rounded-2xl bg-brand-terminal-glow/15 border border-brand-terminal-glow/40 flex items-center justify-center text-brand-terminal-glow mb-5 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono font-bold text-brand-terminal-glow tracking-wider uppercase mb-1">
                HUMAN & RESPECTFUL
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Talks Like a Knowledgeable Friend
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                No condescending acronyms, no eye-rolling, and no script-reading. We explain exactly what broke, why it broke, and how we fixed it so you feel completely in control.
              </p>
              <div className="pt-4 border-t border-slate-800 text-xs font-mono text-brand-terminal-300 flex items-center gap-2">
                <Coffee className="w-4 h-4 text-brand-sunny-400" />
                <span>Rooibos friendly & zero ego</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl bg-brand-navy-900/80 border-2 border-brand-electric-400/40 p-7 relative group hover:border-brand-electric-400 transition-all duration-300 shadow-glow-electric/10">
              <div className="w-12 h-12 rounded-2xl bg-brand-electric-400/15 border border-brand-electric-400/40 flex items-center justify-center text-brand-electric-400 mb-5 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono font-bold text-brand-electric-400 tracking-wider uppercase mb-1">
                LIGHTNING SPEED
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Under 15 Mins, Not 3 Business Days
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                When your deadlines are looming or your team cannot bill clients, you need rescue right now. Remote triage starts in under 15 minutes, with field nerds in Sandton or City Bowl within 45.
              </p>
              <div className="pt-4 border-t border-slate-800 text-xs font-mono text-brand-electric-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-terminal-glow" />
                <span>Zero wait queues or ticket purgatory</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-3xl bg-brand-navy-900/80 border-2 border-brand-sunny-400/40 p-7 relative group hover:border-brand-sunny-400 transition-all duration-300 shadow-glow-sunny/10">
              <div className="w-12 h-12 rounded-2xl bg-brand-sunny-400/15 border border-brand-sunny-400/40 flex items-center justify-center text-brand-sunny-400 mb-5 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono font-bold text-brand-sunny-400 tracking-wider uppercase mb-1">
                MZANSI CRAFTSMANSHIP
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Built for South African Realities
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                We know loadshedding ruins router power adapters and corrupts NAS drives. We know about thick walls in older homes and fibre outages. We build resilient solutions that stay standing.
              </p>
              <div className="pt-4 border-t border-slate-800 text-xs font-mono text-brand-sunny-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>No Fix = No Fee Guarantee</span>
              </div>
            </div>

          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            
            {/* Card 1: Old way */}
            <div className="rounded-3xl bg-rose-950/20 border-2 border-rose-900/50 p-7 relative">
              <div className="w-12 h-12 rounded-2xl bg-rose-900/30 border border-rose-700/50 flex items-center justify-center text-rose-400 mb-5">
                <XCircle className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono font-bold text-rose-400 tracking-wider uppercase mb-1">
                THE SCRIPT BOT
              </div>
              <h3 className="font-display font-bold text-xl text-rose-200 mb-2">
                45 Minutes on Hold Music
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                You endure looped flute music only to speak with an overseas call center agent reading a canned script who tells you to restart your router for the fifth time.
              </p>
              <div className="pt-4 border-t border-rose-900/30 text-xs font-mono text-rose-400 flex items-center gap-2">
                <VolumeX className="w-4 h-4" />
                <span>"All operators are currently assisting others..."</span>
              </div>
            </div>

            {/* Card 2: Old way */}
            <div className="rounded-3xl bg-rose-950/20 border-2 border-rose-900/50 p-7 relative">
              <div className="w-12 h-12 rounded-2xl bg-rose-900/30 border border-rose-700/50 flex items-center justify-center text-rose-400 mb-5">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono font-bold text-rose-400 tracking-wider uppercase mb-1">
                SURPRISE INVOICES
              </div>
              <h3 className="font-display font-bold text-xl text-rose-200 mb-2">
                Call-Out Fees With No Resolution
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                A technician turns up three hours late, fiddles around for 15 minutes, declares your motherboard "dead", and sends an invoice for R1,200 without fixing anything.
              </p>
              <div className="pt-4 border-t border-rose-900/30 text-xs font-mono text-rose-400 flex items-center gap-2">
                <XCircle className="w-4 h-4" />
                <span>Hidden travel charges & markups</span>
              </div>
            </div>

            {/* Card 3: Old way */}
            <div className="rounded-3xl bg-rose-950/20 border-2 border-rose-900/50 p-7 relative">
              <div className="w-12 h-12 rounded-2xl bg-rose-900/30 border border-rose-700/50 flex items-center justify-center text-rose-400 mb-5">
                <Frown className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono font-bold text-rose-400 tracking-wider uppercase mb-1">
                CHAOTIC BAND-AIDS
              </div>
              <h3 className="font-display font-bold text-xl text-rose-200 mb-2">
                Cable Spaghetti & Silent Failures
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Temporary patches left to rot behind your desk. When the next loadshedding block hits, your entire backup fails because no one tested battery health.
              </p>
              <div className="pt-4 border-t border-rose-900/30 text-xs font-mono text-rose-400 flex items-center gap-2">
                <XCircle className="w-4 h-4" />
                <span>Unmonitored backups that fail during recovery</span>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
