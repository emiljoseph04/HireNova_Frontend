import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"


//register student
export const studentRegisterAPI=async(reqBody)=>{
    return await commonAPI("POST",`${SERVERURL}/student/register`,reqBody)
}
//login student

export const studentLoginAPI=async(reqBody)=>{
    return await commonAPI("POST",`${SERVERURL}/login`,reqBody)
}
//company login
export const companyLoginAPI = async (reqBody) => {
  return await commonAPI("POST", `${SERVERURL}/login`, reqBody)
}
//tpo login
export const tpoLoginAPI = async (reqBody) => {
  return await commonAPI("POST", `${SERVERURL}/login`, reqBody)
}
//compnay post job
export const postJobAPI = async (reqBody, reqHeader) => {
  return await commonAPI( "POST",`${SERVERURL}/company/post-job`,reqBody,reqHeader)
}
//student get all jobs
export const getAllJobsAPI = async () => {
  return await commonAPI("GET", `${SERVERURL}/student/jobs`)
}
//get single job
export const getSingleJobAPI = async (jobId) => {
  return await commonAPI("GET", `${SERVERURL}/student/job/${jobId}`)
}
//applyjob-student
export const applyJobAPI = async (reqBody, reqHeader) => {
  return await commonAPI("POST",`${SERVERURL}/student/apply-job`,reqBody,reqHeader)
}
//get student applications
export const getStudentApplicationsAPI = async (reqHeader) => {
  return await commonAPI("GET",`${SERVERURL}/student/applications`,{},reqHeader)
}

// get applicants for job
export const getApplicantsAPI = (jobId, reqHeader) => { 
  return commonAPI("GET",`${SERVERURL}/company/applicants/${jobId}`,{},reqHeader);
};

// shortlist
export const shortlistApplicantAPI = (applicationId, reqHeader) => {
  return commonAPI("PUT",`${SERVERURL}/company/shortlist/${applicationId}`,{},reqHeader);
};
// ADD COMPANY (TPO)
export const addCompanyAPI = async (reqBody, reqHeader) => {
  return await commonAPI("POST",`${SERVERURL}/tpo/add-company`,reqBody, reqHeader);
};
//get all applicants of company
export const getAllApplicantsAPI = (reqHeader) => {
  return commonAPI("GET",`${SERVERURL}/company/applicants`,{},reqHeader);
};
//get count in company dashboard
export const getCompanyDashboardStatsAPI = (reqHeader) => {
  return commonAPI("GET",`${SERVERURL}/company/dashboard-stats`,{},reqHeader);
};
//post drive
export const createDriveAPI = (reqBody, reqHeader) => {
  return commonAPI("POST", `${SERVERURL}/tpo/create-drive`, reqBody, reqHeader);
};
//get all drives
export const getAllDrivesAPI = (reqHeader) => {
  return commonAPI("GET", `${SERVERURL}/drives`, {}, reqHeader);
};
//update drive
export const updateDriveAPI = (id, reqBody, reqHeader) => {
  return commonAPI("PUT", `${SERVERURL}/tpo/update-drive/${id}`, reqBody, reqHeader);
};
//delete drive
export const deleteDriveAPI = (id, reqHeader) => {
  return commonAPI("DELETE", `${SERVERURL}/tpo/delete-drive/${id}`, {}, reqHeader);
};
//get count for tpo
export const getTpoCountsAPI = (reqHeader) => {
  return commonAPI("GET", `${SERVERURL}/tpo/counts`, {}, reqHeader);
};
// SAVE RESUME
export const saveResumeAPI = async (reqBody, reqHeader) => {
  return await commonAPI("POST",`${SERVERURL}/resumes`,reqBody,reqHeader);};

// GET RESUME HISTORY (all resumes of logged-in user)
export const getResumeHistoryAPI = async (reqHeader) => {
  return await commonAPI("GET",`${SERVERURL}/resumes`,{},reqHeader);
};

// GET SINGLE RESUME (for edit)
export const getSingleResumeAPI = async (resumeId, reqHeader) => {
  return await commonAPI("GET",`${SERVERURL}/resumes/${resumeId}`,{},reqHeader);
};

// UPDATE RESUME
export const updateResumeAPI = async (resumeId, reqBody, reqHeader) => {
  return await commonAPI("PUT",`${SERVERURL}/resumes/${resumeId}`,reqBody,reqHeader);
};
// DELETE RESUME
export const deleteResumeAPI = async (resumeId, reqHeader) => {
  return await commonAPI("DELETE",`${SERVERURL}/resumes/${resumeId}`,{},reqHeader);
};





