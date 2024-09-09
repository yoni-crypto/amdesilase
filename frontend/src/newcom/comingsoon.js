import React from 'react';
import { Box, Typography } from '@mui/material';
import NewNavbar from './navbar'; // Adjust the path based on your file structure

const ComingSoon = () => {
    return (
        <>
            <NewNavbar />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                    textAlign: 'center',
                    // backgroundImage: 'url(https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
                    backgroundImage: 'url(https://as2.ftcdn.net/v2/jpg/07/95/41/63/1000_F_795416340_qbKmqOXo4qPY809URWKJaPxPtqly7ZRr.jpg)',

                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: '#fff',
                    padding: '20px',
                }}
            >
                <Typography
                    variant="h3"
                    sx={{ fontWeight: 'bold', marginBottom: '16px' }}
                >
                    በቅርቡ ይጠብቁን
                </Typography>
                {/* <Typography variant="h5" sx={{ marginBottom: '32px' }}>
                    We're working hard to bring you something amazing. Stay tuned!
                </Typography> */}
                {/* 
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#ff4081',
                        padding: '10px 20px',
                        '&:hover': { backgroundColor: '#ff79a6' },
                    }}
                >
                    Notify Me
                </Button> 
                */}
            </Box>
        </>
    );
};

export default ComingSoon;
