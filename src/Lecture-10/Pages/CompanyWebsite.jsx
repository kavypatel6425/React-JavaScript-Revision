import React from 'react'
import { Link } from 'react-router-dom'

function CompanyWebsite() {
    return (
        <div>
            <h2>Company Website</h2>
            <Link to={"/CompanyHome"} >
                Home
            </Link> <br />

            <Link to={"/CompanyServices"} >
                Services
            </Link> <br />
            <Link to={"/CompanyAbout"} >
                About
            </Link> <br />
            <Link to={"/CompanyContect"} >
                Contect
            </Link>
        </div>
    )
}

export default CompanyWebsite