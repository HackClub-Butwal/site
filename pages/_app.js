import '@hackclub/theme/fonts/reg-bold.css'
import Meta from '@hackclub/meta'
import { ThemeProvider } from 'theme-ui'
import theme from '../lib/theme'
import Script from 'next/script'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/assets/logo/red_logo/hackclubbutwal.svg" />
      </Head>
      <Meta
        name="HackClub Butwal"
        title="HackClub Butwal – Coming Soon"
        description="Official Hack Club in Butwal, Nepal. Join us for coding, making, and community!"
        color="#ec3750"
        image="/assets/logo/red_logo/hackclubbutwal.svg"
        url="https://butwal.hackclub.com"
        instagram="@HackClubButwal"
      />
      <Script
        src="https://cdn.usefathom.com/script.js"
        data-site="NXBJA2"
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
