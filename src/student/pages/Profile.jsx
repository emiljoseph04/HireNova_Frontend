import React from "react";
import StudentHeader from "../components/StudentHeader";
import PublicFooter from "../../common/components/PublicFooter";

function Profile() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#501558" }}>
      <StudentHeader />

      <div className="pt-28 pb-16 px-6 max-w-4xl mx-auto">

        <h1 className="text-4xl font-extrabold text-white">My Profile</h1>
        <p className="text-purple-200 mt-2">View and update your profile details.</p>

        <div className="mt-10 bg-white shadow-xl border rounded-2xl p-10" style={{ borderColor: "#501558" }}>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 rounded-full flex justify-center items-center text-4xl font-bold" style={{ backgroundColor: "#EED7F4", color: "#501558", border: "4px solid #501558" }}>
              S
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-800">Student Name</h2>
              <p className="text-gray-600">student@college.com</p>
            </div>
          </div>

          <div className="mt-10 space-y-10">

            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#501558" }}>Personal Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <input placeholder="Full Name" className="p-3 border rounded-lg bg-white focus:ring-2" style={{ borderColor: "#501558", focusRingColor: "#501558" }} />
                <input placeholder="Email Address" className="p-3 border rounded-lg bg-white focus:ring-2" style={{ borderColor: "#501558" }} />
                <input placeholder="Phone Number" className="p-3 border rounded-lg bg-white focus:ring-2" style={{ borderColor: "#501558" }} />
                <input placeholder="Address" className="p-3 border rounded-lg bg-white focus:ring-2" style={{ borderColor: "#501558" }} />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#501558" }}>Academic Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <input placeholder="Degree" className="p-3 border rounded-lg bg-white focus:ring-2" style={{ borderColor: "#501558" }} />
                <input placeholder="Department" className="p-3 border rounded-lg bg-white focus:ring-2" style={{ borderColor: "#501558" }} />
                <input placeholder="Year of Study" className="p-3 border rounded-lg bg-white focus:ring-2" style={{ borderColor: "#501558" }} />
                <input placeholder="CGPA" className="p-3 border rounded-lg bg-white focus:ring-2" style={{ borderColor: "#501558" }} />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#501558" }}>Links</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <input placeholder="LinkedIn URL" className="p-3 border rounded-lg bg-white focus:ring-2" style={{ borderColor: "#501558" }} />
                <input placeholder="GitHub URL" className="p-3 border rounded-lg bg-white focus:ring-2" style={{ borderColor: "#501558" }} />
              </div>
            </div>

          </div>

          <button className="mt-10 w-full py-3 rounded-lg font-bold text-lg text-white shadow-md" style={{ backgroundColor: "#501558" }}>
            Save Changes
          </button>
        </div>

      </div>

      <PublicFooter />
    </div>
  );
}

export default Profile;
