function WebsiteProductCard({ name, price, image }) {
  return (
    <div>
      <img
        src="https://png.pngtree.com/png-vector/20250703/ourmid/pngtree-black-headphones-sleek-3d-render-png-image_16600605.webp"
        alt="Product"
      />

      <h3>Wireless Headphones</h3>

      <p>High-quality wireless headphones with crystal clear sound.</p>

      <h4>₹2,499</h4>

      <button>Add to Cart</button>

      <hr />
    </div>
  );
}

export default WebsiteProductCard;