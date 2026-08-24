import React from 'react'

function Contact() {
    useEffect(() => {
        document.title = "Contact Page";
    }, []);
    return (
        <div>Contact</div>
    )
}

export default Contact