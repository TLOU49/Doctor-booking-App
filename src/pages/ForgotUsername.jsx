import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../context/useAuth';

export const ForgotUsername = () => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [passportNumber, setPassportNumber] = useState('');
  const [idNumber, setIdNumber] = useState('')
  const [error, setError] = useState('');

  const handleForgotLogInDetails = (e) => {
    e.preventDefault();
    const data = {
      email, userName, passportNumber, idNumber
    };

    axios.post(`${api}/account/forgotLoginDetails`, data, {
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
    <div>
        <div className='bg-gradient-to-r from-dba_blue to-dba_light h-screen text-white text-center items-center flex flex-col col container-fluid pt-[4rem]'>
        <h1>Logo</h1>
        <div className="w-1/2">
    <h6 className="my-6 fs-4">Please enter your Email Address</h6>
    <form className="flex flex-col w-full items-center" onSubmit={handleForgotLogInDetails}>
        <input type="text" className="bg-inherit border-b-2 px-1 outline-0 my-6 h-[3rem] border-gray-400 w-1/2" placeholder='Email address...' value={email} onChange={e => setEmail(e.target.value)}/>
        <button className="btn btn-warning text-white font-bold w-1/2">Continue</button>
    </form>
    <p className="mt-[3rem] text-[13px]">Instructions will be sent to the contact details we have on record.</p>
    </div>

        <Link to='/login'>
        <p className="mt-4">Cancel</p>
        </Link>
    </div>
    {error && (
          <div className="text-red-500 mt-2">
            {typeof error === 'string' ? error : JSON.stringify(error.response, null, 2)}
          </div>
        )}
    </div>
  )
}
