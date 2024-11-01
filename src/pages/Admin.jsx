import React from 'react'
import { PendingApplications } from '../components/PendingApplications';
import { ApprovedApplications } from '../components/ApprovedApplications';
import { Link, useLocation, useParams } from 'react-router-dom';
import { ManageAccounts } from './ManageAccounts';

export const Admin = () => {
  const location = useLocation();
  const path = location.pathname.split('/').pop();

  return (
    <div className='col-10 bg-gradient-to-r from-dba_blue to-dba_light container-fluid min-h-screen w-full pb-10'>
         <div className="pl-12 bg-white flex flex-col col-3 mt-[1.5rem] rounded text-gray-600 w-auto min-h-full mx-[0.7rem] flex">
          <span className="flex flex-row mt-4 text-center w-auto border-b-4 border-gray-500 mx-16">
            <Link to='/admin/applications-pending' className='no-underline text-gray-600'>
            <h6 className="hover:bg-gray-400 hover:text-white cursor-pointer px-3 rounded py-1">Applications</h6>
            </Link>

            <h6 className="ml-12 hover:bg-gray-400 hover:text-white cursor-pointer px-3 rounded py-1">Tech Support</h6>

            <Link to='/admin/accounts' className='no-underline text-gray-600'>
            <h6 className="ml-12 hover:bg-gray-400 hover:text-white cursor-pointer px-3 rounded py-1">Manage Accounts</h6>
            </Link>
            {/* <h6 className="ml-12 hover:bg-gray-400 hover:text-white cursor-pointer px-3 rounded py-1">Manage Accounts</h6> */}
          </span>

          {/* Pending/Approved Doctors */}
          {
           ( path === 'applications-pending' || path === 'applications-approved') &&
            <div className="">
          <span className="flex mb-2">
            <Link to='/admin/applications-pending' className='no-underline'>
          <h5 className={`mt-4 ml-12 cursor-pointer ${path === 'applications-pending' ? 'border-b-4 text-gray-600 border-gray-600 fw-bold' : 'text-gray-300 fw-light'} pb-1`}>Pending</h5>
            </Link>
            <Link to='/admin/applications-approved' className='no-underline'>
          <h5 className={`mt-4 ml-4 cursor-pointer ${path === 'applications-approved' ? 'border-b-4 text-gray-600 border-gray-600 fw-bold' : 'text-gray-300 fw-light'} pb-1`}>Approved</h5>
            </Link>
          </span>
            </div>
            }


          {/* table for pending applications */}
          { path === 'applications-pending' && <PendingApplications/>}

          {/* Approved Applications */}
          { path === 'applications-approved' && <ApprovedApplications/> }

          {/* Manage Accounts page */}
          { path === 'accounts' && <ManageAccounts/> }

        </div>
    </div>
  )
}
