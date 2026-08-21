import Lac19_ProductCard from "./Lac19_ProductCard";

function Lac19_ProductList({
  products,
  favorites,
  onFavorite,
  onAddToCart,
}) {
  if (products.length === 0) {
    return (
      <div className="empty-state">
        <h3>No products found 😕</h3>
        <p>Try searching for another product.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <Lac19_ProductCard
          key={product.id}
          product={product}
          isFavorite={favorites.includes(product.id)}
          onFavorite={onFavorite}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default Lac19_ProductList;