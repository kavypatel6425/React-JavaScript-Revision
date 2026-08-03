import { NavLink } from "react-router-dom";
import "./CSS/style.css"

function EcommerceNavbar() {
  return (
    <nav className="navbar">
      <h2>ShopEasy</h2>

      <div className="nav-links">
        <NavLink to="/shop-home">Home</NavLink>
        <NavLink to="/shop-products">Products</NavLink>
        <NavLink to="/shop-product-details">Product Details</NavLink>
        <NavLink to="/shop-categories">Categories</NavLink>
        <NavLink to="/shop-cart">Cart</NavLink>
        <NavLink to="/shop-wishlist">Wishlist</NavLink>
        <NavLink to="/shop-orders">Orders</NavLink>
        <NavLink to="/shop-profile">Profile</NavLink>
        <NavLink to="/shop-about">About</NavLink>
        <NavLink to="/shop-contact">Contact</NavLink>
      </div>
    </nav>
  );
}

export default EcommerceNavbar;