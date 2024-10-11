import { Route, Routes, Navigate } from 'react-router-dom';
import Register from './newcom/register';
import DashboardLayoutBasic from './pages/admin/ad-2';
import ComingSoon from './newcom/comingsoon';
import Signup from './newcom/signup';
import Login from './newcom/Login';
import Newhome from './pages/Home/Newhome';
import {jwtDecode} from 'jwt-decode';
import { useState, useEffect } from 'react';

function App() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true); 
    const isAuthenticated = !!localStorage.getItem('token'); 

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (isAuthenticated && token) {
            try {
                const decodedToken = jwtDecode(token);
                if (decodedToken.role === 'admin') {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }
            } catch (error) {
                console.error('Invalid token');
                setIsAdmin(false);
            }
        } else {
            setIsAdmin(false);
        }
        setLoading(false);
    }, [isAuthenticated]);

    if (loading) {
        return <div>Loading...</div>; 
    }

    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Newhome />} />
                <Route path='/reg' element={<Signup />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/comingsoon' element={<ComingSoon />} />
                <Route
                    path='/admin'
                    element={isAdmin ? <DashboardLayoutBasic /> : <Navigate to="/login" />} // Redirect to login if not admin
                />
            </Routes>
        </div>
    );
}

export default App;
