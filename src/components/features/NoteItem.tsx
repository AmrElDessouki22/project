import { Note } from '@/types'
import { useNotes } from '@/contexts/NotesContext'

interface NoteItemProps {
  note: Note
}

export default function NoteItem({ note }: NoteItemProps) {
  const { deleteNote } = useNotes()

  return (
    <li className="mb-4 p-4 border rounded shadow">
      <h3 className="text-xl font-bold">{note.title}</h3>
      <p>{note.content}</p>
      <button 
        onClick={() => deleteNote(note.id)}
        className="text-red-500 mt-2"
      >
        Delete
      </button>
    </li>
  )
}