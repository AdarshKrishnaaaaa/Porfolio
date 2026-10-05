import { Box, Typography, Stack, IconButton, Divider } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import Contact from "./Contact";

const Portfolio = () => {
  const iconStyle = {
    color: "#CCF5FE",
    border: "1px solid rgba(49, 156, 181, 0.35)",
    borderRadius: "50%",
    width: 46,
    height: 46,
    transition: "all 0.3s ease",

    "&:hover": {
      backgroundColor: "#319CB5",
      borderColor: "#319CB5",
      color: "#fff",
      transform: "translateY(-5px)",
      boxShadow: "0 8px 25px rgba(49, 156, 181, 0.25)",
    },
  };

  return (
    <Box
      sx={{
        color: "#ffffff",
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Box
        sx={{
          px: { xs: 3, sm: 5, md: 8 },
          pt: { xs: 7, md: 9 },
          pb: { xs: 4, md: 5 },
          position: "relative",
        }}
      >
        {/* Top Accent */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: { xs: "70%", md: "35%" },
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, #319CB5, transparent)",
            boxShadow: "0 0 20px rgba(49, 156, 181, 0.4)",
          }}
        />

        <Stack
          spacing={{ xs: 4, md: 5 }}
          alignItems="center"
          textAlign="center"
        >
          {/* Small Label */}
          <Typography
            sx={{
              color: "#319CB5",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.2rem",
              textTransform: "uppercase",
            }}
          >
            Let's Connect
          </Typography>

          {/* Social Icons */}
          <Stack
            direction="row"
            spacing={1.5}
            justifyContent="center"
            flexWrap="wrap"
          >
            {/* Phone */}
            <IconButton
              component="a"
              href="tel:+919746089991"
              aria-label="Phone"
              sx={iconStyle}
            >
              <PhoneIcon fontSize="small" />
            </IconButton>

            {/* Email */}
            <IconButton
              component="a"
              href="mailto:adarshk66666@gmail.com"
              aria-label="Email"
              sx={iconStyle}
            >
              <EmailIcon fontSize="small" />
            </IconButton>

            {/* LinkedIn */}
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/adarsh-krishna-670169253"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              sx={iconStyle}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>

            {/* Instagram */}
            <IconButton
              component="a"
              href="https://www.instagram.com/adar.zhh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              sx={iconStyle}
            >
              <InstagramIcon fontSize="small" />
            </IconButton>

            {/* GitHub */}
            <IconButton
              component="a"
              href="https://github.com/AdarshKrishnaaaaa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              sx={iconStyle}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
          </Stack>

          {/* Divider */}
          <Divider
            sx={{
              width: "100%",
              maxWidth: "1100px",
              borderColor: "rgba(255,255,255,0.08)",
            }}
          />

          {/* Bottom Footer */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            justifyContent="space-between"
            alignItems="center"
            sx={{
              width: "100%",
              maxWidth: "1100px",
            }}
          >
            <Typography
              sx={{
                color: "rgba(255,255,255,0.45)",
                fontSize: "0.78rem",
              }}
            >
              © {new Date().getFullYear()} Adarsh Krishna
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.45)",
                fontSize: "0.78rem",
              }}
            >
              Full-Stack Developer · Freelance Web Developer
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Portfolio;