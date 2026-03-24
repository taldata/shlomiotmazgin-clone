import React from 'react';
import { Linkedin, Mail } from 'react-feather';

export default function Footer() {
  return (
    <footer id="contact" style={{ borderTop: '1px solid var(--border-color)', padding: '4rem 0', background: 'var(--bg-panel)' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '2rem' }}>
        <h2 style={{ fontSize: '2rem' }}>Ready to transform your R&D?</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '500px' }}>
          Let's talk about how we can align your engineering teams with your commercial goals for maximum ROI.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="mailto:contact@shlomiotmazgin.com" className="btn btn-primary" style={{ padding: '0.75rem 2rem' }}>
            <Mail size={18} style={{ marginRight: '0.5rem' }} /> Contact Me
          </a>
          <a href="#" className="glass-panel" style={{ display: 'inline-flex', padding: '0.75rem', borderRadius: '50%', color: 'var(--text-primary)', textDecoration: 'none' }}>
            <Linkedin size={24} />
          </a>
        </div>
        
        <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)', width: '100%', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
          &copy; {new Date().getFullYear()} Shlomi Otmazgin. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
