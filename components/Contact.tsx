
import React, { useState } from 'react';
import { SOCIALS } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Booking',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const renderIcon = (id: string) => {
    switch (id) {
      case 'spotify':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.49 17.31c-.218.358-.684.47-1.042.252-2.857-1.747-6.453-2.14-10.69-1.17-.41.094-.82-.162-.914-.572-.094-.41.163-.82.572-.914 4.632-1.06 8.604-.61 11.82 1.355.358.218.47.684.252 1.042zm1.464-3.258c-.275.446-.856.587-1.302.312-3.27-2.01-8.254-2.59-12.12-1.415-.502.152-1.033-.133-1.185-.635-.153-.502.133-1.033.635-1.185 4.41-1.338 9.897-.686 13.66 1.626.446.275.587.856.312 1.302zm.126-3.37c-3.92-2.328-10.377-2.543-14.132-1.403-.6.182-1.24-.16-1.423-.762-.182-.6.16-1.24.762-1.423 4.312-1.308 11.437-1.047 15.968 1.64.54.32.716 1.014.396 1.554-.32.54-1.013.715-1.554.394z"/>
          </svg>
        );
      case 'instagram':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        );
      case 'twitter':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </svg>
        );
      case 'youtube':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
          </svg>
        );
      case 'audiomack':
        return (
          <span className="font-black text-[10px] tracking-tighter">AM</span>
        );
      default:
        return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Using the specific Formspree endpoint provided by the user
      const response = await fetch('https://formspree.io/f/xeelepwk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', subject: 'Booking', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto glass-effect rounded-3xl overflow-hidden border border-white/10">
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-16 bg-blue-600 space-y-8">
              <div>
                <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter">LET'S <span className="opacity-50">WORK.</span></h2>
                <p className="text-blue-100 text-lg font-light leading-relaxed">Ready to take the vision to the next level? Reach out for bookings, features, and creative collaborations.</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-blue-200 uppercase tracking-widest font-bold">Email</p>
                    <a href="mailto:heisadetunji45@gmail.com" className="text-white font-medium hover:underline">heisadetunji45@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-blue-200 uppercase tracking-widest font-bold">Location</p>
                    <p className="text-white font-medium">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <p className="text-blue-200 text-sm mb-4 uppercase tracking-[0.3em] font-bold">Follow the Movement</p>
                <div className="flex flex-wrap gap-4">
                  {SOCIALS.map((social) => (
                    <a 
                      key={social.id} 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title={social.name}
                      className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-110 shadow-lg"
                    >
                      {renderIcon(social.id)}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-10 md:p-16 bg-white/5 relative">
              {status === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-wide">Message Sent!</h3>
                  <p className="text-gray-400">Your message has been delivered to AdeTunGee. We'll be in touch soon.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm text-blue-400 hover:text-blue-300 font-bold uppercase tracking-widest"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                      <input 
                        required
                        type="text" 
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-all placeholder:text-gray-600" 
                        placeholder="Your Name" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Subject</label>
                      <select 
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-all appearance-none cursor-pointer"
                      >
                        <option className="bg-black">Booking</option>
                        <option className="bg-black">Collaboration</option>
                        <option className="bg-black">Press / Media</option>
                        <option className="bg-black">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-all placeholder:text-gray-600" 
                      placeholder="email@example.com" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Your Message</label>
                    <textarea 
                      required
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={4} 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-all resize-none placeholder:text-gray-600" 
                      placeholder="Share the details of your project..."
                    ></textarea>
                  </div>
                  <button 
                    disabled={status === 'submitting'}
                    type="submit" 
                    className={`w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all uppercase tracking-widest flex items-center justify-center gap-2 ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {status === 'submitting' ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : 'Send Message'}
                  </button>
                  {status === 'error' && (
                    <p className="text-red-400 text-sm text-center font-medium">Something went wrong. Please try again later.</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
