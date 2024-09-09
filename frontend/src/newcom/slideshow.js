import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Slideshow.css'; // Add styles for dot indicators and navigation buttons
import { showcase_bg, text } from '../assets/assets';

const Slideshow = () => {
    const images = [
        showcase_bg.showcase_bg1,
        showcase_bg.showcase_bg2,
        showcase_bg.showcase_bg3,
        showcase_bg.showcase_bg4,
        // showcase_bg.showcase_bg5,
        // showcase_bg.showcase_bg6,
        // showcase_bg.showcase_bg7,
        // showcase_bg.showcase_bg8
    ];

    const texts = [
        text.text1,
        text.text2,
        text.text3,
        text.text4,
        text.text5,
        text.text6,

    ];

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const totalSlides = Math.max(images.length, texts.length);

    const nextSlide = () => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    const goToSlide = (index) => {
        setCurrentSlideIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Box
            sx={{
                position: 'relative',
                height: { xs: '50vh', md: '60vh', lg: '60vh' }, 
                maxHeight: '600px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
            }}
        >
            <Box
                className="smooth-transition" 
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${images[currentSlideIndex % images.length]})`, 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.8, 
                    zIndex: -1,
                }}
            />

            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
                    zIndex: -1,
                }}
            />

            <Box
                sx={{
                    position: 'absolute',
                    left: { xs: '5%', md: '10%' }, 
                    top: '50%', 
                    transform: 'translateY(-50%)', 
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    padding: { xs: '10px', md: '15px' },
                    borderRadius: '8px',
                    maxWidth: { xs: '80%', md: '60%', lg: '30%' }, 
                    width: 'auto',
                    textAlign: 'left',
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontSize: { xs: '1rem', md: '1.5rem', lg: '1.75rem' }, 
                        margin: 0,
                        fontFamily: "'Roboto', sans-serif", 
                        lineHeight: '1.4', 
                    }}
                >
                    {texts[currentSlideIndex % texts.length]}
                </Typography>
            </Box>

            <IconButton
                sx={{
                    position: 'absolute',
                    left: 20,
                    color: 'white',
                    display: { xs: 'none', md: 'block' }, 
                }}
                onClick={prevSlide}
            >
                <ArrowBackIosIcon />
            </IconButton>

            <IconButton
                sx={{
                    position: 'absolute',
                    right: 20,
                    color: 'white',
                    display: { xs: 'none', md: 'block' }, 
                }}
                onClick={nextSlide}
            >
                <ArrowForwardIosIcon />
            </IconButton>

            <Box
                sx={{
                    position: 'absolute',
                    bottom: 20,
                    display: 'flex',
                    gap: { xs: '5px', md: '10px' },
                }}
            >
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${index === currentSlideIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default Slideshow;
