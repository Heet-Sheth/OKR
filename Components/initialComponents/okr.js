import React, { useEffect } from "react";

function OKR(props) {
  const { dataSetter } = props;
  useEffect(() => {
    dataSetter([
      "All My OKRs",
      "My Individual OKRs",
      "Developer OKRs",
      "My Org's OKRs",
      "Company OKRs",
      "Shared OKRs",
      "OKRs By KPIs",
      "All Employees' OKRs",
      "All Departments' OKRs",
      "Managers' OKRs",
      "OKRs Program Status",
    ]);
  }, []);
  return <div>OKR</div>;
}

export default OKR;
