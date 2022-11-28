import Note from "./Note";
import React, { useState } from "react";

function NoteList({ notes, setNotes }) {
  const functionDelete = (id) => {
    setNotes(notes.filter((note, index) => !(index == id)));
    console.log(notes);
  };
  const functionMark = (id, mark) => {
    setNotes(
      notes.map((note, index) => {
        if (index == id) {
          return {
            ...note, mark: !mark,
          };
        } else {
          return {
            ...note
          }
        }
      })
    );
  };
  return (
    <div className="notes-list">
      {notes.map((note, index) => (
        <Note
          key={index}
          note={note}
          id={index}
          // mark = {note.mark}
          // title = {note.title}
          // content = {note.content}
          // date = {note.date}
          // handleDelete = {() => functionDelete(index)}
          handleMark={() => functionMark(index, note.mark)}
          handleDelete={() => functionDelete(index)}
        ></Note>
      ))}
    </div>
  );
}

export default NoteList;
