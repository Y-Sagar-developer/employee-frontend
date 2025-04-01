// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useAuth } from "../../context/AuthContext";

// const Setting = () => {
//   const navigate = useNavigate();
//   const { user } = useAuth();

//   const [setting, setSetting] = useState({
//     userId: user._id,
//     oldPassword: "",
//     newPassword: "",
//     confirmPassword: "",
//   });
//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSetting({ ...setting, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // ✅ Prevent submission if passwords do not match
//     if (setting.newPassword !== setting.confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     try {
//       const response = await axios.put(
//         "http://localhost:5000/api/setting/change-password",
//         setting,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (response.data.success) {
//         alert("Password changed successfully! You will be logged out now.");

//         // ✅ Clear user session (Logout)
//         localStorage.removeItem("token");
//         localStorage.removeItem("user");

//         // ✅ Redirect to login page
//         navigate("/login");
//       }
//     } catch (error) {
//       if (error.response && error.response.data) {
//         setError(error.response.data.error);
//       } else {
//         setError("Something went wrong. Please try again.");
//       }
//     }
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center p-6"
//       style={{
//         backgroundImage:
//           "url('https://png.pngtree.com/thumb_back/fh260/background/20240403/pngtree-ai-generated-lock-padlock-on-blue-background-cyber-security-system-technology-image_15647483.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-96 ">
//         <h2 className="text-2xl font-bold mb-6">Change Password</h2>
//         {error && <p className="text-red-500">{error}</p>}

//         <form onSubmit={handleSubmit}>
//           <div>
//             <label className="text-sm font-medium text-gray-700">
//               Old Password
//             </label>
//             <input
//               type="password"
//               name="oldPassword" // ✅ Fixed name
//               placeholder="Enter Old Password"
//               onChange={handleChange}
//               className="mt-1 w-full p-2 border border-gray-300 rounded-md"
//               required
//             />
//           </div>

//           <div>
//             <label className="text-sm font-medium text-gray-700">
//               New Password
//             </label>
//             <input
//               type="password"
//               name="newPassword" // ✅ Fixed name
//               placeholder="Enter New Password"
//               onChange={handleChange}
//               className="mt-1 w-full p-2 border border-gray-300 rounded-md"
//               required
//             />
//           </div>

//           <div>
//             <label className="text-sm font-medium text-gray-700">
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               name="confirmPassword" // ✅ Fixed name
//               placeholder="Confirm Password"
//               onChange={handleChange}
//               className="mt-1 w-full p-2 border border-gray-300 rounded-md"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-md"
//           >
//             Change Password
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Setting;








import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const Setting = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [setting, setSetting] = useState({
    userId: user._id,
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSetting({ ...setting, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Prevent submission if passwords do not match
    if (setting.newPassword !== setting.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.put(
        "http://localhost:5000/api/setting/change-password",
        setting,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        alert("Password changed successfully! You will be logged out now.");

        // ✅ Clear user session (Logout)
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        // ✅ Redirect to login page
        navigate("/login");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.error);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div
    className="min-h-screen flex items-center justify-start p-6"
    style={{
        backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20240403/pngtree-ai-generated-lock-padlock-on-blue-background-cyber-security-system-technology-image_15647483.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
    }}
>
    <div className="max-w-3xl w-96 p-8 rounded-2xl shadow-xl bg-white/20 backdrop-blur-lg border border-white/30 ml-10">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Change Password</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="text-sm font-medium text-white">Old Password</label>
                <input
                    type="password"
                    name="oldPassword"
                    placeholder="Enter Old Password"
                    onChange={handleChange}
                    className="mt-1 w-full p-3 bg-white/30 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-700"
                    required
                />
            </div>

            <div>
                <label className="text-sm font-medium text-white">New Password</label>
                <input
                    type="password"
                    name="newPassword"
                    placeholder="Enter New Password"
                    onChange={handleChange}
                    className="mt-1 w-full p-3 bg-white/30 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-700"
                    required
                />
            </div>

            <div>
                <label className="text-sm font-medium text-white">Confirm Password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    className="mt-1 w-full p-3 bg-white/30 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-700"
                    required
                />
            </div>

            <button
                type="submit"
                className="w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-lg transition"
            >
                Change Password
            </button>
        </form>
    </div>
</div>

  );
};

export default Setting;






