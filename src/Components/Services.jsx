import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const services = [
  {
    number: "01",
    title: "Business Websites",
    description:
      "Professional websites that help businesses build credibility and reach customers online.",
  },
  {
    number: "02",
    title: "Landing Pages",
    description:
      "Focused, high-converting pages designed around a specific product, service, or campaign.",
  },
  {
    number: "03",
    title: "Portfolio Websites",
    description:
      "Modern personal and professional websites that showcase your work, skills, and experience.",
  },
  {
    number: "04",
    title: "E-commerce Websites",
    description:
      "Custom online stores with product management, shopping features, and secure integrations.",
  },
  {
    number: "05",
    title: "Website Redesign",
    description:
      "Modernize an outdated website with a cleaner design, better usability, and responsive experience.",
  },
  {
    number: "06",
    title: "Custom Web Applications",
    description:
      "Full-stack web applications built around your specific business requirements and workflow.",
  },
  {
    number: "07",
    title: "Wedding Invitation Websites",
    description:
      "Beautiful digital wedding invitation websites with event details, photos, location, and more.",
  },
  {
    number: "08",
    title: "Website Maintenance",
    description:
      "Ongoing updates, improvements, bug fixes, and technical support to keep your website running smoothly.",
  },
];

function Services() {
  return (
    <Box
      component="section"
      id="services"
      sx={{
        py: { xs: 10, md: 14 },
          px: { xs: 2, sm: 3 },
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        {/* Section Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
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
            WHAT I CAN BUILD FOR YOU
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
              maxWidth: "750px",
            }}
          >
            Web Solutions That Fit Your Business
          </Typography>

          <Typography
            sx={{
              color: "#9fb4ba",
              fontSize: { xs: "16px", md: "18px" },
              lineHeight: 1.7,
              maxWidth: "700px",
              mt: 2,
            }}
          >
            From simple landing pages to full-stack web applications, I build
            modern digital experiences tailored to your goals.
          </Typography>
        </motion.div>

        {/* Services List */}
        <Box
          sx={{
            mt: { xs: 5, md: 7 },
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            columnGap: { md: 6 },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
            >
              <Box
                sx={{
                  py: 3,
                  borderTop: "1px solid rgba(204, 245, 254, 0.15)",
                  display: "grid",
                  gridTemplateColumns: "55px 1fr",
                  gap: 2,
                  transition: "all 0.3s ease",

                  "&:hover .service-number": {
                    color: "#CCF5FE",
                  },

                  "&:hover .service-title": {
                    color: "#319CB5",
                  },
                }}
              >
                <Typography
                  className="service-number"
                  sx={{
                    color: "#319CB5",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    transition: "color 0.3s ease",
                  }}
                >
                  {service.number}
                </Typography>

                <Box>
                  <Typography
                    className="service-title"
                    sx={{
                      color: "#CCF5FE",
                      fontSize: {
                        xs: "19px",
                        md: "21px",
                      },
                      fontWeight: 600,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#8fa5ab",
                      fontSize: "14px",
                      lineHeight: 1.7,
                      mt: 0.8,
                      maxWidth: "480px",
                    }}
                  >
                    {service.description}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Box
            sx={{
              mt: 6,
              pt: 4,
              borderTop: "1px solid rgba(204, 245, 254, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 3,
              flexWrap: "wrap",
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "#CCF5FE",
                  fontSize: { xs: "22px", md: "28px" },
                  fontWeight: 600,
                }}
              >
                Have a project in mind?
              </Typography>

              <Typography
                sx={{
                  color: "#8fa5ab",
                  mt: 0.5,
                }}
              >
                Let's turn your idea into a modern website.
              </Typography>
            </Box>

            <Link to="contact" smooth={true} duration={500}>
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
              >
                Let's Talk →
              </Button>
            </Link>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}

export default Services;