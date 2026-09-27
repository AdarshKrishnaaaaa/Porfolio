import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { useState } from "react";

import weatherAppImg from "../assets/ProjectImg1.png";
import expensioImg from "../assets/ProjectImg2.png";
import appStoreImg from "../assets/ProjectImg3.png";
import helloWorldAppImg from "../assets/ProjectImg4.png";
import windowTouchImg from "../assets/ProjectImg5.png";
import riolabzImg from "../assets/ProjectImg6.png";
import travonImg from "../assets/ProjectImg7.png";

const projects = [
  {
    title: "TRAVON",
    category: "Travel Agency Website",
    description:
      "A modern, responsive travel agency website built to showcase tour packages, travel services, destinations, and booking enquiries with a premium user experience.",
    type: "Full-Stack · Freelance Project",
    image: travonImg,
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Material UI",
    ],
    live: "https://travontravel.in/",
    link: "https://github.com/travontravel/Travon-Client",
  },
  {
    title: "Riolabz",
    category: "Website Redesign",
    description:
      "A modern, responsive redesign of the Riolabz website focused on improving UI/UX, accessibility, smooth animations, and cross-device responsiveness.",
    type: "Frontend · Personal Project",
    image: riolabzImg,
    tech: ["React.js", "Material UI", "CSS3", "Framer Motion"],
    live: "https://riolabz-redesign.vercel.app/",
    link: "https://github.com/AdarshKrishnaaaaa/riolabz-redesign",
  },
  {
    title: "Window Touch",
    category: "Business Website",
    description:
      "A responsive interior design website showcasing premium curtains, blinds, and upholstery with a modern interface and seamless browsing experience.",
    type: "Full-Stack · Personal Project · In Progress",
    image: windowTouchImg,
    tech: ["React.js", "Bootstrap", "Material UI", "Tailwind CSS"],
    live: "https://window-touch.vercel.app/",
    link: "https://github.com/AdarshKrishnaaaaa/Window-Touch-client",
  },
  {
    title: "HelloWorld",
    category: "Real-Time Chat Application",
    description:
      "A full-stack real-time chat application featuring secure JWT authentication, instant messaging with Socket.IO, and a responsive MERN architecture.",
    type: "Full-Stack · Internship Project",
    image: helloWorldAppImg,
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Socket.io",
    ],
    live: "https://helloworld-chat.vercel.app/login",
    link: "https://github.com/AdarshKrishnaaaaa/Chat-App-frontend",
  },
  {
    title: "Expensio",
    category: "Expense Tracker",
    description:
      "A responsive expense tracker that helps users manage daily spending through an intuitive interface, expense categorization, and real-time balance tracking.",
    type: "Frontend · Internship Project",
    image: expensioImg,
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind CSS"],
    live: "https://expense-tracker-onlinee.vercel.app/",
    link: "https://github.com/AdarshKrishnaaaaa/Expense-Tracker",
  },
  {
    title: "Weather App",
    category: "Weather Application",
    description:
      "A weather forecasting application that provides real-time weather conditions, temperature, humidity, and location-based updates using a live weather API.",
    type: "Frontend · Personal Project",
    image: weatherAppImg,
    tech: ["HTML", "CSS", "JavaScript", "API"],
    live: "https://weather-forecasttt.vercel.app/",
    link: "https://github.com/AdarshKrishnaaaaa/WeatherApp",
  },
  {
    title: "App Store",
    category: "E-commerce Interface",
    description:
      "A responsive e-commerce product showcase featuring product browsing, category-based navigation, and a clean, user-friendly shopping interface.",
    type: "Frontend · Personal Project · Template Customized",
    image: appStoreImg,
    tech: ["HTML", "CSS", "JavaScript"],
    live: "http://app-store-onlinee.vercel.app/",
    link: "https://github.com/AdarshKrishnaaaaa/Online-Website",
  },
];

