import React, { useEffect, useState } from "react";
import SummaryCard from "./SummaryCard";
import { FaBuilding, FaCheckCircle, FaFileAlt, FaHourglassHalf, FaMoneyBillWave, FaTimesCircle, FaUser } from "react-icons/fa";
import axios from "axios";

const AdminSummary = () => {
    const [summary, setSummary] = useState(null);

    useEffect(() => {
        const fetchSummary = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/dashboard/summary", {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                });

                console.log(response.data); // To verify if data is correct
                setSummary(response.data);
            } catch (error) {
                if (error.response) {
                    alert(error.response.data.error);
                }
                console.log(error.message);
            }
        };
        fetchSummary();
    }, []);

    if (!summary) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-6">
            <h3 className="text-2xl font-bold">Dashboard overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <SummaryCard
                    icon={<FaUser />}
                    text="Total employees"
                    number={summary.totalEmployees}
                    color="bg-teal-600"
                />
                <SummaryCard
                    icon={<FaBuilding />}
                    text="Total Departments"
                    number={summary.totalDepartments}
                    color="bg-yellow-600"
                />
                <SummaryCard
                    icon={<FaMoneyBillWave />}
                    text="Monthly Salary"
                    number={summary.totalSalary}
                    color="bg-red-600"
                />
            </div>
            <div className="mt-12">
                <h4 className="text-center text-2xl font-bold">Leave details</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <SummaryCard
                        icon={<FaFileAlt />}
                        text="Leave Applied"
                        number={summary.leaveSummary.appliedFor}
                        color="bg-teal-600"
                    />
                    <SummaryCard
                        icon={<FaCheckCircle />}
                        text="Leave Approved"
                        number={summary.leaveSummary.approvedCount}
                        color="bg-green-600"
                    />
                    <SummaryCard
                        icon={<FaHourglassHalf />}
                        text="Total Pending"
                        number={summary.leaveSummary.pendingCount}
                        color="bg-yellow-600"
                    />
                    <SummaryCard
                        icon={<FaTimesCircle />}
                        text="Total Rejected"
                        number={summary.leaveSummary.rejectedCount}
                        color="bg-red-600"
                    />
                </div>
            </div>
        </div>
    );
};

export default AdminSummary;




// import React, { useEffect, useState } from "react";
// import SummaryCard from "./SummaryCard";
// import {
//   FaBuilding,
//   FaCheckCircle,
//   FaFileAlt,
//   FaHourglassHalf,
//   FaMoneyBillWave,
//   FaTimesCircle,
//   FaUser,
// } from "react-icons/fa";
// import axios from "axios"

// const AdminSummary = () => {
//   const [summary, setSummary]= useState(null)
//   useEffect(()=>{

//     const fetchSummary = async ()=>{
//      try{
//  const summary = await axios.get("http://localhost:5000/api/dashboard/summary",{
//   headers :{
//     "Authorization":`Bearer ${localStorage.getItem("token")}`
//   }
//  })
//  console.log(summary.data)
//  setSummary(summary.data)
//      }
//      catch(error){
//       if(error.response){
//         alert(error.response.data.error)
//       }
//       console.log(error.message)
//      }
//    }
//    fetchSummary()
//   },[])
//   if(!summary){
//     return <div> Loading... </div>
//   }
//   return (
//     <div className="p-6">
//       <h3 className="text-2xl font-bold">Dashboard overview</h3>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
//         <SummaryCard
//           icon={<FaUser />}
//           text="Total employees"
//           number={summary.totalEmployees}
//           color="bg-teal-600"
//         />
//         <SummaryCard
//           icon={<FaBuilding />}
//           text="Total Departments"
//           number={summary.totalDepartments}
//           color="bg-yellow-600"
//         />
//         <SummaryCard
//           icon={<FaMoneyBillWave />}
//           text="Monthly Salary"
//           number={summary.totalSalary}
//           color="bg-red-600"
//         />
//       </div>
//       <div className="mt-12">
//         <h4 className="text-center text-2xl font-bold">Leave details</h4>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//           <SummaryCard
//             icon={<FaFileAlt />}
//             text="Leave Applied"
//             number={13}
//             color="bg-teal-600"
//           />
//           <SummaryCard
//             icon={<FaCheckCircle />}
//             text="Leave Approved"
//             number={5}
//             color="bg-green-600"
//           />
//           <SummaryCard
//             icon={<FaHourglassHalf />}
//             text="Total Pending"
//             number={5}
//             color="bg-yellow-600"
//           />
//           <SummaryCard
//             icon={<FaTimesCircle />}
//             text="Total Rejected"
//             number={5}
//             color="bg-red-600"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminSummary;

// import React from 'react';
// import SummaryCard from './SummaryCard';
// import { motion } from 'framer-motion';
// import {
//   FaBuilding, FaCheckCircle, FaFileAlt, FaHourglassHalf,
//   FaMoneyBillWave, FaTimesCircle, FaUser
// } from 'react-icons/fa';

// const cardVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// const AdminSummary = () => {
//   return (
//     <div className='p-6 bg-gray-100 min-h-screen'>
//       <motion.h3
//         className='text-3xl font-extrabold text-center text-gray-800'
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         Dashboard Overview
//       </motion.h3>

//       <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
//         {[
//           { icon: <FaUser/>, text: "Total Employees", number: 13, color: "bg-teal-500" },
//           { icon: <FaBuilding/>, text: "Total Departments", number: 5, color: "bg-yellow-500" },
//           { icon: <FaMoneyBillWave/>, text: "Monthly Salary", number: "$654", color: "bg-red-500" }
//         ].map((item, index) => (
//           <motion.div
//             key={index}
//             variants={cardVariants}
//             initial='hidden'
//             animate='visible'
//             whileHover={{ scale: 1.05 }}
//           >
//             <SummaryCard {...item} />
//           </motion.div>
//         ))}
//       </div>

//       <div className='mt-16'>
//         <motion.h4
//           className='text-2xl font-bold text-center text-gray-800'
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           Leave Details
//         </motion.h4>

//         <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
//           {[
//             { icon: <FaFileAlt/>, text: "Leave Applied", number: 13, color: "bg-teal-500" },
//             { icon: <FaCheckCircle/>, text: "Leave Approved", number: 5, color: "bg-green-500" },
//             { icon: <FaHourglassHalf/>, text: "Total Pending", number: 5, color: "bg-yellow-500" },
//             { icon: <FaTimesCircle/>, text: "Total Rejected", number: 5, color: "bg-red-500" }
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               variants={cardVariants}
//               initial='hidden'
//               animate='visible'
//               whileHover={{ scale: 1.05 }}
//             >
//               <SummaryCard {...item} />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminSummary;
