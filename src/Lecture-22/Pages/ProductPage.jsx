import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

function ProductPage() {
    // useEffect(() => {
    //     document.title = "Product Page"
    // }, [])

    const products = [
        {
            id: 1,
            name: "Iphone 17",
            price: 150000,
            brand: "Iphone",
        },
        {
            id: 2,
            name: "Laptop Loq",
            price: 78000,
            brand: "Lenovo",
        },
        {
            id: 3,
            name: "Earbuds",
            price: 1500,
            brand: "Boat",
        },
        {
            id: 4,
            name: "Air conditioner",
            price: 30000,
            brand: "Blue Star",
        },
    ]
    return (
        <>
            <Helmet>
                <title>Product Page</title>
            </Helmet>
            <div>
                <h1>Product List</h1>
                {products.map((product) => {
                    return (
                        <div key={product.id}>
                            <h3>{product.name}</h3>
                            <p>Price: ₹{product.price}</p>
                            <p>Brand: {product.brand}</p>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default ProductPage