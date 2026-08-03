import React from 'react'

function UserCompo(props) {
  return (
    <div>
        <h2>Task-6</h2>
        <h4>{props.UserName}</h4>
        <p>{props.Profection}</p>
        <p>{props.City}</p>
    </div>
  )
}

export default UserCompo