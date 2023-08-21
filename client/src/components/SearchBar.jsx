const SearchBar = ({ searchText, handleSearchChange }) => {
  return (
    <div className="relative">
      <svg
        className="absolute left-3 top-3 h-5 w-5 fill-slate-500 sm:left-4"
        aria-hidden="true"
        viewBox="0 0 24 24"
      >
        <g>
          <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
        </g>
      </svg>
      <input
        type="text"
        placeholder="Search for a post"
        value={searchText}
        onChange={handleSearchChange}
        className="block w-full rounded-md border border-slate-300 bg-white py-2.5 pe-3 ps-10 text-base placeholder-slate-400 shadow focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:pe-5 sm:ps-12"
      />
    </div>
  );
};

export default SearchBar;
