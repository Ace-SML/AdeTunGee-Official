
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 bg-[#050505]">
      <div className="container mx-auto px-6 text-center space-y-8">
        <a href="#home" className="text-3xl font-black tracking-tighter inline-block">
          ADETUN<span className="text-blue-500">GEE</span>
        </a>
        
        <div className="flex justify-center gap-8 text-sm uppercase tracking-widest font-bold text-gray-400">
           <a href="#about" className="hover:text-white transition-colors">About</a>
           <a href="#music" className="hover:text-white transition-colors">Music</a>
           <a href="#contact" className="hover:text-white transition-colors">Press</a>
        </div>

        <div className="pt-4 border-t border-white/5">
          <p className="text-gray-500 text-sm tracking-wide">
            &copy; {currentYear} AdeTunGee Music. All Rights Reserved. 
            <span className="block mt-1">Designed by the Doctor of Words Himself.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
