import { useNavigate, useParams } from "react-router-dom";

function Lec11_BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const books = [
    {
      id: 1,
      title: "The Alchemist",
      author: "Paulo Coelho",
      category: "Novel",
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      category: "Self Help",
    },
    {
      id: 3,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      category: "Finance",
    },
  ];

  const book = books[id - 1];

  return (
    <div>
      <h1>Book Details</h1>

      <p><b>Book ID:</b> {id}</p>
      <p><b>Title:</b> {book.title}</p>
      <p><b>Author:</b> {book.author}</p>
      <p><b>Category:</b> {book.category}</p>

      <button onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
}

export default Lec11_BookDetails;