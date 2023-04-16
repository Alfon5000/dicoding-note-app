import React from "react";
import NoteAdd from "./NoteAdd";
import NoteList from "./NoteList";

const Main = ({
  notes,
  title,
  body,
  search,
  onAdd,
  onTitleChange,
  onBodyChange,
  onMove,
  onDelete,
}) => {
  return (
    <main className="note-app__main">
      <h2 className="note-add__title">Add Note</h2>
      <NoteAdd
        title={title}
        body={body}
        onAdd={onAdd}
        onTitleChange={onTitleChange}
        onBodyChange={onBodyChange}
      />
      <h2 className="note-list__title-active">Active Notes</h2>
      <NoteList
        notes={notes.filter((note) => note.archived === false)}
        search={search}
        onMove={onMove}
        onDelete={onDelete}
      />
      <h2 className="note-list__title-archived">Archived Notes</h2>
      <NoteList
        notes={notes.filter((note) => note.archived === true)}
        search={search}
        onMove={onMove}
        onDelete={onDelete}
      />
    </main>
  );
};

export default Main;
