import React from "react";
import CompanyHeader from "../components/CompanyHeader";
import PublicFooter from "../../common/components/PublicFooter";

function CompanyProfile() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f8e9f8] to-[#f3d5f3]">
      <CompanyHeader />

      <div className="pt-28 pb-16 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold" style={{ color: "#501558" }}>Company Profile</h1>
        <p className="text-gray-700 mt-2">View and update your company details.</p>

        <div className="mt-10 bg-white shadow-xl border rounded-2xl p-10" style={{ borderColor: "#c37ac9" }}>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 rounded-full flex justify-center items-center text-4xl font-bold shadow-md" style={{ backgroundColor: "#e8c8ea", border: "4px solid #501558", color: "#501558" }}>C</div>

            <div>
              <h2 className="text-3xl font-bold text-gray-800">Company Name</h2>
              <p className="text-gray-600">company@domain.com</p>
            </div>
          </div>

          <div className="mt-10 space-y-10">

            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#501558" }}>Company Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <input placeholder="Company Name" className="p-3 border rounded-lg bg-white focus:ring-2 outline-none" style={{ borderColor: "#c37ac9", focusRingColor: "#501558" }} />
                <input placeholder="Official Email" className="p-3 border rounded-lg bg-white focus:ring-2 outline-none" style={{ borderColor: "#c37ac9" }} />
                <input placeholder="Website" className="p-3 border rounded-lg bg-white focus:ring-2 outline-none" style={{ borderColor: "#c37ac9" }} />
                <input placeholder="Industry Type" className="p-3 border rounded-lg bg-white focus:ring-2 outline-none" style={{ borderColor: "#c37ac9" }} />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#501558" }}>HR Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <input placeholder="HR Name" className="p-3 border rounded-lg bg-white focus:ring-2 outline-none" style={{ borderColor: "#c37ac9" }} />
                <input placeholder="HR Email" className="p-3 border rounded-lg bg-white focus:ring-2 outline-none" style={{ borderColor: "#c37ac9" }} />
                <input placeholder="HR Phone Number" className="p-3 border rounded-lg bg-white focus:ring-2 outline-none" style={{ borderColor: "#c37ac9" }} />
                <input placeholder="Designation" className="p-3 border rounded-lg bg-white focus:ring-2 outline-none" style={{ borderColor: "#c37ac9" }} />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#501558" }}>Address</h3>
              <textarea placeholder="Company Address" className="p-3 w-full h-28 border rounded-lg bg-white focus:ring-2 outline-none" style={{ borderColor: "#c37ac9" }} />
            </div>

          </div>

          <button className="mt-10 w-full text-white py-3 rounded-lg font-bold text-lg shadow-md hover:opacity-90 transition" style={{ backgroundColor: "#501558" }}>Save Changes</button>
        </div>
      </div>

      <PublicFooter />
    </div>
  );
}

export default CompanyProfile;
