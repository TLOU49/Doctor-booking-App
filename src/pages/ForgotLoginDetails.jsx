import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../context/useAuth';

export const ForgotLoginDetails = () => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [passportNumber, setPassportNumber] = useState('');
  const [idNumber, setIdNumber] = useState('')
  const [error, setError] = useState('');

  const handlePassword = (e) => {
    e.preventDefault();
    const data = {
      email, userName, passportNumber, idNumber
    };

    axios.post(`${api}/account/forgotPassword`, data, {
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log(response.data);
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
    <div className='bg-gradient-to-r from-dba_blue to-dba_light h-screen text-white text-center items-center flex flex-col col container-fluid pt-[4rem]'>
        <h1>Logo</h1>
        <div className="w-1/2">
        <h6 className="my-6 fs-4">Please enter your Username</h6>
        <form className="flex flex-col w-full items-center" onSubmit={handlePassword}>
            <input type="text" className="bg-inherit border-b-2 px-1 outline-0 my-6 h-[3rem] border-gray-400 w-1/2" placeholder='Username...' value={userName} onChange={e=>setUserName(e.target.value)}/>
            <button className="btn btn-warning text-white font-bold w-1/2">Continue</button>
        </form>
        <p className="mt-[3rem] text-[13px]">Instructions will be sent to the contact details we have on record.</p>
        </div>
        <Link to='/login'>
        <p className="mt-4">Cancel</p>
        </Link>
    </div>
  )
}
