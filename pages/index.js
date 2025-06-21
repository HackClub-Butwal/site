import Head from 'next/head'
import Carousel from '../components/index/Carousel'
import CreateCard from '../components/index/cards/CreateCard'
import cards from '../components/index/cards/cards'

export default function Home() {
  return (
    <div className="no-drag-select">
      <Head>
        <title>HackClub Butwal</title>
        <meta name="description" content="HackClub Butwal is launching soon. Stay tuned!" />
      </Head>
      <Carousel cards={cards} />
      <CreateCard />
    </div>
  )
}
