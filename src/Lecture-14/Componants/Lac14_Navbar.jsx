import React from 'react'
import { Link } from 'react-router-dom'

function Lac14_Navbar() {
  return (
    <div>
        <h2>React Dashboard</h2>
        <Link to={"/dashboardCard"}>Deshboard Card</Link> ||
        <Link to={"/digitalClock"}>Digital Clock</Link> ||
        <Link to={"/themeToggle"}>Theme Toggle</Link> ||
        <Link to={"/userList"}>User List</Link> ||
        <Link to={"/windowSize"}>Window Size</Link>
    </div>
  )
}

export default Lac14_Navbar