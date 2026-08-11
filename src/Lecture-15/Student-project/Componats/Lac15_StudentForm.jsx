import React, { useContext, useRef, useState } from "react";
import { StudentContext } from "../Context/Lac15_StudentContext";

function Lac15_StudentForm() {
    const { students, setStudents } = useContext(StudentContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [course, setCourse] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const courseRef = useRef(null);
    const phoneRef = useRef(null);
    const cityRef = useRef(null);

    const renderCount = useRef(0);

    function formSubmit(e) {
        e.preventDefault();


        if (name.trim() === "") {
            alert("Please Enter Name");
            nameRef.current.focus();
            return;
        }

        if (email.trim() === "") {
            alert("Please Enter Email");
            emailRef.current.focus();
            return;
        }

        if (course.trim() === "") {
            alert("Please Enter Course");
            courseRef.current.focus();
            return;
        }

        if (phone.trim() === "") {
            alert("Please Enter Phone");
            phoneRef.current.focus();
            return;
        }

        if (city.trim() === "") {
            alert("Please Enter City");
            cityRef.current.focus();
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

    renderCount.current++;

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
                    ref={nameRef}
                />

                <br /><br />

                <label>Email</label>
                <br />
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    ref={emailRef}
                />

                <br /><br />

                <label>Course</label>
                <br />
                <input
                    type="text"
                    placeholder="Enter Course"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    ref={courseRef}
                />

                <br /><br />

                <label>Phone</label>
                <br />
                <input
                    type="text"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    ref={phoneRef}
                />

                <br /><br />

                <label>City</label>
                <br />
                <input
                    type="text"
                    placeholder="Enter City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    ref={cityRef}
                />

                <br /><br />

                <input type="submit" placeholder="Add Student" />

            </form>
            
            <p>Render Count : {renderCount.current}</p>
        </div>
    );
}

export default Lac15_StudentForm;