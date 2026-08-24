import React, { useEffect } from 'react'

function About() {
    useEffect(() => {
        document.title = "About Page";
    }, []);
    return (
        <div>About</div>
    )
}

export default About