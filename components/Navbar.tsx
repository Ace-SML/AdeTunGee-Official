
import React, { useState, useEffect, useCallback } from 'react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.slice(1);
    const element = document.getElementById(id);
    if (element) {
      setIsMobileMenuOpen(false);
      setActiveSection(id);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for active section tracking
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    NAV_LINKS.forEach((link) => {
      const element = document.getElementById(link.href.slice(1));
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const isActive = (href: string) => activeSection === href.slice(1);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-lg py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="text-2xl font-black tracking-tighter text-white">
          ADETUN<span className="text-blue-500">GEE</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-sm font-bold transition-all duration-300 uppercase tracking-widest relative group ${
                isActive(link.href) ? 'text-blue-500' : 'text-white hover:text-blue-400'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${
                isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-1/2'
              }`}></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4">
           <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, '#contact')}
            className={`md:hidden px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${isActive('#contact') ? 'bg-blue-600 border-blue-600 text-white' : 'border-white/20 text-white'}`}
           >
             Book Now
           </a>
          <button
            className="md:hidden text-white focus:outline-none p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-2xl h-screen flex flex-col items-center justify-center space-y-10 animate-in fade-in slide-in-from-top duration-300 fixed inset-0 z-40">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-3xl font-black uppercase tracking-widest transition-all ${
                isActive(link.href) ? 'text-blue-500 scale-110' : 'text-white hover:text-blue-500'
              }`}
              onClick={(e) => scrollToSection(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <button 
            className="mt-8 text-gray-500 uppercase tracking-widest text-xs font-bold hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Close Menu
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
