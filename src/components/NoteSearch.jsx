import React from "react";

const NoteSearch = ({ search, onSearchChange }) => {
  return (
    <div className="note-search">
      <input
        type="search"
        name="search"
        className="note-search__input"
        placeholder="Search note..."
        value={search}
        onChange={onSearchChange}
      />
    </div>
  );
};

export default NoteSearch;
