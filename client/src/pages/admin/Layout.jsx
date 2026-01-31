import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import { useAppContext } from "../../context/AppContext";

const Layout = () => {
  const navigate = useNavigate();
  const { axios, setToken } = useAppContext();

  // Redirect to login if no token
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
  }, [navigate]);

  const logout = () => {
    // Clear token
    localStorage.removeItem("token");
    delete axios.defaults.headers["Authorization"];
    setToken(null);

    // Redirect to home page
    navigate("/");
  };

  return (
    <>
      {/* Top Navbar */}
      <div className="flex justify-between items-center py-5 px-4 sm:px-20 xl:px-32 cursor-pointer bg-white shadow-md">
        {/* Text Logo */}
        <h1
          onClick={() => navigate("/")}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary cursor-pointer transition-transform duration-300 hover:scale-105"
        >
          QuietPulse
        </h1>

        {/* Logout Button */}
        <button
          onClick={logout}
          className="flex items-center justify-center rounded-full text-sm sm:text-base cursor-pointer bg-primary text-white px-8 sm:px-10 py-2.5 sm:py-3 transition-all duration-300 hover:shadow-lg"
        >
          Logout
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex h-[calc(100vh-70px)]">
        <Sidebar logout={logout} />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
