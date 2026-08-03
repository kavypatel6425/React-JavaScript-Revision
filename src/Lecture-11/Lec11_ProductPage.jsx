import React from 'react'
import { useNavigate } from 'react-router-dom';

function Lec11_ProductPage() {
  const navigate = useNavigate();
  
  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mobile" },
    { id: 3, name: "Headphone" },
    { id: 4, name: "Watch" },
  ];
  return (
    <div>
      <h1>Product List</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>

          <button onClick={() => navigate(`/product/${product.id}`)}>
            View Details
          </button>

          <hr />
        </div>
      ))}
    </div>
  )
}

export default Lec11_ProductPage