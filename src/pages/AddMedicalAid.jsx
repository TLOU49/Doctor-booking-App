import axios from 'axios';
import React, { useState } from 'react'
import { LuCreditCard } from "react-icons/lu";
import { api } from '../context/useAuth';
import { useNavigate } from 'react-router-dom';

export const AddMedicalAid = () => {
    const [ MedicalAidName, setMedicalAidName ] = useState('');
    const [ MedicalAidNumber, setMedicalAidNumber ] =useState('');
    const UserId = localStorage.getItem('userId');
    const [error, setError] = useState('');

    const navigate = useNavigate();
    
    const handleAddMedicalAid = (e) => {
        e.preventDefault();

        const data = {MedicalAidName, MedicalAidNumber, UserId};

        axios.post(`${api}/medicalAid`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => {
            navigate('/payment');
          })
          .catch(error => {
            console.error('Error:', error.response?.data);
            
            if(error.response?.data){
              setError(error.reponse.data);
            }else{
              setError('An error occured. Please try again.')
            }
          })
    };

  return (
    <div className='col-9 bg-gradient-to-r from-dba_blue to-dba_light container-fluid h-screen flex flex-col items-center'>
         <div className="bg-white rounded mt-[3rem] flex flex-col col-10 h-2/6 ">
            <h3 className="text-center fs-5 fw-bold mt-1">Medical Aid</h3>

            <form action="" className="ml-6" onSubmit={handleAddMedicalAid}>
                {/* Membership Number */}
                    <span className="border-2 border-gray-400 flex flex-row rounded col-8 h-[2.9rem] py-1 bg-white">
                    <input type="text" placeholder='Membership No' className="border-none outline-none col-11 rounded px-2 fw-bold" value={MedicalAidNumber} onChange={e=>setMedicalAidNumber(e.target.value)} />
                    <LuCreditCard className='col-1 pr-1 fs-1 fw-bold '/>
                    </span>

                {/* Expiry & Name */}
                <div className="flex flex-row col-8 justify-between h-[3rem] mt-2 ">
                    <input type="text" placeholder='Valid from' className='rounded fw-bold text-center border-gray-400 border-2 outline-0 w-1/2 mr-1'/>
                    <input type="text" placeholder='Aid Name' className='rounded fw-bold text-center border-gray-400 border-2 outline-0 w-1/2 ml-1' value={MedicalAidName} onChange={e=>setMedicalAidName(e.target.value)}/>
                </div>

                {/* Name */}
                <input type="text" placeholder='Card holder name' className='col-8 fw-bold h-[3.3rem] pl-3 fw-normal rounded mt-2 border-2 border-gray-400 outline-none'/>

                <div className="flex flex-row col-8">
                    <button className="bg-green-950 rounded fw-bold text-white col-4 justify-between h-[2.5rem] mt-3 ml-auto">Add Card</button>
                </div>
            </form>
        </div>

        <p className="text-white fw-bold fs-6 my-[5rem]">
        Link your medical aid to the Consultation Room for quick and secure payment on the site. 
        </p>

        <p className="text-gray-500 fw-bold text-[14px] col-9">
        Card-related information, location, and information about the user patterns may be sent to Consultation Room and may be used together with account information to provide assessments to your card issuer or payment network to set up payments and prevent transaction fraud.
        </p>
    </div>
  )
}
