import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="d-flex flex-column text-dark sidebar bg-light p-0">
      <div className="text-center py-3">
        <img src="/images/logo.png" alt="logo" className="logo-w" />
        <p className="text-muted small mt-3">Alumni Portal</p>
      </div>

      <ul className="nav flex-column">
        <li className="nav-item">
          <span className="nav-link">Dashboard</span>
        </li>

        <li className="nav-item">
          <span className="nav-link">Job</span>
        </li>

        <li className="nav-item">
          <NavLink to="/notices" className="nav-link">
            Notices
          </NavLink>
        </li>

        <li className="nav-item">
          <span className="nav-link">Achievements</span>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
