"use client";
import React, { ChangeEvent, KeyboardEvent, useState, useEffect } from "react";

export type SearchProps = {
  onSearch: (value: string) => void;
  suggestions: string[];
  onSuggestionClick: (suggestion: string) => void;
};

const Search: React.FC<SearchProps> = ({
  onSearch,
  suggestions,
  onSuggestionClick,
}) => {
  const [value, setValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    onSearch(newValue);
    setShowSuggestions(newValue.length > 0);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch(value);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setValue(suggestion);
    onSearch(suggestion);
    setShowSuggestions(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (!(event.target as HTMLElement).closest(".search-container")) {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto search-container">
      <input
        type="search"
        name="search"
        placeholder="Search departments..."
        className="bg-white text-gray-950 h-12 px-4 pr-16 w-full rounded-full border border-gray-300 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
        value={value}
        onChange={searchHandler}
        onKeyDown={handleKeyDown}
      />
      <button
        type="button"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-teal-500 text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-teal-900"
      >
        <svg
          className="h-5 w-5 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M13.53 14.47a8 8 0 111.414-1.414l3.96 3.96a1 1 0 01-1.414 1.414l-3.96-3.96zM8 14a6 6 0 100-12 6 6 0 000 12z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:text-black"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
