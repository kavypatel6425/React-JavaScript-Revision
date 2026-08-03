import { Link } from "react-router-dom";

function EmployeeNavbar({ title }) {
  return (
    <>
      <h2>{title}</h2>

      <nav>
        <Link to="/employee-dashboard">Dashboard</Link> |{" "}
        <Link to="/employee-list">Employee</Link> |{" "}
        <Link to="/employee-department">Department</Link> |{" "}
        <Link to="/employee-attendance">Attendance</Link> |{" "}
        <Link to="/employee-salary">Salary</Link>
      </nav>

      <hr />
    </>
  );
}

export default EmployeeNavbar;