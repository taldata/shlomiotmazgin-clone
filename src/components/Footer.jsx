import React from 'react';
import { Linkedin, Mail } from 'react-feather';
import { styled } from '../stitches.config';

const FooterWrap = styled('footer', {
  borderTop: '1px solid $border', padding: '$6 0', background: '$bgPanel'
});

const Container = styled('div', {
  maxWidth: '1200px', margin: '0 auto', padding: '0 $4',
  display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '$4'
});

const Title = styled('h2', {
  fontSize: '$6'
});

const Subtitle = styled('p', {
  color: '$textSecondary', maxWidth: '500px'
});

const Actions = styled('div', {
  display: 'flex', gap: '$3'
});

const ContactBtn = styled('a', {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  padding: '0.75rem 2rem', borderRadius: '$1', fontWeight: 600,
  background: '$textPrimary', color: 'white',
  transition: 'transform 0.2s',
  '&:hover': { transform: 'translateY(-2px)' }
});

const SocialBtn = styled('a', {
  display: 'inline-flex', padding: '0.75rem', borderRadius: '$round', color: '$textPrimary',
  background: '$bgMain', boxShadow: '$1', border: '1px solid $border',
  transition: 'transform 0.2s, box-shadow 0.2s',
  '&:hover': { transform: 'translateY(-2px)', boxShadow: '$2' }
});

const Copyright = styled('div', {
  marginTop: '$4', paddingTop: '$4', borderTop: '1px solid $border', width: '100%', color: '$textMuted', fontSize: '$1'
});

export default function Footer() {
  return (
    <FooterWrap id="contact">
      <Container>
        <Title>Ready to transform your R&D?</Title>
        <Subtitle>
          Let's talk about how we can align your engineering teams with your commercial goals for maximum ROI.
        </Subtitle>
        
        <Actions>
          <ContactBtn href="mailto:contact@shlomiotmazgin.com">
            <Mail size={18} style={{ marginRight: '0.5rem' }} /> Contact Me
          </ContactBtn>
          <SocialBtn href="https://linkedin.com" target="_blank" rel="noreferrer">
            <Linkedin size={24} />
          </SocialBtn>
        </Actions>
        
        <Copyright>
          &copy; {new Date().getFullYear()} Shlomi Otmazgin. All rights reserved.
        </Copyright>
      </Container>
    </FooterWrap>
  );
}
