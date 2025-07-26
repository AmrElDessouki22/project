import { useNotes } from '@/contexts/NotesContext'
import NoteItem from './NoteItem'

export default function NoteList() {
  const { notes } = useNotes()

  return (
    <div>
      {notes.length === 0 ? (
        <p>No notes available. Create one!</p>
      ) : (
        <ul>
          {notes.map(note => (
            <NoteItem key={note.id} note={note} />
          ))}
        </ul>
      )}
    </div>
  )
}