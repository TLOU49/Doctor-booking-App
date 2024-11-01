import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { ManageUsers } from '../components/ManageUsers';

export const ManageAccounts = () => {
    const location = useLocation()
    const {path} = useParams();
    
  return (
    <div className='mx-12'>
        {/* headings/Tabs */}
        <span className="flex flex-row mt-3 ml-2">
            <Link to='/admin/accounts' className='no-underline'>
            <h6 className={`${path === '/admin/accounts' ? 'text-gray-300 fw-normal' : 'border-b-2 text-gray-600 border-gray-600 fw-bold'}`}>Manage Users</h6>
            </Link>
        </span>
        
        {/* Manage Users Component */}
       {path === 'accounts' && <ManageUsers/>}
    </div>
  )
};
