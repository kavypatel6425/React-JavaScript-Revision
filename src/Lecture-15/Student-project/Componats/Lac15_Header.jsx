import React, { useContext } from 'react'
import { ThemeContext } from '../Context/Lac15_ThemeContext'

function Lac15_Header() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        <div>
            <h1>Student Management System</h1>
            <button onClick={toggleTheme}>
                {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
        </div>
    )
}

export default Lac15_Header