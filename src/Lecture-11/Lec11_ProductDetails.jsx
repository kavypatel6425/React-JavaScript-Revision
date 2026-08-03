import React from 'react'
import { useParams } from 'react-router-dom';

function Lec11_ProductDetails() {
     const { id } = useParams();
    return (
        <div>
            <h2>Product Details</h2>

            <h4>Selected Product ID: {id}</h4>
        </div>
    )
}

export default Lec11_ProductDetails