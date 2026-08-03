import React from 'react'
import { useNavigate } from 'react-router-dom'

function Lec11_Ragistration() {
    const navigate = useNavigate()
    function submit() {
        alert("Ragistar Conform")
        navigate("/succeaspage")

    }
    return (
        <div>
            <form action="#" onSubmit={submit}>
                <input type="text" /> <br />
                <input type="email" /> <br />
                <input type="password" /> <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Lec11_Ragistration