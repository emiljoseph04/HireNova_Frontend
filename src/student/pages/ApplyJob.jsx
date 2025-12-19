import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import StudentHeader from "../components/StudentHeader"
import PublicFooter from "../../common/components/PublicFooter"
import { applyJobAPI, getSingleJobAPI } from "../../services/allAPI"
import { toast } from "react-toastify"

function ApplyJob() {
  const { jobId } = useParams()
  const navigate = useNavigate()

  const [job, setJob] = useState(null)
  const [resumeOption, setResumeOption] = useState("")
  const [resumeFile, setResumeFile] = useState(null)

  const student = JSON.parse(sessionStorage.getItem("existingUser"))

  useEffect(() => {
    fetchJob()
  }, [])
 

  const fetchJob = async () => {
    try {
      const result = await getSingleJobAPI(jobId)
      if (result.status === 200) {
        setJob(result.data)
      }
    } catch {
      toast.error("Failed to load job details")
    }
  }

  const handleApply = async () => {
    if (!resumeOption) {
      toast.info("Please select a resume option")
      return
    }

    if (resumeOption === "upload" && !resumeFile) {
      toast.warning("Please upload your resume")
      return
    }

    const token = sessionStorage.getItem("token")
    if (!token) {
      toast.error("Please login again")
      navigate("/student/login")
      return
    }

    const reqHeader = {
      Authorization: `Bearer ${token}`,
      // "Content-Type": "multipart/form-data"
    }

    const reqBody = new FormData()
    reqBody.append("jobId", jobId)
    reqBody.append("resume", resumeFile)

    try {
      const result = await applyJobAPI(reqBody, reqHeader)

      if (result.status === 201) {
        toast.success("Applied successfully")
        navigate("/student/applications")
      }
    } catch (error) {
      if (error.response?.status === 409) {
        toast.warning("You have already applied for this job")
      } else {
        toast.error("Failed to apply for job")
      }
    }

  }


  if (!job) {
    return <p className="text-center mt-24 text-white">Loading...</p>
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#501558" }}>
      <StudentHeader />

      <div className="pt-28 pb-20 px-6 max-w-4xl mx-auto w-full">

        <h1 className="text-3xl font-extrabold text-white text-center">
          Apply for Job
        </h1>

        {/* JOB DETAILS */}
        <div className="mt-8 bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#501558" }}>
            Job Details
          </h2>

          <p><b>Position:</b> {job.title}</p>
          <p><b>Company:</b> {job.companyName}</p>
          <p><b>Location:</b> {job.location}</p>

          {job.jobType && <p><b>Job Type:</b> {job.jobType}</p>}
          {job.salary && <p><b>Salary:</b> {job.salary}</p>}
          {job.eligibleBranches && <p><b>Eligible Branches:</b> {job.eligibleBranches}</p>}

          {job.description && (
            <div className="mt-4">
              <p className="font-semibold">Job Description</p>
              <p className="text-sm text-gray-700 mt-1">{job.description}</p>
            </div>
          )}
        </div>

        {/* STUDENT DETAILS */}
        <div className="mt-6 bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#501558" }}>
            Your Details
          </h2>

          <input
            value={student?.username || ""}
            disabled
            className="w-full p-2 border rounded mb-3"
          />

          <input
            value={student?.email || ""}
            disabled
            className="w-full p-2 border rounded"
          />
        </div>

        {/* RESUME SECTION */}
        <div className="mt-6 bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#501558" }}>
            Resume
          </h2>

          <label className="flex items-center gap-2">
            <input type="radio" name="resume" onChange={() => setResumeOption("upload")} />
            Upload Resume
          </label>

          {resumeOption === "upload" && (
            <input
              type="file"
              className="mt-3 p-2 border rounded w-full"
              onChange={e => setResumeFile(e.target.files[0])}
            />
          )}

          <label className="flex items-center gap-2 mt-4">
            <input type="radio" name="resume" onChange={() => setResumeOption("generate")} />
            Generate Resume
          </label>

          {resumeOption === "generate" && (
            <button
              onClick={() => navigate("/student/resume")}
              className="mt-3 px-4 py-2 rounded text-white"
              style={{ backgroundColor: "#501558" }}
            >
              Go to Resume Builder
            </button>
          )}
        </div>

        {/* APPLY BUTTON */}
        <button
          onClick={handleApply}
          className="mt-8 w-full py-3 font-bold rounded border-2 border-white text-white hover:bg-white hover:text-[#501558] transition"
        >
          Apply Now
        </button>

      </div>

      <PublicFooter />
    </div>
  )
}

export default ApplyJob
