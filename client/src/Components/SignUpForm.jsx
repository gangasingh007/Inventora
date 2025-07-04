import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
import { authAtom } from '../atoms/authatom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const SignUpForm = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [loading, setloading] = useState(false)
  const [auth, setauth] = useRecoilState(authAtom);
  const navigate = useNavigate();
  const [done, setdone] = useState(true)


  const handleSubmit = async(e)=>{
     e.preventDefault();
     setloading(true);
     try {
      const res = await axios.post("http://localhost:5000/api/v1/auth/register",{
        username,
        password,
        email
      });
      const token = res.data.token
      localStorage.setItem("token",token);
      setauth({user:res.data.user,token:token})
      navigate("/")
      toast.success("Sign Up was Successfull",{
        duration : 4000,
        style : {
          color : "white",
          background : "black"
        }
      })
     }  catch (error) {
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
      setloading(false);
    }
  };

  return (
    <div className='sign-up-container'>
      <div className="form">
        <input 
        type="text"
        placeholder='Enter Your Username'
        onChange={(e)=>{
          setusername(e.target.value)
        }}
        />
        <input 
        type="email"
        placeholder='Enter Your Email'
        onChange={(e)=>{
          setemail(e.target.value)
        }}
        />
        <input 
        type="password"
        placeholder='Enter Your Password' 
        onChange={(e)=>{
          setpassword(e.target.value)
        }}
        />
        <button onClick={handleSubmit}>{!loading ? "Sign Up" : " Loading..."}</button>
        <p>Have an Account? <a href="/login"><span>Sign In</span></a></p>
      </div>
    </div>
   
  )
}

export default SignUpForm