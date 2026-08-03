import React from 'react'
import { NavLink } from 'react-router-dom'

function Restaurent() {
    return (
        <div>
            <h2>Resurent Menu</h2>
            <NavLink to={"/restaurentHome"} >
                Home
            </NavLink> <br />

            <NavLink to={"/restaurentMenu"} >
                Menu
            </NavLink> <br />

            <NavLink to={"/restaurentGallery"} >
                Gallery
            </NavLink> <br />
            <NavLink to={"/restaurentContect"} >
                Contect
            </NavLink>
        </div>
    )
}

export default Restaurent