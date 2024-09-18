import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, createBrowserRouter, RouterProvider, createRoutesFromElements} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './pages/Login.jsx'
import { Registration } from './pages/Registration.jsx'
import { ForgotPassword } from './pages/ForgotPassword.jsx'
import { ForgotLoginDetails } from './pages/ForgotLoginDetails.jsx'
import { ForgotUsername } from './pages/ForgotUsername.jsx'
import { ChangePassword } from './pages/ChangePassword.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' index element={<Login/>}/>
    <Route path='/login'element={<Login/>}/>
    <Route path='/registration' element={<Registration/>}/>
    <Route path='/forgot-password' element={<ForgotPassword/>}/>
    <Route path='/forgot-password/username' element={<ForgotLoginDetails/>}/>
    <Route path='/forgot-password/password' element={<ForgotUsername/>}/>
    <Route path='/change-password' element={<ChangePassword/>}/>
    </>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
       <App />
    </RouterProvider>
  </StrictMode>,
)
