import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Routes, Route } from "react-router-dom";
import NoticeList from "../Pages/Notice/Noticelist";
import AchievementList from "../Pages/Achievement/Achievementlist"
import Login from "../Login";
import Jobs from "../Pages/Job/jobs";
import Joblist from "../Pages/Job/Joblist";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Postedlist from "../Pages/Job/Postedlist";
import Postjob from "../Pages/Job/PostJob";
import InterestedCandidates from "../Pages/Job/InterestedCandidates";
import JobDetails from "../Pages/Job/JobDetails";

const Layout = () => {
  return (
    <div className="alumni-wrapper d-flex flex-column flex-md-row min-vh-100 w-100 bg-light p-0 m-0">
      
      {/* Sidebar Wrapper Container */}
      <div className="flex-shrink-0" style={{ zIndex: 1050 }}>
        <Sidebar />
      </div>

      {/* Main Content Pane */}
      <div className="flex-grow-1 d-flex flex-column position-relative w-100 overflow-hidden" style={{ minWidth: 0, backgroundColor: "#f8fafc" }}>
        
        {/* Desktop Topbar Container */}
        <div className="alumini-detailarea d-none d-md-block sticky-top bg-white border-bottom shadow-sm">
          <Topbar />
        </div>

        {/* Dynamic Route Pages */}
        <div className="content-area p-3 p-md-4 flex-grow-1 overflow-auto">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/notices" element={<NoticeList />} />
            <Route path="/achievements" element={<AchievementList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/joblist" element={<Joblist />} />
            <Route path="/postedlist" element={<Postedlist />} />
            <Route path="/postjob" element={<Postjob />} />
            <Route path="/postjob/:id" element={<Postjob />} />
            <Route path="/interestedcandidates/:id" element={<InterestedCandidates />} />
            <Route path="/jobdetails/:id" element={<JobDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Layout;
