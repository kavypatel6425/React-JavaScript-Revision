import React from 'react'

function Object({data}) {
  return (
    <div>
        <h2>Task - 14</h2>
        <h4>{data.name}</h4>
        <p>{data.age}</p>
    </div>
  )
}

export default Object