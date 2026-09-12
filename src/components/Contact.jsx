import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { Copy, Check, Mail, ArrowUpRight } from 'lucide-react';

export const Contact = () => {
  const revealRef = useReveal();
  const formRevealRef = useReveal();
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const email = "imran@idexa.app";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section className="py-24 md:py-32 bg-[#111111]" id="contact">
      <div className="container mx-auto px-6 max-w-7xl">

        <div className="mb-20 reveal" ref={revealRef}>
          <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4">Contact</p>
          <div className="w-12 h-px bg-white/20 mb-8"></div>
          <h2 className="font-serif text-[3rem] md:text-[4rem] lg:text-[5rem] leading-none tracking-tight text-white mb-6">
            Let's build <br className="hidden sm:block" />
            <span className="italic opacity-90">something</span> together.
          </h2>

          <p className="text-white/70 font-light leading-relaxed text-lg max-w-xl">
            I am currently open to new opportunities. Fill out the form below or send me a direct email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start reveal" ref={formRevealRef}>

          {/* Direct Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-12 order-2 lg:order-1">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-6 border-b border-white/10 pb-4">Direct Inquiry</h3>
              <div className="flex flex-col gap-6">
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-3 font-serif text-2xl md:text-3xl text-white hover:opacity-70 transition-opacity"
                >
                  <Mail className="w-5 h-5 opacity-50" /> imran@idexa.app
                </a>

                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors text-left"
                >
                  {copied ? (
                    <><Check className="w-4 h-4" /> Address Copied</>
                  ) : (
                    <><Copy className="w-4 h-4" /> Copy Email Address</>
                  )}
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-6 border-b border-white/10 pb-4">Social</h3>
              <div className="flex flex-col gap-4">
                <a href="https://github.com/techyaik" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-lg font-serif italic text-white hover:opacity-70 transition-opacity">
                  GitHub <ArrowUpRight className="w-4 h-4 opacity-50" />
                </a>
                <a href="https://www.linkedin.com/in/asif-imran-khan-50b170218" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-lg font-serif italic text-white hover:opacity-70 transition-opacity">
                  LinkedIn <ArrowUpRight className="w-4 h-4 opacity-50" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 relative order-1 lg:order-2">

            {status === 'success' ? (
              <div className="absolute inset-0 bg-[#111111]/95 backdrop-blur-sm z-10 flex flex-col justify-center py-12">
                <h3 className="font-serif text-4xl text-white mb-4 italic">Message Sent.</h3>
                <p className="text-white/70 font-light leading-relaxed text-lg mb-8">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-xs font-bold uppercase tracking-widest text-white border-b border-white pb-1 self-start hover:opacity-70 transition-opacity"
                >
                  Send another message
                </button>
              </div>
            ) : null}

            <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }}></iframe>

            <form
              action={`https://formsubmit.co/${email}`}
              method="POST"
              target="hidden_iframe"
              onSubmit={handleSubmit}
              className="space-y-12"
            >
              <input type="hidden" name="_template" value="box" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value={`New Contact from ${formData.name}`} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div className="relative group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="peer w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors"
                    placeholder=" "
                  />
                  <label htmlFor="name" className="absolute left-0 top-4 text-white/50 text-sm transition-all peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-valid:-translate-y-6 peer-valid:text-xs peer-valid:font-bold peer-valid:uppercase peer-valid:tracking-widest">
                    Name
                  </label>
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="peer w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors"
                    placeholder=" "
                  />
                  <label htmlFor="email" className="absolute left-0 top-4 text-white/50 text-sm transition-all peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-valid:-translate-y-6 peer-valid:text-xs peer-valid:font-bold peer-valid:uppercase peer-valid:tracking-widest">
                    Email
                  </label>
                </div>
              </div>

              <div className="relative group">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="peer w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors"
                  placeholder=" "
                />
                <label htmlFor="subject" className="absolute left-0 top-4 text-white/50 text-sm transition-all peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-valid:-translate-y-6 peer-valid:text-xs peer-valid:font-bold peer-valid:uppercase peer-valid:tracking-widest">
                  Subject
                </label>
              </div>

              <div className="relative group">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="peer w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors resize-none"
                  placeholder=" "
                />
                <label htmlFor="message" className="absolute left-0 top-4 text-white/50 text-sm transition-all peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-valid:-translate-y-6 peer-valid:text-xs peer-valid:font-bold peer-valid:uppercase peer-valid:tracking-widest">
                  Message
                </label>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="group inline-flex items-center justify-center gap-4 px-8 py-4 bg-white text-[#111111] rounded hover:bg-[#f0f0f0] transition-all disabled:opacity-50 mt-8 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                <span className="text-xs font-bold uppercase tracking-widest">
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
