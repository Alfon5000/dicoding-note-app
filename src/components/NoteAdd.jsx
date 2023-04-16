import React from "react";

const NoteAdd = ({ title, body, onAdd, onTitleChange, onBodyChange }) => {
  return (
    <section className="note-add">
      <form method="post" onSubmit={onAdd}>
        <div className="form-element">
          <small>Remaining title characters: {50 - title.length}</small>
        </div>
        <div className="form-element">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            className="input-title"
            onChange={onTitleChange}
            value={title}
            required
          />
        </div>
        <div className="form-element">
          <label htmlFor="body">Body</label>
          <textarea
            name="body"
            id="body"
            className="input-body"
            onChange={onBodyChange}
            value={body}
            required
          ></textarea>
        </div>
        <div className="form-element">
          <button type="submit" className="button-add">
            Add
          </button>
        </div>
      </form>
    </section>
  );
};

export default NoteAdd;
