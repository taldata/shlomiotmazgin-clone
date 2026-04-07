import useFadeIn from '../hooks/useFadeIn';
import shlomiPortrait from '../assets/shlomi-portrait.jpg';

export default function AboutSection() {
  const [ref, visible] = useFadeIn(0.1);

  const experiences = [
    {
      company: 'Yad2 (CTO)',
      period: '2019 \u2013 2026',
      bullets: [
        'Building & Leading R&D: Established the department from the ground up, scaling it to a high-performing organization of 100+ engineers across Backend, Frontend, Mobile, DevOps, QA, CRM, and Cyber.',
        'AI Innovation: Pioneered the integration of AI-native workflows, deploying autonomous agents and Copilots to drive significant improvements in development quality and speed.',
        'Exit & Due Diligence: Played a pivotal role in the \u20AC950M acquisition by Apax Partners, leading all technical Due Diligence processes to ensure maximum valuation.',
      ],
    },
    {
      company: 'G Medical Innovations (VP R&D)',
      period: '2017 \u2013 2018',
      bullets: [
        'Led R&D for a MedTech startup, managing diverse teams across Embedded, Hardware, and Mobile to deliver regulated medical monitoring solutions.',
      ],
    },
    {
      company: 'Colmobil (R&D Director)',
      period: '2014 \u2013 2017',
      bullets: [
        "Directed the R&D division for Israel's largest vehicle importer, modernizing core systems and digitalizing enterprise-scale operations.",
      ],
    },
    {
      company: 'Umoove (VP R&D)',
      period: '2012 \u2013 2014',
      bullets: [
        'Managed high-innovation R&D groups in the Computer Vision and Motion-Tracking space within a fast-paced hardware-software integration environment.',
      ],
    },
    {
      company: 'Matrix (R&D Group Manager)',
      period: '2008 \u2013 2012',
      bullets: [
        "Led large-scale Outsourcing operations for Israel's largest tech services firm, establishing and managing offshore development groups in Eastern Europe.",
      ],
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-28 bg-bgMain">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-8 section-fade ${visible ? 'visible' : ''}`}
      >
        {/* Intro with Image */}
        <div className="mb-14 sm:mb-20">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accentBlue mb-3">Background</span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] mb-8">
            What makes me <span className="text-gradient">different?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Text */}
            <div className="flex flex-col gap-7 fade-up-child" style={{ '--anim-delay': '100ms' }}>
              <p className="text-lg text-textSecondary leading-relaxed">
                With over 20 years leading R&D organizations — from early-stage startups to global enterprises — I've operated at every level of the engineering stack. I specialize in <strong className="text-textPrimary font-semibold">guiding organizations through critical junctions</strong>: scaling teams, preparing for acquisitions, and unlocking the full potential of engineering departments.
              </p>

              <div className="w-10 h-0.5 bg-accentBlue rounded-full" />

              <div className="border-l-2 border-accentBlue pl-5">
                <span className="block text-xs font-bold tracking-widest uppercase text-accentBlue mb-2">AI-Driven R&D Transformation</span>
                <p className="text-textSecondary leading-relaxed">
                  My core expertise is transitioning traditional software departments into AI-native organizations. I re-engineer the entire SDLC — integrating LLMs, agentic workflows, and toolchains like Cursor and Claude Code into the R&D DNA. The result: teams that ship faster, think bigger, and operate with significantly less overhead.
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3 rounded-lg font-semibold bg-transparent border-2 border-accentBlue text-accentBlue hover:bg-accentBlue hover:text-white transition-colors cursor-pointer w-fit"
              >
                Connect with me
              </a>
            </div>

            {/* Image */}
            <div className="relative w-full max-w-sm mx-auto md:mx-0 fade-up-child" style={{ '--anim-delay': '220ms' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-accentBlue/20 to-accentBlue/5 rounded-3xl blur-2xl" />
              <img
                src={shlomiPortrait}
                alt="Shlomi Otmazgin"
                className="relative w-full rounded-3xl shadow-xl object-cover aspect-[3/4]"
              />
            </div>
          </div>
        </div>

        {/* Experience timeline */}
        <div>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accentBlue mb-6">Professional Experience</span>
          <div className="flex flex-col gap-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="border-l-2 border-accentBlue/20 pl-6 sm:pl-8 relative fade-up-child"
                style={{ '--anim-delay': `${index * 100}ms` }}
              >
                <div
                  className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-accentBlue"
                  style={{ boxShadow: '0 0 0 4px rgba(37, 99, 235, 0.15)' }}
                />
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-3">
                  <h3 className="text-lg sm:text-xl m-0">{exp.company}</h3>
                  <span className="text-sm text-accentBlue font-semibold">{exp.period}</span>
                </div>
                <ul className="flex flex-col gap-2 m-0 p-0 list-none">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-textSecondary leading-relaxed text-[0.95rem]">
                      <span className="w-1.5 h-1.5 rounded-full bg-accentBlue/40 mt-2 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
