import useFadeIn from '../hooks/useFadeIn';

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8">
            {/* Text */}
            <div>
              <p className="text-lg text-textSecondary leading-relaxed mb-6">
                From scaling <span className="text-accentBlue font-bold">high-growth startups</span> to advising <span className="text-accentBlue font-bold">global enterprises</span>, my experience spans the entire business spectrum. I specialize in guiding organizations through <span className="text-accentBlue font-bold text-xl">critical junctions</span>, such as comprehensive <span className="text-accentBlue font-bold">Due Diligence preparation</span> for acquisitions, while maintaining a cross-functional focus on <span className="text-accentBlue font-bold text-lg">process optimization</span> and <span className="text-accentBlue font-bold">unlocking the full potential</span> of engineering teams.
              </p>
            </div>

            {/* Image */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-accentBlue/20 to-accentBlue/5 rounded-3xl blur-2xl" />
                <img
                  src="/src/assets/shlomi-portrait.jpg"
                  alt="Shlomi Otmazgin"
                  className="relative w-full rounded-3xl shadow-xl object-cover aspect-[3/4]"
                />
              </div>
            </div>
          </div>

          <div className="glass-panel p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl mb-3">AI-Driven R&D Transformation</h3>
            <p className="text-textSecondary leading-relaxed m-0">
              My core expertise lies in spearheading the transition of traditional software departments into <strong className="text-accentBlue">AI-Native development powerhouses</strong>. I don't just implement tools; I <strong className="text-accentBlue">re-engineer the entire SDLC</strong> — integrating <strong className="text-accentBlue">LLMs, agentic workflows</strong>, and specialized AI toolchains like <strong className="text-accentBlue">Cursor and Claude Code</strong> into the R&D DNA. By shifting teams from <strong className="text-accentBlue">manual coding to high-level orchestration</strong>, I help organizations achieve <strong className="text-accentBlue">radical gains in velocity, quality, and capital efficiency</strong>.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-7 py-3 mt-8 rounded-lg font-semibold bg-transparent border-2 border-accentBlue text-accentBlue hover:bg-accentBlue hover:text-white transition-colors cursor-pointer"
          >
            Connect with me
          </a>
        </div>

        {/* Experience timeline */}
        <div>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accentBlue mb-6">Professional Experience</span>
          <div className="flex flex-col gap-8">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-2 border-accentBlue/20 pl-6 sm:pl-8 relative">
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
