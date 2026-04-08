import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function LinkedinIcon({ size = 24 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] border-b border-borderLine/50'
          : 'bg-white border-b border-borderLine'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 h-[5.5rem] flex justify-between items-center">

        <div className="flex items-center gap-3 sm:gap-4">
          <img src="/logo.avif" alt="Shlomi Otmazgin" className="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover" />
          <a href="/" className="text-base sm:text-lg font-extrabold text-textPrimary tracking-[0.15em] sm:tracking-[0.2em] leading-tight transition-colors hover:text-accentBlue">
            SHLOMI<br/>OTMAZGIN
          </a>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-10 items-center">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-textSecondary font-medium text-[0.95rem] hover:text-accentBlue transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/shlomiot/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="text-textSecondary hover:text-accentBlue transition-colors p-2 rounded-full hover:bg-slate-50"
          >
            <LinkedinIcon size={20} />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-textPrimary cursor-pointer hover:bg-slate-50 rounded-full transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-borderLine overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {links.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-textSecondary font-medium text-base py-2 hover:text-accentBlue transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://www.linkedin.com/in/shlomiot/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="text-textSecondary py-2 hover:text-accentBlue transition-colors"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
