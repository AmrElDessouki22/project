'use client';

import { useState } from 'react';
import NoteItem from './NoteItem';
import { useNotes } from '@/contexts/NotesContext';

const NotesList = () => {
  const { notes } = useNotes();
  const [filter, setFilter] = useState('');

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search notes..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <ul>
        {filteredNotes.map(note => (
          <NoteItem key={note.id} note={note} />
        ))}
      </ul>
    </div>
  );
};

export default NotesList;
