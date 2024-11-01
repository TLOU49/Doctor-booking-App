import React, { useState } from 'react'
import { FaUserCog } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import doctor from '../assets/aa.png';
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import stethoscope from '../assets/stethoscope.jpg';
import obygyn from '../assets/obygyn.jpg';
import tooth from '../assets/tooth.jpg';
import optometrist from '../assets/optometrist.jpg';
import { Link } from 'react-router-dom';

export const Home = () => {
    const [isNavbar, setNavbar] = useState(false);
    
  return (
    <div className='bg-gradient-to-r from-dba_blue to-dba_light container-fluid h-screen'>
        {/* Header */}
        <div className="flex flex-row justify-between pt-3 bg-white container-fluid h-[7rem]">
            <h1 className="col-2">Logo</h1>
            <span className="flex flex-row mt-6 col-8 text-[14px] ml-4">
                <p className="mr-4 border-b-4 h-[2.5rem] border-dba_blue hover:border-green-600 cursor-pointer">Home</p>
                <p className="mr-4 h-[2.5rem] hover:border-b-4 hover:border-green-600 cursor-pointer">About</p>
                <p className="mr-4 h-[2.5rem] hover:border-b-4 hover:border-green-600 cursor-pointer">Quick Medical Guides</p>
                <p className="mr-4 h-[2.5rem] hover:border-b-4 hover:border-green-600 cursor-pointer">Appointments</p>
            </span>

            <span className="flex col-2 mt-4">
            <button className="btn btn-warning h-10 text-white rounded-pill fw-bold">See a Doctor Now</button>
            <FaUserCog className='mx-4 mt-2 text-[1.3rem] cursor-pointer' onClick={()=> setNavbar(true)}/>
            </span>

            {
                isNavbar &&
            <span className="absolute right-20 mt-16 bg-white rounded w-[10rem] text-gray-500 fw-bold text-[14px] pl-2">
                <IoCloseSharp className='ml-auto text-[20px] mr-2 mt-1 hover:bg-gray-500 hover:text-white w-fit rounded cursor-pointer my-1' onClick={()=> setNavbar(false)}/>
                    <Link to='/payment' className='text-gray-500 no-underline'>
                <p className="hover:bg-gray-500 hover:text-white w-fit px-3 rounded cursor-pointer py-1">Payments</p>
                    </Link>
                <p className="hover:bg-gray-500 hover:text-white w-fit px-3 rounded cursor-pointer py-1">My Appointments</p>
                <p className="hover:bg-gray-500 hover:text-white w-fit px-3 rounded cursor-pointer py-1">Support</p>
                <p className="hover:bg-gray-500 hover:text-white w-fit px-3 rounded cursor-pointer py-1">Settings</p>

                <Link to='/apply' className='text-gray-500 no-underline'>
                <p className="hover:bg-gray-500 hover:text-white w-fit px-3 rounded cursor-pointer py-1">Register as a Doctor</p>
                </Link>
            </span>
            }
        </div>

        {/* Body */}
        <div className="">
            <div className="text-white flex justify-between h-[20rem]">
                <img src={doctor} width={300} alt="" className="col-2" />
                <span className="mt-[5rem] col-8 flex flex-col text-center pt-4">
                <h1 className="">Caring for You, Every Step of the Way</h1>
                <p className="text-[14px]">No queues, no waiting, just instant booking and consultations, prescriptions, lab tests & sick notes.</p>
                </span>
                <img src={doctor} width={300} alt="" className="col-2" />
            </div>

            {/* Banner */}
            <div className="bg-white h-[24rem]">
                <h4 className="text-[20px] fw-bold text-gray-500 ml-16 py-2">Medical Practioners</h4>
                <div className="flex flex-row">
                    <PiCaretLeftBold className='text-[4rem] mt-[6rem] text-dba_light hover:text-dba_blue cursor-pointer'/>
                    
                    <div className="flex flex-row wrap w-[112em]">
                        <span className="flex flex-col text-center bg-white items-center ml-9 w-[23rem] h-[18rem] rounded shadow-md shadow-gray-500 ml-9 mr-10">
                            <img src={stethoscope} width={100} alt="" className="pt-[1rem]" />
                            <h5 className="text-dba_light fw-bold pt-[2.5rem]">General Practioner</h5>
                        </span>
                        <span className="flex flex-col text-center bg-white items-center ml-9 w-[23rem] h-[18rem] rounded shadow-md shadow-gray-500 mx-10">
                            <img src={optometrist} width={150} alt="" className="pt-[4rem]" />
                            <h5 className="text-green-600 fw-bold pt-[2.6rem]">Optometrist</h5>
                        </span>
                        <span className="flex flex-col text-center bg-white items-center ml-9 w-[23rem] h-[18rem] rounded shadow-md shadow-gray-500 mx-10">
                            <img src={tooth} width={150} alt="" className="pt-[2rem]" />
                            <h5 className="text-amber-700 fw-bold pt-[2rem]">Dentist</h5>
                        </span>
                        <span className="flex flex-col text-center bg-white items-center ml-9 w-[23rem] h-[18rem] rounded shadow-md shadow-gray-500 mx-10">
                            <img src={obygyn} width={150} alt="" className="pt-[4rem]" />
                            <h5 className="text-rose-600 fw-bold pt-[3rem]">Obstetrician - Gynecologist</h5>
                        </span>
                    </div>
                    
                    <PiCaretRightBold className='text-[4rem] mt-[6rem] absolute right-6 text-dba_light hover:text-dba_blue cursor-pointer'/>
                </div>
            </div>

            {/*  */}
        </div>
    </div>
  )
}
