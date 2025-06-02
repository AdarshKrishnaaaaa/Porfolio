import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import '../App.css'
import { Link } from 'react-scroll';

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
          <Link to="project" smooth={true} duration={500}>
            <Button
              variant="outlined"
              className='btn'
              sx={{
                color: 'Black',
                textTransform: 'capitalize',
                border: 'none',
                borderRadius: '2rem',
                fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onClick={() => {
                const section = document.getElementById("projects");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              See My Works
            </Button>
          </Link>
        </motion.div>
      </Box>
    </>
  );
}

export default Intro;
