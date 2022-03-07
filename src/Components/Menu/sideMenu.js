import React, { useState } from "react";

function SideMenu(props) {
  const [toggleSideMenu, settoggleSideMenu] = useState(false);
  return (
    <div className="SideMenu">
      <div className={`container ${toggleSideMenu ? "container-open" : null}`}>
        <span
          className={`show-hide-btn ${toggleSideMenu ? "menu-open" : null}`}
          onClick={() => settoggleSideMenu(!toggleSideMenu)}
        >
          {!toggleSideMenu ? "▸" : "◂"}
        </span>
        <div className="item">A{toggleSideMenu ? " full" : null}</div>
        <div className="item">B{toggleSideMenu ? " full" : null}</div>
        <div className="item">C{toggleSideMenu ? " full" : null}</div>
        <div className="item">D{toggleSideMenu ? " full" : null}</div>
        <div className="item">E{toggleSideMenu ? " full" : null}</div>
        <div className="item">F{toggleSideMenu ? " full" : null}</div>
      </div>
    </div>
  );
}

export default SideMenu;
