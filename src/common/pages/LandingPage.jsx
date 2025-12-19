import React from "react";
import PublicHeader from "../components/PublicHeader";
import PublicFooter from "../components/PublicFooter";

function LandingPage() {
  return (
    <>
      <PublicHeader />

      <section className="relative min-h-screen bg-gradient-to-br from-[#3B0F41] via-[#501558] to-[#6A1B7A] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(186,85,211,0.2),transparent_50%)]" />
        </div>

        <div className="bg-gradient-to-br from-[#3B0F41] via-[#501558] to-[#6A1B7A] text-white py-32 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                Your Career Starts at <span className="text-purple-300">HireNova</span>
              </h1>

              <p className="mt-6 text-xl text-purple-100 max-w-xl mx-auto lg:mx-0">
                The smartest campus placement & internship platform connecting students, companies, and TPOs.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <a href="/student/login" className="px-8 py-4 bg-purple-300 text-black font-bold text-lg rounded-xl">
                  Explore Opportunities
                </a>
                <a href="/company/login" className="px-8 py-4 border-2 border-purple-200 text-purple-100 rounded-xl">
                  Hire Top Talent
                </a>
              </div>

             
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl max-w-sm w-full">
                <h3 className="text-xl font-bold mb-4">TPO Dashboard</h3>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-white/20 p-4 rounded-xl">
                    <div className="text-2xl font-black">26</div>
                    <p className="text-xs mt-1">Companies</p>
                  </div>
                  <div className="bg-white/20 p-4 rounded-xl">
                    <div className="text-2xl font-black">312</div>
                    <p className="text-xs mt-1">Placed</p>
                  </div>
                  <div className="bg-white/20 p-4 rounded-xl">
                    <div className="text-2xl font-black">12</div>
                    <p className="text-xs mt-1">Drives</p>
                  </div>
                </div>

                <div className="mt-6 bg-purple-700/60 p-5 rounded-xl text-center">
                  <div className="text-4xl font-black">78%</div>
                  <p className="text-sm font-bold mt-1">Placement Rate</p>
                </div>

                <div className="flex gap-3 mt-6">
                  <button className="flex-1 bg-purple-600 py-3 rounded-lg text-white font-bold">
                    Add Company
                  </button>
                  <button className="flex-1 bg-white/20 py-3 rounded-lg text-white font-bold">
                    Analytics
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#501558]">Why Top Colleges Choose HireNova</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Built by placement officers, for placement officers — with love for students and recruiters.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[{ title: "For Students", desc: "One-click applications, real-time status, resume builder, mock interviews & more.", icon: "Student" }, { title: "For TPOs", desc: "Complete drive management, eligibility filters, analytics, announcements & communication hub.", icon: "TPO" }, { title: "For Companies", desc: "Post jobs, screen with filters, schedule interviews, download shortlists instantly.", icon: "Company" }].map((item, i) => (
              <div key={i} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-purple-100 hover:border-purple-300 transition-all duration-500 transform hover:-translate-y-3">
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold text-[#501558] mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#3B0F41] to-[#6A1B7A] text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">
          {[{ number: "98%", label: "Placement Rate" }, { number: "1500+", label: "Students Placed" }, { number: "45+", label: "Drives Conducted" }, { number: "4.9 Stars", label: "User Satisfaction" }].map((stat, i) => (
            <div key={i}>
              <div className="text-5xl md:text-6xl font-black text-purple-200">{stat.number}</div>
              <p className="mt-3 text-lg text-purple-100 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-[#501558]">Ready to Transform Campus Hiring?</h2>
          <p className="mt-6 text-2xl text-gray-700">Join the new era of organized, transparent, and fast placements.</p>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/student/login" className="px-10 py-5 bg-gradient-to-r from-[#501558] to-[#6A1B7A] text-white font-bold text-xl rounded-xl shadow-2xl hover:scale-105 transition">Student Login</a>
            <a href="/tpo/login" className="px-10 py-5 bg-purple-100 text-[#501558] font-bold text-xl rounded-xl shadow-2xl hover:bg-purple-200 hover:scale-105 transition">TPO Dashboard</a>
          </div>
        </div>
      </section>

      <PublicFooter />
    </>
  );
}

export default LandingPage;