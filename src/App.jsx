import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Component from "./Component";

const fruits = [
  { id: 1, name: "Banana", color: "yellow" },
  { id: 2, name: "Apple", color: "red" },
  { id: 3, name: "Orange", color: "orange" },
  { id: 4, name: "Grape", color: "purple" },
];

function App() {
  const [nightMode, setNightMode] = useState(false);

  const changeTheme = () => {
    nightMode ? setNightMode(false) : setNightMode(true);
  };
  return (
    <div className={`${nightMode ? "night-mode" : ""} container`}>
      <div className="filler">
        <h1>Part I</h1>
        <hr />
        <Component />
        <Component title={"Basic Component with props"} />
        <hr />
        <Component title={"Rendering Lists/Arrays"} />
        <div className="fruits">
          {fruits.map((fruit) => (
            <Component key={fruit.id} title={fruit.name} color={fruit.color} />
          ))}
        </div>
        <hr />
        <Component title={"useState"} />
        <button onClick={changeTheme}>
          {nightMode ? "Day Mode" : "Night Mode"}
        </button>
      </div>
    </div>
  );
}

export default App;
