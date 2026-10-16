import React, { useState } from 'react';
import { MapPin, Navigation, CheckCircle2, Zap, Radio, Globe } from 'lucide-react';
import { SA_HUBS } from '../data/mockData';

interface CoverageMapProps {
  onSelectHub: (hubName: string) => void;
}

export const CoverageMap: React.FC<CoverageMapProps> = ({ onSelectHub }) => {
  const [selectedHubIndex, setSelectedHubIndex] = useState<number>(0);
  const currentHub = SA_HUBS[selectedHubIndex] || SA_HUBS[0];

  const ispProviders = [
    { name: 'Vumatel', status: 'Certified Partner', ping: '4ms' },
    { name: 'Openserve', status: 'Certified Partner', ping: '5ms' },
    { name: 'Frogfoot', status: 'Certified Partner', ping: '6ms' },
    { name: 'Octotel', status: 'Certified Partner', ping: '4ms' },
    { name: 'MetroFibre', status: 'Certified Partner', ping: '5ms' }
  ];

  return (
    <section id="coverage" className="py-24 bg-brand-navy-900 relative overflow-hidden">
      
      {/* Decorative ambient elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-brand-electric-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-sunny-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-navy-950 border border-brand-electric-400/40 text-xs font-mono text-brand-electric-400 mb-4">
            <Radio className="w-3.5 h-3.5 text-brand-terminal-glow animate-pulse" />
            <span>MZANSI WIDE DISPATCH NETWORK</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            From Table Mountain to Sandton CBD,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric-400 via-brand-terminal-glow to-brand-sunny-400">
              we're around the corner.
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Rapid on-site arrival across South Africa's premier economic hubs, backed by nationwide 15-minute remote diagnostic links anywhere between Musina and Cape Point.
          </p>
        </div>

        {/* Hub Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {SA_HUBS.map((hub, idx) => {
            const isSelected = selectedHubIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedHubIndex(idx)}
                className={`px-5 py-3 rounded-2xl font-display font-bold text-sm sm:text-base transition-all duration-200 flex items-center gap-2.5 ${
                  isSelected
                    ? 'bg-gradient-to-r from-brand-electric-500 to-brand-terminal-500 text-brand-navy-950 shadow-glow-electric scale-105'
                    : 'bg-brand-navy-950 hover:bg-brand-navy-800 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                <MapPin className={`w-4 h-4 ${isSelected ? 'text-brand-navy-950' : 'text-brand-electric-400'}`} />
                <span>{hub.name}</span>
                <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full ${isSelected ? 'bg-brand-navy-950/20 text-brand-navy-950' : 'bg-slate-800 text-slate-400'}`}>
                  {hub.activeNerds} Nerds
                </span>
              </button>
            );
          })}
        </div>

        {/* Detailed Hub Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Hub Telemetry & Areas Covered */}
          <div className="lg:col-span-7 bg-brand-navy-950/80 rounded-3xl border border-brand-electric-500/30 p-8 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-brand-electric-400 font-bold">
                    {currentHub.province.toUpperCase()} FLEET
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mt-1">
                    {currentHub.name} Operations
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <div className="px-3.5 py-1.5 rounded-xl bg-brand-navy-900 border border-brand-terminal-glow/40 text-center">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">AVG ARRIVAL</div>
                    <div className="text-brand-terminal-glow font-mono font-bold text-sm">{currentHub.avgOnSiteTime}</div>
                  </div>
                  <div className="px-3.5 py-1.5 rounded-xl bg-brand-navy-900 border border-brand-sunny-400/40 text-center">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">AVAILABILITY</div>
                    <div className="text-brand-sunny-400 font-mono font-bold text-sm">{currentHub.status}</div>
                  </div>
                </div>
              </div>

              {/* Suburbs & Neighbourhoods covered */}
              <div className="mb-8">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Navigation className="w-3.5 h-3.5 text-brand-terminal-glow" />
                  <span>KEY SUBURBS & COMMERCIAL HUBS SERVICED:</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentHub.areas.map((area, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-brand-navy-900/60 border border-slate-800 flex items-center gap-2.5 text-sm text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-terminal-glow shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Hub Action Button */}
            <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono text-slate-400">
                Live dispatch queue: <strong className="text-emerald-400">0 minutes waiting</strong>
              </span>

              <button
                onClick={() => onSelectHub(currentHub.name)}
                className="py-3 px-6 rounded-xl bg-gradient-to-r from-brand-electric-500 to-brand-terminal-500 hover:from-brand-electric-400 hover:to-brand-terminal-400 text-brand-navy-950 font-display font-bold text-sm shadow-glow-electric transition-all"
              >
                Dispatch Nerd to {currentHub.name.split(' ')[0]}
              </button>
            </div>
          </div>

          {/* Right: South African ISP & Fibre Infrastructure Compatibility */}
          <div className="lg:col-span-5 bg-brand-navy-950/80 rounded-3xl border border-slate-800 p-8 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-terminal-glow/15 border border-brand-terminal-glow/40 flex items-center justify-center text-brand-terminal-glow">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-white">
                    Fibre ISP Compatibility
                  </h4>
                  <p className="text-xs font-mono text-slate-400">
                    Direct diagnostics for major SA fibre backbones
                  </p>
                </div>
              </div>

              {/* ISP List */}
              <div className="space-y-3 mb-8">
                {ispProviders.map((isp, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-brand-navy-900 border border-slate-800 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-brand-terminal-glow animate-pulse" />
                      <span className="font-display font-semibold text-white text-sm">{isp.name}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-mono">
                      <span className="text-slate-400 hidden sm:inline">{isp.status}</span>
                      <span className="px-2 py-0.5 rounded bg-brand-navy-950 text-brand-terminal-glow border border-brand-terminal-glow/30">
                        {isp.ping}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Loadshedding note */}
            <div className="p-4 rounded-xl bg-brand-navy-900/90 border border-brand-sunny-400/30 text-xs font-mono text-slate-300 flex items-center gap-3">
              <Zap className="w-5 h-5 text-brand-sunny-400 shrink-0" />
              <span>
                All field vehicles carry pre-configured LiFePO4 router battery mini-UPS units for instant on-site installation.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
