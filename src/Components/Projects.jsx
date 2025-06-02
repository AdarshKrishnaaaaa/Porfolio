import { Box, Typography, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { motion } from 'framer-motion';
import weatherAppImg from '../assets/ProjectImg1.png';
import expensioImg from '../assets/ProjectImg2.png';
import appStoreImg from '../assets/ProjectImg3.png';
import helloWorldAppImg from '../assets/ProjectImg4.png';
import { Element } from 'react-scroll';

function Projects() {
    return (
        <Element name='project'>
            <Box
                component="section"
                sx={{
                    color: 'white',
                    py: 15,
                    px: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 4,
                    mt: 10,
                    position: 'relative',
                    zIndex: 1
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Typography variant="h4" letterSpacing='.5rem' sx={{ mb: '10rem' }}>
                        My Projects
                    </Typography>
                </motion.div>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        flexWrap: 'wrap',
                        gap: 4,
                        columnGap: 4,
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1,
                    }}
                >
                    {[{
                        title: "Weather App",
                        description: "Real-time weather updates, forecasts, and insights for any location.",
                        image: weatherAppImg,
                        live: "https://weather-app-kappa-six-78.vercel.app/",
                        link: "https://github.com/AdarshKrishnaaaaa/WeatherApp"
                    },
                    {
                        title: "Expensio",
                        description: "A tool to record, manage, and analyze daily financial expenses efficiently.",
                        image: expensioImg,
                        live: 'https://expense-tracker-seven-phi-24.vercel.app/',
                        link: 'https://github.com/AdarshKrishnaaaaa/Expense-Tracker'
                    },
                    {
                        title: "App Store",
                        description: "Easily track, manage, and control expenses for smarter financial decisions.",
                        image: appStoreImg,
                        live: "https://online-website-chi.vercel.app/",
                        link: "https://github.com/AdarshKrishnaaaaa/Online-Website"
                    },
                    {
                        title: "HelloWorld Chat App",
                        description: "A real-time chat app built with the MERN stack, featuring user authentication and live messaging.",
                        image: helloWorldAppImg,
                        live: "https://chat-app-99s1.onrender.com/",
                        link: "https://github.com/AdarshKrishnaaaaa/Chat-App"
                    }].map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </Box>
            </Box>
        </Element>
    );
}

function ProjectCard({ title, description, image, link, live }) {
    return (
        <Card
            sx={{
                width: { xs: '100%', sm: '20rem', md: '24rem' },
                background: 'linear-gradient(to top, #03181F, #319CB5)',
                color: 'white',
                borderRadius: 5,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <CardMedia component="img" height="180" image={image} alt={title} />
            <CardContent >
                <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, textAlign: 'center', color: '#CCF5FE' }}>
                    {description}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                {live && (
                    <Button
                        variant="contained"
                        size="small"
                        href={live}
                        target="_blank"
                        sx={{ background: ' #CCF5FE', color: 'black' }}
                    >
                        View Live Site
                    </Button>
                )}
                {link && (
                    <Button
                        variant="outlined"
                        color="secondary"
                        size="small"
                        href={link}
                        target="_blank"
                        sx={{ color: '#CCF5FE', border: '#CCF5FE solid 1px' }}
                    >
                        View Source Code
                    </Button>
                )}
            </CardActions>
        </Card>
    );
}

export default Projects;
