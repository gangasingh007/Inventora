import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { authAtom } from './atoms/authatom';
import Login from './Components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './Components/ProtectedRoutes';
import HomePage from './pages/HomePage';
import Register from './Components/Register';
import toast, { Toaster } from 'react-hot-toast';
import LandingPage from './pages/LandingPage';
import ProfilePage from './pages/ProflePage';

function App() {
  const [auth, setAuth] = useRecoilState(authAtom);

  useEffect(() => {
    const fetchMe = async () => {
      if (!auth.token) return;

      try {
        const res = await axios.get('http://localhost:5000/api/v1/auth/me', {
          headers: { Authorization: `Bearer ${auth.token}` },
        });
        const currentUser = res.data.user;
        setAuth({ user: currentUser, token: auth.token });
      } catch (err) {
        localStorage.removeItem('token');
        setAuth({ user: null, token: null });
        toast.error('Session expired. Please log in again.', {
          duration: 4000,
          position: 'top-center',
        });
      }
    };
    fetchMe();
  }, [auth.token,setAuth]); // Added dependencies

  return (
    <BrowserRouter>
      <Toaster 
      position="top-right"
      toastOptions={{
        style:{
          background: "black",
          color:"white"
        }
      }}
      />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <HomePage />
            </ProtectedRoutes>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;