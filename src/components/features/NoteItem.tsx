'use client';

import { Note } from '@/types';

interface NoteItemProps {
  note: Note;
}

const NoteItem = ({ note }: NoteItemProps) => {
  return (
    <li className="border-b py-2">
      <h3 className="text-lg font-semibold">{note.title}</h3>
      <p>{note.content}</p>
    </li>
  );
};

export default NoteItem;
