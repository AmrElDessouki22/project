'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Note {
  id: string;
  text: string;
}

interface NotesContextType {
  notes: Note[];
  addNote: (text: string) => void;
  deleteNote: (id: string) => void;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export const NotesProvider = ({ children }: { children: ReactNode }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (text: string) => {
    setNotes((prevNotes) => [
      ...prevNotes,
      { id: Date.now().toString(), text },
    ]);
  };

  const deleteNote = (id: string) => {
    setNotes((prevNotes) => prevNotes.filter(note => note.id !== id));
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
};
