import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function SideMenu(props) {
  const { setterFunction } = props;
  const [menuExpand, setMenuExpand] = useState(false);
  setterFunction(menuExpand);
  return (
    <div className="side-menu">
      <span className="expander" onClick={() => setMenuExpand(!menuExpand)}>
        <i className={`fa fa-chevron-${menuExpand ? "left" : "right"}`} />
      </span>
      <div className="container">
        <span className="side-menu-item">
          <NavLink to="/home" className="link" activeClassName="link-active">
            <i className="fa fa-home" />
          </NavLink>
        </span>
        <span className="side-menu-item">
          <NavLink to="/okrs" className="link" activeClassName="link-active">
            <i className="fa fa-crosshairs" />
          </NavLink>
        </span>
        <span className="side-menu-item">
          <NavLink to="/tasks" className="link" activeClassName="link-active">
            <i className="fa fa-tasks" />
          </NavLink>
        </span>
        <span className="side-menu-item">
          <NavLink to="/cfrs" className="link" activeClassName="link-active">
            <i className="fa fa-calendar" />
          </NavLink>
        </span>
      </div>
    </div>
  );
}

export default SideMenu;
