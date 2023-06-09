type SearchBarProps = {
    searchFilter: string;
    setSearchFilter: React.Dispatch<React.SetStateAction<string>>;
  };
  
  export const SearchBar = ({
    searchFilter,
    setSearchFilter,
  }: SearchBarProps) => {
    const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchFilter(e.target.value);
    };
  
    return (
      <div className="w-full flex items-center justify-center">
        <label htmlFor="searchBar" className="sr-only">
          searchBar
        </label>
        <input
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Search your team..."
          value={searchFilter}
          onChange={(e) => handleSearchInput(e)}
          className="w-3/5 px-4 py-2 mb-7 border-transparent rounded-xl text-black placeholder-slate-500 focus:outline-none"
        />
      </div>
    );
  };