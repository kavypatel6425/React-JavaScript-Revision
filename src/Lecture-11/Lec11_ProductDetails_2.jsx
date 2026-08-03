import { useNavigate, useParams } from "react-router-dom";

function Lec11_ProductDetails_2() {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = [
    { id: 1, name: "Laptop", price: "₹50000" },
    { id: 2, name: "Mobile", price: "₹25000" },
    { id: 3, name: "Headphones", price: "₹3000" },
  ];

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div>
        <h1>Product Not Found</h1>
        <button onClick={() => navigate("/products")}>
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>

      <button onClick={() => navigate("/products")}>
        Continue Shopping
      </button>

      <button onClick={() => navigate("/cart")}>
        Add to Cart
      </button>
    </div>
  );
}

export default Lec11_ProductDetails_2;