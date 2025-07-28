"use client";

import { useNotesContext } from '../../contexts/NotesContext';

export default function NoteItem({ id, content }) {
  const { deleteNote } = useNotesContext();

  return (
    <div className="flex justify-between items-center p-2 border-b">
      <span className="text-black">{content}</span> {/* Ensure note text is black */}
      <button onClick={() => deleteNote(id)} className="text-red-500">Delete</button>
    </div>
  );
}
