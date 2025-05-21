import { useState } from 'react';
import { Container, Box, Heading, Text, Grid, Card, Label, Input, Textarea, Button, Flex, Link } from 'theme-ui';
import Meta from '../components/meta';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    // In a real implementation, you would send the form data to a server
    // For demonstration purposes, we're just simulating a successful submission
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Simulate successful submission
      setSubmitted(true);
      setFormState({
        name: '',
        email: '',
        message: '',
      });
    } catch (err) {
      setError('Failed to submit the form. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Meta 
        title="Hack Club Butwal - Contact Us"
        description="Get in touch with Hack Club Butwal. We'd love to hear from you!"
      />

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
              fontSize: [5, 6],
              mb: 3
            }}
          >
            Contact Us
          </Heading>
          <Text
            sx={{
              fontSize: [2, 3],
              maxWidth: '650px',
              mx: 'auto'
            }}
          >
            Get in touch with Hack Club Butwal. We'd love to hear from you!
          </Text>
        </Container>
      </Box>

      <Container sx={{ py: [4, 5] }}>
        <Grid
          gap={[4, 5]}
          columns={[1, null, 2]}
          sx={{
            mb: 5
          }}
        >
          <Box>
            <Heading as="h2" mb={3}>Send Us a Message</Heading>
            {submitted ? (
              <Card
                sx={{
                  p: 4,
                  bg: 'muted',
                  borderRadius: 'default',
                  textAlign: 'center'
                }}
              >
                <Heading as="h3" mb={3}>Thank You!</Heading>
                <Text mb={3}>Your message has been sent successfully. We'll get back to you soon.</Text>
                <Button
                  onClick={() => setSubmitted(false)}
                  sx={{
                    bg: 'primary',
                    cursor: 'pointer'
                  }}
                >
                  Send Another Message
                </Button>
              </Card>
            ) : (
              <Box as="form" onSubmit={handleSubmit}>
                <Label htmlFor="name" mb={2}>Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  mb={3}
                  required
                />

                <Label htmlFor="email" mb={2}>Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  mb={3}
                  required
                />

                <Label htmlFor="message" mb={2}>Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={6}
                  mb={3}
                  required
                />

                {error && (
                  <Text
                    sx={{
                      color: 'red',
                      mb: 3
                    }}
                  >
                    {error}
                  </Text>
                )}

                <Button
                  type="submit"
                  disabled={submitting}
                  sx={{
                    bg: 'tertiary',
                    cursor: submitting ? 'not-allowed' : 'pointer',
                    opacity: submitting ? 0.7 : 1
                  }}
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </Button>
              </Box>
            )}
          </Box>

          <Box>
            <Heading as="h2" mb={3}>Contact Information</Heading>
            <Card
              sx={{
                p: 4,
                bg: 'muted',
                borderRadius: 'default'
              }}
            >
              <Box mb={4}>
                <Heading as="h3" mb={2} sx={{ fontSize: 3 }}>Email</Heading>
                <Link
                  href="mailto:butwal@hackclub.com"
                  sx={{
                    color: 'tertiary',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline'
                    }
                  }}
                >
                  butwal@hackclub.com
                </Link>
              </Box>

              <Box mb={4}>
                <Heading as="h3" mb={2} sx={{ fontSize: 3 }}>Location</Heading>
                <Text>Butwal, Nepal</Text>
              </Box>

              <Box>
                <Heading as="h3" mb={2} sx={{ fontSize: 3 }}>Social Media</Heading>
                <Flex sx={{ gap: 3 }}>
                  <Link
                    href="https://twitter.com/hackclubbutwal"
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
                    Twitter
                  </Link>
                  <Link
                    href="https://instagram.com/hackclubbutwal"
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
                    Instagram
                  </Link>
                  <Link
                    href="https://github.com/hackclubbutwal"
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
                    GitHub
                  </Link>
                </Flex>
              </Box>
            </Card>

            <Box mt={4}>
              <Heading as="h3" mb={3}>Find Us</Heading>
              <Box
                sx={{
                  width: '100%',
                  height: '300px',
                  borderRadius: 'default',
                  overflow: 'hidden'
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56635.65236474339!2d83.41699465!3d27.6866236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996864275d9755f%3A0x2b1e92d89d4bb3ae!2sButwal%2C%20Nepal!5e0!3m2!1sen!2sus!4v1652345678901!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map of Butwal, Nepal"
                ></iframe>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Container>
    </>
  );
}
