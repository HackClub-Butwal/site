import { useState, useEffect } from 'react';
import { Container, Box, Heading, Text, Grid, Card, Image, Spinner, Flex, Link } from 'theme-ui';
import Meta from '../components/meta';
import { fetchCommunityMembers } from '../lib/airtable';

// Placeholder for TestimonialCard component
const TestimonialCard = ({ testimonial, author, image }) => (
  <Card sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: 'card', transition: 'transform 0.2s ease-in-out', '&:hover': { transform: 'translateY(-5px)'} }}>
    {image && <Image src={image} alt={author} sx={{ width: 80, height: 80, borderRadius: 'circle', mb: 3, objectFit: 'cover' }} />}
    <Text sx={{ fontStyle: 'italic', mb: 2 }}>"{testimonial}"</Text>
    <Text sx={{ fontWeight: 'bold' }}>- {author}</Text>
  </Card>
);

// Placeholder for MemberCard component
const MemberCard = ({ name, role, bio, image, socialLinks }) => (
  <Card sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: 'card', transition: 'transform 0.2s ease-in-out', '&:hover': { transform: 'translateY(-5px)'} }}>
    {image && <Image src={image} alt={name} sx={{ width: 120, height: 120, borderRadius: 'circle', mb: 3, objectFit: 'cover' }} />}
    <Heading as="h3" sx={{ mb: 1 }}>{name}</Heading>
    <Text sx={{ color: 'primary', mb: 2, fontWeight: 'bold' }}>{role}</Text>
    <Text sx={{ fontSize: 1, mb: 3 }}>{bio}</Text>
    {socialLinks && (
      <Flex sx={{ gap: 2 }}>
        {socialLinks.twitter && <Link href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">Twitter</Link>}
        {socialLinks.linkedin && <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</Link>}
        {socialLinks.github && <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</Link>}
      </Flex>
    )}
  </Card>
);

export default function Community() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadMembers() {
      try {
        const items = await fetchCommunityMembers();
        setMembers(items);
        setLoading(false);
      } catch (err) {
        console.error('Error loading community members:', err);
        setError('Failed to load community members. Please try again later.');
        setLoading(false);
      }
    }

    loadMembers();
  }, []);

  const testimonials = members.filter(member => member.fields.Testimonial);

  return (
    <>
      <Meta
        title="Hack Club Butwal - Community"
        description="Meet the members of Hack Club Butwal and read their stories."
      />

      <Box
        sx={{
          bg: 'tertiary',
          color: 'white',
          py: [4, 5],
          textAlign: 'center'
        }}
      >
        <Container>
          <Heading
            as="h1"
            sx={{
              fontSize: [5, 6],
              mb: 3
            }}
          >
            Our Community
          </Heading>
          <Text
            sx={{
              fontSize: [2, 3],
              maxWidth: '650px',
              mx: 'auto'
            }}
          >
            Meet the passionate individuals who make Hack Club Butwal a vibrant and supportive community.
          </Text>
        </Container>
      </Box>

      <Container sx={{ py: [4, 5] }}>
        {loading ? (
          <Box sx={{ textAlign: 'center', py: 5 }}>
            <Spinner />
            <Text sx={{ mt: 3 }}>Loading community members...</Text>
          </Box>
        ) : error ? (
          <Box sx={{ textAlign: 'center', py: 5, color: 'red' }}>
            <Text>{error}</Text>
          </Box>
        ) : (
          <>
            <Box sx={{ mb: 5 }}>
              <Heading
                as="h2"
                sx={{
                  color: 'primary',
                  mb: 4,
                  textAlign: 'center'
                }}
              >
                Meet Our Members
              </Heading>

              {members.length === 0 ? (
                <Box sx={{ textAlign: 'center', py: 4, bg: 'muted', borderRadius: 'default' }}>
                  <Text>No community members to display yet. Join us!</Text>
                </Box>
              ) : (
                <Grid
                  gap={4}
                  columns={[1, 2, 3]}
                >
                  {members.map((member) => (
                    <MemberCard
                      key={member.id}
                      name={member.fields.Name}
                      role={member.fields.Role}
                      bio={member.fields.Bio}
                      image={member.fields.Image && member.fields.Image[0] ? member.fields.Image[0].thumbnails?.large?.url || member.fields.Image[0].url : 'https://via.placeholder.com/150'}
                      socialLinks={{
                        twitter: member.fields.Twitter,
                        linkedin: member.fields.LinkedIn,
                        github: member.fields.GitHub
                      }}
                    />
                  ))}
                </Grid>
              )}
            </Box>

            {testimonials.length > 0 && (
              <Box sx={{ mb: 5, bg: 'muted', py: 4, borderRadius: 'default' }}>
                <Heading
                  as="h2"
                  sx={{
                    color: 'primary',
                    mb: 4,
                    textAlign: 'center'
                  }}
                >
                  Member Testimonials
                </Heading>
                <Grid
                  gap={4}
                  columns={[1, null, 2]}
                  sx={{ px: 3 }}
                >
                  {testimonials.map((member) => (
                    <TestimonialCard
                      key={member.id}
                      testimonial={member.fields.Testimonial}
                      author={member.fields.Name}
                      image={member.fields.Image && member.fields.Image[0] ? member.fields.Image[0].thumbnails?.large?.url || member.fields.Image[0].url : 'https://via.placeholder.com/80'}
                    />
                  ))}
                </Grid>
              </Box>
            )}
          </>
        )}
      </Container>
    </>
  );
}

