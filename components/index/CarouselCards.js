/** @jsxImportSource theme-ui */

import {Box, Card, Link, Text} from "theme-ui";
import Image from "next/image";
import Icon from "../icon";

/**
 * Renders a styled card with an image, title, description, and an external link icon for use in a carousel.
 *
 * The card displays a background image, customizable colors for the title and description, and links to an external URL in a new tab. The card and icon include interactive hover effects. If the image fails to load, an error is logged to the console.
 */
export default function CarouselCards({
  background,
  titleColor,
  descriptionColor,
  title,
  description,
  img,
  link,
}) {
  return (
      <Box
          sx={{
              position: "relative",
              display: "inline-block",
              transition: "transform .125s ease-in-out, box-shadow .125s ease-in-out",
              "&:hover": {transform: "scale(1.0625)"},
              ".icon": {
                  transition: "transform 0.25s ease-in-out, opacity 0.43s ease-in-out",
              },
              ":hover,:focus": {
                  ".icon": {
                      transform: "translateX(28px) translateY(-28px)",
                      opacity: 0,
                  },
              },
          }}
      >
      <Link
        sx={{
            textDecoration: "none",
            "&:hover": {cursor: "pointer"},
            "&:hover svg": {opacity: 0.5},
        }}
        href={link}
        target="_blank"
        rel="noopener"
      >
          <Box
              sx={{
                  position: "absolute",
                  top: ["-26px", "-30px", "-35px"],
                  left: ["10px", "12px", "15px"],
                  zIndex: 2,
                  width: ["42px", "50px", "58px"],
                  height: ["42px", "50px", "58px"],
              }}
          >
              <Image
                  src={img}
                  alt="carousel card"
                  layout="fill"
                  objectFit="cover"
                  onError={(e) => {
                      console.error("Image load error for:", img);
                  }}
              />
          </Box>
        <Card
          sx={{
            mr: 3,
              background,
              position: "relative",
              color: "white",
              width: ["200px", "300px", "300px"],
              padding: ["12px !important", "16px !important", "20px !important"],
            paddingTop: [
                "14px !important",
                "20px !important",
                "24px !important",
            ],
              height: "100%",
          }}
        >
          <Text
            as="h3"
            sx={{color: titleColor, fontSize: ["20px", "21px", "22px"]}}
          >
            {title}
          </Text>
          <Text
            as="p"
            sx={{color: descriptionColor, fontSize: [1, "16px", "20px"]}}
          >
            {description}
          </Text>
          <Icon
            glyph="external"
            size={32}
            color="#E9E9E9"
            sx={{
                position: "absolute",
              top: 2,
              right: 2,
              opacity: 0.3,
                fontSize: [1, "16px", "20px"],
            }}
            className="icon"
          />
        </Card>
      </Link>
    </Box>
  );
}
