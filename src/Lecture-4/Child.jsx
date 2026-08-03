import React from 'react'
import GrandChild from './GrandChild'

function Child({username}) {
    return (
        <div>
            Child
            <GrandChild username={username} />
        </div>
    )
}

export default Child