import React from 'react'
import { Sidebar } from '../components/Sidebar';
import { LuCreditCard } from "react-icons/lu";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoAdd } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaRegCircleQuestion } from "react-icons/fa6";

export const Payment = () => {
  return (

    <div className="col-9 bg-gradient-to-r from-dba_blue to-dba_light container-fluid h-screen ">
        {/* CR Balance */}
        <div className="bg-white flex flex-col col-3 mt-[4rem] rounded text-gray-600 h-[12rem] ml-[1.5rem]">
            <h6 className="text-center fs-5 fw-bold mt-3">Consultation Room Balance</h6>
            <p className="pl-4 fs-1">R0.00</p>
            <Link to='/' className="flex flex-row no-underline text-gray-600">
            <p className="pl-4 text-[14px]">What is CR balance?</p>
            <FaRegCircleQuestion className='m-1 '/>
            </Link>
        </div>

        {/* Payment Methods */}
        <div className="bg-white flex flex-col col-9 rounded mt-[8rem] ml-[1.5rem] min-h-[18rem] py-1">

        <form className="">
            <h6 className="text-center fw-bold text-[20px] text-gray-600 mt-2">Payment methods</h6>

            <div className="mt-10 text-black fw-bold">
                <span className="flex flex-row justify-between">
                    <LuCreditCard className=' text-[24px] fw-bolder col-1'/>
                    <p className="col-10">*********4578</p>
                    <input type="radio" name="" id="" className='mr-8 cursor-pointer'/>
                </span>
                <span className="flex flex-row justify-between">
                    <BsCurrencyDollar className='text-[24px] col-1'/>
                    <p className="col-10">Cash</p>
                    <input type="radio" name="" id="" className='mr-8 cursor-pointer'/>
                </span>
                <span className="flex flex-row justify-between">
                    <LuCreditCard className='text-[24px] col-1'/>
                    <p className="col-10">*********4578</p>
                    <input type="radio" name="" id="" className='mr-8 cursor-pointer'/>
                </span>
                <span className="flex flex-row justify-between">
                    <LuCreditCard className='text-[24px] col-1'/>
                    <p className="col-10">POLMED Network</p>
                    <input type="radio" name="" id="" className='mr-8 cursor-pointer'/>
                </span>
                <span className="flex flex-row justify-between">
                    <LuCreditCard className='text-[24px] col-1'/>
                    <p className="col-10">Momentum Health4me Network</p>
                    <input type="radio" name="" id="" className='mr-8 cursor-pointer'/>
                </span>
            </div>
        </form>

        <div className=" mt-[2rem] ml-[6.5rem] text-[15px]">
            <Link to='/add-card' className='no-underline'>
            <span className="flex text-gray-600">
                <IoAdd className='text-[1.4rem] mr-2'/>
            <p className="text-[14px]">Add debit/credit card</p>
            </span>
            </Link>

            <Link to='/add-aid' className='no-underline'>
            <span className="flex text-gray-600">
                <IoAdd className='text-[1.4rem] mr-2'/>
            <p className="text-[14px]">Add medical insurance</p>
            </span>
            </Link>
        </div>
        </div>
    </div>
  )
}
