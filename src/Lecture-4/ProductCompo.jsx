import React from 'react'

function ProductCompo(props) {
    return (
        <div>
            <h2>Task - 2</h2>
            <h3>{props.Productname}</h3>
            <p>{props.Price}</p>
            <p>{props.Cetegory}</p>
        </div>
    )
}

export default ProductCompo