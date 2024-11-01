import React from 'react'
import { Sidebar } from './Sidebar'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <div className='flex flex-row'>
        <Sidebar/> 
        <Outlet/>
    </div>
  )
}
