import React, { useState } from 'react';
import { Linkedin, Menu, X } from 'react-feather';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-border">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 h-[5.5rem] flex justify-between items-center">

        <div className="flex items-center gap-3 sm:gap-4">
          <img src="/logo.avif" alt="Shlomi Otmazgin" className="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover" />
          <a href="/" className="text-base sm:text-xl font-extrabold text-textPrimary tracking-[3px] sm:tracking-[4px] leading-tight">
            SHLOMI<br/>OTMAZGIN
          </a>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-10 items-center">
          {links.map(link => (
            <a key={link.label} href={link.href} className="text-textSecondary font-medium text-[0.9rem] hover:text-textPrimary transition-colors">
              {link.label}
            </a>
          ))}
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-accent hover:text-textSecondary transition-colors">
            <Linkedin size={20} />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-textPrimary"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border animate-[fadeIn_0.2s_ease]">
          <div className="flex flex-col px-6 py-4 gap-4">
            {links.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-textSecondary font-medium text-base py-2 hover:text-textPrimary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-accent py-2">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
