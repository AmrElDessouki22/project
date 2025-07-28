'use client';

import { useNotes } from '@/contexts/NotesContext';
import NoteItem from '@/components/features/NoteItem';

export function NotesList() {
  const { notes } = useNotes();

  return (
    <div>
      {notes.map(note => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
}