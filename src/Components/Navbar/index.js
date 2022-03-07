import React, { useState } from "react";
import logo from "../images/logo.png";
import userLogo from "../images/ironman22_uhd.jpg";

function NavBar() {
  const [profileExpand, setProfileExpand] = useState(false);
  return (
    <div className="Navbar">
      <div className="container">
        <div>
          <img className="image" src={logo} alt="OKR SYSTEM !!!" />
        </div>
        <div className="inner-container">
          <input
            className="search"
            type="search"
            placeholder="Search Objectives and Key Results"
          />
          <span className="inner-items">📂</span>
          <span className="inner-items">🏴</span>
          <span className="inner-items">🔔</span>
          <span className="inner-items">❓</span>
          <span className="inner-items">💬</span>
          <span className="inner-items">
            <div
              className="user-profile"
              onClick={() => setProfileExpand(!profileExpand)}
            >
              <img
                src={userLogo}
                alt="Profile"
                width="30px"
                height="30px"
                className="user-logo"
              />
              <span className="user-name">Heet</span>
              <span className="user-expand">{profileExpand ? "🔺" : "🔻"}</span>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
