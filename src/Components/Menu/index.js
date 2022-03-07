import React from "react";
import SideMenu from "./sideMenu";
import TopMenu from "./topMenu";

function Menu() {
  return (
    <div>
      <div className="top-menu-container">
        <TopMenu />
      </div>
      <SideMenu />
    </div>
  );
}

export default Menu;
