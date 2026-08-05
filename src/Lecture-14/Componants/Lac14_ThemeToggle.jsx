import { useEffect, useState } from "react";

function Lac14_ThemeToggle() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <>
            <button
                onClick={() =>
                    setTheme(theme === "light" ? "dark" : "light")
                }
            >
                Change Theme
            </button>

            <h3>{theme} Mode</h3>
        </>
    );
}

export default Lac14_ThemeToggle;