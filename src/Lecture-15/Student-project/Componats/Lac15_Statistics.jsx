import React, { useContext } from "react";
import { StudentContext } from "../Context/Lac15_StudentContext";

function Lac15_Statistics() {

  const {
    students,
    selectedStudent,
    searchCount
  } = useContext(StudentContext);

  // Total Courses
  const totalCourses = [...new Set(students.map((student) => student.course))];

  // Search Results
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchCount.toLowerCase())
  );

  return (
    <div className="stats">

      <h2>Dashboard Statistics</h2>

      <p><b>Total Students :</b> {students.length}</p>

      <p><b>Total Courses :</b> {totalCourses.length}</p>

      <p>
        <b>Selected Student :</b>{" "}
        {selectedStudent ? selectedStudent.name : "No Student Selected"}
      </p>

      <p><b>Search Results :</b> {filteredStudents.length}</p>

    </div>
  );
}

export default Lac15_Statistics;