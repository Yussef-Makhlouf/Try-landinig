
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const AICampaignGenerator: React.FC = () => {
  const [industry, setIndustry] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const generateStrategy = async () => {
    if (!industry) return;
    setLoading(true);
    setResult(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Generate a brief, futuristic digital marketing campaign strategy for the ${industry} industry. Focus on how AI could collect high-quality leads (LEDs). Provide 3 specific bullet points: 1. Ad Concept, 2. AI Targeting Strategy, 3. Lead Capture Hack. Keep it professional and visionary.`,
      });
      
      setResult(response.text || "Failed to generate strategy. Please try again.");
    } catch (error) {
      console.error(error);
      setResult("AI Core overloaded. Please check your connection or try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass rounded-[2rem] p-8 md:p-12 border-purple-500/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 blur-[100px] pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 text-left">
          <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6">
            LIVE AI DEMO
          </div>
          <h3 className="text-3xl md:text-4xl font-orbitron font-bold mb-6 leading-tight">
            Free AI Campaign <span className="text-purple-400">Blueprint</span>
          </h3>
          <p className="text-gray-400 mb-8 text-lg">
            Experience the Technova difference. Enter your industry and let our neural network draft your next big lead generation strategy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <input 
              type="text" 
              placeholder="e.g. Fintech, Real Estate, SaaS" 
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-purple-500/50 transition-colors"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            />
            <button 
              onClick={generateStrategy}
              disabled={loading || !industry}
              className={`px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'}`}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Processing...
                </>
              ) : 'Generate Strategy'}
            </button>
          </div>
          <p className="text-xs text-gray-500">Powered by Gemini AI Engine</p>
        </div>

        <div className="w-full md:w-1/2 min-h-[300px] flex flex-col">
          <div className="flex-1 glass bg-black/40 border-white/10 rounded-2xl p-6 relative">
            {!result && !loading && (
              <div className="h-full flex flex-col items-center justify-center text-center text-gray-500 space-y-4">
                <svg className="w-12 h-12 opacity-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
                <p>Blueprint will appear here...</p>
              </div>
            )}
            
            {loading && (
              <div className="h-full flex flex-col items-center justify-center space-y-4">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-150"></div>
                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce delay-300"></div>
                </div>
                <p className="text-sm font-orbitron animate-pulse text-purple-400">Calculating Vectors...</p>
              </div>
            )}

            {result && (
              <div className="animate-in fade-in duration-700">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Analysis Complete</span>
                </div>
                <div className="prose prose-invert text-gray-300 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar text-sm leading-relaxed whitespace-pre-wrap">
                  {result}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICampaignGenerator;
