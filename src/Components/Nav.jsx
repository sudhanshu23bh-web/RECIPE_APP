import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <h1 className="logo">🍳 Recipe App</h1>
      <div className="nav-links">
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/recipes" className="link">
          Recipes
        </NavLink>
        <NavLink to="/create" className="link">
          Create
        </NavLink>
        <NavLink to="/about" className="link">
          About
        </NavLink> 
        <NavLink to="/Fav" className="link">
           Faviorate
        </NavLink> 
      </div>
    </nav>
  );
};

export default Nav;



