import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import ContactModal from './ContactModal';

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="mt-[5.5rem] relative w-full overflow-hidden bg-[#1B2A4A]">
      {/* Background image */}
      {/* Mobile: fixed height, cover, focus on person (right side) */}
      {/* Desktop: full natural width image */}
      <img
        src="/hero-image-new.png"
        alt=""
        aria-hidden="true"
        className="w-full block h-[calc(100svh-5.5rem)] sm:h-auto object-cover object-[70%_center] sm:object-center"
      />

      {/* Content overlay */}
      {/* Mobile: stronger overlay so text is readable over the person */}
      <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-[#1B2A4A]/90 via-[#1B2A4A]/70 sm:from-[#1B2A4A]/70 sm:via-[#1B2A4A]/30 to-[#1B2A4A]/60 sm:to-transparent flex flex-col justify-between sm:flex-row sm:items-center">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 w-full pt-6 sm:pt-0 flex flex-col justify-between h-full sm:h-auto sm:block">
          <div className="max-w-xl animate-fade-up">
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-blue-300 mb-3 sm:mb-6">
              Fractional VP R&D &middot; CTO Advisory
            </span>
            <h1 className="text-[clamp(2rem,6vw,3.25rem)] text-white leading-[1.15] mb-4 sm:mb-6">
              Transform your R&D{' '}<br className="hidden sm:block" />
              into an <span className="text-blue-400">AI-driven</span>{' '}<br className="hidden sm:block" />
              growth engine
            </h1>
            <p className="text-slate-300 text-sm sm:text-lg leading-relaxed mb-0 sm:mb-8 max-w-md">
              Bridging the Gap Between AI Potential and Engineering Reality: Leading Large-Scale Transformations to AI-Driven Development
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pb-32 sm:pb-0 max-w-xl">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg font-semibold bg-accentBlue text-white hover:bg-accentBlueDark transition-colors cursor-pointer text-sm sm:text-base"
            >
              Book a Consultation
              <ArrowRight size={18} />
            </button>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg font-semibold text-white border border-white/25 hover:bg-white/10 transition-colors text-sm sm:text-base"
            >
              View Services
            </a>
          </div>
        </div>
      </div>

      {/* Trust metrics bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#0F172A]/90 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-3.5 sm:py-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-8">
            {[
              { value: '20+', label: 'Years Experience' },
              { value: '100+', label: 'Engineers Led' },
              { value: '€950M', label: 'Exit Value (Yad2)' },
              { value: '30%', label: 'Faster Time-to-Market' },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="text-base sm:text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-[0.65rem] sm:text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
