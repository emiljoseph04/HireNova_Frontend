import React, { useState } from "react";
import { toast } from "react-toastify";
import { addCompanyAPI } from "../../services/allAPI";
import CompanyHeader from "../components/TpoHeader";
import PublicFooter from "../../common/components/PublicFooter";

function AddCompany() {
  const token = sessionStorage.getItem("token");

  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { companyName, email, password } = formData;

    if (!companyName || !email || !password) {
      toast.error("All fields are required");
      return;
    }

    const reqHeader = {
      Authorization: `Bearer ${token}`
    };

    try {
      setLoading(true);
      const result = await addCompanyAPI(formData, reqHeader);

      toast.success(result.data.message);

      // Clear form
      setFormData({
        companyName: "",
        email: "",
        password: ""
      });
    } catch (error) {
      toast.error(error.response?.data || "Failed to add company");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f8e9f8] to-[#f3d5f3]">
      <CompanyHeader />

      <div className="pt-28 pb-16 px-6 max-w-xl mx-auto w-full">
        <h1 className="text-4xl font-extrabold text-[#501558]">
          Add Company
        </h1>
        <p className="text-gray-700 mt-2">
          Placement Officer can add company login credentials.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 bg-white shadow-xl border rounded-2xl p-8 space-y-6"
        >
          <div>
            <label className="block font-semibold mb-1">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2"
              placeholder="e.g. Google"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Company Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2"
              placeholder="hr@company.com"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Temporary password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg font-bold text-white"
            style={{ backgroundColor: "#501558" }}
          >
            {loading ? "Adding..." : "Add Company"}
          </button>
        </form>
      </div>

      <PublicFooter />
    </div>
  );
}

export default AddCompany;
