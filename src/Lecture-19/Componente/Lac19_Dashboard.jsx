import { useCallback, useMemo, useState } from "react";
import "../Css/Dashboard.css"
import Lac19_Search from "./Lac19_Search";
import Lac19_CategoryFilter from "./Lac19_CategoryFilter";
import Lac19_Statistics from "./Lac19_Statistics";
import Lac19_ProductList from "./Lac19_ProductList";
import Lac19_DashboardSummary from "./Lac19_DashboardSummary";

const products = [
  {
    id: 1,
    name: "iPhone 15",
    category: "Mobile",
    price: 79999,
    image: "https://via.placeholder.com/400x300?text=iPhone+15",
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    category: "Mobile",
    price: 74999,
    image: "https://via.placeholder.com/400x300?text=Samsung+S24",
  },
  {
    id: 3,
    name: "MacBook Air",
    category: "Laptop",
    price: 99999,
    image: "https://via.placeholder.com/400x300?text=MacBook+Air",
  },
  {
    id: 4,
    name: "Dell XPS 13",
    category: "Laptop",
    price: 85000,
    image: "https://via.placeholder.com/400x300?text=Dell+XPS+13",
  },
  {
    id: 5,
    name: "Sony Headphones",
    category: "Accessories",
    price: 15000,
    image: "https://via.placeholder.com/400x300?text=Sony+Headphones",
  },
  {
    id: 6,
    name: "Apple Watch",
    category: "Wearable",
    price: 45000,
    image: "https://via.placeholder.com/400x300?text=Apple+Watch",
  },
];

function Lac19_Dashboard() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);


  // ======================
  // MEMOIZED VALUES
  // ======================

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);


  // ======================
  // MEMOIZED CALLBACKS
  // ======================

  const handleFavorite = useCallback((productId) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(productId)) {
        return prevFavorites.filter(
          (id) => id !== productId
        );
      }

      return [...prevFavorites, productId];
    });
  }, []);


  const handleAddToCart = useCallback((product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...prevCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  }, []);
  return (
      <div className="dashboard">
        <div className="dashboard-header">
          <div>
            <h1>Smart Product Analytics Dashboard</h1>
            <p>Track your products and performance.</p>
          </div>

          <div className="cart-count">
            🛒 Cart: {cart.length}
          </div>
        </div>

        {/* Task 17: Dashboard Summary */}
        <Lac19_DashboardSummary
          products={products}
          favorites={favorites}
          cart={cart}
        />

        {/* Existing Product Statistics */}
        <Lac19_Statistics
          products={filteredProducts}
        />

        {/* Search + Category Filter */}
        <div className="filters">
          <Lac19_Search
            search={search}
            setSearch={setSearch}
          />

          <Lac19_CategoryFilter
            category={category}
            setCategory={setCategory}
          />
        </div>

        <div className="product-header">
          <h2>Products</h2>

          <p>
            {filteredProducts.length} Products Found
          </p>
        </div>

        <Lac19_ProductList
          products={filteredProducts}
          favorites={favorites}
          onFavorite={handleFavorite}
          onAddToCart={handleAddToCart}
        />
      </div>
    );
  }

export default Lac19_Dashboard;