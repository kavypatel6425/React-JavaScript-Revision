import React from 'react'
import { useNavigate } from 'react-router-dom';

function Lac13_Deshbord() {
    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem("token");

        navigate("/login");
    }

    return (
        <div>
            <h2>This is a Deshbord</h2>

            <h1>Student Dashboard</h1>

            <h3>Welcome to Dashboard</h3>

            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Lac13_Deshbord