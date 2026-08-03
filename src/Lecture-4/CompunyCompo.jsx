import React from 'react'

function CompunyCompo(props) {
    return (
        <div>
            <h2>Task - 4</h2>
            <h3>{props.CompunyName}</h3>
            <p>{props.Location}</p>
            <p>{props.Total_Employe}</p>
        </div>
    )
}

export default CompunyCompo