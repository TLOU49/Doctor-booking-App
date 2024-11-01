import React, { useState } from 'react';
import recaptcha from '../assets/RecaptchaLogo.svg.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { api } from '../context/useAuth';

export const Registration = () => {
    const [ isForeignNational, setIsForeignNational ] = useState(false);
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [passportNumber, setPassportNumber] = useState('');
    const [gender, setGender] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [countryOfIssue, setCountryOfIssue] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSACitizen, setISSACitizen] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleRegistrationForm = (e) => {
        e.preventDefault();

        let finalPassportNumber = passportNumber;
        let finalCountryOfIssue = countryOfIssue;

        if(!isForeignNational){
            finalPassportNumber = 'N/A';
            finalCountryOfIssue = 'N/A';
            setISSACitizen(true);
        }else{
            setIdNumber('N/A');
        };

        const data = {
            fullname, username, idNumber, passportNumber: finalPassportNumber, gender, dateOfBirth, countryOfIssue: finalCountryOfIssue, phoneNumber, email, password, isSACitizen
        }

        axios.post(`${api}/account/register`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            console.log('Response:', response.data);
        })
        .catch(error => {
            console.error('Error: ', error.response.data);

            if(error.response){
                setError(error.response.data);
            }else{
                setError('An error occured. Please try again');
            }
        })

    };

    const handleUserIdNumber = (e) => {
       const input = e.target.value;
       setIdNumber(input);

       if(input.length === 13)
       {
        const year = input.substring(0,2);
        const month = input.substring(2,4);
        const day = input.substring(4,6);
        const dob = `${day}/${month}/${year}`;
        setDateOfBirth(dob);

        // Set the gender
        const userGenderDigits = parseInt(input.substring(6,10), 10);
        if(userGenderDigits >= 0 && userGenderDigits <= 4999)
        {
            setGender('Female');
        }else if (userGenderDigits >= 500 && userGenderDigits <= 9999)
        {
            setGender('Male');
        }else{
            setDateOfBirth('');
            setGender('');
        }
       }
    };

  return (
    <div className='bg-gradient-to-r from-dba_blue to-dba_light container-fluid h-screen text-white flex flex-col items-center'>
        <div className="w-1/2 flex flex-col items-center justify-center mt-[1.5rem] h-fit pb-2" >

        <p className="">Consultation Room</p>
        <p className="fs-2 mt-[-0.5rem]">Register now</p>
        <p className="text-[13px]">We will verify your details in the next step</p>
        
        <div className="row text-dba_blue col-10 font-semibold h-[2.2rem]">
            <p className={`col-5 text-[15px] border-r-2 border-dba_blue rounded-l ${isForeignNational? 'bg-gray-300': 'bg-white border-b-4 border-warning'} cursor-pointer`} onClick={()=> setIsForeignNational(false)}>SA Citizen</p>
          
            <p className={`col-5 rounded-r ${isForeignNational? 'bg-white border-b-2 border-warning':'bg-gray-300'} cursor-pointer`} onClick={()=> setIsForeignNational(true)}>Non-SA Citizen</p>
        </div>

        <form action="" className="col-12 flex flex-col items-center" onSubmit={handleRegistrationForm}>
        <span className="col-10 text-[13px] ">
            <p className="mb-[-2px] mt-3">Full Name</p>
            <input type="text" className="w-5/6 text-gray-500 px-2 rounded h-[2rem] outline-0" value={fullname} onChange={e => setFullname(e.target.value)}/>
        </span>
        { isForeignNational ? '' : <span className="col-10 text-[13px]">
            <p className="mb-[-1px] mt-3">South African ID</p>
            <input type="text"  className="w-5/6 rounded h-[2rem] text-gray-500 px-2 outline-0" value={idNumber} onChange={handleUserIdNumber}/>
        </span>}
        
        {
            isForeignNational &&
            <span className="col-10 text-[13px] ">
            <p className="mb-[-1px] mt-3">Passport Number</p>
            <input type="text" className="w-5/6 rounded h-[2rem] text-gray-500 px-2 outline-0" value={passportNumber} onChange={e => setPassportNumber(e.target.value)}/>
        </span>
        }

        <span className="col-10 text-[13px]">
            <p className="mb-[-1px] mt-3">Date of Birth</p>
            <input type="text" className="w-5/6 rounded h-[2rem] text-gray-500 px-2 outline-0" value={dateOfBirth} readOnly={!isForeignNational} onChange={e => setDateOfBirth(e.target.value)}/>
        </span>
        {
            isForeignNational &&
        <span className="col-10 text-[13px] ">
            <p className="mb-[-1px] mt-3">Country of Issue</p>
            <input type="text" className="w-5/6 rounded h-[2rem] text-gray-500 px-2 outline-0" value={countryOfIssue} onChange={e => setCountryOfIssue(e.target.value)}/>
        </span>
        }
        <span className="col-10 text-[13px] w-5/6  ">
        <p className="mb-[-1px] mt-3">Gender</p>
        <select name="" id="" className=" text-gray-500 rounded w-5/6 h-[2rem] outline-0" value={gender} disabled={!isForeignNational} onChange={e => setGender(e.target.value)}>
        <option value="" disabled>Select Gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
        </select>
        </span>

        <span className="col-10 text-[13px]">
            <p className="mb-[-1px] mt-3">Email Address</p>
            <input type="text" className="w-5/6 rounded h-[2rem] text-gray-500 px-2 outline-0" value={email} onChange={e => setEmail(e.target.value)}/>
        </span>

        <span className="col-10 text-[13px]">
            <p className="mb-[-1px] mt-3">Cellphone Number</p>
            <input type="text" className="w-5/6 rounded h-[2rem] text-gray-500 px-2 outline-0" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>
        </span>
        <span className="col-10 text-[13px]">
            <p className="mb-[-1px] mt-3">Username</p>
            <input type="text" className="w-5/6 rounded h-[2rem] text-gray-500 px-2 outline-0" value={username} onChange={e => setUsername(e.target.value)}/>
        </span>
        <span className="mb-[1rem] text-[13px] col-10">
            <p className="mb-[-1px] mt-3">Password</p>
            <input type="text" className="w-5/6 rounded h-[2rem] text-gray-500 px-2 outline-0" value={password} onChange={e => setPassword(e.target.value)}/>
        </span>

        <div className="flex flex-row bg-gray-200 rounded col-7 h-[2.7rem] text-black py-2 mb-[1rem] mr-16">
            <input type="checkbox" id="" className='col-4 h-[1.6rem] '/>
            <p className="col-4 text-[12px] mt-2 h-[1.6rem]">I'm not a robot</p>
            <span className="col-3 ">
            <img src={recaptcha} alt="" className="ml-7 w-[3rem] h-[2.2rem]"/>
            </span>
        </div>
        <span className="col-10">
        <button className="btn col-10 btn-warning text-white font-bold" >Register</button>
        </span>
        </form>
        {error && (
          <div className="text-red-500 mt-2">
            {typeof error === 'string' ? error : JSON.stringify(error.response, null, 2)}
          </div>
        )}
    </div>
</div>
  )
}
