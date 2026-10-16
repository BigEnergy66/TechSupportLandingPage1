import React, { useState } from 'react';
import { Check, ShieldCheck, Sparkles, PhoneCall, ArrowRight } from 'lucide-react';

interface PricingTiersProps {
  onOpenBooking: (planName?: string) => void;
}

export const PricingTiers: React.FC<PricingTiersProps> = ({ onOpenBooking }) => {
  const [billingCycle, setBillingCycle] = useState<'once' | 'monthly'>('once');

  return (
    <section id="pricing" className="py-24 bg-brand-navy-950 relative overflow-hidden bg-grid-pattern">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-electric-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-navy-900 border border-brand-sunny-400/40 text-xs font-mono text-brand-sunny-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSPARENT MZANSI RATES • ZERO HIDDEN SURPRISES</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Honest rates with a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sunny-400 via-brand-terminal-glow to-brand-electric-400">
              100% No-Fix-No-Fee
            </span>{' '}
            guarantee.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Choose between instant pay-as-you-dial triage or predictable monthly peace-of-mind for home studios and growing businesses.
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center mb-14">
          <div className="p-1.5 rounded-2xl bg-brand-navy-900 border border-slate-800 inline-flex shadow-inner">
            <button
              onClick={() => setBillingCycle('once')}
              className={`px-6 py-2.5 rounded-xl font-display font-bold text-sm transition-all duration-200 ${
                billingCycle === 'once'
                  ? 'bg-brand-electric-500 text-brand-navy-950 shadow-glow-electric'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Pay-As-You-Dial (Once-Off)
            </button>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2.5 rounded-xl font-display font-bold text-sm transition-all duration-200 flex items-center gap-2 ${
                billingCycle === 'monthly'
                  ? 'bg-brand-terminal-glow text-brand-navy-950 shadow-glow-terminal'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Monthly Care Retainers</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-brand-sunny-400/20 text-brand-sunny-400 font-extrabold">
                SAVE 30%
              </span>
            </button>
          </div>
        </div>

        {/* Once-Off Cards */}
        {billingCycle === 'once' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch animate-fadeIn">
            
            {/* Card 1: Remote Quick Fix */}
            <div className="rounded-3xl bg-brand-navy-900/80 border border-slate-800 p-8 flex flex-col justify-between hover:border-brand-electric-400/50 transition-all duration-200 shadow-xl">
              <div>
                <div className="text-xs font-mono font-bold text-brand-electric-400 uppercase tracking-wider mb-2">
                  REMOTE RESCUE
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-2">
                  Quick Remote Dial
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mb-6">
                  Perfect for stubborn software glitches, virus popups, email syncing, or printer driver headaches.
                </p>

                <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-slate-800">
                  <span className="font-display font-extrabold text-4xl text-white">R380</span>
                  <span className="text-xs font-mono text-slate-400">/ single incident</span>
                </div>

                <div className="space-y-3 mb-8">
                  {[
                    'Instant 15-minute remote screen connect',
                    'Virus, malware & bloatware eradication',
                    'MacOS & Windows OS repair',
                    'Printer spooler and Wi-Fi driver fix',
                    'Zero fix = zero charge guarantee'
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-brand-terminal-glow shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenBooking('Quick Remote Dial (R380)')}
                className="w-full py-3.5 rounded-xl bg-brand-navy-950 hover:bg-brand-navy-850 border border-brand-electric-400/50 text-white font-display font-bold text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <span>Dial Remote Tech</span>
                <ArrowRight className="w-4 h-4 text-brand-electric-400" />
              </button>
            </div>

            {/* Card 2: On-Site Hero (Featured) */}
            <div className="rounded-3xl bg-gradient-to-b from-brand-navy-900 via-brand-navy-850 to-brand-navy-950 border-2 border-brand-terminal-glow p-8 flex flex-col justify-between shadow-glow-terminal/20 relative scale-105">
              
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-terminal-glow text-brand-navy-950 font-display font-extrabold text-xs tracking-wider shadow-md">
                MOST POPULAR IN SA
              </div>

              <div>
                <div className="text-xs font-mono font-bold text-brand-terminal-glow uppercase tracking-wider mb-2">
                  IN-PERSON SQUAD
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-2">
                  On-Site Hero Visit
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mb-6">
                  A certified hardware nerd at your home office or business door with full toolset and replacement parts.
                </p>

                <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-slate-800">
                  <span className="font-display font-extrabold text-4xl text-white">R890</span>
                  <span className="text-xs font-mono text-slate-400">/ 1st hour included</span>
                </div>

                <div className="space-y-3 mb-8">
                  {[
                    '45-minute dispatch in Cape Town, JHB & DBN',
                    'Hardware repairs, SSD upgrades & diagnostics',
                    'Workstation ergonomic setup & cable craft',
                    'Mini-UPS & inverter integration check',
                    'Additional time billed in fair 15m increments',
                    'No travel surcharge within metro hubs'
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-200">
                      <Check className="w-4 h-4 text-brand-terminal-glow shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenBooking('On-Site Hero Visit (R890)')}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-terminal-glow to-emerald-400 hover:from-brand-terminal-300 hover:to-emerald-300 text-brand-navy-950 font-display font-extrabold text-sm flex items-center justify-center gap-2 shadow-glow-terminal btn-tactile"
              >
                <PhoneCall className="w-4 h-4 text-brand-navy-950" />
                <span>Book On-Site Hero</span>
              </button>
            </div>

            {/* Card 3: Mesh Wi-Fi & Loadshedding Overhaul */}
            <div className="rounded-3xl bg-brand-navy-900/80 border border-slate-800 p-8 flex flex-col justify-between hover:border-brand-sunny-400/50 transition-all duration-200 shadow-xl">
              <div>
                <div className="text-xs font-mono font-bold text-brand-sunny-400 uppercase tracking-wider mb-2">
                  WHOLE-PREMISES POWER
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-2">
                  Mesh Wi-Fi & UPS Overhaul
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mb-6">
                  Complete eradication of Wi-Fi dead zones plus resilient battery backup for uninterrupted video calls.
                </p>

                <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-slate-800">
                  <span className="font-display font-extrabold text-4xl text-white">R1,450</span>
                  <span className="text-xs font-mono text-slate-400">+ hardware at cost</span>
                </div>

                <div className="space-y-3 mb-8">
                  {[
                    'Full premises RF signal heat-map survey',
                    'Ubiquiti / TP-Link Deco mesh deployment',
                    'Smart LiFePO4 battery mini-UPS installation',
                    'Fibre ONT + dual-band 5GHz calibration',
                    'Complete load-shedding survival guarantee'
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-brand-sunny-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenBooking('Mesh Wi-Fi & UPS Overhaul (R1,450)')}
                className="w-full py-3.5 rounded-xl bg-brand-navy-950 hover:bg-brand-navy-850 border border-brand-sunny-400/50 text-white font-display font-bold text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <span>Request Wi-Fi Survey</span>
                <ArrowRight className="w-4 h-4 text-brand-sunny-400" />
              </button>
            </div>

          </div>
        ) : (
          /* Monthly Care Retainer Cards */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch animate-fadeIn">
            
            {/* Retainer 1 */}
            <div className="rounded-3xl bg-brand-navy-900/80 border border-slate-800 p-8 flex flex-col justify-between hover:border-brand-electric-400/50 transition-all duration-200 shadow-xl">
              <div>
                <div className="text-xs font-mono font-bold text-brand-electric-400 uppercase tracking-wider mb-2">
                  SOLO & HYBRID WORKER
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-2">
                  Home Office Care
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mb-6">
                  For creators, remote executives, and consultants who cannot afford an hour of tech downtime.
                </p>

                <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-slate-800">
                  <span className="font-display font-extrabold text-4xl text-white">R950</span>
                  <span className="text-xs font-mono text-slate-400">/ month</span>
                </div>

                <div className="space-y-3 mb-8">
                  {[
                    'Up to 2 workstations & 4 mobile devices',
                    'Unlimited priority remote screen triage',
                    'Automated cloud backup health checks',
                    'Loadshedding battery health monitoring',
                    '20% discount on all on-site hardware visits'
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-brand-electric-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenBooking('Home Office Care (R950/mo)')}
                className="w-full py-3.5 rounded-xl bg-brand-navy-950 hover:bg-brand-navy-850 border border-brand-electric-400/50 text-white font-display font-bold text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <span>Select Home Office Care</span>
                <ArrowRight className="w-4 h-4 text-brand-electric-400" />
              </button>
            </div>

            {/* Retainer 2: Business Core (Featured) */}
            <div className="rounded-3xl bg-gradient-to-b from-brand-navy-900 via-brand-navy-850 to-brand-navy-950 border-2 border-brand-terminal-glow p-8 flex flex-col justify-between shadow-glow-terminal/20 relative scale-105">
              
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-terminal-glow text-brand-navy-950 font-display font-extrabold text-xs tracking-wider shadow-md">
                BEST FOR SA SMES
              </div>

              <div>
                <div className="text-xs font-mono font-bold text-brand-terminal-glow uppercase tracking-wider mb-2">
                  FULL IT DEPARTMENT ON TAP
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-2">
                  Business Core
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mb-6">
                  Complete IT department replacement for agencies, clinics, and firms with 5 to 20 staff members.
                </p>

                <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-slate-800">
                  <span className="font-display font-extrabold text-4xl text-white">R2,850</span>
                  <span className="text-xs font-mono text-slate-400">/ month</span>
                </div>

                <div className="space-y-3 mb-8">
                  {[
                    'Up to 15 workstations & office network',
                    'Guaranteed < 15 minute remote response SLA',
                    '1 free included monthly on-site checkup visit',
                    'Microsoft 365 / Google Workspace administration',
                    'Zero-Trust Cybersecurity & POPIA compliance',
                    'Direct dedicated WhatsApp group with Lead Nerd'
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-200">
                      <Check className="w-4 h-4 text-brand-terminal-glow shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenBooking('Business Core Retainer (R2,850/mo)')}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-terminal-glow to-emerald-400 hover:from-brand-terminal-300 hover:to-emerald-300 text-brand-navy-950 font-display font-extrabold text-sm flex items-center justify-center gap-2 shadow-glow-terminal btn-tactile"
              >
                <span>Activate Business Retainer</span>
                <ArrowRight className="w-4 h-4 text-brand-navy-950" />
              </button>
            </div>

            {/* Retainer 3: Enterprise */}
            <div className="rounded-3xl bg-brand-navy-900/80 border border-slate-800 p-8 flex flex-col justify-between hover:border-brand-sunny-400/50 transition-all duration-200 shadow-xl">
              <div>
                <div className="text-xs font-mono font-bold text-brand-sunny-400 uppercase tracking-wider mb-2">
                  SCALEUPS & MULTI-BRANCH
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-2">
                  Custom Fleet & Cloud
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mb-6">
                  Bespoke infrastructure, dedicated server engineering, multi-branch VPNs, and 24/7 mission-critical SLAs.
                </p>

                <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-slate-800">
                  <span className="font-display font-extrabold text-4xl text-white">Custom</span>
                  <span className="text-xs font-mono text-slate-400">/ scoped to fleet</span>
                </div>

                <div className="space-y-3 mb-8">
                  {[
                    '20+ workstations & multi-site networks',
                    'Dedicated assigned Senior System Architect',
                    'Disaster recovery simulation & cloud failover',
                    'Server rack maintenance & hardware leasing',
                    'Quarterly IT strategy & budget planning'
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-brand-sunny-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenBooking('Custom Enterprise IT Consultation')}
                className="w-full py-3.5 rounded-xl bg-brand-navy-950 hover:bg-brand-navy-850 border border-brand-sunny-400/50 text-white font-display font-bold text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <span>Request Custom IT Scope</span>
                <ArrowRight className="w-4 h-4 text-brand-sunny-400" />
              </button>
            </div>

          </div>
        )}

        {/* Guarantee Seal Banner */}
        <div className="mt-16 max-w-3xl mx-auto p-6 rounded-2xl bg-brand-navy-900/60 border border-brand-terminal-glow/30 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-xl bg-brand-terminal-glow/20 text-brand-terminal-glow flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="font-display font-bold text-white text-base">
              The "No Fix = No Fee" Nerd Promise
            </div>
            <p className="text-slate-400 text-xs sm:text-sm">
              If our specialist cannot diagnose and propose a clear solution to your software or hardware problem, you pay R0. No callout fees, no fine print.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
