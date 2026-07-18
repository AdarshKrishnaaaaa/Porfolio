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
import windowTouchImg from "../assets/ProjectImg5.png";
import riolabzImg from "../assets/ProjectImg6.png";

function Projects() {
  return (
    <Element name="projects">
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
              title: "Riolabz",
              description:
                "A modern, responsive redesign of the Riolabz website focused on enhancing UI/UX, accessibility, smooth animations, and cross-device responsiveness. (Frontend-only)",
              image: riolabzImg,
              tech: ["React.js", "Material UI", "CSS3", "Framer Motion"],
              live: "https://riolabz-redesign.vercel.app/",
              link: "https://github.com/AdarshKrishnaaaaa/riolabz-redesign",
            },
            {
              title: "Window Touch",
              description:
                "A responsive interior design website showcasing premium curtains, blinds, and upholstery with a modern user interface and seamless browsing experience. (In Progress)",
              image: windowTouchImg,
              tech: ["React.js", "Bootstrap", "Material UI", "Tailwind CSS"],
              live: "https://window-touch-client.vercel.app/",
              link: "https://github.com/AdarshKrishnaaaaa/Window-Touch-client",
            },
            {
              title: "HelloWorld",
              description:
                "A full-stack real-time chat application featuring secure JWT authentication, instant messaging with Socket.IO, and a responsive MERN architecture.",
              image: helloWorldAppImg,
              tech: [
                "MongoDB",
                "Express.js",
                "React.js",
                "Node.js",
                "Socket.io",
              ],
              live: "https://chat-app-99s1.onrender.com/",
              link: "https://github.com/AdarshKrishnaaaaa/Chat-App",
            },
            {
              title: "Expensio",
              description:
                "A responsive expense tracker that helps users manage daily spending through an intuitive interface, expense categorization, and real-time balance tracking.",
              image: expensioImg,
              tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind CSS"],
              live: "https://expense-tracker-seven-phi-24.vercel.app/",
              link: "https://github.com/AdarshKrishnaaaaa/Expense-Tracker",
            },
            {
              title: "Weather App",
              description:
                "A weather forecasting application that delivers real-time weather conditions, temperature, humidity, and location-based updates using a live weather API.",
              image: weatherAppImg,
              tech: ["HTML", "CSS", "JavaScript", "API"],
              live: "https://weather-app-kappa-six-78.vercel.app/",
              link: "https://github.com/AdarshKrishnaaaaa/WeatherApp",
            },
            {
              title: "App Store",
              description:
                "A responsive e-commerce product showcase template featuring product browsing, category-based navigation, and a clean, user-friendly shopping interface. (Template Customized)",
              image: appStoreImg,
              tech: ["HTML", "CSS", "JavaScript"],
              live: "https://online-website-chi.vercel.app/",
              link: "https://github.com/AdarshKrishnaaaaa/Online-Website",
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
