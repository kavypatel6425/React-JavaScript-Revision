import { useNavigate } from "react-router-dom";

function Lec11_BookList() {
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

  return (
    <div>
      <h1>Book List</h1>

      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>

          <button onClick={() => navigate(`/book/${book.id}`)}>
            View Details
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Lec11_BookList;