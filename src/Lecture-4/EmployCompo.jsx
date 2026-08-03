import React from 'react'

function EmployCompo(props) {
    return (
        <div>
            <h2>Task - 3</h2>
            <h3>{props.Employename}</h3>
            <p>{props.Department}</p>
            <p>{props.Salary}</p>
        </div>
    )
}

export default EmployCompo