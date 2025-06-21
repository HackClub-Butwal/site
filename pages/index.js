import Head from 'next/head'
import HeroSection from '../components/HeroSection'
import Carousel from '../components/Carousel'

export default function Home() {
  return (
    <div className="no-drag-select">
      <Head>
        <title>HackClub Butwal – Launching Soon</title>
        <meta name="description" content="HackClub Butwal is launching soon. Stay tuned!" />
      </Head>
      <HeroSection />
      <Carousel />
    </div>
  )
}
