import React, { useState } from "react";

function Add({ setNotes }) {
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
    date: "add later",
    mark: false,
  });

  const handleAddTask = () => {
    setNotes(newNote);
    setNewNote({
      title: "",
      content: "",
      date: "add later",
      mark: false,
    });
  };
  return (
    <div className="add-wrap">
      <h1>Note</h1>
      <input
        onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
        value={newNote.title}
        className="add-title"
        placeholder="Enter title..."
      ></input>
      <textarea
        onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
        value={newNote.content}
        className="add-content"
        rows="5"
        column="2"
        placeholder="Enter content..."
      ></textarea>
      <button onClick={() => handleAddTask()} className="add-btn">
        Add
      </button>
    </div>
  );
}

export default Add;
