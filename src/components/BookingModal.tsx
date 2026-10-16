import React, { useState, useEffect } from 'react';
import { 
  X, 
  PhoneCall, 
  Laptop, 
  MapPin, 
  CheckCircle2, 
  MessageSquare, 
  ArrowRight, 
  ShieldCheck, 
  User, 
  Mail, 
  Phone
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialIssue?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialIssue }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [serviceType, setServiceType] = useState<'remote' | 'onsite'>('remote');
  const [issueTitle, setIssueTitle] = useState<string>(initialIssue || 'Wi-Fi keeps dropping / Slow speeds');
  const [city, setCity] = useState<string>('Cape Town Metro');
  const [urgency, setUrgency] = useState<'asap' | 'today' | 'flexible'>('asap');
  
  // Contact info
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  
  // Booking result
  const [bookingRef, setBookingRef] = useState<string>('');

  useEffect(() => {
    if (initialIssue) {
      setIssueTitle(initialIssue);
    }
  }, [initialIssue]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = `ND-${Math.floor(1000 + Math.random() * 9000)}-ZA`;
    setBookingRef(refCode);
    setStep(3);

    // Launch celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00ff9d', '#38bdf8', '#facc15', '#ffffff']
      });
    } catch (err) {
      // safe fallback
    }
  };

  const handleResetAndClose = () => {
    setStep(1);
    setBookingRef('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-xl rounded-3xl bg-brand-navy-950 border-2 border-brand-electric-500/40 shadow-2xl shadow-brand-electric-500/20 overflow-hidden flex flex-col max-h-[90vh]"
      >
        
        {/* Top Header */}
        <div className="px-6 py-4 bg-brand-navy-900/90 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-brand-terminal-glow/20 border border-brand-terminal-glow/40 flex items-center justify-center text-brand-terminal-glow">
              <PhoneCall className="w-4 h-4 animate-bounce" />
            </div>
            <div>
              <div className="font-display font-extrabold text-base text-white">
                {step === 3 ? 'Relief is on the Way!' : 'Dial A Nerd • Fast Dispatch'}
              </div>
              <div className="text-[11px] font-mono text-slate-400">
                {step === 3 ? 'Dispatch confirmed' : 'Step ' + step + ' of 2 • Zero obligation'}
              </div>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          
          {step === 1 && (
            <div className="space-y-6">
              
              {/* Service Type Switcher */}
              <div>
                <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                  1. SELECT HOW YOU WANT HELP:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setServiceType('remote')}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      serviceType === 'remote'
                        ? 'bg-brand-navy-900 border-2 border-brand-terminal-glow text-white shadow-glow-terminal/20'
                        : 'bg-brand-navy-900/40 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Laptop className={`w-4 h-4 ${serviceType === 'remote' ? 'text-brand-terminal-glow' : 'text-slate-400'}`} />
                      <span className="font-display font-bold text-sm">Remote Rescue</span>
                    </div>
                    <p className="text-[11px] text-slate-400">Screen share in &lt; 15 mins anywhere in SA</p>
                    <span className="mt-2 inline-block text-[11px] font-mono font-bold text-brand-terminal-400">
                      From R380
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setServiceType('onsite')}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      serviceType === 'onsite'
                        ? 'bg-brand-navy-900 border-2 border-brand-electric-400 text-white shadow-glow-electric/20'
                        : 'bg-brand-navy-900/40 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className={`w-4 h-4 ${serviceType === 'onsite' ? 'text-brand-electric-400' : 'text-slate-400'}`} />
                      <span className="font-display font-bold text-sm">On-Site Squad</span>
                    </div>
                    <p className="text-[11px] text-slate-400">At your door in CPT, JHB, PTA, DBN</p>
                    <span className="mt-2 inline-block text-[11px] font-mono font-bold text-brand-electric-300">
                      From R890 / hr
                    </span>
                  </button>
                </div>
              </div>

              {/* Problem Description Selector */}
              <div>
                <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                  2. WHAT IS CAUSING YOU HEADACHES?
                </label>
                <input
                  type="text"
                  value={issueTitle}
                  onChange={(e) => setIssueTitle(e.target.value)}
                  placeholder="e.g. Wi-Fi keeps dropping, loadshedding battery dead, BSOD crash..."
                  className="w-full px-4 py-3 rounded-xl bg-brand-navy-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-terminal-glow"
                />
              </div>

              {/* Location Selector */}
              <div>
                <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                  3. YOUR METRO OR PROVINCE:
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-brand-navy-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-terminal-glow"
                >
                  <option value="Cape Town Metro">Cape Town (City Bowl, Southern Suburbs, Atlantic Seaboard)</option>
                  <option value="Greater Johannesburg">Greater Johannesburg (Sandton, Rosebank, Midrand)</option>
                  <option value="Pretoria & Centurion">Pretoria & Centurion</option>
                  <option value="Durban & Umhlanga">Durban & Umhlanga North Coast</option>
                  <option value="Other / Remote Nationwide">Other / Nationwide Remote Support</option>
                </select>
              </div>

              {/* Next Step Button */}
              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-electric-500 to-brand-terminal-500 hover:from-brand-electric-400 hover:to-brand-terminal-400 text-brand-navy-950 font-display font-extrabold text-base flex items-center justify-center gap-2 shadow-glow-electric transition-all"
              >
                <span>Continue to Dispatch Details</span>
                <ArrowRight className="w-5 h-5" />
              </button>

            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="p-3.5 rounded-xl bg-brand-navy-900 border border-slate-800 text-xs font-mono text-slate-300 flex items-center justify-between">
                <div>
                  <span className="text-brand-electric-400">Requesting:</span> {serviceType.toUpperCase()} ({city})
                </div>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-brand-terminal-glow underline"
                >
                  Change
                </button>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">YOUR FULL NAME</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Sipho Sithole"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-brand-navy-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-terminal-glow"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">PHONE / WHATSAPP</label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 082 123 4567"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-brand-navy-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-terminal-glow"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">EMAIL ADDRESS</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. sipho@example.co.za"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-brand-navy-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-terminal-glow"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">DISPATCH URGENCY</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setUrgency('asap')}
                    className={`py-2 px-3 rounded-xl text-xs font-mono font-bold border transition-all ${
                      urgency === 'asap'
                        ? 'bg-brand-terminal-glow/20 border-brand-terminal-glow text-brand-terminal-glow'
                        : 'bg-brand-navy-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    ⚡ ASAP (&lt; 15m)
                  </button>
                  <button
                    type="button"
                    onClick={() => setUrgency('today')}
                    className={`py-2 px-3 rounded-xl text-xs font-mono font-bold border transition-all ${
                      urgency === 'today'
                        ? 'bg-brand-electric-400/20 border-brand-electric-400 text-brand-electric-400'
                        : 'bg-brand-navy-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    Today
                  </button>
                  <button
                    type="button"
                    onClick={() => setUrgency('flexible')}
                    className={`py-2 px-3 rounded-xl text-xs font-mono font-bold border transition-all ${
                      urgency === 'flexible'
                        ? 'bg-brand-sunny-400/20 border-brand-sunny-400 text-brand-sunny-400'
                        : 'bg-brand-navy-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    Schedule Later
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">EXTRA NOTES (OPTIONAL)</label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Any extra details: e.g. 'Apple M2 MacBook', 'Deco X50 mesh', 'Office gate code 4821'..."
                  className="w-full px-4 py-2 rounded-xl bg-brand-navy-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-brand-terminal-glow"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-terminal-glow to-emerald-400 hover:from-brand-terminal-300 hover:to-emerald-300 text-brand-navy-950 font-display font-extrabold text-base flex items-center justify-center gap-2 shadow-glow-terminal btn-tactile"
                >
                  <PhoneCall className="w-5 h-5 text-brand-navy-950" />
                  <span>CONFIRM NERD DISPATCH</span>
                </button>
                
                <p className="text-center text-[11px] font-mono text-slate-400 mt-2 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-terminal-glow" />
                  <span>No Fix = No Fee Guarantee • Free quote before work starts</span>
                </p>
              </div>

            </form>
          )}

          {step === 3 && (
            <div className="text-center py-4 space-y-6">
              
              <div className="w-16 h-16 rounded-3xl bg-brand-terminal-glow/20 border-2 border-brand-terminal-glow text-brand-terminal-glow flex items-center justify-center mx-auto shadow-glow-terminal animate-bounce">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-brand-navy-900 border border-brand-terminal-glow/40 text-xs font-mono font-bold text-brand-terminal-glow mb-2">
                  DISPATCH TICKET: {bookingRef}
                </span>
                <h3 className="font-display font-extrabold text-2xl text-white">
                  Breathe Easy, {fullName || 'Friend'}!
                </h3>
                <p className="text-slate-300 text-sm mt-2 max-w-md mx-auto">
                  Our regional dispatcher in <strong className="text-white">{city}</strong> has logged your ticket for <strong className="text-brand-terminal-glow">{issueTitle}</strong>. An on-duty senior technician is reviewing your request right now.
                </p>
              </div>

              {/* Dispatch Info Box */}
              <div className="p-4 rounded-2xl bg-brand-navy-900 border border-slate-800 text-left space-y-2 text-xs font-mono text-slate-300">
                <div className="flex justify-between">
                  <span>DISPATCH WINDOW:</span>
                  <span className="text-brand-terminal-glow font-bold">12 - 35 Minutes</span>
                </div>
                <div className="flex justify-between">
                  <span>NOTIFICATION SENT TO:</span>
                  <span className="text-white font-bold">{phone || '082 000 0000'}</span>
                </div>
                <div className="flex justify-between">
                  <span>GUARANTEE:</span>
                  <span className="text-brand-sunny-400 font-bold">100% No-Fix-No-Fee</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/27820000000?text=Hi%20Nerd%20Dial,%20I%20just%20submitted%20ticket%20${bookingRef}%20for%20${encodeURIComponent(issueTitle)}!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open WhatsApp Thread</span>
                </a>

                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="py-3 px-6 rounded-xl bg-brand-navy-900 hover:bg-brand-navy-850 border border-slate-700 text-slate-300 font-display font-semibold text-sm transition-colors"
                >
                  Close Window
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
