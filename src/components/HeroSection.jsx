import React from 'react';

export default function HeroSection() {
  return (
    <section 
      className="min-h-screen flex items-center relative bg-cover bg-top bg-no-repeat mt-[5.5rem]"
      style={{ backgroundImage: 'url(/hero-image.png)' }}
    >
      <div className="max-w-[1200px] mx-auto px-8 w-full flex justify-end pr-[5%] md:pr-8">
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
