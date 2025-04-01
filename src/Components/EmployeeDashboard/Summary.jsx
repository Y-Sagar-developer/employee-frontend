import React from "react";
import { FaUsers } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";

const SummaryCard = () => {
  const { user } = useAuth();

  return (
    <div className="p-6">
      <div className="rounded flex bg-white">
        <div className="text-3xl flex justify-center items-center bg-teal-600 text-white px-4">
          <FaUsers />
        </div>
        <div className="pl-4 py-1">
          <p className="text-lg font-semibold m-0">Welcome Back</p> {/* Reduced font size and removed margin */}
          <p className="text-xl font-bold m-0">{user.name}</p> {/* Adjusted font size and removed margin */}
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
