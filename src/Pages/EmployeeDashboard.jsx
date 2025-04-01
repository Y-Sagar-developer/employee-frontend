import React from 'react'
import Sidebar from '../Components/EmployeeDashboard/Sidebar'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/dashboard/Navbar'

const EmployeeDashboard = () => {
  return (
    <div className="d-flex">
    <Sidebar />
    <div className="flex-grow-1 ms-64 bg-light vh-100">
    <Navbar />
    <Outlet/>
    </div>
  </div>
  )
}

export default EmployeeDashboard