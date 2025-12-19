import React, { useEffect, useState } from "react";
import StudentHeader from "../components/StudentHeader";
import PublicFooter from "../../common/components/PublicFooter";
import { Link } from "react-router-dom";
import { getStudentApplicationsAPI } from "../../services/allAPI";
import { toast } from "react-toastify";

function StudentDashboard() {
  const student = JSON.parse(sessionStorage.getItem("existingUser"));

  const [appliedCount, setAppliedCount] = useState(0);
  const [shortlistedCount, setShortlistedCount] = useState(0);
  const [selectedCount, setSelectedCount] = useState(0);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      toast.error("Please login again");
      return;
    }

    try {
      const result = await getStudentApplicationsAPI({ Authorization: `Bearer ${token}` });
      if (result.status === 200) {
        const applications = result.data;
        setAppliedCount(applications.filter(a => !a.status || a.status === "Applied").length);
        setShortlistedCount(applications.filter(a => a.status === "Shortlisted").length);
        setSelectedCount(applications.filter(a => a.status === "Selected").length);
      } else {
        toast.error("Failed to load applications");
      }
    } catch (error) {
      toast.error("Something went wrong while fetching applications");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-50 via-purple-100 to-purple-200">
      <StudentHeader />

      <div className="pt-28 pb-20 px-6 max-w-7xl mx-auto w-full grid lg:grid-cols-4 gap-10">
        {/* Left/Main Content */}
        <div className="lg:col-span-3 space-y-10">
          {/* Greeting Card */}
          <div className="bg-white/90 backdrop-blur shadow-xl p-10 rounded-2xl border border-purple-200 flex items-center justify-between gap-6">
            <div>
              <p className="text-sm font-medium tracking-wide text-[#501558] uppercase">Student Dashboard</p>
              <h1 className="text-4xl font-extrabold text-slate-900 mt-1">Hello {student?.username || "Student"} 👋</h1>
              <p className="text-slate-600 mt-3">Here’s your placement journey overview and quick access to your tools.</p>
            </div>
            <Link
              to="/student/jobs"
              className="bg-gradient-to-r from-[#501558] to-[#3B0F41] text-white px-7 py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl hover:from-[#3B0F41] hover:to-[#501558] transition-all duration-200"
            >
              Explore Jobs →
            </Link>
          </div>

          {/* Application Status Timeline */}
          <div className="bg-white/90 backdrop-blur p-8 rounded-2xl shadow-lg border border-purple-200">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Application Status</h2>
                <p className="text-sm text-slate-500 mt-1">Track your progress for all job applications</p>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-purple-50 text-[#501558] border border-purple-100">Live Overview</span>
            </div>

            <div className="mt-8 relative">
              <div className="absolute left-4 top-0 h-full w-1 bg-gradient-to-b from-purple-200 via-purple-300 to-purple-200 rounded-full"></div>
              <div className="space-y-10 ml-10">
                {/* Applied */}
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#501558] shadow-md shadow-purple-200 border-2 border-white"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Applied</h3>
                    <p className="text-slate-500 mt-1">{appliedCount} total applications submitted</p>
                    <p className="text-xs text-[#501558] mt-1">Start applying to open roles to see updates here.</p>
                  </div>
                </div>

                {/* Shortlisted */}
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#6A1B7A] shadow-md shadow-purple-200 border-2 border-white"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Shortlisted</h3>
                    <p className="text-slate-500 mt-1">{shortlistedCount} companies shortlisted you</p>
                    <p className="text-xs text-[#6A1B7A] mt-1">Once recruiters review your profile, you will see it here.</p>
                  </div>
                </div>

                {/* Selected */}
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#3B0F41] shadow-md shadow-purple-200 border-2 border-white"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Selected</h3>
                    <p className="text-slate-500 mt-1">{selectedCount} final selections received</p>
                    <p className="text-xs text-[#3B0F41] mt-1">Your successful offers will appear in this section.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel Overview */}
        <div className="space-y-7">
          {/* Applied Jobs */}
          <div className="bg-gradient-to-br from-[#501558] via-[#6A1B7A] to-[#3B0F41] p-7 rounded-2xl shadow-xl text-white">
            <p className="text-sm uppercase tracking-wide text-purple-200">Overview</p>
            <h2 className="text-xl font-semibold mt-1">Applied Jobs</h2>
            <p className="text-5xl font-extrabold mt-4 leading-none">{appliedCount}</p>
            {appliedCount === 0 ? (
              <p className="text-sm text-purple-200 mt-3">You haven’t applied for any positions yet.</p>
            ) : (
              <p className="text-sm text-purple-200 mt-3">Keep track of your applications here.</p>
            )}
          </div>

          {/* Shortlisted */}
          <div className="bg-gradient-to-br from-[#6A1B7A] via-[#501558] to-[#3B0F41] p-7 rounded-2xl shadow-xl text-white">
            <p className="text-sm uppercase tracking-wide text-purple-200">Recruiter Interest</p>
            <h2 className="text-xl font-semibold mt-1">Shortlisted</h2>
            <p className="text-5xl font-extrabold mt-4 leading-none">{shortlistedCount}</p>
            {shortlistedCount === 0 ? (
              <p className="text-sm text-purple-200 mt-3">Keep applying to increase your chances.</p>
            ) : (
              <p className="text-sm text-purple-200 mt-3">You have been shortlisted for some roles!</p>
            )}
          </div>

          {/* Selected */}
          <div className="bg-gradient-to-br from-[#3B0F41] via-[#6A1B7A] to-[#501558] p-7 rounded-2xl shadow-xl text-white">
            <p className="text-sm uppercase tracking-wide text-purple-200">Final Offers</p>
            <h2 className="text-xl font-semibold mt-1">Selected</h2>
            <p className="text-5xl font-extrabold mt-4 leading-none">{selectedCount}</p>
            {selectedCount === 0 ? (
              <p className="text-sm text-purple-200 mt-3">Your future offers will appear here.</p>
            ) : (
              <p className="text-sm text-purple-200 mt-3">Congratulations! You have received offers.</p>
            )}
          </div>
        </div>
      </div>

      <PublicFooter />
    </div>
  );
}

export default StudentDashboard;
