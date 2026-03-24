import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';
import { styled } from '../stitches.config';

const Section = styled('section', {
  padding: '$7 0'
});

const Container = styled('div', {
  maxWidth: '800px', margin: '0 auto', padding: '0 $4'
});

const Title = styled('h2', {
  fontSize: 'clamp(2rem, 4vw, 3rem)', textAlign: 'center', marginBottom: '$6'
});

const FaqList = styled('div', {
  display: 'flex', flexDirection: 'column', gap: '$3'
});

const FaqItem = styled('div', {
  background: '$bgPanel', boxShadow: '$1', border: '1px solid $border', borderRadius: '$3',
  overflow: 'hidden', cursor: 'pointer', transition: 'box-shadow 0.3s',
  '&:hover': { boxShadow: '$2' }
});

const FaqHeader = styled('div', {
  padding: '$4', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
});

const FaqQuestion = styled('h3', {
  fontSize: '$3', margin: 0
});

const FaqAnswer = styled('div', {
  padding: '0 $4 $4 $4', color: '$textSecondary'
});

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How do I know if we're a good fit?",
      a: "I partner with leaders who look to challenge the status quo and value radical candor. My approach is built on honest, high-level strategic discussions and driving tangible results. If you are looking for a consultant to simply \"tick boxes\" or validate existing biases, I am likely not the right partner for you."
    },
    {
      q: "Who is your typical client?",
      a: "I work with CEOs, CTOs, and Boards of global enterprises, mid-market companies, and high-growth startups. My clients are typically at a critical junction—whether facing a massive scale-up, an acquisition, or a need for deep cultural and structural change."
    },
    {
      q: "What kind of engagements do you lead?",
      a: "My work centers on strategic technology leadership. This includes leading IT & Digital Transformations, overseeing Technical Due Diligence, and restructuring R&D departments into high-performing organizations. I also provide Fractional CTO services and executive mentoring for technology leaders."
    },
    {
      q: "How do you approach a new organization?",
      a: "I begin with a diagnostic phase: deep-dive sessions to identify underlying architectural, human, and business bottlenecks. I don't believe in \"one-size-fits-all\" frameworks. We collaborate to define a bespoke roadmap, and then I stay to ensure the execution of real change, not just a slide deck."
    },
    {
      q: "Technology is your background, but is your expertise broader?",
      a: "Yes. While I bring deep technical DNA, my focus is Business Transformation. True success is never just a \"tech problem\"—it’s a synergy of leadership development, operational efficiency, and cultural alignment. I bridge the gap between complex engineering and business goals."
    },
    {
      q: "What is the typical duration of an engagement?",
      a: "It is strictly impact-driven. Some clients require a sprint-based project (e.g., preparing for an exit), while others retain me as a Fractional Leader or long-term advisor. My objective is to build internal capabilities and sustainable systems, ensuring I create lasting impact without creating dependency."
    },
    {
      q: "Do you operate solo or with a team?",
      a: "I operate as a senior advisor, but I leverage an extensive global network of specialists (DevOps, Cyber, Data Science) to scale support when a project demands it. I am equally effective working with your in-house talent or helping you recruit and build a new team from the ground up."
    },
    {
      q: "How do we initiate the process?",
      a: "We start with a discreet, high-level consultation. No sales pitch—just a professional assessment of your current challenges and an honest evaluation of whether my expertise aligns with your strategic objectives."
    }
  ];

  return (
    <Section id="faq">
      <Container>
        <Title>Frequently Asked Questions</Title>
        <FaqList>
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;
            return (
              <FaqItem key={index} onClick={() => setOpenIndex(isOpen ? -1 : index)}>
                <FaqHeader>
                  <FaqQuestion>{faq.q}</FaqQuestion>
                  {isOpen ? <ChevronUp size={20} color="#000" /> : <ChevronDown size={20} color="#71717a" />}
                </FaqHeader>
                {isOpen && <FaqAnswer>{faq.a}</FaqAnswer>}
              </FaqItem>
            )
          })}
        </FaqList>
      </Container>
    </Section>
  );
}
