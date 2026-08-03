import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Lac13_LoginPage() {
    const navigate = useNavigate()
    const [role, setRole] = useState("")
    //task - 10 
    // function login() {
    //     localStorage.setItem("token","123")
    //     alert("Login Successful")
    //     navigate("/")
    // }

    //task - 11 
    function login() {
        localStorage.setItem("token", "123")
        alert("Login Successful")
        // navigate("/deshbord")
        if (role === "admin") {
            navigate("/admin")
        } else {
            navigate("/user")
        }
    }

    //Task 12


    return (
        <div>
            <h1>Login Page</h1>
            <input type="text" value={role}  onChange={(e) => setRole(e.target.value)}/>

            <button onClick={login}>Login</button>
        </div>
    )
}

export default Lac13_LoginPage