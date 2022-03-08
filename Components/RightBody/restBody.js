import React from "react";

function RestBody(props) {
  const { doShrink } = props;
  return (
    <div className={`rest-body ${doShrink ? "shrinked" : null}`}>RestBody</div>
  );
}

export default RestBody;
