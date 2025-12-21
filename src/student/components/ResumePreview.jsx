import { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import {
  saveResumeAPI,
  updateResumeAPI
} from "../../services/allAPI";
import { useNavigate } from "react-router-dom";

function ResumePreview({ resume, editId, setEditId, history, setResume }) {
  const token = sessionStorage.getItem("token");
  const [showHistory, setShowHistory] = useState(false);
    const navigate = useNavigate()
  const saveResumeToDB = async () => {
    if (!token) return;

    const reqHeader = {
      Authorization: `Bearer ${token}`
    };

    if (editId) {
      await updateResumeAPI(editId, resume, reqHeader);
    } else {
      await saveResumeAPI(resume, reqHeader);
    }
  };
  const downloadPDF = async () => {
    try {
      await saveResumeToDB();

      const element = document.getElementById("resume-preview");
      if (!element) return alert("Preview not found");

      const canvas = await html2canvas(element, {
        scale: 2,
        backgroundColor: "#ffffff"
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = 210;
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");

    } catch (err) {
      console.error(err);
      alert("Download failed");
    }
  };

  // LOAD RESUME FROM HISTORY
  const handleEditFromHistory = (item) => {
    setResume(item);       // load full resume
    setEditId(item._id);  // mark edit mode
    setShowHistory(false);
  };

  return (
    <div className="w-full flex flex-col items-end">

      {/* ACTION BUTTONS */}
      <div className="flex gap-3 mb-4">
        <button onClick={downloadPDF} className="btn">Download</button>
        <button
          className="btn"
          onClick={() => navigate("/student/resume/history")}
        >
          History
        </button>      </div>

      {/* HISTORY PANEL (SELECTOR ONLY) */}
      {showHistory && (
        <div className="bg-white p-4 w-full mb-4 border rounded">
          <h2 className="font-bold mb-3">Resume History</h2>

          {history?.length === 0 && <p>No resumes found</p>}

          {history?.map((item) => (
            <div
              key={item._id}
              className="flex justify-between items-center border-b py-2"
            >
              <span className="font-medium">
                {item.personal?.name || "Unnamed Resume"}
              </span>

              <button
                className="btn-outline"
                onClick={() => handleEditFromHistory(item)}
              >
                Edit
              </button>
            </div>
          ))}

          <button
            className="btn mt-3"
            onClick={() => setShowHistory(false)}
          >
            Close
          </button>
        </div>
      )}

      {/* RESUME PREVIEW */}
      <div className="w-full flex justify-center">
        <div
          id="resume-preview"
          style={{
            width: "210mm",
            minHeight: "297mm",
            background: "white",
            padding: "40px"
          }}
        >

          {/* HEADER */}
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <h1 style={{ fontSize: "32px", fontWeight: "700" }}>
              {resume.personal?.name}
            </h1>
            <p>
              {resume.personal?.email} | {resume.personal?.phone}
            </p>
            <p>
              {resume.personal?.linkedin} | {resume.personal?.github}
            </p>
          </div>

          <hr />

          {/* SUMMARY */}
          <h2 className="font-bold mt-4">Summary</h2>
          <p>{resume.summary}</p>

          <hr />

          {/* EDUCATION */}
          <h2 className="font-bold">Education</h2>
          <p>{resume.education?.degree}</p>
          <p>
            {resume.education?.college} | {resume.education?.year}
          </p>
          <p>CGPA: {resume.education?.cgpa}</p>

          <hr />

          {/* SKILLS */}
          <h2 className="font-bold">Skills</h2>
          <ul
            style={{
              columns: 3,
              listStyleType: "disc",
              paddingLeft: "20px"
            }}
          >
            {resume.skills?.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>

          <hr />

          {/* PROJECTS */}
          <h2 className="font-bold">Projects</h2>
          {resume.projects?.map((p, i) => (
            <div key={i}>
              <strong>{p.title}</strong>
              <p>{p.description}</p>
            </div>
          ))}

          {/* CUSTOM SECTIONS */}
          {resume.customSections?.map((c, i) => (
            <div key={i}>
              <hr />
              <h2 className="font-bold">{c.title}</h2>
              <p>{c.content}</p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default ResumePreview;
