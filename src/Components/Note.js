import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faStar } from "@fortawesome/free-solid-svg-icons";
function Note({handleMark, handleDelete, note, id}) {
  
  return (
    <div className="note">
      <div className="note-title">{(note.title == "")? "New Note" :note.title}</div>
      <div 
        onClick={() => handleMark(id, note.mark)}
        className={(note.mark == true)? "icon star-s" : "icon star"}> <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> </div>
      <div 
        onClick={() => handleDelete(id)}
        className="icon delete"> <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> </div>
      <div className={(note.mark == true)? "note-content-s" : "note-content" }>{note.content}</div>
      <div className="note-footer"> <div className="note-date">{note.date}</div></div>
    </div>
  );
}

export default Note;
