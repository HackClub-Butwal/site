import React from 'react';
import Ticker from 'react-ticker';
import PageVisibility from 'react-page-visibility';
import CarouselCards from './cards/CarouselCards';

export default function Carousel({ cards }) {
  const [pageIsVisible, setPageIsVisible] = React.useState(true);

  return (
    <PageVisibility onChange={setPageIsVisible}>
      <Ticker move={pageIsVisible} speed={5}>
        {() => (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {cards.map((card, idx) => (
              <CarouselCards key={idx} {...card} />
            ))}
          </div>
        )}
      </Ticker>
    </PageVisibility>
  );
}

