import { useNavigate } from "react-router-dom";

function Lec11_PatientList() {
  const navigate = useNavigate();

  const patients = [
    {
      id: 1,
      name: "Rahul",
      age: 25,
      disease: "Fever",
    },
    {
      id: 2,
      name: "Priya",
      age: 30,
      disease: "Cold",
    },
    {
      id: 3,
      name: "Amit",
      age: 40,
      disease: "Diabetes",
    },
  ];

  return (
    <div>
      <h1>Patient List</h1>

      {patients.map((patient) => (
        <div key={patient.id}>
          <h3>{patient.name}</h3>

          <button
            onClick={() => navigate(`/patient/${patient.id}`)}
          >
            View Details
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Lec11_PatientList;