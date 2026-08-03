import React from 'react'

function MobileCompo(props) {
  return (
    <div>
        <h2>Task-9</h2>
        <h4>{props.Name}</h4>
        <p>{props.Brand}</p>
        <p>{props.Price}</p>
    </div>
  )
}

export default MobileCompo