import React from 'react';
import { Star, Quote, MapPin } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/mockData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-brand-navy-900 relative overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-brand-electric-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-sunny-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-navy-950 border border-brand-sunny-400/30 text-xs font-mono text-brand-sunny-400 mb-4">
            <Quote className="w-3.5 h-3.5" />
            <span>AUTHENTIC MZANSI CLIENT STORIES</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            "Finally, tech support that feels like an{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sunny-400 via-brand-terminal-glow to-brand-electric-400">
              instant breath of fresh air."
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Hear from local South African creatives, medical directors, and business builders who switched from tech frustration to Nerd Dial confidence.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-brand-navy-950/80 border border-slate-800 p-8 flex flex-col justify-between hover:border-brand-electric-400/50 transition-all duration-300 shadow-xl group hover:-translate-y-1"
            >
              <div>
                {/* Solved Tag & Rating */}
                <div className="flex items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-800">
                  <span className="px-2.5 py-1 rounded-full bg-brand-navy-900 border border-brand-terminal-glow/30 text-[11px] font-mono font-bold text-brand-terminal-glow">
                    {item.tag}
                  </span>

                  <div className="flex items-center gap-1 text-brand-sunny-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-sunny-400" />
                    ))}
                  </div>
                </div>

                {/* Problem snippet badge */}
                <div className="text-xs font-mono text-slate-400 mb-4 flex items-center gap-1.5">
                  <span className="text-brand-electric-400 font-bold">Solved:</span>
                  <span className="text-slate-300">{item.problemSolved}</span>
                </div>

                {/* Main Quote */}
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Row */}
              <div className="pt-6 border-t border-slate-800/80 flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-2xl object-cover border-2 border-brand-electric-400/40 group-hover:border-brand-terminal-glow transition-colors"
                />
                <div>
                  <h4 className="font-display font-bold text-white text-base">
                    {item.name}
                  </h4>
                  <div className="text-xs text-slate-400">
                    {item.role}, <span className="text-slate-300 font-medium">{item.company}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-brand-electric-300 mt-0.5">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
