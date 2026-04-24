import { Box, Typography, Stack, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import Contact from "./Contact";

const Portfolio = () => {
  const iconStyle = {
    color: "#319CB5",
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: "12px",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#319CB5",
      color: "#fff",
      transform: "scale(1.1)",
    },
  };

  return (
    <Box
      sx={{
        px: 4,
        py: 8,
        color: "#ffffff",
        position: "relative",
        zIndex: 1,
        textAlign: "center",
      }}
    >
      {/* Contact */}
      <Contact />

      <Stack spacing={3} alignItems="center">
        {/* Heading */}
        <Typography
          variant="h5"
          sx={{
            fontFamily: "monospace",
            textTransform: "uppercase",
            letterSpacing: ".15rem",
            position: "relative",
            display: "inline-block",
            pb: 1,
            "&::after": {
              content: '""',
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              bottom: 0,
              width: "60%",
              height: "2px",
              backgroundColor: "#319CB5",
            },
          }}
        >
          Get in Touch
        </Typography>

        {/* Social Icons */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          flexWrap="wrap"
        >
          {/* Phone */}
          <IconButton component="a" href="tel:+919746089991" sx={iconStyle}>
            <PhoneIcon />
          </IconButton>

          {/* Email */}
          <IconButton
            component="a"
            href="mailto:adarshk66666@gmail.com"
            sx={iconStyle}
          >
            <EmailIcon />
          </IconButton>

          {/* LinkedIn */}
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/adarsh-krishna-670169253"
            target="_blank"
            sx={iconStyle}
          >
            <LinkedInIcon />
          </IconButton>

          {/* Instagram */}
          <IconButton
            component="a"
            href="https://www.instagram.com/adar.zhh"
            target="_blank"
            sx={iconStyle}
          >
            <InstagramIcon />
          </IconButton>

          {/* GitHub */}
          <IconButton
            component="a"
            href="https://github.com/AdarshKrishnaaaaa"
            target="_blank"
            sx={iconStyle}
          >
            <GitHubIcon />
          </IconButton>
        </Stack>

        {/* Footer Text */}
        <Typography
          variant="caption"
          sx={{
            mt: 3,
            opacity: 0.6,
            letterSpacing: "0.05rem",
          }}
        >
          © {new Date().getFullYear()} Adarsh Krishna. All rights reserved.
        </Typography>
      </Stack>
    </Box>
  );
};

export default Portfolio;
