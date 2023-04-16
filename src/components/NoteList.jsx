import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, search, onMove, onDelete }) => {
  let list;

  if (notes.length > 0) {
    if (search.length > 0 && search.trim() !== "") {
      list = notes
        .filter((note) =>
          note.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((note) => (
          <NoteItem
            note={note}
            key={note.id}
            onMove={onMove}
            onDelete={onDelete}
          />
        ));
    } else {
      list = notes.map((note) => (
        <NoteItem
          note={note}
          key={note.id}
          onMove={onMove}
          onDelete={onDelete}
        />
      ));
    }
  } else {
    list = <h3 className="note-list__empty">Note list is empty!</h3>;
  }

  return <section className="note-list">{list}</section>;
};

export default NoteList;
