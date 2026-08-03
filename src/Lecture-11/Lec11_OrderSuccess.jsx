import { useNavigate } from "react-router-dom";

function Lec11_OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Order Placed Successfully!</h1>

      <button onClick={() => navigate("/")}>
        Go to Home
      </button>
    </div>
  );
}

export default Lec11_OrderSuccess;