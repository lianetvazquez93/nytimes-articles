import React, { useState } from "react";
import { useAppSelector } from "../../app/hooks";

interface SearchBarProps {
  onSearchTermSubmit: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchTermSubmit }) => {
  const searchTerm = useAppSelector((state: any) => state.searchTerm.term);
  const [term, setTerm] = useState<string>(searchTerm);

  const onFormSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    onSearchTermSubmit(term);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label className="subtitle">Type search query term in here:</label>
      <div className="custom-input">
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <svg xmlns="http://www.w3.org/2000/svg" className="input-icon">
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </form>
  );
};

export default SearchBar;
