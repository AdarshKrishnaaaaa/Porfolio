import aboutCardImg from "../assets/aboutCardImg.jpg";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

function About() {
  const cardProps = {
    cardTexts: [
      "Always learning and improving.",
      "Excited about creating solutions and learning new technologies.",
    ],
    cardHeadings: ["My Tech Stack", "Tech Enthusiast & Developer"],
  };

  const MotionButton = motion(Button);

  return (
    <>
      <Box
        component="section"
        sx={{
          pb: "10rem",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        {/* Image + Text Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Box
            component="section"
            sx={{
              width: { xs: "20rem", sm: "35rem", md: "40rem" },
              height: "24rem",
              borderRadius: "2rem",
              overflow: "hidden",
              zIndex: "1",
              position: "relative",
              display: "flex",
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 12px 35px rgba(0, 255, 255, 0.4)",
                border: "2px solid rgba(204, 245, 254, 0.8)",
              },
            }}
          >
            <img
              src={aboutCardImg}
              alt="About card"
              style={{
                width: "40rem",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: -1,
                display: "flex",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                backdropFilter: "blur(1.5px)",
                color: "white",
                p: 4,
                textAlign: "start",
              }}
            >
              <Typography
                variant="body1"
                sx={{ mb: 1, fontSize: { xs: "13px", sm: "17px", md: "17px" } }}
              >
                Skilled MERN stack developer with hands-on experience in over 5
                projects.
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: {
                    xs: "1.5rem",
                    sm: "2rem",
                  },
                }}
              >
                Passionate Developer Ready to Take On New Challenges
              </Typography>
              <a
                href="/Adarsh_Krishna-FullStack.pdf"
                download="Adarsh Resume.pdf"
                style={{ textDecoration: "none" }}
              >
                <MotionButton
                  variant="outlined"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  sx={{
                    width: { xs: "100%", sm: "50%" },
                    border: "solid #319CB5 1px",
                    color: "white",
                    textTransform: "capitalize",
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
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
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
                  width: { xs: "20rem", sm: "35rem", md: "40rem", lg: "35rem" },
                  minHeight: "11.5rem",
                  borderRadius: "2rem",
                  overflow: "hidden",
                  background: "rgba(3, 24, 31, 0.5)", // Glass effect
                  backdropFilter: "blur(12px)",
                  border: "2px solid rgba(255, 255, 255, 0.15)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  p: 2,
                  boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 12px 35px rgba(0, 255, 255, 0.4)",
                    border: "2px solid rgba(204, 245, 254, 0.8)",
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(135deg, rgba(49, 156, 181, 0.4), rgba(3, 24, 31, 0.4))",
                    zIndex: 0,
                  },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "center",
                    color: "#CCF5FE",
                    fontSize: { xs: "14px", sm: "17px", md: "17px" },
                    mt: 1,
                    zIndex: 1,
                  }}
                >
                  {text}
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "white",
                    fontSize: { xs: "22px", sm: "26px", md: "34px" },
                    fontWeight: "bold",
                    wordBreak: "break-word",
                    zIndex: 1,
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
