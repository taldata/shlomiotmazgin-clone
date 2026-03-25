import { useState } from 'react';
import { X } from 'react-feather';
import {
  BrainCircuit, UserCog, BarChart3,
  Scale, GraduationCap, Code2,
  ArrowRight
} from 'lucide-react';
import useFadeIn from '../hooks/useFadeIn';

const services = [
  {
    icon: <BrainCircuit size={28} strokeWidth={1.5} />,
    title: 'AI-Native Evolution',
    subtitle: 'Adopt AI and embed it into your R&D DNA with a targeted 30% reduction in Time-to-Market.',
    bullets: [
      { bold: 'AI-Driven Workflow Automation:', text: 'Moving beyond simple chat tools to deploying AI agents that handle development and testing tasks autonomously.' },
      { bold: 'AI-Enhanced Cognitive Offloading:', text: 'Leveraging AI to clear managerial noise, allowing your developers to focus on solving complex architectural problems.' },
      { bold: 'AI-Powered Quality Guardrails:', text: 'Building AI-based monitors that scan and fix code in real-time, ensuring speed never compromises security or quality.' },
    ],
    expandedSubtitle: 'Re-engineering the Software Development Life Cycle (SDLC) into a high-velocity, machine-augmented ecosystem.',
    expandedBullets: [
      { bold: 'AI-Driven Workflow Automation:', text: 'We build "Hybrid Teams" where AI agents are integrated into your pipeline. They don\'t just suggest code; they execute end-to-end tasks like writing unit tests, updating technical documentation, and performing initial PR reviews.' },
      { bold: 'AI-Enhanced Cognitive Offloading:', text: 'We enable your developers to return to high-level engineering. By using AI as an active "Knowledge Manager," we remove the mental strain of searching through legacy codebases and maintaining tedious infrastructure.' },
      { bold: 'AI-Powered Quality Guardrails:', text: 'Implementation of intelligent AI monitoring systems that scan every line of machine-generated code. We ensure the AI adheres to your unique architectural standards and strict security protocols.' },
      { bold: 'Synthetic Debt Management:', text: 'Fast-paced AI development can lead to less efficient code accumulation. Our process includes proactive monitoring and refactoring of AI-generated output to ensure your system remains modular and maintainable for years to come.' },
      { bold: 'Upskilling for the New Era:', text: 'We mentor your development teams on how to transition from "coders" to "architects." We implement a methodology where human logic drives the engine, while the machine handles the syntactical execution.' },
      { bold: 'Living Knowledge Base:', text: 'Utilizing AI to turn your codebase and internal documents into an accessible, real-time knowledge source. This ensures lightning-fast onboarding and seamless architectural changes without losing critical institutional knowledge.' },
    ],
  },
  {
    icon: <UserCog size={28} strokeWidth={1.5} />,
    title: 'Fractional AI VP R&D',
    subtitle: 'Strategic oversight for CEOs to align engineering output with business ROI goals.',
    bullets: [
      { bold: 'LLM-Informed Engineering Transparency:', text: 'Converting the R&D "Black Box" into a data-driven dashboard that predicts delivery risks.' },
      { bold: 'AI-Native Roadmap Alignment:', text: 'Synchronizing product goals with high-impact AI capabilities to maintain a defensible competitive moat.' },
      { bold: 'Agentic Operational Strategy:', text: 'Implementing a leadership framework designed to manage Hybrid Teams of human engineers and AI agents.' },
    ],
    expandedSubtitle: 'Empowering CEOs with AI-driven engineering governance to maximize capital efficiency and strategic impact.',
    expandedBullets: [
      { bold: 'LLM-Informed Engineering Transparency:', text: 'We implement advanced analytics that go beyond basic git metrics. By using Large Language Models to analyze development patterns, we provide CEOs with radical transparency into cycle times and delivery predictability, identifying bottlenecks before they impact the bottom line.' },
      { bold: 'AI-Native Roadmap Alignment:', text: 'We ensure your technology stack isn\'t just "using AI" but is fundamentally optimized for it. We help you build a Defensible Tech Stack by integrating foundational models directly into your product\'s core value proposition.' },
      { bold: 'Agentic Operational Strategy:', text: 'We design the organizational structure for the future. This involves shifting from linear headcount growth to an Agent-First execution model, where AI agents handle routine operational tasks, significantly lowering your OpEx.' },
      { bold: 'AI-Augmented Resource Management:', text: 'We optimize human capital by identifying high-value engineering tasks. Our framework uses AI to map technical complexity, ensuring your most expensive talent is always focused on the most critical business logic.' },
      { bold: 'Model-Agnostic Governance:', text: 'To prevent vendor lock-in, we establish a governance layer that allows your R&D to remain Model-Agnostic. This ensures your company can pivot to the most cost-effective and powerful AI models as the market evolves.' },
      { bold: 'AI Risk & Compliance Guardrails:', text: 'We manage the complex intersection of Generative AI and IP security. We implement the necessary technical frameworks to ensure that your use of AI maintains strict data privacy and regulatory compliance.' },
    ],
  },
  {
    icon: <BarChart3 size={28} strokeWidth={1.5} />,
    title: 'AI-Ready Engineering Metrics',
    subtitle: 'Transitioning from legacy Story Points to high-impact, AI-adjusted performance metrics.',
    bullets: [
      { bold: 'Outcome-Based Measurement:', text: 'Moving away from "effort" metrics to tracking Value-per-Prompt and strategic impact.' },
      { bold: 'Intelligent Velocity Benchmarking:', text: 'Utilizing LLM-informed data to analyze the real-world efficiency of your AI-augmented cycles.' },
      { bold: 'Modern Intelligence Tooling:', text: 'Implementing specialized R&D analytics tools designed to track machine-human synergy and delivery health.' },
    ],
    expandedSubtitle: 'Replacing traditional "effort" tracking with data-driven AI governance and specialized Engineering Intelligence (EI) frameworks.',
    expandedBullets: [
      { bold: 'Outcome-Based Measurement:', text: 'In an AI-native world, "effort" is cheap. We help you transition to metrics that prioritize Business Value and Innovation. Instead of counting Jira tickets, we track the speed of "Intent-to-Production," measuring how effectively your team directs AI to solve core problems.' },
      { bold: 'Intelligent Velocity Benchmarking:', text: 'We use Large Language Models to audit your delivery patterns. This provides a qualitative layer of data that standard dashboards miss — identifying not just how much was shipped, but the architectural quality and long-term viability of the AI-generated code.' },
      { bold: 'Modern Intelligence Tooling:', text: 'We guide you through the new landscape of Engineering Intelligence (EI) platforms. From tools like LinearB and DX to custom AI-driven dashboards, we install the "instrumentation" needed to measure R&D health in real-time.' },
      { bold: 'AI-Adjusted Capacity Planning:', text: 'Traditional capacity planning fails when AI can spike output unpredictably. We implement predictive heuristics that help you plan roadmaps based on "Human + AI" throughput, ensuring your deadlines remain realistic.' },
      { bold: 'Synthetic Debt Monitoring:', text: 'We track the long-term cost of machine-generated code. By measuring "Code Churn" and "Refactor Rates" of AI output, we ensure that today\'s high velocity doesn\'t lead to a massive maintenance burden tomorrow.' },
      { bold: 'Developer Experience (DevEx) Analytics:', text: 'We measure the "Friction" in your environment. Our service identifies where AI tools are causing new bottlenecks (e.g., massive PRs that clog the review process) and optimizes the Flow State of your engineering teams.' },
    ],
  },
  {
    icon: <Scale size={28} strokeWidth={1.5} />,
    title: 'M&A Readiness & Due Diligence',
    subtitle: 'Clarity before an exit or funding round based on real-world exit experience.',
    bullets: [
      { bold: 'Infrastructure & Scalability Risks:', text: 'Evaluating technical debt and architectural readiness for a high-value exit.' },
      { bold: 'Engineering Maturity & Quality:', text: 'Auditing workflow standards to ensure the R&D organization meets institutional requirements.' },
      { bold: 'AI-Asset Integrity & IP:', text: 'Assessing the legal and technical health of AI-generated code and LLM-integrated workflows.' },
    ],
    expandedSubtitle: 'Protecting company valuation by ensuring technical excellence and modern AI-governance before the audit begins.',
    expandedBullets: [
      { bold: 'Infrastructure & Scalability Risks:', text: 'We perform a deep-dive into your core architecture to identify bottlenecks that could lower valuation during due diligence. We ensure your system is ready for the "Next Phase" of growth.' },
      { bold: 'Engineering Maturity & Quality:', text: 'We audit your SDLC and workflow standards to ensure they meet the rigorous expectations of top-tier acquirers. We focus on clean code, solid documentation, and repeatable processes.' },
      { bold: 'AI-Asset Integrity & IP:', text: 'We audit the LLM-usage policies and machine-generated components within your codebase. We ensure that your use of AI complies with licensing and doesn\'t create "IP pollution" that could derail a deal.' },
      { bold: 'Synthetic Debt Analysis:', text: 'We identify the "hidden cost" of rapid development. By measuring the health of your AI-augmented output, we ensure that today\'s speed hasn\'t created a massive maintenance burden for the buyer.' },
      { bold: 'Investment Readiness for Acquisitions:', text: 'We prepare your technical leadership for the "hard questions." We help build the Technical Evidence needed to prove that your technology is a defensible, modern asset.' },
      { bold: 'Security & Compliance Guardrails:', text: 'We verify that your data privacy and security frameworks are robust, especially regarding how the organization handles sensitive data within AI-driven tools.' },
    ],
  },
  {
    icon: <GraduationCap size={28} strokeWidth={1.5} />,
    title: 'Executive Mentoring',
    subtitle: 'For Technical leaders leveling up their strategic impact in an AI-driven world.',
    bullets: [
      { bold: 'Transition from Management to Strategy:', text: 'Moving from daily oversight to High-Level Orchestration of human and machine resources.' },
      { bold: 'AI-Augmented Decision Making:', text: 'Coaching leaders on how to use predictive AI insights to make faster, data-backed commercial decisions.' },
      { bold: 'Leading Hybrid Teams:', text: 'Developing the skills to manage a unified workforce of engineers and autonomous AI agents.' },
    ],
    expandedSubtitle: 'Empowering VPs and CTOs to lead with confidence in a rapidly evolving, machine-augmented landscape.',
    expandedBullets: [
      { bold: 'Transition from Management to Strategy:', text: 'We help you step out of the "firefighting" mode and into a strategic role. You\'ll learn how to focus on long-term R&D architecture while leaving the tactical execution to an AI-optimized department.' },
      { bold: 'AI-Augmented Decision Making:', text: 'Modern leadership requires a new set of "eyes." We coach you on how to leverage Large Language Models and data analytics to forecast delivery risks, budget shifts, and market opportunities.' },
      { bold: 'Leading Hybrid Teams:', text: 'We provide a framework for managing a "Mixed Workforce." You\'ll learn how to set expectations for AI-agent output while keeping your human developers engaged in high-value, creative engineering.' },
      { bold: 'First-time Founder Support:', text: 'For technical founders, we bridge the gap between "coding the product" and "building the organization." We focus on Commercial Alignment, ensuring your tech choices drive business growth.' },
      { bold: 'Cultivating an AI-Native Culture:', text: 'We teach you how to lead the cultural shift required for AI adoption. This includes managing developer anxieties, upskilling your team, and fostering a "Prompt-First" mindset.' },
      { bold: 'Ethical & Strategic Governance:', text: 'As a leader, you are the guardian of the company\'s tech. We mentor you on the ethical implications and security risks of AI, ensuring your leadership protects the company\'s long-term reputation and IP.' },
    ],
  },
  {
    icon: <Code2 size={28} strokeWidth={1.5} />,
    title: 'Software Development Services',
    subtitle: 'Leveraging Cursor, Claude Code, and Agentic CLI tools to build and ship high-quality software projects.',
    bullets: [
      { bold: 'Next-Gen IDE Workflow:', text: 'Utilizing Cursor and Claude Code to move from intent to implementation with extreme precision.' },
      { bold: 'Agentic Terminal Execution:', text: 'Deploying AI-driven CLI tools like Aider and Copilot to automate complex refactoring and testing.' },
      { bold: 'LLM-Augmented Architecture:', text: 'Building software that isn\'t just "coded" but is architected with LLM-insights for maximum efficiency.' },
    ],
    expandedSubtitle: 'Bypassing traditional development bottlenecks by mastering the modern AI-augmented SDLC.',
    expandedBullets: [
      { bold: 'Next-Gen IDE Workflow:', text: 'Our developers master Cursor, the world\'s leading AI-native IDE. By leveraging features like "Composer" and "Tab-complete-on-steroids," we reduce the time spent on syntax and boilerplate, focusing 100% on your business logic.' },
      { bold: 'Agentic Terminal Execution:', text: 'We go beyond the editor. Using Claude Code and Aider, we run autonomous AI sessions directly in the terminal to handle massive refactoring tasks, dependency updates, and multi-file logic changes in seconds.' },
      { bold: 'LLM-Augmented Architecture:', text: 'We use Large Language Models (LLMs) as real-time architectural consultants. This allows us to validate design patterns, explore edge cases, and ensure the tech stack is optimized before a single line of production code is written.' },
      { bold: 'AI-Driven Testing & QA:', text: 'We utilize tools like CodiumAI and DeepUnit to generate comprehensive test suites automatically. This ensures that our high velocity never comes at the cost of stability or regression risks.' },
      { bold: 'Autonomous PR & Documentation:', text: 'We integrate AI agents into the Git workflow to generate high-quality PR descriptions and technical documentation in real-time, keeping the project transparent and maintainable for your team.' },
      { bold: 'Rapid Prototyping with v0 & Bolt:', text: 'For frontend and full-stack MVPs, we use generative engines to build functional UI components instantly, allowing us to iterate on the user experience at a pace traditional development can\'t match.' },
    ],
  },
];

