import "./App.css";
import "./Components/Styles/style.css";
import SideMenu from "./Components/NavBar/sideMenu";
import RightBody from "./Components/RightBody";

function App() {
  return (
    <div className="App">
      <SideMenu />
      <RightBody />
    </div>
  );
}

export default App;
