import { NavLink } from "react-router-dom";

function LibraryNavbar() {
  return (
    <>
      <h2>Library Management System</h2>

      <nav>
        <NavLink
          to="/library-home"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink> || 

        <NavLink
          to="/library-books"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Books
        </NavLink> || 

        <NavLink
          to="/library-members"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Members
        </NavLink> || 

        <NavLink
          to="/library-issue-book"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Issue Book
        </NavLink> || 

        <NavLink
          to="/library-contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>
      </nav>

      <hr />
    </>
  );
}

export default LibraryNavbar;