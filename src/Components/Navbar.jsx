import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
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
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

import { Link } from "react-scroll";
import LikeButton from "./LikeButton";

function NavigationBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // FIX

  const navLinks = [
    { label: "About", to: "about" },
    { label: "Experience", to: "experience" },
    { label: "Skills", to: "skills" },
    { label: "Contact", to: "contact" },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  function closeNav() {
    setDrawerOpen(false);
  }

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "transparent",
          backdropFilter: "blur(10px)",
          boxShadow: "none",
          padding: "0.3rem 1rem",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h5"
            component={"a"}
            href="/"
            sx={{
              fontWeight: "bold",
              display: "inline-flex",
              alignItems: "center",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            <Box component="img" src={logo} alt="Logo" sx={{ height: 25 }} />
          </Typography>

          <Stack direction="row" alignItems="center">
            <LikeButton />
            {isMobile ? (
              <IconButton
                edge="end"
                color="inherit"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Stack direction="row" spacing={3}>
                {navLinks.map((link, index) => (
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    key={link.label} // ✅ FIX
                  >
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Button
                        sx={{
                          color: "#ffffff",
                          textTransform: "capitalize",
                          fontWeight: 500,
                          fontSize: "1rem",
                          position: "relative",
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "0%",
                            height: "1px",
                            backgroundColor: "#319CB5",
                            transition: "width 0.3s ease",
                          },
                          "&:hover::before": {
                            width: "100%",
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
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: "transparent",
            backdropFilter: "blur(.5rem)",
          },
        }}
      >
        <Box sx={{ width: 150, mt: 2 }}>
          <List>
            {navLinks.map((link, index) => (
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                key={link.label} // ✅ FIX
              >
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <ListItem disablePadding>
                    <ListItemButton onClick={closeNav}>
                      <ListItemText
                        primary={link.label}
                        primaryTypographyProps={{
                          fontSize: "1rem",
                          fontWeight: 500,
                          color: "white",
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                </motion.div>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default NavigationBar;
