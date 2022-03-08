import React, { useState } from "react";
import ProfileDropDown from "./profileDropDown";

function TopNav() {
  const [expandProfile, setExpandProfile] = useState(false);
  return (
    <div className="top-nav">
      <span className="logo-text">BrilworksOKR</span>
      <div
        className="profile-container"
        onClick={() => setExpandProfile(!expandProfile)}
      >
        <span className="profile-name">Brilworks</span>
        <span className="profile-expand">{expandProfile ? "▴" : "▾"}</span>
      </div>
      {expandProfile ? <ProfileDropDown /> : null}
    </div>
  );
}

export default TopNav;
