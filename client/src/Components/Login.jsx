import React from 'react'
import { useState } from 'react';
import {Eye, User} from "lucide-react";
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { authAtom } from '../atoms/authatom';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [seePass, setseePass] = useState(true);
  const [loading, setloading] = useState(false);
  const [auth , setAuth] = useRecoilState(authAtom);
  const navigate = useNavigate()


  const handlesubmit = async (e)=>{
    e.preventDefault();
    setloading(true)
    try {
      const res = await axios.post("http://localhost:5000/api/v1/auth/login",{
        username : username,
        password : password
      })
      const token = res.data.token;
      const user  = res.data.user;
      localStorage.setItem("token",token);
      setAuth({
        token : token,
        user:user
      })
      toast.success("Login Was Successfull");
      navigate("/")
    } catch (error) {
      toast.error("An error occured")
    }
    finally{
      setloading(false)
    }
  }

  return (
    <div className = "sign-in-container">
      <div className="form">
        <input 
        type="text"
        placeholder="Enter your Username"
        onChange={(e)=>{
          setusername(e.target.value)
        }}
         />
         <User className='user-icon'/>
        <div className="pass-container">
          <input 
           type={seePass ? "password" : "text"}
           placeholder='Enter Your password'
           onChange={(e)=>{
              setpassword(e.target.value)
         }} 
         />
         <Eye className='eye-icon' size={20} onClick={()=>{
            setseePass(!seePass)
         }}/>
        </div>
         <button onClick={handlesubmit}>
          {loading ? "Loading..." : "Login Now"}
         </button>
          <p>Need an Account ? <a href="/register"><span>Register</span></a></p>
      </div>
    </div>
  )
}

export default Login