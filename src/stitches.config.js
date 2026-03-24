import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  theme: {
    colors: {
      bgMain: '#ffffff',
      bgPanel: '#ffffff',
      border: 'rgba(0,0,0,0.08)',
      textPrimary: '#1a1a1a',
      textSecondary: '#4a4a4a',
      textMuted: '#71717a',
      accent: '#000000',
      accentHover: '#333333',
    },
    space: {
      1: '0.5rem',
      2: '1rem',
      3: '1.5rem',
      4: '2rem',
      5: '3rem',
      6: '4rem',
      7: '5rem',
      8: '6rem',
    },
    fonts: {
      sans: "'Montserrat', -apple-system, sans-serif",
      display: "'Outfit', 'Montserrat', sans-serif",
    },
    fontSizes: {
      1: '0.875rem',
      2: '1rem',
      3: '1.125rem',
      4: '1.25rem',
      5: '1.5rem',
      6: '2rem',
      7: '3rem',
      8: '4.5rem',
    },
    radii: {
      1: '4px',
      2: '8px',
      3: '12px',
      round: '50%',
      pill: '9999px',
    },
    shadows: {
      1: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
      2: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      nav: '0 1px 3px rgba(0,0,0,0.05)',
    },
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
  },
});

export const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
  'body': {
    backgroundColor: '$bgMain',
    color: '$textPrimary',
    fontFamily: '$sans',
    lineHeight: 1.6,
    WebkitFontSmoothing: 'antialiased',
    minHeight: '100vh',
    overflowX: 'hidden',
  },
  'h1, h2, h3, h4, h5, h6': {
    fontFamily: '$display',
    fontWeight: 700,
    lineHeight: 1.2,
    marginBottom: '$2',
  },
  'a': { textDecoration: 'none', color: 'inherit' },
});
