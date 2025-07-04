import React, { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SignUpForm from "./Components/SignUpForm";
import SignInForm from "./Components/SignInForm";
import ProtectedRoutes from './Components/ProtectedRoutes';
import { Toaster } from 'react-hot-toast';
import { useRecoilState, useRecoilValue } from 'recoil';
import { authAtom } from './atoms/authatom';
import ThemeToggle from './Components/ThemeToggle';
import Navbar from './Components/Navbar';
import LandingPage from './Pages/LandingPage';

const App = () => {
  const auth = useRecoilValue(authAtom)
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Router>
        <Routes>
          <Route path='/' element={
            <ProtectedRoutes>
              <HomePage />
            </ProtectedRoutes>
          } />
          <Route path="/register" element={!auth.token ? <SignUpForm /> : <Link to="/"></Link>} />
          <Route path="/login" element={!auth.token ? <SignInForm /> : <Link to="/"></Link>} />
          <Route path='/landing' element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;