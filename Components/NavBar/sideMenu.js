import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import CFR from "../initialComponents/cfr";
import HOME from "../initialComponents/home";
import OKR from "../initialComponents/okr";
import TASK from "../initialComponents/task";

function SideMenu(props) {
  const { setterFunction, dataSetter, data } = props;
  const [menuExpand, setMenuExpand] = useState(false);
  const [expandedData, setExpandedData] = useState([]);
  useEffect(() => {
    setExpandedData(data);
  }, [data]);
  console.log(expandedData);
  setterFunction(menuExpand);
  return (
    <div className={`side-menu ${menuExpand ? "opened" : null}`}>
      <span className="expander" onClick={() => setMenuExpand(!menuExpand)}>
        <i className={`fa fa-chevron-${menuExpand ? "left" : "right"}`} />
      </span>

      <div className="container">
        <div className={`data-left${menuExpand ? "-opened" : ""}`}>
          <span className="side-menu-item">
            <NavLink to="/home" className="link">
              <i className="fa fa-home" />
            </NavLink>
          </span>
          <span className="side-menu-item">
            <NavLink to="/okrs" className="link">
              <i className="fa fa-crosshairs" />
            </NavLink>
          </span>
          <span className="side-menu-item">
            <NavLink to="/tasks" className="link">
              <i className="fa fa-tasks" />
            </NavLink>
          </span>
          <span className="side-menu-item">
            <NavLink to="/cfrs" className="link">
              <i className="fa fa-calendar" />
            </NavLink>
          </span>
        </div>
        {menuExpand ? (
          <div className="data-left">
            <Route exact path="/home">
              <HOME dataSetter={dataSetter} />
            </Route>
            <Route exact path="/okrs">
              <OKR dataSetter={dataSetter} />
            </Route>
            <Route exact path="/tasks">
              <TASK dataSetter={dataSetter} />
            </Route>
            <Route exact path="/cfrs">
              <CFR dataSetter={dataSetter} />
            </Route>
            {expandedData.map((item) => (
              <span className="side-menu-item">{item}</span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default SideMenu;
