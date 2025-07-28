"use client";

import { createContext, useContext, useState } from 'react';

const NotesContext = createContext();

export function NotesProvider({ children }) {
  const [notes, setNotes] = useState([]);

  const addNote = (content) => {
    setNotes((prevNotes) => [...prevNotes, { id: Date.now(), content }]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
}

export const useNotesContext = () => useContext(NotesContext);
