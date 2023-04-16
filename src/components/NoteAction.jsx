import React from "react";
import NoteMove from "./NoteMove";
import NoteDelete from "./NoteDelete";

const NoteAction = ({ id, archived, onMove, onDelete }) => {
  return (
    <div className="note-action">
      <NoteMove id={id} archived={archived} onMove={onMove} />
      <NoteDelete id={id} onDelete={onDelete} />
    </div>
  );
};

export default NoteAction;
