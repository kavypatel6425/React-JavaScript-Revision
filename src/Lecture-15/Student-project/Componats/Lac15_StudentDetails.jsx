import React, { useContext, useEffect, useRef } from 'react'
import { StudentContext } from '../Context/Lac15_StudentContext';
import "../CSS/Style.css"

function Lac15_StudentDetails() {
    const { selectedStudent } = useContext(StudentContext);
    const detailsRef = useRef(null);

    useEffect(() => {

        if (selectedStudent) {
            detailsRef.current.scrollIntoView({
                behavior: "smooth"
            });
        }

    }, [selectedStudent]);

    if (selectedStudent === null) {
        return <h2>Select Student</h2>;
    }
    console.log(selectedStudent);

    return (
        <div ref={detailsRef} className="student-details ">
            <h2>Student Details</h2>

            <p>ID : {selectedStudent.id}</p>

            <p>Name : {selectedStudent.name}</p>

            <p>Course : {selectedStudent.course}</p>

            <p>Email : {selectedStudent.email}</p>

            <p>City : {selectedStudent.city}</p>
        </div>
    )
}

export default Lac15_StudentDetails