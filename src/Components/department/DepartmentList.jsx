import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { columns, DepartmentButtons } from "../../utils/DepartmentHelper";
import axios from "axios";

const DepartmentList = () => {
  const [departments, setDepartments] = useState([]); // ✅ Fixed state name
  const [depLoading, setDepLoading] = useState(false);
  const [filteredDepartments, setFilteredDepartments] = useState([]);

  // Function to handle department deletion
  const onDepartmentDelete = () => {
    // setDepartments((prevDepartments) => prevDepartments.filter((dep) => dep._id !== id));
    // setFilteredDepartments((prevDepartments) => prevDepartments.filter((dep) => dep._id !== id));
    fetchDepartments()
  };

  const fetchDepartments = async () => {
    setDepLoading(true);
    try {
      const response = await axios.get("https://employee-api-olive.vercel.app/api/department", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.data.success) {
        console.log("Fetched departments:", response.data);

        // Mapping data with serial number
        const data = response.data.departments.map((dep, index) => ({
          _id: dep._id,
          sno: index + 1, // ✅ More reliable than manual incrementing
          dep_name: dep.dep_name,
          action: <DepartmentButtons DepId={dep._id} onDepartmentDelete={onDepartmentDelete} />,
        }));

        setDepartments(data);
        setFilteredDepartments(data);
      }
    } catch (error) {
      console.error("Error fetching departments:", error);
      alert(error.response?.data?.error || "Failed to fetch departments");
    } finally {
      setDepLoading(false);
    }
  };

  useEffect(() => {
 
    fetchDepartments();
  }, []);

  // Function to filter departments based on search input
  const filterDepartments = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const records = departments.filter((dep) =>
      dep.dep_name.toLowerCase().includes(searchTerm)
    );
    setFilteredDepartments(records);
  };

  return (
    <>
      {depLoading ? (
        <div className="flex justify-center items-center h-screen">
          <h3 className="text-lg font-semibold">Loading Departments...</h3>
        </div>
      ) : (
        <div className="p-5">
          {/* Header */}
          <div className="text-center">
            <h3 className="text-2xl font-bold">Manage Departments</h3>
          </div>

          {/* Search & Add Button */}
          <div className="flex justify-between items-center mt-4">
            <input
              type="text"
              placeholder="Search by department name"
              className="px-4 py-2 border rounded-md w-1/3"
              onChange={filterDepartments}
            />
            <Link
              to="/admin-dashboard/add-department"
              className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
            >
              Add New Department
            </Link>
          </div>

          {/* Department Table */}
          <div className="mt-5 bg-white p-4 shadow-md rounded-md">
            <DataTable columns={columns} data={filteredDepartments} pagination />
          </div>
        </div>
      )}
    </>
  );
};

export default DepartmentList;
