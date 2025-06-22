import Head from 'next/head'
import Carousel from '../components/index/Carousel'
import CreateCard from '../components/index/cards/CreateCard'
import carousel from '../components/index/cards/carousel'

export default function Home() {
  return (
    <div className="no-drag-select">
      <Head>
        <title>HackClub Butwal</title>
        <meta name="description" content="HackClub Butwal is launching soon. Stay tuned!" />
      </Head>
      <Carousel cards={carousel} />
      <CreateCard />
    </div>
  )
}
