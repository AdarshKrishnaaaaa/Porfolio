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
                I’m a passionate MERN Stack Developer with hands-on experience
                in building full-stack web applications using React.js, Node.js,
                Express.js, and MongoDB. I enjoy creating scalable, responsive,
                and user-friendly applications that solve real-world problems. I
                have completed my BCA degree and a Full Stack Development
                training at Camerin Folks Pvt Ltd, where I also gained practical
                experience as a MERN Stack Developer Intern. During this time, I
                worked on real-world projects and developed strong skills in API
                development, CRUD operations, and application architecture. I
                also have experience working as an RPA Developer, which helped
                me understand automation and professional workflows. I have
                built projects such as a real-time chat application, weather
                forecast app, and an expense tracker, which helped me strengthen
                my problem-solving skills and technical knowledge. I’m a quick
                learner and a team player who enjoys working on challenging
                problems and continuously improving my skills. I am currently
                seeking an opportunity to start my career as a software engineer
                and contribute to building efficient and impactful web
                applications.
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Element>
  );
};

export default About;
