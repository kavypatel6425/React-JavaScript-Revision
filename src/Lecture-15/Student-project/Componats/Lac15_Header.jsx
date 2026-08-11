import React, { useContext } from 'react'
import { ThemeContext } from '../Context/Lac15_ThemeContext'
import { AuthContext } from '../Context/Lac15_AuthContext';

function Lac15_Header() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const { isLogin, user, logout } = useContext(AuthContext);
    return (
        <div className='header '>
            <h1>Student Management System</h1>
            <button onClick={toggleTheme}>
                {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>

            <p>Welcome, {user.name}</p>

            <button onClick={logout}>
                Logout
            </button>

        </div>
    )
}

export default Lac15_Header