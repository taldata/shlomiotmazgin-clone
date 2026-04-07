import { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import ContactModal from './ContactModal';
import useCountUp from '../hooks/useCountUp';

const stats = [
  { numeric: 20, prefix: '', suffix: '+', label: 'Years Experience' },
  { numeric: 100, prefix: '', suffix: '+', label: 'Engineers Led' },
  { numeric: 950, prefix: '€', suffix: 'M', label: 'Exit Value (Yad2)' },
  { numeric: 30, prefix: '', suffix: '%', label: 'Faster Time-to-Market' },
];

function StatCounter({ numeric, prefix, suffix, label, isActive, delay = 0 }) {
  const count = useCountUp(numeric, 1600, isActive);
  return (
    <div className="hero-reveal" style={{ '--anim-delay': `${delay}ms` }}>
      <div className="text-2xl font-bold text-white tabular-nums">
        {prefix}{isActive ? count : 0}{suffix}
      </div>
      <div className="text-sm text-slate-400">{label}</div>
    </div>
  );
}

function StatCounterMobile({ numeric, prefix, suffix, label, isActive, delay = 0 }) {
  const count = useCountUp(numeric, 1600, isActive);
  return (
    <div className="text-center hero-reveal" style={{ '--anim-delay': `${delay}ms` }}>
      <div className="text-base font-bold text-white tabular-nums">
        {prefix}{isActive ? count : 0}{suffix}
      </div>
      <div className="text-[0.65rem] text-slate-400">{label}</div>
    </div>
  );
}

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [countersActive, setCountersActive] = useState(false);

  // Fire counters after hero entrance animations settle
  useEffect(() => {
    const t = setTimeout(() => setCountersActive(true), 750);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="mt-[5.5rem] w-full overflow-hidden bg-[#1B2A4A]">

      {/* ── MOBILE layout ── */}
      <div className="sm:hidden relative">
        <img
          src="/hero-image-new.png"
          alt="Shlomi Otmazgin"
          className="w-full block h-[calc(100svh-5.5rem)] object-cover object-[70%_28%]"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent" />

        <div className="absolute left-0 right-0 px-5" style={{ bottom: '110px' }}>
          <h1
            className="text-[clamp(1.4rem,5.5vw,1.85rem)] text-white leading-[1.2] mb-3 hero-reveal"
            style={{ '--anim-delay': '100ms' }}
          >
            Transform your R&D into an <span className="text-blue-400">AI-driven</span> growth engine
          </h1>
          <div
            className="flex flex-row gap-2 hero-reveal"
            style={{ '--anim-delay': '250ms' }}
          >
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

        <div className="absolute bottom-0 left-0 right-0 bg-[#0F172A]/90 backdrop-blur-sm border-t border-white/10">
          <div className="px-5 py-2">
            <div className="grid grid-cols-2 gap-1.5">
              {stats.map((stat, i) => (
                <StatCounterMobile
                  key={stat.label}
                  {...stat}
                  isActive={countersActive}
                  delay={700 + i * 80}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── DESKTOP layout ── */}
      <div className="hidden sm:block relative">
        <img
          src="/hero-image-new.png"
          alt=""
          aria-hidden="true"
          className="w-full block h-auto object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B2A4A]/70 via-[#1B2A4A]/30 to-transparent flex flex-row items-center">
          <div className="max-w-[1200px] mx-auto px-8 w-full">
            <div className="max-w-xl">
              <span
                className="inline-block text-sm font-semibold tracking-widest uppercase text-blue-300 mb-6 hero-reveal"
                style={{ '--anim-delay': '0ms' }}
              >
                Fractional VP R&D &middot; CTO Advisory
              </span>
              <h1
                className="text-[clamp(2rem,6vw,3.25rem)] text-white leading-[1.15] mb-6 hero-reveal"
                style={{ '--anim-delay': '150ms' }}
              >
                Transform your R&D{' '}<br />
                into an <span className="text-blue-400">AI-driven</span>{' '}<br />
                growth engine
              </h1>
              <p
                className="text-slate-300 text-lg leading-relaxed mb-8 max-w-md hero-reveal"
                style={{ '--anim-delay': '280ms' }}
              >
                Bridging the Gap Between AI Potential and Engineering Reality: Leading Large-Scale Transformations to AI-Driven Development
              </p>
              <div
                className="flex flex-row gap-4 hero-reveal"
                style={{ '--anim-delay': '400ms' }}
              >
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold bg-accentBlue text-white hover:bg-accentBlueDark transition-colors cursor-pointer text-base overflow-hidden group"
                >
                  {/* Shimmer on hover */}
                  <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-[-20deg]" />
                  Book a Consultation
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-semibold text-white border border-white/25 hover:bg-white/10 transition-colors text-base"
                >
                  View Services
                </a>
              </div>

              {/* Scroll indicator */}
              <a
                href="#services"
                aria-label="Scroll to services"
                className="mt-10 inline-flex flex-col items-center gap-1.5 text-white/40 hover:text-white/70 transition-colors hero-reveal"
                style={{ '--anim-delay': '600ms' }}
              >
                <span className="text-[0.65rem] tracking-widest uppercase">Scroll</span>
                <ChevronDown size={16} className="scroll-bounce" />
              </a>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 bg-[#0F172A]/90 backdrop-blur-sm border-t border-white/10 hero-reveal"
          style={{ '--anim-delay': '550ms' }}
        >
          <div className="max-w-[1200px] mx-auto px-8 py-5">
            <div className="grid grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <StatCounter
                  key={stat.label}
                  {...stat}
                  isActive={countersActive}
                  delay={700 + i * 90}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
