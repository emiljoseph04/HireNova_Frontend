import React from "react";
import TpoHeader from "../components/TpoHeader";
import PublicFooter from "../../common/components/PublicFooter";

function Analytics() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f6dcf8] via-[#f3c9f4] to-[#e9b3ed]">
      <TpoHeader />

      <div className="pt-28 pb-16 px-6 max-w-6xl mx-auto">

        <h1 className="text-4xl font-extrabold" style={{ color: "#501558" }}>Analytics</h1>
        <p className="mt-2 text-gray-700">Placement insights and performance overview.</p>

        <div className="grid md:grid-cols-3 gap-10 mt-12">

          <div className="rounded-xl p-8 shadow-xl border bg-white" style={{ borderColor: "#c37ac9" }}>
            <h2 className="text-4xl font-bold" style={{ color: "#501558" }}>87%</h2>
            <p className="text-gray-600 mt-2">Overall Placement Rate</p>
          </div>

          <div className="rounded-xl p-8 shadow-xl border bg-white" style={{ borderColor: "#c37ac9" }}>
            <h2 className="text-4xl font-bold" style={{ color: "#501558" }}>42</h2>
            <p className="text-gray-600 mt-2">Companies This Year</p>
          </div>

          <div className="rounded-xl p-8 shadow-xl border bg-white" style={{ borderColor: "#c37ac9" }}>
            <h2 className="text-4xl font-bold" style={{ color: "#501558" }}>124</h2>
            <p className="text-gray-600 mt-2">Offers Released</p>
          </div>

        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-10">

          <div className="rounded-2xl shadow-xl p-8 border bg-white" style={{ borderColor: "#c37ac9" }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: "#501558" }}>Top Hiring Branches</h3>

            <div className="space-y-5">

              <div>
                <p className="text-gray-800 font-semibold">CSE</p>
                <div className="h-3 bg-gray-200 rounded-lg mt-1">
                  <div className="h-full rounded-lg" style={{ width: "85%", backgroundColor: "#501558" }}></div>
                </div>
              </div>

              <div>
                <p className="text-gray-800 font-semibold">ECE</p>
                <div className="h-3 bg-gray-200 rounded-lg mt-1">
                  <div className="h-full rounded-lg" style={{ width: "70%", backgroundColor: "#501558" }}></div>
                </div>
              </div>

              <div>
                <p className="text-gray-800 font-semibold">BCA</p>
                <div className="h-3 bg-gray-200 rounded-lg mt-1">
                  <div className="h-full rounded-lg" style={{ width: "60%", backgroundColor: "#501558" }}></div>
                </div>
              </div>

            </div>
          </div>

          <div className="rounded-2xl shadow-xl p-8 border bg-white" style={{ borderColor: "#c37ac9" }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: "#501558" }}>Highest Packages</h3>

            <ul className="space-y-3 text-gray-800">

              <li className="flex justify-between border-b pb-2">
                <span>Google</span>
                <span className="font-bold" style={{ color: "#0daa57" }}>32 LPA</span>
              </li>

              <li className="flex justify-between border-b pb-2">
                <span>Microsoft</span>
                <span className="font-bold" style={{ color: "#0daa57" }}>28 LPA</span>
              </li>

              <li className="flex justify-between border-b pb-2">
                <span>Infosys</span>
                <span className="font-bold" style={{ color: "#0daa57" }}>12 LPA</span>
              </li>

            </ul>
          </div>

        </div>

        <div className="mt-16 rounded-2xl shadow-xl p-10 border bg-white" style={{ borderColor: "#c37ac9" }}>
          <h3 className="text-2xl font-bold mb-4" style={{ color: "#501558" }}>Placement Overview</h3>
          <p className="text-gray-700">
            This year has shown strong performance with increased hiring in the tech domain.
            Most companies preferred students with strong programming skills and relevant internships.
          </p>
        </div>

      </div>

      <PublicFooter />
    </div>
  );
}

export default Analytics;
