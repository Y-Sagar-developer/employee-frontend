import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [leave, setLeave] = useState(null);
  const Navigate =useNavigate()
  useEffect(() => {
    const fetchLeave = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          alert("User not authenticated");
          return;
        }

        const response = await axios.get(
          `https://employee-api-olive.vercel.app/api/leave/detail/${id}`, // Fixed URL
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data.success) {
          setLeave(response.data.leave);
        }
      } catch (error) {
        if (error.response?.data?.error) {
          alert(error.response.data.error);
        } else {
          alert("An error occurred while fetching leave details.");
          console.error("Error fetching leave details:", error);
        }
      }
    };

    fetchLeave();
  }, [id]);

  const changeStatus = async (id,status)=>{
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("User not authenticated");
        return;
      }

      const response = await axios.put(
        `https://employee-api-olive.vercel.app/api/leave/${id}`,{status},// Fixed URL
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        Navigate("/admin-dashboard/leaves")
      }
    } catch (error) {
      if (error.response?.data?.error) {
        alert(error.response.data.error);
      } else {
        alert("An error occurred while fetching leave details.");
        console.error("Error fetching leave details:", error);
      }
    }
  }

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
      {leave ? (
        <div className="max-w-6xl mx-auto p-8 rounded-2xl shadow-xl bg-white/30 backdrop-blur-md border border-gray-300">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Leave Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="flex justify-center">
              <img
                src={`https://employee-api-olive.vercel.app/${leave?.employeeId?.userId?.profileImage}`}
                alt="Employee Profile"
                className="w-44 h-44 rounded-full object-cover border-4 border-white shadow-lg"
                onError={(e) => (e.target.src = "/default-profile.png")}
              />
            </div>
            <div className="text-gray-900 space-y-2">
              <p className="text-lg">
                <span className="font-semibold">Name:</span>{" "}
                {leave?.employeeId?.userId?.name || "N/A"}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Employee ID:</span>{" "}
                {leave?.employeeId?.employeeId || "N/A"}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Leave Type:</span>{" "}
                {leave?.leaveType || "N/A"}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Reason:</span>{" "}
                {leave?.reason || "N/A"}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Department:</span>{" "}
                {leave?.employeeId?.department?.dep_name || "N/A"}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Start Date:</span>{" "}
                {leave?.startDate
                  ? new Date(leave.startDate).toLocaleDateString()
                  : "N/A"}
              </p>
              <p className="text-lg">
                <span className="font-semibold">End Date:</span>{" "}
                {leave?.endDate
                  ? new Date(leave.endDate).toLocaleDateString()
                  : "N/A"}
              </p>
              <div className="flex space-x-3">
                <p className="text-lg font-old">
                  {leave.status === "Pending" ? "Action" : "Status:"}
                </p>
                {leave.status === "Pending" ? (
                  <div className="flex space-x-2">
                    <button className="px-2 py-0.5 bg-teal-300 hover:bg-teal-400"
                    onClick={()=>changeStatus(leave._id, "Approved")}>Approve</button>
                    <button className="px-2 py-0.5 bg-red-300 hover:bg-red-400"
                     onClick={()=>changeStatus(leave._id, "Rejected")}>Reject</button>
                  </div>
                ) : (
                  <p className="font-medium">{leave.status}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-gray-900 text-lg">Loading...</div>
      )}
    </div>
  );
};

export default Detail;









































































// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const Detail = () => {
//   const { id } = useParams();
//   const [leave, setLeave] = useState(null);

//   useEffect(() => {
//     const fetchLeave = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           alert("User not authenticated");
//           return;
//         }

