import "./SearchStyle.css";

export const Search = ({
  searchValue,
  searchEntities,
  setSearchValue,
  resetSearch,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        searchEntities();
      }}
    >
      <div className="form">
        <input
          placeholder="Поиск..."
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          className="search"
        />
        <button type="submit" className="quest">
          Поиск
        </button>
        <button className="reset" onClick={resetSearch}>
          Cбросить
        </button>
      </div>
    </form>
  );
};
export default Search;
