import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Paper, Box, Link } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import { toast, ToastContainer } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles
import NewNavbar from './navbar';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('https://amdesilase-api.vercel.app/api/auth/login', { email, password });
            const { token } = response.data;

            localStorage.setItem('token', token); 

            const decodedToken = jwtDecode(token);
            if (decodedToken.role === 'admin') {
                navigate('/admin'); 
            } else {
                navigate('/'); 
            }

            toast.success('Login successful!'); 
        } catch (error) {
            toast.error(error.response?.data?.message || 'Login failed'); 
            setError(error.response?.data?.message || 'Login failed');
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
                            Sign In
                        </Typography>
                        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
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
                                Sign In
                            </Button>
                        </form>
                        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                            Don't have an account?{' '}
                            <Link href="/reg" variant="body2">
                                Register
                            </Link>
                        </Typography>
                    </Paper>
                </Container>
            </Box>
            <ToastContainer /> 
        </>
    );
}