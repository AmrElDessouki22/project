'use client';

import { useState } from 'react';
import { useNotes } from '@/contexts/NotesContext';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function AddNote() {
  const [text, setText] = useState('');
  const { addNote } = useNotes();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addNote(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new note"
      />
      <Button type="submit">Add Note</Button>
    </form>
  );
}