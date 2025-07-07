import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { authAtom } from '../atoms/authatom';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Eye, Mail, User } from 'lucide-react';
import toast from 'react-hot-toast';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [seePass, setSeePass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useRecoilState(authAtom);
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/api/v1/auth/register', {
        username,
        password,
        email,
      });
      const { token, user } = res.data;
      localStorage.setItem('token', token);
      setAuth({ user, token });

      toast.success('Registration successful!', {
        duration: 2000,
        position: 'top-center',
      });

      navigate(state?.from?.pathname || '/', { replace: true });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || 'An error occurred during registration';
      toast.error(errorMessage, {
        duration: 4000,
        position: 'top-center',
      });
      console.error('Registration error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sign-up-container">
      <div className="form1">
        <div className='logo'>
            Invetora
          </div>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <User className='user-icon' />
        <div className="pass-container">
          <input
            type={seePass ? 'text' : 'password'}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Eye
            className="eye-icon"
            size={20}
            onClick={() => setSeePass(!seePass)}
          />
        </div>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Mail className='mail-icon'/>
        <button className='btn'
          onClick={handleSubmit}
        >
          {loading ? 'Loading...' : 'Register Now'}
        </button>
        <p>Already Have an Account ? <a href="/login"><span>Login</span></a></p>
      </div>
    </div>
  );
};

export default Register;