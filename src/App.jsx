import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Editnote from "./pages/EditNote";
import CreateNote from "./pages/CreateNote";
import { useEffect, useState } from "react";

export const App = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);

  useEffect (() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <main id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes notes={notes} />} />
          <Route path="/create-note" element={<CreateNote setNotes={setNotes} />} />
          <Route
            path="/edit-note/:id"
            element={<Editnote notes={notes} setNotes={setNotes} />}
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;