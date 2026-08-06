import React, { useContext, useEffect, useRef, useState } from "react";
import { StudentContext } from "../Context/Lac15_StudentContext";

function Lac15_StudentList() {

    const { students, setSelectedStudent } = useContext(StudentContext);

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

            {
                filterStudent.map((student) => (
                    <div key={student.id}>
                        <h2>{student.name}</h2>

                        <button onClick={() => setSelectedStudent(student)}>
                            Student Details
                        </button>
                    </div>
                ))
            }

        </div>
    );
}

export default Lac15_StudentList;