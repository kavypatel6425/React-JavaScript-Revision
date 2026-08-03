import React from 'react'
import { NavLink } from 'react-router-dom'

function Lec12_Sidebar() {
  return (
    <div>Lec12_Sidebar


      <aside className="sidebar">

        <NavLink to="/">Dashboard</NavLink>

        <NavLink to="/users">Users</NavLink>

        <NavLink to="/products">Products</NavLink>

        <NavLink to="/orders">Orders</NavLink>

        <NavLink to="/reports">Reports</NavLink>

        <NavLink to="/settings">Settings</NavLink>

      </aside>
    </div>
  )
}

export default Lec12_Sidebar