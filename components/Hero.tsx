
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-purple-400 mb-6 uppercase tracking-[0.2em] animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Quantum-Leap Marketing
          </div>
          
          <h1 className="text-5xl md:text-8xl font-orbitron font-bold leading-tight mb-8 animate-[slide-in-up_0.8s_ease-out]">
            Precision <span className="gradient-text">Leads</span><br/>
            <span className="text-white">AI Driven.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl animate-[fade-in_1s_ease-out_0.3s_both]">
            Technova deploys autonomous AI agents to capture, qualify, and deliver the highest quality "LEDs" directly to your sales pipeline.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 animate-[fade-in_1s_ease-out_0.5s_both]">
            <a
              href="#contact"
              className="w-full sm:w-auto px-10 py-5 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl font-bold text-lg transition-all transform hover:-translate-y-1 glow-purple text-center relative group overflow-hidden"
            >
              <span className="relative z-10">Access Dashboard</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto px-10 py-5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-bold text-lg transition-all text-center"
            >
              System Overview
            </a>
          </div>

          <div className="mt-20 flex items-center gap-12 grayscale opacity-40 overflow-hidden animate-[fade-in_1.5s_ease-out_0.8s_both]">
             <div className="flex shrink-0 gap-12 animate-[scroll_40s_linear_infinite]">
                <span className="text-xl font-orbitron font-bold tracking-tighter">FORBES</span>
                <span className="text-xl font-orbitron font-bold tracking-tighter">TECHCRUNCH</span>
                <span className="text-xl font-orbitron font-bold tracking-tighter">WIRED</span>
                <span className="text-xl font-orbitron font-bold tracking-tighter">VERGE</span>
                <span className="text-xl font-orbitron font-bold tracking-tighter">WSJ</span>
                <span className="text-xl font-orbitron font-bold tracking-tighter">FORBES</span>
                <span className="text-xl font-orbitron font-bold tracking-tighter">TECHCRUNCH</span>
                <span className="text-xl font-orbitron font-bold tracking-tighter">WIRED</span>
             </div>
          </div>
        </div>
      </div>

      {/* Floating Elements/Visuals */}
      <div className="absolute top-20 right-0 w-1/2 h-full pointer-events-none hidden lg:block overflow-hidden">
        <div className="relative w-full h-full">
          {/* Animated Circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/[0.03] rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-purple-500/10 rounded-full animate-[spin_60s_linear_infinite]"></div>
          
          {/* Floating UI Assets */}
          <div className="absolute top-[30%] left-[20%] animate-float">
            <div className="glass w-64 p-6 rounded-3xl border-purple-500/20 shadow-2xl backdrop-blur-2xl">
              <div className="flex justify-between items-center mb-4">
                <div className="w-10 h-2 bg-purple-500/40 rounded"></div>
                <div className="w-4 h-4 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-white/10 rounded"></div>
                <div className="h-2 w-3/4 bg-white/10 rounded"></div>
                <div className="h-2 w-5/6 bg-white/10 rounded"></div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 flex justify-between">
                 <div className="w-8 h-8 rounded-lg bg-blue-500/20"></div>
                 <div className="w-8 h-8 rounded-lg bg-teal-500/20"></div>
                 <div className="w-8 h-8 rounded-lg bg-pink-500/20"></div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[20%] left-[40%] animate-float" style={{animationDelay: '1s'}}>
            <div className="glass w-72 p-6 rounded-3xl border-blue-500/20 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500"></div>
                <div className="w-24 h-2 bg-white/20 rounded"></div>
              </div>
              <div className="h-24 w-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl mb-4 border border-white/5 overflow-hidden relative">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
              </div>
              <div className="w-full h-8 bg-purple-600/30 rounded-lg flex items-center justify-center">
                 <div className="w-12 h-1 bg-white/30 rounded"></div>
              </div>
            </div>
          </div>
          
          {/* Visual Glow Core */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-600/20 blur-[120px] rounded-full"></div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes slide-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}} />
    </div>
  );
};

export default Hero;
