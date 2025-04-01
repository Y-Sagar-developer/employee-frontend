import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { columns, EmployeeButtons } from "../../utils/EmployeeHelper";
import DataTable from "react-data-table-component";
const List = () => {
  const [employees, setEmployees] = useState([]);
  const [empLoading, setEmpLoading] = useState(false);
  const [filteredEmployee, setFilteredEmployee] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      setEmpLoading(true);
      try {
        const response = await axios.get(
          "https://employee-frontend-sand-two.vercel.app/api/employee",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
  
        // console.log("API Response:", response.data); // ✅ Debug API Response
  
        if (response.data.success) {
          let sno = 1;
          const data = response.data.employees.map((emp) => ({
            _id: emp._id,
            sno: sno++, 
            dep_name: emp.department?.dep_name || "N/A", // Handle undefined values
            name: emp.userId?.name || "Unknown",
            dob: new Date(emp.dob).toDateString(),
            profileImage: (
              <img
                src={`https://employee-frontend-sand-two.vercel.app/${emp.userId?.profileImage}`}
                alt="Employee Profile"
                width={40}
                className="rounded-full"
                onError={(e) => (e.target.src = "/default-profile.png")}
              />
            ),
            action: <EmployeeButtons Id={emp._id} />,
          }));
  
          // console.log("Mapped Employee Data:", data); // ✅ Debug Mapped Data
  
          setEmployees(data);
          // setFilteredEmployee(data);
          setFilteredEmployee([...data]); // Force state update
        }
      } catch (error) {
        console.error("Error fetching employees:", error);
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      } finally {
        setEmpLoading(false);
      }
    };
  
    fetchEmployees();
  }, []);

  const handleFilter = (e) => {
    const records = employees.filter((emp) =>
      emp.dep_name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredEmployee(records);
  };
  

  return (
    <div className="p-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold">Manage Employees</h3>
      </div>

      <div className="flex justify-between items-center mt-4">
        <input
          type="text"
          placeholder="Search by department name"
          className="px-4 py-2 border rounded-md w-1/3"
          onChange={handleFilter}
        />
        <Link
          to="/admin-dashboard/add-employee"
          className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
        >
          Add New Employee
        </Link>
      </div>
      <div className="mt-6">
     {/* { console.log("Rendering DataTable with:", filteredEmployee)}; */}
      <DataTable columns={columns} data={filteredEmployee} pagination />
        {/* <DataTable columns={columns} data={employees} pagination /> */}
      </div>
    </div>
  );
};

export default List;
