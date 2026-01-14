
import React from 'react';

const plans = [
  {
    name: "Growth",
    price: "$2,499",
    description: "Perfect for scaling boutique agencies.",
    features: ["Up to 500 LEDs/mo", "Basic AI Content Gen", "Facebook & Google Ads", "Email Support"],
    accent: "border-blue-500/20"
  },
  {
    name: "Scale",
    price: "$4,999",
    description: "The sweet spot for high-volume agencies.",
    features: ["Unlimited LEDs", "Predictive LED Insights", "Multi-channel AI Scaling", "Priority 24/7 Support", "Custom AI Chatbots"],
    accent: "border-purple-500/50 glow-purple bg-purple-500/5",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "White-label neural infrastructure.",
    features: ["Dedicated AI Training", "Full API Access", "Custom Model Tuning", "Dedicated Architect"],
    accent: "border-teal-500/20"
  }
];

const Pricing: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-teal-400 font-orbitron font-bold tracking-widest text-xs mb-4 uppercase">Investment</h2>
        <h3 className="text-3xl md:text-5xl font-orbitron font-bold">Scaling <span className="gradient-text">Packages</span></h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <div key={idx} className={`glass p-10 rounded-[2.5rem] border transition-all duration-500 hover:-translate-y-3 relative flex flex-col ${plan.accent}`}>
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-purple-600 rounded-full text-[10px] font-bold uppercase tracking-widest">Most Advanced</div>
            )}
            <div className="mb-8">
              <h4 className="text-xl font-orbitron font-bold text-white mb-2">{plan.name}</h4>
              <p className="text-gray-400 text-sm">{plan.description}</p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-bold font-orbitron text-white">{plan.price}</span>
              {plan.price !== "Custom" && <span className="text-gray-500 ml-2">/mo</span>}
            </div>
            <ul className="space-y-4 mb-10 flex-1">
              {plan.features.map(f => (
                <li key={f} className="flex items-center gap-3 text-sm text-gray-300">
                  <svg className="w-4 h-4 text-purple-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  {f}
                </li>
              ))}
            </ul>
            <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/20' : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'}`}>
              Select Protocol
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
