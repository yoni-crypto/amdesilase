import React from 'react';
import { Box, Grid, Card, CardContent, Typography, CardMedia, useMediaQuery } from '@mui/material';
import { assets } from '../assets/assets';

const NewExploreMenu = () => {
    const isSmallScreen = useMediaQuery('(max-width: 600px)');

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h4" align="center" gutterBottom>
                ኮርስ የምንሰጥባችው መንገዶች
            </Typography>
            <Box
                sx={{
                    overflowX: isSmallScreen ? 'auto' : 'unset',
                    display: 'flex',
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    whiteSpace: isSmallScreen ? 'nowrap' : 'normal',
                }}
            >
                <Grid
                    container
                    spacing={2}
                    justifyContent="center" 
                    alignItems="center"
                    sx={{
                        flexWrap: isSmallScreen ? 'nowrap' : 'wrap',
                        display: isSmallScreen ? 'inline-flex' : 'flex',
                    }}
                >
                    {[
                        { icon: assets.regular_icon, label: 'በመደበኛ' },
                        { icon: assets.online_icon, label: 'በኦንላይን' },
                        { icon: assets.night_icon, label: 'በማታ' },
                    ].map((item, index) => (
                        <Grid key={index} item xs={6} sm={6} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Card
                                sx={{
                                    boxShadow: 3,
                                    maxWidth: { xs: '100px', sm: '160px', md: '200px' },
                                    margin: 'auto'
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={item.icon}
                                    alt={`${item.label} Icon`}
                                    sx={{ width: '40px', margin: '8px auto' }}
                                />
                                <CardContent>
                                    <Typography variant="h6" align="center" sx={{ fontSize: { xs: '0.75rem', sm: '1rem' } }}>
                                        {item.label}
                                    </Typography>
                                    {!isSmallScreen && (
                                        <Typography variant="body2" align="center" sx={{ fontSize: { xs: '0.65rem', sm: '0.85rem' } }}>
                                            በመደበኛ የሚሰጥ መድክስ ስድፍክድህስ አድስጅፍ ስፍክላብስህበመደበኛ የሚሰጥ መድክስ
                                        </Typography>
                                    )}
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default NewExploreMenu;
