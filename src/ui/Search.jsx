function Search({ query, setQuery }) {
  return (
    <>
      <input
        type="search"
        placeholder="Search by Pizza Name"
        value={query}
        className="focus:ring-offset mt-2 rounded-full border-none bg-slate-300 px-4 py-2 text-orange-800 focus:outline-none"
        onChange={(e) => setQuery(e.target.value)}
      />
    </>
  );
}

export default Search;
