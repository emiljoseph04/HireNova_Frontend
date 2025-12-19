import React from "react";
import PublicHeader from "../components/PublicHeader";
import PublicFooter from "../components/PublicFooter";

function About() {
  return (
    <>
      <PublicHeader />

      <section className="pt-32 pb-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white border-l-8 border-[#501558] shadow-md rounded-xl p-10 md:p-14">
            <h1 className="text-5xl font-extrabold text-gray-800">
              About <span style={{ color: "#501558" }}>HireNova</span>
            </h1>

            <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-3xl">
              HireNova is a modern placement management platform that brings
              together students, companies, and Training & Placement Officers in
              the simplest and most powerful way — replacing confusion with clarity.
            </p>

            <div
              className="mt-6 w-32 h-1 rounded-full"
              style={{ backgroundColor: "#501558" }}
            ></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold" style={{ color: "#501558" }}>
              Our Story
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              HireNova was born from a simple frustration — campus placements
              felt outdated, messy, and stressful. With students juggling forms,
              companies dealing with unorganized lists, and TPOs managing
              everything manually, we knew things needed to change.
              <br />
              <br />
              So we built a platform that brings structure, speed, and simplicity
              to the entire recruitment lifecycle.
            </p>
          </div>

          <div>
            <img
              src="https://img.freepik.com/premium-vector/businessmen-hands-handshake-3d-illustration-cartoon-drawing-deal-contract-companies-colleagues-3d-style-white-background-agreement-business-cooperation-concept_778687-1658.jpg"
              alt="story"
              className="w-64 mx-auto drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <h2
          className="text-4xl font-bold text-center mb-16"
          style={{ color: "#501558" }}
        >
          What We Solve
        </h2>

        <div className="max-w-7xl mx-auto px-6 space-y-24">

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="https://img.freepik.com/free-vector/college-university-students-group-young-happy-people-standing-isolated-white-background_575670-66.jpg?semt=ais_hybrid&w=740&q=80"
              alt="students"
              className="w-48 mx-auto"
            />

            <div>
              <h3 className="text-3xl font-bold text-gray-800">For Students</h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Students often miss opportunities because of unorganized processes.
                HireNova fixes that by giving students:
              </p>

              <ul className="mt-4 space-y-2 text-gray-700">
                <li>✔ A single dashboard for all jobs & internships</li>
                <li>✔ Smart resume builder with instant editing</li>
                <li>✔ One-click apply system</li>
                <li>✔ Clear tracking of every application</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nDBqdYfL55xW44EgPOz9UJ88GSWbuJvzPw&s"
              alt="companies"
              className="w-48 mx-auto"
            />

            <div>
              <h3 className="text-3xl font-bold text-gray-800">For Companies</h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Companies want fast screening and organized data. HireNova gives
                HR teams:
              </p>

              <ul className="mt-4 space-y-2 text-gray-700">
                <li>✔ A dedicated HR login</li>
                <li>✔ Easy job posting with eligibility criteria</li>
                <li>✔ Instant applicant lists</li>
                <li>✔ One-click resume downloads</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY3bs7i6R9iefKD9abn1rwvd61GOQz6l0Knw&s"
              alt="tpo"
              className="w-48 mx-auto"
            />

            <div>
              <h3 className="text-3xl font-bold text-gray-800">For TPOs</h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                TPOs manage the toughest part of placements — coordination.
                HireNova simplifies it with:
              </p>

              <ul className="mt-4 space-y-2 text-gray-700">
                <li>✔ Centralized drive creation</li>
                <li>✔ Branch/CGPA/backlog-based eligibility filtering</li>
                <li>✔ Automated student lists</li>
                <li>✔ Real-time analytics & reports</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      <section
        className="py-16 text-center text-white"
        style={{ backgroundColor: "#501558" }}
      >
        <h2 className="text-4xl font-extrabold">Start Your Placement Journey</h2>

        <p className="mt-2 text-purple-100">
          Join HireNova today — it’s fast, simple & free.
        </p>

        <a
          href="/student/login"
          className="mt-6 inline-block px-10 py-3 bg-white font-bold rounded-lg hover:bg-gray-100 transition"
          style={{ color: "#501558" }}
        >
          Get Started →
        </a>
      </section>

      <PublicFooter />
    </>
  );
}

export default About;
