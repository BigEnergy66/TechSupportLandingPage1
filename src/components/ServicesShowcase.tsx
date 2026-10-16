import React, { useState } from 'react';
import { 
  Laptop, 
  Wrench, 
  Wifi, 
  ShieldCheck, 
  Check, 
  ArrowRight, 
  Clock, 
  Sparkles,
  Zap,
  Layers
} from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';
import type { ServiceCategory } from '../types';

interface ServicesShowcaseProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'all'>('all');

  const filteredServices = activeCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === activeCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Laptop': return <Laptop className="w-6 h-6" />;
      case 'Wrench': return <Wrench className="w-6 h-6" />;
      case 'Wifi': return <Wifi className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      default: return <Zap className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-brand-navy-950 relative overflow-hidden bg-grid-pattern">
      
      {/* Soft gradient spotlights */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-brand-electric-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brand-terminal-glow/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-navy-900 border border-brand-electric-500/30 text-xs font-mono text-brand-electric-400 mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>DIGITAL CRAFTSMANSHIP & IT SOLUTIONS</span>
            </div>
            
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Honest expertise for every layer of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric-400 via-brand-terminal-glow to-brand-sunny-400">
                your digital life.
              </span>
            </h2>
          </div>

          <p className="text-slate-300 text-base max-w-md">
            Whether you are a solo creative in Woodstock, a high-growth tech scaleup in Sandton, or a busy household battling Wi-Fi dead spots, we have a custom-tailored fix.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-800">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl font-display font-bold text-xs sm:text-sm transition-all duration-200 ${
              activeCategory === 'all'
                ? 'bg-brand-electric-500 text-brand-navy-950 shadow-glow-electric'
                : 'bg-brand-navy-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            All Capabilities (4)
          </button>
          
          <button
            onClick={() => setActiveCategory('remote')}
            className={`px-4 py-2 rounded-xl font-display font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-1.5 ${
              activeCategory === 'remote'
                ? 'bg-brand-terminal-glow text-brand-navy-950 shadow-glow-terminal'
                : 'bg-brand-navy-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Laptop className="w-3.5 h-3.5" />
            <span>Remote Screen Rescue</span>
          </button>

          <button
            onClick={() => setActiveCategory('onsite')}
            className={`px-4 py-2 rounded-xl font-display font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-1.5 ${
              activeCategory === 'onsite'
                ? 'bg-brand-electric-500 text-brand-navy-950 shadow-glow-electric'
                : 'bg-brand-navy-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>On-Site Field Tech</span>
          </button>

          <button
            onClick={() => setActiveCategory('network')}
            className={`px-4 py-2 rounded-xl font-display font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-1.5 ${
              activeCategory === 'network'
                ? 'bg-brand-sunny-400 text-brand-navy-950 shadow-glow-sunny'
                : 'bg-brand-navy-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Wifi className="w-3.5 h-3.5" />
            <span>Mesh Wi-Fi & UPS Backup</span>
          </button>

          <button
            onClick={() => setActiveCategory('cloud')}
            className={`px-4 py-2 rounded-xl font-display font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-1.5 ${
              activeCategory === 'cloud'
                ? 'bg-indigo-400 text-brand-navy-950 shadow-lg'
                : 'bg-brand-navy-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Cyber & Cloud Shield</span>
          </button>
        </div>

        {/* Services Grid with Tactile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service) => {
            const isFeatured = service.id === 'network-power';
            return (
              <div
                key={service.id}
                className={`group relative rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between ${
                  isFeatured
                    ? 'bg-gradient-to-b from-brand-navy-900 via-brand-navy-850 to-brand-navy-950 border-2 border-brand-sunny-400/50 shadow-glow-sunny/20'
                    : 'bg-brand-navy-900/70 hover:bg-brand-navy-900/90 border border-slate-800 hover:border-brand-electric-400/50 shadow-xl'
                }`}
              >
                {/* Top metadata row */}
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-brand-navy-950 border border-brand-electric-500/40 text-brand-terminal-glow flex items-center justify-center group-hover:scale-105 transition-transform shadow-inner">
                        {getIcon(service.iconName)}
                      </div>
                      <div>
                        <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-brand-electric-400">
                          {service.category.toUpperCase()} SOLUTIONS
                        </span>
                        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                          <Clock className="w-3.5 h-3.5 text-brand-terminal-glow" />
                          <span>{service.responseTime}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="inline-block px-3 py-1 rounded-full bg-brand-navy-950 border border-slate-700 text-xs font-mono font-bold text-brand-sunny-400 shadow-sm">
                        {service.startingPrice}
                      </span>
                    </div>
                  </div>

                  {/* Title & Tag */}
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="font-display font-extrabold text-2xl text-white group-hover:text-brand-electric-300 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.fullDesc}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 mb-8">
                    {service.features.map((feat, index) => (
                      <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <div className="mt-0.5 rounded-full p-0.5 bg-brand-terminal-glow/20 text-brand-terminal-glow shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Row */}
                <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between gap-4">
                  <button
                    onClick={() => onOpenBooking(service.title)}
                    className="flex-1 py-3 px-4 rounded-xl bg-brand-navy-950 hover:bg-brand-electric-600 border border-brand-electric-500/40 hover:border-transparent text-white font-display font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 group-hover:shadow-glow-electric"
                  >
                    <span>Book {service.title}</span>
                    <ArrowRight className="w-4 h-4 text-brand-terminal-glow group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href="https://wa.me/27820000000?text=Hi%20Nerd%20Dial,%20tell%20me%20more%20about%20your%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-brand-navy-950 border border-slate-800 hover:border-brand-terminal-glow/40 text-slate-400 hover:text-brand-terminal-glow transition-colors"
                    title="Quick question on WhatsApp"
                  >
                    <Sparkles className="w-4 h-4" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
