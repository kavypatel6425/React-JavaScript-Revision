import { useMemo } from "react";

function Lac19_Statistics({ products }) {
  const productStats = useMemo(() => {
    console.log("Calculating statistics...");

    // Handle empty products
    if (products.length === 0) {
      return {
        totalProducts: 0,
        categoryCount: 0,
        averagePrice: 0,
        highestPrice: 0,
        lowestPrice: 0,
      };
    }

    const prices = products.map((product) => product.price);

    const totalPrice = prices.reduce(
      (total, price) => total + price,
      0
    );

    const uniqueCategories = new Set(
      products.map((product) => product.category)
    );

    return {
      totalProducts: products.length,
      categoryCount: uniqueCategories.size,
      averagePrice: totalPrice / products.length,
      highestPrice: Math.max(...prices),
      lowestPrice: Math.min(...prices),
    };
  }, [products]);

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <h4>Total Products</h4>
        <h2>{productStats.totalProducts}</h2>
      </div>

      <div className="stat-card">
        <h4>Categories</h4>
        <h2>{productStats.categoryCount}</h2>
      </div>

      <div className="stat-card">
        <h4>Average Price</h4>
        <h2>
          ₹{Math.round(productStats.averagePrice).toLocaleString()}
        </h2>
      </div>

      <div className="stat-card">
        <h4>Highest Price</h4>
        <h2>
          ₹{productStats.highestPrice.toLocaleString()}
        </h2>
      </div>

      <div className="stat-card">
        <h4>Lowest Price</h4>
        <h2>
          ₹{productStats.lowestPrice.toLocaleString()}
        </h2>
      </div>
    </div>
  );
}

export default Lac19_Statistics;