import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Lec12_Footer from './Lec12_Footer'
import Lec12_Header from './Lec12_Header'
import Lec12_NevigationMenu from './Lec12_NevigationMenu'
import Lec12_Sidebar from './Lec12_Sidebar'
import Lec12_EmployeList from './Lec12_EmployeList'
import Lec12_EmployeDetails from './Lec12_EmployeDetails'
import Lec12_BlogPosts from './Lec12_BlogPosts'
import Lec12_AddPost from './Lec12_AddPost'
import Lec12_Categories from './Lec12_Categories'
import Lec12_Comments from './Lec12_Comments'

function Layout() {
  return (
    <div>
      {/* Task - 1  */}

      {/* <header>
            <h1>Layout Page</h1>
        </header>
        <footer>
            <p>@layoutpage 2002</p>
        </footer> */}

      {/* Task - 2 */}

      {/* <Lec12_Header />
      <Outlet />
      <Lec12_Footer /> */}

      {/* Task - 3 */}
      {/* <Lec12_Header />
      <Lec12_NevigationMenu/>
      <Outlet />
      <Lec12_Footer /> */}

      {/* Task - 4 */}
      {/* <Lec12_Header />
      <Lec12_Sidebar />
      <Outlet />
      <Lec12_Footer />  */}
      {/* Task - 5 */}
      {/* <Lec12_Header />
      <Lec12_Sidebar />
      <Outlet />
      <Lec12_Footer />  */}
      {/* Task - 6 */}
      {/* <Lec12_Header />
      <Lec12_Sidebar />
      <Lec12_EmployeList/>
      <Lec12_EmployeDetails/>
      <Outlet />
      <Lec12_Footer />  */}
      {/* Task - 7 */}
      {/* <Lec12_Header />
      <Outlet />
      <Lec12_Footer />  */}
      {/* Task - 8 */}

      {/* <h3>School Deshbord</h3>
      <Lec12_Header />
      <Outlet />
      <Lec12_Footer />  */}

      {/* Task - 9 */}
      {/* <h3>Banking Deshbord</h3>
      <Lec12_Header />
      <Outlet />
      <Lec12_Footer /> */}

      {/* Task - 10 */}
      {/* <h3>Library Deshbord</h3>
      <Lec12_Header />
      <Lec12_Sidebar/>
      <Outlet />
      <Lec12_Footer />  */}

      {/* Task - 11 */}
      {/* <h3>E-Commerce Deshbord</h3>
      <Lec12_Header />
      <Lec12_Sidebar/>
      <Outlet />
      <Lec12_Footer />  */}

      {/* Task - 12 */}
      {/* <h3>Online Learning Deshbord</h3>
      <Lec12_Header />
      <Lec12_Sidebar/>
      <Outlet />
      <Lec12_Footer />  */}

      {/* Task - 13 */}
      {/* <h3>CRM Deshbord</h3>
      <Lec12_Header />
      <Lec12_Sidebar/>
      <Outlet />
      <Lec12_Footer />  */}

      {/* Task - 14 */}
      {/* <h3>Blog Menagment Panel</h3>
      <Lec12_Header />
      <Lec12_BlogPosts/>
      <Lec12_AddPost/>
      <Lec12_Categories/>
      <Lec12_Comments/>
      <Outlet />
      <Lec12_Footer />  */}


      {/* <h1>React Routing Task 15</h1>

      <nav>
        <Link to="/">Home</Link> <br />
        <Link to="/dashboard"> Dashboard</Link>
      </nav>

      <hr />

      <Outlet /> */}

      <h1>Travel Booking Dashboard</h1>

      <nav>
        <Link to="/">Home</Link> <br />
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  )
}


export default Layout