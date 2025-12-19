import React, { useEffect, useState } from "react";
import CompanyHeader from "../components/CompanyHeader";
import PublicFooter from "../../common/components/PublicFooter";
import { toast } from "react-toastify";
import { getAllApplicantsAPI, shortlistApplicantAPI } from "../../services/allAPI";
import SERVERURL from "../../services/serverURL";

function ViewApplicants() {
  const token = sessionStorage.getItem("token");

  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplicants();
  }, []);

  const fetchApplicants = async () => {
    if (!token) {
      toast.error("Please login again");
      return;
    }

    const reqHeader = {
      Authorization: `Bearer ${token}`
    };

    try {
      const result = await getAllApplicantsAPI(reqHeader);
      setApplicants(Array.isArray(result.data) ? result.data : []);
    } catch {
      toast.error("Failed to load applicants");
    } finally {
      setLoading(false);
    }
  };

  const handleShortlist = async (applicationId) => {
    const reqHeader = {
      Authorization: `Bearer ${token}`
    };

    try {
      await shortlistApplicantAPI(applicationId, reqHeader);
      toast.success("Applicant shortlisted");
      fetchApplicants();
    } catch {
      toast.error("Failed to shortlist applicant");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <CompanyHeader />

      <div className="pt-28 max-w-6xl mx-auto w-full px-6">
        <h1 className="text-3xl font-bold">All Applicants</h1>

        {loading && <p>Loading...</p>}

        {!loading && applicants.length === 0 && (
          <p>No applicants found</p>
        )}

        {!loading && applicants.length > 0 && (
          <div className="space-y-4 mt-6">
            {applicants.map(app => (
              <div key={app._id} className="border p-4 rounded">
                <h2 className="font-semibold">
                  {app.studentMail}
                </h2>
                <p>Job: {app.jobTitle}</p>
                <p>Status: {app.status}</p>

                <div className="flex gap-3 mt-3">
                  <a
                    href={`${SERVERURL}/uploads/${app.resumeUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-purple-600 text-white rounded"
                    style={{ backgroundColor: "#501558" }}
                  >
                    View Resume
                  </a>

                  {app.status !== "Shortlisted" && (
                    <button
                      onClick={() => handleShortlist(app._id)}
                      className="px-4 py-2 bg-purple-500 text-white rounded"
                      style={{ backgroundColor: "#501558" }}
                    >
                      Shortlist
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <PublicFooter />
    </div>
  );
}

export default ViewApplicants;
