
import React from 'react';

const cases = [
  {
    title: 'FinTech Disruptor',
    metric: '4.2x ROI',
    image: 'https://picsum.photos/seed/tech1/800/600',
    tags: ['AI Scaling', 'Ads'],
  },
  {
    title: 'HealthCare Saas',
    metric: '-65% CPA',
    image: 'https://picsum.photos/seed/tech2/800/600',
    tags: ['NLP Bots', 'Predictive'],
  },
  {
    title: 'Luxury Real Estate',
    metric: '12k LEDs/mo',
    image: 'https://picsum.photos/seed/tech3/800/600',
    tags: ['Retargeting', 'Video'],
  },
  {
    title: 'Global E-commerce',
    metric: '10x Scale',
    image: 'https://picsum.photos/seed/tech4/800/600',
    tags: ['Auto-Gen', 'Growth'],
  },
];

const Gallery: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-blue-400 font-orbitron font-bold tracking-widest text-sm mb-4 uppercase">Proof of Concept</h2>
          <h3 className="text-4xl md:text-5xl font-orbitron font-bold">The Science of Results</h3>
        </div>
        <div className="flex gap-4">
          <div className="text-center px-6 py-4 glass rounded-2xl">
             <div className="text-3xl font-bold font-orbitron text-purple-400">500M+</div>
             <div className="text-xs text-gray-400">Ad Spend Managed</div>
          </div>
          <div className="text-center px-6 py-4 glass rounded-2xl">
             <div className="text-3xl font-bold font-orbitron text-blue-400">2.5M</div>
             <div className="text-xs text-gray-400">LEDs Generated</div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {cases.map((item, idx) => (
          <div key={idx} className="group relative overflow-hidden rounded-[2.5rem] bg-gray-900 border border-white/5 h-[400px]">
            <img 
              src={item.image} 
              alt={item.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-10 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
               <div className="flex gap-2 mb-4">
                 {item.tags.map(tag => (
                   <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider">{tag}</span>
                 ))}
               </div>
               <h4 className="text-3xl font-orbitron font-bold mb-2">{item.title}</h4>
               <div className="flex justify-between items-center">
                 <p className="text-xl text-purple-400 font-bold">{item.metric}</p>
                 <button className="p-3 bg-white text-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                 </button>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
