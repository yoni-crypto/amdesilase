import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { assets } from '../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { jwtDecode } from 'jwt-decode';

const NewNavbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false); // State to track admin status
    const navigate = useNavigate();

    // Check if the user is logged in and their role
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
            try {
                const decodedToken = jwtDecode(token);
                setIsAdmin(decodedToken.role === 'admin');
            } catch (error) {
                console.error('Invalid token:', error);
                setIsLoggedIn(false);
            }
        }
    }, []);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        setIsAdmin(false);
        toast.success('Logged out successfully');
        navigate('/login');
    };

    const navLinks = [
        { label: 'ቀዳሚ ገጽ', path: '/' },
        { label: 'ስለ እኛ', path: '/comingsoon' },
        { label: 'የአገልግሎት ክፍሎች', path: '/comingsoon' },
        { label: 'መዝሙር', path: '/comingsoon' },
        { label: 'ማስታወቂያ', path: '/comingsoon' },
        { label: 'ያግኙን', path: '/comingsoon' },
        { label: 'አባልይሁኑ', path: '/register' },
        isAdmin && { label: 'Dashboard', path: '/admin' }, 
        {
            label: isLoggedIn ? 'Logout' : 'ይግቡ',
            path: isLoggedIn ? '#' : '/login',
            action: isLoggedIn ? handleLogout : undefined
        }
    ].filter(Boolean); 

    const drawerHeight = navLinks.length * 48;
    const appBarHeight = 64; // Adjust based on the actual height of your AppBar

    return (
        <div>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: '#333',
                    width: '100%',
                    boxShadow: 'none',
                    zIndex: 1300,
                }}
            >
                <Toolbar sx={{width:"95%",margin:"auto"}}>
                    <img
                        src={assets.eotcmk_logo}
                        alt="Logo"
                        style={{ width: 50, marginRight: '10px' }}
                    />
                    <Typography
                        variant="h6"
                        sx={{
                            flexGrow: 1,
                            color: '#fff',
                            fontSize: { xs: '1rem', sm: '1.25rem', md: '1.3rem', lg: '1.3rem' }, 
                            whiteSpace: 'nowrap', 
                            overflow: 'hidden',
                            textOverflow: 'ellipsis' 
                        }}
                    >
                        ዓምደ ሥላሴ ሰንበት ትምህርት ቤት
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        {navLinks.map((link) => (
                            <Typography
                                key={link.path}
                                variant="body1"
                                sx={{
                                    marginRight: { md: '25px', lg: '35px' },
                                    display: 'inline-block',
                                    color: '#fff',
                                    textDecoration: 'none',
                                    '&:hover': {
                                        color: '#ffcc00',
                                        textDecoration: 'underline'
                                    }
                                }}
                                component={link.path ? Link : 'span'}
                                to={link.path}
                                onClick={link.action}
                            >
                                {link.label}
                            </Typography>
                        ))}
                    </Box>
                    <IconButton
                        color="inherit"
                        edge="end"
                        onClick={handleDrawerToggle}
                        sx={{ display: { xs: 'block', md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>

                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={handleDrawerToggle}
                    PaperProps={{
                        sx: {
                            height: drawerHeight,
                            backgroundColor: '#333',
                            marginTop: `${appBarHeight}px`, // Ensure it aligns with the Toolbar
                            borderRadius: '0 0 8px 8px',
                        }
                    }}
                >
                    <List>
                        {navLinks.map((link) => (
                            <ListItem
                                button
                                key={link.path}
                                component={link.path ? Link : 'span'}
                                to={link.path}
                                onClick={link.action}
                            >
                                <ListItemText
                                    primary={link.label}
                                    sx={{
                                        color: 'white',
                                        textDecoration: 'none',
                                        '&:hover': {
                                            color: '#ffcc00',
                                            textDecoration: 'underline'
                                        }
                                    }}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </AppBar>

            {/* Adjust padding-top dynamically for different screen sizes */}
           
        </div>
    );
};

export default NewNavbar;
