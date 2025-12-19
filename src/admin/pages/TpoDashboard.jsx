import React, { useEffect, useState } from "react";
import TpoHeader from "../components/TpoHeader";
import PublicFooter from "../../common/components/PublicFooter";
import { getTpoCountsAPI } from "../../services/allAPI";

function TpoDashboard() {
  const [counts, setCounts] = useState({
    totalCompanies: 0,
    totalDrives: 0,
    activeDrives: 0
  });

  const fetchCounts = async () => {
    try {
      const token = sessionStorage.getItem("token");
      if (!token) return;

      const reqHeader = {
        Authorization: `Bearer ${token}`
      };

      const res = await getTpoCountsAPI(reqHeader);
      setCounts(res.data);
    } catch (error) {
      console.log("Failed to load TPO dashboard counts", error);
    }
  };

  useEffect(() => {
    fetchCounts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f5d9f7] to-[#f3c9f4]">
      <TpoHeader />

      <div className="pt-28 pb-16 px-6 max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        <div
          className="col-span-4 md:col-span-1 bg-white rounded-2xl shadow-xl border p-6 flex flex-col gap-6"
          style={{ borderColor: "#c37ac9" }}
        >
          <h2 className="text-xl font-bold text-[#501558]">Menu</h2>

          <a
            href="/tpo/add-company"
            className="p-3 rounded-lg font-medium text-white text-center"
            style={{ backgroundColor: "#501558" }}
          >
            Add Company
          </a>

          <a
            href="/tpo/manage-drives"
            className="p-3 rounded-lg font-medium text-white text-center"
            style={{ backgroundColor: "#501558" }}
          >
            Manage Drives
          </a>

          <a
            href="/tpo/analytics"
            className="p-3 rounded-lg font-medium text-white text-center"
            style={{ backgroundColor: "#501558" }}
          >
            Analytics
          </a>
        </div>

        <div className="col-span-4 md:col-span-3 space-y-10">
          <div>
            <h1 className="text-4xl font-extrabold text-[#501558]">
              TPO Dashboard
            </h1>
            <p className="text-gray-700 mt-2">
              Overview of placement management activities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="p-8 bg-white rounded-2xl shadow-xl border"
              style={{ borderColor: "#c37ac9" }}
            >
              <h2 className="text-3xl font-bold text-[#501558]">
                {counts.totalCompanies}
              </h2>
              <p className="text-gray-600 mt-2">Total Companies</p>
            </div>

            <div
              className="p-8 bg-white rounded-2xl shadow-xl border"
              style={{ borderColor: "#c37ac9" }}
            >
              <h2 className="text-3xl font-bold text-[#501558]">
                {counts.totalDrives}
              </h2>
              <p className="text-gray-600 mt-2">Total Drives</p>
            </div>

            <div
              className="p-8 bg-white rounded-2xl shadow-xl border"
              style={{ borderColor: "#c37ac9" }}
            >
              <h2 className="text-3xl font-bold text-[#501558]">
                {counts.activeDrives}
              </h2>
              <p className="text-gray-600 mt-2">Active Drives</p>
            </div>
          </div>

          <div
            className="bg-white rounded-2xl shadow-xl border p-10"
            style={{ borderColor: "#c37ac9" }}
          >
            <h3 className="text-2xl font-bold mb-6 text-[#501558]">
              Placement Snapshot
            </h3>

            <div className="flex flex-col md:flex-row items-center gap-10">
              <div
                className="w-40 h-40 rounded-full relative"
                style={{
                  background:
                    "conic-gradient(#501558 0% 40%, #7a1b7c 40% 65%, #e3b3e8 65% 100%)"
                }}
              >
                <div className="absolute inset-4 bg-white rounded-full"></div>
                <p className="absolute inset-0 flex justify-center items-center font-bold text-[#501558]">
                  Overview
                </p>
              </div>

              <div className="space-y-3">
                <p className="flex items-center gap-2 text-gray-700">
                  <span
                    className="w-4 h-4 rounded-sm"
                    style={{ backgroundColor: "#501558" }}
                  ></span>
                  Total Companies ({counts.totalCompanies})
                </p>

                <p className="flex items-center gap-2 text-gray-700">
                  <span
                    className="w-4 h-4 rounded-sm"
                    style={{ backgroundColor: "#7a1b7c" }}
                  ></span>
                  Active Drives ({counts.activeDrives})
                </p>

                <p className="flex items-center gap-2 text-gray-700">
                  <span
                    className="w-4 h-4 rounded-sm"
                    style={{ backgroundColor: "#e3b3e8" }}
                  ></span>
                  Total Drives ({counts.totalDrives})
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl border p-10" style={{ borderColor: "#c37ac9" }}>
            <h3 className="text-2xl font-bold mb-6 text-[#501558]">Placement Snapshot</h3>
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-40 h-40 rounded-full relative" style={{ background: "conic-gradient(#501558 0% 40%, #7a1b7c 40% 65%, #e3b3e8 65% 100%)" }}>
                <div className="absolute inset-4 bg-white rounded-full"></div>
                <p className="absolute inset-0 flex justify-center items-center font-bold text-[#501558]">Overview</p>
              </div>
              <div className="space-y-3">
                <p className="flex items-center gap-2 text-gray-700"><span className="w-4 h-4 rounded-sm" style={{ backgroundColor: "#501558" }}></span>Total Companies (26)</p>
                <p className="flex items-center gap-2 text-gray-700"><span className="w-4 h-4 rounded-sm" style={{ backgroundColor: "#7a1b7c" }}></span>Active Drives (12)</p>
                <p className="flex items-center gap-2 text-gray-700"><span className="w-4 h-4 rounded-sm" style={{ backgroundColor: "#e3b3e8" }}></span>Students Placed (312)</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-xl shadow-md p-8 border cursor-pointer" style={{ borderColor: "#c37ac9", background: "linear-gradient(135deg, #ffffff, #f6e1f7)" }}>
              <h3 className="text-xl font-bold text-[#501558]">Add Company</h3>
              <p className="text-gray-600 mt-2">Register new companies for placements.</p>
            </div>
            <div className="rounded-xl shadow-md p-8 border cursor-pointer" style={{ borderColor: "#c37ac9", background: "linear-gradient(135deg, #ffffff, #efd3f1)" }}>
              <h3 className="text-xl font-bold text-[#501558]">Manage Drives</h3>
              <p className="text-gray-600 mt-2">Create and manage placement drives.</p>
            </div>
            <div className="rounded-xl shadow-md p-8 border cursor-pointer" style={{ borderColor: "#c37ac9", background: "linear-gradient(135deg, #ffffff, #e7c3ea)" }}>
              <h3 className="text-xl font-bold text-[#501558]">Analytics</h3>
              <p className="text-gray-600 mt-2">View placement insights and trends.</p>
            </div>
          </div>
        </div>
      </div>

      <PublicFooter />
    </div>
  );
}

export default TpoDashboard;
