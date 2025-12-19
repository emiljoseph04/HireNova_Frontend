import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

function CompanyHeader() {
   const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("existingUser");
    setOpen(false);
    toast.success("Logout Successfully")
    navigate("/");
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link to="/" className="text-2xl font-bold tracking-wide" style={{ color: "#501558" }}>
          HireNova • HR
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li><Link to="/company/dashboard" className="hover:text-purple-700" style={{ color: "#501558" }}>Dashboard</Link></li>
          <li><Link to="/company/post-job" className="hover:text-purple-700" style={{ color: "#501558" }}>Post Job</Link></li>
          <li><Link to="/company/view-applicants" className="hover:text-purple-700" style={{ color: "#501558" }}>Applicants</Link></li>
          {/* <li><Link to="/company/profile" className="hover:text-purple-700" style={{ color: "#501558" }}>Profile</Link></li> */}

          <button onClick={handleLogout}>
            <Link
              to="/company/login"
              className="px-4 py-2 text-white rounded-lg transition"
              style={{ backgroundColor: "#501558" }}
            >
              Logout
            </Link>
          </button>
        </ul>

        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl text-gray-700">
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-md px-6 py-4">
          <ul className="flex flex-col gap-5 text-gray-700 font-medium">

            <li><Link onClick={() => setOpen(false)} to="/company/dashboard" style={{ color: "#501558" }}>Dashboard</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/company/post-job" style={{ color: "#501558" }}>Post Job</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/company/view-applicants" style={{ color: "#501558" }}>Applicants</Link></li>
            {/* <li><Link onClick={() => setOpen(false)} to="/company/profile" style={{ color: "#501558" }}>Profile</Link></li> */}
            <button onClick={handleLogout}><Link onClick={() => setOpen(false)} to="/company/login" style={{ color: "#501558" }}>Logout</Link></button>

          </ul>
        </div>
      )}
    </nav>
  );
}

export default CompanyHeader;
