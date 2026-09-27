import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const benefits = [
  {
    number: "01",
    title: "Custom-Designed Websites",
    description:
      "Every website is built around your business, goals, audience, and brand instead of relying on a one-size-fits-all template.",
  },
  {
    number: "02",
    title: "Responsive on Every Device",
    description:
      "Your website is designed to provide a smooth experience across mobile, tablet, laptop, and desktop screens.",
  },
  {
    number: "03",
    title: "Modern UI & Interactions",
    description:
      "Clean interfaces, thoughtful layouts, smooth animations, and intuitive interactions create a professional digital experience.",
  },
  {
    number: "04",
    title: "Full-Stack Development",
    description:
      "From frontend interfaces to backend APIs, databases, authentication, and integrations, I can build complete web solutions.",
  },
  {
    number: "05",
    title: "Direct Communication",
    description:
      "You communicate directly with the developer working on your project, making requirements, feedback, and updates easier to manage.",
  },
  {
    number: "06",
    title: "Deployment & Support",
    description:
      "I can help with deployment, domain setup, testing, and post-launch updates so your website is ready to go live.",
  },
];

const WhyWorkWithMe = () => {
  return (
    <Element name="why-work-with-me">
      <Box
        sx={{
          py: { xs: 9, md: 14 },
        //   background:
        //     "linear-gradient(180deg, #07111f 0%, #0a192f 100%)",
        }}
      >
        <Container maxWidth="lg">
          {/* Section Header */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "0.8fr 1.2fr" },
              gap: { xs: 5, md: 10 },
              mb: { xs: 7, md: 10 },
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "#319CB5",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  mb: 2,
                }}
              >
                WHY WORK WITH ME
              </Typography>

              <Typography
                component="h2"
                sx={{
                  color: "#fff",
                  fontSize: {
                    xs: "2.3rem",
                    sm: "3rem",
                    md: "3.8rem",
                  },
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                }}
              >
                Built around
                <Box
                  component="span"
                  sx={{
                    display: "block",
                    color: "#319CB5",
                  }}
                >
                  your goals.
                </Box>
              </Typography>
            </Box>

            <Typography
              sx={{
                alignSelf: "end",
                maxWidth: 600,
                color: "rgba(255,255,255,0.68)",
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.8,
              }}
            >
              I focus on creating websites that look professional, work
              smoothly, and are built around what your business actually
              needs. From the first idea to launch, you get a straightforward
              development experience.
            </Typography>
          </Box>

          {/* Benefits */}
          <Box
            sx={{
              borderTop: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
              >
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "55px 1fr",
                      md: "90px 0.8fr 1.2fr",
                    },
                    gap: { xs: 2, md: 5 },
                    alignItems: "start",
                    py: { xs: 3.5, md: 4 },
                    borderBottom:
                      "1px solid rgba(255,255,255,0.12)",
                    transition: "all 0.3s ease",

                    "&:hover": {
                      px: { xs: 1, md: 2 },
                      backgroundColor: "rgba(49,156,181,0.04)",
                    },
                  }}
                >
                  {/* Number */}
                  <Typography
                    sx={{
                      color: "#319CB5",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                    }}
                  >
                    {benefit.number}
                  </Typography>

                  {/* Title */}
                  <Typography
                    component="h3"
                    sx={{
                      color: "#fff",
                      fontSize: {
                        xs: "1.1rem",
                        md: "1.35rem",
                      },
                      fontWeight: 600,
                      lineHeight: 1.4,
                    }}
                  >
                    {benefit.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      gridColumn: {
                        xs: "2",
                        md: "auto",
                      },
                      color: "rgba(255,255,255,0.58)",
                      fontSize: "0.95rem",
                      lineHeight: 1.7,
                      mt: { xs: 0.5, md: 0 },
                    }}
                  >
                    {benefit.description}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>
    </Element>
  );
};

export default WhyWorkWithMe;