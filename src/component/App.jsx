import React from "react";
import notes from "../notes";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

function App() {
  const noteElement = notes.map((note) => (
    <Note 
      key={note.key} 
      title={note.title} 
      content={note.content} 
    />
  ));
  return (
    <div>
      <Header />
      {noteElement}
      <Footer />
    </div>
  );
}

export default App;