import React, { useEffect, useState } from 'react'
import { FiEye } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";
import {api} from '../context/useAuth';
import axios from 'axios';

export const PendingApplications = () => {
  const [applications, setApplications] = useState([]);
  const [error, setError] = useState('');
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');
  
  // fetch pending applications
  const fetchApplications = async () => {
    try {
      const response = await axios.get(`${api}/applications`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      setApplications(response.data);
    } catch (error) {
      setError(error);
    }    
  }
  
  useEffect(() => {
    fetchApplications();
  }, []);
  
  // Application approval By Admin
  const handleApplicationApproval = async  (application) => {
    const newRole = 'Doctor';
    
    try {
      const response = await axios.post(`${api}/applications/approve-application?userId=${userId}&newRole=${newRole}&id=${application.id}`, {}, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      
      // reload the page if approval is successfull
      if (response.status === 200) {
        window.location.reload();
      }
    } catch (error) {      
      if(error.response?.data){
        setError(error.response.data);
      }else{
        setError('An error occured. Please try again.')
      }
    }
  };

  const handleApplicationDecline = async (application) => {
    try {
      const response = await axios.delete(`${api}/applications/${application.id}?userId=${userId}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      
      // reload the page if decline is successfull
      if (response.status === 200) {
        window.location.reload();
      }
    } catch (error) {      
      if(error.response?.data){
        setError(error.response.data);
      }else{
        setError('An error occured. Please try again.')
      }
    }
  };

  return (
    <div className='flex flex-col'>
      {applications.length === 0 ? (
        <p className="mt-10 italic text-gray-600 text-center">No pending applications</p>
      ) : (
                  <table className="mx-12">
                  <thead className=''>
                    <tr className="text-left ">
                      <th className="">Registered name</th>
                      <th className="">Practice Number</th>
                      <th className="">Specialization</th>
                      <th className="">Application Date</th>
                      <th className="">Certificates</th>
                    </tr>
                  </thead>
                  <tbody className="pt-2">
                    {
                      applications.map((application, index) => (
                        <tr className="border-b-2"  key={index}>
                        <td className="">{application.practiceName}</td>
                        <td className="">{application.practiceNumber}</td>
                        <td className="">{application.specialization}</td>
                        <td className="">{application.applicationDate}</td>
                        <td className=""><span className='flex flex-row cursor-pointer'><FiEye className='mx-3'/> <MdOutlineFileDownload /></span></td>
                        <td className="">
                <button className="btn btn-success fw-bold text-white my-1" onClick={()=>handleApplicationApproval(application)}>Approve</button>
                        </td>
                        <td className="">
                <button className="btn btn-danger ml-2 fw-bold text-white my-1" onClick={()=>handleApplicationDecline(application)}>Decline</button>
                        </td>
              </tr>
                  ) )
                }
              </tbody>
          </table>
      )}

          {/* Approve all button */}
          <button className="btn btn-warning col-1 text-white fw-bold px-2  absolute bottom-10 right-20">Approve All</button>
    </div>
  )
}
