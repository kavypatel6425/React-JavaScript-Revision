import React from 'react'

function ProductCard({ Ptroducts1,Ptroducts2 }) {
    return (
        <div>
            <h2>Task - 16</h2>
            <h4>Product Name :{Ptroducts1.name}</h4>
            <p>Price :{Ptroducts1.Price}</p>
            <p>Category :{Ptroducts1.Category}</p>
            <p>Rating :{Ptroducts1.Rating}</p>
        </div>
    )
}

export default ProductCard