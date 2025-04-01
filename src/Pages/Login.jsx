// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null); // Reset error before new login attempt

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         { email, password },
//         {
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       console.log("Login Response:", response.data); // Debugging

//       if (response.data.success) {
//         // Ensure role exists before navigation
//         if (!response.data.user.role) {
//           setError("User role is missing. Please try again.");
//           return;
//         }

//         // Save user details and token
//         login(response.data.user);
//         localStorage.setItem("token", response.data.token);
//         localStorage.setItem("user", JSON.stringify(response.data.user));

//         // Navigate based on role
//         if (response.data.user.role === "admin") {
//           navigate("/admin-dashboard");
//         } else {
//           navigate("/employee-dashboard");
//         }
//       }
//     } catch (error) {
//       if (error.response && error.response.data && error.response.data.error) {
//         setError(error.response.data.error);
//       } else {
//         setError("Server Error. Please try again.");
//       }
//     }
//   };

//   return (
//     <div
//       className="d-flex flex-column align-items-center vh-100 justify-content-center px-3"
//       style={{
//         // background: "linear-gradient(to bottom, #0d9488 50%, #f3f4f6 50%)",
//         background: "url(https://www.shutterstock.com/image-illustration/business-technology-internet-network-concept-260nw-2163389367.jpg) no-repeat center center/cover",

//       }}
//     >
//       <h2
//         className="mb-4 text-white fs-3 text-center"
//         style={{ fontFamily: "Sevillana, cursive" }}
//       >
//         Employee Management System
//       </h2>
//       <div
//         className="border shadow p-4 bg-white rounded w-100"
//         style={{ maxWidth: "400px" }}
//       >
//         <h2 className="text-center fs-4 fw-bold mb-4">Login</h2>
//         {error && <p className="alert alert-danger">{error}</p>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label text-dark">
//               Email
//             </label>
//             <input
//               type="email"
//               className="form-control"
//               placeholder="Enter Email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label text-dark">
//               Password
//             </label>
//             <input
//               type="password"
//               className="form-control"
//               placeholder="*******"
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <div className="mb-3 d-flex justify-content-between align-items-center">
//             <div className="form-check">
//               <input
//                 type="checkbox"
//                 className="form-check-input"
//                 id="rememberMe"
//               />
//               <label
//                 className="form-check-label text-dark"
//                 htmlFor="rememberMe"
//               >
//                 Remember me
//               </label>
//             </div>
//             <button
//               type="button"
//               className="btn btn-link p-0"
//               onClick={() => navigate("/forgot-password")}
//               style={{ color: "#0d9488", textDecoration: "none" }}
//             >
//               Forgot password
//             </button>
//           </div>
//           <div className="mb-3">
//             <button
//               type="submit"
//               className="btn w-100 text-white"
//               style={{ backgroundColor: "#0d9488" }}
//             >
//               Login
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;





import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

// import background from "../assets/videoframe_6833.png"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post(
        "https://employee-frontend-sand-two.vercel.app/api/auth/login",
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("Login Response:", response.data);

      if (response.data.success) {
        if (!response.data.user.role) {
          setError("User role is missing. Please try again.");
          return;
        }

        login(response.data.user);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        navigate(response.data.user.role === "admin" ? "/admin-dashboard" : "/employee-dashboard");
      }
    } catch (error) {
      setError(error.response?.data?.error || "Server Error. Please try again.");
    }
  };

  return (
    <div
      className="d-flex flex-column align-items-center vh-100 justify-content-center px-3"
      style={{
        background: `url(https://i.pinimg.com/736x/82/37/35/823735170d433adf154fa5163e72ae6f.jpg) no-repeat center center/cover`,
        // position: "relative",
      }}
    >
      {/* Dark Overlay for Better Readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.4)",
          zIndex: 1,
        }}
      ></div>

      <h2
        className="mb-4 text-white fs-3 text-center"
        style={{ fontFamily: "Poppins, sans-serif", fontWeight: "600", zIndex: 2 }}
      >
        Employee Management System
      </h2>

      <div
        className="border shadow-lg p-4 rounded w-100"
        style={{
          maxWidth: "400px",
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(12px)",
          borderRadius: "12px",
          zIndex: 2,
        }}
      >
        <h2 className="text-center fs-4 fw-bold text-white mb-4">Login</h2>
        {error && <p className="alert alert-danger">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-white">Email</label>
            <input
              type="email"
              className="form-control bg-transparent text-white border"
              placeholder="Enter Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ borderRadius: "8px" }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-white">Password</label>
            <input
              type="password"
              className="form-control bg-transparent text-white border-light"
              placeholder="*******"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ borderRadius: "8px" }}
            />
          </div>
          <div className="mb-3 d-flex justify-content-between align-items-center">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label text-white" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
            <button
              type="button"
              className="btn btn-link p-0"
              onClick={() => navigate("/forgot-password")}
              style={{ color: "#00d4ff", textDecoration: "none" }}
            >
              Forgot password?
            </button>
          </div>
          <div className="mb-3">
            <button
              type="submit"
              className="btn w-100 text-white"
              style={{
                backgroundColor: "#00d4ff",
                border: "none",
                padding: "10px",
                fontSize: "16px",
                fontWeight: "bold",
                borderRadius: "8px",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#00a3cc")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#00d4ff")}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
