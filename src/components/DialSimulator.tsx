import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  PhoneCall, 
  PhoneOff, 
  MapPin, 
  Star, 
  CheckCircle, 
  ShieldCheck, 
  MessageCircle, 
  Radio, 
  Sparkles,
  Volume2
} from 'lucide-react';
import { NERD_EXPERTS } from '../data/mockData';

interface DialSimulatorProps {
  onOpenBooking: (issue?: string) => void;
}

export const DialSimulator: React.FC<DialSimulatorProps> = ({ onOpenBooking }) => {
  const [dialedNumber, setDialedNumber] = useState<string>('0800-NERD-DIAL');
  const [callStatus, setCallStatus] = useState<'idle' | 'calling' | 'connected'>('idle');
  const [assignedNerdIndex, setAssignedNerdIndex] = useState<number>(0);
  const [audioWaves, setAudioWaves] = useState<number[]>([40, 65, 80, 50, 95, 70, 85, 45, 60]);

  // Audio wave animation when connected
  useEffect(() => {
    if (callStatus === 'connected') {
      const interval = setInterval(() => {
        setAudioWaves(Array.from({ length: 9 }, () => Math.floor(Math.random() * 60) + 30));
      }, 150);
      return () => clearInterval(interval);
    }
  }, [callStatus]);

  const handleDigitClick = (digit: string) => {
    if (callStatus === 'idle') {
      if (dialedNumber === '0800-NERD-DIAL') {
        setDialedNumber(digit);
      } else if (dialedNumber.length < 14) {
        setDialedNumber(prev => prev + digit);
      }
    }
  };

  const handleBackspace = () => {
    if (callStatus === 'idle') {
      if (dialedNumber.length > 1) {
        setDialedNumber(prev => prev.slice(0, -1));
      } else {
        setDialedNumber('0800-NERD-DIAL');
      }
    }
  };

  const startCall = (presetNerdIndex?: number) => {
    setCallStatus('calling');
    const targetNerd = presetNerdIndex !== undefined ? presetNerdIndex : Math.floor(Math.random() * NERD_EXPERTS.length);
    setAssignedNerdIndex(targetNerd);

    setTimeout(() => {
      setCallStatus('connected');
    }, 1200);
  };

  const endCall = () => {
    setCallStatus('idle');
  };

  const currentNerd = NERD_EXPERTS[assignedNerdIndex] || NERD_EXPERTS[0];

  return (
    <section id="speed-dial" className="py-24 bg-brand-navy-900 relative overflow-hidden">
      
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-electric-500/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-brand-terminal-glow/10 blur-3xl pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy-950 border border-brand-terminal-glow/40 text-xs font-mono text-brand-terminal-glow mb-4">
            <Radio className="w-3.5 h-3.5 text-brand-terminal-glow animate-pulse" />
            <span>INTERACTIVE DISPATCH SIMULATOR</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Test the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sunny-400 via-brand-terminal-glow to-brand-electric-400">
              Speed Dial Hotline
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Experience what happens when you dial. Our intelligent dispatch system matches your problem with the highest-rated specialist in your region.
          </p>
        </div>

        {/* Tactile Hardware Phone Deck */}
        <div className="max-w-4xl mx-auto bg-brand-navy-950/90 rounded-3xl border-2 border-brand-electric-500/30 p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative">
          
          {/* Top Status Bar with Vintage Helpdesk Telephony flair */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-brand-terminal-glow animate-ping" />
              <div>
                <div className="text-xs font-mono font-bold text-white tracking-wider">
                  TELEPHONY DISPATCH SWITCHBOARD 4.2
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  SOUTH AFRICA ROUTING: JHB • CPT • DBN
                </div>
              </div>
            </div>

            {/* Quick Preset Dial Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-400 mr-1 hidden sm:inline">Speed Keys:</span>
              <button
                onClick={() => { setDialedNumber('1-WIFI-FIX'); startCall(0); }}
                className="px-2.5 py-1 rounded-lg bg-brand-navy-850 hover:bg-brand-navy-800 border border-slate-700 text-xs font-mono text-slate-200 hover:text-brand-terminal-glow transition-colors"
              >
                1: Wi-Fi Rescue
              </button>
              <button
                onClick={() => { setDialedNumber('2-UPS-POWER'); startCall(1); }}
                className="px-2.5 py-1 rounded-lg bg-brand-navy-850 hover:bg-brand-navy-800 border border-slate-700 text-xs font-mono text-slate-200 hover:text-brand-sunny-400 transition-colors"
              >
                2: Loadshedding UPS
              </button>
              <button
                onClick={() => { setDialedNumber('3-CYBER-SEC'); startCall(2); }}
                className="px-2.5 py-1 rounded-lg bg-brand-navy-850 hover:bg-brand-navy-800 border border-slate-700 text-xs font-mono text-slate-200 hover:text-brand-electric-400 transition-colors"
              >
                3: Cyber Guard
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Vintage Tactile Numpad & Digital Screen */}
            <div className="lg:col-span-5 bg-brand-navy-900/80 rounded-2xl p-6 border border-slate-800">
              
              {/* Digital Screen */}
              <div className="p-4 rounded-xl bg-brand-navy-950 border border-brand-electric-500/40 shadow-inner mb-6 text-center">
                <div className="text-[10px] font-mono uppercase tracking-widest text-brand-electric-400 mb-1 flex items-center justify-between">
                  <span>DISPATCH CALLER</span>
                  <span>{callStatus === 'connected' ? 'LIVE AUDIO' : 'STANDBY'}</span>
                </div>
                <div className="text-2xl font-mono font-bold tracking-wider text-brand-terminal-glow h-9 flex items-center justify-center">
                  {dialedNumber}
                </div>
                <div className="text-xs font-mono text-slate-400 mt-1">
                  {callStatus === 'idle' && 'Tap digits or click DIAL'}
                  {callStatus === 'calling' && (
                    <span className="text-brand-sunny-400 animate-pulse">Routing to closest Nerd...</span>
                  )}
                  {callStatus === 'connected' && (
                    <span className="text-brand-terminal-300">Connected with {currentNerd.name}</span>
                  )}
                </div>
              </div>

              {/* Tactile Keypad */}
              <div className="grid grid-cols-3 gap-2.5 mb-5">
                {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map((digit) => (
                  <button
                    key={digit}
                    onClick={() => handleDigitClick(digit)}
                    disabled={callStatus !== 'idle'}
                    className="h-12 rounded-xl bg-brand-navy-850 hover:bg-brand-navy-800 active:bg-brand-electric-600/30 border border-slate-700 hover:border-brand-electric-400 text-slate-200 font-mono font-bold text-lg transition-all flex items-center justify-center shadow-sm disabled:opacity-50"
                  >
                    {digit}
                  </button>
                ))}
              </div>

              {/* Action Buttons: Dial & Hangup */}
              <div className="grid grid-cols-2 gap-3">
                {callStatus === 'idle' ? (
                  <button
                    onClick={() => startCall()}
                    className="col-span-2 py-3.5 rounded-xl bg-gradient-to-r from-brand-terminal-glow to-emerald-500 hover:from-brand-terminal-400 hover:to-emerald-400 text-brand-navy-950 font-display font-extrabold text-base flex items-center justify-center gap-2 shadow-glow-terminal btn-tactile"
                  >
                    <PhoneCall className="w-5 h-5 text-brand-navy-950" />
                    <span>DIAL NERD</span>
                  </button>
                ) : (
                  <>
                    <button
                      onClick={endCall}
                      className="py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-display font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
                    >
                      <PhoneOff className="w-4 h-4" />
                      <span>End Call</span>
                    </button>
                    <button
                      onClick={() => onOpenBooking(dialedNumber)}
                      className="py-3 rounded-xl bg-brand-electric-500 hover:bg-brand-electric-400 text-brand-navy-950 font-display font-bold text-sm flex items-center justify-center gap-1 shadow-glow-electric"
                    >
                      <Sparkles className="w-4 h-4 text-brand-navy-950" />
                      <span>Confirm Tech</span>
                    </button>
                  </>
                )}
              </div>

              {callStatus === 'idle' && (
                <button
                  onClick={handleBackspace}
                  className="w-full mt-2 text-center text-xs font-mono text-slate-400 hover:text-slate-200 py-1"
                >
                  ← Clear Number
                </button>
              )}

            </div>

            {/* Right: Live Call Status & Matched Nerd Profile */}
            <div className="lg:col-span-7">
              {callStatus === 'connected' ? (
                <div className="bg-brand-navy-900/90 rounded-2xl border-2 border-brand-terminal-glow p-6 sm:p-7 shadow-glow-terminal/20 animate-fadeIn">
                  
                  {/* Audio Waveform Simulator */}
                  <div className="p-4 rounded-xl bg-brand-navy-950 border border-brand-terminal-glow/30 mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Volume2 className="w-5 h-5 text-brand-terminal-glow animate-pulse" />
                      <span className="text-xs font-mono text-brand-terminal-300 font-bold">
                        ACTIVE CALL • 256-BIT SECURE
                      </span>
                    </div>

                    <div className="flex items-center gap-1 h-8">
                      {audioWaves.map((height, i) => (
                        <div
                          key={i}
                          className="w-1 bg-brand-terminal-glow rounded-full transition-all duration-150"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Matched Specialist Info */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6">
                    <div className="relative">
                      <img
                        src={currentNerd.avatar}
                        alt={currentNerd.name}
                        className="w-20 h-20 rounded-2xl object-cover border-2 border-brand-terminal-glow shadow-md"
                      />
                      <span className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full bg-brand-terminal-dark border border-brand-terminal-glow text-[10px] font-mono text-brand-terminal-glow font-bold">
                        {currentNerd.status}
                      </span>
                    </div>

                    <div className="flex-1 text-center sm:text-left">
                      <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                        <h4 className="font-display font-extrabold text-xl text-white">
                          {currentNerd.name}
                        </h4>
                        <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-brand-sunny-400/20 text-brand-sunny-400 text-xs font-bold font-mono">
                          <Star className="w-3.5 h-3.5 fill-brand-sunny-400" />
                          <span>{currentNerd.rating}</span>
                        </div>
                      </div>

                      <div className="text-xs font-mono text-brand-electric-400 mb-2">
                        {currentNerd.role}
                      </div>

                      <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-slate-300">
                        <MapPin className="w-3.5 h-3.5 text-brand-terminal-glow" />
                        <span>{currentNerd.location}</span>
                        <span className="text-slate-500">•</span>
                        <span>{currentNerd.solvedTickets.toLocaleString()} issues solved</span>
                      </div>
                    </div>
                  </div>

                  {/* Specialties Pills */}
                  <div className="mb-6">
                    <div className="text-xs font-mono text-slate-400 mb-2">PROVEN SPECIALTIES:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {currentNerd.specialties.map((spec, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-brand-navy-950 border border-slate-700 text-xs font-mono text-slate-300"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Immediate Action Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800">
                    <button
                      onClick={() => onOpenBooking(`Connected with ${currentNerd.name}`)}
                      className="py-3 px-4 rounded-xl bg-gradient-to-r from-brand-electric-500 to-brand-terminal-500 hover:from-brand-electric-400 hover:to-brand-terminal-400 text-brand-navy-950 font-display font-bold text-sm flex items-center justify-center gap-2 shadow-glow-electric"
                    >
                      <CheckCircle className="w-4 h-4 text-brand-navy-950" />
                      <span>Dispatch {currentNerd.name.split(' ')[0]} Now</span>
                    </button>

                    <a
                      href={`https://wa.me/27820000000?text=Hi%20${encodeURIComponent(currentNerd.name)},%20I%20just%20dialed%20Nerd%20Dial%20regarding%20my%20issue!`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-4 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 font-display font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      <span>WhatsApp Direct Triage</span>
                    </a>
                  </div>

                </div>
              ) : (
                <div className="h-full flex flex-col justify-center p-8 rounded-2xl bg-brand-navy-900/50 border border-dashed border-slate-800 text-center">
                  <div className="w-16 h-16 rounded-3xl bg-brand-navy-950 border border-brand-electric-500/30 flex items-center justify-center mx-auto mb-4 text-brand-electric-400 shadow-glow-electric/10">
                    <Phone className="w-8 h-8" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-white mb-2">
                    {callStatus === 'calling' ? 'Locating Nearby Tech...' : 'Switchboard on Standby'}
                  </h4>
                  <p className="text-slate-400 text-sm max-w-sm mx-auto mb-6">
                    {callStatus === 'calling' 
                      ? 'Scanning available Nerds in Sandton, Rosebank, City Bowl and Umhlanga...'
                      : 'Punch any speed dial preset on the left or tap DIAL NERD to simulate instantaneous dispatcher matching.'}
                  </p>
                  
                  <div className="inline-flex items-center justify-center gap-2 text-xs font-mono text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-brand-terminal-glow" />
                    <span>Average actual phone connection time: 28 seconds</span>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
