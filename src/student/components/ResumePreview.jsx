import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function ResumePreview({ resume }) {
  if (!resume) return null;

  const {
    personal = {},
    summary = "",
    education = {},
    skills = [],
    projects = [],
    customSections = []
  } = resume;

  const downloadPDF = async () => {
    const element = document.getElementById("resume-preview");

    // Ensure element is fully visible
    element.style.height = "auto";
    element.style.overflow = "visible";

    const canvas = await html2canvas(element, {
      scale: 2,
      backgroundColor: "#ffffff",
      useCORS: true,
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = 210;
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");
  };

  return (
    <div className="w-full flex flex-col items-end">

      {/* ACTION BUTTONS */}
      <div className="flex gap-3 mb-4">
        <button onClick={downloadPDF} className="btn">
          Download
        </button>
        {/* <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="btn"
        >
          Edit
        </button> */}
      </div>

      {/* PREVIEW WRAPPER (IMPORTANT) */}
      <div className="w-full flex justify-center">
        <div
          id="resume-preview"
          style={{
            width: "210mm",
            minHeight: "297mm",
            background: "white",
            padding: "40px",
            boxShadow: "0 0 15px rgba(0,0,0,0.1)"
          }}
        >

          {/* HEADER */}
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <h1 style={{ fontSize: "32px", fontWeight: "700" }}>
              {personal.name}
            </h1>

            <p style={{ fontSize: "14px", marginTop: "6px" }}>
              {personal.email}
              {personal.email && personal.phone && " | "}
              {personal.phone}
            </p>

            <p style={{ fontSize: "14px" }}>
              {personal.linkedin}
              {personal.linkedin && personal.github && " | "}
              {personal.github}
            </p>
          </div>

          <hr />

          {/* SUMMARY */}
          <section style={{ marginTop: "20px" }}>
            <h2 style={{ fontSize: "18px", fontWeight: "600" }}>Summary</h2>
            {summary && <p>{summary}</p>}
          </section>

          <hr style={{ margin: "20px 0" }} />

          {/* EDUCATION */}
          <section>
            <h2 style={{ fontSize: "18px", fontWeight: "600" }}>Education</h2>
            {education.degree && <p>{education.degree}</p>}
            {(education.college || education.year) && (
              <p>
                {education.college}
                {education.college && education.year && " | "}
                {education.year}
              </p>
            )}
            {education.cgpa && <p>CGPA: {education.cgpa}</p>}
          </section>

          <hr style={{ margin: "20px 0" }} />

          {/* SKILLS */}
          <section>
            <h2 style={{ fontSize: "18px", fontWeight: "600" }}>Skills</h2>
            {skills.length > 0 && (
              <ul
                style={{
                  columns: 2,
                  listStyleType: "disc",
                  listStylePosition: "inside",
                  paddingLeft: "0",
                  marginTop: "8px"
                }}
              >
                {skills.map((s, i) => (
                  <li key={i} style={{ breakInside: "avoid" }}>
                    {s}
                  </li>
                ))}
              </ul>
            )}

          </section>

          <hr style={{ margin: "20px 0" }} />

          {/* PROJECTS */}
          <section>
            <h2 style={{ fontSize: "18px", fontWeight: "600" }}>Projects</h2>
            {projects.map((p, i) => (
              <div key={i} style={{ marginBottom: "10px" }}>
                {p.title && <strong>{p.title}</strong>}
                {p.description && <p>{p.description}</p>}
              </div>
            ))}
          </section>

          {/* CUSTOM SECTIONS */}
          {customSections.map((c, i) => (
            <section key={i} style={{ marginTop: "20px" }}>
              <h2 style={{ fontSize: "18px", fontWeight: "600" }}>
                {c.title}
              </h2>
              {c.content && <p>{c.content}</p>}
            </section>
          ))}

        </div>
      </div>
    </div>
  );
}

export default ResumePreview;
