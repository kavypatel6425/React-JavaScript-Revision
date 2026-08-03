import React from 'react'

function DynamicVariable() {
  //Task - 11
  const name = "Kavy Patel";
  const age = 19;
  const city = "Idar"

  //Task - 12
  const num = 10;
  const num1 = 20;
  
  return (
    <div>
      {/* //Task - 11 */}
      <p>Name : {name}</p>
      <p>Age : {age}</p>
      <p>City : {city}</p>

      {/* //Task - 12 */}

      <p>{num + num1}</p>
      <p>{num - num1}</p>
      <p>{num * num1}</p>
    </div>
  )
}

export default DynamicVariable