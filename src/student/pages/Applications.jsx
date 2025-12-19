import React, { useEffect, useState } from "react"
import StudentHeader from "../components/StudentHeader"
import PublicFooter from "../../common/components/PublicFooter"
import { getStudentApplicationsAPI } from "../../services/allAPI"
import { toast } from "react-toastify"

function Applications() {
  const [applications, setApplications] = useState([])
  const token = sessionStorage.getItem("token")

  useEffect(() => {
    fetchApplications()
  }, [])

  const fetchApplications = async () => {
    const reqHeader = {
      Authorization: `Bearer ${token}`
    }

    try {
      const result = await getStudentApplicationsAPI(reqHeader)
      if (result.status === 200) {
        setApplications(result.data)
      }
    } catch {
      toast.error("Failed to load applications")
    }
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#501558" }}>
      <StudentHeader />

      <div className="pt-28 pb-16 px-6 max-w-6xl mx-auto w-full">

        <h1 className="text-3xl font-extrabold text-white">My Applications</h1>

        <div className="mt-10 space-y-6">
          {applications.length === 0 && (
            <p className="text-white">No applications yet</p>
          )}

          {applications.map((app) => (
            <div key={app._id} className="bg-white p-6 rounded-xl border">
              <p><b>Job Title:</b> {app.jobTitle}</p>
              <p><b>Company:</b> {app.companyName}</p>
              <p><b>Location:</b> {app.location}</p>
              <p><b>Status:</b> {app.status}</p>
              <p><b>Applied On:</b> {new Date(app.appliedAt).toDateString()}</p>
            </div>
          ))}

        </div>

      </div>

      <PublicFooter />
    </div>
  )
}

export default Applications
