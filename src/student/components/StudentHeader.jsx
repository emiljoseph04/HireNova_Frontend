import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

function StudentHeader() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("existingUser");
    setOpen(false);
    toast.success("Logout Successfully")
    navigate("/");
    
  };

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to="/student/dashboard"
          className="text-2xl font-extrabold tracking-wide"
          style={{ color: "#501558" }}
        >
          HireNova
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li><Link to="/student/dashboard" className="hover:text-[#501558]">Dashboard</Link></li>
          <li><Link to="/student/jobs" className="hover:text-[#501558]">Jobs</Link></li>
          <li><Link to="/student/applications" className="hover:text-[#501558]">Applications</Link></li>
          <li><Link to="/student/resume" className="hover:text-[#501558]">Resume</Link></li>
          <li><Link to="/student/drives" className="hover:text-[#501558]">Drives</Link></li>

          {/* <li><Link to="/student/profile" className="hover:text-[#501558]">Profile</Link></li> */}

          <li>
            <button
              onClick={handleLogout}
              className="text-white px-4 py-1.5 rounded-lg transition"
              style={{ backgroundColor: "#501558" }}
            >
              Logout
            </button>
          </li>
        </ul>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-6 py-4">
          <ul className="flex flex-col gap-5 text-gray-700 font-medium">
            <li><Link onClick={() => setOpen(false)} to="/student/dashboard">Dashboard</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/student/jobs">Jobs</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/student/applications">Applications</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/student/resume">Resume</Link></li>
            <li><Link to="/student/drives" className="hover:text-[#501558]">Drives</Link></li>

            {/* <li><Link onClick={() => setOpen(false)} to="/student/profile">Profile</Link></li> */}

            <li>
              <button
                onClick={handleLogout}
                className="text-white px-4 py-2 rounded-lg transition"
                style={{ backgroundColor: "#501558" }}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default StudentHeader;
