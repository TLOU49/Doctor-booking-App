import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import doctor from '../assets/aa.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { api } from '../context/useAuth';

export const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const data = {
      userName, password
    }

    axios.post(`${api}/account/login`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log('Response:', response.data);
      navigate('/registration')
    })
    .catch(error => {
      console.error('Error:', error.response.data);
      
      if(error.response.data){
        setError(error.reponse.data);
      }else{
        setError('An error occured. Please try again.')
      }
    })
  };

  return (
    <div className='bg-gradient-to-r from-dba_blue to-dba_light container-fluid h-screen row pt-[15rem]'>
      {/* CARTOON */}
      <div className="col-6 h-full">
        <img src={doctor} alt="doctor-icon" className="img-fluid pl-[7rem]" />
      </div>
        
      {/* INPUTS */}
      <div className="col-6 text-white ">
        <span className="">
        <p className="fs-3 font-semibold row">Welcome to the</p>
        <p className="fs-1 font-semibold row">Consultation Room</p>
        </span>

        <form action="" className="" onSubmit={handleLogin}>
        <h4 className="text-[15px]">Please Enter your Account details</h4>
        <span className="flex flex-col w-3/5">
          <p className="text-[13px]">Email</p>
          <input type="text" className="px-2 rounded w-full h-[2.5rem] outline-0 text-gray-500 text-[14px] font-semibold" value={userName} onChange={e => setUserName(e.target.value)} />
        </span>

        <span className="flex flex-col w-3/5">
          <p className="text-[13px]">Password</p>
          <input type="password" className="px-2 rounded w-full h-[2.5rem] outline-0 text-gray-500" value={password} onChange={e => setPassword(e.target.value)}/>
          <Link to='/forgot-password' className='ml-auto no-underline'>
        <p className="text-[13px] mt-1 text-white ">Forgot Password</p>
          </Link>
        </span>

        <button className="btn btn-warning w-3/5 h-[2.5rem] mb-6 text-white text-[17px] font-bold">Login</button>
        </form>
        <div className="flex flex-row justify-content-center w-3/5 my-[2rem] text-[4rem] ">
          <FcGoogle className=''/>
          <BsFacebook className='text-facebook_bg bg-white rounded-full ml-4'/>
        </div>

        <div className="text-[15px]">
          <span className="flex text-white">Don't have an account? <Link to='/registration'><p className="text-reset pl-2">Register here</p></Link></span>
        </div>
          
      </div>
    </div>
  )
}
