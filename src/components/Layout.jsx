import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Routes, Route } from "react-router-dom";
import NoticeList from "../Pages/Notice/Noticelist";
import AchievementList from "../Pages/Achievement/Achievementlist"
import Login from "../Login";
import Jobs from "../Pages/Job/jobs";
import Joblist from "../Pages/Job/Joblist";

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
                <Route path="/" element={<h2>Dashboard</h2>} />
                <Route path="/notices" element={<NoticeList />} />
                <Route path="/achievements" element={<AchievementList />} />
                <Route path="/login" element={<Login />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/joblist" element={<Joblist />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
