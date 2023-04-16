import React from "react";

function NoteDelete({ id, onDelete }) {
  return (
    <button
      className="button-delete"
      onClick={() => {
        onDelete(id);
      }}
    >
      Delete
    </button>
  );
}

export default NoteDelete;
