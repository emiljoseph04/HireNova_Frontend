import React, { useEffect, useState } from "react"
import StudentHeader from "../components/StudentHeader"
import PublicFooter from "../../common/components/PublicFooter"
import { getAllJobsAPI } from "../../services/allAPI"
import { useNavigate } from "react-router-dom"

function Jobs() {
  const navigate = useNavigate()

  const [jobs, setJobs] = useState([])
  const [search, setSearch] = useState("")
  const [expandedJobId, setExpandedJobId] = useState(null)

  useEffect(() => {
    getJobs()
  }, [])

  const getJobs = async () => {
    try {
      const result = await getAllJobsAPI()
      if (result.status === 200) {
        setJobs(result.data)
      }
    } catch (error) {
      alert("Failed to load jobs")
    }
  }

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase()) ||
    job.companyName.toLowerCase().includes(search.toLowerCase()) ||
    job.location.toLowerCase().includes(search.toLowerCase())
  )

  const toggleDetails = (jobId) => {
    setExpandedJobId(expandedJobId === jobId ? null : jobId)
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#501558" }}>
      <StudentHeader />

      <div className="pt-28 pb-20 px-6 max-w-7xl mx-auto w-full">
        <h1 className="text-3xl font-extrabold text-white">Available Jobs</h1>
        <p className="mt-1" style={{ color: "#D9B3E6" }}>
          Browse opportunities matching your career path.
        </p>

        <input
          type="text"
          placeholder="Search for jobs, companies or locations..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="mt-6 px-5 py-3 w-full rounded-xl bg-white text-slate-800 border shadow-md focus:outline-none"
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredJobs.length === 0 && (
            <p className="text-lg" style={{ color: "#D9B3E6" }}>
              No jobs found.
            </p>
          )}

          {filteredJobs.map(job => (
            <div
              key={job._id}
              className="bg-white p-7 rounded-2xl border shadow-lg hover:shadow-2xl transition"
              style={{ borderColor: "#501558" }}
            >
              {/* HEADER */}
              <div className="flex items-center gap-4">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center border"
                  style={{ backgroundColor: "#F4E6F8", borderColor: "#501558" }}
                >
                  <span className="text-2xl font-bold" style={{ color: "#501558" }}>
                    {job.companyName.charAt(0)}
                  </span>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-slate-900">{job.title}</h2>
                  <p className="font-medium" style={{ color: "#501558" }}>
                    {job.companyName}
                  </p>
                </div>
              </div>

              {/* BASIC INFO */}
              <div className="mt-4 space-y-1 text-sm text-slate-700">
                <p>📍 {job.location}</p>
                {job.salary && <p>💼 {job.salary}</p>}
                {job.eligibleBranches && <p>🎓 {job.eligibleBranches}</p>}
                {job.jobType && <p>🕒 {job.jobType}</p>}
              </div>

              {/* VIEW DETAILS */}
              <button
                onClick={() => toggleDetails(job._id)}
                className="mt-4 text-sm font-semibold underline"
                style={{ color: "#501558" }}
              >
                {expandedJobId === job._id ? "Hide Details" : "View Details"}
              </button>

              {/* EXPANDED DETAILS */}
              {expandedJobId === job._id && (
                <div className="mt-4 text-sm text-gray-700 border-t pt-4">
                  <p className="font-semibold">Job Description</p>
                  <p className="mt-1">{job.description || "No description provided"}</p>

                  {job.createdAt && (
                    <p className="mt-3 text-xs text-gray-500">
                      Posted on: {new Date(job.createdAt).toLocaleDateString()}
                    </p>
                  )}
                </div>
              )}

              {/* APPLY */}
              <button
                className="w-full mt-5 py-2 rounded-xl text-white font-semibold shadow-md transition"
                style={{ backgroundColor: "#501558" }}
                onClick={() => navigate(`/student/apply/${job._id}`)}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>

      <PublicFooter />
    </div>
  )
}

export default Jobs
