import React from "react";
import { useAuth } from "../../context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const { user,logout } = useAuth(); // Ensure `useAuth` is working

  return (
<nav className="flex items-center text-white justify-between h-12 bg-teal-600 px-5">
{/* Welcome Message */}
      <p>Welcome, {user?.name ? user.name : "Guest"}</p>
      
      {/* Logout Button */}
      <button className="px-4 py-1 bg-teal-700 hover:bg-teal-800" onClick={logout}>Logout</button>
      </nav>
  );
};

export default Navbar;
