import React from "react";
import NoteContent from "./NoteContent";
import NoteAction from "./NoteAction";

const NoteItem = ({ note, onMove, onDelete }) => {
  return (
    <div className="note-item">
      <NoteContent
        title={note.title}
        createdAt={note.createdAt}
        body={note.body}
      />
      <NoteAction
        id={note.id}
        archived={note.archived}
        onMove={onMove}
        onDelete={onDelete}
      />
    </div>
  );
};

export default NoteItem;
