
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&q=80&w=800"
                alt="Samuel AdeTunJi"
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
                <p className="text-white font-bold text-2xl">TJ</p>
                <p className="text-gray-400">Samuel AdeTunJi Akoda</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black">THE MAN BEHIND THE <span className="text-blue-500">WORDS.</span></h2>
              <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Samuel Adetunji Akoda, professionally known as <span className="text-white font-semibold">AdeTunGee</span>, is a rising Nigerian rapper and songwriter whose sound bridges emotion, truth, and rhythm. Blending lyrical honesty with rhythm and poetry, he switches effortlessly between soulful melodies and hard-hitting bars.
            </p>
            
            <p className="text-lg text-gray-400 leading-relaxed">
              Whether he’s rapping over emotional piano beats or vibing on Afro-infused drums, AdeTunGee stays real — no gimmicks, no cap. His name reflects his mindset: <span className="text-blue-400 italic">calm, calculated, and sharp</span> like a doctor of words.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 glass-effect rounded-xl border border-white/5">
                <h4 className="text-blue-500 font-bold mb-2 uppercase text-xs tracking-widest">Ethos</h4>
                <p className="text-sm">Real Truth, No Gimmicks</p>
              </div>
              <div className="p-6 glass-effect rounded-xl border border-white/5">
                <h4 className="text-blue-500 font-bold mb-2 uppercase text-xs tracking-widest">Genre</h4>
                <p className="text-sm">Rap, Amapiano, Afrobeats, and RnB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
