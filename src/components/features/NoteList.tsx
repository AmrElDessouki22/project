'use client'

import { useNotes } from '@/contexts/NotesContext'
import NoteItem from './NoteItem'

export default function NoteList() {
  const { notes } = useNotes()

  return (
    <div className="mt-6">
      {notes.length > 0 ? (
        notes.map(note => <NoteItem key={note.id} note={note} />)
      ) : (
        <p>No notes available. Start adding some!</p>
      )}
    </div>
  )
}