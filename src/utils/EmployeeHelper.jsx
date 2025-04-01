
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const columns = [
  {
    name: "S no",
    selector: (row) => row.sno,
    width:"70px"
  },
  {
    name: "Name",
    selector: (row) => row.name,
    sortable:true,
    width:"100px"

  },
  {
    name: "Image",
    selector: (row) => row.profileImage,
    width:"90px"

  },
  {
    name: "Department",
    selector: (row) => row.dep_name,
    width:"120px"
  },
  {
    name: "DOB",
    selector: (row) => row.dob,
    sortable:true,
    width:"130px"

  },
  {
    name: "Action",
    selector: (row) => row.action,
    center: "true" // Correct format (boolean, not string)
},


];

export const fetchDepartments = async () => {
  try {
    const response = await axios.get("https://employee-frontend-sand-two.vercel.app/api/department", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  
    if (response.data.success) {
      return response.data.departments;
    } else {
      throw new Error("Failed to fetch departments");
    }
  } catch (error) {
    console.error("Error fetching departments:", error);
    alert(error.response?.data?.error || "Failed to fetch departments");
    return []; // Return an empty array to avoid undefined errors
  }
};

// employees for salary from 
// ----------------------------------------------------------------------------------------------------------- 
export const getEmployees = async (id) => {
  let employees;
  try {
    const response = await axios.get(`https://employee-frontend-sand-two.vercel.app/api/employee/department/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (response.data.success) {
    employees= response.data.employees;
    } 
  } catch (error) {
    if(error.response && !error.response.data.success){
      
      alert(error.response.data.error);
    }
  }
  return employees
};
// ---------------------------------------------------------------------------------------------------------- 
export const EmployeeButtons = ({ Id }) => {
  const navigate = useNavigate();
  // alert(DepId)

  return (
    <div className="flex space-x-3">
      <button
        className="px-3 py-1 bg-teal-600 text-white"
        onClick={() => navigate(`/admin-dashboard/employees/${Id}`)}
      >
        View
      </button>
      <button
        className="px-3 py-1 bg-blue-600 text-white "
        onClick={()=>navigate(`/admin-dashboard/employees/edit/${Id}`)}

      >
        Edit
      </button>
      <button
        className="px-3 py-1 bg-yellow-600 text-white "
        onClick={()=>navigate(`/admin-dashboard/employees/salary/${Id}`)}

      >
        Salary
      </button>
      <button
        className="px-3 py-1 bg-red-600 text-white "
        onClick={()=>navigate(`/admin-dashboard/employees/leaves/${Id}`)}
      >
        Leave
      </button>
    </div>
  );
};