import React from 'react';
import { Grid, Typography, TextField, Button, Paper, Box, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return (
        <div style={{backgroundColor:"#f0f0f0"}}>
            <Box sx={{
                width: { xs: '100%', md: '80%' },
                mx: 'auto',
                mt: 4,
                border: 0
            }}>
                <Paper elevation={0} sx={{
                    p: 6,
                    backgroundColor: '#f0f0f0',
                    color: 'text.secondary',
                    boxShadow: 'none'
                }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" gutterBottom>
                                ያግኙን
                            </Typography>
                            <Typography variant="body1">
                            የካራሎ ደብረታቦር ቅድስት ሥላሴ ቅድስት ድንግል ማርያምና ቅድስት አርሴማ ቤተክርስቲያን ‹‹ዓምደ ሥላሴ›› ሰንበት ትምህርት ቤት 
                            </Typography>
                            <Typography variant="body2"><strong>አድራሻ:</strong> Kotebe Kara, AddisAbaba, Ethiopia</Typography>
                            <Typography variant="body2"><strong>ስልክ ቁጥር:</strong> +123-456-7890</Typography>
                            <Typography variant="body2"><strong>E-mail:</strong> amdeselase@gmail.com</Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" gutterBottom>
                                መልእክቶን ያስቀምጡ
                            </Typography>
                            <form>
                                <TextField fullWidth label="Name" margin="normal" variant="outlined" sx={{ input: { maxWidth: '300px' } }} />
                                <TextField fullWidth label="E-mail address" margin="normal" variant="outlined" sx={{ input: { maxWidth: '300px' } }} />
                                <TextField fullWidth label="Message" multiline rows={4} margin="normal" variant="outlined" sx={{ input: { maxWidth: '300px' } }} />
                                <Button variant="contained" color="primary" fullWidth sx={{ mt: 2, maxWidth: '300px' }}>
                                    Submit
                                </Button>
                            </form>
                            <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 2 }}>
                                <Link href="#" color="inherit"><FacebookIcon /></Link>
                                <Link href="https://t.me/amdasilase07" color="inherit" target="_blank" rel="noopener noreferrer"><TelegramIcon /></Link>
                                <Link href="#" color="inherit"><InstagramIcon /></Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5938.673891165705!2d38.86480436312176!3d9.042084095154506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b90f76e0e945b%3A0x3efc503287fddf06!2zS2FyYWxvIFNlbGFzc2llIENodXJjaCB8IEtvdGViZSBLYXJhIHwg4Yqr4Yir4YiOIOGJheGLteGIteGJtSDhiKXhiIvhiLQg4Ymk4Ymw4Yqt4Yit4Yi14Ymy4Yur4YqVIHwg4Yqu4Ymw4YmkIOGKq-GIqw!5e0!3m2!1sen!2set!4v1719778700459"
                                style={{ width: '100%', height: '300px', border: 'none' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </div>
    );
}

export default Footer;