import React from "react";

interface ISearchInputProps {
  setSearchQuery: (searchQuery: string) => void;
}

const SearchInput = (props: ISearchInputProps) => {
  const { setSearchQuery } = props;

  return (
    <>
      <label htmlFor="search "> Search Mee</label>
      <input
        id="search"
        type="search"
        placeholder="Search..."
        aria-label="Search"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </>
  );
};

export default SearchInput;
