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
    { label: 'About', to: 'about' },
    { label: 'Contact', to: 'contact' },
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
            variant="h5"
            component={'a'}
            className='logo'
            href='/'
            sx={{
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, white, #319CB5)', // You can change these colors
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
              cursor: 'pointer'
            }}
          >
            AK
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
              {navLinks.map((link, index) => (
                <Link to={link.to} smooth={true} duration={500} key={link.label}>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Button
                      sx={{
                        color: '#ffffff',
                        textTransform: 'capitalize',
                        fontWeight: 500,
                        fontSize: '1rem',
                        gap: 1,
                        position: 'relative',
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
                      {link.label}
                    </Button>
                  </motion.div>
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
            backdropFilter: 'blur(.5rem)',
          },
        }}
      >
        <Box sx={{ width: 150, mt: 2 }}>
          <List>
            {navLinks.map((link, index) => (
              <Link to={link.to} smooth={true} duration={500}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
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
                </motion.div>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>

    </>
  );
}

export default NavigationBar;
