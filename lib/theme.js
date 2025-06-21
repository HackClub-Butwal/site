import baseTheme from '@hackclub/theme'

const theme = {
  ...baseTheme,
  initialColorModeName: 'default',
  colors: {
    ...baseTheme.colors,
    text: '#1A202C',
    background: '#FFFFFF',
    primary: '#1E50A0',
    secondary: '#D22F27',
    accent: '#E75B25',
    highlight: '#F3B297',
    muted: '#F3B297',
    modes: {
      dark: {
        text: '#fff', // white text
        background: '#23272f', // dark gray, not pure black
        primary: '#3182CE',
        secondary: '#E53E3E',
        accent: '#ED8936',
        highlight: '#F6AD55',
        muted: '#2d323b' // slightly lighter gray for muted backgrounds
      }
    }
  },
  styles: {
    ...baseTheme.styles,
    root: {
      ...baseTheme.styles.root,
      transition: 'all 0.3s ease-in-out'
    }
  }
}

export default theme
