import { useState, useEffect } from 'react';
import { Container, Box, Heading, Text, Grid, Card, Image, Spinner, Badge, Flex } from 'theme-ui';
import Meta from '../components/meta';
import { fetchWorkshops } from '../lib/airtable';

export default function Workshops() {
  const [workshops, setWorkshops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadWorkshops() {
      try {
        const items = await fetchWorkshops();
        setWorkshops(items);
        setLoading(false);
      } catch (err) {
        console.error('Error loading workshops:', err);
        setError('Failed to load workshops. Please try again later.');
        setLoading(false);
      }
    }

    loadWorkshops();
  }, []);

  // Separate workshops into upcoming and past
  const upcomingWorkshops = workshops.filter(workshop => workshop.fields.Status === 'Upcoming');
  const pastWorkshops = workshops.filter(workshop => workshop.fields.Status === 'Past');

  return (
    <>
      <Meta 
        title="Hack Club Butwal - Workshops"
        description="Join our coding workshops and hackathons to learn new skills and build projects with other young coders."
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
            Workshops
          </Heading>
          <Text
            sx={{
              fontSize: [2, 3],
              maxWidth: '650px',
              mx: 'auto'
            }}
          >
            Join our coding workshops and hackathons to learn new skills and build projects with other young coders.
          </Text>
        </Container>
      </Box>

      <Container sx={{ py: [4, 5] }}>
        {loading ? (
          <Box sx={{ textAlign: 'center', py: 5 }}>
            <Spinner />
            <Text sx={{ mt: 3 }}>Loading workshops...</Text>
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
                Upcoming Workshops
              </Heading>
              
              {upcomingWorkshops.length === 0 ? (
                <Box sx={{ textAlign: 'center', py: 4, bg: 'muted', borderRadius: 'default' }}>
                  <Text>No upcoming workshops at the moment. Check back soon!</Text>
                </Box>
              ) : (
                <Grid
                  gap={4}
                  columns={[1, null, 2]}
                >
                  {upcomingWorkshops.map((workshop) => (
                    <Card
                      key={workshop.id}
                      sx={{
                        p: 0,
                        borderRadius: 'default',
                        overflow: 'hidden',
                        boxShadow: 'card',
                        transition: 'transform 0.2s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-5px)'
                        }
                      }}
                    >
                      {workshop.fields.Image && workshop.fields.Image[0] && (
                        <Image
                          src={workshop.fields.Image[0].thumbnails?.large?.url || workshop.fields.Image[0].url}
                          alt={workshop.fields.Title}
                          sx={{
                            width: '100%',
                            height: '200px',
                            objectFit: 'cover'
                          }}
                        />
                      )}
                      <Box sx={{ p: 3 }}>
                        <Flex sx={{ justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                          <Heading as="h3">{workshop.fields.Title}</Heading>
                          <Badge bg="primary" px={2} py={1}>Upcoming</Badge>
                        </Flex>
                        <Text sx={{ color: 'gray', mb: 2 }}>
                          {new Date(workshop.fields.Date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </Text>
                        <Text sx={{ color: 'gray', mb: 2 }}>
                          Location: {workshop.fields.Location}
                        </Text>
                        <Text>{workshop.fields.Description}</Text>
                      </Box>
                    </Card>
                  ))}
                </Grid>
              )}
            </Box>

            <Box>
              <Heading
                as="h2"
                sx={{
                  color: 'primary',
                  mb: 4,
                  textAlign: 'center'
                }}
              >
                Past Workshops
              </Heading>
              
              {pastWorkshops.length === 0 ? (
                <Box sx={{ textAlign: 'center', py: 4, bg: 'muted', borderRadius: 'default' }}>
                  <Text>No past workshops to display.</Text>
                </Box>
              ) : (
                <Grid
                  gap={4}
                  columns={[1, 2, 3]}
                >
                  {pastWorkshops.map((workshop) => (
                    <Card
                      key={workshop.id}
                      sx={{
                        p: 0,
                        borderRadius: 'default',
                        overflow: 'hidden',
                        boxShadow: 'card',
                        transition: 'transform 0.2s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-5px)'
                        }
                      }}
                    >
                      {workshop.fields.Image && workshop.fields.Image[0] && (
                        <Image
                          src={workshop.fields.Image[0].thumbnails?.large?.url || workshop.fields.Image[0].url}
                          alt={workshop.fields.Title}
                          sx={{
                            width: '100%',
                            height: '150px',
                            objectFit: 'cover'
                          }}
                        />
                      )}
                      <Box sx={{ p: 3 }}>
                        <Heading as="h3" mb={2} sx={{ fontSize: 3 }}>{workshop.fields.Title}</Heading>
                        <Text sx={{ color: 'gray', mb: 2, fontSize: 1 }}>
                          {new Date(workshop.fields.Date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </Text>
                        <Text sx={{ fontSize: 1 }}>{workshop.fields.Description}</Text>
                      </Box>
                    </Card>
                  ))}
                </Grid>
              )}
            </Box>
          </>
        )}
      </Container>
    </>
  );
}