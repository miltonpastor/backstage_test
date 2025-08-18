

import MyCustomFont from '../assets/fonts/aguafina-script-v23-latin-regular.woff2';

import {
  createUnifiedTheme,
  palettes,
} from '@backstage/theme';


const myCustomFont = {
  fontFamily: 'My-Custom-Font',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 300,
  src: `
    local('My-Custom-Font'),
    url(${MyCustomFont}) format('woff2'),
  `,
};

export const myTheme = createUnifiedTheme({
  fontFamily: 'Roboto, Arial, sans-serif', // Fuente base para todo
  palette: {
    ...palettes.light,
    primary: {
      main: '#6C63FF',
      contrastText: '#fff',
    },
    secondary: {
      main: '#FF6584',
      contrastText: '#fff',
    },
    background: {
      default: '#F4F6FA',
      paper: '#fff',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': [myCustomFont],
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontFamily: 'My-Custom-Font, cursive',
          fontWeight: 400,
          fontSize: '3rem',
          color: '#6C63FF',
          letterSpacing: '2px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          textTransform: 'none',
          fontWeight: 600,
          boxShadow: '0 2px 8px rgba(108,99,255,0.15)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
        },
      },
    },
  },
});