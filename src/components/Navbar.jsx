import React from 'react';
import { Linkedin } from 'react-feather';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-border">
      <div className="max-w-[1200px] mx-auto px-8 h-[5.5rem] flex justify-between items-center">
        
        <div className="flex items-center gap-4">
          <img src="/logo.avif" alt="Shlomi Otmazgin" className="h-11 w-11 rounded-full object-cover" />
          <a href="/" className="text-xl font-extrabold text-textPrimary tracking-[4px] leading-tight">
            SHLOMI<br/>OTMAZGIN
          </a>
        </div>
        
        <div className="hidden md:flex gap-10 items-center">
          <a href="/" className="text-[#888] font-medium text-[0.9rem] hover:text-textPrimary transition-colors">Home</a>
          <a href="#services" className="text-textSecondary font-medium text-[0.9rem] hover:text-textPrimary transition-colors">Services</a>
          <a href="#about" className="text-textSecondary font-medium text-[0.9rem] hover:text-textPrimary transition-colors">About</a>
          <a href="#faq" className="text-textSecondary font-medium text-[0.9rem] hover:text-textPrimary transition-colors">FAQ</a>
          <a href="#contact" className="text-textSecondary font-medium text-[0.9rem] hover:text-textPrimary transition-colors">Contact</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-accent hover:text-textSecondary transition-colors">
            <Linkedin size={20} />
          </a>
        </div>

      </div>
    </nav>
  );
}
