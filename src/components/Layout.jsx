import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Routes, Route } from "react-router-dom";
import NoticeList from "../Pages/Notice/Noticelist";

const Layout = () => {
  return (
    <div className="alumni-wrapper">
      <div className="container-fluid">
        <div className="row flex-nowrap">
          {/* Sidebar */}
          <div className="col-md-3">
            <Sidebar />
          </div>
          {/* Main Content */}
          <div className="col-md-9">
            <Topbar />

            <div className="p-3">
              <Routes>
                <Route path="/" element={<h2>Dashboard</h2>} />
                <Route path="/notices" element={<NoticeList />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
