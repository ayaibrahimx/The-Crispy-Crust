function Sort({ handleSelectChange, selectedOption }) {
  return (
    <div>
      <label htmlFor="dropdown"></label>
      <select
        id="dropdown"
        value={selectedOption}
        onChange={(e) => handleSelectChange(e.target.value)}
        className="focus:ring-offset mt-2 rounded-full border-8  border-slate-300 bg-slate-300 px-3 py-2 text-orange-800 focus:outline-none"
      >
        <option value="Old to New">Sort by Old Items</option>
        <option value="New to old">Sort by New Items</option>
        <option value="Price Low to High">Sort by low price</option>
        <option value="Price High to Low">Sort by high price</option>
      </select>
    </div>
  );
}

export default Sort;
