import { NavLink } from "react-router-dom";

function CollegeNavbar() {
    return (
        <div>
            <h2>College Navbar</h2>
            <nav>
                <NavLink to="/collegeHome">Home</NavLink> ||
                <NavLink to="/collegeCourse">Course</NavLink> ||
                <NavLink to="/collegeAdmission">Admission</NavLink> ||
                <NavLink to="/collegeFaculty">Faculty</NavLink> ||
                <NavLink to="/collegeContact">Contact</NavLink>
            </nav>
        </div>
    );
}

export default CollegeNavbar;