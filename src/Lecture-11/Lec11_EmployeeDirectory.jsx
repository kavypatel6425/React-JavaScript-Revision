import { useNavigate } from "react-router-dom";

function Lec11_EmployeeDirectory() {
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

  return (
    <div>
      <h1>Employee List</h1>

      {employees.map((employee) => (
        <div key={employee.id}>
          <h3>{employee.name}</h3>

          <button onClick={() => navigate(`/employee/${employee.id}`)}>
            View Details
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Lec11_EmployeeDirectory;