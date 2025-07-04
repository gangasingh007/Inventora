import React, { useState } from 'react';
import axios from "axios";
import { useRecoilState } from 'recoil';
import { authAtom } from '../atoms/authatom';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const SignInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useRecoilState(authAtom);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [done, setdone] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/v1/auth/login", {
        username,
        password
      });
      const token = res.data.token;
      localStorage.setItem("token", token);
      setAuth({ user: res.data.user, token});
      navigate("/");
      toast.success('Login Was Successfull!', {
            duration: 4000,
            style: {
               background: '#333',
              color: '#fff',
           }
    });
    setdone(true)
    } catch (error) {
      console.error("Login failed", error);
      toast.error("An error occured",{
        duration:4000,
        style:{
          color:"white",
          background:"black"
        }
      })
      setdone(false)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='sign-in-container'>
      <div className="form">
        <input 
          type="text"
          placeholder='Enter Your Username'
          onChange={(e) => setUsername(e.target.value)}
        />
        <input 
          type="password"
          placeholder='Enter Your Password' 
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>
          {loading ? "Loading..." : "Sign In"}
        </button>
        <p>Need an Account? <a href="/register"><span>Register Now</span></a></p>
      </div>
    </div>
  );
};

export default SignInForm;
