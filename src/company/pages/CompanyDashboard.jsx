import React, { useEffect, useState } from "react";
import CompanyHeader from "../components/CompanyHeader";
import PublicFooter from "../../common/components/PublicFooter";
import { getCompanyDashboardStatsAPI } from "../../services/allAPI";
import { toast } from "react-toastify";

function CompanyDashboard() {
  const token = sessionStorage.getItem("token");

  const [stats, setStats] = useState({
    companyName: "",
    jobsPosted: 0,
    totalApplicants: 0,
    shortlisted: 0
  });

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    if (!token) {
      toast.error("Please login again");
      return;
    }

    const reqHeader = {
      Authorization: `Bearer ${token}`
    };

    try {
      const result = await getCompanyDashboardStatsAPI(reqHeader);
      setStats(result.data);
    } catch {
      toast.error("Failed to load dashboard data");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f5d9f7] to-[#f3c9f4]">
      <CompanyHeader />

      <div className="pt-28 pb-16 px-6 max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* LEFT PANEL */}
        <div className="col-span-4 md:col-span-1 bg-white rounded-2xl shadow-xl border p-6 flex flex-col gap-6">
          <h2 className="text-xl font-bold text-[#501558]">
            {stats.companyName}
          </h2>

          <a href="/company/post-job" className="p-3 rounded-lg text-white text-center bg-[#501558]">
            Post New Job
          </a>

          <a href="/company/applicants" className="p-3 rounded-lg text-white text-center bg-[#501558]">
            View Applicants
          </a>
        </div>

        {/* RIGHT PANEL */}
        <div className="col-span-4 md:col-span-3 space-y-10">

          <div>
            <h1 className="text-4xl font-extrabold text-[#501558]">
              Company Dashboard
            </h1>
            <p className="text-gray-700 mt-2">
              Manage job postings and applicants
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold text-[#501558]">
                {stats.jobsPosted}
              </h2>
              <p className="text-gray-600 mt-2">Jobs Posted</p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold text-[#501558]">
                {stats.totalApplicants}
              </h2>
              <p className="text-gray-600 mt-2">Total Applicants</p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold text-[#501558]">
                {stats.shortlisted}
              </h2>
              <p className="text-gray-600 mt-2">Shortlisted</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border p-10" style={{ borderColor: "#c37ac9" }}>
            <h3 className="text-2xl font-bold mb-6" style={{ color: "#501558" }}>Application Overview</h3>
            <div className="flex flex-col md:flex-row items-center gap-10">

              <div className="w-40 h-40 rounded-full relative" style={{ background: "conic-gradient(#501558 0% 18%, #7a1b7c 18% 28%, #e3b3e8 28% 100%)" }}>
                <div className="absolute inset-4 bg-white rounded-full"></div>
                <p className="absolute inset-0 flex justify-center items-center font-bold" style={{ color: "#501558" }}>Data</p>
              </div>

              <div className="space-y-3">
                <p className="flex items-center gap-2 text-gray-700"><span className="w-4 h-4 rounded-sm" style={{ backgroundColor: "#501558" }}></span>Jobs Posted</p>
                <p className="flex items-center gap-2 text-gray-700"><span className="w-4 h-4 rounded-sm" style={{ backgroundColor: "#7a1b7c" }}></span>Shortlisted</p>
                <p className="flex items-center gap-2 text-gray-700"><span className="w-4 h-4 rounded-sm" style={{ backgroundColor: "#e3b3e8" }}></span>Total Applicants</p>
              </div>

            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-xl shadow-md p-8 hover:shadow-xl transition border cursor-pointer" style={{ borderColor: "#c37ac9", background: "linear-gradient(135deg, #ffffff, #f6e1f7)" }}>
              <h3 className="text-xl font-bold" style={{ color: "#501558" }}>Post New Job</h3>
              <p className="text-gray-600 mt-2">Create and publish a job opening.</p>
            </div>
            <div className="rounded-xl shadow-md p-8 hover:shadow-xl transition border cursor-pointer" style={{ borderColor: "#c37ac9", background: "linear-gradient(135deg, #ffffff, #efd3f1)" }}>
              <h3 className="text-xl font-bold" style={{ color: "#501558" }}>View Applicants</h3>
              <p className="text-gray-600 mt-2">Check applications for your job posts.</p>
            </div>
            <div className="rounded-xl shadow-md p-8 hover:shadow-xl transition border cursor-pointer" style={{ borderColor: "#c37ac9", background: "linear-gradient(135deg, #ffffff, #e7c3ea)" }}>
              <h3 className="text-xl font-bold" style={{ color: "#501558" }}>Application Overview</h3>
              <p className="text-gray-600 mt-2">View the overview of job applications.</p>
            </div>
          </div>
        </div>
      </div>

      <PublicFooter />
    </div>
  );
}

export default CompanyDashboard;
