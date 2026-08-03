import React from 'react'

function StudentProfile(props) {
  return (
    <div>
        <h2>Task-11</h2>
        <h4>{props.StudentName}</h4>
        <p>{props.Marks}</p>
        <p>{props.PassGrade}</p>
    </div>
  )
}

export default StudentProfile