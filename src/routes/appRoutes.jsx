import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Auth from '../layout/AuthLayout'
import Login from '../pages/auth/Login'
// import Dashboard from '../pages/dashboard'
import DashboardLayout from '../layout/DashboardLayout'
import Dashboard from '../pages/dashboard'
import SignUp from '../pages/auth/SignUp'

export default function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/auth' element={<Auth/>}>
                <Route path='/auth/login' element={<Login/>}/>
                <Route path='/auth/sign-in' element={<SignUp/>}/>
            </Route>
            <Route path='/' element={<DashboardLayout/>}>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/:name' element={<Dashboard/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
