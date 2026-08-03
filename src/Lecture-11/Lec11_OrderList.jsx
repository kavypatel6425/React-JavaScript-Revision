import { useNavigate } from "react-router-dom";

function Lec11_OrderList() {
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

  return (
    <div>
      <h1>Order List</h1>

      {orders.map((order) => (
        <div key={order.id}>
          <h3>Order #{order.id}</h3>

          <button onClick={() => navigate(`/order/${order.id}`)}>
            View Details
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Lec11_OrderList;