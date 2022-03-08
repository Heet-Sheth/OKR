import React, { useEffect } from "react";

function HOME(props) {
  const { dataSetter } = props;
  useEffect(() => {
    dataSetter([
      "Alignments",
      "Action Center",
      "Alignments and Dependencies",
      "Notes",
      "Company Dashboard",
      "Department Hierarchy",
      "Kpi Boards",
      "News Feed",
      "Organization Hierarchy",
    ]);
  }, []);
  return <div>HOME</div>;
}

export default HOME;
