import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "./StudentSlice";


function StudentReducer() {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector(
    (state) => state.students
  );

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h1>Student List</h1>

      {data.map((student) => (
        <div key={student.id}>
          <h3>{student.name}</h3>
          <p>{student.email}</p>
        </div>
      ))}
    </div>
  );
}

export default StudentReducer;