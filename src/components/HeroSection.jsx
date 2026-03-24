import React from 'react';

export default function HeroSection() {
  return (
    <section className="mt-[5.5rem] relative w-full overflow-hidden">
      <div style={{ clipPath: 'inset(0 3% 10% 0)' }}>
        <img
          src="/hero-image.png"
          alt="Transform your R&D 'Black Box' into a strategic ROI driver"
          className="w-full h-auto block"
        />
      </div>
    </section>
  );
}
