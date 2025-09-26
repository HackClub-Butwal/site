import Head from "next/head";
import { Container, Heading, Text, Box } from "theme-ui";

export default function About() {
  return (
    <>
      <Head>
        <title>About – HackClub Butwal</title>
        <meta
          name="description"
          content="Learn about our mission, values, and team at HackClub Butwal."
        />
      </Head>
      <Container sx={{ py: 4 }}>
        <Heading as="h1" sx={{ mb: 3 }}>
          About Us
        </Heading>
        <Box sx={{ mb: 4 }}>
          <Heading as="h2">Mission</Heading>
          <Text>
            Empower young coders and makers in Butwal through hands-on learning
            and community events.
          </Text>
        </Box>
        <Box sx={{ mb: 4 }}>
          <Heading as="h2">Values</Heading>
          <Text>
            Inclusivity, creativity, collaboration, and curiosity guide
            everything we do.
          </Text>
        </Box>
        <Box>
          <Heading as="h2">Team</Heading>
          <Text>
            Our team is a group of passionate students and mentors dedicated to
            growing the local tech community.
          </Text>
        </Box>
      </Container>
    </>
  );
}
