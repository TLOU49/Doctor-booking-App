import axios from 'axios';
import React, { useState } from 'react';
import { IoDocumentAttach  } from "react-icons/io5";
import { api } from '../context/useAuth';
import { toast, ToastContainer,  } from 'react-toastify';

export const DoctorApplications = () => {
  const UserId = localStorage.getItem('userId');
  const [Specialization, setSpecialization] = useState('');
  const [PracticeNumber, setPracticeNumber] = useState('');
  const [PracticeName, setPracticeName] = useState('');
  const [Certificates, setCertificates] = useState('');
  const [error, setError] = useState('');
  const [Status, setStatus] = useState('True');
  const ApplicationDate = new Date()
  console.log('Date: ',ApplicationDate);

  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    if(selectedFiles.length > 0)
    {
      setCertificates(selectedFiles);
    }

    Array.from(selectedFiles).forEach(file => {
      console.log(file.name);
    });
  };

  const handleDoctorRegistration = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('UserId', UserId);
    formData.append('Specialization', Specialization);
    formData.append('PracticeName', PracticeName);
    formData.append('PracticeNumber', PracticeNumber);
    formData.append('Status', Status);
    formData.append('Status', ApplicationDate);

    Array.from(Certificates).forEach((file)=> {
      formData.append('Certificates', file);
    })

    try {
      const response = await axios.post(`${api}/applications`, formData, {
        headers:{
          'Content-Type':'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      console.log('Registration Success: ', response.data);
      toast('Application has been submitted successfully.')
    } catch (error) {
      if(error.response){
        setError(error.response.data);
          console.log(error.response.data);
      }else {
        setError('An error occurred. Please try again');
      }
        console.error("Error submitting application", error);
        toast.error(error.response.data);
    }
  };

  const handlePracticeNumberChange = (e)=> {
    let value = e.target.value.replace(/\D/g, '');
    setPracticeNumber(value)
  };

  return (
    <div className='bg-gradient-to-r from-dba_blue to-dba_light h-screen text-white text-center items-center flex flex-col col container-fluid pt-[4rem]'>
      <ToastContainer className='text-[0.1rem]'/>
        <h2 className="">Register to become a medical practioner</h2>
        
        {/* Disclaimer */}
        <span className=" mt-3 text-[13px] w-9/12 text-gray-400">
        <p className=" ">By registering, you agree to allow Doctor Booking App (DBA) to process your information and conduct background checks. Please note that confirmation of your registration does not guarantee approval, as DBA reserves the right to admit or approve candidates at its discretion. </p>
        <p className="">Should you not receive communication from us in 3 working days please send us an email on DMabuela@singular.co.za.</p>
        </span>

        {/* Registration Form */}
        <form action="" className="flex flex-col mt-4 w-4/5 min-h-60 p-4 text-[14px] font-semibold items-start" onSubmit={handleDoctorRegistration}>

        {/* Doctor Specialization */}
        <span className="w-1/3 text-start">
          <p className="mb-[-1px] pl-1">Professional Board</p>
          <select name="Specialization" id="Specialization" className="w-full text-gray-600 rounded h-8 px-1 border-none outline-none" onChange={(e)=> setSpecialization(e.target.value)}>
            <option value="" className=""disabled>e.g Dentist</option>
            <option value="Dental Assisting, Dental Therapy And Oral Hygiene" className="">Dental Assisting, Dental Therapy And Oral Hygiene</option>
            <option value="Dietetics And Nutrition" className="">Dietetics And Nutrition</option>
            <option value="Emergency Care" className="">Emergency Care</option>
            <option value="" className="">Environmental Health</option>
            <option value="Environmental Health" className="">Medical & Dental</option>
            <option value="Medical Technology" className="">Medical Technology</option>
            <option value="Occupational Therapy, Medical Orthotics, Prosthetics And Arts Therapy" className="">Occupational Therapy, Medical Orthotics, Prosthetics And Arts Therapy</option>
            <option value="Optometry And Dispensing Opticians" className="">Optometry And Dispensing Opticians</option>
            <option value="Physiotherapy, Podiatry And Biokinetics" className="">Physiotherapy, Podiatry And Biokinetics</option>
            <option value="Psychology" className="">Psychology</option>
            <option value="Radiography And Clinical Technology" className="">Radiography And Clinical Technology</option>
            <option value="Speech, Language And Hearing" className="">Speech, Language And Hearing</option>
          </select>
        </span>

        {/* Practice Number */}
        <span className="w-1/3 text-start mt-2">
          <p className="mb-[-1px] pl-1">Practice Number</p>
          <input type="text" className="mt-1 w-full rounded h-8 px-2 border-none outline-none text-gray-600" value={PracticeNumber} onChange={handlePracticeNumberChange} maxLength={7}/>
        </span>

        {/* Practice Name/Registered Name */}
        <span className="w-1/3 text-start mt-2">
          <p className="mb-[-1px] pl-1">Practice Name</p>
          <input type="text" className="mt-1 w-full rounded h-8 px-2 border-none outline-none text-gray-600"  value={PracticeName} onChange={(e)=> setPracticeName(e.target.value)}/>
        </span>

        {/* Certificates */}
        <span className="w-1/2 flex flex-col justify-start mt-2 h-auto">
          <input type="file" name="" id="documents" multiple accept='.pdf' onChange={handleFileChange} className='hidden'/>
          <label htmlFor="documents">

            {/* attach file icon */}
            <span className="cursor-pointer flex w-3/12 rounded underline">
              <IoDocumentAttach  className='text-[1.2rem] mt-1'/>
                <p className="text-[12px] mt-1">Upload files</p>
            </span>
          </label>

          {/* Document names */}
              {
                Certificates && 
                Array.from(Certificates).map((file, index) => (
                  <div className="text-[11px] flex flex-row pt-1 mb-[-12px]">
                  <p key={index}>{file.name}</p>
                  <p className="pl-2">{file.size}K</p>
                  </div>
                  
                ))
              }              
        </span>

        <button className="bg-green-500 btn btn-success w-[7rem] mt-3 fw-bold">Submit</button>

        </form>

    </div>
  )
}
