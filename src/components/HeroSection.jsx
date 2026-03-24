import React from 'react';

export default function HeroSection() {
  return (
    <section
      className="min-h-screen flex items-center relative bg-cover bg-top bg-no-repeat mt-[5.5rem]"
      style={{ backgroundImage: 'url(/hero-image.png)' }}
    >
      {/* Left wall overlay to match tone */}
      <div
        className="absolute inset-y-0 left-0 w-[15%] pointer-events-none"
        style={{ background: 'linear-gradient(to right, rgba(245,243,240,0.7) 0%, transparent 100%)' }}
      />
      {/* Cover AI star watermark at bottom-right */}
      <div
        className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom right, rgba(245,243,240,0.95) 0%, rgba(245,243,240,0.6) 40%, transparent 70%)' }}
      />

      <div className="max-w-[1200px] mx-auto px-8 w-full flex justify-end pr-[5%] md:pr-8 relative z-10">
        <div className="text-center max-w-[600px] animate-fade-up">
          <h1 className="text-[clamp(3rem,5vw,4.5rem)] text-textPrimary leading-[1.3] tracking-[2px] font-display font-extrabold">
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
