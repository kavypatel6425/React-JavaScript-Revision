import React, { useState } from 'react'

function Counter() {
    const [coun,setCount] = useState(0)
    return (
        <>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button> <br />
            <button onClick={() => setCount(count - 1)}>Decrese</button>
        </>
    )
}

export default Counter