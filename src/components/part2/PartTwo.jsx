import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../App";

let personName = "";
export default function PartTwo() {
  const { name, setName } = useContext(AppContext);

  const handleNameChange = (e) => {
    personName = e.target.value;
  };

  const submitName = (e) => {
    e.preventDefault();
    setName(personName);
  };

  return (
    <div className="filler">
      <h1>Part II</h1>
      <hr />
      <div className="Component">
        <h2>Forms</h2>
      </div>
      {name ? <h2>Hello {name}</h2> : null}
      <form onSubmit={submitName}>
        <div>
          <label>Enter your name</label>
          <input type="text" name="name" onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">Submit Name</button>
        </div>
      </form>
    </div>
  );
}
