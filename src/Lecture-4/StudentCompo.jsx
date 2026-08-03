import React from 'react'

function StudentCompo(props) {
  return (
    <div>
      <h2>Task - 1</h2>
      <h3>{props.name}</h3>
      <p>{props.age}</p>
      <p>{props.course}</p>
    </div>
  )
}

export default StudentCompo