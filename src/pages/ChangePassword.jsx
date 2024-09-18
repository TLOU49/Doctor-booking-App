import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';

export const ChangePassword = () => {
  return (
    <div className='bg-gradient-to-r from-dba_blue to-dba_light container-fluid h-screen col-12 pt-[2rem]'>
        <div className="row col-4 h-[2rem] text-white">
        <Link to='/login' className="col-2 fs-4 mt-2 text-white"><IoMdArrowRoundBack/></Link>
        <h3 className="col-10 fs-2 ">Change your password</h3>
        </div>

        <form className="row col-6 items-center mt-4">
            <div className="col-12">
                <input type="text" className="col-6 h-[2.4rem] text-[13px] px-2 rounded-md mt-2 outline-gray-500" placeholder='Current password'/>
                <Link to='/forgot-password/username'>
                <p className="text-[12px] mt-1">Forgot password</p>
                </Link>
            </div>
            <span className="col-12">
            <input type="text" className="col-6 h-[2.4rem] text-[13px] px-2 rounded-md outline-gray-500" placeholder='New password'/>
            </span>
            <span className="">
            <input type="text" className="col-6 mt-4 h-[2.4rem] text-[13px] px-2 rounded-md outline-gray-500" placeholder='Confirm password'/>
            </span>
            <span className="btn btn-warning col-6 mt-4 text-white font-bold">
                <button className="">Save</button>
            </span>
        </form>
    </div>
  )
}
