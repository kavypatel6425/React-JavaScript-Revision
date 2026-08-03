import React from 'react'

function BookCompo(props) {
  return (
    <div>
        <h2>Task-8</h2>
        <h4>{props.Title}</h4>
        <p>{props.Author}</p>
        <p>{props.Price}</p>
    </div>
  )
}

export default BookCompo