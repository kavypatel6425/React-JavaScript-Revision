import React from "react";

function ProductCard_1({ Product }) {
  return (
    <div style={{
      border:"2px solid",
      padding: "15px",
      width: "220px",
      textAlign: "center",
    }}>
      <img
        src={Product.image}
        alt={name}
        style={{ width: "100%", height: "180px", objectFit: "cover", }}
      />

      <h3>{Product.name}</h3>
      <p>₹{Product.price}</p>

      <button style={{
        background: "#0d6efd",
        color: "white",
        border: "none",
        padding: "10px 15px",
      }}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard_1;