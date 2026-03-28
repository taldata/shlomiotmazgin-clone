import { useState, useEffect, useRef } from 'react';
import { X } from 'react-feather';

// ← Replace with your Web3Forms access key (get one at https://web3forms.com)
const WEB3FORMS_KEY = '358ed785-0ccc-4750-b47e-5d5a5c6bea48';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const firstInputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setStatus('idle');
      setTimeout(() => firstInputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const payload = new FormData();
    payload.append('access_key', WEB3FORMS_KEY);
    payload.append('subject', 'New Contact — shlomiotmazgin.com');
    payload.append('from_name', formData.name);
    payload.append('name', formData.name);
    payload.append('email', formData.email);
    payload.append('phone', formData.phone || 'Not provided');
    payload.append('message', formData.message);
    // Honeypot spam protection
    payload.append('botcheck', '');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: payload,
      });
      const result = await res.json();

      if (result.success) {
        setStatus('success');
        setTimeout(() => {
          setFormData({ name: '', email: '', phone: '', message: '' });
          setStatus('idle');
          onClose();
        }, 2500);
      } else {
        setErrorMsg(result.message || 'Something went wrong.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Contact form"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/60 via-[#0F172A]/40 to-[#0F172A]/60 backdrop-blur-md animate-[fadeIn_0.3s_ease]" />

      {/* Modal */}
      <div
        className="relative bg-gradient-to-br from-white via-slate-50 to-white rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] w-full max-w-lg p-8 max-h-[90vh] overflow-y-auto animate-[modalScaleUp_0.4s_cubic-bezier(0.34,1.56,0.64,1)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors text-textSecondary hover:text-textPrimary cursor-pointer"
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        {status === 'success' ? (
          <div className="text-center py-12 animate-[fadeIn_0.3s_ease]">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-accentBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Thank you!</h3>
            <p className="text-textSecondary">I'll get back to you shortly.</p>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-semibold mb-2">Get in Touch</h3>
            <p className="text-textSecondary mb-8">Fill in your details and I'll get back to you as soon as possible.</p>

            {status === 'error' && (
              <div className="mb-5 p-3 rounded-lg bg-red-50 text-red-700 text-sm">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Honeypot — hidden from users, catches bots */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-textPrimary mb-1.5">Full Name</label>
                <input
                  ref={firstInputRef}
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-textPrimary placeholder-textMuted focus:outline-none focus:ring-2 focus:ring-accentBlue/20 focus:border-accentBlue transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-textPrimary mb-1.5">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-textPrimary placeholder-textMuted focus:outline-none focus:ring-2 focus:ring-accentBlue/20 focus:border-accentBlue transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-textPrimary mb-1.5">Phone (optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-textPrimary placeholder-textMuted focus:outline-none focus:ring-2 focus:ring-accentBlue/20 focus:border-accentBlue transition-all"
                  placeholder="+972-XX-XXX-XXXX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-textPrimary mb-1.5">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-textPrimary placeholder-textMuted focus:outline-none focus:ring-2 focus:ring-accentBlue/20 focus:border-accentBlue transition-all resize-none"
                  placeholder="Tell me about your project or question..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3.5 rounded-lg font-semibold bg-accentBlue text-white hover:bg-accentBlueDark transition-colors mt-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
