import React, { useEffect, useState } from "react";
import TpoHeader from "../components/TpoHeader";
import PublicFooter from "../../common/components/PublicFooter";
import {
  createDriveAPI,
  getAllDrivesAPI,
  deleteDriveAPI,
  updateDriveAPI
} from "../../services/allAPI";
import { toast } from "react-toastify";

function ManageDrives() {
  const token = sessionStorage.getItem("token");

  const reqHeader = {
    Authorization: `Bearer ${token}`
  };

  const [drives, setDrives] = useState([]);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    companyName: "",
    role: "",
    driveDate: "",
    eligibleBranches: "",
    minCgpa: "",
    backlogAllowed: "No"
  });

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

  const handleSubmitDrive = async () => {
    if (!formData.companyName || !formData.role || !formData.driveDate) {
      toast.warning("Please fill required fields");
      return;
    }

    try {
      const payload = {
        ...formData,
        backlogAllowed: formData.backlogAllowed === "Yes"
      };

      if (editId) {
        await updateDriveAPI(editId, payload, reqHeader);
        toast.success("Drive updated successfully");
      } else {
        await createDriveAPI(payload, reqHeader);
        toast.success("Drive created successfully");
      }

      setFormData({
        companyName: "",
        role: "",
        driveDate: "",
        eligibleBranches: "",
        minCgpa: "",
        backlogAllowed: "No"
      });

      setEditId(null);
      fetchDrives();
    } catch {
      toast.error("Operation failed");
    }
  };

  const handleEdit = (drive) => {
    setEditId(drive._id);
    setFormData({
      companyName: drive.companyName,
      role: drive.role,
      driveDate: drive.driveDate.split("T")[0],
      eligibleBranches: drive.eligibleBranches || "",
      minCgpa: drive.minCgpa || "",
      backlogAllowed: drive.backlogAllowed ? "Yes" : "No"
    });
  };

  const handleDelete = async (id) => {
    try {
      await deleteDriveAPI(id, reqHeader);
      toast.success("Drive deleted");
      fetchDrives();
    } catch {
      toast.error("Failed to delete drive");
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

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f6dcf8] to-[#e9b3ed]">
      <TpoHeader />

      <div className="pt-28 pb-16 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-[#501558]">
          Manage Drives
        </h1>
        <p className="mt-2 text-gray-700">
          Create, edit and track placement drives.
        </p>

        <div className="mt-12 p-8 bg-white rounded-2xl shadow-xl border">
          <h2 className="text-2xl font-bold mb-6 text-[#501558]">
            {editId ? "Edit Drive" : "Create New Drive"}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              placeholder="Company Name"
              value={formData.companyName}
              onChange={(e) =>
                setFormData({ ...formData, companyName: e.target.value })
              }
              className="p-3 border rounded-lg"
            />

            <input
              placeholder="Role"
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
              className="p-3 border rounded-lg"
            />

            <input
              type="date"
              value={formData.driveDate}
              onChange={(e) =>
                setFormData({ ...formData, driveDate: e.target.value })
              }
              className="p-3 border rounded-lg"
            />

            <input
              placeholder="Eligible Branches"
              value={formData.eligibleBranches}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  eligibleBranches: e.target.value
                })
              }
              className="p-3 border rounded-lg"
            />

            <input
              placeholder="Minimum CGPA"
              value={formData.minCgpa}
              onChange={(e) =>
                setFormData({ ...formData, minCgpa: e.target.value })
              }
              className="p-3 border rounded-lg"
            />

            <select
              value={formData.backlogAllowed}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  backlogAllowed: e.target.value
                })
              }
              className="p-3 border rounded-lg"
            >
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>

          <button
            onClick={handleSubmitDrive}
            className="mt-6 w-full bg-[#501558] text-white py-3 rounded-lg font-bold"
          >
            {editId ? "Update Drive" : "Create Drive"}
          </button>
        </div>

        <h2 className="text-2xl font-bold mt-16 text-[#501558]">
          Existing Drives
        </h2>

        <div className="mt-6 space-y-6">
          {drives.map((d) => {
            const status = getDriveStatus(d.driveDate);

            return (
              <div
                key={d._id}
                className="p-6 bg-white rounded-xl shadow-md border flex flex-col md:flex-row justify-between items-start md:items-center"
              >
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

                <div className="mt-4 md:mt-0 flex items-center gap-4">
                  <span
                    className={`px-4 py-1 rounded-full text-sm font-semibold ${getStatusStyle(
                      status
                    )}`}
                  >
                    {status}
                  </span>

                  <button
                    onClick={() => handleEdit(d)}
                    className="px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(d._id)}
                    className="px-5 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700"
                  >
                    Delete
                  </button>
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

export default ManageDrives;
