import React from 'react';
import { Box, Typography } from '@mui/material';
import NewNavbar from './navbar';
import crossImage from './cross.png';

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
                    // backgroundImage: 'url(https://previews.123rf.com/images/wangshuangpaul/wangshuangpaul2310/wangshuangpaul231000049/234348563-christian-wooden-cross-on-sunset-background.jpg)',
                    backgroundImage: `url(${crossImage})`,
                    
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: '#fff',
                    padding: '20px',
                    '@media (max-width: 720px)': {
                        backgroundPosition: '-52% 0%', // Position the cross to the left on small screens
                        backgroundSize: 'cover',  // Ensure the whole cross fits on small screens
                    }
                }}
            >
                <Typography
                    variant="h3"
                    sx={{ fontWeight: 'bold', marginBottom: '16px' }}
                >
                    በቅርቡ ይጠብቁን
                </Typography>
                
            </Box>
        </>
    );
};

export default ComingSoon;
