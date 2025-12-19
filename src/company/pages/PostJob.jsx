import React, { useState } from "react"
import CompanyHeader from "../components/CompanyHeader"
import PublicFooter from "../../common/components/PublicFooter"
import { postJobAPI } from "../../services/allAPI"
import { toast } from "react-toastify"

function PostJob() {

  const [jobDetails, setJobDetails] = useState({
    title: "",
    companyName: "",
    description: "",
    location: "",
    salary: "",
    eligibleBranches: "",
    jobType: ""
  })

  const handlePostJob = async () => {
    const { title, companyName, description, location } = jobDetails

    if (!title || !companyName || !description || !location) {
      toast.info("Please fill all required fields")
      return
    }

    const token = sessionStorage.getItem("token")
    if (!token) {
      toast.error("Please login again")
      return
    }

    const reqHeader = {
      Authorization: `Bearer ${token}`
    }

    try {
      const result = await postJobAPI(jobDetails, reqHeader)

      if (result.status === 201) {
        toast.success("Job posted successfully")
        setJobDetails({
          title: "",
          companyName: "",
          description: "",
          location: "",
          salary: "",
          eligibleBranches: "",
          jobType: ""
        })
      } else {
        toast.error("Something went wrong")
      }

    } catch (error) {
      toast.error("Server error")
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f8e9f8] to-[#f3d5f3]">
      <CompanyHeader />

      <div className="pt-28 pb-16 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold" style={{ color: "#501558" }}>Post a Job</h1>
        <p className="text-gray-700 mt-2">Create and publish a new job opening for students.</p>

        <div className="mt-10 bg-white shadow-xl border rounded-2xl p-10 space-y-10" style={{ borderColor: "#c37ac9" }}>

          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: "#501558" }}>Job Details</h3>
            <div className="space-y-6">
              <input placeholder="Job Title" value={jobDetails.title} onChange={e => setJobDetails({ ...jobDetails, title: e.target.value })} className="w-full p-3 border rounded-lg" />
              <input placeholder="Company Name" value={jobDetails.companyName} onChange={e => setJobDetails({ ...jobDetails, companyName: e.target.value })} className="w-full p-3 border rounded-lg" />
              <textarea placeholder="Job Description" value={jobDetails.description} onChange={e => setJobDetails({ ...jobDetails, description: e.target.value })} className="w-full h-28 p-3 border rounded-lg" />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: "#501558" }}>Job Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <input placeholder="Location" value={jobDetails.location} onChange={e => setJobDetails({ ...jobDetails, location: e.target.value })} className="p-3 border rounded-lg" />
              <input placeholder="Salary / Stipend" value={jobDetails.salary} onChange={e => setJobDetails({ ...jobDetails, salary: e.target.value })} className="p-3 border rounded-lg" />
              <input placeholder="Eligible Branches" value={jobDetails.eligibleBranches} onChange={e => setJobDetails({ ...jobDetails, eligibleBranches: e.target.value })} className="p-3 border rounded-lg" />
              <input placeholder="Job Type" value={jobDetails.jobType} onChange={e => setJobDetails({ ...jobDetails, jobType: e.target.value })} className="p-3 border rounded-lg" />
            </div>
          </div>

          <button onClick={handlePostJob} className="w-full py-3 rounded-lg font-bold text-lg text-white" style={{ backgroundColor: "#501558" }}>
            Publish Job
          </button>

        </div>
      </div>

      <PublicFooter />
    </div>
  )
}

export default PostJob
