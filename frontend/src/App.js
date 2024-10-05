import { Route, Routes, Navigate } from 'react-router-dom';
import Register from './newcom/register';
import DashboardLayoutBasic from './pages/admin/ad-2';
import ComingSoon from './newcom/comingsoon';
import Signup from './newcom/signup';
import Login from './newcom/Login';
import Newhome from './pages/Home/Newhome';

function App() {
    const isAuthenticated = !!localStorage.getItem('token');
    const userrole = localStorage.getItem('role');

    const isAdmin = isAuthenticated && userrole === 'admin'

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
                    element={isAdmin ? <DashboardLayoutBasic /> : <Navigate to="/login" />}
                />
            </Routes>
        </div>
    );
}

export default App;
