import React from 'react';

export default function HeroSection() {
  return (
    <section 
      style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center',
        position: 'relative',
        backgroundImage: 'url(/hero-image.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        marginTop: '5.5rem' // offsets the navbar
      }}
    >
      <div className="container" style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', paddingRight: '5%' }}>
        <div className="animate-fade-up" style={{ textAlign: 'center', maxWidth: '600px' }}>
          <h1 style={{ 
            fontSize: 'clamp(3rem, 5vw, 4.5rem)', 
            color: '#1a1a1a', 
            lineHeight: 1.3,
            letterSpacing: '2px',
            fontFamily: 'var(--font-display)',
            fontWeight: 800
          }}>
            Transform your<br/>
            R&D 'Black Box'<br/>
            into a strategic<br/>
            ROI driver
          </h1>
        </div>
      </div>
    </section>
  );
}
