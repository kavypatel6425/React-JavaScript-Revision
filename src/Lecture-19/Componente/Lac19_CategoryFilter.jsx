function Lac19_CategoryFilter({ category, setCategory }) {
  const categories = [
    "All",
    "Mobile",
    "Laptop",
    "Accessories",
    "Wearable",
  ];

  return (
    <div className="category-filter">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Lac19_CategoryFilter;