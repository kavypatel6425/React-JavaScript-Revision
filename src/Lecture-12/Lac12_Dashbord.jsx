import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Lac12_Dashbord() {
    return (
        <div>
            {/* <h2>Dashboard</h2>

            <Link to="users">Users</Link>

            <hr />

            <Outlet /> */}

            <h2>Dashboard</h2>

            <nav>
                <Link to="flights">Flights</Link> |{" "}
                <Link to="hotels">Hotels</Link> |{" "}
                <Link to="bookings">Bookings</Link> |{" "}
                <Link to="payments">Payments</Link> |{" "}
                <Link to="support">Customer Support</Link>
            </nav>

            <hr />

            <Outlet />
        </div>


    )
}

export default Lac12_Dashbord