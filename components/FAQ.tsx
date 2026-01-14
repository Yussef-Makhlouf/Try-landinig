
import React, { useState } from 'react';

const faqs = [
  {
    question: "How does Technova's AI differ from standard automation?",
    answer: "Standard automation follows rigid 'if-then' rules. Our systems use cognitive neural networks that learn from real-time market shifts, automatically adjusting bids and creative content based on buyer behavior patterns that humans might miss."
  },
  {
    question: "Is this suitable for small to mid-sized agencies?",
    answer: "Absolutely. Our platform scales with you. We have specific modules designed for smaller teams that need to maximize efficiency, as well as enterprise solutions for massive global accounts."
  },
  {
    question: "Can I integrate Technova with my existing CRM?",
    answer: "Yes, Technova features native integrations for HubSpot, Salesforce, Pipedrive, and Zapier. Leads (LEDs) are transmitted instantly with all predictive metadata attached."
  },
  {
    question: "What industries do your predictive models work best in?",
    answer: "While we support most high-ticket service industries, we have specialized deep-learning models for Real Estate, SaaS, MedTech, and FinTech where lead quality is paramount."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-blue-400 font-orbitron font-bold tracking-widest text-xs mb-4 uppercase">Direct Protocols</h2>
        <h3 className="text-3xl md:text-5xl font-orbitron font-bold">Frequently Asked <span className="text-purple-400">Queries</span></h3>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className={`glass rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'border-purple-500/40 ring-1 ring-purple-500/20' : ''}`}>
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full p-6 text-left flex justify-between items-center group"
            >
              <span className={`font-orbitron font-bold transition-colors ${openIndex === idx ? 'text-purple-400' : 'text-gray-200 group-hover:text-white'}`}>
                {faq.question}
              </span>
              <svg 
                className={`w-5 h-5 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-purple-400' : 'text-gray-500'}`} 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
              <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
