import React, { useEffect, useRef } from 'react';
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
    const courseRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    } else {
                        entry.target.classList.remove('active');
                    }
                });
            },
            {
                threshold: 0.5,  // Trigger when 50% of the card is visible
            }
        );

        courseRefs.current.forEach((ref) => {
            if (ref) {
                observer.observe(ref);
            }
        });

        return () => {
            courseRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <div className='coursesContainer' style={{backgroundColor: "#f0f0f5", padding: "0px 0 30px 0" }}> 
            <div className='courses'>
                <Typography
                    style={{
                        marginBottom: "30px",
                        fontSize: "2.2rem",  // Larger title for a more impactful look
                        fontWeight: "bold",  // Make it bold for emphasis
                        color: "#333",  // Darker text color for contrast
                        '@media (max-width:600px)': {
                            fontSize: "1.3rem",  // Smaller size on small screens
                        }
                    }}
                    variant="h5"
                    align="center"
                    gutterBottom
                >
                    የምንሰጣቸው ኮርሶች
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {courses.map((course, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                ref={(el) => (courseRefs.current[index] = el)}
                                className='course-card'
                                sx={{
                                    backgroundColor: "#fafafa",  // Light background for contrast
                                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",  // Light shadow for depth
                                    transition: "transform 0.3s, box-shadow 0.3s",  // Smooth hover transitions
                                }}
                            >
                                <CardContent>
                                    <Typography
                                        variant="h6"
                                        align="center"
                                        sx={{
                                            fontSize: "1.25rem",  // Adjusted font size
                                            fontWeight: "500",  // Medium weight for better readability
                                            color: "#555",  // Softer color for the text
                                        }}
                                    >
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
