import axios from 'axios';
import React, { useState } from 'react'
import StudentForm from './StudentForm';

function CustomStudentdata() {
  const [students, setStudents] = useState([]);

  const getStudent = () => {
    axios
      .get("http://localhost:3000/studentData")
      .then((res) => {
        setStudents(res.data)
      })
      .catch((err) => {
        console.log(err);
      })

  }
  return (
    <>
      <div>
        <h1>Student List</h1>

        <button onClick={getStudent}>Get Student</button>

        <StudentForm/>

        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>

          <tbody>
            {
              students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                  <td>{student.address}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default CustomStudentdata