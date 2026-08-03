import { useNavigate } from "react-router-dom";

function Lec11_Checkout() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Checkout</h1>

      <button onClick={() => navigate("/success")}>
        Place Order
      </button>
    </div>
  );
}

export default Lec11_Checkout;