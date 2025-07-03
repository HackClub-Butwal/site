import Head from "next/head";
import Carousel from "../components/index/Carousel";
import CreateCard from "../components/index/cards/CreateCard";
import carouselData from "../lib/carousel.json";
import SprigConsole from "../components/index/cards/sprig-console";
import Workshops from "../components/index/cards/workshops";

/**
 * Renders the main homepage layout for the HackClub Butwal site, including metadata, a carousel, a Sprig console, and workshops.
 *
 * Assembles imported components and static data to display the homepage content.
 */
export default function Home() {
  return (
    <div className="no-drag-select">
      <Head>
        <title>HackClub Butwal</title>
        <meta
          name="description"
          content="HackClub Butwal : Local Club in the corner of Butwal. "
        />
      </Head>
        <Carousel cards={carouselData}/>
      <SprigConsole stars={0} consoleCount={0} />
        <Workshops/>
    </div>
  );
}
