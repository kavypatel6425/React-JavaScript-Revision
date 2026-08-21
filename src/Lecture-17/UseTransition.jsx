import React, { useState, useTransition } from 'react'

function UseTransition() {
  const [data, setData] = useState("")
  const [result, setResult] = useState([])

  const [isPending, stratTransition] = useTransition()

  function loder(e) {
    setData(e.target.value); 

    stratTransition(()=>{
      let i = []
      for (let i = 0; i < 500; i++) {
          console.log(i);
          
      }
    })
  }
  return (
    <div>
      <input type="text" value={data} onChange={loder} />
      <button onClick={loder}>Submit</button>
      <p>{isPending ? data : null}</p>

      <ul>
        {result.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default UseTransition