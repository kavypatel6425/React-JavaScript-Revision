import React from 'react'
import { useNavigate } from 'react-router-dom'

function Lec11_Login() {
  const navigate = useNavigate()
  // const message = ()=>{
  //   alert ("Login Succesefull")
  //   navigate("/deshbord")
  // }

  function login() {
    navigate("/deshbord", { replace: true });
  }
  return (
    <div>
      {/* <h2>Task - 3 : Login Page</h2>
      <input type="email" placeholder='Enter Email' /> <br />
      <input type="password" placeholder='Enter Password' /> <br />
      <button onClick={message}>Login</button> */}

      {/* task - 19 */}

      <button onClick={login}>
        Login
      </button>

    </div>
  )
}

export default Lec11_Login