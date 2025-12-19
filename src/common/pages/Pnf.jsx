import React from "react";
import { Link } from "react-router-dom";

function Pnf() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-6">
      <img src="https://cdn-icons-png.flaticon.com/512/7486/7486802.png" alt="404" className="w-64 mb-6" />
      <h1 className="text-5xl font-extrabold text-gray-800">404</h1>
      <p className="mt-3 text-xl text-gray-600">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="mt-6 px-8 py-3 rounded-lg font-semibold text-white transition" style={{ backgroundColor: "#501558" }}>Go Back Home</Link>
    </div>
  );
}

export default Pnf;
