import aboutCardImg from '../assets/aboutCardImg.jpg';
import { Box, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';

function About() {
  const cardProps = {
    cardTexts: [
      "Always learning and improving.",
      "Excited about creating solutions and learning new technologies."
    ],
    cardHeadings: [
      'My Tech Stack',
      'Tech Enthusiast & Developer'
    ]
  };

  const MotionButton = motion(Button);

  return (
    <>
      <Box component="section" sx={{
        pb: '10rem',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        {/* Image + Text Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Box component="section"
            sx={{
              width: { xs: '20rem', sm: '35rem', md: '40rem' },
              height: '24rem',
              borderRadius: '2rem',
              overflow: 'hidden',
              zIndex: '1',
              position: 'relative',
              display: 'flex',
            }}
          >
            <img
              src={aboutCardImg}
              alt="About card"
              style={{
                width: '40rem',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: -1,
                display: 'flex',
              }}
            />

            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                backdropFilter: 'blur(1.5px)',
                color: 'white',
                p: 4,
                textAlign: 'start',
              }}
            >
              <Typography variant="body1" sx={{ mb: 1, fontSize: { xs: '13px', sm: '17px', md: '17px' } }}>
                Skilled MERN stack developer with hands-on experience in over 5 projects.
              </Typography>
              <Typography sx={{
                fontWeight: 'bold', fontSize: {
                  xs: '1.5rem',
                  sm: '2rem',
                }
              }}>
                Passionate Developer Ready to Take On New Challenges
              </Typography>
              <a href="/Resume.pdf" download="Adarsh Resume.pdf" style={{ textDecoration: 'none' }}>
                <MotionButton
                  variant="outlined"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 1.0,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  sx={{
                    width: { xs: '100%', sm: '50%' },
                    border: 'solid #319CB5 1px',
                    color: 'white',
                    textTransform: 'capitalize'
                  }}
                >
                  Download Resume
                </MotionButton>
              </a>
            </Box>
          </Box>
        </motion.div>

        {/* Info Text Cards */}
        <Box
          component="section"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center',
          }}
        >
          {cardProps.cardTexts.map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              <Box
                component="section"
                sx={{
                  width: { xs: '20rem', sm: '35rem', md: '40rem', lg: '35rem' },
                  minHeight: '11.5rem',
                  borderRadius: '2rem',
                  overflow: 'hidden',
                  background: 'linear-gradient(to top, #03181F, #319CB5)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  zIndex: 1,
                  p: 2
                }}
              >
                <Typography
                  variant='body1'
                  sx={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: { xs: '14px', sm: '17px', md: '17px' },
                    mt: 1,
                  }}
                >
                  {text}
                </Typography>
                <Typography
                  sx={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: { xs: '22px', sm: '26px', md: '34px' },
                    fontWeight: 'bold',
                    wordBreak: 'break-word',
                  }}
                >
                  {cardProps.cardHeadings[index]}
                </Typography>
              </Box>
            </motion.div>
          ))}

        </Box>
      </Box>
    </>
  );
}

export default About;
