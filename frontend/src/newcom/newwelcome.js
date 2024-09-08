import React from 'react';
import { Container, Grid, Typography, Button, Box, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const NewWelcome = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div style={{padding:"50px 0px"}}>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={4} justifyContent="center">
                {/* {!matches && ( // Only show the image on medium screens or larger
                    <Grid item md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Box
                            sx={{
                                backgroundImage: `url(${assets.img_1})`, 
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: 300,
                                borderRadius: 2
                            }}
                        />
                    </Grid>
                )} */}
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        እንኳን ወደ ዓምደ ሥላሴ ሰንበት ትምህርት ቤት በደህና መጣችሁ።
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        የ2017 የትምህርት ዘመን በካራሎ ደብረ ታቦር ቅድስት ሥላሴ ቅድስት ድንግል ማርያም እና ቅድስት አርሴማ ቤ/ክ ዓምደ ሥላሴ ሰንበት ት/ቤት ተከታታይ መንፈሳዊ ትምህርት ምዝገባ እነሆ ተጀምሯል።
                    </Typography>
                    <Button onClick={() => navigate('/register')} variant="contained" color="primary" sx={{ width: '100%' }}>
                        አሁን ይመዝገቡ
                    </Button>
                </Grid>
            </Grid>
        </Container>
        </div>
    );
};

export default NewWelcome;
