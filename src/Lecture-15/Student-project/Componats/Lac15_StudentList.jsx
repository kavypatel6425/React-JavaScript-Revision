import React, { useContext, useEffect, useRef, useState } from "react";
import { StudentContext } from "../Context/Lac15_StudentContext";

function Lac15_StudentList() {

    const { students, setSelectedStudent, searchCount, setSearchCount } = useContext(StudentContext);

    const [search, setSearch] = useState("");

    const inputRef = useRef(null);
    const prevSearchRef = useRef("");

    const filterStudent = students.filter((student) =>
        student.name.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div>

            <div className="search">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search Student"
                    value={search}
                    onChange={(e) => {
                        prevSearchRef.current = search;
                        setSearch(e.target.value);
                    }}
                />

                <h3>Current Search : {search}</h3>

                <h3>Previous Search : {prevSearchRef.current}</h3>

                <h3>
                    {search === prevSearchRef.current
                        ? "Same Search"
                        : "Search Changed"}
                </h3>
            </div>

            <div className="student-card">
                {
                    filterStudent.map((student) => (
                        <div key={student.id}>
                            <h3>{student.name}</h3>
                            <p>{student.course}</p>
                            <p>{student.email}</p>

                            <button onClick={() => setSelectedStudent(student)}>
                                Student Details
                            </button>
                            <button>Click</button>
                        </div>
                    ))
                }
            </div>

        </div>
    );
}

export default Lac15_StudentList;