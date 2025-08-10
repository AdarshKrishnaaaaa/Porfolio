import { Box, Chip, Typography, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

const skills = [
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'TailwindCSS', logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
    { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
];

const SkillsSection = () => {
    return (
        <Box sx={{ pt: '10rem', mt: '3rem', mb: '10rem' }}>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 1.5 }}
            >
                <Typography variant="h4" letterSpacing='.5rem' color='white' sx={{ display: 'flex', justifyContent: 'center', mb: '5rem' }}>
                    Skills
                </Typography>

            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >

                <Box
                    sx={{
                        p: '1rem',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 2,
                        justifyContent: 'center',
                        mt: 3,
                    }}
                >
                    {skills.map((skill) => (
                        <Chip
                            key={skill.name}
                            label={
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                    <img
                                        src={skill.logo}
                                        alt={skill.name}
                                        style={{ width: 50, height: 50 }}
                                    />
                                    {skill.name}
                                </Box>
                            }
                            sx={{
                                backgroundColor: 'transparent',
                                fontWeight: 700,
                                px: 4.5,
                                py: 3.5,
                                borderRadius: '20px',
                                fontSize: '0.95rem',
                                transition: '0.3s',
                                color: 'white',
                                '&:hover': {
                                    background: 'linear-gradient(135deg, rgba(49, 156, 181, 0.4), rgba(3, 24, 31, 0.4))',
                                    color: 'white',
                                    border: '.5px solid rgba(204, 245, 254, 0.8)',
                                    boxShadow: '0 12px 35px rgba(0, 255, 255, 0.4)',

                                },
                            }}
                        />
                    ))}
                </Box>
            </motion.div>
        </Box>
    );
};

export default SkillsSection;
