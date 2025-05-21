import { useState, useEffect } from 'react';
import { Container, Box, Heading, Text, Grid, Card, Image, Spinner, Flex, Link, Button } from 'theme-ui';
import Meta from '../components/meta';
import { fetchSponsors } from '../lib/airtable';

export default function Sponsors() {
  const [sponsors, setSponsors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadSponsors() {
      try {
        const items = await fetchSponsors();
        setSponsors(items);
        setLoading(false);
      } catch (err) {
        console.error('Error loading sponsors:', err);
        setError('Failed to load sponsors. Please try again later.');
        setLoading(false);
      }
    }

    loadSponsors();
  }, []);

  // Group sponsors by tier
  const goldSponsors = sponsors.filter(sponsor => sponsor.fields.Tier === 'Gold');
  const silverSponsors = sponsors.filter(sponsor => sponsor.fields.Tier === 'Silver');
  const bronzeSponsors = sponsors.filter(sponsor => sponsor.fields.Tier === 'Bronze');

  return (
    <>
      <Meta 
        title="Hack Club Butwal - Sponsors"
        description="Support Hack Club Butwal and help us empower young coders and makers in Nepal."
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
            Our Sponsors
          </Heading>
          <Text
            sx={{
              fontSize: [2, 3],
              maxWidth: '650px',
              mx: 'auto'
            }}
          >
            These amazing organizations and companies help make Hack Club Butwal possible.
          </Text>
        </Container>
      </Box>

      <Container sx={{ py: [4, 5] }}>
        {loading ? (
          <Box sx={{ textAlign: 'center', py: 5 }}>
            <Spinner />
            <Text sx={{ mt: 3 }}>Loading sponsors...</Text>
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
                Current Sponsors
              </Heading>
              
              {sponsors.length === 0 ? (
                <Box sx={{ textAlign: 'center', py: 4, bg: 'muted', borderRadius: 'default' }}>
                  <Text>No sponsors to display. Become our first sponsor!</Text>
                </Box>
              ) : (
                <>
                  {goldSponsors.length > 0 && (
                    <Box sx={{ mb: 4 }}>
                      <Heading as="h3" sx={{ color: 'tertiary', mb: 3, textAlign: 'center' }}>
                        Gold Sponsors
                      </Heading>
                      <Grid
                        gap={4}
                        columns={[1, null, 2]}
                      >
                        {goldSponsors.map((sponsor) => (
                          <Card
                            key={sponsor.id}
                            sx={{
                              p: 4,
                              borderRadius: 'default',
                              boxShadow: 'card',
                              transition: 'transform 0.2s ease-in-out',
                              '&:hover': {
                                transform: 'translateY(-5px)'
                              }
                            }}
                          >
                            <Flex sx={{ alignItems: 'center', mb: 3 }}>
                              {sponsor.fields.Logo && sponsor.fields.Logo[0] && (
                                <Image
                                  src={sponsor.fields.Logo[0].thumbnails?.large?.url || sponsor.fields.Logo[0].url}
                                  alt={sponsor.fields.Name}
                                  sx={{
                                    width: 80,
                                    height: 80,
                                    objectFit: 'contain',
                                    mr: 3
                                  }}
                                />
                              )}
                              <Box>
                                <Heading as="h4" mb={1}>{sponsor.fields.Name}</Heading>
                                <Link 
                                  href={sponsor.fields.Website} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  sx={{
                                    color: 'tertiary',
                                    textDecoration: 'none',
                                    '&:hover': {
                                      textDecoration: 'underline'
                                    }
                                  }}
                                >
                                  Visit Website
                                </Link>
                              </Box>
                            </Flex>
                            <Text>{sponsor.fields.Description}</Text>
                          </Card>
                        ))}
                      </Grid>
                    </Box>
                  )}

                  {silverSponsors.length > 0 && (
                    <Box sx={{ mb: 4 }}>
                      <Heading as="h3" sx={{ color: 'tertiary', mb: 3, textAlign: 'center' }}>
                        Silver Sponsors
                      </Heading>
                      <Grid
                        gap={4}
                        columns={[1, 2, 3]}
                      >
                        {silverSponsors.map((sponsor) => (
                          <Card
                            key={sponsor.id}
                            sx={{
                              p: 3,
                              borderRadius: 'default',
                              boxShadow: 'card',
                              transition: 'transform 0.2s ease-in-out',
                              '&:hover': {
                                transform: 'translateY(-5px)'
                              }
                            }}
                          >
                            <Flex sx={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                              {sponsor.fields.Logo && sponsor.fields.Logo[0] && (
                                <Image
                                  src={sponsor.fields.Logo[0].thumbnails?.large?.url || sponsor.fields.Logo[0].url}
                                  alt={sponsor.fields.Name}
                                  sx={{
                                    width: 70,
                                    height: 70,
                                    objectFit: 'contain',
                                    mb: 2
                                  }}
                                />
                              )}
                              <Heading as="h4" mb={1}>{sponsor.fields.Name}</Heading>
                              <Link 
                                href={sponsor.fields.Website} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                sx={{
                                  color: 'tertiary',
                                  textDecoration: 'none',
                                  fontSize: 1,
                                  mb: 2,
                                  '&:hover': {
                                    textDecoration: 'underline'
                                  }
                                }}
                              >
                                Visit Website
                              </Link>
                              <Text sx={{ fontSize: 1 }}>{sponsor.fields.Description}</Text>
                            </Flex>
                          </Card>
                        ))}
                      </Grid>
                    </Box>
                  )}

                  {bronzeSponsors.length > 0 && (
                    <Box>
                      <Heading as="h3" sx={{ color: 'tertiary', mb: 3, textAlign: 'center' }}>
                        Bronze Sponsors
                      </Heading>
                      <Grid
                        gap={4}
                        columns={[2, 3, 4]}
                      >
                        {bronzeSponsors.map((sponsor) => (
                          <Card
                            key={sponsor.id}
                            sx={{
                              p: 3,
                              borderRadius: 'default',
                              boxShadow: 'card',
                              transition: 'transform 0.2s ease-in-out',
                              '&:hover': {
                                transform: 'translateY(-5px)'
                              }
                            }}
                          >
                            <Flex sx={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                              {sponsor.fields.Logo && sponsor.fields.Logo[0] && (
                                <Image
                                  src={sponsor.fields.Logo[0].thumbnails?.large?.url || sponsor.fields.Logo[0].url}
                                  alt={sponsor.fields.Name}
                                  sx={{
                                    width: 60,
                                    height: 60,
                                    objectFit: 'contain',
                                    mb: 2
                                  }}
                                />
                              )}
                              <Heading as="h4" mb={1} sx={{ fontSize: 2 }}>{sponsor.fields.Name}</Heading>
                              <Link 
                                href={sponsor.fields.Website} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                sx={{
                                  color: 'tertiary',
                                  textDecoration: 'none',
                                  fontSize: 0,
                                  '&:hover': {
                                    textDecoration: 'underline'
                                  }
                                }}
                              >
                                Visit Website
                              </Link>
                            </Flex>
                          </Card>
                        ))}
                      </Grid>
                    </Box>
                  )}
                </>
              )}
            </Box>

            <Box sx={{ mb: 5 }}>
              <Heading
                as="h2"
                sx={{
                  color: 'primary',
                  mb: 4,
                  textAlign: 'center'
                }}
              >
                Sponsorship Tiers
              </Heading>
              
              <Grid
                gap={4}
                columns={[1, null, 3]}
              >
                <Card
                  sx={{
                    p: 4,
                    borderRadius: 'default',
                    boxShadow: 'card',
                    borderTop: '5px solid',
                    borderColor: '#D4AF37', // Gold color
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)'
                    }
                  }}
                >
                  <Heading as="h3" mb={2}>Gold Sponsor</Heading>
                  <Text sx={{ fontSize: 4, fontWeight: 'bold', color: 'primary', mb: 3 }}>$1,000</Text>
                  <Box as="ul" sx={{ pl: 3, mb: 3 }}>
                    <Text as="li" mb={2}>Large logo on website and all event materials</Text>
                    <Text as="li" mb={2}>Recognition in all social media posts</Text>
                    <Text as="li" mb={2}>Opportunity to speak at events</Text>
                    <Text as="li" mb={2}>Recruiting access to our community</Text>
                    <Text as="li">All Silver and Bronze benefits</Text>
                  </Box>
                </Card>

                <Card
                  sx={{
                    p: 4,
                    borderRadius: 'default',
                    boxShadow: 'card',
                    borderTop: '5px solid',
                    borderColor: '#C0C0C0', // Silver color
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)'
                    }
                  }}
                >
                  <Heading as="h3" mb={2}>Silver Sponsor</Heading>
                  <Text sx={{ fontSize: 4, fontWeight: 'bold', color: 'primary', mb: 3 }}>$500</Text>
                  <Box as="ul" sx={{ pl: 3, mb: 3 }}>
                    <Text as="li" mb={2}>Medium logo on website and event materials</Text>
                    <Text as="li" mb={2}>Recognition at all events</Text>
                    <Text as="li" mb={2}>Opportunity to distribute swag</Text>
                    <Text as="li">All Bronze benefits</Text>
                  </Box>
                </Card>

                <Card
                  sx={{
                    p: 4,
                    borderRadius: 'default',
                    boxShadow: 'card',
                    borderTop: '5px solid',
                    borderColor: '#CD7F32', // Bronze color
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)'
                    }
                  }}
                >
                  <Heading as="h3" mb={2}>Bronze Sponsor</Heading>
                  <Text sx={{ fontSize: 4, fontWeight: 'bold', color: 'primary', mb: 3 }}>$250</Text>
                  <Box as="ul" sx={{ pl: 3, mb: 3 }}>
                    <Text as="li" mb={2}>Small logo on website</Text>
                    <Text as="li" mb={2}>Recognition at one event</Text>
                    <Text as="li">Thank you on social media</Text>
                  </Box>
                </Card>
              </Grid>
            </Box>

            <Box
              sx={{
                bg: 'primary',
                color: 'white',
                p: 4,
                borderRadius: 'default',
                textAlign: 'center'
              }}
            >
              <Heading as="h2" mb={3}>Become a Sponsor</Heading>
              <Text mb={3} sx={{ maxWidth: '650px', mx: 'auto' }}>
                By sponsoring Hack Club Butwal, you're investing in the next generation of tech talent in Nepal.
                Your support helps us provide resources, workshops, and opportunities for young coders and makers.
              </Text>
              <Button
                as="a"
                href="/contact"
                sx={{
                  bg: 'white',
                  color: 'primary',
                  px: 4,
                  py: 3,
                  borderRadius: 'default',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)'
                  }
                }}
              >
                Contact Us to Sponsor
              </Button>
            </Box>
          </>
        )}
      </Container>
    </>
  );
}