//         const response = await axios.get(
//           `http://localhost:5000/api/leave/detail/${id}`, // Fixed URL
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         if (response.data.success) {
//           setLeave(response.data.leave);
//         }
//       } catch (error) {
//         if (error.response?.data?.error) {
//           alert(error.response.data.error);
//         } else {
//           console.error("Error fetching leave details:", error);
//         }
//       }
//     };

//     fetchLeave();
//   }, [id]);

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center"
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
//       {leave ? (
//         <div className="max-w-3xl mx-auto p-8 shadow-md bg-white mt-10 rounded-md">
//           <h2 className="text-2xl font-bold mb-8 text-center">Leave Details</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <img
//                 src={`http://localhost:5000/${leave?.employeeId?.userId?.profileImage}`}
//                 alt="Employee Profile"
//                 className=" rounded-full border w-72"
//                 onError={(e) => (e.target.src = "/default-profile.png")}
//               />
//             </div>
//             <div>
//               <div className="flex space-x-3 ">
//                 <p className="text-lg font-bold">Name:</p>
//                 <p className="font-medium">
//                   {" "}
//                   {leave?.employeeId?.userId?.name || "N/A"}
//                 </p>
//               </div>
//               <div className="flex space-x-3">
//                 <p className="text-lg font-bold">Employee ID:</p>
//                 <p className="font-medium">
//                   {" "}
//                   {leave?.employeeId?.employeeId || "N/A"}
//                 </p>
//               </div>
//               <div className="flex space-x-3">
//                 <p className="text-lg font-bold">Leave Type:</p>
//                 <p className="font-medium"> {leave?.leaveType || "N/A"} </p>
//               </div>
//               <div className="flex space-x-3">
//                 <p className="text-lg font-bold">Reason:</p>
//                 <p className="font-medium"> {leave?.reason || "N/A"}</p>
//               </div>
//               <div className="flex space-x-3">
//                 <p className="text-lg font-bold">Department:</p>
//                 <p className="font-medium">
//                   {leave?.employeeId?.department?.dep_name || "N/A"}
//                 </p>
//               </div>
//               <div className="flex space-x-3 ">
//                 <p className="text-lg font-bold">Start Date:</p>
//                 <p className="font-medium">
//                   {leave?.startDate
//                     ? new Date(leave.startDate).toLocaleDateString()
//                     : "N/A"}{" "}
//                 </p>
//               </div>
//               <div className="flex space-x-3">
//                 <p className="text-lg font-bold">End Date:</p>
//                 <p className="font-medium">
//                   {leave?.startDate
//                     ? new Date(leave.endDate).toLocaleDateString()
//                     : "N/A"}{" "}
//                 </p>
//               </div>

//               <div className="flex space-x-3">
//                 <p className="text-lg font-bold">Status:</p>
//                 <p className="font-medium">{leave?.status || "N/A"}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="text-gray-900 text-lg">Loading...</div>
//       )}
//     </div>
//   );
// };

// export default Detail;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const Detail = () => {
//   const { id } = useParams();
//   const [leave, setLeave] = useState(null);

//   useEffect(() => {
//     const fetchLeave = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           alert("User not authenticated");
//           return;
//         }

//         const response = await axios.get(
//           `http://localhost:5000/api/leave/detail/${id}`, // Fixed URL
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         if (response.data.success) {
//           setLeave(response.data.leave);
//         }
//       } catch (error) {
//         if (error.response?.data?.error) {
//           alert(error.response.data.error);
//         } else {
//           console.error("Error fetching leave details:", error);
//         }
//       }
//     };

//     fetchLeave();
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
//       {leave ? (
//         <div className="max-w-3xl mx-auto p-8 shadow-md bg-white mt-10 rounded-md">
//         <h2 className="text-2xl font-bold mb-8 text-center">
//             Leave Details
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <img
//                 src={`http://localhost:5000/${leave?.employeeId?.userId?.profileImage}`}
//                 alt="Employee Profile"
//                 className=" rounded-full border w-72"
//                 onError={(e) => (e.target.src = "/default-profile.png")}
//               />
//             </div>
//             <div className="text-gray-900 space-y-2">
//               <p className="text-lg">
//                 <span className="font-semibold">Name:</span>{" "}
//                 {leave?.employeeId?.userId?.name || "N/A"}
//               </p>
//               <p className="text-lg">
//                 <span className="font-semibold">Employee ID:</span>{" "}
//                 {leave?.employeeId?.employeeId || "N/A"}
//               </p>
//               <p className="text-lg">
//                 <span className="font-semibold">Leave Type:</span>{" "}
//                 {leave?.leaveType || "N/A"}
//               </p>

//               <p className="text-lg">
//                 <span className="font-semibold">Reason:</span>{" "}
//                 {leave?.reason || "N/A"}
//               </p>
//               <p className="text-lg">
//                 <span className="font-semibold">Department:</span>{" "}
//                 {leave?.employeeId?.department?.dep_name || "N/A"}
//               </p>
//               <p className="text-lg">
//                 <span className="font-semibold">Start Date:</span>{" "}
//                 {leave?.startDate
//                   ? new Date(leave.startDate).toLocaleDateString()
//                   : "N/A"}
//               </p>
//               <p className="text-lg">
//                 <span className="font-semibold">End Date:</span>{" "}
//                 {leave?.startDate
//                   ? new Date(leave.endDate).toLocaleDateString()
//                   : "N/A"}
//               </p>
//               <p className="text-lg">
//                 <span className="font-semibold">Status:</span>{" "}
//                 {leave?.status || "N/A"}
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

// export default Detail;
