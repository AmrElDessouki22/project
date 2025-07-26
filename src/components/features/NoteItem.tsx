'use client'

import { useNotes } from '@/contexts/NotesContext'
import Button from '@/components/ui/Button'

interface NoteItemProps {
  note: {
    id: string
    title: string
    content: string
  }
}

export default function NoteItem({ note }: NoteItemProps) {
  const { deleteNote } = useNotes()

  return (
    <div className="p-4 border rounded mb-2">
      <h2 className="font-bold">{note.title}</h2>
      <p>{note.content}</p>
      <Button onClick={() => deleteNote(note.id)} className="mt-2 bg-red-500">
        Delete
      </Button>
    </div>
  )
}