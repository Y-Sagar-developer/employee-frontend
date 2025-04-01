// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const View = () => {
//   const { id } = useParams();
//   const [employee, setEmployee] = useState(null);

//   useEffect(() => {
//     const fetchEmployee = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:5000/api/employee/${id}`,
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//           }
//         );

//         if (response.data.success) {
//           setEmployee(response.data.employee);

//         }
//       } catch (error) {
//         if (error.response && !error.response.data.success) {
//           alert(error.response.data.error);
//         }
//       }
//     };

//     fetchEmployee();
//   }, [id]); // Added `id` as a dependency

//   return (
// <div
//       className="min-h-screen flex items-center justify-center p-6"
//       style={{ backgroundImage: "url('https://t3.ftcdn.net/jpg/09/27/94/24/360_F_927942465_j6MgO2enbUJ3IHfr2hn8ZxGfY1Dshi8p.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
//     >    {employee ? (
//         <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
//           <h2 className="text-2xl font-bold mb-8 text-center">
//             Employee Details
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <img
//                 src={`http://localhost:5000/${employee?.userId?.profileImage}`}
//                 alt="Employee Profile"
//                 className="w-72 h-72 rounded-full object-cover border border-gray-300"
//                 onError={(e) => (e.target.src = "/default-profile.png")}
//               />
//             </div>
//             <div>
//               <div className="flex space-x-3 mb-1">
//                 <p className="text-lg font-bold">Name:</p>
//                 {/* <p className="font-medium">{employee.userId.name}</p> */}
//                 <p className="font-medium">{employee?.userId?.name || "N/A"}</p>
//               </div>
//               <div className="flex space-x-3 mb-1">
//                 <p className="text-lg font-bold">Employee ID:</p>
//                 {/* <p className="font-medium">{employee.employeeId}</p> */}
//                 <p className="font-medium">{employee?.employeeId || "N/A"}</p>
//               </div>
//               <div className="flex space-x-3 mb-1">
//                 <p className="text-lg font-bold">Date of Birth:</p>
//                 {/* <p className="font-medium">
//                   {new Date(employee.dob).toDateString()}
//                 </p> */}
//                 <p className="font-medium">
//                   {employee?.dob
//                     ? new Date(employee.dob).toDateString()
//                     : "N/A"}
//                 </p>
//               </div>
//               <div className="flex space-x-3 mb-1">
//                 <p className="text-lg font-bold">Gender:</p>
//                 {/* <p className="font-medium">{employee.gender}</p> */}
//                 <p className="font-medium">{employee?.gender || "N/A"}</p>
//               </div>
//               <div className="flex space-x-3 mb-1">
//                 <p className="text-lg font-bold">Department:</p>
//                 {/* <p className="font-medium">{employee.department.dep_name}</p> */}
//                 <p className="font-medium">
//                   {employee?.department?.dep_name || "N/A"}
//                 </p>
//               </div>
//               <div className="flex space-x-3 mb-1">
//                 <p className="text-lg font-bold">Marital Status:</p>
//                 {/* <p className="font-medium">{employee.maritalStatus}</p> */}
//                 <p className="font-medium">
//                   {employee?.maritalStatus ?? "N/A"}
//                 </p>

//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div>Loading...</div>
//       )}
//     </div>
//   );
// };

// export default View;












// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const View = () => {
//   const { id } = useParams();
//   const [employee, setEmployee] = useState(null);

//   useEffect(() => {
//     const fetchEmployee = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:5000/api/employee/${id}`,
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//           }
//         );

//         if (response.data.success) {
//           setEmployee(response.data.employee);
//         }
//       } catch (error) {
//         if (error.response && !error.response.data.success) {
//           alert(error.response.data.error);
//         }
//       }
//     };

//     fetchEmployee();
//   }, [id]);

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center p-6"
//       style={{
//         backgroundImage:
//           "url('https://t3.ftcdn.net/jpg/09/27/94/24/360_F_927942465_j6MgO2enbUJ3IHfr2hn8ZxGfY1Dshi8p.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       {employee ? (
//         <div className="max-w-3xl mx-auto p-8 rounded-2xl shadow-xl bg-white/30 backdrop-blur-md border border-gray-300">
//           <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
//             Employee Details
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
//             <div className="flex justify-center">
//               <img
//                 src={`http://localhost:5000/${employee?.userId?.profileImage}`}
//                 alt="Employee Profile"
//                 className="w-44 h-44 rounded-full object-cover border-4 border-white shadow-lg"
//                 onError={(e) => (e.target.src = "/default-profile.png")}
//               />
//             </div>
//             <div className="text-gray-900 space-y-2">
//               <p className="text-lg">
//                 <span className="font-semibold">Name:</span>{" "}
//                 {employee?.name || "N/A"}
//               </p>

//               <p className="text-lg">
//                 <span className="font-semibold">Employee ID:</span>{" "}
//                 {employee?.employeeId || "N/A"}
//               </p>
//               <p className="text-lg">
//                 <span className="font-semibold">Date of Birth:</span>{" "}
//                 {employee?.dob ? new Date(employee.dob).toDateString() : "N/A"}
//               </p>
//               <p className="text-lg">
//                 <span className="font-semibold">Gender:</span>{" "}
//                 {employee?.gender || "N/A"}
//               </p>
//               <p className="text-lg">
//                 <span className="font-semibold">Department:</span>{" "}
//                 {employee?.department?.dep_name || "N/A"}
//               </p>
//               <p className="text-lg">
//                 <span className="font-semibold">Marital Status:</span>{" "}
//                 {employee?.maritalStatus ?? "N/A"}
//               </p>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="text-gray-900 text-lg">Loading...</div>
//       )}
//     </div>
//   );
// };

// export default View;





import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const View = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(
          `https://employee-api-olive.vercel.app/api/employee/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (response.data.success) {
          setEmployee(response.data.employee);
        } else {
          setError("Failed to fetch employee details.");
        }
      } catch (error) {
        setError(error.response?.data?.error || "Something went wrong.");
      }
    };

    fetchEmployee();
  }, [id]);

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        backgroundImage:
          "url('https://t3.ftcdn.net/jpg/09/27/94/24/360_F_927942465_j6MgO2enbUJ3IHfr2hn8ZxGfY1Dshi8p.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {error ? (
        <div className="text-red-600 text-lg font-semibold">{error}</div>
      ) : employee ? (
        <div className="max-w-3xl mx-auto p-8 rounded-2xl shadow-xl bg-white/30 backdrop-blur-md border border-gray-300">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Employee Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="flex justify-center">
              <img
                src={`https://employee-api-olive.vercel.app/${employee?.userId?.profileImage}`}
                alt="Employee Profile"
                className="w-44 h-44 rounded-full object-cover border-4 border-white shadow-lg"
                onError={(e) => (e.target.src = "/default-profile.png")}
              />
            </div>
            <div className="text-gray-900 space-y-2">
              <p className="text-lg">
                <span className="font-semibold">Name:</span> {employee?.name || "N/A"}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Employee ID:</span> {employee?.employeeId || "N/A"}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Date of Birth:</span> {employee?.dob ? new Date(employee.dob).toDateString() : "N/A"}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Gender:</span> {employee?.gender || "N/A"}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Department:</span> {employee?.department?.dep_name || "N/A"}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Marital Status:</span> {employee?.maritalStatus ?? "N/A"}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-gray-900 text-lg">Loading...</div>
      )}
    </div>
  );
};

export default View;
