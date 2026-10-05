import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Divider,
  MenuItem,
} from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

const apiUrl = import.meta.env.VITE_ACCESS_KEY;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [nameHelper, setNameHelper] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    formData.append("access_key", apiUrl);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thanks! I'll get back to you soon.");

        setName("");
        setEmail("");
        setPhone("");
        setNameError(false);
        setEmailError(false);
        setNameHelper("");
        setEmailHelper("");

        form.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
        console.log("Error", data);
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Unable to send your enquiry. Please try again.");
    }
  };

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!value) {
      setEmailError(true);
      setEmailHelper("Email is required");
    } else if (!regex.test(value)) {
      setEmailError(true);
      setEmailHelper("Enter a valid email");
    } else {
      setEmailError(false);
      setEmailHelper("");
    }
  };

  const validateName = (value) => {
    const regex = /^[A-Za-z\s]+$/;

    if (!value) {
      setNameError(true);
      setNameHelper("Name is required");
    } else if (!regex.test(value)) {
      setNameError(true);
      setNameHelper("Only letters allowed");
    } else {
      setNameError(false);
      setNameHelper("");
    }
  };

  return (
    <Element name="contact">
      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 14 },
          px: { xs: 2, sm: 3 },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Box
            sx={{
              maxWidth: "1200px",
              mx: "auto",
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "0.85fr 1.15fr",
              },
              gap: { xs: 6, md: 10 },
              alignItems: "start",
            }}
          >
            {/* Left Content */}
            <Box>
              {/* <Typography
                sx={{
                  color: "#319CB5",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  mb: 2,
                }}
              >
                GET IN TOUCH
              </Typography> */}

              <Typography
                component="h2"
                sx={{
                  color: "#fff",
                  fontSize: {
                    xs: "2.5rem",
                    sm: "3.2rem",
                    md: "4rem",
                  },
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  mb: 3,
                }}
              >
                Let's Build
                <Box
                  component="span"
                  sx={{
                    display: "block",
                    color: "#319CB5",
                  }}
                >
                  Something.
                </Box>
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  maxWidth: 470,
                  mb: 4,
                }}
              >
                Have a website idea or need to improve an existing website? Tell
                me what you're looking for and I'll get back to you.
              </Typography>

              <Divider
                sx={{
                  borderColor: "rgba(255,255,255,0.12)",
                  mb: 4,
                }}
              />

              {/* WhatsApp */}
              <Box>
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.12em",
                    mb: 1,
                  }}
                >
                  PREFER WHATSAPP?
                </Typography>

                <Button
                  component="a"
                  href="https://wa.me/919746089991"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  sx={{
                    color: "#fff",
                    borderColor: "rgba(49,156,181,0.6)",
                    borderRadius: "2rem",
                    px: 3,
                    py: 1.2,
                    textTransform: "none",
                    fontWeight: 600,
                    "&:hover": {
                      borderColor: "#319CB5",
                      backgroundColor: "rgba(49,156,181,0.08)",
                    },
                  }}
                >
                  WhatsApp Me →
                </Button>
              </Box>
            </Box>

            {/* Form */}
            <Box
              sx={{
                p: { xs: 0, sm: 4 },
                borderRadius: "1.5rem",
                border: {
                  xs: "none",
                  sm: "1px solid rgba(255,255,255,0.1)",
                },
                backgroundColor: {
                  xs: "transparent",
                  sm: "rgba(255,255,255,0.025)",
                },
              }}
            >
              <Typography
                component="h3"
                sx={{
                  color: "#fff",
                  fontSize: "1.4rem",
                  fontWeight: 600,
                  mb: 3,
                }}
              >
                Tell me about your project
              </Typography>

              <Box
                component="form"
                onSubmit={onSubmit}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2.2,
                }}
              >
                <input
                  type="hidden"
                  name="subject"
                  value="📩 New Freelance Project Enquiry"
                />

                <input
                  type="hidden"
                  name="from_name"
                  value="Adarsh Krishna Portfolio"
                />

                {/* Name */}
                <TextField
                  label="Name"
                  type="text"
                  name="Full Name"
                  variant="outlined"
                  fullWidth
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    validateName(e.target.value);
                  }}
                  error={nameError}
                  helperText={nameHelper}
                  sx={{
                    ...fieldStyles,
                  }}
                />

                {/* Email */}
                <TextField
                  label="Email"
                  type="email"
                  name="Email Address"
                  variant="outlined"
                  fullWidth
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    validateEmail(e.target.value);
                  }}
                  error={emailError}
                  helperText={emailHelper}
                  sx={{
                    ...fieldStyles,
                  }}
                />

                {/* Phone */}
                <TextField
                  label="Phone / WhatsApp"
                  type="tel"
                  name="Phone / WhatsApp"
                  variant="outlined"
                  fullWidth
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  sx={{
                    ...fieldStyles,
                  }}
                />

                {/* Project Type */}
                <TextField
                  select
                  label="What do you need?"
                  name="Project Type"
                  defaultValue=""
                  fullWidth
                  required
                  sx={{
                    ...fieldStyles,

                    "& .MuiSelect-select": {
                      color: "#fff",
                    },
                  }}
                >
                  <MenuItem value="" disabled>
                    Select a service
                  </MenuItem>
                  <MenuItem value="Business Website">Business Website</MenuItem>
                  <MenuItem value="Landing Page">Landing Page</MenuItem>
                  <MenuItem value="Portfolio Website">
                    Portfolio Website
                  </MenuItem>
                  <MenuItem value="E-commerce Website">
                    E-commerce Website
                  </MenuItem>
                  <MenuItem value="Website Redesign">Website Redesign</MenuItem>
                  <MenuItem value="Custom Web Application">
                    Custom Web Application
                  </MenuItem>
                  <MenuItem value="Wedding Invitation Website">
                    Wedding Invitation Website
                  </MenuItem>
                  <MenuItem value="Website Maintenance">
                    Website Maintenance
                  </MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </TextField>

                {/* Message */}
                <TextField
                  label="Message"
                  name="message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={5}
                  placeholder="Tell me briefly about your project, requirements, or idea..."
                  sx={{
                    ...fieldStyles,
                  }}
                />

                {/* Submit */}
                <Button
                  type="submit"
                  size="large"
                  variant="contained"
                  sx={{
                    mt: 1,
                    py: 1.5,
                    borderRadius: "2rem",
                    backgroundColor: "#319CB5",
                    color: "#fff",
                    fontWeight: 700,
                    textTransform: "none",
                    fontSize: "1rem",
                    "&:hover": {
                      backgroundColor: "#3fb0ca",
                    },
                  }}
                >
                  Send Enquiry →
                </Button>
              </Box>
            </Box>
          </Box>
        </motion.div>

        <Toaster position="bottom-right" />
      </Box>
    </Element>
  );
};

const fieldStyles = {
  "& .MuiInputLabel-root": {
    color: "rgba(255,255,255,0.65)",
  },

  "& .MuiInputLabel-root.Mui-focused": {
    color: "#319CB5",
  },

  "& .MuiOutlinedInput-root": {
    color: "#fff",

    "& fieldset": {
      borderColor: "rgba(255,255,255,0.2)",
    },

    "&:hover fieldset": {
      borderColor: "rgba(255,255,255,0.45)",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#319CB5",
    },
  },

  "& .MuiFormHelperText-root": {
    marginLeft: 0,
  },

  "& input::placeholder, & textarea::placeholder": {
    color: "rgba(255,255,255,0.35)",
    opacity: 1,
  },
};

export default Contact;
