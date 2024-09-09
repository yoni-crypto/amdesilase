import React from 'react';
import { Grid, Typography, TextField, Button, Paper, Box, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return (
        <div style={{ background: "linear-gradient(135deg, #e0e0e0, #f5f5f5)", padding: "50px 0" }}>
            <Box sx={{
                width: { xs: '100%', md: '80%' },
                mx: 'auto',
                mt: 4,
                border: 0
            }}>
                <Paper elevation={0} sx={{
                    p: { xs: 4, md: 6 },
                    backgroundColor: 'transparent',
                    color: 'text.secondary',
                    boxShadow: 'none'
                }}>
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
                                ያግኙን
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: '1.2rem', lineHeight: 1.6, color: '#555' }}>
                                የካራሎ ደብረታቦር ቅድስት ሥላሴ ቅድስት ድንግል ማርያምና ቅድስት አርሴማ ቤተክርስቲያን ‹‹ዓምደ ሥላሴ›› ሰንበት ትምህርት ቤት
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: '1.1rem', marginTop: '10px' }}>
                                <strong>አድራሻ:</strong> Kotebe Kara, AddisAbaba, Ethiopia
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: '1.1rem' }}>
                                <strong>ስልክ ቁጥር:</strong>{' '}
                                <Link href="tel:+251912273705" underline="hover" sx={{ color: '#0066cc' }}>
                                    +251912273705
                                </Link>
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: '1.1rem' }}>
                                <strong>E-mail:</strong>{' '}
                                <Link href="mailto:amdesilase@gmail.com" underline="hover" sx={{ color: '#0066cc' }}>
                                    amdesilase@gmail.com
                                </Link>
                            </Typography>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
                                መልእክቶን ያስቀምጡ
                            </Typography>
                            <form>
                                <TextField 
                                    fullWidth 
                                    label="ስም" 
                                    margin="normal" 
                                    variant="outlined" 
                                    sx={{ 
                                        marginBottom: '15px', 
                                        '& .MuiInputBase-root': { fontSize: '1.1rem' } 
                                    }} 
                                />
                                <TextField 
                                    fullWidth 
                                    label="ኢሜል" 
                                    margin="normal" 
                                    variant="outlined" 
                                    sx={{ 
                                        marginBottom: '15px', 
                                        '& .MuiInputBase-root': { fontSize: '1.1rem' } 
                                    }} 
                                />
                                <TextField 
                                    fullWidth 
                                    label="መልእክት" 
                                    multiline 
                                    rows={4} 
                                    margin="normal" 
                                    variant="outlined" 
                                    sx={{ 
                                        marginBottom: '15px', 
                                        '& .MuiInputBase-root': { fontSize: '1.1rem' } 
                                    }} 
                                />
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    fullWidth 
                                    sx={{ 
                                        padding: '10px', 
                                        fontSize: '1.1rem', 
                                        maxWidth: '300px', 
                                        mx: 'auto', 
                                        display: 'block' 
                                    }}>
                                    ላክ
                                </Button>
                            </form>
                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                                <Link href="#" color="inherit" sx={{ mx: 2, fontSize: '2rem' }}>
                                    <FacebookIcon fontSize="inherit" />
                                </Link>
                                <Link href="https://t.me/amdasilase07" color="inherit" target="_blank" rel="noopener noreferrer" sx={{ mx: 2, fontSize: '2rem' }}>
                                    <TelegramIcon fontSize="inherit" />
                                </Link>
                                <Link href="#" color="inherit" sx={{ mx: 2, fontSize: '2rem' }}>
                                    <InstagramIcon fontSize="inherit" />
                                </Link>
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
