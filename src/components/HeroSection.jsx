import React from 'react';
import { styled, keyframes } from '../stitches.config';

const fadeUp = keyframes({
  '0%': { opacity: 0, transform: 'translateY(20px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const Section = styled('section', {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  backgroundImage: 'url(/hero-image.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center top',
  backgroundRepeat: 'no-repeat',
  marginTop: '5.5rem'
});

const Container = styled('div', {
  maxWidth: '1200px', margin: '0 auto', padding: '0 $4',
  width: '100%', display: 'flex', justifyContent: 'flex-end', paddingRight: '5%',
  '@media (max-width: 768px)': { justifyContent: 'center', paddingRight: '$4' }
});

const TitleWrapper = styled('div', {
  textAlign: 'center', maxWidth: '600px',
  animation: `${fadeUp} 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards`
});

const Title = styled('h1', {
  fontSize: 'clamp(3rem, 5vw, 4.5rem)',
  color: '$textPrimary',
  lineHeight: 1.3,
  letterSpacing: '2px',
  fontFamily: '$display',
  fontWeight: 800
});

export default function HeroSection() {
  return (
    <Section>
      <Container>
        <TitleWrapper>
          <Title>
            Transform your<br/>
            R&D 'Black Box'<br/>
            into a strategic<br/>
            ROI driver
          </Title>
        </TitleWrapper>
      </Container>
    </Section>
  );
}
