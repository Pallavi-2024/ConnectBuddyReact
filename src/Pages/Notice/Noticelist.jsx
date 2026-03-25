import React, { useEffect, useState } from "react";
import axios from "axios";

const NoticeList = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:7022/api/Notice/GetNotices?createdBy=1")
      .then((res) => {
        console.log("API Response:", res.data);
        setNotices(res.data.data);
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  }, []);
  return (
    <div className="main-content-outer">
      <div className="container">
        {/* Header */}
        <div className="row">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <div>
              <h4>Notice Master</h4>
              <p className="text-muted">
                Total: <span>{notices.length}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="row mt-3">
          <div className="col-12">
            <div className="dashboard-card">
              <div className="table-responsive">
                <table className="table table-sm mb-0 align-middle custom-table text-start">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Date</th>
                      <th>Description</th>
                      <th>Url</th>
                    </tr>
                  </thead>
                  <tbody>
                    {notices.length > 0 ? (
                      notices.map((notice) => (
                        <tr key={notice.id}>
                          <td>{notice.title}</td>
                          <td>
                            {new Date(
                              notice.createdDateTime
                            ).toLocaleDateString()}
                          </td>
                          <td>{notice.description}</td>
                          <td>{notice.url}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="text-center text-muted">
                          No Notices found. Click the + button to add one.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeList;
