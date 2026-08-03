import { useNavigate, useParams } from "react-router-dom";

function Lec11_EmployeeProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  const employees = [
    {
      id: 1,
      name: "Rahul",
      department: "IT",
      designation: "Software Developer",
    },
    {
      id: 2,
      name: "Priya",
      department: "HR",
      designation: "HR Manager",
    },
    {
      id: 3,
      name: "Amit",
      department: "Finance",
      designation: "Accountant",
    },
  ];

  const employee = employees[id - 1];

  return (
    <div>
      <h1>Employee Details</h1>

      <p><b>Employee ID:</b> {id}</p>
      <p><b>Name:</b> {employee.name}</p>
      <p><b>Department:</b> {employee.department}</p>
      <p><b>Designation:</b> {employee.designation}</p>

      <button onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
}

export default Lec11_EmployeeProfile;