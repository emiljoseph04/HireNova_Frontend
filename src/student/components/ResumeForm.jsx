import React from "react";

function ResumeForm({ resume, setResume }) {

  // update nested sections
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
          placeholder="Full Name"
          value={resume.personal.name}
          onChange={e => update("personal", "name", e.target.value)}
        />

        <input
          className="input"
          placeholder="Email"
          value={resume.personal.email}
          onChange={e => update("personal", "email", e.target.value)}
        />

        <input
          className="input"
          placeholder="Phone"
          value={resume.personal.phone}
          onChange={e => update("personal", "phone", e.target.value)}
        />

        <input
          className="input"
          placeholder="LinkedIn URL"
          value={resume.personal.linkedin}
          onChange={e => update("personal", "linkedin", e.target.value)}
        />

        <input
          className="input"
          placeholder="GitHub URL"
          value={resume.personal.github}
          onChange={e => update("personal", "github", e.target.value)}
        />
      </section>

      {/* SUMMARY */}
      <section>
        <h2 className="section-title">Professional Summary</h2>
        <textarea
          className="input h-28"
          placeholder="Write a short professional summary..."
          value={resume.summary}
          onChange={e => setResume({ ...resume, summary: e.target.value })}
        />
      </section>

      {/* EDUCATION */}
      <section>
        <h2 className="section-title">Education</h2>

        <input
          className="input"
          placeholder="Degree"
          value={resume.education.degree}
          onChange={e => update("education", "degree", e.target.value)}
        />

        <input
          className="input"
          placeholder="College / University"
          value={resume.education.college}
          onChange={e => update("education", "college", e.target.value)}
        />

        <input
          className="input"
          placeholder="Year"
          value={resume.education.year}
          onChange={e => update("education", "year", e.target.value)}
        />

        <input
          className="input"
          placeholder="CGPA"
          value={resume.education.cgpa}
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

      {/* PROJECTS */}
      <section>
        <h2 className="section-title">Projects</h2>

        {resume.projects.map((project, index) => (
          <div key={index} className="space-y-2 mb-4">
            <input
              className="input"
              placeholder="Project Title"
              value={project.title}
              onChange={e => {
                const updated = [...resume.projects];
                updated[index].title = e.target.value;
                setResume({ ...resume, projects: updated });
              }}
            />

            <textarea
              className="input h-24"
              placeholder="Project Description"
              value={project.description}
              onChange={e => {
                const updated = [...resume.projects];
                updated[index].description = e.target.value;
                setResume({ ...resume, projects: updated });
              }}
            />

            {resume.projects.length > 1 && (
              <button
                className="btn-outline"
                onClick={() => {
                  const updated = resume.projects.filter((_, i) => i !== index);
                  setResume({ ...resume, projects: updated });
                }}
              >
                Remove Project
              </button>
            )}
          </div>
        ))}

        <button
          className="btn"
          onClick={() =>
            setResume({
              ...resume,
              projects: [...resume.projects, { title: "", description: "" }]
            })
          }
        >
          + Add Project
        </button>
      </section>

      {/* CUSTOM SECTIONS */}
      <section>
        <h2 className="section-title">Custom Sections</h2>

        {resume.customSections.map((sec, index) => (
          <div key={index} className="space-y-2 mb-4">
            <input
              className="input"
              placeholder="Section Title (eg: Certifications)"
              value={sec.title}
              onChange={e => {
                const updated = [...resume.customSections];
                updated[index].title = e.target.value;
                setResume({ ...resume, customSections: updated });
              }}
            />

            <textarea
              className="input h-24"
              placeholder="Section Content"
              value={sec.content}
              onChange={e => {
                const updated = [...resume.customSections];
                updated[index].content = e.target.value;
                setResume({ ...resume, customSections: updated });
              }}
            />

            <button
              className="btn-outline"
              onClick={() => {
                const updated = resume.customSections.filter((_, i) => i !== index);
                setResume({ ...resume, customSections: updated });
              }}
            >
              Remove Section
            </button>
          </div>
        ))}

        <button
          className="btn"
          onClick={() =>
            setResume({
              ...resume,
              customSections: [
                ...resume.customSections,
                { title: "", content: "" }
              ]
            })
          }
        >
          + Add Custom Section
        </button>
      </section>

    </div>
  );
}

export default ResumeForm;
