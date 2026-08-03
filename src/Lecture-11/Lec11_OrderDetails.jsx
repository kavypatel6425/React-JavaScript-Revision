import { useNavigate, useParams } from "react-router-dom";

function Lec11_OrderDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const orders = [
    {
      id: 1,
      status: "Shipped",
      deliveryDate: "28 July 2026",
    },
    {
      id: 2,
      status: "Out for Delivery",
      deliveryDate: "26 July 2026",
    },
    {
      id: 3,
      status: "Delivered",
      deliveryDate: "24 July 2026",
    },
  ];

  const order = orders[id - 1];

  return (
    <div>
      <h1>Order Details</h1>

      <p><b>Order ID:</b> {id}</p>
      <p><b>Order Status:</b> {order.status}</p>
      <p><b>Delivery Date:</b> {order.deliveryDate}</p>

      <button onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
}

export default Lec11_OrderDetails;