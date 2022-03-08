import "./App.css";
import "./Components/Styles/style.css";
import SideMenu from "./Components/NavBar/sideMenu";
import RightBody from "./Components/RightBody";
import { useState } from "react";
import ExpandedMenu from "./Components/RightBody/expandedMenu";

function App() {
  const [showExpandedMenu, setExpendedMenu] = useState(false);
  const [expandData, setExpandData] = useState([]);
  return (
    <div className="App">
      <SideMenu setterFunction={setExpendedMenu} />
      {showExpandedMenu ? (
        <ExpandedMenu data={expandData} dataSetter={setExpandData} />
      ) : null}
      <RightBody doShrink={showExpandedMenu} />
    </div>
  );
}

export default App;
