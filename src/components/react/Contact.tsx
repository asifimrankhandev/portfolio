import { useState, type SubmitEvent } from 'react';
import { Copy, Check, Mail, ArrowUpRight } from 'lucide-react';

const EMAIL = 'imran@idexa.app';

type Status = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const EMPTY_FORM: FormData = { name: '', email: '', subject: '', message: '' };

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [status, setStatus] = useState<Status>('idle');

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `New Contact from ${formData.name}`,
          _template: 'box',
        }),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setStatus('success');
      setFormData(EMPTY_FORM);
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
      {/* Direct Contact Info */}
      <div className="lg:col-span-2 flex flex-col gap-10 order-2 lg:order-1">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-ink mb-6 border-b border-line pb-4">
            Direct Inquiry
          </h3>
          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-3 font-sans font-bold text-xl md:text-2xl text-ink hover:opacity-70 transition-opacity break-all"
            >
              <Mail className="w-5 h-5 opacity-50 shrink-0" /> {EMAIL}
            </a>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink-muted hover:text-ink transition-colors text-left"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" /> Address Copied
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" /> Copy Email Address
                </>
              )}
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-ink mb-6 border-b border-line pb-4">
            Social
          </h3>
          <div className="flex flex-col gap-3">
            <a href="https://github.com/techyaik" target="_blank" rel="noreferrer" className="pill pill-outline w-fit">
              GitHub <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
            </a>
            <a
              href="https://www.linkedin.com/in/asif-imran-khan-50b170218"
              target="_blank"
              rel="noreferrer"
              className="pill pill-outline w-fit"
            >
              LinkedIn <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="lg:col-span-3 relative order-1 lg:order-2">
        {status === 'success' ? (
          <div className="absolute inset-0 bg-canvas z-10 flex flex-col justify-center py-12" role="status">
            <h3 className="font-black uppercase text-3xl text-ink mb-4">Message Sent</h3>
            <p className="ds-copy text-lg mb-8">Thank you for reaching out. I&apos;ll get back to you as soon as possible.</p>
            <button onClick={() => setStatus('idle')} className="pill pill-outline self-start">
              Send another message
            </button>
          </div>
        ) : null}

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {status === 'error' && (
            <p role="alert" className="text-sm font-medium text-error border border-error/30 bg-error/5 rounded-xl px-4 py-3">
              Something went wrong while sending your message. Please try again or contact me directly by email.
            </p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-ink-muted mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-surface-muted border border-line rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-ink transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-ink-muted mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-surface-muted border border-line rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-ink transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-widest text-ink-muted mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-surface-muted border border-line rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-ink transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-ink-muted mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              minLength={10}
              maxLength={2000}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-surface-muted border border-line rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-ink transition-colors resize-none"
            />
          </div>

          <button type="submit" disabled={status === 'loading'} className="pill pill-solid mt-4">
            {status === 'loading' ? 'Sending…' : 'Send Message'}
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
