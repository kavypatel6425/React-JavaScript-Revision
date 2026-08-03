import { useNavigate } from "react-router-dom";

function Lec11_CourseList() {
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      name: "React JS",
      instructor: "Rahul Sir",
      duration: "3 Months",
    },
    {
      id: 2,
      name: "JavaScript",
      instructor: "Amit Sir",
      duration: "2 Months",
    },
    {
      id: 3,
      name: "Node JS",
      instructor: "Priya Ma'am",
      duration: "4 Months",
    },
  ];

  return (
    <div>
      <h1>Course List</h1>

      {courses.map((course) => (
        <div key={course.id}>
          <h3>{course.name}</h3>

          <button onClick={() => navigate(`/course/${course.id}`)}>
            View Details
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Lec11_CourseList;