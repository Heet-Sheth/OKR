import "./App.css";
import "./Components/Styles/style.css";
import SideMenu from "./Components/NavBar/sideMenu";
import RightBody from "./Components/RightBody";
import { useState } from "react";

function App() {
  const [showExpandedMenu, setExpendedMenu] = useState(false);
  const [expandData, setExpandData] = useState([]);
  console.log(expandData);
  return (
    <div className="App">
      <SideMenu
        data={expandData}
        dataSetter={setExpandData}
        setterFunction={setExpendedMenu}
      />
      <RightBody doShrink={showExpandedMenu} />
    </div>
  );
}

export default App;
