import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, createContext } from "react";
import Layout from "./components/Layout";
import PartOne from "./components/part1/PartOne";
import Home from "./components/Home";
import PartTwo from "./components/part2/PartTwo";

export const AppContext = createContext();

function App() {
  const [nightMode, setNightMode] = useState(false);

  const [name, setName] = useState("");

  const changeTheme = () => {
    nightMode ? setNightMode(false) : setNightMode(true);
  };

  return (
    <AppContext.Provider value={{ changeTheme, nightMode, name, setName }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="partone" element={<PartOne />} />
            <Route path="parttwo" element={<PartTwo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
