import { Link } from "react-router-dom";

function ELearningNavbar() {
  return (
    <>
      <h2>E-Learning Platform</h2>

      <nav>
        <Link to="/elearn-home">Home</Link> |{" "}
        <Link to="/elearn-courses">Courses</Link> |{" "}
        <Link to="/elearn-my-learning">My Learning</Link> |{" "}
        <Link to="/elearn-certificate">Certificate</Link> |{" "}
        <Link to="/elearn-profile">Profile</Link>
      </nav>

      <hr />
    </>
  );
}

export default ELearningNavbar;