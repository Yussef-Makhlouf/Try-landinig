
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AICampaignGenerator from './components/AICampaignGenerator';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 100;
        if (revealTop < windowHeight - revealPoint) {
          el.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-purple-500/30 relative">
      {/* Immersive Background Assets */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="orb w-[600px] h-[600px] bg-purple-600 top-[-10%] left-[-10%]"></div>
        <div className="orb w-[500px] h-[500px] bg-blue-600 bottom-[-5%] right-[-5%]" style={{ animationDelay: '-2s' }}></div>
        <div className="orb w-[400px] h-[400px] bg-teal-600 top-[40%] right-[10%]" style={{ animationDelay: '-5s' }}></div>
        
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '32px 32px'}}></div>
      </div>

      <Navbar scrolled={scrolled} />
      
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="services" className="py-24 overflow-hidden reveal">
          <Services />
        </section>

        <section id="ai-tool" className="py-24 px-4 reveal">
          <div className="max-w-6xl mx-auto">
             <AICampaignGenerator />
          </div>
        </section>

        <section id="gallery" className="py-24 bg-slate-900/10 reveal">
          <Gallery />
        </section>

        <section id="testimonials" className="py-24 reveal">
          <Testimonials />
        </section>

        <section id="pricing" className="py-24 reveal">
          <Pricing />
        </section>

        <section id="faq" className="py-24 bg-slate-900/10 reveal">
          <FAQ />
        </section>

        <section id="contact" className="py-24 reveal">
          <LeadForm />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
