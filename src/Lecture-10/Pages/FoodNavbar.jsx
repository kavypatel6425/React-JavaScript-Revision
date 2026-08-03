import { NavLink } from "react-router-dom";

function FoodNavbar() {
  return (
    <>
      <h2>Food Delivery Website</h2>

      <nav>
        <NavLink
          to="/food-home"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink> ||

        <NavLink
          to="/food-restaurants"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Restaurants
        </NavLink> ||

        <NavLink
          to="/food-orders"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Orders
        </NavLink> ||

        <NavLink
          to="/food-offers"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Offers
        </NavLink> ||

        <NavLink
          to="/food-contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>
      </nav>

      <hr />
    </>
  );
}

export default FoodNavbar;