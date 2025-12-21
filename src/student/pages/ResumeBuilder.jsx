import { useParams } from "react-router-dom";
import { getSingleResumeAPI } from "../../services/allAPI";
import { useEffect, useState } from "react";
import ResumeForm from "../components/ResumeForm";
import ResumePreview from "../components/ResumePreview";
import StudentHeader from "../components/StudentHeader";
import PublicFooter from "../../common/components/PublicFooter";

/* ✅ REQUIRED INITIAL STATE */
const initialState = {
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
};

function ResumeBuilder() {
  const { id } = useParams();
  const [resume, setResume] = useState(initialState);
  const [editId, setEditId] = useState(null);
  const token = sessionStorage.getItem("token");

  /* LOAD RESUME FOR EDIT (FROM HISTORY PAGE) */
  useEffect(() => {
    if (id) {
      const loadResume = async () => {
        const reqHeader = {
          Authorization: `Bearer ${token}`
        };
        const res = await getSingleResumeAPI(id, reqHeader);
        if (res.status === 200) {
          setResume(res.data);
          setEditId(res.data._id);
        }
      };
      loadResume();
    }
  }, [id, token]);

  return (
    <div className="min-h-screen bg-[#501558]">
      {/* HEADER */}
      <StudentHeader />

      {/* MAIN CONTENT */}
      <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        <ResumeForm resume={resume} setResume={setResume} />

        <ResumePreview
          resume={resume}
          editId={editId}
          setEditId={setEditId}
          setResume={setResume}
        />
      </div>

      {/* FOOTER */}
      <PublicFooter />
    </div>
  );
}

export default ResumeBuilder;
