import React from 'react';
import { Container, Grid, Typography, Box, Paper } from '@mui/material';
import { assets } from '../assets/assets';

const Vision = () => {
    return (
        <div style={{ padding: "50px 0", background: "#f0f0f0" }}>
            <Container maxWidth="lg">
                <Grid container spacing={6} justifyContent="center">

                    {/* Vision Section */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper 
                            elevation={4} 
                            sx={{
                                padding: 4, 
                                borderRadius: 3,
                                textAlign: 'center',
                                transition: 'transform 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.05)'
                                }
                            }}
                        >
                            <Box display="flex" flexDirection="column" alignItems="center">
                                <Box mb={2}>
                                    <img 
                                        src={assets.eye_icon} 
                                        alt="Eye Icon" 
                                        style={{ width: '60px', height: 'auto', transition: 'all 0.3s' }}
                                    />
                                </Box>
                                <Typography variant="h5" component="h1" gutterBottom>ራእይ</Typography>
                                <Typography variant="body1" align="center">
                                    በአጥቢያ የሚገኙ ወጣቶች እና ሕፃናት በኢ/ኦ/ተ/ቤ/ክ እምነት እና ሥርዓት የሚሄዱ ሆነው በእውቀታቸው፣ በገንዘባቸው፣ በጉልበታቸው እንዲሁም በክህነታቸው ሲያገለግሉ እና በዓላማዊው አስኳላው ትምህርታቸው ውጤታማ ሆነው ማየት፣
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>

                    {/* Mission Section */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper 
                            elevation={4} 
                            sx={{
                                padding: 4, 
                                borderRadius: 3,
                                textAlign: 'center',
                                transition: 'transform 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.05)'
                                }
                            }}
                        >
                            <Box display="flex" flexDirection="column" alignItems="center">
                                <Box mb={2}>
                                    <img 
                                        src={assets.mission_icon} 
                                        alt="Mission Icon" 
                                        style={{ width: '60px', height: 'auto', transition: 'all 0.3s' }}
                                    />
                                </Box>
                                <Typography variant="h5" component="h1" gutterBottom>ተልእኮ</Typography>
                                <Typography variant="body1" align="center">
                                    በአጥቢያው የሚገኙ ወጣቶች እና ሕፃናትን ትክክለኛውን የኢ/ኦ/ተ/ቤ/ክ ትምህርተ ሃይማኖት እና የአብነት ትምህርት በማስተማር የቤተክርስቲያኗን ዶግማ፣ ሥርዓት፣ ትውፊት፣ ታሪክ እና ወቅታዊ ሁኔታ እንዲያውቁ ማድረግ፣
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>

                    {/* Values Section */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper 
                            elevation={4} 
                            sx={{
                                padding: 4, 
                                borderRadius: 3,
                                textAlign: 'center',
                                transition: 'transform 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.05)'
                                }
                            }}
                        >
                            <Box display="flex" flexDirection="column" alignItems="center">
                                <Box mb={2}>
                                    <img 
                                        src={assets.thumbs_up_icon} 
                                        alt="Values Icon" 
                                        style={{ width: '60px', height: 'auto', transition: 'all 0.3s' }}
                                    />
                                </Box>
                                <Typography variant="h5" component="h1" gutterBottom>ዕሴቶች</Typography>
                                <Typography variant="body1" align="center">
                                    መንፈሳዊነት፣ አንድነት፣<br />
                                    መደጋገፍ፣ ቀጣይነት፣ አገልጋይነት<br />
                                    ክርስቲያናዊ ኃላፊነት፣ ጽናትና ምስክርነት<br />
                                    በፍቅር የኾነ አገልግሎት<br />
                                    ዘመኑን መቅደም
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Vision;
