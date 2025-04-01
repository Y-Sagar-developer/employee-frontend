


import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";


const List = () => {
  const { user } = useAuth(); // Access the user context (which contains user._id and user.role)
  const [leaves, setLeaves] = useState([]); // State to store the leaves
  let sno = 1;
  const { id } = useParams(); // Get the empId from the URL params (only for admin)

  // Set currentId dynamically based on user role and URL params
  const currentId = (user.role === "admin" && id) || user._id;

  const fetchLeaves = async () => {
    try {
      const response = await axios.get(
        `https://employee-frontend-sand-two.vercel.app/api/leave/${currentId}/${user.role}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
  
      if (response.data.success) {
        setLeaves(response.data.leaves || []); // Ensure leaves is always an array
        if (response.data.leaves.length === 0) {
          alert("No leaves found.");
        }
      } else {
        alert("No leaves found.");
      }
    } catch (error) {
      console.error("Error fetching leaves:", error);
      if (error.response && error.response.data && !error.response.data.success) {
        alert(error.message);
      }
    }
  };
  
  useEffect(() => {
    fetchLeaves(); // Call fetchLeaves when component mounts or user role changes
  }, [currentId]); // Refetch if `currentId` changes


  return (
    <div className="p-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold">Manage Leaves</h3>
      </div>
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Search By Dep name"
          className="px-4 py-0.5 border"
        />
        {user.role === "employee" && (
          <Link
            to="/employee-dashboard/add-leave"
            className="px-4 py-1 bg-teal-600 rounded text-white"
          >
            Add New Leave
          </Link>
        )}
      </div>
      <table className="w-full text-sm text-left text-gray-500 mt-6">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 border border-gray-200">
          <tr>
            <th className="px-6 py-3">SNO</th>
            <th className="px-6 py-3">Leave Type</th>
            <th className="px-6 py-3">From</th>
            <th className="px-6 py-3">To</th>
            <th className="px-6 py-3">Description</th>
            <th className="px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {leaves.length > 0 ? (
            leaves.map((leave) => (
              <tr
                key={leave._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-3">{sno++}</td>
                <td className="px-6 py-3">{leave.leaveType}</td>
                <td className="px-6 py-3">
                  {new Date(leave.startDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-3">
                  {new Date(leave.endDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-3">{leave.reason}</td>
                <td className="px-6 py-3">{leave.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center py-3">
                No leaves found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default List;
