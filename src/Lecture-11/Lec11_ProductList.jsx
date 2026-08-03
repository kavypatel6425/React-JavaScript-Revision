import { useNavigate } from "react-router-dom";

function Lec11_ProductList() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      image: "https://media.istockphoto.com/id/1389603578/photo/laptop-blank-screen-on-wood-table-with-blurred-coffee-shop-cafe-interior-background-and.jpg?s=612x612&w=0&k=20&c=bPf3XxUZJZ6HRw7BE75ur1wBMCm_r4QAr-_lajERIyU=",
    },
    {
      id: 2,
      name: "Mobile",
      price: 120000,
      image: "https://i.guim.co.uk/img/media/18badfc0b64b09f917fd14bbe47d73fd92feeb27/189_335_5080_3048/master/5080.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1562112c7a64da36ae0a5e75075a0d12",
    },
    {
      id: 3,
      name: "Headphones",
      price: 3000,
      image: "https://media.istockphoto.com/id/1412240771/photo/headphones-on-white-background.jpg?s=612x612&w=0&k=20&c=DwpnlOcMzclX8zJDKOMSqcXdc1E7gyGYgfX5Xr753aQ=",
    },
  ];

  return (
    <div>
      <h1>Product List</h1>

      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>

          <button onClick={() => navigate(`/product/${product.id}`)}>
            View Product
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Lec11_ProductList;