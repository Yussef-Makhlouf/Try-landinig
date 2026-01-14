
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-24 pb-12 border-t border-white/5 bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
                 <span className="text-white font-bold text-xl font-orbitron">T</span>
              </div>
              <span className="text-2xl font-orbitron font-bold tracking-wider gradient-text">TECHNOVA</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Pioneering the next frontier of digital marketing through advanced cognitive systems and autonomous lead generation engines.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'Github', 'Instagram'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current rounded-sm opacity-50"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-orbitron font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#services" className="hover:text-purple-400 transition-colors">Services</a></li>
              <li><a href="#ai-tool" className="hover:text-purple-400 transition-colors">AI Blueprint</a></li>
              <li><a href="#gallery" className="hover:text-purple-400 transition-colors">Case Studies</a></li>
              <li><a href="#contact" className="hover:text-purple-400 transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-orbitron font-bold mb-6">Intelligence</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Neural Labs</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">API Docs</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Tech Blog</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Status Core</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} TECHNOVA AI SYSTEMS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-xs text-gray-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Protocol</a>
            <a href="#" className="hover:text-white">Cookies API</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
