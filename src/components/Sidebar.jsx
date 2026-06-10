import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { getUser } from "../utils/session";

const Sidebar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const user = getUser(); // Retrieve user for mobile top bar

  const handleLinkClick = () => {
    setIsMobileOpen(false);
  };

  return (
    <>
      <div className="d-md-none d-flex justify-content-between align-items-center px-3 py-2 bg-white shadow-sm mb-3">
        {/* Logo Container explicitly allowed to shrink */}
        <a href="/" className="text-decoration-none flex-shrink-1" style={{ minWidth: 0 }}>
          <img src="/images/logo.png" alt="logo" className="img-fluid" style={{ maxHeight: "36px", maxWidth: "135px", objectFit: "contain" }} />
        </a>

        {/* Right side icons container locked from shrinking */}
        <div className="d-flex align-items-center justify-content-end gap-2 flex-shrink-0 ms-2">
            {/* Notification Icon */}
            <img src="/images/noti.png" alt="Notifications" style={{ width: "22px", cursor: "pointer" }} />
            
            {/* Profile Picture */}
            <img
              src="/images/user-profile-pic.png"
              className="rounded-circle border border-primary"
              style={{ width: "28px", height: "28px", objectFit: "cover" }}
              alt="user"
            />

            {/* Hamburger Toggle */}
            <button
              className="btn border-0 p-1 ms-1 rounded d-flex flex-column justify-content-center align-items-center gap-1"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              style={{ width: "38px", height: "38px", backgroundColor: "#f8f9fa", transition: "all 0.3s ease" }}
            >
              {isMobileOpen ? (
                <i className="bi bi-x-lg text-primary fs-5"></i>
              ) : (
                <>
                  <span style={{ width: "18px", height: "2px", backgroundColor: "#1e3c72", borderRadius: "10px" }}></span>
                  <span style={{ width: "18px", height: "2px", backgroundColor: "#1e3c72", borderRadius: "10px" }}></span>
                </>
              )}
            </button>
        </div>
      </div>

      <aside
        id="sidebarm"
        className={`${isMobileOpen ? "d-flex position-absolute w-100 start-0 shadow-lg pb-4 z-3 rounded-bottom-4" : "d-none"} d-md-flex flex-column flex-shrink-0 bg-white border-end`}
        style={{
          minHeight: isMobileOpen ? "auto" : "100vh",
          position: isMobileOpen ? "absolute" : "sticky",
          top: isMobileOpen ? "72px" : 0,
          zIndex: 1050
        }}
      >

        <div className="d-none d-md-flex flex-column align-items-start justify-content-center px-4 mb-4 mt-4">
          <a href="/" className="text-decoration-none d-flex align-items-center gap-2">
            <img src="/images/logo.png" alt="logo" className="logo-w" style={{ maxWidth: "140px", objectFit: "contain" }} />
          </a>
          <span className="mt-3 fw-bold" style={{ color: "#1e3c72", letterSpacing: "1px", fontSize: "0.85rem", textTransform: "uppercase" }}>
            Alumni Portal
          </span>
        </div>

        <ul className="nav flex-column mb-auto mt-2">

          <li className="nav-item mb-1">
            <NavLink
              to="/dashboard"
              onClick={handleLinkClick}
              className="nav-link d-flex align-items-center"
              style={({ isActive }) => ({
                color: isActive ? "#1e3c72" : "#64748b",
                borderLeft: isActive ? "4px solid #1e3c72" : "4px solid transparent",
                padding: "12px 20px 12px 30px",
                transition: "all 0.2s ease",
                fontWeight: isActive ? "700" : "600",
                backgroundColor: "transparent"
              })}
            >
              <i className="bi bi-grid-fill me-3 fs-5" style={{ color: "inherit", opacity: 0.85 }}></i>
              <span className="fs-6 text-truncate">Dashboard</span>
            </NavLink>
          </li>

          <li className="nav-item mb-1">
            <NavLink
              to="/jobs"
              onClick={handleLinkClick}
              className="nav-link d-flex align-items-center"
              style={({ isActive }) => ({
                color: isActive ? "#1e3c72" : "#64748b",
                borderLeft: isActive ? "4px solid #1e3c72" : "4px solid transparent",
                padding: "12px 20px 12px 30px",
                transition: "all 0.2s ease",
                fontWeight: isActive ? "700" : "600",
                backgroundColor: "transparent"
              })}
            >
              <i className="bi bi-briefcase-fill me-3 fs-5" style={{ color: "inherit", opacity: 0.85 }}></i>
              <span className="fs-6 text-truncate">Job</span>
            </NavLink>
          </li>

          <li className="nav-item mb-1">
            <NavLink
              to="/notices"
              onClick={handleLinkClick}
              className="nav-link d-flex align-items-center"
              style={({ isActive }) => ({
                color: isActive ? "#1e3c72" : "#64748b",
                borderLeft: isActive ? "4px solid #1e3c72" : "4px solid transparent",
                padding: "12px 20px 12px 30px",
                transition: "all 0.2s ease",
                fontWeight: isActive ? "700" : "600",
                backgroundColor: "transparent"
              })}
            >
              <i className="bi bi-bell-fill me-3 fs-5" style={{ color: "inherit", opacity: 0.85 }}></i>
              <span className="fs-6 text-truncate">Notices</span>
            </NavLink>
          </li>

          <li className="nav-item mb-1">
            <NavLink
              to="/achievements"
              onClick={handleLinkClick}
              className="nav-link d-flex align-items-center"
              style={({ isActive }) => ({
                color: isActive ? "#1e3c72" : "#64748b",
                borderLeft: isActive ? "4px solid #1e3c72" : "4px solid transparent",
                padding: "12px 20px 12px 30px",
                transition: "all 0.2s ease",
                fontWeight: isActive ? "700" : "600",
                backgroundColor: "transparent"
              })}
            >
              <i className="bi bi-trophy-fill me-3 fs-5" style={{ color: "inherit", opacity: 0.85 }}></i>
              <span className="fs-6 text-truncate">Achievements</span>
            </NavLink>
          </li>
        </ul>

        <div className="mt-auto pb-4 pt-2">
          <NavLink
            to="/login"
            onClick={handleLinkClick}
            className="nav-link d-flex align-items-center"
            style={({ isActive }) => ({
              color: isActive ? "#dc3545" : "#64748b",
              borderLeft: isActive ? "4px solid #dc3545" : "4px solid transparent",
              padding: "12px 20px 12px 30px",
              transition: "all 0.2s ease",
              fontWeight: isActive ? "700" : "600",
              backgroundColor: isActive ? "rgba(220, 53, 69, 0.05)" : "transparent"
            })}
          >
            <i className="bi bi-box-arrow-in-right me-3 fs-5" style={{ color: "inherit", opacity: 0.85 }}></i>
            <span className="fs-6">Login</span>
          </NavLink>
        </div>

      </aside>
    </>
  );
};

export default Sidebar;
