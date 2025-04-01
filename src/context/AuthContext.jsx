
import axios from "axios";
import React, { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get("https://employee-api-olive.vercel.app/api/auth/verify", {
            headers: { Authorization: `Bearer ${token}` },
          });
          // console.log(response)
          if (response.data.success) {
            setUser(response.data.user);
          } else {
            setUser(null);
            setLoading(false)
          }
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Verification Error:", error.response?.data || error.message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, []); // ✅ Added empty dependency array to prevent infinite loop

  const login = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user)); // ✅ Store user data
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom Hook for consuming AuthContext
export const useAuth = () => useContext(UserContext);

export default AuthContext;

