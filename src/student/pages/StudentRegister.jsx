import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { studentRegisterAPI } from "../../services/allAPI";

function StudentRegister() {

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [details, setDetails] = useState({
    username: "",
    email: "",
    phone: "",
    branch: "",
    password: "",
    confirmPassword: ""
  });

  const handleRegister = async () => {
    const { username, email, phone, branch, password, confirmPassword } = details;

    if (!username || !email || !phone || !branch || !password || !confirmPassword) {
      toast.info("Fill all the fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.warning("Passwords do not match");
      return;
    }

    const reqBody = { username, email, phone, branch, password };

    try {
      const result = await studentRegisterAPI(reqBody);

      if (result.status === 201) {
        toast.success("Registered successfully");
        setDetails({ username: "", email: "", phone: "", branch: "", password: "", confirmPassword: "" });
        navigate("/student/login");
      } else if (result.status === 409) {
        toast.warning(result.data);
      } else {
        toast.error(result.data || "Something went wrong");
      }
    } catch {
      toast.error("Server error, please try again");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: "#501558" }}>
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">

        <h1 className="text-2xl font-extrabold text-gray-800 text-center">Student Registration</h1>
        <p className="text-gray-600 text-center mt-1">Create your HireNova student account</p>
        <div className="w-14 h-1 mx-auto mt-2 rounded-full" style={{ backgroundColor: "#501558" }} />

        <form className="mt-5 space-y-3">

          <input type="text" placeholder="Full Name" value={details.username} onChange={e => setDetails({ ...details, username: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" style={{ borderColor: "#501558" }} />

          <input type="email" placeholder="Email" value={details.email} onChange={e => setDetails({ ...details, email: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" style={{ borderColor: "#501558" }} />

          <input type="text" placeholder="Phone Number" value={details.phone} onChange={e => setDetails({ ...details, phone: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" style={{ borderColor: "#501558" }} />

          <select value={details.branch} onChange={e => setDetails({ ...details, branch: e.target.value })} required className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-600 focus:outline-none" style={{ borderColor: "#501558" }}>
            <option value="">Select Branch</option><option>CSE</option><option>ECE</option><option>EEE</option><option>Mechanical Engineering</option><option>Civil Engineering</option><option>BCA</option><option>BSc Computer Science</option><option>BCom</option><option>BBA</option><option>MCA</option><option>MBA</option>
          </select>

          <div className="relative">
            <input type={showPassword ? "text" : "password"} placeholder="Password" value={details.password} onChange={e => setDetails({ ...details, password: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" style={{ borderColor: "#501558" }} />
            <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 cursor-pointer text-gray-600">{showPassword ? <FaEye /> : <FaEyeSlash />}</span>
          </div>

          <div className="relative">
            <input type={showConfirm ? "text" : "password"} placeholder="Confirm Password" value={details.confirmPassword} onChange={e => setDetails({ ...details, confirmPassword: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" style={{ borderColor: "#501558" }} />
            <span onClick={() => setShowConfirm(!showConfirm)} className="absolute right-3 top-3 cursor-pointer text-gray-600">{showConfirm ? <FaEye /> : <FaEyeSlash />}</span>
          </div>

          <button type="button" onClick={handleRegister} className="w-full text-white py-2 rounded-lg font-semibold transition" style={{ backgroundColor: "#501558" }}>Register</button>

        </form>

        <p className="text-center text-gray-600 mt-4">Already have an account? <Link to="/student/login" className="font-semibold hover:underline" style={{ color: "#501558" }}>Login</Link></p>

      </div>
    </div>
  );
}

export default StudentRegister;
