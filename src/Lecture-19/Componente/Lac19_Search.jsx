function Lac19_Search({ search, setSearch }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search products by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Lac19_Search;