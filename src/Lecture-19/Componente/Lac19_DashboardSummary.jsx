import { useMemo } from "react";
import {
  Package,
  Heart,
  ShoppingCart,
  Layers,
} from "lucide-react";
import "../Css/DashboardSummary.css"

function Lac19_DashboardSummary({
  products,
  favorites,
  cart,
}) {
  const summary = useMemo(() => {
    console.log("Calculating dashboard summary...");

    const uniqueCategories = new Set(
      products.map((product) => product.category)
    );

    const totalCartItems = cart.reduce(
      (total, item) => total + item.quantity,
      0
    );

    return {
      totalProducts: products.length,
      favoriteProducts: favorites.length,
      cartItems: totalCartItems,
      categories: uniqueCategories.size,
    };
  }, [products, favorites, cart]);

  return (
    <div className="dashboard-summary">
      <div className="summary-card">
        <div className="summary-icon">
          <Package size={24} />
        </div>

        <div>
          <p>Total Products</p>
          <h2>{summary.totalProducts}</h2>
        </div>
      </div>

      <div className="summary-card">
        <div className="summary-icon">
          <Heart size={24} />
        </div>

        <div>
          <p>Favorite Products</p>
          <h2>{summary.favoriteProducts}</h2>
        </div>
      </div>

      <div className="summary-card">
        <div className="summary-icon">
          <ShoppingCart size={24} />
        </div>

        <div>
          <p>Cart Items</p>
          <h2>{summary.cartItems}</h2>
        </div>
      </div>

      <div className="summary-card">
        <div className="summary-icon">
          <Layers size={24} />
        </div>

        <div>
          <p>Categories</p>
          <h2>{summary.categories}</h2>
        </div>
      </div>
    </div>
  );
}

export default Lac19_DashboardSummary;