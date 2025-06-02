import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

import InfoIcon from '@mui/icons-material/Info';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from 'react-scroll';

function NavigationBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navLinks = [
    { label: 'About', icon: <InfoIcon />, to: 'about' },
    { label: 'Contact', icon: <PhoneIcon />, to: 'contact' },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const words = ['Web Developer', 'Software Developer'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const text = words[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval); // Cleanup when unmounted
  }, []);

  function closeNav() {
    setDrawerOpen(false)
  }

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: 'transparent',
          backdropFilter: 'blur(10px)',
          boxShadow: 'none',
          padding: '0.3rem 1rem',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'Courier New, monospace',
              color: '#ffffff',
              letterSpacing: 1.5,
              cursor: 'pointer',
              display: 'inline-flex',
              gap: '2px', // small gap between letters
            }}
          >
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
              }}
            >
              {text.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: index * 0.05, // Delay per letter (shorter delay)
                    duration: 0.4,       // Duration for each letter's appearance
                  }}
                  style={{
                    color: char.toLowerCase() === 'd' ? 'white' : '#319CB5', // First letter color change (you can adjust)
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            </>
          ) : (
            <Stack direction="row" spacing={3}>
              {navLinks.map((link) => (
                <Link to={link.to} smooth={true} duration={500}>
                  <Button
                    key={link}
                    sx={{
                      color: '#ffffff',
                      textTransform: 'capitalize',
                      fontWeight: 500,
                      fontSize: '1rem',
                      gap: 1,
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '0%',
                        height: '1px',
                        backgroundColor: '#319CB5',
                        transition: 'width 0.3s ease',
                      },
                      '&:hover::before': {
                        width: '100%',
                      },
                    }}
                  >
                    {link.icon}
                    {link.label}
                  </Button>
                </Link>
              ))}
            </Stack>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: 'transparent',
            backdropFilter: 'blur(1rem)',
          },
        }}
      >
        <Box sx={{ width: 150, mt: 2 }}>
          <List>
            {navLinks.map((link) => (
              <Link to={link.to} smooth={true} duration={500}>
                <ListItem
                  button
                  key={link.label}
                  onClick={closeNav}
                >
                  <ListItem
                    button
                    key={link.label}
                    sx={{ color: '#319CB5', gap: 1 }}
                  >
                    {link.icon}
                    <ListItemText
                      primary={link.label}
                      primaryTypographyProps={{
                        fontSize: '1rem',
                        fontWeight: 500,
                        color: 'white',
                      }}
                    />
                  </ListItem>

                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>

    </>
  );
}

export default NavigationBar;
