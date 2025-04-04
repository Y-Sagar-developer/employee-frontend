import React, { useEffect, useState } from "react";
import { fetchDepartments } from "../../utils/EmployeeHelper";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Add = () => {
  const [departments, setDepartments] = useState([]);
  const [formData,setFormData]=useState({})
    const navigate = useNavigate();
  
  useEffect(() => {
    const getDepartments = async () => {
      const departments = await fetchDepartments();
      setDepartments(departments);
    };
    getDepartments();
  }, []);
  const handleChange=(e)=>{
    const {name,value,files}=e.target
    if(name==="image"){
      setFormData((prevData)=>({...prevData,[name]:files[0]}))
    }
    else{
      setFormData((prevData)=>({...prevData,[name]:value}))
    }
  }
  const handleSubmit= async(e)=>{
    e.preventDefault()
    const formDataObj=new FormData()
    Object.keys(formData).forEach((key)=>{
      formDataObj.append(key,formData[key])
    })

    try {
      const response = await axios.post(
        "https://employee-api-olive.vercel.app/api/employee/add", // ✅ Fixed API URL
        formDataObj,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.data.success) {
        // alert("Department added successfully!");
        navigate("/admin-dashboard/employees");
      }
    } catch (error) {
      alert(error.response?.data?.error || "Error adding department");
    }
  }
  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow">
      <h2 className="text-2xl font-bold mb-6">Add New Employees</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              name
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Insert Name"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          {/* email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="text"
              name="email"
              onChange={handleChange}

              placeholder="Insert Email"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          {/* employee id  */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Employee ID
            </label>
            <input
              type="text"
              name="employeeId"
              onChange={handleChange}

              placeholder="Employee ID"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          {/* dob  */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              onChange={handleChange}

              placeholder="DOB"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          {/* gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              name="gender"
              onChange={handleChange}

              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          {/* married */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Marital status
            </label>
            <select
              name="maritalStatus"
              onChange={handleChange}

              placeholder="Marital Status"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Status</option>
              <option value="Single">Single</option>  
              <option value="Married">Married</option> 
            </select>
          </div>
          {/* designation  */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Designation
            </label>
            <input
              type="text"
              name="designation"
              onChange={handleChange}

              placeholder="Designation"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          {/* department  */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Department
            </label>
            <select
              name="department"
              onChange={handleChange}

              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Department</option>
              {departments?.map((dep) => (
                <option key={dep._id} value={dep._id}>
                  {dep.dep_name}
                </option>
              ))}
            </select>
          </div>
          {/* salary  */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Salary
            </label>
            <input
              type="number"
              name="salary"
              onChange={handleChange}

              placeholder="Salary"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          {/* password  */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}

              placeholder="********"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          {/* role  */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <select
              name="role"
              onChange={handleChange}

              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="employee">Employee</option>
            </select>
          </div>
          {/* image upload  */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Upload Image
            </label>
            <input
              type="file"
              name="image"
              onChange={handleChange}

              placeholder="Upload Image"
              accept="image/*"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-md"
        >
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default Add;






// import React, { useEffect, useState } from "react";
// import { fetchDepartments } from "../../utils/EmployeeHelper";

// const Add = () => {
//   const [departments, setDepartments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getDepartments = async () => {
//       try {
//         const response = await fetchDepartments();
//         setDepartments(Array.isArray(response) ? response : []);
//       } catch (err) {
//         setError("Failed to load departments");
//       } finally {
//         setLoading(false);
//       }
//     };
//     getDepartments();
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const employeeData = Object.fromEntries(formData.entries());
//     console.log("Form submitted: ", employeeData);
//   };

//   return (
//     <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow">
//       <h2 className="text-2xl font-bold mb-6">Add New Employee</h2>
//       {error && <p className="text-red-500">{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Name</label>
//             <input type="text" name="name" placeholder="Insert Name" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input type="email" name="email" placeholder="Insert Email" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Employee ID</label>
//             <input type="text" name="employeeId" placeholder="Employee ID" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
//             <input type="date" name="dob" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Gender</label>
//             <select name="gender" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required>
//               <option value="">Select Gender</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="other">Other</option>
//             </select>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Marital Status</label>
//             <select name="maritalStatus" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required>
//               <option value="">Select Status</option>
//               <option value="single">Single</option>
//               <option value="married">Married</option>
//             </select>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Designation</label>
//             <input type="text" name="designation" placeholder="Designation" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Department</label>
//             <select name="department" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required>
//               <option value="">Select Department</option>
//               {loading ? (
//                 <option>Loading...</option>
//               ) : (
//                 departments?.map((dep) => (
//                   <option key={dep?._id} value={dep?._id}>{dep?.dep_name}</option>
//                 ))
//               )}
//             </select>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Salary</label>
//             <input type="number" name="salary" placeholder="Salary" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <input type="password" name="password" placeholder="********" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Role</label>
//             <select name="role" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required>
//               <option value="">Select Role</option>
//               <option value="admin">Admin</option>
//               <option value="employee">Employee</option>
//             </select>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Upload Image</label>
//             <input type="file" name="image" accept="image/*" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
//           </div>
//         </div>
//         <button type="submit" className="w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-md">
//           Add Employee
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Add;