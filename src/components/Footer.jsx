import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

function LinkedinIcon({ size = 24 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
import ContactModal from './ContactModal';
import useFadeIn from '../hooks/useFadeIn';

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ref, visible] = useFadeIn(0.1);

  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* CTA Section */}
      <div className="bg-[#0F172A] py-16 sm:py-24">
        <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-8 flex flex-col items-center text-center gap-6 section-fade ${visible ? 'visible' : ''}`}>

          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-400 mb-1 fade-up-child" style={{ '--anim-delay': '0ms' }}>Let's Talk</span>
          <h2 className="text-3xl sm:text-4xl text-white fade-up-child" style={{ '--anim-delay': '80ms' }}>Ready to transform your R&D?</h2>
          <p className="text-slate-400 max-w-xl leading-relaxed fade-up-child" style={{ '--anim-delay': '160ms' }}>
            Let's talk about how we can align your engineering teams with your commercial goals for maximum ROI.
          </p>

          <div className="flex gap-4 mt-4 fade-up-child" style={{ '--anim-delay': '240ms' }}>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-semibold bg-accentBlue text-white hover:bg-accentBlueDark transition-colors cursor-pointer"
            >
              <Mail size={18} />
              Contact Me
              <ArrowRight size={16} />
            </button>
            <a
              href="https://www.linkedin.com/in/shlomiot/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex items-center justify-center p-3.5 rounded-lg text-white border border-white/20 hover:bg-white/10 transition-colors"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="bg-[#020617] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Shlomi Otmazgin. All rights reserved.
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </footer>
  );
}
