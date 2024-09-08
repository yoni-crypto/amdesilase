import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { assets } from '../assets/assets';

const Vision = () => {
    return (
        <div style={{padding:"50px 0px"}}>
        <Container maxWidth="lg" sx={{ mt: 4 }}> {/* Adjusted maxWidth for larger screens */}
            <Grid container spacing={6} justifyContent="center"> {/* Increased spacing */}

                {/* Vision Section */}
                <Grid item xs={12} sm={6} md={4}> {/* Adjusted grid breakpoints */}
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Box mb={2}>
                            <img src={assets.eye_icon} alt="Eye Icon" style={{ width: '60px', height: 'auto' }} /> {/* Adjusted icon size */}
                        </Box>
                        <Typography variant="h5" component="h1" gutterBottom sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}>ራእይ</Typography>
                        <Typography variant="body1" align="center" sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}>
                            በአጥቢያ የሚገኙ ወጣቶች እና ሕፃናት በኢ/ኦ/ተ/ቤ/ክ እምነት እና ሥርዓት የሚሄዱ ሆነው በእውቀታቸው፣ በገንዘባቸው፣ በጉልበታቸው እንዲሁም በክህነታቸው ሲያገለግሉ እና በዓላማዊው አስኳላው ትምህርታቸው ውጤታማ ሆነው ማየት፣
                        </Typography>
                    </Box>
                </Grid>

                {/* Mission Section */}
                <Grid item xs={12} sm={6} md={4}>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Box mb={2}>
                            <img src={assets.mission_icon} alt="Mission Icon" style={{ width: '60px', height: 'auto' }} />
                        </Box>
                        <Typography variant="h5" component="h1" gutterBottom sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}>ተልእኮ</Typography>
                        <Typography variant="body1" align="center" sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}>
                            በአጥቢያው የሚገኙ ወጣቶች እና ሕፃናትን ትክክለኛውን የኢ/ኦ/ተ/ቤ/ክ ትምህርተ ሃይማኖት እና የአብነት ትምህርት በማስተማር የቤተክርስቲያኗን ዶግማ፣ ሥርዓት፣ ትውፊት፣ ታሪክ እና ወቅታዊ ሁኔታ እንዲያውቁ ማድረግ፣
                        </Typography>
                    </Box>
                </Grid>

                {/* Values Section */}
                <Grid item xs={12} sm={6} md={4}>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Box mb={2}>
                            <img src={assets.thumbs_up_icon} alt="Values Icon" style={{ width: '60px', height: 'auto' }} />
                        </Box>
                        <Typography variant="h5" component="h1" gutterBottom sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}>ዕሴቶች</Typography>
                        <Typography variant="body1" align="center" sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}>
                            መንፈሳዊነት፣ አንድነት፣<br />
                            መደጋገፍ፣ ቀጣይነት፣ አገልጋይነት<br />
                            ክርስቲያናዊ ኃላፊነት፣ ጽናትና ምስክርነት<br />
                            በፍቅር የኾነ አገልግሎት<br />
                            ዘመኑን መቅደም
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
        </div>
    );
};

export default Vision;
