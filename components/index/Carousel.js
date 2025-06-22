/** @jsxImportSource theme-ui */
import { Box, Text } from "theme-ui";
import React, { useState } from "react";
import Ticker from "react-ticker";
import PageVisibility from "react-page-visibility";
import { Card, Image, Link } from "theme-ui";
import Icon from "@hackclub/icons";
import GitHub from "./github";

function CarouselCard({
  background,
  titleColor,
  descriptionColor,
  title,
  description,
  img,
  link,
  github,
}) {
  if (github) {
    return <GitHub {...github} />;
  }
  return (
    <Box sx={getBoxStyles()}>
      <Link
        sx={{
          textDecoration: "none",
          "&:hover": { cursor: "pointer" },
          "&:hover svg": { opacity: 0.5 },
        }}
      >
        <Icon glyph="menu" is="svg" size={24} sx={{ color: "text" }} />
      </Link>
    </Box>
  );
}

function getBoxStyles() {
  return {
    bg: "background",
    borderRadius: "lg",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    p: 3,
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
      transform: "scale(1.05)",
    },
  };
}

export default function Carousel({ cards }) {
  let [speed, setSpeed] = useState(5);
  const [pageIsVisible, setPageIsVisible] = useState(true);

  const handleVisibilityChange = (isVisible) => {
    setPageIsVisible(isVisible);
  };

  return (
    <PageVisibility onChange={handleVisibilityChange}>
      {pageIsVisible && (
        <Box
          sx={{
            mt: 4,
            width: "100vw",
            maxWidth: "100vw",
            overflow: "hidden",
            px: 0,
            mx: 0,
            position: "relative",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Text
            variant="eyebrow"
            as="h4"
            sx={{
              fontSize: ["22px", 2, 3],
              mt: [4, 4, 5],
              maxWidth: "layout",
              width: "90vw",
              margin: "auto",
            }}
          >
            Here are a few projects you could get involved in:
          </Text>
          <Ticker speed={speed} sx={{ overflowX: "hidden", width: "100vw" }}>
            {() => (
              <Box
                as="div"
                sx={{ display: "flex", py: [4, 5, 5], width: "100vw" }}
                onMouseOver={() => setSpeed(2)}
                onMouseOut={() => setSpeed(6)}
              >
                {cards.map((card, idx) => (
                  <CarouselCard key={idx} {...card} />
                ))}
              </Box>
            )}
          </Ticker>
        </Box>
      )}
    </PageVisibility>
  );
}
//hq file
//import { Box, Text } from 'theme-ui'
// import CarouselCards from './carousel-cards'
// import { keyframes } from '@emotion/react'
// import React, { useEffect, useState } from 'react'
// import Ticker from 'react-ticker'
// import PageVisibility from 'react-page-visibility'
// import { Fade } from 'react-reveal'
// /** @jsxImportSource theme-ui */
//
// export default function Carousel({ cards }) {
//   let [speed, setSpeed] = useState(5)
//
//   const [pageIsVisible, setPageIsVisible] = useState(true)
//
//   const handleVisibilityChange = isVisible => {
//     setPageIsVisible(isVisible)
//   }
//
//   return (
//     <PageVisibility onChange={handleVisibilityChange}>
//       {pageIsVisible && (
//         <Box sx={{ mt: 4 }}>
//           <Text
//             variant="eyebrow"
//             as="h4"
//             sx={{
//               fontSize: ['22px', 2, 3],
//               mt: [4, 4, 5],
//               maxWidth: 'layout',
//               width: '90vw',
//               margin: 'auto'
//             }}
//           >
//             Here are a few projects you could get involved in:
//           </Text>
//           <Ticker speed={speed} sx={{ overflowX: 'hidden' }}>
//             {() => (
//               <Box
//                 as="div"
//                 sx={{ display: 'flex', py: [4, 5, 5] }}
//                 onMouseOver={() => setSpeed(2)}
//                 onMouseOut={() => setSpeed(6)}
//               >
//                 {cards.map((card, idx) => (
//                   <CarouselCards key={idx} {...card} />
//                 ))}
//               </Box>
//             )}
//           </Ticker>
//         </Box>
//       )}
//     </PageVisibility>
//   )
// }