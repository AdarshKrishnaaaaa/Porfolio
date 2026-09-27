import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import "../App.css";

function Intro() {
  return (
    <Box
      component="section"
      sx={{
        minHeight: "100vh",
        px: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Box
          sx={{
            maxWidth: "1000px",
            mx: "auto",
          }}
        >
          {/* Small Intro */}
          <Typography
            sx={{
              color: "#319CB5",
              fontSize: { xs: "16px", sm: "18px" },
              fontWeight: 500,
              mb: 1.5,
            }}
          >
            Hi, I'm Adarsh Krishna
          </Typography>

          {/* Main Heading */}
          <Typography
            component="h1"
            sx={{
              color: "#CCF5FE",
              fontSize: {
                xs: "38px",
                sm: "52px",
                md: "72px",
              },
              lineHeight: 1.1,
              fontWeight: 700,
              mb: 1,
            }}
          >
            Full-Stack Developer
          </Typography>

          {/* Highlight */}
          <motion.div
            animate={{
              color: ["#319CB5", "#CCF5FE", "#319CB5"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Typography
              component="h2"
              sx={{
                fontSize: {
                  xs: "25px",
                  sm: "34px",
                  md: "48px",
                },
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              & Freelance Web Developer
            </Typography>
          </motion.div>

          {/* Description */}
          <Typography
            sx={{
              color: "#b8c9ce",
              fontSize: {
                xs: "16px",
                sm: "18px",
                md: "20px",
              },
              lineHeight: 1.7,
              maxWidth: "500px",
              mx: "auto",
              mt: 3,
            }}
          >
            I build modern, responsive websites and web applications
            designed to help businesses grow online.
          </Typography>

          {/* Buttons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              mt: 4,
              flexWrap: "wrap",
            }}
          >
            {/* View Projects */}
            <Link to="projects" smooth={true} duration={500}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#319CB5",
                  color: "#fff",
                  textTransform: "none",
                  borderRadius: "2rem",
                  px: 3,
                  py: 1.2,
                  fontSize: "1rem",
                  "&:hover": {
                    backgroundColor: "#27859b",
                  },
                }}
                // onClick={() => {
                //   const section = document.getElementById("projects");
                //   section?.scrollIntoView({ behavior: "smooth" });
                // }}
              >
                View My Work →
              </Button>
            </Link>

            {/* Start Project */}
            <Link to="contact" smooth={true} duration={500}>
              <Button
                variant="outlined"
                sx={{
                  color: "#CCF5FE",
                  borderColor: "#319CB5",
                  textTransform: "none",
                  borderRadius: "2rem",
                  px: 3,
                  py: 1.2,
                  fontSize: "1rem",
                  "&:hover": {
                    borderColor: "#CCF5FE",
                    backgroundColor: "rgba(49, 156, 181, 0.08)",
                  },
                }}
              >
                Start a Project →
              </Button>
            </Link>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
}

export default Intro;