import { NavLink } from "react-router-dom";

function ShoppingNavbar() {
  return (
    <>
      <h2>Online Shopping Website</h2>

      <nav>
        <NavLink to="/shop-home">Home</NavLink> |{" "}
        <NavLink to="/shop-products">Products</NavLink> |{" "}
        <NavLink to="/shop-categories">Categories</NavLink> |{" "}
        <NavLink to="/shop-cart">Cart</NavLink> |{" "}
        <NavLink to="/shop-wishlist">Wishlist</NavLink>
      </nav>

      <hr />
    </>
  );
}

export default ShoppingNavbar;