import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { studentLoginAPI } from "../../services/allAPI";

function StudentLogin() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [details, setDetails] = useState({ email: "", password: "" });

  const handleLogin = async () => {
    const { email, password } = details;
    if (!email || !password) {
      toast.info("Fill the form Completely");
    } else {
      try {
        const result = await studentLoginAPI(details);
        if (result.status === 200) {
          toast.success("Login Successfully");
          sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser));
          sessionStorage.setItem("token", result.data.token);
          if (result.data.existingUser.role === "student") {
            navigate("/student/dashboard");
          } else {
            navigate("/");
          }
          setDetails({ email: "", password: "" });
        } else if (result.status === 404) {
          toast.warning(result.response.data);
          setDetails({ email: "", password: "" });
        } else if (result.status === 401) {
          toast.warning(result.response.data);
        } else {
          toast.error("Something Went Wrong");
          setDetails({ email: "", password: "" });
        }
      } catch (error) {
        toast.error("Server Error");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: "#501558" }}>
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-extrabold text-gray-800 text-center">Student Login</h1>
        <p className="text-gray-600 text-center mt-1">Welcome back to HireNova</p>
        <div className="w-14 h-1 mx-auto mt-2 rounded-full" style={{ backgroundColor: "#501558" }}></div>

        <form className="mt-6 space-y-4">
          <input type="email" placeholder=" Email" value={details.email} onChange={e => setDetails({ ...details, email: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" style={{ borderColor: "#501558" }} />

          <div className="relative">
            <input type={showPassword ? "text" : "password"} placeholder="Password" value={details.password} onChange={e => setDetails({ ...details, password: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" style={{ borderColor: "#501558" }} />
            <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 cursor-pointer text-gray-600">{showPassword ? <FaEye /> : <FaEyeSlash />}</span>
          </div>

          <button type="button" onClick={handleLogin} className="w-full text-white py-2 rounded-lg font-semibold transition" style={{ backgroundColor: "#501558" }}>Login</button>
        </form>

        <p className="text-center text-gray-600 mt-4">Don't have an account? <Link to="/student/register" className="font-semibold hover:underline" style={{ color: "#501558" }}>Register</Link></p>
      </div>
    </div>
  );
}

export default StudentLogin;
