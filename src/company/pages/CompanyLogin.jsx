import React, { useState } from "react";
import PublicFooter from "../../common/components/PublicFooter";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { companyLoginAPI } from "../../services/allAPI";

function CompanyLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [details, setDetails] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async () => {
    const { email, password } = details;

    if (!email || !password) {
      toast.info("Fill the form Completely");
    } else {
      try {
        const result = await companyLoginAPI(details);

        if (result.status === 200) {
          toast.success("Login Successfully");

          sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser));
          sessionStorage.setItem("token", result.data.token);

          if (result.data.existingUser.role === "company") {
            navigate("/company/dashboard");
          } else {
            toast.warning("Unauthorized access");
          }

          setDetails({ email: "", password: "" });
        } 
        else if (result.status === 404) {
          toast.warning(result.response.data);
          setDetails({ email: "", password: "" });
        } 
        else if (result.status === 401) {
          toast.warning(result.response.data);
        } 
        else {
          toast.error("Something Went Wrong");
          setDetails({ email: "", password: "" });
        }
      } catch (error) {
        toast.error("Server Error");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#501558" }}>
      <div className="pt-32 pb-20 px-6 flex justify-center">
        <div className="bg-white border shadow-2xl rounded-2xl p-10 w-full max-w-md" style={{ borderColor: "#501558" }}>
          
          <h1 className="text-3xl font-extrabold text-center" style={{ color: "#501558" }}>Company Login</h1>
          <p className="text-center text-gray-600 mt-2">Login using the credentials given by the TPO.</p>

          <div className="mt-8 space-y-5">
            <input type="email" placeholder="Company Email" value={details.email} onChange={e => setDetails({ ...details, email: e.target.value })} className="w-full p-3 border rounded-lg bg-white outline-none focus:ring-2" style={{ borderColor: "#501558" }} />

            <div className="relative">
              <input type={showPassword ? "text" : "password"} placeholder="Password" value={details.password} onChange={e => setDetails({ ...details, password: e.target.value })} className="w-full p-3 border rounded-lg bg-white outline-none focus:ring-2" style={{ borderColor: "#501558" }} />
              <span onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-3 text-gray-600 text-xl cursor-pointer">{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
            </div>

            <button onClick={handleLogin} className="w-full text-white py-3 rounded-lg font-bold transition" style={{ backgroundColor: "#501558" }}>Login</button>
          </div>

          <p className="text-center text-gray-500 text-sm mt-5">Forgot password? Contact TPO.</p>
        </div>
      </div>
      <PublicFooter />
    </div>
  );
}

export default CompanyLogin;
