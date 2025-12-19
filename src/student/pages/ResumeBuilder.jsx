import React, { useState } from "react";
import StudentHeader from "../components/StudentHeader";
import PublicFooter from "../../common/components/PublicFooter";
import ResumeForm from "../components/ResumeForm";
import ResumePreview from "../components/ResumePreview";

function ResumeBuilder() {
  const [resume, setResume] = useState({
    personal: {
      name: "",
      email: "",
      phone: "",
      linkedin: "",
      github: ""
    },
    summary: "",
    education: {
      degree: "",
      college: "",
      year: "",
      cgpa: ""
    },
    skills: [],
    projects: [],
    customSections: []
  });

  return (
    <div className="min-h-screen bg-[#501558]">
      <StudentHeader />

      <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        <ResumeForm resume={resume} setResume={setResume} />
        <ResumePreview resume={resume} />
      </div>

      <PublicFooter />
    </div>
  );
}

export default ResumeBuilder;
