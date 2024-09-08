import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Paper, Box, Link } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import NewNavbar from './navbar';

export default function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('https://amdesilase-api.vercel.app/api/auth/register', { username, email, password });
            toast.success('Registration successful!'); 
            navigate('/login'); 
        } catch (error) {
            toast.error(error.response?.data?.message || 'Registration failed'); // Show error toast
            setError(error.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <>
            <NewNavbar />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                    backgroundColor: '#f4f6f8',
                    padding: 2,
                }}
            >
                <Container component="main" maxWidth="xs">
                    <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography variant="h5" gutterBottom>
                            Sign Up
                        </Typography>
                        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                            <TextField
                                label="Username"
                                fullWidth
                                margin="normal"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            <TextField
                                label="Email"
                                type="email"
                                fullWidth
                                margin="normal"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <TextField
                                label="Password"
                                type="password"
                                fullWidth
                                margin="normal"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
                            <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
                                Sign Up
                            </Button>
                        </form>
                        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                            Already have an account?{' '}
                            <Link href="/login" variant="body2">
                                Sign In
                            </Link>
                        </Typography>
                    </Paper>
                </Container>
            </Box>
            <ToastContainer /> {/* Include ToastContainer */}
        </>
    );
}