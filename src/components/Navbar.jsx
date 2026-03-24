import React from 'react';
import { Linkedin } from 'react-feather';
import { styled } from '../stitches.config';

const Nav = styled('nav', {
  backgroundColor: '$bgMain',
  position: 'fixed',
  top: 0,
  width: '100%',
  zIndex: 50,
  borderBottom: '1px solid $border'
});

const Container = styled('div', {
  maxWidth: '1200px', margin: '0 auto', padding: '0 $4',
  display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '5.5rem'
});

const LogoGroup = styled('div', {
  display: 'flex', alignItems: 'center', gap: '$3'
});

const LogoMark = styled('div', {
  width: '45px', height: '45px', borderRadius: '$round', border: '2px solid $accent',
  display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', 
  fontFamily: 'serif', fontSize: '$4', fontStyle: 'italic', letterSpacing: '-1px'
});

const LogoText = styled('a', {
  fontSize: '$4', fontWeight: 800, color: '$textPrimary', letterSpacing: '4px', lineHeight: 1.3
});

const NavLinks = styled('div', {
  display: 'flex', gap: '$4', alignItems: 'center',
  '@media (max-width: 768px)': { display: 'none' }
});

const NavLink = styled('a', {
  color: '$textSecondary', fontWeight: 500, fontSize: '$1',
  transition: 'color 0.2s',
  '&:hover': { color: '$textPrimary' }
});

export default function Navbar() {
  return (
    <Nav>
      <Container>
        <LogoGroup>
          <LogoMark>SO</LogoMark>
          <LogoText href="/">SHLOMI<br/>OTMAZGIN</LogoText>
        </LogoGroup>
        <NavLinks>
          <NavLink href="/">Home</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#faq">FAQ</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <NavLink href="https://linkedin.com" target="_blank" rel="noreferrer" css={{ color: '$accent' }}>
             <Linkedin size={20} />
          </NavLink>
        </NavLinks>
      </Container>
    </Nav>
  );
}
