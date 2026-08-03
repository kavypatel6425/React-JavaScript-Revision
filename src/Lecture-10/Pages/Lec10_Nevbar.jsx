import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Lec10_Home from './Lec10_Home'
import "../CSS/Navbar.css"

function Lec10_Nevbar() {
    return (
        <div>
            <h2>Navbar</h2>

            {/* <Link to={"/"}>
                Home
            </Link> <br />
            <Link to={"/about"}>
                About
            </Link> <br />
            <Link to={"/contect"}>
                Contect
            </Link> */}

            <NavLink to={"/"} className={({ isActive }) => isActive ? "nav-item selected" : "nav-item"}>
                Home
            </NavLink> <br />

            <NavLink to={"/about"} className={({ isActive }) => isActive ? "nav-item selected" : "nav-item"}>
                About
            </NavLink> <br />
            <NavLink to={"/contect"} className={({ isActive }) => isActive ? "nav-item selected" : "nav-item"}>
                Contect
            </NavLink>
        </div>
    )
}

export default Lec10_Nevbar