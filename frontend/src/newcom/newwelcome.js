import React from 'react';
import { Container, Grid, Typography, Button, Box, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets'; // Make sure the assets file contains your images

const NewWelcome = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div style={{ padding: "50px 0px", backgroundColor: "#f0f0f0", textAlign: "center" }}>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} md={6}>
                        <Typography 
                            variant="h4" 
                            component="h1" 
                            gutterBottom 
                            sx={{ 
                                fontFamily: "'Amharic Serif', serif", 
                                fontWeight: 700, 
                                color: "#2C3E50",
                                lineHeight: 1.2,
                                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } 
                            }}
                        >
                            እንኳን ወደ ዓምደ ሥላሴ ሰንበት ትምህርት ቤት በደህና መጣችሁ።
                        </Typography>
                        <Typography 
                            variant="body1" 
                            sx={{ 
                                fontFamily: "'Amharic Serif', serif", 
                                fontSize: { xs: '0.8rem', sm: '1rem', md: '1.1rem' }, 
                                color: "#34495E", 
                                marginBottom: "20px" 
                            }}
                        >
                            የ2017 የትምህርት ዘመን በካራሎ ደብረ ታቦር ቅድስት ሥላሴ ቅድስት ድንግል ማርያም እና ቅድስት አርሴማ ቤ/ክ ዓምደ ሥላሴ ሰንበት ት/ቤት ተከታታይ መንፈሳዊ ትምህርት ምዝገባ እነሆ ተጀምሯል።
                        </Typography>
                        <Button
                            onClick={() => navigate('/register')}
                            variant="contained"
                            sx={{ 
                                backgroundColor: "#2980B9", 
                                color: "white", 
                                padding: "10px 20px", 
                                fontWeight: "bold",
                                fontSize: { xs: '0.75rem', sm: '0.9rem', md: '1rem' }, 
                                borderRadius: "30px", 
                                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                                '&:hover': {
                                    backgroundColor: "#3498DB"
                                } 
                            }}
                        >
                            አሁን ይመዝገቡ
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default NewWelcome;
