import React from "react";
import { Box, TextField, Button, Typography, Divider } from "@mui/material";
import toast, { Toaster } from 'react-hot-toast';
import '../App.css'
import { Element } from "react-scroll";

const apiUrl = import.meta.env.VITE_ACCESS_KEY;

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", apiUrl);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            toast.success('Message sent successfully!');
            event.target.reset();
        } else {
            console.log("Error", data);
        }
    };

    return (
        <Element name="contact">
            <Box
                component="section"
                sx={{
                    padding: "4rem 1rem",
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: '10rem'
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        maxWidth: "400px",
                        borderRadius: "1rem",
                    }}
                >
                    <Typography variant="h4" gutterBottom textAlign="center" letterSpacing='.5rem'>
                        Let's Connect!
                    </Typography>

                    <Divider sx={{ my: 5, borderColor: '#319CB5' }} />


                    <Box
                        component="form"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                        }}
                        onSubmit={onSubmit}
                    >
                        <TextField
                            label="Name"
                            type="text"
                            name="name"
                            variant="outlined"
                            fullWidth
                            required
                            InputLabelProps={{ style: { color: '#ffffff' } }}
                            InputProps={{
                                style: { color: '#ffffff' },
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#ffffff',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#ffffff',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#319CB5',
                                    },
                                },
                            }}
                        />

                        <TextField
                            label="Email"
                            type="email"
                            name="email"
                            variant="outlined"
                            fullWidth
                            required
                            InputLabelProps={{ style: { color: '#ffffff' } }}
                            InputProps={{
                                style: { color: '#ffffff' },
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#ffffff',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#ffffff',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#319CB5',
                                    },
                                },
                            }}
                        />

                        <TextField
                            label="Message"
                            name="message"
                            variant="outlined"
                            fullWidth
                            required
                            multiline
                            rows={4}
                            InputLabelProps={{ style: { color: '#ffffff' } }}
                            InputProps={{
                                style: { color: '#ffffff' },
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#ffffff',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#ffffff',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#319CB5',
                                    },
                                },
                            }}
                        />

                        <Button type="submit" size="large" className="Btn" sx={{
                            color: 'Black',
                            textTransform: 'capitalize',
                            border: 'none',
                            borderRadius: '2rem',
                            fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            Send Message
                        </Button>
                    </Box>
                </Box>
                <Toaster
                    position="top-center"
                    containerStyle={{
                        top: '90px',
                    }}
                />
            </Box>
        </Element>
    );
};

export default Contact;
