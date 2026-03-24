import React from 'react';
import { Linkedin, Mail } from 'react-feather';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border py-24 bg-bgPanel">
      <div className="max-w-7xl mx-auto px-8 flex flex-col items-center text-center gap-8">
        
        <h2 className="text-3xl">Ready to transform your R&D?</h2>
        <p className="text-textSecondary max-w-xl leading-relaxed">
          Let's talk about how we can align your engineering teams with your commercial goals for maximum ROI.
        </p>
        
        <div className="flex gap-4 mt-2">
          <a 
            href="mailto:contact@shlomiotmazgin.com" 
            className="inline-flex items-center justify-center px-8 py-3 rounded font-semibold bg-textPrimary text-white hover:-translate-y-0.5 transition-transform"
          >
            <Mail size={18} className="mr-2" /> Contact Me
          </a>
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
    </footer>
  );
}
