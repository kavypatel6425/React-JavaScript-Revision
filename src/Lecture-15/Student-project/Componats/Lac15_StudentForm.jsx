import React, { useContext, useState } from "react";
import { StudentContext } from "../Context/Lac15_StudentContext";

function Lac15_StudentForm() {
    const { students, setStudents } = useContext(StudentContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [course, setCourse] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");

    function formSubmit(e) {
        e.preventDefault();

        if (
            name.trim() === "" ||
            email.trim() === "" ||
            course.trim() === "" ||
            phone.trim() === "" ||
            city.trim() === ""
        ) {
            alert("Please fill all fields.");
            return;
        }

        const newStudent = {
            id: students.length + 1,
            name,
            email,
            course,
            phone,
            city,
        };

        setStudents([...students, newStudent]);

        alert("Student Added Successfully!");

        setName("");
        setEmail("");
        setCourse("");
        setPhone("");
        setCity("");
    }

    return (
        <div>
            <h2>Add New Student</h2>

            <form onSubmit={formSubmit}>

                <label>Student Name</label>
                <br />
                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <br /><br />

                <label>Email</label>
                <br />
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br /><br />

                <label>Course</label>
                <br />
                <input
                    type="text"
                    placeholder="Enter Course"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                />

                <br /><br />

                <label>Phone</label>
                <br />
                <input
                    type="text"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <br /><br />

                <label>City</label>
                <br />
                <input
                    type="text"
                    placeholder="Enter City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />

                <br /><br />

                <input type="submit" placeholder="Add Student"/>

            </form>
        </div>
    );
}

export default Lac15_StudentForm;