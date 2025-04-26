import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Contact from './Contact';

const Portfolio = () => {
  return (
    <Box sx={{ px: 4, py: 6, color: '#ffffff', position: 'relative', zIndex: 1 }}>
      {/* Contact */}
      <Contact />
      <Stack spacing={2} alignItems='center'>
        <Typography
          variant="h5"
          sx={{
            color: 'white',
            fontWeight: 600,
            textAlign: 'center',
            position: 'relative',
            display: 'inline-block',
            padding: '0.5rem 1.5rem',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            '&::after': {
              content: '""',
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              height: '2px',
              backgroundColor: '#319CB5',
              borderRadius: '2px',
            },
            '&::before': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '0%',
              height: '3px',
              backgroundColor: 'white',
              transition: 'width 0.3s ease',
            },
            '&:hover::after': {
              width: '0%',
            },
            '&:hover::before': {
              width: '100%',
            },


          }}
        >
          Get in Touch
        </Typography>

        <Stack spacing={1} direction='row' display='flex' justifyContent='center' flexWrap='wrap' rowGap='1rem' gap='1rem'>
          <Stack direction="row" spacing={1} alignItems="center">
            <a href="tel:+919746089991" style={{ textDecoration: 'none' }}>
              <PhoneIcon sx={{ color: '#319CB5' }} />
            </a>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <a href="mailto:adarshk66666@gmail.com" style={{ textDecoration: 'none' }}>
              <EmailIcon sx={{ color: '#319CB5' }} />
            </a>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center" gap='1rem'>
            <Typography>
              <a href="https://www.linkedin.com/in/adarsh-krishna-670169253" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff' }}>
                <LinkedInIcon sx={{ color: '#319CB5' }} />
              </a>
            </Typography>
            <Typography>
              <a href="https://www.instagram.com/adar.zhh?igsh=enZsNXpxNGlyMHJv&utm_source=ig_contact_invite" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff' }}>
                <InstagramIcon sx={{ color: '#319CB5' }} />
              </a>
            </Typography>
            <Typography>
              <a href="https://github.com/AdarshKrishnaaaaa" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff' }}>
                <GitHubIcon sx={{ color: '#319CB5' }} />
              </a>
            </Typography>
          </Stack>
        </Stack>

        <Typography variant="caption" sx={{ mt: 2, opacity: 0.6 }}>
          © {new Date().getFullYear()} Adarsh Krishna. All rights reserved.
        </Typography>
      </Stack>

    </Box>
  );
};

export default Portfolio;