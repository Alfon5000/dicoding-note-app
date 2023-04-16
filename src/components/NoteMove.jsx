import React from "react";

function NoteMove({ id, archived, onMove }) {
  let className = "";
  let value = "";

  if (archived === false) {
    className = "button-archive";
    value = "Archive";
  } else {
    className = "button-unarchive";
    value = "Unarchive";
  }

  return (
    <button
      className={className}
      onClick={() => {
        return onMove(id);
      }}
    >
      {value}
    </button>
  );
}

export default NoteMove;
