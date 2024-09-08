import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import './courses.css';

const courses = [
    'ትምህርተ ሃይማኖት',
    'ክርስቲያናዊ ሥነ ምግባር',
    'የመፅሀፍ ቅዱስ ጥናት',
    'የቤተክርስቲያን ታሪክ',
    'ሥርዓተ ቤተክርስቲያን',
    'ልሳነ ግዕዝ'
];

const Courses = () => {
    return (
        <div className='coursesContainer'>
            <div className='courses'>
                <Typography
                    style={{
                        marginBottom: "30px",
                        fontSize: "2rem",  
                        '@media (max-width:600px)': {
                            fontSize: "1.5rem",  // Smaller size on small screens
                        }
                    }}
                    variant="h5"
                    align="center"
                    gutterBottom
                >
                    የምንሰጣቸው ኮርሶች 
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                    {courses.map((course, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card className='course-card'>
                                <CardContent>
                                    <Typography variant="h6" align="center">
                                        {course}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
};

export default Courses;
