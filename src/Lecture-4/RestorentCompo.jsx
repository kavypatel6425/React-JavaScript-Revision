import React from 'react'

function RestorentCompo(props) {
  return (
    <div>
        <h2>Task-10</h2>
        <h4>{props.FoodName}</h4>
        <p>{props.Price}</p>
        <p>{props.Cetegory}</p>
    </div>
  )
}

export default RestorentCompo