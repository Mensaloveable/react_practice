import React, { useState } from "react";
// import notes from "../notes";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

function App() {
  const [notes, setNotes] = useState([]);

  
  function addNote(newNote) {
    setNotes(prevNote => {
      return [...prevNote, newNote]
    });
    // console.log(note);
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
    // console.log("delete");

    
  }
  
  const noteElement = notes.map((note, index) => (
    <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote} />
  ));

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {noteElement}
      <Footer />
    </div>
  );
}

export default App;

//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/
