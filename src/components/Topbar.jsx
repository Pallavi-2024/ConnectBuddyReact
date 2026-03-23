import React from "react";

const Topbar = () => {
  return (
    <div className="topbar d-flex justify-content-end align-items-center p-2">

      {/* Notification */}
      <img src="/images/noti.png" alt="Notifications" width="25" />

      {/* Profile */}
      <div className="ms-3 d-flex align-items-center">
        <img
          src="/images/user-profile-pic.png"
          className="rounded-circle border me-2"
          width="32"
          height="32"
          alt="user"
        />
        <span className="fw-semibold small">User Name</span>
      </div>

    </div>
  );
};

export default Topbar;