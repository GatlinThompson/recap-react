import Component from "./Component";
import { useContext } from "react";
import { AppContext } from "../../App";

const fruits = [
  { id: 1, name: "Banana", color: "yellow" },
  { id: 2, name: "Apple", color: "red" },
  { id: 3, name: "Orange", color: "orange" },
  { id: 4, name: "Grape", color: "purple" },
];

export default function PartOne() {
  const { nightMode, changeTheme } = useContext(AppContext);
  return (
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
  );
}
