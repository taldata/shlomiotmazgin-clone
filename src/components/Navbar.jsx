import React from 'react';
import { Linkedin } from 'react-feather';

export default function Navbar() {
  return (
    <nav style={{ background: '#ffffff', position: 'fixed', top: 0, width: '100%', zIndex: 50, borderBottom: '1px solid #eaeaea' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '5.5rem' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ 
            width: '45px', height: '45px', borderRadius: '50%', border: '2px solid #1a1a1a', 
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontFamily: 'serif', fontSize: '1.25rem', fontStyle: 'italic', letterSpacing: '-1px'
          }}>
            SO
          </div>
          <a href="/" style={{ fontSize: '1.2rem', fontWeight: 800, textDecoration: 'none', color: '#1a1a1a', letterSpacing: '4px', lineHeight: 1.3 }}>
            SHLOMI<br/>OTMAZGIN
          </a>
        </div>
        
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="nav-links">
          <a href="/" style={{ textDecoration: 'none', color: '#888', fontWeight: 500, fontSize: '0.9rem' }}>Home</a>
          <a href="#services" style={{ textDecoration: 'none', color: '#4a4a4a', fontWeight: 500, fontSize: '0.9rem' }}>Services</a>
          <a href="#about" style={{ textDecoration: 'none', color: '#4a4a4a', fontWeight: 500, fontSize: '0.9rem' }}>About</a>
          <a href="#faq" style={{ textDecoration: 'none', color: '#4a4a4a', fontWeight: 500, fontSize: '0.9rem' }}>FAQ</a>
          <a href="#contact" style={{ textDecoration: 'none', color: '#4a4a4a', fontWeight: 500, fontSize: '0.9rem' }}>Contact</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: '#1a1a1a' }}>
            <Linkedin size={20} />
          </a>
        </div>

      </div>
    </nav>
  );
}
