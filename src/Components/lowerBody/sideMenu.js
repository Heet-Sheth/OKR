import React from "react";

function SideMenu(props) {
  const { buttonTxt, callParentFunction } = props;
  console.log(buttonTxt);
  return (
    <div className="side-menu">
      {!buttonTxt ? (
        <span className="expand-button" onClick={() => callParentFunction()}>
          &gt;
        </span>
      ) : (
        <span className="expand-button" onClick={() => callParentFunction()}>
          &lt;
        </span>
      )}
      <div className="menu-item-container">
        <div className="menu-item">A {buttonTxt ? "full" : null}</div>
        <div className="menu-item">B {buttonTxt ? "full" : null}</div>
        <div className="menu-item">C {buttonTxt ? "full" : null}</div>
        <div className="menu-item">D {buttonTxt ? "full" : null}</div>
      </div>
    </div>
  );
}

export default SideMenu;
