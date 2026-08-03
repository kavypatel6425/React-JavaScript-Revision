import React from 'react'

function Boolen({ username, isOnline }) {
    return (
        <div>
            <h2>Task - 15</h2>
            <h4>{username}</h4>
            <p>Status: {isOnline ? "Online" : " Offline"}</p>
        </div>
    )
}

export default Boolen