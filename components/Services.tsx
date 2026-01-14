
import React from 'react';

const services = [
  {
    title: 'Autonomous Ad Scaling',
    description: 'Our AI engines manage and scale your Facebook, Google, and TikTok ads 24/7 without human intervention.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'from-purple-500 to-indigo-600',
  },
  {
    title: 'Neural Content Gen',
    description: 'We generate high-converting ad copy and visuals using deep learning models trained on millions of successful campaigns.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'Predictive LED Insights',
    description: 'Stop guessing. Our predictive models identify which leads (LEDs) are likely to close before you even spend a dollar.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: 'from-pink-500 to-rose-600',
  },
  {
    title: 'Cognitive Chatbots',
    description: 'Turn traffic into qualified LEDs instantly with our NLP-powered conversational agents that live on your landing pages.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    color: 'from-emerald-500 to-teal-600',
  },
];

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-indigo-400 font-orbitron font-bold tracking-widest text-sm mb-4 uppercase">Capabilities</h2>
        <h3 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">AI-First Marketing Ecosystem</h3>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Technova combines advanced machine learning with veteran marketing expertise to build a lead generation machine that never sleeps.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, idx) => (
          <div 
            key={idx}
            className="group glass p-8 rounded-3xl hover:border-white/30 transition-all duration-300 relative overflow-hidden"
          >
            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity`}></div>
            
            <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              {service.icon}
            </div>
            
            <h4 className="text-xl font-orbitron font-bold mb-4 group-hover:text-purple-400 transition-colors">
              {service.title}
            </h4>
            
            <p className="text-gray-400 leading-relaxed text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
