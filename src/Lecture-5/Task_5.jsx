import React, { useState } from 'react'

function Task_5() {
  const [count, setCount] = useState(0)
  const [like, setLike] = useState(0)
  const [light, setLight] = useState(true)

  function Light() {
    if (light === true) {
      setLight(false)
    } else {
      setLight(true)
    }
  }
  return (
    <div>
      <h3>Task-1</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <h3>Task-2 </h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrese</button>

      <h3>Task - 3</h3>
      <h4>Likes :{like}</h4>
      <button onClick={() => {setLike(like + 1) }}>Like</button>
      
      <h3>Task - 4 ccvbv</h3>
      <h4>Status : {light ? "On" : "Off"}</h4>
      <button onClick={Light}>{light ? "Off" : "On"}</button>

      <h3>Task - 5</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis officiis perspiciat</p>
      <button></button>
    </div>
  )
}

export default Task_5