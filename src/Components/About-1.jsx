import React from 'react';
import { Typography, Container, Box, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import Person from '../assets/Person.png'
import { Element } from 'react-scroll';

const About = () => {
    return (
        <Element name='about'>
            <Container maxWidth="lg" sx={{ pt: '10rem',mt:'3rem', mb: '10rem'}}>
                {/* About Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <Typography
                        variant="h4"
                        align="center"
                        gutterBottom
                        letterSpacing='.5rem'
                        sx={{
                            color: '#fff',
                            mb: '5rem'
                        }}
                    >
                        About
                    </Typography>
                </motion.div>

                {/* Image + Content */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 1.5 }}
                >
                    <Box
                        display="flex"
                        flexDirection={{ xs: 'column', md: 'row' }}
                        alignItems="center"
                        gap={10}
                        sx={{
                            mt: 4,
                            p: 0,
                            backgroundColor: 'transparent',
                        }}
                    >
                        {/* Left - Image */}
                        <Avatar
                            alt="Adarsh Krishna"
                            src={Person}
                            sx={{
                                width: 340,
                                height: 400,
                            }}
                        />

                        {/* Right - Text Content */}
                        <Box padding='1rem' >
                            <Typography
                                variant="h5"
                                component="h2"
                                gutterBottom
                                sx={{ fontWeight: 500, color: '#fff',textAlign:{sm:"center",md:'start'} }}
                            >
                                I am Adarsh Krishna, MERN Stack Developer
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{ mt: 2, lineHeight: 1.8, color: '#CCF5FE', textAlign:{sm:"center",md:'start'} }}
                            >
                                Passionate and detail-oriented developer focused on creating scalable,
                                responsive, and modern web applications using MongoDB, Express.js,
                                React.js, and Node.js. With a strong foundation in front-end and
                                back-end development, I aim to build meaningful digital experiences
                                that blend functionality and design.
                            </Typography>
                        </Box>
                    </Box>
                </motion.div>
            </Container>
        </Element>
    );
};

export default About;
