import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function PublicHeader() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between w-full">
        <Link to="/" className="text-2xl font-bold tracking-wide" style={{ color: "#501558" }}>HireNova</Link>

        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-[#501558]">Home</Link></li>
          <li><Link to="/about" className="hover:text-[#501558]">About</Link></li>
          <li><Link to="/student/login" className="hover:text-[#501558]">Student</Link></li>
          <li><Link to="/company/login" className="hover:text-[#501558]">Company</Link></li>
          <li><Link to="/tpo/login" className="hover:text-[#501558]">TPO</Link></li>
        </ul>

        <button className="md:hidden text-2xl text-gray-700 flex-shrink-0" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-md px-6 py-4">
          <ul className="flex flex-col gap-5 text-gray-700 font-medium">
            <li><Link to="/" onClick={() => setOpen(false)} className="hover:text-[#501558]">Home</Link></li>
            <li><Link to="/about" onClick={() => setOpen(false)} className="hover:text-[#501558]">About</Link></li>
            <li><Link to="/student/login" onClick={() => setOpen(false)} className="hover:text-[#501558]">Student Login</Link></li>
            <li><Link to="/company/login" onClick={() => setOpen(false)} className="hover:text-[#501558]">Company Login</Link></li>
            <li><Link to="/tpo/login" onClick={() => setOpen(false)} className="hover:text-[#501558]">TPO Login</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default PublicHeader;
