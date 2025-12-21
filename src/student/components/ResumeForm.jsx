import React from "react";

function ResumeForm({ resume, setResume }) {

  const update = (section, field, value) => {
    setResume({
      ...resume,
      [section]: {
        ...resume[section],
        [field]: value
      }
    });
  };

  return (
    <div className="text-white space-y-10">

      {/* PERSONAL INFO */}
      <section>
        <h2 className="section-title">Personal Information</h2>

        <input
          className="input"
          placeholder="name"
          value={resume.personal.name || ""}
          onChange={e => update("personal", "name", e.target.value)}
        />

        <input
          className="input"
          placeholder="email"
          value={resume.personal.email || ""}
          onChange={e => update("personal", "email", e.target.value)}
        />

        <input
          className="input"
          placeholder="phone"
          value={resume.personal.phone || ""}
          onChange={e => update("personal", "phone", e.target.value)}
        />

        <input
          className="input"
          placeholder="linkedin"
          value={resume.personal.linkedin || ""}
          onChange={e => update("personal", "linkedin", e.target.value)}
        />

        <input
          className="input"
          placeholder="github"
          value={resume.personal.github || ""}
          onChange={e => update("personal", "github", e.target.value)}
        />
      </section>

      {/* SUMMARY */}
      <section>
        <h2 className="section-title">Professional Summary</h2>
        <textarea
          className="input h-28"
          placeholder="Write a short summary..."
          value={resume.summary || ""}
          onChange={e => setResume({ ...resume, summary: e.target.value })}
        />
      </section>

      {/* EDUCATION */}
      <section>
        <h2 className="section-title">Education</h2>

        <input
          className="input"
          placeholder="degree"
          value={resume.education.degree || ""}
          onChange={e => update("education", "degree", e.target.value)}
        />

        <input
          className="input"
          placeholder="college"
          value={resume.education.college || ""}
          onChange={e => update("education", "college", e.target.value)}
        />

        <input
          className="input"
          placeholder="year"
          value={resume.education.year || ""}
          onChange={e => update("education", "year", e.target.value)}
        />

        <input
          className="input"
          placeholder="cgpa"
          value={resume.education.cgpa || ""}
          onChange={e => update("education", "cgpa", e.target.value)}
        />
      </section>

      {/* SKILLS */}
      <section>
        <h2 className="section-title">Skills</h2>
        <input
          className="input"
          placeholder="HTML, CSS, JavaScript"
          value={resume.skills.join(", ")}
          onChange={e =>
            setResume({
              ...resume,
              skills: e.target.value.split(",").map(s => s.trim())
            })
          }
        />
      </section>

    </div>
  );
}

export default ResumeForm;
