import { useState } from "react";
// import "./App.css";

function Task_8() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    // const [mobile, setMobile] = useState("");


    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // const [userEmail, setUserEmail] = useState("");
    // const [userPassword, setUserPassword] = useState("");

    // function handleSubmit(e) {
    //     e.preventDefault(); // Prevent page refresh

    //     setUserEmail(email);
    //     setUserPassword(password);
    // }

    const [showName, setShowName] = useState("");
    // const [showEmail, setShowEmail] = useState("");
    // const [showMessage, setShowMessage] = useState("");

    // function handleSubmit(e) {
    //     e.preventDefault();

    //     setShowName(name);
    //     setShowEmail(email);
    //     setShowMessage(message);
    // }

    // const [feedback, setFeedback] = useState("");
    // const [showFeedback, setShowFeedback] = useState("");

    // function handleSubmit(e) {
    //     e.preventDefault();

    //     setShowName(name);
    //     setShowFeedback(feedback);
    // }


    // const [department, setDepartment] = useState("");
    // const [salary, setSalary] = useState("");

    // function handleSubmit(e) {
    //     e.preventDefault();

    //     if (!name || !department || !salary) {
    //         alert("Fill all fields");
    //     } else {
    //         alert("Employee Registered Successfully");
    //     }
    // }


    // function handleSubmit(e) {
    //     e.preventDefault();

    //     if (email.includes("@") && email.includes(".")) {
    //         setMessage(" Email is Valid");
    //     } else {
    //         setMessage(" Invalid Email");
    //     }
    // }


    // function handleSubmit(e) {
    //     e.preventDefault();

    //     if (password.length >= 8) {
    //         setMessage(" Password is Valid");
    //     } else {
    //         setMessage(" Password must be at least 8 characters");
    //     }

    // }

    // function handleSubmit(e) {
    //     e.preventDefault();

    //     if (email.includes("@") && email.includes(".")) {
    //         setMessage(" Email is Valid");
    //     } else {
    //         setMessage(" Invalid Email");
    //     }

    //     if (password.length >= 8) {
    //         setMessage(" Password is Valid");
    //     } else {
    //         setMessage(" Password must be at least 8 characters");
    //     }

    // }


    // const [mobile, setMobile] = useState("");
    // const [course, setCourse] = useState("");
    // const [address, setAddress] = useState("");

    // function handleSubmit(e) {
    //     e.preventDefault();

    //     if (!name || !email || !mobile || !course || !address) {
    //         alert("Please fill all fields");
    //     } else {
    //         alert("Admission Form Submitted Successfully");
    //     }
    // }

    //     const [patient, setPatient] = useState("");
    //     const [doctor, setDoctor] = useState("");
    //     const [date, setDate] = useState("");

    //     const [data, setData] = useState({});

    //     function handleSubmit(e) {
    //         e.preventDefault();

    //         if (!patient || !doctor || !date) {
    //             alert("Fill all fields");
    //         } else {
    //             alert(
    //                 `Patient: ${patient}
    // Doctor: ${doctor}
    // Date: ${date}`
    //             );
    //         }
    //     }



    //     const [mobile, setMobile] = useState("");
    //     const [guest, setGuest] = useState("");
    //     const [date, setDate] = useState("");

    //     function handleSubmit(e) {
    //         e.preventDefault();

    //         if (!name || !mobile || !guest || !date) {
    //             alert("Please fill all fields");
    //         } else {
    //             alert(
    //                 `Customer: ${name}
    // Mobile: ${mobile}
    // Guests: ${guest}
    // Booking Date: ${date}`
    //             );
    //         }
    //     }

    const [experince, setExperince] = useState("")
    const [skills, setSkills] = useState("")
    function handleSubmit(e) {
        e.preventDefault();

        if (!name || !mobile || !guest || !date) {
            alert("Please fill all fields");
        } else {
            alert("Admission Form Submitted Successfully");
        }
    }

    return (
        <div className="container">

            {/* Task-1 */}
            {/* <h1>Student Registration Form</h1>

            <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="text"
                placeholder="Enter Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
            />

            <hr />

            <h2>Student Details</h2>

            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Mobile: {mobile}</p> */}



            {/* Task - 2 */}

            {/* <h1>User Login Form</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br /><br />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br /><br />

                <button type="submit">Login</button>
            </form>

            <hr />

            <h2>Entered Details</h2>

            <p>Email: {userEmail}</p>
            <p>Password: {userPassword}</p> */}


            {/* //Task - 3 */}

            {/* <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <br /><br />

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br /><br />

                <input
                    type="text"
                    placeholder="Enter Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <br /><br />

                <button type="submit">Login</button>
            </form>

            <h2>Entered Details</h2>

            <p>Name: {showName}</p>
            <p>Email: {showEmail}</p>
            <p>Message: {showMessage}</p> */}

            {/* Task - 4 */}

            {/* <h1>Feedback Form</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <br /><br />

                <textarea
                    placeholder="Enter Feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                ></textarea>

                <br /><br />

                <button type="submit">Submit</button>
            </form>

            <h2>Feedback</h2>

            <p>Name: {showName}</p>
            <p>Feedback: {showFeedback}</p> */}

            {/* Task - 5 */}

            {/* <h1>Employee Registration Form</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Employee Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br /><br />

                <input
                    type="text"
                    placeholder="Department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                />
                <br /><br />

                <input
                    type="number"
                    placeholder="Salary"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                />
                <br /><br />

                <button type="submit">Register</button>
            </form>

            <h3>Employee Details</h3>
            <p>Name: {name}</p>
            <p>Department: {department}</p>
            <p>Salary: {salary}</p> */}

            {/* Task - 7 */}



            {/* <h1>Email Validation Form</h1>

                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <br /><br />

                    <button type="submit">Submit</button>
                </form>

                <h3>{message}</h3> */}


            {/* task - 8 */}

            {/* <h1>Password Validation</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br /><br />

                <button type="submit">Submit</button>
            </form>

            <h3>{message}</h3> */}

            {/* Task - 9 */}
            {/* 
            <h1>Password Validation</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br /><br />
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br /><br />

                <button type="submit">Submit</button>
            </form>

            <h3>{message}</h3> */}

            {/* Task - 10 */}

            {/* <h1>College Admission Form</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Student Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br /><br />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br /><br />

                <input
                    type="text"
                    placeholder="Mobile Number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                />
                <br /><br />

                <input
                    type="text"
                    placeholder="Course"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                />
                <br /><br />

                <textarea
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                ></textarea>
                <br /><br />

                <button type="submit">Submit</button>
            </form> */}

            {/* Task - 11 */}

            {/* <h1>Hospital Appointment Form</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Patient Name"
                    value={patient}
                    onChange={(e) => setPatient(e.target.value)}
                />
                <br /><br />

                <input
                    type="text"
                    placeholder="Doctor Name"
                    value={doctor}
                    onChange={(e) => setDoctor(e.target.value)}
                />
                <br /><br />

                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <br /><br />

                <button type="submit">Book Appointment</button>
            </form>

            <h2>Appointment Details</h2>

            <p>Patient Name: {data.patient}</p>
            <p>Doctor Name: {data.doctor}</p>
            <p>Appointment Date: {data.date}</p> */}

            {/* task - 12 */}

            {/* <h1>Restaurant Table Booking</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Customer Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br /><br />

                <input
                    type="text"
                    placeholder="Mobile Number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                />
                <br /><br />

                <input
                    type="number"
                    placeholder="Number of Guests"
                    value={guest}
                    onChange={(e) => setGuest(e.target.value)}
                />
                <br /><br />

                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <br /><br />

                <button type="submit">Book Table</button>
            </form> */}

            {/* task - 13 */}

            {/* <h1>Job application form</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Customer Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br /><br />

                <input
                    type="email"
                    placeholder="Mobile email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br /><br />

                <input
                    type="text"
                    placeholder="Experince"
                    value={experince}
                    onChange={(e) => setExperince(e.target.value)}
                />
                <br /><br />

                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <br /><br />

                <button type="submit">Book Table</button>
            </form> */}


        </div>
    );
}

export default Task_8;