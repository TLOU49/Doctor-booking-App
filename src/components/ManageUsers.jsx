import React, { useEffect, useState } from 'react';
import {api} from '../context/useAuth';
import { BeatLoader } from 'react-spinners'; 

export const ManageUsers = () => {
  const [error, setError] = useState(null);
  const [roleName, setRoleName] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Get User Roles
  useEffect(() => {
    if (roleName) {
      handleFetchUsers();
    }
  }, [roleName]);

  const handleFetchUsers = () => {
    setLoading(true); 

    const token = localStorage.getItem('token');

    fetch(`${api}/userRole/users-in-RoleManager/${roleName}`, {
        method: 'GET', 
        headers: {
            'Authorization': `Bearer ${token}`, 
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        console.log("Response Status:", response.status);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        setUsers(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        setError(error);
    })
    .finally(() => {
        setLoading(false);
    });
};

  if (loading) {
    return <p className='mt-10 text-center'><BeatLoader color="#5ad82d" /></p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Suspend Doctor
   const handleDoctorSuspension = async  (application) => {
    const newRole = 'User';
    
    try {
      const response = await axios.post(`${api}/userRole/change-role?userId=${userId}&newRole=${newRole}`, {
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
  return (
    <div className='col-8'>
    <select value={roleName} onChange={(e)=> setRoleName(e.target.value)} name="" id="" className='bg-white outline-none fw-bold mt-6 rounded px-2 py-1 shadow-gray-400 shadow-md'>
       <option value="" disabled>Select User type</option>
       <option value="User">General User</option>
       <option value="Admin">Admin</option>
       <option value="Doctor">Doctor</option>
   </select>

    {/* Users table */}
    {users.length === 0 ? (
      <p className="mt-10 italic text-gray-600 text-center">Please select a role to see Users</p>
    ) : (
    <table className="min-w-full border-b-4 mt-4">
        <thead className="text-left text-gray-600 font-medium text-[15px]">
          <tr>
            <th className="pb-2 pr-6">Username</th>
            <th className="pb-2">Email address</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 font-normal text-[15px]">
          
        {users.map((user) => (
            <tr className="border-b-2" key={user.id}>
              <td className="py-2">{user.userName}</td>
              <td className="py-2">{user.email}</td>
              <td className="py-2"><button className="btn btn-warning text-white fw-bold">Change Role</button></td>
              <td className="py-2"><button className="btn btn-danger fw-bold">Suspend</button></td>
            </tr>
          ))}
        </tbody>
      </table>)}
  </div>
    )
  }