function ServiceModal({ service, onClose }) {
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={service.title}
    >
      <div className="absolute inset-0 bg-[#0F172A]/50 backdrop-blur-sm animate-[fadeIn_0.2s_ease]" />

      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto animate-[modalSlideUp_0.35s_cubic-bezier(0.16,1,0.3,1)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white border-b border-border px-6 sm:px-8 py-5 flex items-center gap-4 rounded-t-2xl">
          <div className="p-3 bg-accentBlueLight rounded-xl text-accentBlue flex-shrink-0">
            {service.icon}
          </div>
          <div className="min-w-0">
            <h3 className="text-xl sm:text-2xl font-bold m-0">{service.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="ml-auto p-2 rounded-full hover:bg-slate-100 transition-colors text-textSecondary hover:text-textPrimary cursor-pointer flex-shrink-0"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 sm:px-8 py-6 sm:py-8">
          <p className="text-textSecondary leading-relaxed mb-8 text-[0.95rem]">
            {service.expandedSubtitle}
          </p>

          <div className="flex flex-col gap-5">
            {service.expandedBullets.map((bullet, i) => (
              <div key={i} className="flex items-start gap-3.5">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accentBlueLight text-accentBlue text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <p className="text-[0.95rem] text-textSecondary leading-relaxed m-0">
                  <strong className="text-textPrimary">{bullet.bold}</strong>{' '}
                  {bullet.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [ref, visible] = useFadeIn(0.1);
  const [expandedService, setExpandedService] = useState(null);

  return (
    <section id="services" className="py-16 sm:py-28 relative bg-bgPanel">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-8 relative z-10 section-fade ${visible ? 'visible' : ''}`}
      >
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accentBlue mb-3">What I Do</span>
          <h2 className="text-[clamp(2rem,4vw,3rem)]">Core Services</h2>
          <p className="text-textSecondary max-w-2xl mx-auto mt-2 leading-relaxed">
            Strategic technology leadership across the full spectrum — from AI adoption to M&A due diligence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-panel p-6 sm:p-8 flex flex-col group"
            >
              <div className="p-3.5 bg-accentBlueLight w-fit rounded-xl text-accentBlue group-hover:bg-accentBlue group-hover:text-white transition-colors duration-300 mb-5">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl mb-2">{service.title}</h3>
              <p className="text-textSecondary leading-relaxed mb-4">{service.subtitle}</p>

              <ul className="flex flex-col gap-3 text-textSecondary text-sm mb-6">
                {service.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accentBlue mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-textPrimary">{bullet.bold}</strong>{' '}
                      {bullet.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setExpandedService(service)}
                className="mt-auto inline-flex items-center gap-2 text-accentBlue font-semibold text-sm hover:gap-3 transition-all cursor-pointer bg-transparent border-none p-0"
              >
                Learn more
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <ServiceModal
        service={expandedService}
        onClose={() => setExpandedService(null)}
      />
    </section>
  );
}
