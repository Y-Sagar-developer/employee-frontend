import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaBuilding,
  FaTachometerAlt,
  FaUsers,
  FaCogs,
  // FaMoneyBillWave,
  FaCalendarAlt,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import { useAuth } from "../../context/AuthContext";

const Sidebar = () => {
  const {user}=useAuth()
  return (
    <div className="bg-gray-800 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64">
      <div className="bg-teal-600 h-12 flex items-center justify-center">
        <h3 className="text-2xl text-center font-pacific">Employee MS</h3>
      </div>

      {/* Sidebar Navigation */}
      <div className="mt-3 px-3">
        <NavLink
          to="/employee-dashboard"
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
          to={`/employee-dashboard/profile/${user._id}`}
          className={({ isActive }) =>
            `${
              isActive ? "bg-teal-500" : ""
            } flex items-center space-x-4 block py-2.5 px-4 rounded text-white no-underline font-bold`
          }
        >
          <FaUsers className="me-3" />
          <span>My Profile</span>
        </NavLink>

        <NavLink
          // to="/employee-dashboard/leaves"
          to={`/employee-dashboard/leaves/${user._id}`}

          className={({ isActive }) =>
            `${
              isActive ? "bg-teal-500" : ""
            } flex items-center space-x-4 block py-2.5 px-4 rounded text-white no-underline font-bold`
          }
        >
          <FaBuilding className="me-3" />
          <span>Leaves</span>
        </NavLink>

        <NavLink
          to={`/employee-dashboard/salary/${user._id}`}
          className={({ isActive }) =>
            `${
              isActive ? "bg-teal-500" : ""
            } flex items-center space-x-4 block py-2.5 px-4 rounded text-white no-underline font-bold`
          }
        >
          <FaCalendarAlt className="me-3" />
          <span>Salary</span>
        </NavLink>

        <NavLink
          to="/employee-dashboard/setting"
          className={({ isActive }) =>
            `${
              isActive ? "bg-teal-500" : ""
            } flex items-center space-x-4 block py-2.5 px-4 rounded text-white no-underline font-bold`
          }
        >
          <FaCogs className="me-3" />
          <span>Settings</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
