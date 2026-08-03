import React from 'react'
import { useNavigate } from 'react-router-dom';

function Lec11_Deshbord() {
  const navigate = useNavigate();
  function logout() {
    navigate("/login", { replace: true });
  }
  return (
    <div>
      Lec11_Deshbord

      <h1>Dashboard</h1>

      <h2>Welcome User!</h2>

      <button onClick={logout}>
        Logout
      </button>
    </div>
  )
}

export default Lec11_Deshbord