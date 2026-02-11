
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden bg-black">
      {/* Background with an artistic overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?auto=format&fit=crop&q=80&w=1920"
          alt="AdeTunGee Artistic Background"
          className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 bg-blue-600/20 border border-blue-500/50 rounded-full text-blue-400 text-xs font-bold tracking-widest uppercase mb-6 animate-pulse">
            The Doctor of Words
          </span>
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            ADETUN<span className="text-gradient">GEE</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed font-light">
            Bridging emotion, truth, and rhythm. A soulful fusion of hard-hitting bars and melodic Afro-infused poetry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#music"
              className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all text-center uppercase tracking-widest"
            >
              Listen Now
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-full hover:border-white transition-all text-center uppercase tracking-widest"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
