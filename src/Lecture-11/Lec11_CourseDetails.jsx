import { useParams, useNavigate } from "react-router-dom";

function Lec11_CourseDetails() {
  const { id } = useParams();
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

  const course = courses[id - 1];

  return (
    <div>
      <h1>Course Details</h1>

      <p><b>Course ID:</b> {id}</p>
      <p><b>Course Name:</b> {course.name}</p>
      <p><b>Instructor:</b> {course.instructor}</p>
      <p><b>Duration:</b> {course.duration}</p>

      <button onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
}

export default Lec11_CourseDetails;