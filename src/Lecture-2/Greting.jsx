import React from 'react'

function Greting() {
    //Task - 13
    const UserName = "Kavy Patel"
    
    //Task - 14

    const fun = function name(params) {
        return "Hello"
    }
    
  return (

    <div>
        {/* task - 13 */}
        <h3>Welcome {UserName}</h3>

        {/* task - 14 */}
        <p>{fun()}</p>
    </div>
  )
}

export default Greting