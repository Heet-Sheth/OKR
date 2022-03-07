import React, { useState } from "react";
import ActualBody from "./actBody";
import SideMenu from "./sideMenu";

function LowerBody() {
  const [expandMenu, setExpandMenu] = useState(false);
  return (
    <div className={`lower-body ${expandMenu ? "expand" : null}`}>
      <SideMenu
        buttonTxt={expandMenu}
        callParentFunction={() => setExpandMenu(!expandMenu)}
      />
      <ActualBody />
    </div>
  );
}

export default LowerBody;
