import React from "react";
import notes from "../notes";
import CreateArea from "./CreateArea";
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
      <CreateArea />
      {noteElement}
      <Footer />
    </div>
  );
}

export default App;