'use client';

import { useNotes } from '@/contexts/NotesContext';

interface NoteItemProps {
  note: { id: string; text: string };
}

export default function NoteItem({ note }: NoteItemProps) {
  const { deleteNote } = useNotes();

  return (
    <div className="flex justify-between items-center p-2 bg-white rounded mb-2 shadow">
      <span>{note.text}</span>
      <button onClick={() => deleteNote(note.id)} className="text-red-500">Delete</button>
    </div>
  );
}