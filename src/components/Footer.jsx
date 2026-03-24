import React, { useState } from 'react';
import { Linkedin, Mail } from 'react-feather';
import ContactModal from './ContactModal';

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer id="contact" className="border-t border-border py-16 sm:py-24 bg-bgPanel">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col items-center text-center gap-8">

        <h2 className="text-3xl">Ready to transform your R&D?</h2>
        <p className="text-textSecondary max-w-xl leading-relaxed">
          Let's talk about how we can align your engineering teams with your commercial goals for maximum ROI.
        </p>

        <div className="flex gap-4 mt-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center px-8 py-3 rounded font-semibold bg-textPrimary text-white hover:-translate-y-0.5 transition-transform cursor-pointer"
          >
            <Mail size={18} className="mr-2" /> Contact Me
          </button>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center p-3 rounded-full text-textPrimary bg-bgMain border border-border hover:-translate-y-0.5 shadow-sm hover:shadow-md transition-all"
          >
            <Linkedin size={20} />
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-border w-full text-textMuted text-sm">
          &copy; {new Date().getFullYear()} Shlomi Otmazgin. All rights reserved.
        </div>

      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </footer>
  );
}
