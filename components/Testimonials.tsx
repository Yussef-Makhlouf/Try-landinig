
import React from 'react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO at VentureFlow',
    content: "Technova's AI agents didn't just find leads; they found customers that were already looking for us. Our conversion rates tripled within 45 days.",
    avatar: 'https://i.pravatar.cc/150?u=sarah',
    rating: 5,
  },
  {
    name: 'Marcus Thorne',
    role: 'Marketing Director, NexaScale',
    content: "The predictive LED insights are a game-changer. We've slashed our ad waste by 40% while maintaining the same volume of qualified appointments.",
    avatar: 'https://i.pravatar.cc/150?u=marcus',
    rating: 5,
  },
  {
    name: 'Elena Rodriguez',
    role: 'Founder, EcoLogix',
    content: "The neural content generation tools consistently outperform our best human-written copy. It's like having a team of 100 copywriters working 24/7.",
    avatar: 'https://i.pravatar.cc/150?u=elena',
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-purple-400 font-orbitron font-bold tracking-widest text-xs mb-4 uppercase">Voice of the Future</h2>
        <h3 className="text-3xl md:text-5xl font-orbitron font-bold">Client <span className="gradient-text">Success</span> Reports</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="glass p-8 rounded-3xl relative hover:-translate-y-2 transition-transform duration-500 group">
            <div className="flex gap-1 mb-6">
              {[...Array(t.rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-300 italic mb-8 leading-relaxed">"{t.content}"</p>
            <div className="flex items-center gap-4">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-purple-500/30 group-hover:scale-110 transition-transform" />
              <div>
                <h4 className="font-orbitron font-bold text-sm text-white">{t.name}</h4>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
