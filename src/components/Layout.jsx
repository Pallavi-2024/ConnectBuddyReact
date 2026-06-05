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
    <div className="alumni-wrapper">
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <div className="alumini-detailarea">
              <Topbar />
            </div>
            <div>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/notices" element={<NoticeList />} />
                <Route path="/achievements" element={<AchievementList />} />
                <Route path="/login" element={<Login />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/joblist" element={<Joblist />} />
                <Route path="/postedlist" element={<Postedlist />} />
                <Route path="/postjob" element={<Postjob />} />
                <Route path="/postjob/:id?" element={<Postjob />} />
                <Route path="/interestedcandidates/:id" element={<InterestedCandidates />} />
                <Route path="/jobdetails/:id" element={<JobDetails />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
