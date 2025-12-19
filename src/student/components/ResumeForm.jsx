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

    const addProject = () => {
        setResume({
            ...resume,
            projects: [...resume.projects, { title: "", description: "" }]
        });
    };

    const updateProject = (index, field, value) => {
        const updated = [...resume.projects];
        updated[index][field] = value;
        setResume({ ...resume, projects: updated });
    };

    const removeProject = index => {
        setResume({
            ...resume,
            projects: resume.projects.filter((_, i) => i !== index)
        });
    };

    const addCustom = () => {
        setResume({
            ...resume,
            customSections: [...resume.customSections, { title: "", content: "" }]
        });
    };

    const updateCustom = (index, field, value) => {
        const updated = [...resume.customSections];
        updated[index][field] = value;
        setResume({ ...resume, customSections: updated });
    };
    const removeCustom = index => {
        setResume({
            ...resume,
            customSections: resume.customSections.filter((_, i) => i !== index)
        });
    };


    return (
        <div className="text-white space-y-10">

            {/* PERSONAL INFO */}
            <section>
                <h2 className="section-title">Personal Information</h2>
                {["name", "email", "phone", "linkedin", "github"].map(field => (
                    <input
                        key={field}
                        className="input"
                        placeholder={field}
                        onChange={e => update("personal", field, e.target.value)}
                    />
                ))}
            </section>

            {/* SUMMARY */}
            <section>
                <h2 className="section-title">Professional Summary</h2>
                <textarea
                    className="input h-28"
                    placeholder="Write a short summary..."
                    onChange={e => setResume({ ...resume, summary: e.target.value })}
                />
            </section>

            {/* EDUCATION */}
            <section>
                <h2 className="section-title">Education</h2>
                {["degree", "college", "year", "cgpa"].map(field => (
                    <input
                        key={field}
                        className="input"
                        placeholder={field}
                        onChange={e => update("education", field, e.target.value)}
                    />
                ))}
            </section>

            {/* SKILLS */}
            <section>
                <h2 className="section-title">Skills</h2>
                <input
                    className="input"
                    placeholder="HTML, CSS, JavaScript"
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
                    <div key={index} className="mb-4">
                        <input
                            className="input"
                            placeholder="Project Title"
                            onChange={e => updateProject(index, "title", e.target.value)}
                        />
                        <textarea
                            className="input h-20"
                            placeholder="Project Description"
                            onChange={e => updateProject(index, "description", e.target.value)}
                        />
                        <button
                            onClick={() => removeProject(index)}
                            className="text-sm underline mt-1"
                        >
                            Remove
                        </button>
                    </div>
                ))}

                <button onClick={addProject} className="btn-outline">
                    Add Project
                </button>
            </section>

            {/* CUSTOM SECTIONS */}
            <section>
                <h2 className="section-title">Custom Sections</h2>

                {resume.customSections.map((c, index) => (
                    <div key={index} className="mb-4">
                        <input
                            className="input"
                            placeholder="Section Title"
                            value={c.title}
                            onChange={e => updateCustom(index, "title", e.target.value)}
                        />

                        <textarea
                            className="input h-20"
                            placeholder="Content"
                            value={c.content}
                            onChange={e => updateCustom(index, "content", e.target.value)}
                        />

                        <button
                            onClick={() => removeCustom(index)}
                            className="text-sm underline mt-1 text-white"
                        >
                            Remove
                        </button>
                    </div>
                ))}

                <button onClick={addCustom} className="btn-outline">
                    Add Section
                </button>
            </section>


        </div>
    );
}

export default ResumeForm;
