import { useParams, useNavigate } from "react-router-dom";

function Lec11_PatientDetails() {
  const { id } = useParams();
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

  const patient = patients[id - 1];

  return (
    <div>
      <h1>Patient Details</h1>

      <p><b>Patient ID:</b> {id}</p>
      <p><b>Name:</b> {patient.name}</p>
      <p><b>Age:</b> {patient.age}</p>
      <p><b>Disease:</b> {patient.disease}</p>

      <button onClick={() => navigate("/patientList")}>
        Back
      </button>
    </div>
  );
}

export default Lec11_PatientDetails;