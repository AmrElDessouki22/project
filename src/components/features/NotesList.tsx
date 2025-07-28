"use client";

import { useNotesContext } from '../../contexts/NotesContext';
import NoteItem from './NoteItem';

export default function NotesList() {
  const { notes } = useNotesContext();

  return (
    <div>
      {notes.map((note) => (
        <NoteItem key={note.id} id={note.id} content={note.content} />
      ))}
    </div>
  );
}
