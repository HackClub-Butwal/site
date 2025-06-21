import { useState } from 'react'
import Head from 'next/head'
import { Container, Grid, Box, Text, Heading, Button, Flex } from 'theme-ui'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Demo gallery images with categories
const galleryImages = [
  { 
    id: 1, 
    url: '/assets/logo/red_logo/Group_325.svg', 
    caption: 'Web Development Workshop', 
    category: 'Workshops',
    date: 'June 15, 2023'
  },
  { 
    id: 2, 
    url: '/assets/logo/red_logo/Group_327.svg', 
    caption: 'Hackathon Winners', 
    category: 'Events',
    date: 'May 22, 2023'
  },
  { 
    id: 3, 
    url: '/assets/logo/red_logo/Group_334.svg', 
    caption: 'Team Building Activity', 
    category: 'Team',
    date: 'April 10, 2023'
  },
  { 
    id: 4, 
    url: '/assets/logo/red_logo/hackclubbutwal.svg', 
    caption: 'Python Workshop', 
    category: 'Workshops',
    date: 'March 5, 2023'
  },
  { 
    id: 5, 
    url: '/assets/logo/red_logo/Group_337.png', 
    caption: 'Community Meetup', 
    category: 'Events',
    date: 'February 18, 2023'
  },
  { 
    id: 6, 
    url: '/assets/logo/red_logo/hackclubbutwal.svg', 
    caption: 'Core Team Meeting', 
    category: 'Team',
    date: 'January 30, 2023'
  }
]

// Get unique categories
const categories = ['All', ...new Set(galleryImages.map(img => img.category))]

// Animation variants for gallery items
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5
    }
  }
}

// Animation variants for container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

function GalleryFilter({ categories, activeCategory, setActiveCategory }) {
  return (
    <Flex
      sx={{
        mb: 4,
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 2
      }}
    >
      {categories.map(category => (
        <Button
          key={category}
          variant={activeCategory === category ? 'primary' : 'outline'}
          onClick={() => setActiveCategory(category)}
          sx={{ mb: 2 }}
        >
          {category}
        </Button>
      ))}
    </Flex>
  )
}

function GalleryGrid({ images }) {
  if (images.length === 0) {
    return null
  }
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Grid columns={[1, 2, 3]} gap={4}>
        {images.map(img => (
          <motion.div key={img.id} variants={itemVariants}>
            <Box
              sx={{
                borderRadius: 'default',
                overflow: 'hidden',
                boxShadow: 'card',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 'elevated',
                  '& .gallery-image': {
                    transform: 'scale(1.05)'
                  }
                }
              }}
            >
              <Box sx={{ position: 'relative', height: 250, overflow: 'hidden' }}>
                <Image
                  src={img.url}
                  alt={img.caption}
                  fill
                  style={{
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease-in-out'
                  }}
                  className="gallery-image"
                />
              </Box>
              <Box sx={{ p: 3 }}>
                <Heading as="h3" sx={{ fontSize: 2, mb: 1 }}>{img.caption}</Heading>
                <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text sx={{ fontSize: 1, color: 'primary' }}>{img.category}</Text>
                  <Text sx={{ fontSize: 0, color: 'muted' }}>{img.date}</Text>
                </Flex>
              </Box>
            </Box>
          </motion.div>
        ))}
      </Grid>
    </motion.div>
  )
}

function GalleryEmpty({ setActiveCategory }) {
  return (
    <Box sx={{ textAlign: 'center', py: 4 }}>
      <Text>No images found in this category.</Text>
      <Button
        variant="outline"
        onClick={() => setActiveCategory('All')}
        sx={{ mt: 3 }}
      >
        Show all images
      </Button>
    </Box>
  )
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')

  // Filter images based on selected category
  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  return (
    <>
      <Head>
        <title>Gallery – HackClub Butwal</title>
        <meta name="description" content="Browse photos from our HackClub Butwal events, workshops, and team activities." />
      </Head>

      <Box
        sx={{
          bg: 'primary',
          color: 'white',
          py: [4, 5],
          textAlign: 'center'
        }}
      >
        <Container>
          <Heading
            as="h1"
            sx={{
              fontSize: [4, 5, 6],
              mb: 3
            }}
          >
            Gallery
          </Heading>
          <Text sx={{ fontSize: [1, 2], maxWidth: '600px', mx: 'auto', opacity: 0.9 }}>
            Explore photos from our workshops, events, and community activities.
          </Text>
        </Container>
      </Box>

      <Container sx={{ py: [4, 5] }}>
        <GalleryFilter categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

        {filteredImages.length === 0 ? (
          <GalleryEmpty setActiveCategory={setActiveCategory} />
        ) : (
          <GalleryGrid images={filteredImages} />
        )}

        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <Heading as="h2" sx={{ mb: 3, fontSize: 3 }}>Have photos to share?</Heading>
          <Text sx={{ mb: 3 }}>
            If you've attended our events and have photos you'd like to share, we'd love to feature them in our gallery!
          </Text>
          <Button as="a" href="/contact" variant="outline">
            Submit Your Photos
          </Button>
        </Box>
      </Container>
    </>
  )
}
