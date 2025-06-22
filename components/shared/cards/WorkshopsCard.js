/** @jsxImportSource theme-ui */
import { Card, Box, Grid, Heading, Image, Text, Flex } from "theme-ui";

const WorkshopCard = ({
  slug,
  name,
  description,
  img,
  height,
  section,
  ...props
}) => (
  <Card
    href={`https://workshops.hackclub.com/${slug}`}
    as="a"
    variant="interactive"
    target="_blank"
    rel="noopener"
    sx={{
      color: "text",
      textDecoration: "none",
      p: [0, 0],
      lineHeight: 0,
      display: "flex",
      flexDirection: "column",
      height: "80%",
      "& span": {
        lineHeight: 1.25,
      },
      maxWidth: "250px",
      height: "250px",
    }}
    {...props}
  >
    <Box sx={{ p: 3, lineHeight: "body" }}>
      <Heading as="h4" sx={{ my: 1 }}>
        {name}
      </Heading>
      <Text variant="caption">{description}</Text>
    </Box>
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Image
        alt={`${name} demo`}
        src={img}
        sx={{ width: "100%", height: "auto" }}
      />
    </Box>
  </Card>
);

export default function WorkshopsCard({ stars }) {
  return (
    <Card
      sx={{
        backgroundColor: "elevated",
        background:
          "linear-gradient(32deg, rgba(51, 142, 218, 0.9) 0%, rgba(51, 214, 166, 0.9) 100%)",
        height: "fit-content",
        color: "white",
        p: 4,
        borderRadius: "lg",
        boxShadow: "card",
        mb: 4,
      }}
    >
      <Text as="h3" sx={{ fontSize: ["36px", 4, 5], mb: 3 }}>
        Workshops
      </Text>
      <Grid columns={[1, 2, 2]} sx={{ gap: 4, height: "fit-content" }}>
        <Flex sx={{ flexDirection: "column", height: "fit-content" }}>
          <Text as="p" sx={{ mb: 3 }}>
            100+ community-contributed, self-guided coding tutorials and ideas.
            Learn to code by building, one project at a time.
          </Text>
          <Box
            as="a"
            href="https://workshops.hackclub.com"
            target="_blank"
            rel="noopener"
            sx={{
              display: "inline-block",
              bg: "white",
              color: "blue",
              fontWeight: "bold",
              px: 4,
              py: 2,
              borderRadius: "circle",
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
              textDecoration: "none",
              mb: 2,
              textAlign: "center",
              transition: "all 0.2s",
              ":hover": { bg: "muted", color: "primary" },
            }}
          >
            Browse The Workshops
          </Box>
          <Box
            as="a"
            href="https://workshops.hackclub.com/submit-a-workshop/"
            target="_blank"
            rel="noopener"
            sx={{
              display: "inline-block",
              bg: "white",
              color: "blue",
              fontWeight: "bold",
              px: 4,
              py: 2,
              borderRadius: "circle",
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
              textDecoration: "none",
              textAlign: "center",
              transition: "all 0.2s",
              ":hover": { bg: "muted", color: "primary" },
            }}
          >
            Build A Workshop
          </Box>
        </Flex>
        <Grid sx={{ display: ["none", "grid", "grid"] }} columns={[1, 1, 1, 2]}>
          <WorkshopCard
            key="splatter_paint"
            slug="splatter_paint"
            name="Splatter Paint"
            description="Crazy colorful splatter paint in your browser with Paper.js"
            img="/assets/logo/blue_logo/Group 336.svg"
          />
          <WorkshopCard
            key="particle_physics"
            slug="particle_physics"
            name="Particle Physics"
            description="Create a particle physics simulation and with p5.js"
            img="/assets/logo/red_logo/hackclubbutwal.svg"
            sx={{ display: ["none", "none", "none", "flex"] }}
          />
        </Grid>
      </Grid>
    </Card>
  );
}
