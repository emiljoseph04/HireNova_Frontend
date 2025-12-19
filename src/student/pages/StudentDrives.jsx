import React, { useEffect, useState } from "react";
import StudentHeader from "../components/StudentHeader";
import PublicFooter from "../../common/components/PublicFooter";
import { getAllDrivesAPI } from "../../services/allAPI";
import { toast } from "react-toastify";

function StudentDrives() {
  const token = sessionStorage.getItem("token");
  const reqHeader = {
    Authorization: `Bearer ${token}`
  };

  const [drives, setDrives] = useState([]);

  useEffect(() => {
    fetchDrives();
  }, []);

  const fetchDrives = async () => {
    try {
      const res = await getAllDrivesAPI(reqHeader);
      setDrives(res.data);
    } catch {
      toast.error("Failed to load drives");
    }
  };

  const getDriveStatus = (driveDate) => {
    const today = new Date().toISOString().split("T")[0];
    const drive = new Date(driveDate).toISOString().split("T")[0];

    if (drive === today) return "Active";
    if (drive < today) return "Completed";
    return "Upcoming";
  };

  const getStatusStyle = (status) => {
    if (status === "Active") return "bg-green-100 text-green-700";
    if (status === "Completed") return "bg-gray-200 text-gray-700";
    return "bg-yellow-100 text-yellow-700";
  };

  const sortedDrives = [...drives].sort((a, b) => {
    const statusPriority = {
      Active: 1,
      Upcoming: 2,
      Completed: 3
    };

    const statusA = getDriveStatus(a.driveDate);
    const statusB = getDriveStatus(b.driveDate);

    if (statusPriority[statusA] !== statusPriority[statusB]) {
      return statusPriority[statusA] - statusPriority[statusB];
    }

    return new Date(a.driveDate) - new Date(b.driveDate);
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f7e1f8] to-[#efd1f2]">
      <StudentHeader />

      <div className="pt-28 pb-16 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-[#501558]">
          Placement Drives
        </h1>
        <p className="mt-2 text-gray-700">
          View upcoming and ongoing placement drives.
        </p>

        <div className="mt-10 space-y-6">
          {sortedDrives.map((d) => {
            const status = getDriveStatus(d.driveDate);

            return (
              <div
                key={d._id}
                className="p-6 bg-white rounded-xl shadow-md border"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-[#501558]">
                      {d.companyName}
                    </h3>
                    <p className="text-gray-700">{d.role}</p>
                    <p className="text-gray-700 mt-1">
                      Drive Date:{" "}
                      {new Date(d.driveDate).toLocaleDateString()}
                    </p>
                  </div>

                  <span
                    className={`px-4 py-1 rounded-full text-sm font-semibold ${getStatusStyle(
                      status
                    )}`}
                  >
                    {status}
                  </span>
                </div>

                <div className="mt-4 text-gray-700">
                  <p>
                    <strong>Eligible Branches:</strong>{" "}
                    {d.eligibleBranches || "All"}
                  </p>
                  <p>
                    <strong>Minimum CGPA:</strong>{" "}
                    {d.minCgpa || "Not specified"}
                  </p>
                  <p>
                    <strong>Backlog Allowed:</strong>{" "}
                    {d.backlogAllowed ? "Yes" : "No"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <PublicFooter />
    </div>
  );
}

export default StudentDrives;
