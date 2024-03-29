import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  // const [notes, setNotes] = useState([]);
  const [notes, setNotes] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("notes");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const [noteEditing, setNoteEditing] = useState("");

  const addNote = (e) => {
    e.preventDefault();
    const newNote = {
      id: Math.random().toString(36).substr(2, 9),
      text: e.target.note.value,
    };
    setNotes([...notes, newNote]);
    e.target.note.value = "";
  };

  const deleteNote = (idToDelete) => {
    const filteredNotes = notes.filter((note) => note.id !== idToDelete);
    setNotes(filteredNotes);
  };

  useEffect(() => {
    const json = JSON.stringify(notes);
    localStorage.setItem("notes", json);
  }, [notes]);

  // useEffect(() => {
  //   const json = localStorage.getItem("notes");
  //   const savedNotes = JSON.parse(json);
  //   if (savedNotes) {
  //     setNotes(savedNotes);
  //   }
  // }, []);

  const submitEdits = (event, idToEdit) => {
    event.preventDefault();
    const updatedNotes = notes.map((note) => {
      if (note.id === idToEdit) {
        return {
          id: note.id,
          text: event.target.note.value,
        };
      } else {
        return note;
      }
    });
    setNotes(updatedNotes);
    setNoteEditing("");
  };

  return (
    <div className="App">
      <h1>Local Storage Demo</h1>
      <form onSubmit={addNote}>
      <input type="text" name="note" />
      <input type="submit" value="Submit" />
      {/* <input type="submit" value="Submit" disabled={!notes.length} /> */}
    </form>
    {notes.map((note) => (
  <div key={note.id}>
    {note.id !== noteEditing ? (
      <div>{note.text}</div>
      ) : (
      <form onSubmit={(e) => submitEdits(e, note.id)}>
        <textarea name="note" defaultValue={note.text}></textarea>
        <button type="submit"> Submit Edits</button>
      </form>
    )}
    <button onClick={() => deleteNote(note.id)}>delete</button>
    {note.id !== noteEditing ? <button onClick={() => setNoteEditing(note.id)}>edit</button>
  : null  
  }
  </div>
))}
    </div>
  );
};

export default App;