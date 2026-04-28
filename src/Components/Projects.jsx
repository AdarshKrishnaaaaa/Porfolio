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

import weatherAppImg from "../assets/ProjectImg1.png";
import expensioImg from "../assets/ProjectImg2.png";
import appStoreImg from "../assets/ProjectImg3.png";
import helloWorldAppImg from "../assets/ProjectImg4.png";

function Projects() {
  return (
    <Element name="project">
      <Box
        sx={{
          color: "white",
          py: 15,
          px: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 10,
        }}
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h4" letterSpacing=".5rem" sx={{ mb: 10 }}>
            Projects
          </Typography>
        </motion.div>

        {/* Cards */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
          }}
        >
          {[
            {
              title: "Weather App",
              description:
                "Real-time weather updates with live API integration.",
              image: weatherAppImg,
              tech: ["HTML", "CSS", "Javascript", "API"],
              live: "https://weather-app-kappa-six-78.vercel.app/",
              link: "https://github.com/AdarshKrishnaaaaa/WeatherApp",
            },
            {
              title: "Expensio",
              description: "Track and analyze daily expenses with smart UI.",
              image: expensioImg,
              tech: ["HTML", "CSS", "Javascript", "Bootstrap", "TailwindCSS"],
              live: "https://expense-tracker-seven-phi-24.vercel.app/",
              link: "https://github.com/AdarshKrishnaaaaa/Expense-Tracker",
            },
            {
              title: "App Store",
              description: "Online product management and browsing system.",
              image: appStoreImg,
              tech: ["HTML", "CSS", "Javascript"],
              live: "https://online-website-chi.vercel.app/",
              link: "https://github.com/AdarshKrishnaaaaa/Online-Website",
            },
            {
              title: "Chat App",
              description: "Real-time MERN chat with authentication & sockets.",
              image: helloWorldAppImg,
              tech: ["MERN", "Socket.io"],
              live: "https://chat-app-99s1.onrender.com/",
              link: "https://github.com/AdarshKrishnaaaaa/Chat-App",
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </Box>
      </Box>
    </Element>
  );
}

function ProjectCard({ title, description, image, tech, link, live }) {
  return (
    <Card
      sx={{
        width: { xs: "20rem", md: "24rem" },
        borderRadius: 4,
        overflow: "hidden",
        background: "rgba(3, 24, 31, 0.7)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.2)",
        transition: "0.3s",
        position: "relative",

        "&:hover": {
          transform: "translateY(-10px) scale(1.02)",
          boxShadow: "0 0 30px rgba(0,255,255,0.5)",
        },
      }}
    >
      {/* Image with overlay */}
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <CardMedia
          component="img"
          height="220"
          image={image}
          alt={title}
          sx={{
            transition: "0.4s",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        />

        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            opacity: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            transition: "0.3s",
            "&:hover": { opacity: 1 },
          }}
        >
          <Button
            variant="outlined"
            href={link}
            target="_blank"
            sx={{
              color: "#CCF5FE",
              borderColor: "#CCF5FE",
            }}
          >
            Code
          </Button>
        </Box>
      </Box>

      <CardContent>
        <Typography
          variant="h4"
          sx={{ color: "#fff", fontWeight: "bold", textAlign: "center" }}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          sx={{ textAlign: "center", color: "#CCF5FE", mt: 1 }}
        >
          {description}
        </Typography>

        {/* Tech Stack */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 1,
            mt: 2,
          }}
        >
          {tech.map((t, i) => (
            <Chip
              key={i}
              label={t}
              size="small"
              sx={{
                background: "rgba(204,245,254,0.2)",
                color: "#ffffff",
              }}
            />
          ))}
        </Box>
      </CardContent>

      <CardActions sx={{ justifyContent: "center", pb: 2 }}>
        <Button
          variant="text"
          href={live}
          target="_blank"
          sx={{ color: "#CCF5FE" }}
        >
          View Project →
        </Button>
      </CardActions>
    </Card>
  );
}

export default Projects;
