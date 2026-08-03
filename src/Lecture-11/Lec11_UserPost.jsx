import { useParams } from "react-router-dom";

function Lec11_UserPost() {
  const { userId, postId } = useParams();

  return (
    <div>
      <h1>User Post Details</h1>

      <p><b>User ID:</b> {userId}</p>

      <p><b>Post ID:</b> {postId}</p>

      <p>
        User <b>{userId}</b> has selected Post <b>{postId}</b>.
      </p>
    </div>
  );
}

export default Lec11_UserPost;
