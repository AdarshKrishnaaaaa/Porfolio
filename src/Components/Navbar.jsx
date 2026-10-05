import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import logo from "../assets/logo_.png";

function NavigationBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navLinks = [
    { label: "About", to: "about" },
    { label: "Services", to: "services" },
    { label: "Work", to: "projects" },
    { label: "Why me?", to: "why-me" },
  ];

  const closeNav = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "transparent",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          boxShadow: "none",
          zIndex: 1100,
        }}
      >
        <Toolbar
          sx={{
            minHeight: { xs: 64, md: 72 },
            px: { xs: "2rem", sm: "5rem", md: "8rem" },
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Box
            component="a"
            href="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Adarsh Krishna"
              sx={{
                height: { xs: 24, md: 28 },
                width: "auto",
                display: "block",
              }}
            />
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Stack
              direction="row"
              alignItems="center"
              spacing={0.5}
              sx={{
                ml: "auto",
                mr: 2,
              }}
            >
              {navLinks.map((link, index) => (
                <Link
                  key={link.label}
                  to={link.to}
                  smooth={true}
                  duration={600}
                  offset={-70}
                  spy={true}
                >
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                    }}
                  >
                    <Button
                      sx={{
                        position: "relative",
                        color: "rgba(255,255,255,0.78)",
                        textTransform: "none",
                        fontSize: "0.95rem",
                        fontWeight: 500,
                        px: 1.5,
                        py: 1,

                        "&::after": {
                          content: '""',
                          position: "absolute",
                          left: "50%",
                          bottom: 4,
                          width: 0,
                          height: "2px",
                          borderRadius: "10px",
                          backgroundColor: "#319CB5",
                          transform: "translateX(-50%)",
                          transition: "width 0.3s ease",
                        },

                        "&:hover": {
                          color: "#fff",
                          backgroundColor: "transparent",
                        },

                        "&:hover::after": {
                          width: "20px",
                        },
                      }}
                    >
                      {link.label}
                    </Button>
                  </motion.div>
                </Link>
              ))}
            </Stack>
          )}

          {/* Desktop CTA */}
          {!isMobile && (
            <Link to="contact" smooth={true} duration={600} offset={-70}>
              <Button
                variant="outlined"
                sx={{
                  color: "#CCF5FE",
                  borderColor: "rgba(49,156,181,0.7)",
                  borderRadius: "2rem",
                  px: 2.5,
                  py: 1,
                  textTransform: "none",
                  fontSize: "0.9rem",
                  fontWeight: 600,

                  "&:hover": {
                    borderColor: "#319CB5",
                    backgroundColor: "rgba(49,156,181,0.08)",
                  },
                }}
              >
                Start a Project ↗
              </Button>
            </Link>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation menu"
              sx={{
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "10px",
                width: 42,
                height: 42,

                "&:hover": {
                  backgroundColor: "rgba(49,156,181,0.08)",
                  borderColor: "rgba(49,156,181,0.5)",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={closeNav}
        PaperProps={{
          sx: {
            width: { xs: 240 },
            backgroundColor: "transparent",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            borderLeft: "1px solid rgba(255,255,255,0.08)",
            color: "#fff",
          },
        }}
      >
        <Box
          sx={{
            px: 3,
            pt: 3,
            pb: 2,
          }}
        >
          {/* Drawer Header */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
              mb: 3,
            }}
          >

            <IconButton
              onClick={closeNav}
              sx={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "1.5rem",
              }}
            >
              ×
            </IconButton>
          </Box>

          <Divider
            sx={{
              borderColor: "rgba(255,255,255,0.1)",
              mb: 2,
            }}
          />

          {/* Mobile Links */}
          <List sx={{ p: 0 }}>
            {navLinks.map((link, index) => (
              <Link
                key={link.label}
                to={link.to}
                smooth={true}
                duration={600}
                offset={-70}
                spy={true}
                onClick={closeNav}
              >
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.07,
                  }}
                >
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{
                        py: 1.5,
                        px: 1.5,
                        borderRadius: "10px",
                        mb: 0.5,

                        "&:hover": {
                          backgroundColor: "rgba(49,156,181,0.08)",
                        },
                      }}
                    >
                      <ListItemText
                        primary={link.label}
                        primaryTypographyProps={{
                          fontSize: "1rem",
                          fontWeight: 500,
                          color: "rgba(255,255,255,0.85)",
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                </motion.div>
              </Link>
            ))}
          </List>

          {/* Mobile CTA */}
          <Box sx={{ mt: 3 }}>
            <Link
              to="contact"
              smooth={true}
              duration={600}
              offset={-70}
              onClick={closeNav}
            >
              <Button
                fullWidth
                variant="contained"
                sx={{
                  py: 1.3,
                  borderRadius: "2rem",
                  backgroundColor: "#319CB5",
                  color: "#07111f",
                  fontWeight: 700,
                  textTransform: "none",
                  fontSize: "0.95rem",

                  "&:hover": {
                    backgroundColor: "#3fb0ca",
                  },
                }}
              >
                Start a Project ↗
              </Button>
            </Link>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default NavigationBar;
