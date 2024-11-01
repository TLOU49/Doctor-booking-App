import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className='h-screen col-2 bg-white pl-12 pt-4 flex flex-col '>
        <h1 className="col-2 fw-bold text-dba_light pl-2">Logo</h1>
        <span className="mt-[6rem] text-[16px] fw-bolder text-gray-600">
          <Link to='/home' className='no-underline'>
            <p className="hover:bg-gray-500 hover:text-white cursor-pointer text-gray-600 h-[2rem] w-fit px-2 pt-1 rounded-pill">Home</p>
          </Link>

          <Link to='/payment' className='no-underline'>
            <p className="hover:bg-gray-500 hover:text-white cursor-pointer text-gray-600 h-[2rem] w-fit px-2 pt-1 rounded-pill">Payments</p>
          </Link>

            <Link to='' className='no-underline'>
            <p className="hover:bg-gray-500 hover:text-white cursor-pointer text-gray-600 h-fit w-max px-2 pt-1 rounded-pill">My Appointments</p>
            </Link>
            <Link to='/mycalendar' className='no-underline'>
            <p className="hover:bg-gray-500 hover:text-white cursor-pointer text-gray-600 h-fit w-max px-2 pt-1 rounded-pill">My Calendar</p>
            </Link>

            <Link to='' className='no-underline'>
            <p className="hover:bg-gray-500 hover:text-white cursor-pointer text-gray-600 h-[2rem] w-fit px-2 pt-1 rounded-pill">Support</p>
            </Link>

            <Link to='' className='no-underline'>
            <p className="hover:bg-gray-500 hover:text-white cursor-pointer text-gray-600 h-[2rem] w-fit px-2 pt-1 rounded-pill">About</p>
            </Link>

            <Link to='/admin/applications-pending' className='no-underline'>
            <p className="hover:bg-gray-500 hover:text-white cursor-pointer text-gray-600 h-[2rem] w-fit px-2 pt-1 rounded-pill">Admin </p>
            </Link>
            <Link to='/admin' className='no-underline'>
            <p className="hover:bg-gray-500 hover:text-white cursor-pointer text-gray-600 h-[2rem] w-fit px-2 pt-1 rounded-pill">Users</p>
            </Link>
            
            
        </span>
        <Link to='/apply'>
        <button className="btn btn-warning h-10 text-white rounded-pill fw-bold absolute bottom-20 w-[12rem]">Register as a Doctor</button>
        </Link>

        <Link to='/login'>
        <button className="btn btn-warning h-10 text-white rounded-pill fw-bold absolute bottom-5 w-[12rem]">LogIn/LogOut</button>
        </Link>
    </div>
  )
}
