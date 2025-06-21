import '@hackclub/theme/fonts/reg-bold.css'
import Meta from '@hackclub/meta'
import { ThemeProvider, useColorMode } from 'theme-ui'
import theme from '../lib/theme'
import Script from 'next/script'
import Head from 'next/head'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Navbar from '../components/Navbar'
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  function Favicon() {
    const [colorMode] = useColorMode()
    const icon =
      colorMode === 'dark'
        ? '/assets/logo/blue_logo/Group_336.svg'
        : '/assets/logo/red_logo/hackclubbutwal.svg'
    return (
      <Head>
        <link rel="icon" href={icon} />
      </Head>
    )
  }
  return (
    <>
      <style jsx global>{`
        @font-face {
          font-family: 'Phantom Sans';
          src: url('https://assets.hackclub.com/fonts/Phantom_Sans_0.7/Regular.woff') format('woff'),
               url('https://assets.hackclub.com/fonts/Phantom_Sans_0.7/Regular.woff2') format('woff2');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'Phantom Sans';
          src: url('https://assets.hackclub.com/fonts/Phantom_Sans_0.7/Italic.woff') format('woff'),
               url('https://assets.hackclub.com/fonts/Phantom_Sans_0.7/Italic.woff2') format('woff2');
          font-weight: normal;
          font-style: italic;
          font-display: swap;
        }
        @font-face {
          font-family: 'Phantom Sans';
          src: url('https://assets.hackclub.com/fonts/Phantom_Sans_0.7/Bold.woff') format('woff'),
               url('https://assets.hackclub.com/fonts/Phantom_Sans_0.7/Bold.woff2') format('woff2');
          font-weight: bold;
          font-style: normal;
          font-display: swap;
        }
      `}</style>
      <Meta
        as={Head}
        name="HackClub Butwal"
        title="HackClub Butwal – Coming Soon"
        description="Official Hack Club in Butwal, Nepal. Join us for coding, making, and community!"
        color="#ec3750"
        image="/assets/logo/red_logo/hackclubbutwal.svg"
        url="https://butwal.hackclub.com"
        instagram="@HackClubButwal"
      />
      <Script
        src="/scripts/fathom.js"
        data-site="NXBJA2"
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />
      <ThemeProvider theme={theme}>
        <Favicon />
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
      <SpeedInsights />
    </>
  )
}
