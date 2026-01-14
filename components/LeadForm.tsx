
import React, { useState } from 'react';

const LeadForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, send to API
  };

  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="glass rounded-[3rem] overflow-hidden border-blue-500/20 shadow-2xl">
        <div className="grid md:grid-cols-2">
          <div className="p-12 md:p-16 bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-r border-white/5">
             <h2 className="text-4xl font-orbitron font-bold mb-6">Ready to Scale with <span className="gradient-text">Technova?</span></h2>
             <p className="text-gray-300 text-lg mb-8 leading-relaxed">
               Book a 15-minute Strategy Audit where our AI Lead Architects will analyze your current funnels and provide a roadmap for 10x growth.
             </p>
             
             <ul className="space-y-4">
               {[
                 'Zero Ad Waste Guarantee',
                 'Full Funnel Automation Setup',
                 'Daily Predictive Reporting',
                 'Exclusive AI Toolset Access'
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    </div>
                    {item}
                 </li>
               ))}
             </ul>
          </div>

          <div className="p-12 md:p-16 bg-black/20">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6 border border-green-500/50">
                   <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                </div>
                <h3 className="text-2xl font-orbitron font-bold mb-2">Transmission Received</h3>
                <p className="text-gray-400">Our AI architect will be in touch within 24 standard cycles.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Full Name</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Company Email</label>
                  <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Monthly Ad Spend</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-gray-300 focus:outline-none focus:border-purple-500/50">
                    <option>$5k - $10k</option>
                    <option>$10k - $50k</option>
                    <option>$50k - $200k</option>
                    <option>$200k+</option>
                  </select>
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all transform hover:-translate-y-1"
                >
                  Initiate Scan
                </button>
                <p className="text-center text-[10px] text-gray-500 uppercase tracking-tighter">By clicking, you agree to our Neural Privacy Protocol.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadForm;
