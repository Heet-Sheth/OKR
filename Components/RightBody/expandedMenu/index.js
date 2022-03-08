import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import CFR from "../../initialComponents/cfr";
import HOME from "../../initialComponents/home";
import OKR from "../../initialComponents/okr";
import TASK from "../../initialComponents/task";

function ExpandedMenu(props) {
  const { data, dataSetter } = props;
  const [expand, setData] = useState([]);
  useEffect(() => {
    setData(data);
  }, []);
  return (
    <div className="expanded-menu">
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
      <div className="line"></div>
      <div className="container">
        {expand.map((items) => (
          <span>{items}</span>
        ))}
      </div>
    </div>
  );
}

export default ExpandedMenu;
