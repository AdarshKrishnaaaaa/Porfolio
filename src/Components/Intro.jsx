import React from 'react';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';

function Intro() {
  return (
    <>
      <Box
        component="section"
        sx={{
          p: 2,
          height: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          rowGap: '1rem',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Box component="section" sx={{ p: 2, position: 'relative', zIndex: 1 }}>
            <Typography variant="h1" sx={{ textAlign: 'center', fontWeight: 'bold', color: '#CCF5FE', fontSize: { xs: '27px', sm: '42px', md: '60px' } }}>
              Hi, I'm Adarsh
            </Typography>
            <motion.div
              animate={{
                color: ['#319CB5', '#ffffff00', '#319CB5'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: { xs: '38px', sm: '62px', md: '80px' },
                }}
              >
                FullStack Developer
              </Typography>
            </motion.div>

            <Typography variant="h1" sx={{ textAlign: 'center', fontWeight: 'bold', color: '#CCF5FE', fontSize: { xs: '16px', sm: '32px', md: '40px' } }}>
              Based in India.
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Button
            variant="outlined"
            sx={{
              border: 'solid #319CB5 1px',
              color: 'white',
              textTransform: 'capitalize'
            }}
            onClick={() => {
              const section = document.getElementById("my-projects");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Show My Works
          </Button>
        </motion.div>
      </Box>
    </>
  );
}

export default Intro;
