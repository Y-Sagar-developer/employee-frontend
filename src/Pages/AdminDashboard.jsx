import React from "react";
import { useAuth } from "../context/AuthContext";
import AdminSidebar from "../Components/dashboard/AdminSidebar";
import Navbar from "../Components/dashboard/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminSummary from "../Components/dashboard/AdminSummary";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  const { user } = useAuth();
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content Area */}
      <div className="flex-grow-1 ms-64 bg-light vh-100">
      <Navbar />
      <Outlet/>
      </div>
    </div>
  );
};

export default AdminDashboard;

