import React from 'react';
import { Typography, Container, Box, Avatar, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import Person from '../assets/Person.png'
import { Element } from 'react-scroll';

const About = () => {
    return (
        <Element name='about'>
            <Container maxWidth="lg" sx={{ pt: '10rem', mt: '3rem', mb: '10rem' }}>
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
                            mb: '3rem'
                        }}
                    >
                        About
                    </Typography>

                    <Divider sx={{ my: 5, borderColor: '#319CB5' }} />
                    
                </motion.div>

                {/* Image + Content */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 1.5 }}
                >
                    <Box
                        display="flex"
                        flexDirection={{ xs: 'column', sm: 'column', lg: 'row' }}
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
                                width: { xs: 290, md: 440 },
                                height: { xs: 350, md: 500 },
                            }}
                        />

                        {/* Right - Text Content */}
                        <Box padding='1rem' >
                            <Typography
                                variant="h5"
                                component="h2"
                                gutterBottom
                                sx={{ fontWeight: 500, color: '#fff', textAlign: { xs: "center", sm: "center", lg: 'start' } }}
                            >
                                I am Adarsh Krishna, MERN Stack Developer
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{ mt: 2, lineHeight: 1.8, color: '#CCF5FE', textAlign: { xs: "center", sm: "center", lg: 'start' } }}
                            >
                                I’m a passionate and detail-oriented full stack web developer focused on building scalable, responsive, and modern web applications using the MERN stack — MongoDB, Express.js, React.js, and Node.js. With a solid foundation in both front-end and back-end technologies, I aim to create meaningful digital experiences that seamlessly combine functionality with elegant design.

                                I recently completed my Bachelor of Computer Applications (BCA) from MG University (2021–2024), and I also completed a six-month Full Stack Development training at Camerin Folks Pvt Ltd (August 2024 – February 2025). Alongside my training, I am also working as a MERN Stack Developer Intern, contributing to real-time applications and learning how to deliver production-ready solutions.

                                Throughout my journey, I’ve built and deployed several projects, including a Weather Forecast Application, EXPENSIO – Expense Tracker, and a HelloWorld - Chat Application. These projects have helped me strengthen my skills in React.js, Node.js, MongoDB, Express.js, HTML, CSS, and JavaScript.

                                I’m also familiar with tools and libraries such as Redux, Bootstrap, Tailwind CSS, Postman, Razorpay, JWT, Multer, and Twilio. I believe in clean code, modular architecture, and user-friendly design.

                                My strengths include problem-solving, adaptability, teamwork, and leadership — all of which I apply daily to improve as a developer and contribute meaningfully to any team or project I’m part of.

                                I’m always excited to learn, grow, and collaborate with people who are just as passionate about building great software as I am.

                            </Typography>
                        </Box>
                    </Box>
                </motion.div>
            </Container>
        </Element>
    );
};

export default About;
