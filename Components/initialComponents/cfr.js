import React, { useEffect } from "react";

function CFR(props) {
  const { dataSetter } = props;
  useEffect(() => {
    dataSetter([
      "Leader Board",
      "My Awards",
      "Received",
      "Given",
      "My Organization",
      "Awards Received",
      "Awards Given",
    ]);
  }, []);
  return <div>CFR</div>;
}

export default CFR;