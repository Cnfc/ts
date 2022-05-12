import { useDebounce } from "hooks/useDebounce";
import { useDebounces } from "hooks/useDebounces";
import React, { useEffect, useState } from "react";

interface ISearchInputProps {
  setSearchQuery: (searchQuery: string) => void;
}

const SearchInput = (props: ISearchInputProps) => {
  const { setSearchQuery } = props;
  const [query, setQuery] = useState<string>("");

  const deboncedQuery = useDebounces(query, 250);

  useEffect(() => {
    setSearchQuery(deboncedQuery);
  }, [deboncedQuery, setSearchQuery]);

  return (
    <>
      <label htmlFor="search "> Search Mee</label>
      <input
        id="search"
        type="search"
        placeholder="Search..."
        aria-label="Search"
        onChange={(e) => {
          console.log("e");
          setQuery(e.target.value);
        }}
      />
    </>
  );
};

export default SearchInput;
