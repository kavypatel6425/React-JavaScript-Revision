import { NavLink } from "react-router-dom";

function PortfolioNavbar() {
  return (
    <>
      <h2>Portfolio Website</h2>

      <nav>
        <NavLink
          to="/portfolio-home"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink> ||

        <NavLink
          to="/portfolio-about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About Me
        </NavLink> ||

        <NavLink
          to="/portfolio-projects"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Projects
        </NavLink> ||

        <NavLink
          to="/portfolio-skills"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Skills
        </NavLink> ||

        <NavLink
          to="/portfolio-contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>
      </nav>

      <hr />
    </>
  );
}

export default PortfolioNavbar;