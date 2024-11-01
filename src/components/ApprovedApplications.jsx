import React from 'react'
import { FiEye } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from 'react-router-dom';

export const ApprovedApplications = () => {
  return (
    <div className='flex flex-col'>
        <table className="mx-12">
            <thead className=''>
              <tr className="text-left ">
                <th className="">Registered name</th>
                <th className="">Specialization</th>
                <th className="">Date Approved</th>
                <th className="">Certificates</th>
              </tr>
            </thead>
            <tbody className="pt-2">
              <tr className="border-b-2">
                <td className="">Dean Mabuela</td>
                <td className="">Obstetrician</td>
                <td className="">15/10/2024</td>
                <td className=""><span className='flex flex-row cursor-pointer'><FiEye className='mx-3'/> <MdOutlineFileDownload /></span></td>
                <button className="btn btn-danger ml-2 fw-bold text-white my-1">Cancel</button>
              </tr>
              <tr className="border-b-2">
                <td className="">Dean Mabuela</td>
                <td className="">Obstetrician</td>
                <td className="">15/10/2024</td>
                <td className=""><span className='flex flex-row cursor-pointer'><FiEye className='mx-3'/> <MdOutlineFileDownload /></span></td>
                <button className="btn btn-danger ml-2 fw-bold text-white my-1">Cancel</button>
              </tr>
              <tr className="border-b-2">
                <td className="">Dean Mabuela</td>
                <td className="">Obstetrician</td>
                <td className="">15/10/2024</td>
                <td className=""><span className='flex flex-row cursor-pointer'><FiEye className='mx-3'/> <MdOutlineFileDownload /></span></td>
                <button className="btn btn-danger ml-2 fw-bold text-white my-1">Cancel</button>
              </tr>
              
            </tbody>
          </table>

          <span className="flex flex-row justify-center mt-8 text-gray-400">
          <p className="">You will only be able to see approved applications not older than a month. To see all available medical practioners go to</p>
          <Link to='/admin/accounts' className='no-underline'>
          <p className="fw-bold pl-2 text-gray-600">Manage Accounts</p>
          </Link>
          </span>
    </div>
  )
}
