import React, { useState } from 'react';
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

function NavigationBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navLinks = ['About', 'Projects'];

  const handleScroll = (id) => {
    const section = document.getElementById(id.toLowerCase());
    section?.scrollIntoView({ behavior: 'smooth' });
    setDrawerOpen(false); // close drawer on click
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const text = "PortFolio";

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: 'transparent',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
          padding: '0.3rem 1rem',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#ffffff',
              letterSpacing: 1.5,
              cursor: 'pointer',
            }}
          >
            {text.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: index * 0.1, // Delay per letter
                  duration: 0.5, // Duration for each letter's appearance
                }}
                style={{ color: index === 4 ? '#319CB5' : '#ffffff' }} // Color change for 'F'
              >
                {char}
              </motion.span>
            ))}
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
                <Button
                  key={link}
                  onClick={() => handleScroll(link)}
                  sx={{
                    color: '#ffffff',
                    textTransform: 'capitalize',
                    fontWeight: 500,
                    fontSize: '1rem',
                    '&:hover': {
                      color: '#319CB5',
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  {link}
                </Button>
              ))}
            </Stack>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 150, mt: 2 }}>
          <List>
            {navLinks.map((link) => (
              <ListItem
                button
                key={link}
                onClick={() => handleScroll(link)}
              >
                <ListItemText
                  primary={link}
                  primaryTypographyProps={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: '#319CB5',
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default NavigationBar;
