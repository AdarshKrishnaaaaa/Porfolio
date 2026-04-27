import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const experiences = [
  {
    role: "RPA Developer",
    company: "ClaySys Technologies",
    duration: "Oct 2025 – Present",
    location: "Kakkanad, Kochi",
    points: [
      "Built 3+ automation workflows, reducing manual effort and improving efficiency",
      "Developed and maintained internal and client-based RPA projects",
      "Worked on real-time automation use cases to minimize manual work",
    ],
  },
  {
    role: "MERN Stack Developer Intern",
    company: "Camerin Folks Pvt Ltd",
    duration: "Aug 2024 – Feb 2025",
    location: "Kakkanad, Kochi",
    points: [
      "Completed 6-month MERN stack training",
      "Built responsive UI and backend logic",
      "Improved workflows by 30% with dashboards",
    ],
  },
];

function Experience() {
  return (
    <Element name="experience">
      <Box
        sx={{
          color: "white",
          py: 15,
          px: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h4" letterSpacing=".5rem" sx={{ mb: 10 }}>
            Experience
          </Typography>
        </motion.div>

        {/* Timeline Container */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "1212px",
          }}
        >
          {/* Vertical Line */}
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top: 0,
              transform: "translateX(-50%)",
              width: "3px",
              height: "100%",
              background:
                "linear-gradient(to bottom, #319CB5, #CCF5FE, transparent)",
            }}
          />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: isLeft ? "flex-start" : "flex-end",
                  mb: 6,
                  position: "relative",
                }}
              >
                {/* Dot */}
                <Box
                  sx={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    background: "#CCF5FE",
                    boxShadow: "0 0 15px #CCF5FE",
                    zIndex: 2,
                  }}
                />

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  style={{
                    width: "45%",
                  }}
                >
                  <Card
                    sx={{
                      background: "rgba(3, 24, 31, 0.7)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      color: "white",
                      borderRadius: 4,
                      boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
                      transition: "0.3s",
                      padding: "1rem",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 12px 35px rgba(0, 255, 255, 0.4)",
                        border: "2px solid rgba(204, 245, 254, 0.8)",
                      },
                    }}
                  >
                    <CardContent>
                      {/* ROLE */}
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        sx={{
                          fontSize: {
                            xs: "1.1rem",
                            sm: "1.3rem",
                            md: "1.5rem",
                          },
                        }}
                      >
                        {exp.role}
                      </Typography>

                      {/* COMPANY */}
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: "#CCF5FE",
                          fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                        }}
                      >
                        {exp.company}
                      </Typography>

                      {/* DATE + LOCATION */}
                      <Typography
                        variant="body2"
                        sx={{
                          mb: 1,
                          color: "#CCF5FE",
                          fontSize: {
                            xs: "0.75rem",
                            sm: "0.85rem",
                            md: "0.9rem",
                          },
                        }}
                      >
                        {exp.duration} | {exp.location}
                      </Typography>

                      {/* POINTS */}
                      <Box component="ul" sx={{ pl: 2, color: "#CCF5FE" }}>
                        {exp.points.map((point, i) => (
                          <li key={i}>
                            <Typography
                              variant="body2"
                              sx={{
                                fontSize: {
                                  xs: "0.75rem",
                                  sm: "0.85rem",
                                  md: "0.9rem",
                                },
                              }}
                            >
                              {point}
                            </Typography>
                          </li>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Element>
  );
}

export default Experience;
