"use client";

import { useState } from 'react';
import { useNotesContext } from '../../contexts/NotesContext';
import Input from '../ui/Input';
import Button from '../ui/Button';

export default function AddNote() {
  const [note, setNote] = useState('');
  const { addNote } = useNotesContext();

  const handleAddNote = () => {
    if (note.trim()) {
      addNote(note);
      setNote('');
    }
  };

  return (
    <div className="mb-4">
      <Input
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Add a new note..."
        className="w-full mb-2 text-black"
        style={{color: 'black'}}
      />
      <Button onClick={handleAddNote} className="w-full text-black">Add Note</Button>
    </div>
  );
}
