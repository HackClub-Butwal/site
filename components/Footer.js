/** @jsxImportSource theme-ui */
import React from 'react';
import { Box, Text, Link } from 'theme-ui';
import Banner from '@hackclub/banner';

const hackClubLogo = (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="40" height="40" rx="8" fill="currentColor" />
    <path d="M13 27V13H27V27H13Z" fill="white" />
  </svg>
);

const Footer = () => (
  <>
    <Banner
      color="text"
      style={{ borderRadius: 0 }}
      children="Join Hack Club Butwal on Discord! 🚀"
      href="https://discord.gg/your-invite-link"
    />
    <Box
      as="footer"
      sx={{
        bg: ['background', 'dark'], // Use light background in light mode, dark in dark mode
        color: ['text', 'white'],   // Use text color from theme
        py: 4,
        px: 3,
        textAlign: ['center', 'left'],
        fontSize: 1,
        mt: 'auto',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: ['center', 'flex-start'], mb: 3 }}>
        <Link href="https://hackclub.com/" target="_blank" rel="noopener noreferrer" sx={{ display: 'inline-flex', alignItems: 'center', mr: 2 }}>
          <span style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: 8, color: 'var(--theme-ui-colors-primary, #ec3750)' }}>
            {hackClubLogo}
          </span>
          <Text as="span" sx={{ fontWeight: 'bold', color: 'text', ml: 2, fontSize: 2 }}>
            Hack Club
          </Text>
        </Link>
        <Text as="span" sx={{ color: 'muted', fontSize: 1, ml: 2 }}>
          Butwal
        </Text>
      </Box>
      <Text as="div" sx={{ mb: 2 }}>
        A community for makers, coders, and dreamers.
      </Text>
      <Box sx={{ mb: 2 }}>
        <Link
          href="https://github.com/hackclubbutwal"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: 'text',
            textDecoration: 'none',
            fontWeight: 'bold',
            mr: 3,
          }}
        >
          GitHub
        </Link>
      </Box>
      <Text as="div" sx={{ color: 'muted', fontSize: 1, mb: 2 }}>
        Powered by Next.js with MDX, Theme UI, & Hack Club Theme.
      </Text>
      <Text as="div" sx={{ mt: 2, fontSize: 0, color: 'muted' }}>
        &copy; {new Date().getFullYear()} Hack Club Butwal. MIT License. Assets may not be re-used or re-distributed.
      </Text>
    </Box>
  </>
);

export default Footer;
