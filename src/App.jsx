import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './common/pages/LandingPage'
import About from './common/pages/About'
import Pnf from './common/pages/Pnf'
import StudentLogin from './student/pages/StudentLogin'
import StudentRegister from './student/pages/StudentRegister'
import StudentDashboard from './student/pages/StudentDashboard'
import Jobs from './student/pages/Jobs'
import Applications from './student/pages/Applications'
import ResumeBuilder from './student/pages/ResumeBuilder'
import Profile from './student/pages/Profile'
import TpoLogin from './admin/pages/TpoLogin'
import TpoDashboard from './admin/pages/TpoDashboard'
import AddCompany from './admin/pages/AddCompany'
import ManageDrives from './admin/pages/ManageDrives'
import Analytics from './admin/pages/Analytics'
import CompanyLogin from './company/pages/CompanyLogin'
import CompanyDashboard from './company/pages/CompanyDashboard'
import PostJob from './company/pages/PostJob'
import ViewApplicants from './company/pages/ViewApplicants'
import CompanyProfile from './company/pages/CompanyProfile'
import PreLoader from './common/pages/PreLoader'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import ApplyJob from './student/pages/ApplyJob'
import StudentDrives from './student/pages/StudentDrives'
import ResumeHistory from './student/components/ResumeHistory'

function App() {
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoader(false), 3000)
  }, [])

  return (
    <>
      <Routes>
        {/* Common */}
        <Route path='/' element={loader ? <PreLoader /> : <LandingPage />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Pnf />} />

        {/* Student */}
        <Route path='/student/login' element={<StudentLogin />} />
        <Route path='/student/register' element={<StudentRegister />} />
        <Route path='/student/dashboard' element={<StudentDashboard />} />
        <Route path='/student/jobs' element={<Jobs />} />
        <Route path='/student/applications' element={<Applications />} />
        <Route path='/student/resume' element={<ResumeBuilder />} />
        <Route path="/student/resume/history" element={<ResumeHistory />} />
        <Route path="/student/resume/edit/:id" element={<ResumeBuilder />} />
        <Route path='/student/profile' element={<Profile />} />
        <Route path="/student/apply/:jobId" element={<ApplyJob />} />
        <Route path="/student/apply/:jobId" element={<ApplyJob />} />
        <Route path="/student/drives" element={<StudentDrives />} />

        {/* Admin/TPO */}
        <Route path='/tpo/login' element={<TpoLogin />} />
        <Route path='/tpo/dashboard' element={<TpoDashboard />} />
        <Route path='/tpo/add-company' element={<AddCompany />} />
        <Route path='/tpo/manage-drives' element={<ManageDrives />} />
        <Route path='/tpo/analytics' element={<Analytics />} />


        {/* Company */}
        <Route path='/company/login' element={<CompanyLogin />} />
        <Route path='/company/dashboard' element={<CompanyDashboard />} />
        <Route path='/company/post-job' element={<PostJob />} />
        <Route path='/company/view-applicants' element={<ViewApplicants />} />
        <Route path='/company/profile' element={<CompanyProfile />} />

        {/* common */}

      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="colored"

        style={{ zIndex: 9999 }}
      />
    </>
  )
}

export default App
