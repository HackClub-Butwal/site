import "@hackclub/theme/fonts/reg-bold.css";
import Meta from "@hackclub/meta";
import { ThemeProvider, useColorMode, Container } from "theme-ui";
import theme from "../lib/theme";
import Script from "next/script";
import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next";
import BinNav from "../components/bin/nav";
import Footer from "../components/bin/Footer";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  function Favicon() {
    const [colorMode] = useColorMode();
    // Use blue logo for dark mode, red logo for light mode
    const icon =
      colorMode === "dark"
        ? "/assets/logo/blogo.svg"
        : "/assets/logo/rlogo.svg";
    return (
      <Head>
        <link rel="icon" href={icon} />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/assets/favicon/site.webmanifest" />
      </Head>
    );
  }
  return (
    <>
      <style jsx global>{`
        html,
        body {
          overflow-x: hidden !important;
          width: 100vw;
        }
        @font-face {
          font-family: "Phantom Sans";
          src:
            url("https://assets.hackclub.com/fonts/Phantom_Sans_0.7/Regular.woff")
              format("woff"),
            url("https://assets.hackclub.com/fonts/Phantom_Sans_0.7/Regular.woff2")
              format("woff2");
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: "Phantom Sans";
          src:
            url("https://assets.hackclub.com/fonts/Phantom_Sans_0.7/Italic.woff")
              format("woff"),
            url("https://assets.hackclub.com/fonts/Phantom_Sans_0.7/Italic.woff2")
              format("woff2");
          font-weight: normal;
          font-style: italic;
          font-display: swap;
        }
        @font-face {
          font-family: "Phantom Sans";
          src:
            url("https://assets.hackclub.com/fonts/Phantom_Sans_0.7/Bold.woff")
              format("woff"),
            url("https://assets.hackclub.com/fonts/Phantom_Sans_0.7/Bold.woff2")
              format("woff2");
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
        color={theme.colors.primary}
        image="/assets/logo/red_logo/hackclubbutwal.svg"
        url="https://butwal.hackclub.com"
        instagram="@HCButwal"
      />
      <Script
        src="/scripts/fathom.js"
        data-site="NXBJA2"
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />
      <ThemeProvider theme={theme}>
        <Favicon />
        <BinNav />
        <Container sx={{ py: 4 }}>
          <Component {...pageProps} />
        </Container>
        <Footer />
      </ThemeProvider>
      <SpeedInsights />
    </>
  );
}
