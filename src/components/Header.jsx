import React from "react";
import NoteSearch from "./NoteSearch";

const Header = ({ search, onSearchChange }) => {
  return (
    <header className="note-app__header">
      <h1>Note App</h1>
      <NoteSearch search={search} onSearchChange={onSearchChange} />
    </header>
  );
};

export default Header;
