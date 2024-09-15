import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="nav">
      <NavLink to="">Home</NavLink>
      <NavLink to="partone">Part One</NavLink>
      <NavLink to="parttwo">Part Two</NavLink>
    </nav>
  );
}
