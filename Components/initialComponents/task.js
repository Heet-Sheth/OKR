import React, { useEffect } from "react";

function TASK(props) {
  const { dataSetter } = props;
  useEffect(() => {
    dataSetter([
      "My Space",
      "My Tasks",
      "My Tasks for Others",
      "My Org's Tasks",
      "All Employees' Tasks",
    ]);
  }, []);
  return <div>TASK</div>;
}

export default TASK;
