import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AppContext } from "../App";
import Navbar from "./Navbar";

export default function Layout() {
  const { nightMode } = useContext(AppContext);
  return (
    <div className={`${nightMode ? "night-mode" : ""} container`}>
      <Navbar />
      <hr />
      <Outlet />
    </div>
  );
}
