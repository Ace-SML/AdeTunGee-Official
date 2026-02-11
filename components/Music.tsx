
import React from 'react';
import { FEATURED_SONGS, SPOTIFY_ARTIST_URL, LATEST_RELEASE_URL } from '../constants';

const Music: React.FC = () => {
  return (
    <section id="music" className="py-24 bg-black relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase">FEATURED <span className="text-gradient">DROPS</span></h2>
            <p className="text-gray-400 max-w-xl">Experience the sonic evolution of AdeTunGee. Authentic storytelling meeting Afro-fusion rhythms.</p>
          </div>
          <a href={SPOTIFY_ARTIST_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-green-500 transition-colors group">
            <span className="font-bold tracking-widest uppercase text-sm">Follow on Spotify</span>
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
               <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.49 17.31c-.218.358-.684.47-1.042.252-2.857-1.747-6.453-2.14-10.69-1.17-.41.094-.82-.162-.914-.572-.094-.41.163-.82.572-.914 4.632-1.06 8.604-.61 11.82 1.355.358.218.47.684.252 1.042zm1.464-3.258c-.275.446-.856.587-1.302.312-3.27-2.01-8.254-2.59-12.12-1.415-.502.152-1.033-.133-1.185-.635-.153-.502.133-1.033.635-1.185 4.41-1.338 9.897-.686 13.66 1.626.446.275.587.856.312 1.302zm.126-3.37c-3.92-2.328-10.377-2.543-14.132-1.403-.6.182-1.24-.16-1.423-.762-.182-.6.16-1.24.762-1.423 4.312-1.308 11.437-1.047 15.968 1.64.54.32.716 1.014.396 1.554-.32.54-1.013.715-1.554.394z"/>
            </svg>
          </a>
        </div>

        {/* Featured Release Spotlight with Spotify Embed */}
        <div className="mb-20 p-8 md:p-12 glass-effect rounded-3xl flex flex-col md:flex-row items-stretch gap-12 border border-white/10">
           <div className="w-full md:w-2/5 min-h-[352px]">
              <iframe 
                style={{ borderRadius: '12px' }} 
                src="https://open.spotify.com/embed/album/5cL1gpcF842aeOZniUl3CF?utm_source=generator&theme=0" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allowFullScreen={true} 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
              ></iframe>
           </div>
           <div className="flex-1 flex flex-col justify-center space-y-6">
              <span className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase">Latest Release</span>
              <h3 className="text-4xl md:text-5xl font-black">BANGER ON BANGER</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                "Banger on Banger" is a high-energy Amapiano rap track packed with confidence, catchy flows, and hit-making energy. The song blends melody and rap to show AdeTunGee’s versatility while delivering a vibe that’s danceable, motivational, and all about dropping hits back-to-back.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href={LATEST_RELEASE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black hover:bg-blue-500 hover:text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all uppercase tracking-widest text-sm"
                >
                  Listen on Spotify
                </a>
              </div>
           </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {FEATURED_SONGS.map((song) => (
            <div key={song.id} className="group cursor-pointer" onClick={() => window.open(song.spotifyUrl, '_blank')}>
              <div className="relative overflow-hidden rounded-2xl mb-6 shadow-2xl">
                <img
                  src={song.coverUrl}
                  alt={song.title}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform shadow-xl">
                    <svg className="w-6 h-6 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1 group-hover:text-blue-400 transition-colors uppercase tracking-wide">{song.title}</h3>
              <p className="text-gray-500 text-sm mb-4 uppercase tracking-widest">{song.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Music;
