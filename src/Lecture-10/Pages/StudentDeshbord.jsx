import React from 'react'
import { NavLink } from 'react-router-dom'

function StudentDeshbord() {
    return (
        <div>
            <h2>Student Deshbord</h2>
            <NavLink to={"/dashbord"} >
                Dashbord
            </NavLink> <br />

            <NavLink to={"/course"} >
                Course
            </NavLink> <br />
            <NavLink to={"/profile"} >
                Profile
            </NavLink>
        </div>
    )
}

export default StudentDeshbord