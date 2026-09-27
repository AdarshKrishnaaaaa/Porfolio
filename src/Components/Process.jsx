import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const steps = [
  {
    number: "01",
    title: "Discuss",
    description:
      "We discuss your business, requirements, goals, and the type of website you need.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "I define the pages, features, content structure, and project scope before development begins.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "I design and develop your website with a focus on performance, responsiveness, and user experience.",
  },
  {
    number: "04",
    title: "Review",
    description:
      "You review the website, share your feedback, and I make the agreed revisions.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "I deploy the website and help with the final setup so your business is ready to go online.",
  },
];

const Process = () => {
  return (
    <Element>
      <Box
        sx={{
          py: { xs: 9, md: 14 },
        }}
      >
        <Container maxWidth="lg">
          {/* Header */}
          <Box
            sx={{
              textAlign: "center",
              maxWidth: 750,
              mx: "auto",
              mb: { xs: 7, md: 10 },
            }}
          >
            <Typography
              sx={{
                color: "#319CB5",
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                mb: 2,
              }}
            >
              HOW IT WORKS
            </Typography>

            <Typography
              component="h2"
              sx={{
                color: "#fff",
                fontSize: {
                  xs: "2.3rem",
                  sm: "3rem",
                  md: "3.7rem",
                },
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                mb: 3,
              }}
            >
              From idea to
              <Box
                component="span"
                sx={{
                  color: "#319CB5",
                  ml: { xs: 0, sm: 1 },
                }}
              >
                launch.
              </Box>
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.65)",
                fontSize: { xs: "1rem", md: "1.05rem" },
                lineHeight: 1.8,
              }}
            >
              A simple and transparent process designed to keep your project
              organized from the first conversation to the final launch.
            </Typography>
          </Box>

          {/* Process */}
          <Box
            sx={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(5, 1fr)",
              },
              gap: { xs: 0, md: 3 },
            }}
          >
            {/* Desktop connecting line */}
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                position: "absolute",
                top: 27,
                left: "10%",
                right: "10%",
                height: "1px",
                backgroundColor: "rgba(49,156,181,0.35)",
                zIndex: 0,
              }}
            />

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    textAlign: { xs: "left", md: "center" },
                    pb: { xs: 5, md: 0 },
                    pl: { xs: 6, md: 0 },

                    "&::before": {
                      content: '""',
                      display: { xs: "block", md: "none" },
                      position: "absolute",
                      left: 12,
                      top: 28,
                      bottom: index === steps.length - 1 ? 0 : -8,
                      width: "1px",
                      backgroundColor: "rgba(49,156,181,0.35)",
                    },
                  }}
                >
                  {/* Step number */}
                  <Box
                    sx={{
                      position: "absolute",
                      left: { xs: 0, md: "50%" },
                      top: 0,
                      transform: {
                        xs: "none",
                        md: "translateX(-50%)",
                      },
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#0a192f",
                      border: "1px solid rgba(49,156,181,0.6)",
                      color: "#319CB5",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      boxShadow: "0 0 25px rgba(49,156,181,0.08)",
                    }}
                  >
                    {step.number}
                  </Box>

                  {/* Content */}
                  <Box
                    sx={{
                      pt: { xs: 0.5, md: 10 },
                      pl: 3
                    }}
                  >
                    <Typography
                      component="h3"
                      sx={{
                        color: "#fff",
                        fontSize: "1.2rem",
                        fontWeight: 600,
                        mb: 1.5,
                      }}
                    >
                      {step.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "rgba(255,255,255,0.58)",
                        fontSize: "0.92rem",
                        lineHeight: 1.7,
                        maxWidth: { xs: 500, md: 210 },
                        mx: { xs: 0, md: "auto" },
                      }}
                    >
                      {step.description}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>
    </Element>
  );
};

export default Process;