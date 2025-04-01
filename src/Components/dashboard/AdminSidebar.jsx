import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaBuilding,
  FaTachometerAlt,
  FaUsers,
  FaCogs,
  FaMoneyBillWave,
  FaCalendarAlt,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

const AdminSidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64">
      <div className="bg-teal-600 h-12 flex items-center justify-center">
        <h3 className="text-2xl text-center font-pacific">Admin Panel</h3>
      </div>

      {/* Sidebar Navigation */}
      <div className="mt-3 px-3">
        <NavLink
          to="/admin-dashboard"
          className={({ isActive }) =>
            `${
              isActive ? "bg-teal-500" : ""
            } flex items-center space-x-4 block py-2.5 px-4 rounded text-white no-underline font-bold`
          }
          end
        >
          <FaTachometerAlt className="me-3" />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard/employees"
          className={({ isActive }) =>
            `${
              isActive ? "bg-teal-500" : ""
            } flex items-center space-x-4 block py-2.5 px-4 rounded text-white no-underline font-bold`
          }
        >
          <FaUsers className="me-3" />
          <span>Employee</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard/departments"
          className={({ isActive }) =>
            `${
              isActive ? "bg-teal-500" : ""
            } flex items-center space-x-4 block py-2.5 px-4 rounded text-white no-underline font-bold`
          }
        >
          <FaBuilding className="me-3" />
          <span>Department</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard/leaves"
          className={({ isActive }) =>
            `${
              isActive ? "bg-teal-500" : ""
            } flex items-center space-x-4 block py-2.5 px-4 rounded text-white no-underline font-bold`
          }
        >
          <FaCalendarAlt className="me-3" />
          <span>Leave</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard/salary/add"
          className={({ isActive }) =>
            `${
              isActive ? "bg-teal-500" : ""
            } flex items-center space-x-4 block py-2.5 px-4 rounded text-white no-underline font-bold`
          }
        >
          <FaMoneyBillWave className="me-3" />
          <span>Salary</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard/setting"
          className="flex items-center space-x-4 block py-2.5 px-4 rounded text-white no-underline font-bold"
        >
          <FaCogs className="me-3" />
          <span>Settings</span>
        </NavLink>
      </div>
    </div>
  );
};

export default AdminSidebar;
