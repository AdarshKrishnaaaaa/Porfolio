import React from "react";
import { Typography, Container, Box, Avatar, Divider } from "@mui/material";
import { motion } from "framer-motion";
import Person from "../assets/Person.png";
import { Element } from "react-scroll";

const About = () => {
  return (
    <Element name="about">
      <Container maxWidth="lg" sx={{ pt: "10rem", mt: "3rem", mb: "10rem" }}>
        {/* About Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            letterSpacing=".5rem"
            sx={{
              color: "#fff",
              mb: "3rem",
            }}
          >
            About
          </Typography>

          <Divider sx={{ my: 5, borderColor: "#319CB5" }} />
        </motion.div>

        {/* Image + Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        >
          <Box
            display="flex"
            flexDirection={{ xs: "column", sm: "column", lg: "row" }}
            alignItems="center"
            gap={10}
            sx={{
              mt: 4,
              p: 0,
              backgroundColor: "transparent",
            }}
          >
            {/* Left - Image */}
            <Avatar
              alt="Adarsh Krishna"
              src={Person}
              sx={{
                width: { xs: 290, md: 440 },
                height: { xs: 350, md: 500 },
              }}
            />

            {/* Right - Text Content */}
            <Box padding="1rem">
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: 500,
                  color: "#fff",
                  textAlign: { xs: "center", sm: "center", lg: "start" },
                }}
              >
                I am Adarsh Krishna,
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mt: 2,
                  lineHeight: 1.8,
                  color: "#CCF5FE",
                  textAlign: { xs: "center", sm: "center", lg: "start" },
                }}
              >
                I am a passionate Full-Stack Web Developer specializing in the
                MERN stack, with hands-on experience building responsive and
                scalable web applications. I completed a 6-month MERN stack
                internship and training at Camerin Folks Pvt Ltd, where I gained
                practical experience in real-world development. I have strong
                skills in developing RESTful APIs, managing databases, and
                creating efficient front-end and back-end solutions. I focus on
                writing clean, maintainable code and enjoy solving real-world
                problems while working in Agile environments.
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Element>
  );
};

export default About;
