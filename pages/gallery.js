import { useState, useEffect } from 'react';
import { Container, Box, Heading, Text, Grid, Card, Image, Spinner } from 'theme-ui';
import Meta from '../components/meta';
import { fetchGalleryItems } from '../lib/airtable';

export default function Gallery() {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadGalleryItems() {
      try {
        const items = await fetchGalleryItems();
        setGalleryItems(items);
        setLoading(false);
      } catch (err) {
        console.error('Error loading gallery items:', err);
        setError('Failed to load gallery items. Please try again later.');
        setLoading(false);
      }
    }

    loadGalleryItems();
  }, []);

  return (
    <>
      <Meta 
        title="Hack Club Butwal - Gallery"
        description="Check out photos from our workshops, hackathons, and community events."
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
            Gallery
          </Heading>
          <Text
            sx={{
              fontSize: [2, 3],
              maxWidth: '650px',
              mx: 'auto'
            }}
          >
            Check out photos from our workshops, hackathons, and community events.
          </Text>
        </Container>
      </Box>

      <Container sx={{ py: [4, 5] }}>
        {loading ? (
          <Box sx={{ textAlign: 'center', py: 5 }}>
            <Spinner />
            <Text sx={{ mt: 3 }}>Loading gallery items...</Text>
          </Box>
        ) : error ? (
          <Box sx={{ textAlign: 'center', py: 5, color: 'red' }}>
            <Text>{error}</Text>
          </Box>
        ) : (
          <Grid
            gap={4}
            columns={[1, 2, 3]}
            sx={{
              mb: 5
            }}
          >
            {galleryItems.map((item) => (
              <Card
                key={item.id}
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
                {item.fields.Image && item.fields.Image[0] && (
                  <Image
                    src={item.fields.Image[0].thumbnails?.large?.url || item.fields.Image[0].url}
                    alt={item.fields.Title}
                    sx={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover'
                    }}
                  />
                )}
                <Box sx={{ p: 3 }}>
                  <Heading as="h3" mb={2}>{item.fields.Title}</Heading>
                  <Text sx={{ color: 'gray', mb: 2 }}>{item.fields.Date}</Text>
                  <Text>{item.fields.Description}</Text>
                </Box>
              </Card>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
}