import { Box, Chip, Typography, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const skills = [
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Express",
    logo: "https://skillicons.dev/icons?i=express",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Bootstrap",
    logo: "https://cdn.simpleicons.org/reactbootstrap/41E0FD",
  },
  {
    name: "Tailwind CSS",
    logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "Material UI",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  },
  {
    name: "SQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Postman",
    logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
  {
    name: "Vercel",
    logo: "https://skillicons.dev/icons?i=vercel",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    logo: "https://skillicons.dev/icons?i=github",
  },
  {
    name: "Razorpay",
    logo: "https://cdn.simpleicons.org/razorpay/0C7B93",
  },
  {
    name: "Stripe",
    logo: "https://cdn.simpleicons.org/stripe/635BFF",
  },
  {
    name: "C",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    name: "C++",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
];

const SkillsSection = () => {
  return (
    <Element name="skills">
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          px: { xs: 2, sm: 3 },
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            maxWidth: "1200px",
            mx: "auto",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "0.8fr 1.2fr",
              },
              gap: { xs: 6, md: 10 },
              alignItems: "center",
            }}
          >
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Typography
                sx={{
                  color: "#319CB5",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.2rem",
                  textTransform: "uppercase",
                  mb: 2,
                }}
              >
                Technical Expertise
              </Typography>

              <Typography
                component="h2"
                sx={{
                  color: "#fff",
                  fontSize: {
                    xs: "2.3rem",
                    sm: "3rem",
                    md: "4rem",
                  },
                  lineHeight: 1.05,
                  fontWeight: 600,
                  letterSpacing: "-0.04em",
                  mb: 3,
                }}
              >
                Tools I use to{" "}
                <Box
                  component="span"
                  sx={{
                    color: "#319CB5",
                  }}
                >
                  build.
                </Box>
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255,255,255,0.6)",
                  maxWidth: "430px",
                  lineHeight: 1.8,
                  fontSize: "0.95rem",
                }}
              >
                I work across modern frontend and backend technologies to create
                responsive websites, scalable web applications, and smooth
                digital experiences.
              </Typography>

              <Box
                sx={{
                  mt: 4,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    width: 45,
                    height: "1px",
                    backgroundColor: "#319CB5",
                  }}
                />

                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.45)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.12rem",
                    textTransform: "uppercase",
                  }}
                >
                  Always learning · Always improving
                </Typography>
              </Box>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1.5,
                  justifyContent: {
                    xs: "flex-start",
                    md: "flex-end",
                  },
                }}
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.04,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.2,
                        px: 2,
                        py: 1.3,
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "10px",
                        backgroundColor: "rgba(255,255,255,0.02)",
                        transition: "all 0.3s ease",
                        cursor: "default",

                        "&:hover": {
                          borderColor: "rgba(49,156,181,0.7)",
                          backgroundColor: "rgba(49,156,181,0.08)",
                          boxShadow: "0 10px 30px rgba(49,156,181,0.12)",
                        },
                      }}
                    >
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        style={{
                          width: 28,
                          height: 28,
                          objectFit: "contain",
                        }}
                      />

                      <Typography
                        sx={{
                          color: "#fff",
                          fontSize: "0.85rem",
                          fontWeight: 500,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {skill.name}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Box>
    </Element>
  );
};

export default SkillsSection;