function Projects() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <Element name="projects">
      <Box
        component="section"
        sx={{
          color: "white",
          py: { xs: 10, md: 15 },
          px: { xs: 2, sm: 4, md: 6 },
          mt: { xs: 5, md: 10 },
        }}
      >
        <Box
          sx={{
            maxWidth: "1200px",
            mx: "auto",
          }}
        >
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                textAlign: "center",
                mb: { xs: 6, md: 8 },
              }}
            >
              <Typography
                sx={{
                  color: "#319CB5",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  letterSpacing: "2px",
                  mb: 1.5,
                }}
              >
                SELECTED WORK
              </Typography>

              <Typography
                component="h2"
                sx={{
                  color: "#CCF5FE",
                  fontSize: {
                    xs: "32px",
                    sm: "42px",
                    md: "52px",
                  },
                  fontWeight: 700,
                  lineHeight: 1.15,
                }}
              >
                Featured Work
              </Typography>

              <Typography
                sx={{
                  color: "#9fb4ba",
                  maxWidth: "650px",
                  mx: "auto",
                  mt: 2,
                  fontSize: {
                    xs: "15px",
                    sm: "16px",
                    md: "18px",
                  },
                  lineHeight: 1.7,
                }}
              >
                A selection of websites and web applications I've designed
                and developed.
              </Typography>
            </Box>
          </motion.div>

          {/* Project Cards */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr",
              },
              gap: { xs: 3, md: 4 },
            }}
          >
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </Box>

          {/* See More / Show Less */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 6,
            }}
          >
            <Button
              variant="outlined"
              onClick={() => setShowAll((prev) => !prev)}
              sx={{
                color: "#CCF5FE",
                borderColor: "#319CB5",
                textTransform: "none",
                borderRadius: "2rem",
                px: 4,
                py: 1.2,
                fontSize: "1rem",
                transition: "all 0.3s ease",

                "&:hover": {
                  borderColor: "#CCF5FE",
                  backgroundColor: "rgba(49, 156, 181, 0.1)",
                },
              }}
            >
              {showAll ? "Show Less ↑" : "See More Projects →"}
            </Button>
          </Box>
        </Box>
      </Box>
    </Element>
  );
}

function ProjectCard({
  title,
  category,
  description,
  type,
  image,
  tech,
  link,
  live,
}) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 4,
        overflow: "hidden",
        background: "rgba(3, 24, 31, 0.7)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(204, 245, 254, 0.14)",
        transition: "all 0.35s ease",

        "&:hover": {
          transform: "translateY(-8px)",
          borderColor: "rgba(49, 156, 181, 0.6)",
          boxShadow: "0 15px 40px rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      {/* Project Image */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={`${title} - ${category}`}
          sx={{
            height: {
              xs: "210px",
              sm: "230px",
            },
            objectFit: "cover",
            transition: "transform 0.5s ease",

            "&:hover": {
              transform: "scale(1.04)",
            },
          }}
        />

        {/* Category */}
        <Box
          sx={{
            position: "absolute",
            left: 16,
            bottom: 16,
          }}
        >
          <Chip
            label={category}
            size="small"
            sx={{
              backgroundColor: "rgba(3, 24, 31, 0.88)",
              backdropFilter: "blur(8px)",
              color: "#CCF5FE",
              border: "1px solid rgba(204, 245, 254, 0.2)",
              fontWeight: 500,
            }}
          />
        </Box>
      </Box>

      {/* Content */}
      <CardContent
        sx={{
          px: { xs: 2.5, sm: 3 },
          pt: 3,
          pb: 1,
          flexGrow: 1,
        }}
      >
        {/* Project Name */}
        <Typography
          component="h3"
          sx={{
            color: "#ffffff",
            fontSize: {
              xs: "25px",
              sm: "28px",
            },
            fontWeight: 700,
          }}
        >
          {title}
        </Typography>

        {/* Project Type */}
        <Typography
          sx={{
            color: "#319CB5",
            fontSize: "0.85rem",
            fontWeight: 500,
            mt: 0.5,
          }}
        >
          {type}
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            color: "#b5c8cd",
            fontSize: "14px",
            lineHeight: 1.7,
            mt: 1.5,
          }}
        >
          {description}
        </Typography>

        {/* Technologies */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 0.8,
            mt: 2.5,
          }}
        >
          {tech.map((technology) => (
            <Chip
              key={technology}
              label={technology}
              size="small"
              sx={{
                backgroundColor: "rgba(204, 245, 254, 0.08)",
                color: "#CCF5FE",
                border: "1px solid rgba(204, 245, 254, 0.12)",
                fontSize: "0.72rem",
              }}
            />
          ))}
        </Box>
      </CardContent>

      {/* Actions */}
      <CardActions
        sx={{
          px: { xs: 2.5, sm: 3 },
          pb: 3,
          pt: 2,
          gap: 1,
        }}
      >
        <Button
          variant="contained"
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: "#319CB5",
            color: "#ffffff",
            textTransform: "none",
            borderRadius: "2rem",
            px: 2.5,

            "&:hover": {
              backgroundColor: "#27859b",
            },
          }}
        >
          View Project →
        </Button>

        <Button
          variant="outlined"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#CCF5FE",
            borderColor: "rgba(204, 245, 254, 0.35)",
            textTransform: "none",
            borderRadius: "2rem",
            px: 2.5,

            "&:hover": {
              borderColor: "#319CB5",
              backgroundColor: "rgba(49, 156, 181, 0.08)",
            },
          }}
        >
          View Code
        </Button>
      </CardActions>
    </Card>
  );
}

export default Projects;