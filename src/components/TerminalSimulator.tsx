import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Play, RefreshCw, Sparkles } from 'lucide-react';
import { TERMINAL_COMMANDS_DATA } from '../data/mockData';

interface TerminalLine {
  id: string;
  type: 'cmd' | 'output' | 'system' | 'error';
  text: string;
}

export const TerminalSimulator: React.FC = () => {
  const [lines, setLines] = useState<TerminalLine[]>([
    { id: '1', type: 'system', text: 'NERD DIAL OS (Mzansi Kernel 5.15) — Telemetry Gateway Active.' },
    { id: '2', type: 'system', text: 'Connected to nodes in Cape Town (Gardens), Sandton, & Umhlanga.' },
    { id: '3', type: 'system', text: 'Type a command below or tap any quick-diagnostic key to test.' }
  ]);
  const [currentInput, setCurrentInput] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  const executeCommand = (cmdStr: string) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    if (!cleanCmd) return;

    // Add user command to terminal
    const cmdId = Date.now().toString();
    setLines(prev => [...prev, { id: cmdId, type: 'cmd', text: `$ ${cmdStr}` }]);
    setIsProcessing(true);

    setTimeout(() => {
      // Find matching preset
      const preset = TERMINAL_COMMANDS_DATA.find(p => p.cmd.toLowerCase() === cleanCmd);

      if (cleanCmd === 'clear') {
        setLines([
          { id: 'init', type: 'system', text: 'Terminal cleared. Telemetry daemon listening...' }
        ]);
      } else if (cleanCmd === 'help') {
        setLines(prev => [
          ...prev,
          { id: Math.random().toString(), type: 'system', text: 'Available diagnostic commands:' },
          { id: Math.random().toString(), type: 'output', text: '  ping vumatel.co.za       - Test South African fibre latency & jitter' },
          { id: Math.random().toString(), type: 'output', text: '  check-loadshedding-mesh  - Audit mini-UPS & router battery runtime' },
          { id: Math.random().toString(), type: 'output', text: '  quarantine-malware       - Run deep memory malware scan' },
          { id: Math.random().toString(), type: 'output', text: '  kill-zombie-printer      - Flush print spooler and restart daemon' },
          { id: Math.random().toString(), type: 'output', text: '  status                   - Query nationwide Nerd dispatch fleet' },
          { id: Math.random().toString(), type: 'output', text: '  clear                    - Clear terminal screen' }
        ]);
      } else if (preset) {
        const newOutputs: TerminalLine[] = preset.output.map((outLine, idx) => ({
          id: `${cmdId}-${idx}`,
          type: 'output',
          text: outLine
        }));
        setLines(prev => [...prev, ...newOutputs]);
      } else if (cleanCmd.includes('loadshedding')) {
        setLines(prev => [
          ...prev,
          { id: Math.random().toString(), type: 'output', text: '⚡ Grid telemetry: Stage 4 detected. Battery UPS engaged. Wi-Fi uninterrupted.' }
        ]);
      } else if (cleanCmd.includes('sudo') || cleanCmd.includes('admin')) {
        setLines(prev => [
          ...prev,
          { id: Math.random().toString(), type: 'output', text: '🚀 Nerd Privileges verified: "With great root access comes great Wi-Fi coverage."' }
        ]);
      } else {
        setLines(prev => [
          ...prev,
          { id: Math.random().toString(), type: 'error', text: `command not recognized: '${cmdStr}'. Tap a quick button above or type 'help'.` }
        ]);
      }

      setIsProcessing(false);
    }, 450);

    setCurrentInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(currentInput);
    }
  };

  return (
    <section id="terminal" className="py-24 bg-brand-navy-950 relative overflow-hidden border-t border-slate-800">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-terminal-glow/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy-900 border border-brand-terminal-glow/30 text-xs font-mono text-brand-terminal-glow mb-4">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>INTERACTIVE COMMAND CENTER</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            The Satisfying Glow of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-terminal-glow via-emerald-400 to-brand-electric-400">
              Problems Solved.
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            See the exact commands our senior engineers run behind the scenes to optimize South African fibre, keep Wi-Fi running through power cuts, and rescue stuck hardware.
          </p>
        </div>

        {/* Quick Diagnostic Preset Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-brand-sunny-400" />
            <span>Quick Run:</span>
          </span>

          {TERMINAL_COMMANDS_DATA.map((item, idx) => (
            <button
              key={idx}
              onClick={() => executeCommand(item.cmd)}
              disabled={isProcessing}
              className="px-3.5 py-1.5 rounded-lg bg-brand-navy-900 hover:bg-brand-navy-850 active:scale-95 border border-slate-700 hover:border-brand-terminal-glow/60 text-xs font-mono text-slate-200 hover:text-brand-terminal-glow transition-all flex items-center gap-1.5 shadow-sm"
            >
              <Play className="w-3 h-3 text-brand-terminal-glow fill-brand-terminal-glow" />
              <span>{item.label}</span>
            </button>
          ))}

          <button
            onClick={() => executeCommand('clear')}
            className="px-3 py-1.5 rounded-lg bg-brand-navy-900 border border-slate-800 text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            Clear Screen
          </button>
        </div>

        {/* Terminal Window */}
        <div className="rounded-2xl bg-brand-navy-950/95 border-2 border-brand-terminal-glow/40 shadow-2xl shadow-brand-terminal-glow/5 overflow-hidden backdrop-blur-xl">
          
          {/* Top Window Bar */}
          <div className="px-4 py-3 bg-brand-navy-900/90 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-brand-sunny-400/80" />
              <div className="w-3 h-3 rounded-full bg-brand-terminal-glow/80" />
              <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline">
                nerd-dial-shell ~ bash (Cape Town • Sandton Gateway)
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-brand-terminal-300">
                <span className="w-2 h-2 rounded-full bg-brand-terminal-glow animate-pulse" />
                <span>SSH: 256-BIT ENCRYPTED</span>
              </span>
            </div>
          </div>

          {/* Terminal Screen Body */}
          <div className="p-5 sm:p-6 font-mono text-xs sm:text-sm min-h-[340px] max-h-[460px] overflow-y-auto space-y-2 selection:bg-brand-terminal-glow selection:text-black">
            {lines.map((line) => {
              if (line.type === 'system') {
                return (
                  <div key={line.id} className="text-slate-400 italic">
                    # {line.text}
                  </div>
                );
              }
              if (line.type === 'cmd') {
                return (
                  <div key={line.id} className="text-brand-electric-300 font-bold flex items-center gap-2">
                    <span className="text-brand-terminal-glow">nerd@dial-sa:~$</span>
                    <span>{line.text.replace('$ ', '')}</span>
                  </div>
                );
              }
              if (line.type === 'error') {
                return (
                  <div key={line.id} className="text-rose-400 pl-4 border-l-2 border-rose-500/50">
                    {line.text}
                  </div>
                );
              }
              return (
                <div key={line.id} className="text-brand-terminal-300 pl-4 border-l-2 border-brand-terminal-500/30">
                  {line.text}
                </div>
              );
            })}

            {isProcessing && (
              <div className="text-brand-sunny-400 flex items-center gap-2 pl-4">
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Executing diagnostic packet...</span>
              </div>
            )}

            <div ref={terminalEndRef} />
          </div>

          {/* Interactive Command Input Box */}
          <div className="p-3 bg-brand-navy-900/80 border-t border-slate-800 flex items-center gap-3">
            <span className="text-brand-terminal-glow font-mono font-bold text-xs sm:text-sm pl-2">
              nerd@dial-sa:~$
            </span>
            <input
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type any command (e.g. 'help', 'status', 'ping vumatel.co.za') and hit Enter..."
              className="flex-1 bg-transparent border-none text-white text-xs sm:text-sm font-mono focus:outline-none placeholder:text-slate-500"
            />
            <button
              onClick={() => executeCommand(currentInput)}
              className="px-3 py-1.5 rounded-lg bg-brand-terminal-glow/20 hover:bg-brand-terminal-glow/30 text-brand-terminal-glow border border-brand-terminal-glow/40 text-xs font-mono font-bold transition-colors"
            >
              RUN
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
