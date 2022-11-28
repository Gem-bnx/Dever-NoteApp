import { useState, useEffect } from "react";
import "./App.css";
import Add from "./Components/Add.js";
// import Note from "./Components/Note.js";
import NoteList from "./Components/NoteList";
function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes-list'))??[]);
  useEffect(() => {
    localStorage.setItem('notes-list', JSON.stringify(notes))
  }, [notes])
  
  return (
    <div className="container">
      <Add
        setNotes = {(newNote) => setNotes([newNote, ...notes])}
      ></Add>
      <NoteList 
        setNotes = {(notes) => setNotes(notes)}
        notes={notes}
      ></NoteList>
    </div>
  );
}

export default App;
