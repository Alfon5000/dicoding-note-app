import React from "react";

const NoteContent = ({ title, body, createdAt }) => {
  return (
    <div className="note-content">
      <h3 className="note-title">{title}</h3>
      <small className="note-date">{createdAt}</small>
      <p className="note-body">{body}</p>
    </div>
  );
};

export default NoteContent;
