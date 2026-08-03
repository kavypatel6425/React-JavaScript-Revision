import React from 'react'
import Child from './Child'

function Perent({username}) {
    return (
        <div>
            <h2>Task - 19</h2>
            Perent
            
            <Child username={username} />
        </div>
    )
}

export default Perent