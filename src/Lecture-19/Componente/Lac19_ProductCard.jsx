import React from "react";
import { Heart, ShoppingCart } from "lucide-react";

function Lac19_ProductCard({
  product,
  isFavorite,
  onFavorite,
  onAddToCart,
}) {
  console.log(`Rendering: ${product.name}`);

  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src={product.image}
          alt={product.name}
        />

        {/* Favorite Button */}
        <button
          className={`favorite-btn ${isFavorite ? "active" : ""
            }`}
          onClick={() => onFavorite(product.id)}
          aria-label="Toggle favorite"
        >
          <Heart
            size={20}
            fill={isFavorite ? "currentColor" : "none"}
          />
        </button>
      </div>

      <div className="product-info">
        <span className="product-category">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <p className="product-price">
          ₹{product.price.toLocaleString()}
        </p>

        {/* Task 15: Add to Cart */}
        <button
          className="add-cart-btn"
          onClick={() => onAddToCart(product)}
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default React.memo(Lac19_ProductCard);