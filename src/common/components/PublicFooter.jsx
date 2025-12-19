import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

function PublicFooter() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-20 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-3xl font-bold" style={{ color: "#501558" }}>HireNova</h2>
          <p className="mt-3 text-gray-600 leading-relaxed">
            A modern campus placement & internship management platform for students,
            companies, and TPOs.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4" style={{ color: "#501558" }}>Explore</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
            <li><Link to="/student/login" className="hover:text-blue-600">Student Login</Link></li>
            <li><Link to="/company/login" className="hover:text-blue-600">Company Login</Link></li>
            <li><Link to="/tpo/login" className="hover:text-blue-600">TPO Login</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4" style={{ color: "#501558" }}>Resources</h3>
          <ul className="space-y-2">
            <li><Link className="hover:text-blue-600">Help Center</Link></li>
            <li><Link className="hover:text-blue-600">Support</Link></li>
            <li><Link className="hover:text-blue-600">Terms & Conditions</Link></li>
            <li><Link className="hover:text-blue-600">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4" style={{ color: "#501558" }}>Contact</h3>
          <p className="text-gray-600">Email: hirenova.support@gmail.com</p>

          <div className="flex gap-4 mt-5 text-2xl" style={{ color: "#501558" }}>
            <a href="#" className="hover:text-blue-500 transition"><FaLinkedin /></a>
            <a href="#" className="hover:text-blue-500 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-500 transition"><FaWhatsapp /></a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-300 py-4 text-center text-gray-600">
        © {new Date().getFullYear()} HireNova — All Rights Reserved.
      </div>
    </footer>
  );
}

export default PublicFooter;
