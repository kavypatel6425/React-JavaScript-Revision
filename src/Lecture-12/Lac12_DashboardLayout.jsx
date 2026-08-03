import React from 'react'
import Lec12_Header from './Lec12_Header'
import Lec12_Footer from './Lec12_Footer'
import Lec12_Sidebar from './Lec12_Sidebar'
import { Outlet } from 'react-router-dom'
import "./Css/dashboard.css"

function Lac12_DashboardLayout() {
    return (
        <div>
            <Lec12_Header />

            <div className="container">

                <Lec12_Sidebar />

                <div className="content">
                    <Outlet />
                </div>

            </div>

            <Lec12_Footer />
        </div>
    )
}

export default Lac12_DashboardLayout