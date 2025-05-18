import base from '@hackclub/theme'

const theme = {
  ...base,
  colors: {
    ...base.colors,
    primary: '#D22F27', // Hack Club Butwal red
    secondary: '#FFFFFF', // White
    tertiary: '#1E50A0', // Blue
    accent: '#1E50A0', // Blue accent
    modes: {
      dark: {
        ...base.colors.modes.dark,
        primary: '#D22F27',
        secondary: '#FFFFFF',
        tertiary: '#1E50A0',
        accent: '#1E50A0'
      }
    }
  },
  fonts: {
    ...base.fonts,
    heading: '"Phantom Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    body: '"Phantom Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  }
}

export default theme
