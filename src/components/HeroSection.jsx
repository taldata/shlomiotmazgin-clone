import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import ContactModal from './ContactModal';

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="mt-[5.5rem] w-full overflow-hidden bg-[#1B2A4A]">

      {/* ── MOBILE layout (overlay: person top, text bottom) ── */}
      <div className="sm:hidden relative">
        <img
          src="/hero-image-new.png"
          alt="Shlomi Otmazgin"
          className="w-full block h-[calc(100svh-5.5rem)] object-cover object-[70%_28%]"
        />
        {/* Gradient only at bottom quarter */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent" />
        {/* Text pinned just above metrics bar */}
        <div className="absolute left-0 right-0 px-5 animate-fade-up" style={{ bottom: '110px' }}>
          <h1 className="text-[clamp(1.4rem,5.5vw,1.85rem)] text-white leading-[1.2] mb-3">
            Transform your R&D into an <span className="text-blue-400">AI-driven</span> growth engine
          </h1>
          <div className="flex flex-row gap-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg font-semibold bg-accentBlue text-white hover:bg-accentBlueDark transition-colors cursor-pointer text-sm flex-1"
            >
              Book a Consultation
              <ArrowRight size={16} />
            </button>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg font-semibold text-white border border-white/25 hover:bg-white/10 transition-colors text-sm flex-1"
            >
              View Services
            </a>
          </div>
        </div>
        {/* Metrics */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#0F172A]/90 backdrop-blur-sm border-t border-white/10">
          <div className="px-5 py-2">
            <div className="grid grid-cols-2 gap-1.5">
              {[
                { value: '20+', label: 'Years Experience' },
                { value: '100+', label: 'Engineers Led' },
                { value: '€950M', label: 'Exit Value (Yad2)' },
                { value: '30%', label: 'Faster Time-to-Market' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-base font-bold text-white">{stat.value}</div>
                  <div className="text-[0.65rem] text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── DESKTOP layout (overlay) ── */}
      <div className="hidden sm:block relative">
        <img
          src="/hero-image-new.png"
          alt=""
          aria-hidden="true"
          className="w-full block h-auto object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B2A4A]/70 via-[#1B2A4A]/30 to-transparent flex flex-row items-center">
          <div className="max-w-[1200px] mx-auto px-8 w-full">
            <div className="max-w-xl animate-fade-up">
              <span className="inline-block text-sm font-semibold tracking-widest uppercase text-blue-300 mb-6">
                Fractional VP R&D &middot; CTO Advisory
              </span>
              <h1 className="text-[clamp(2rem,6vw,3.25rem)] text-white leading-[1.15] mb-6">
                Transform your R&D{' '}<br />
                into an <span className="text-blue-400">AI-driven</span>{' '}<br />
                growth engine
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-md">
                Bridging the Gap Between AI Potential and Engineering Reality: Leading Large-Scale Transformations to AI-Driven Development
              </p>
              <div className="flex flex-row gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold bg-accentBlue text-white hover:bg-accentBlueDark transition-colors cursor-pointer text-base"
                >
                  Book a Consultation
                  <ArrowRight size={18} />
                </button>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-semibold text-white border border-white/25 hover:bg-white/10 transition-colors text-base"
                >
                  View Services
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-[#0F172A]/90 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-[1200px] mx-auto px-8 py-5">
            <div className="grid grid-cols-4 gap-8">
              {[
                { value: '20+', label: 'Years Experience' },
                { value: '100+', label: 'Engineers Led' },
                { value: '€950M', label: 'Exit Value (Yad2)' },
                { value: '30%', label: 'Faster Time-to-Market' },
              ].map((stat) => (
                <div key={stat.label} className="text-left">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
