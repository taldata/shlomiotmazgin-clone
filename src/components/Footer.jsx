import React, { useState } from 'react';
import { Linkedin, Mail } from 'react-feather';
import { ArrowRight } from 'lucide-react';
import ContactModal from './ContactModal';

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* CTA Section */}
      <div className="bg-[#0F172A] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col items-center text-center gap-6">

          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-400 mb-1">Let's Talk</span>
          <h2 className="text-3xl sm:text-4xl text-white">Ready to transform your R&D?</h2>
          <p className="text-slate-400 max-w-xl leading-relaxed">
            Let's talk about how we can align your engineering teams with your commercial goals for maximum ROI.
          </p>

          <div className="flex gap-4 mt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-semibold bg-accentBlue text-white hover:bg-accentBlueDark transition-colors cursor-pointer"
            >
              <Mail size={18} />
              Contact Me
              <ArrowRight size={16} />
            </button>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex items-center justify-center p-3.5 rounded-lg text-white border border-white/20 hover:bg-white/10 transition-colors"
            >
              <Linkedin size={20} />
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
