import React from 'react'

function CologeStudent({Students}) {
  return (
    <div>
        <h2>Task - 17</h2>
        <h4>{Students.Name}</h4>
        <p>{Students.Course}</p>
        <p>{Students.Semester}</p>
    </div>
  )
}

export default CologeStudent