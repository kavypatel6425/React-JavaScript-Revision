import React, { useContext } from 'react'
import { StudentContext } from '../Context/Lac15_StudentContext';

function Lac15_StudentDetails() {
    const { selectedStudent } = useContext(StudentContext);

    if (selectedStudent === null) {
        return <h2>Select Student</h2>;
    }
    console.log(selectedStudent);
    
    return (
        <div>
            <h2>Student Details</h2>

            <p>ID : {selectedStudent.id}</p>

            <p>Name : {selectedStudent.name}</p>

            <p>Course : {selectedStudent.course}</p>

            <p>Email : {selectedStudent.email}</p>
        </div>
    )
}

export default Lac15_StudentDetails