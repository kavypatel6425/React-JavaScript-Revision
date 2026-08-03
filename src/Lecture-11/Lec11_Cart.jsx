import { useNavigate } from "react-router-dom";

function Lec11_Cart() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Cart</h1>

      <button onClick={() => navigate("/products")}>
        Continue Shopping
      </button>

      <button onClick={() => navigate("/checkout")}>
        Checkout
      </button>
    </div>
  );
}

export default Lec11_Cart;