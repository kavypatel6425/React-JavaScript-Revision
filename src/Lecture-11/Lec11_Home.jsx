import React from 'react'
import { useNavigate } from 'react-router-dom'

function Lec11_Home() {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Home Page</h1>

      <button onClick={() => navigate("/about")}>
        Go to About
      </button>

      <button onClick={() => navigate("/contact")}>
        Go to Contact
      </button>

      <br />
      <br />
      <hr />

      <h2>Task - 2 : Student Deshbord</h2>

      <button onClick={() => navigate("/profile")}>
        Go to Student Profile
      </button>

      <h2>Task - 20 : E-commrece website</h2>

      <button onClick={() => navigate("/products")}>
        Shop Now
      </button>



    </div>
  )
}

export default Lec11_Home