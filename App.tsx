
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Music from './components/Music';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Music />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      
      {/* Scroll to Top floating button (Optional enhancement) */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-40 bg-blue-600 w-12 h-12 rounded-full shadow-2xl flex items-center justify-center text-white hover:bg-blue-500 transition-all opacity-0 hover:opacity-100 focus:opacity-100"
        title="Scroll to Top"
        style={{ opacity: 'var(--scroll-visible, 0)' }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {/* Logic to show/hide scroll button */}
      <script dangerouslySetInnerHTML={{ __html: `
        window.addEventListener('scroll', () => {
          document.body.style.setProperty('--scroll-visible', window.scrollY > 500 ? '1' : '0');
        });
      `}} />
    </div>
  );
};

export default App;
