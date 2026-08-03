import { useNavigate } from "react-router-dom";

function Lec11_Products() {
  const navigate = useNavigate();

  const products = [
    { id: 1, name: "Laptop", price: "₹50000" },
    { id: 2, name: "Mobile", price: "₹25000" },
    { id: 3, name: "Headphones", price: "₹3000" },
  ];

  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>

          <button onClick={() => navigate(`/product_2/${product.id}`)}>
            View Details
          </button>
        </div>
      ))}
    </div>
  );
}

export default Lec11_Products;