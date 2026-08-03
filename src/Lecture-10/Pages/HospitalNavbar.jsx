import { Link } from "react-router-dom";

function HospitalNavbar() {
    return (

        <div>
            <h2>Hospital Navbar</h2>
            <nav>
                <Link to="/hospitalHome">Home</Link> <br />
                <Link to="/doctors">Doctors</Link> <br />
                <Link to="/appointments">Appointments</Link> <br />
                <Link to="/hospitalContact">Contact</Link>
            </nav>
        </div>
    );
}

export default HospitalNavbar;