import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import "./Css/Style.css"

function Lec13_Home() {
    const navigate = useNavigate()

    const token = localStorage.getItem("token");

    console.log(token);

    function logout() {
        localStorage.removeItem("token");

        alert("Logout Successful");

        navigate("/login");
    }
    return (
        <div>
            <h1>Home Page</h1>
            <p>Welcome to Home Page</p>

            {/* <nav>
                <Link to="/">Home</Link> <br />
                <Link to="/about">About</Link> <br />
                <Link to="/contact">Contact</Link> <br />
                <Link to="/login">Login</Link> <br />
                <Link to="/deshbord">Deshbord</Link>
            </nav> */}
            {/* <nav>
                <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink> <br />
                <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink> <br />
                <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink> <br />
                <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>Login</NavLink> <br />
                <NavLink to="/deshbord" className={({ isActive }) => (isActive ? "active" : "")}>Deshbord</NavLink>
            </nav> */}

            {/* <button onClick={logout}>LogOut</button> */}

            <h1>Student Portal</h1>

            <h3>Welcome Student</h3>

            <Link to="/">Home</Link> ||
            <Link to="/login">Login</Link> ||
            <Link to="/dashboard">Dashboard</Link>
        </div>
    )
}

export default Lec13_Home