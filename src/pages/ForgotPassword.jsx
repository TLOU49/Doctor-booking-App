import React from 'react'
import { Link } from 'react-router-dom';

export const ForgotPassword = () => {
  return (
    <div className='bg-gradient-to-r from-dba_blue to-dba_light h-screen text-white text-center items-center flex flex-col col container-fluid pt-[4rem]'>
        <h1 className="">Logo</h1>
     <h2 className="fs-1">Let's help you login</h2>
     <h5 className="fs-6 mt-6">What did you forget?</h5>
     
     <div className="mt-[1rem] flex flex-col w-1/2 items-center text-center font-bold">
     <Link to='/forgot-password/password' className="bg-white rounded-lg mt-6 text-center text-green-500 w-2/5 h-[4rem] no-underline pt-3 scale-100 hover:scale-110 transition-transform duration-300 cursor-pointer">
     <span ><p className="">My Username</p></span>
     </Link>
     <Link to='/forgot-password/username' className="bg-white rounded-lg mt-6 text-center  text-green-500 no-underline w-2/5 h-[4rem] pt-3 scale-100 hover:scale-110 transition-transform duration-300 cursor-pointer">
     <span ><p className="">My Password</p></span>
     </Link>
     <Link to='/forgot-password/password' className="bg-white rounded-lg mt-6 text-center text-green-500 no-underline w-2/5 h-[4rem] pt-3 scale-100 hover:scale-110 transition-transform duration-300 cursor-pointer">
     <span className='h-fit'><p className="text-[16px]">Both Password and Username</p></span>
     </Link>
     </div>

     <Link to='/login'>
     <p className="text-[18px] mt-3 scale-100 hover:scale-110 transition-transform duration-300">Cancel</p>
     </Link>

     <p className="">If you continue to have difficulties to login please contact our support team on DMabuela@singular.co.za</p>
     {error && (
          <div className="text-red-500 mt-2">
            {typeof error === 'string' ? error : JSON.stringify(error.response, null, 2)}
          </div>
        )}
    </div>
  )
}
