import React from 'react'
import { Link, Outlet } from 'react-router-dom'


function Lec12_UserPage() {
  return (
    <div>
      <h3>This is User Page</h3>

      <h2 className='h2'>Users Page</h2>

      <Link to="profile">Profile</Link> <br />
      <Link to="settings">Settings</Link> <br />
      <Link to="activity">Activity</Link> <br />

      <hr />

      <Outlet />
    </div>
  )
}

export default Lec12_UserPage