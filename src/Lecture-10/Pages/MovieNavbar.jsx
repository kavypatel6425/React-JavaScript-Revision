import { NavLink } from "react-router-dom";
import "../CSS/Task15.css"

function MovieNavbar() {
  return (
    <>
      <h2>Movie Booking Application</h2>

      <nav>
        <NavLink
          to="/movie-home"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>||

        <NavLink
          to="/movie-movies"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Movies
        </NavLink>||

        <NavLink
          to="/movie-booking"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Booking
        </NavLink>||

        <NavLink
          to="/movie-offers"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Offers
        </NavLink>||

        <NavLink
          to="/movie-contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>
      </nav>

      <hr />
    </>
  );
}

export default MovieNavbar;