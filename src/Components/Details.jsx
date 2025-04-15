import React from 'react';
import { Box, Typography, Stack, Button, Divider } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const Portfolio = () => {
  return (
    <Box sx={{ px: 4, py: 6, color: '#ffffff', position:'relative', zIndex:1 }}>

      {/* Hero Section */}
      <Stack spacing={2} alignItems="center" display='flex' justifyContent='center' flexWrap='wrap'>
        <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          <span style={{ color: '#319CB5' }}>Adarsh Krishna</span>
        </Typography>
        <Typography variant="h5" textAlign='center'>FullStack Developer (MERN Stack)</Typography>
        {/* <Button
          variant="outlined"
          sx={{
            mt: 2,
            borderColor: '#319CB5',
            color: '#319CB5',
            textTransform: 'capitalize',
            '&:hover': {
              backgroundColor: '#319CB5',
              color: '#fff',
            },
          }}
        >
          Show My Works
        </Button> */}
      </Stack>

      <Divider sx={{ my: 5, borderColor: '#319CB5' }} />

      {/* Contact */}
      <Stack spacing={2} alignItems='center'>
        <Typography variant="h4" sx={{ color: '#319CB5', mb: 2, textAlign: 'center' }}>Contact</Typography>
        <Stack spacing={1} direction='row' display='flex' justifyContent='center' flexWrap='wrap' rowGap='1rem'>
          <Stack direction="row" spacing={1} alignItems="center">
            <EmailIcon sx={{ color: '#319CB5' }} />
            <Typography>adarshk66666@gmail.com</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <PhoneIcon sx={{ color: '#319CB5' }} />
            <Typography>+91 9746089991</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
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