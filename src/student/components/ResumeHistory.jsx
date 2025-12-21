import { useEffect, useState } from "react";
import { deleteResumeAPI, getResumeHistoryAPI } from "../../services/allAPI";
import { useNavigate } from "react-router-dom";

function ResumeHistory() {
    const [history, setHistory] = useState([]);
    const navigate = useNavigate();
    const token = sessionStorage.getItem("token");

    useEffect(() => {
        const fetchHistory = async () => {
            const reqHeader = {
                Authorization: `Bearer ${token}`
            };
            const res = await getResumeHistoryAPI(reqHeader);
            if (res.status === 200) {
                setHistory(res.data);
            }
        };
        fetchHistory();
    }, []);
    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this resume?")) return;

        const reqHeader = {
            Authorization: `Bearer ${token}`
        };

        const res = await deleteResumeAPI(id, reqHeader);
        if (res.status === 200) {
            setHistory(history.filter(item => item._id !== id));
        }
    };


    return (
        <div className="min-h-screen bg-[#501558] p-8">
            <h1 className="text-white text-3xl font-bold mb-6">
                Resume History
            </h1>

            {history.length === 0 && (
                <p className="text-white">No resumes found</p>
            )}

            <div className="grid gap-4">
                {history.map(resume => (
                    <div
                        key={resume._id}
                        className="bg-white p-4 rounded shadow flex justify-between items-center"
                    >
                        <div>
                            <h2 className="font-bold">
                                {resume.personal?.name || "Unnamed Resume"}
                            </h2>
                            <p className="text-sm">
                                {resume.personal?.email}
                            </p>
                        </div>

                        <div className="flex gap-3">
                            <button
                                className="btn"
                                onClick={() =>
                                    navigate(`/student/resume/edit/${resume._id}`)
                                }
                            >
                                Edit
                            </button>

                            <button
                                className="btn"
                                onClick={() => handleDelete(resume._id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ResumeHistory;
