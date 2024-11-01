import axios from 'axios';
import React, { useState } from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import { api } from '../context/useAuth';

export const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  
  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');
  const email = localStorage.getItem('email');

  const handleChangePassword = (e) => {
    e.preventDefault();

    const data = {
       newPassword, userId, token, email
    };

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      console.log("Passwords do not match");
      return;
    };

    axios.post(`${api}/account/ChangePassword`, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      console.log('Response:', response.data);
      navigate('/login');
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
    <div className='bg-gradient-to-r from-dba_blue to-dba_light container-fluid h-screen pt-[2rem] flex flex-col items-center'>
             
        <div className="row col-6 h-[3rem] text-white pt-[4rem]">
        <Link to='/login' className="col-2 fs-4 mt-2 text-white cursor-pointer">
        <IoMdArrowRoundBack />
        </Link>
        <h3 className="col-10 fs-2 ">Change your password</h3>
        </div>

        <form className="row col-10 flex flex-col items-center py-[6rem]" onSubmit={handleChangePassword}>
            <div className="col-12 flex flex-col items-center">
                <input type="text" className="col-6 h-[2.4rem] text-[13px] px-2 rounded-md mt-2 outline-green-500" placeholder='Current password'/>
                <Link to='/forgot-password/username' className=''>
                <p className="text-[12px] mt-1">Forgot password</p>
                </Link>
            </div>

            <span className="col-12 flex flex-col items-center pt-4">
            <input type="text" className="col-6 h-[2.4rem] text-[13px] px-2 rounded-md outline-green-500" placeholder='New password' value={newPassword} onChange={e => setNewPassword(e.target.value)}/>
            </span>
            <span className="flex flex-col items-center">
            <input type="text" className="col-6 mt-4 h-[2.4rem] text-[13px] px-2 rounded-md outline-green-500" placeholder='Confirm password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
            </span>
                <button className="btn btn-warning col-6 mt-4 text-white">Save</button>
            {/* <span className="btn btn-warning col-6 mt-4 text-white font-bold">
            </span> */}
            {error && (
          <div className="text-red-500 mt-2">
            {typeof error === 'string' ? error : JSON.stringify(error.response, null, 2)}
          </div>
        )}
        </form>
        
    </div>
  )
}
